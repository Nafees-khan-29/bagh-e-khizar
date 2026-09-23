import AboutTeaser from "../components/Home/AboutTeaser"
import AudienceSections from "../components/Home/AudienceSection"
import FeaturedBook from "../components/Home/FeaturedBook"
import Hero from "../components/Home/Hero"
import PublishingFocusCards from "../components/Home/Publication"
import ReadingCircleSignup from "../components/Home/ReadingCycle"
import SEO from "../components/SEO/SEO"

export default function Home() {
  return (
    <>
      <SEO
        title="Bagh-e-Khizar"
        description="Bagh-e-Khizar is a space for knowledge, spirituality, literature and cultural heritage, bringing meaningful books and ideas to readers."
        path="/"
      />
      <Hero/>
      <AboutTeaser/>
      <FeaturedBook/>
      <PublishingFocusCards/>
      <AudienceSections/>
      <ReadingCircleSignup/>
    </>
  )
}