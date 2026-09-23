import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />

      <section className="min-h-screen flex items-center justify-center bg-[#050D08] px-6 text-center">
        <div className="max-w-2xl">

          {/* 404 */}
          <p className="font-[Amiri] text-7xl sm:text-8xl font-bold text-[#D4AF37]/50 mb-4">
            404
          </p>

          {/* Heading */}
          <h1 className="font-[Amiri] text-3xl sm:text-4xl md:text-5xl text-[#F4F0E5] mb-4">
            This path has grown over.
          </h1>

          {/* Description */}
          <p className="text-[#F4F0E5]/70 text-base sm:text-lg leading-relaxed mb-8">
            The page you're looking for doesn't exist, or may have moved.
          </p>

          {/* Return Home */}
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md
                       bg-[#D4AF37] text-[#050D08] font-medium
                       hover:bg-[#E5C158] transition-colors duration-300"
          >
            Return Home
          </Link>

        </div>
      </section>
    </>
  );
}