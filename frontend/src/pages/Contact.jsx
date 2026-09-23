import ContactComponent from "../components/Contact/ContactComponent"
import SEO from "../components/SEO/SEO"

export default function Contact() {
  return (
  <>
    <SEO
      title="Contact"
      description="Contact Bagh-e-Khizar for enquiries about publications, educational initiatives, manuscripts, collaborations and other general enquiries."
      path="/contact-us"
    />
    <ContactComponent/>
  </>
  )
}