import React, { useId, useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

type TextField = {
  name: string
  label: string
  type: 'text' | 'tel' | 'email'
  required?: boolean
  autoComplete?: string
}

const textFields: TextField[] = [
  { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'equipmentType', label: 'Equipment type', type: 'text' },
  { name: 'manufacturer', label: 'Manufacturer', type: 'text' },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'serial', label: 'Serial number', type: 'text' },
  { name: 'partNumber', label: 'Part number', type: 'text' },
  { name: 'site', label: 'Site / location', type: 'text' },
]

const fileFields = [
  { name: 'nameplate', label: 'Nameplate photo', multiple: false },
  { name: 'photo', label: 'Equipment photo', multiple: false },
  { name: 'docs', label: 'Technical documents', multiple: true },
]

const inputClass =
  'mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sisAccent focus:border-sisAccent'

const QuoteForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const fieldPrefix = useId()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')
    setErrorMessage(null)

    try {
      const res = await fetch('/api/enquiry', { method: 'POST', body: formData })

      if (res.ok) {
        setStatus('sent')
        form.reset()
        return
      }

      // 4xx messages explain what the sender needs to change, so show them.
      // 5xx messages describe an internal fault and mean nothing to a customer.
      const body = res.status < 500 ? await res.json().catch(() => null) : null
      setErrorMessage(
        body?.error ??
          'We could not send your enquiry right now. Please try again, or call us on +61 447 553 353.',
      )
      setStatus('error')
    } catch {
      setErrorMessage('We could not reach the server. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="request-quote" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Request a Quote</h2>
        <p className="mt-2 text-sisSteel">
          Send us the equipment details and we&apos;ll review your requirement.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          encType="multipart/form-data"
        >
          {textFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={`${fieldPrefix}-${field.name}`} className="block text-sm font-medium">
                {field.label}
                {field.required && (
                  <span className="text-red-600" aria-hidden="true">
                    {' '}
                    *
                  </span>
                )}
              </label>
              <input
                id={`${fieldPrefix}-${field.name}`}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={field.autoComplete}
                className={inputClass}
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label htmlFor={`${fieldPrefix}-description`} className="block text-sm font-medium">
              Description of requirement
              <span className="text-red-600" aria-hidden="true">
                {' '}
                *
              </span>
            </label>
            <textarea
              id={`${fieldPrefix}-description`}
              name="description"
              rows={4}
              required
              className={inputClass}
            />
          </div>

          <fieldset className="md:col-span-2 flex flex-col sm:flex-row gap-4">
            <legend className="text-sm font-medium">Attachments (optional)</legend>
            {fileFields.map((field) => (
              <div key={field.name} className="mt-2">
                <label htmlFor={`${fieldPrefix}-${field.name}`} className="block text-sm">
                  {field.label}
                </label>
                <input
                  id={`${fieldPrefix}-${field.name}`}
                  type="file"
                  name={field.name}
                  multiple={field.multiple}
                  className="mt-1 text-sm"
                />
              </div>
            ))}
          </fieldset>

          <div className="md:col-span-2">
            <label htmlFor={`${fieldPrefix}-urgent`} className="text-sm">
              <input
                id={`${fieldPrefix}-urgent`}
                type="checkbox"
                name="urgent"
                className="mr-2"
              />
              Urgent Breakdown Requirement
            </label>
          </div>

          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-sisCharcoal text-white px-6 py-3 rounded disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'SENDING…' : 'SUBMIT ENQUIRY'}
            </button>

            <p role="status" aria-live="polite" className="text-sm">
              {status === 'sent' && (
                <span className="text-green-700">
                  Thanks — we&apos;ve received your enquiry and will respond shortly.
                </span>
              )}
              {status === 'error' && <span className="text-red-700">{errorMessage}</span>}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
