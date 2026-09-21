import AboutTeaser from "../components/Home/AboutTeaser"
import AudienceSections from "../components/Home/AudienceSection"
import FeaturedBook from "../components/Home/FeaturedBook"
import Hero from "../components/Home/Hero"
import PublishingFocusCards from "../components/Home/Publication"
import ReadingCircleSignup from "../components/Home/ReadingCycle"

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutTeaser/>
      <FeaturedBook/>
      <PublishingFocusCards/>
      <AudienceSections/>
      <ReadingCircleSignup/>
    </>
  )
}