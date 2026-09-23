
import AboutComponent from "../components/About/AboutComponent"
import SEO from "../components/SEO/SEO"
export default function About() {
  return (
    <>
    <SEO
      title="About Bagh-e-Khizar"
      description="Discover the vision of Bagh-e-Khizar, a space dedicated to knowledge, spirituality, literature, cultural heritage and meaningful intellectual engagement."
      path="/about"
    />
    

      <AboutComponent />
    </>
  )
}