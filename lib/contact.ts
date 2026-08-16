export const ENQUIRY_EMAIL = 'info@sherriffindustrysolutions.com'

// The address is published only as a mailto target — it is deliberately never
// rendered as visible text, and no phone number appears on the site at all.
export const ENQUIRY_MAILTO = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent('Equipment Enquiry')}`

/** Honeypot input name, shared so the form and the handler cannot drift apart.
 *  Deliberately not a name browser autofill recognises. */
export const HONEYPOT_FIELD = 'enquiryRef'
