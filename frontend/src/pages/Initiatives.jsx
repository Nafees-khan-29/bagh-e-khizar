import Initiatives from "../components/Initiative/InitiativeComponent";
import SEO from "../components/SEO/SEO"

export default function Initiative() {
    return (
        <>
            <SEO
                title="Initiatives"
                description="Explore the educational and cultural initiatives of Bagh-e-Khizar, supporting knowledge, learning, heritage and meaningful intellectual engagement."
                path="/initiatives"
            />
            <Initiatives />
        </>
    )
}