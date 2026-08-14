import LegalPage from '../components/LegalPage'
import { ENQUIRY_MAILTO } from '../lib/contact'

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How SIS Equipment Group collects, uses and protects the information you send through this website."
      lastUpdated="14 August 2026"
    >
      <section>
        <h2>About this policy</h2>
        <p>
          This policy explains how SIS Equipment Group (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
          personal information collected through this website. It covers this website only.
        </p>
      </section>

      <section>
        <h2>What we collect</h2>
        <p>
          We only collect what you choose to send us. If you submit the enquiry form, that is:
        </p>
        <ul>
          <li>your name, company, phone number and email address</li>
          <li>equipment details such as type, manufacturer, model, serial number and part number</li>
          <li>the site or location the equipment is at</li>
          <li>your description of the requirement, and whether it is an urgent breakdown</li>
          <li>any files you attach, such as nameplate photographs or technical documents</li>
        </ul>
        <p>
          If you contact us by email instead, we receive whatever you include in that message.
        </p>
      </section>

      <section>
        <h2>Why we collect it</h2>
        <p>
          To respond to your enquiry, prepare a quotation, and carry out any work that follows. We do
          not use your details for marketing, and we do not add you to a mailing list.
        </p>
      </section>

      <section>
        <h2>How your enquiry reaches us</h2>
        <p>
          Enquiry form submissions are delivered to us as email through Twilio SendGrid, our email
          delivery provider. Any files you attach are held on the server only for as long as it takes
          to prepare that email, and are then deleted.
        </p>
        <p>
          SendGrid processes and stores data outside Australia, including in the United States. By
          submitting the form you consent to that overseas disclosure for the purpose of delivering
          your enquiry to us.
        </p>
      </section>

      <section>
        <h2>Cookies, analytics and tracking</h2>
        <p>
          This website does not set cookies, does not use analytics, and does not track you across
          other websites. There are no advertising or social media tracking scripts on this site.
        </p>
      </section>

      <section>
        <h2>Who we share it with</h2>
        <p>
          We do not sell or rent your information. We may share the technical details of your
          requirement with suppliers, repairers or partners where that is necessary to source
          equipment or price the work you have asked about. We may also disclose information where we
          are required to by law.
        </p>
      </section>

      <section>
        <h2>How long we keep it</h2>
        <p>
          We keep enquiries for as long as needed to deal with your requirement and any resulting
          work, and afterwards where we need to for business records or to meet legal obligations.
        </p>
      </section>

      <section>
        <h2>Accessing or correcting your information</h2>
        <p>
          You can ask us what information we hold about you, ask us to correct it, or ask us to delete
          it. <a href={ENQUIRY_MAILTO}>Send us an enquiry</a> and we will respond. If we cannot action
          a request, we will explain why.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We take reasonable steps to protect the information we hold from misuse, loss and
          unauthorised access. No method of transmission over the internet is completely secure, so
          please consider that before sending us sensitive material.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The current version is always the one published
          on this page, with the date it was last updated shown above.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          For any question about this policy or about how we handle your information,{' '}
          <a href={ENQUIRY_MAILTO}>send us an enquiry</a>.
        </p>
      </section>
    </LegalPage>
  )
}
