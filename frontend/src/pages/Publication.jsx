import Publications from "../components/Publication/PublicationComponent";
import SEO from "../components/SEO/SEO"

export default function Publication() {
  return (
    <>
      <SEO
        title="Publications"
        description="Explore Bagh-e-Khizar Publications, featuring books and works dedicated to knowledge, literature, history, spirituality and cultural heritage."
        path="/publications"
      />
      <Publications />
    </>
  )
}   