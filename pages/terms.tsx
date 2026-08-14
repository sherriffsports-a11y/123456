import LegalPage from '../components/LegalPage'
import { ENQUIRY_MAILTO } from '../lib/contact'

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms that apply to your use of the SIS Equipment Group website and to enquiries made through it."
      lastUpdated="14 August 2026"
    >
      <section>
        <h2>About these terms</h2>
        <p>
          These terms apply to your use of this website. By using the site you accept them. If you do
          not accept them, please do not use the site.
        </p>
      </section>

      <section>
        <h2>Information on this website</h2>
        <p>
          The content of this site is general information about our capabilities. Specifications,
          equipment availability, turnaround times and lead times are indicative only, can change, and
          are not a guarantee. Nothing on this site should be relied on as technical advice for a
          specific application without confirmation from us in writing.
        </p>
      </section>

      <section>
        <h2>Enquiries and quotations</h2>
        <p>
          Nothing on this site is an offer to sell. Submitting an enquiry does not create a contract
          and does not reserve equipment or workshop capacity. Any work we carry out is subject to a
          written quotation from us and the terms of supply referred to in that quotation.
        </p>
      </section>

      <section>
        <h2>Information you send us</h2>
        <p>
          When you send us drawings, nameplate photographs, technical documents or other material, you
          confirm that you are entitled to share it with us and that doing so does not breach anyone
          else&apos;s rights or an obligation of confidence you owe to someone else.
        </p>
        <p>
          Please do not send us material you consider commercially sensitive without telling us, so we
          can handle it appropriately.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The content, layout, branding and logo on this site belong to us or are used with permission.
          You may view and print pages for your own business use in evaluating our services. Please do
          not otherwise reproduce, republish or adapt them without our permission.
        </p>
      </section>

      <section>
        <h2>Availability of the website</h2>
        <p>
          We aim to keep this site available and its content current, but we do not guarantee
          uninterrupted availability or that the site will be free of errors. We may change or withdraw
          content at any time.
        </p>
      </section>

      <section>
        <h2>Links to other websites</h2>
        <p>
          Where this site links to a third-party website, we do not control that site and are not
          responsible for its content or practices.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          Nothing in these terms excludes, restricts or modifies any right or remedy you have under the
          Australian Consumer Law or any other law that cannot lawfully be excluded.
        </p>
        <p>
          Subject to that, to the extent permitted by law we are not liable for any indirect or
          consequential loss, or for loss of profit, revenue, production or opportunity, arising from
          your use of this website or from reliance on information published on it.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Queensland, Australia, and you submit to the
          non-exclusive jurisdiction of the courts of that State.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The current version is always the one published
          on this page, with the date it was last updated shown above.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          If you have a question about these terms,{' '}
          <a href={ENQUIRY_MAILTO}>send us an enquiry</a>.
        </p>
      </section>
    </LegalPage>
  )
}
