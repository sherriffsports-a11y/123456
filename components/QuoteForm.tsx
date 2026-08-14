import React, { useState } from 'react'

const QuoteForm: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: any) {
    e.preventDefault()
    const form = new FormData(e.target)
    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', body: form })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="request-quote" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Request a Quote</h2>
        <p className="mt-2 text-sisSteel">Send us the equipment details and we'll review your requirement.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" encType="multipart/form-data">
          <input name="name" placeholder="Name" className="border p-2 rounded" required />
          <input name="company" placeholder="Company" className="border p-2 rounded" />
          <input name="phone" placeholder="Phone" className="border p-2 rounded" />
          <input name="email" type="email" placeholder="Email" className="border p-2 rounded" required />

          <input name="equipmentType" placeholder="Equipment type" className="border p-2 rounded" />
          <input name="manufacturer" placeholder="Manufacturer" className="border p-2 rounded" />
          <input name="model" placeholder="Model" className="border p-2 rounded" />
          <input name="serial" placeholder="Serial number" className="border p-2 rounded" />

          <input name="partNumber" placeholder="Part number" className="border p-2 rounded" />
          <input name="site" placeholder="Site / location" className="border p-2 rounded" />

          <textarea name="description" placeholder="Description of requirement" className="col-span-1 md:col-span-2 border p-2 rounded" rows={4}></textarea>

          <div className="col-span-1 md:col-span-2 flex gap-4 items-center">
            <label className="text-sm">Nameplate photo <input type="file" name="nameplate" className="ml-2" /></label>
            <label className="text-sm">Equipment photo <input type="file" name="photo" className="ml-2" /></label>
            <label className="text-sm">Technical documents <input type="file" name="docs" className="ml-2" multiple /></label>
          </div>

          <label className="col-span-1 md:col-span-2 text-sm">
            <input type="checkbox" name="urgent" className="mr-2" /> Urgent Breakdown Requirement
          </label>

          <div className="col-span-1 md:col-span-2">
            <button type="submit" className="bg-sisCharcoal text-white px-6 py-3 rounded">SUBMIT ENQUIRY</button>
            {status === 'sending' && <span className="ml-4 text-sm text-sisSteel">Sending...</span>}
            {status === 'sent' && <span className="ml-4 text-sm text-green-600">Sent — we'll review and respond.</span>}
            {status === 'error' && <span className="ml-4 text-sm text-red-600">There was an error. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
