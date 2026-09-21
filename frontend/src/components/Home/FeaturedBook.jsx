import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";
import bookImage from "../../assets/book.jpeg";


/* ============================================================
   RESPONSIVE STRATEGY
   ------------------------------------------------------------
   < 768px        Phones + small tablets. Single column: book
                  first, text below. Fluid type, full-width CTA,
                  content animates UP (not sideways).
   768 - 1023px   Tablets. Two columns (narrower gap), so the
                  book never becomes a giant single-column image.
   >= 1024px      Laptop / desktop. ORIGINAL composition preserved.
   >= 1920px      Ultra-wide / 2K / 4K. Everything scales up in
                  proportion through one CSS variable (--u).

   Also handled: 280px foldables (eyebrow / CTA no longer overflow),
   44px minimum touch target on the text link, safe-area insets in
   landscape, reduced-motion (via MotionConfig), and a scroll-reveal
   that can never leave tall content invisible on short screens.

   Class-group order inside each className string:
     base (phones) -> sm -> md -> lg -> ultra-wide (1920+)
   ============================================================ */


// ============================================================
// ORDER BUTTON — where "Order Your Copy" goes (edit this)
// ============================================================
//
// Currently: the Amazon page for the book.
//
// Other options, if you ever want to change it:
//
//   "/contact?enquiry=books"
//        Your own contact form, with "Books & Publications" pre-selected.
//        (Change /contact if your contact page has a different path.)
//
//   "https://wa.me/916362448411?text=Hello%2C%20I%20would%20like%20to%20order%20a%20copy%20of%20The%20Indian%20Export%20Handbook."
//        Opens a WhatsApp chat with the message already typed.
//
// Links that start with http open in a new tab; everything else stays
// inside your site.

const ORDER_LINK = "https://amzn.in/d/0bYYgqOi";

const isExternal = /^https?:\/\//.test(ORDER_LINK);

const OrderTag = isExternal ? "a" : Link;

const orderProps = isExternal
  ? { href: ORDER_LINK, target: "_blank", rel: "noopener noreferrer" }
  : { to: ORDER_LINK };


// ============================================================
// MEDIA QUERY HOOK
// Used to pick the right entrance animation for the layout
// (slide up when stacked, slide in from the side when two-column).
// ============================================================

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);

    setMatches(mql.matches);
    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}


function FeaturedBook() {
  // Matches Tailwind's `md` breakpoint, where the layout becomes two columns.
  const isTwoColumn = useMediaQuery("(min-width: 768px)");

  return (
    <MotionConfig reducedMotion="user">
      <section
        className="
          relative
          overflow-hidden
          bg-[#172D20]

          pl-[max(6vw,env(safe-area-inset-left))]
          pr-[max(6vw,env(safe-area-inset-right))]
          py-28

          md:py-36

          lg:py-44

          min-[1920px]:py-[calc(176*var(--u))]

          [--u:1px]
          min-[1920px]:[--u:calc(100vw/1920)]
        "
      >

        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Large circular ornament */}

          <div
            className="
              absolute -left-60 top-1/2
              h-[500px] w-[500px]
              -translate-y-1/2 rounded-full
              border border-[#D6AD55]/10

              md:h-[700px] md:w-[700px]

              min-[1920px]:left-[calc(-240*var(--u))]
              min-[1920px]:h-[calc(700*var(--u))]
              min-[1920px]:w-[calc(700*var(--u))]
            "
          />

          <div
            className="
              absolute -left-40 top-1/2
              h-[380px] w-[380px]
              -translate-y-1/2 rounded-full
              border border-[#F4F0E5]/5

              md:h-[550px] md:w-[550px]

              min-[1920px]:left-[calc(-160*var(--u))]
              min-[1920px]:h-[calc(550*var(--u))]
              min-[1920px]:w-[calc(550*var(--u))]
            "
          />

          {/* Small decorative elements */}

          <div
            className="
              absolute right-[10%] top-[18%]
              h-2 w-2 rounded-full bg-[#D6AD55]/60

              min-[1920px]:h-[calc(8*var(--u))]
              min-[1920px]:w-[calc(8*var(--u))]
            "
          />

          <div
            className="
              absolute bottom-[20%] right-[7%]
              h-1.5 w-1.5 rounded-full bg-[#F4F0E5]/30

              min-[1920px]:h-[calc(6*var(--u))]
              min-[1920px]:w-[calc(6*var(--u))]
            "
          />

          {/* Fine vertical line */}

          <div className="absolute right-[18%] top-0 h-full w-px bg-[#D6AD55]/5" />

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            relative z-10 mx-auto
            max-w-[1250px]

            min-[1920px]:max-w-[calc(1250*var(--u))]
          "
        >

          <div
            className="
              grid items-center gap-16

              md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
              md:gap-12

              lg:gap-24

              min-[1920px]:gap-[calc(96*var(--u))]
            "
          >


            {/* =================================================
                BOOK IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative mx-auto w-full
                max-w-[430px]

                min-[1920px]:max-w-[calc(430*var(--u))]
              "
            >

              {/* Decorative frame */}

              <div
                className="
                  absolute -right-4 -top-4
                  h-full w-full
                  border border-[#D6AD55]/40

                  md:-right-6 md:-top-6

                  min-[1920px]:right-[calc(-24*var(--u))]
                  min-[1920px]:top-[calc(-24*var(--u))]
                "
              />

              {/* Book */}

              <div className="relative overflow-hidden bg-[#0F2117]">

                <img
                  src={bookImage}
                  alt="Featured publication by Bagh-e-Khizar"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.025]"
                />

                {/* Subtle overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1B12]/30 via-transparent to-[#F4F0E5]/5" />

              </div>

            </motion.div>


            {/* =================================================
                TEXT CONTENT

                - Stacked layout: slides UP, reveals as soon as any
                  part is visible (this block can be taller than a
                  small phone screen, so a 25% threshold could
                  never be reached).
                - Two-column layout: original slide-in from the
                  side, 25% threshold.
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                ...(isTwoColumn ? { x: 50 } : { y: 40 }),
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: isTwoColumn ? 0.25 : "some",
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Eyebrow */}

              <div
                className="
                  mb-6 flex items-center gap-3

                  sm:mb-7 sm:gap-4

                  min-[1920px]:mb-[calc(28*var(--u))]
                  min-[1920px]:gap-[calc(16*var(--u))]
                "
              >

                <span
                  className="
                    text-[10px] font-medium uppercase
                    tracking-[0.22em]
                    text-[#B8BDAF]

                    sm:tracking-[0.3em]

                    min-[1920px]:text-[length:calc(10*var(--u))]
                  "
                >
                  Bagh-e-Khizar Publications
                </span>

                <span
                  className="
                    h-px w-8 shrink-0 bg-[#D6AD55]

                    sm:w-12

                    min-[1920px]:w-[calc(48*var(--u))]
                  "
                />

              </div>


              {/* Heading */}

              <h2
                className="
                  font-amiri font-bold
                  leading-[0.95]
                  text-[#F4F0E5]

                  text-[clamp(2.25rem,10vw,3.5rem)]

                  sm:text-[clamp(3.5rem,8vw,4.5rem)]

                  md:text-[clamp(2.8rem,5vw,5.5rem)]

                  min-[1920px]:text-[length:calc(88*var(--u))]
                "
              >

                A book worth

                <br />

                <em className="font-normal text-[#D6AD55]">
                  preserving.
                </em>

              </h2>


              {/* Arabic */}

              <div
                className="
                  mt-6 font-amiri text-2xl text-[#D6AD55]

                  sm:mt-7

                  min-[1920px]:mt-[calc(28*var(--u))]
                  min-[1920px]:text-[length:calc(24*var(--u))]
                "
              >
                كتابٌ يبقى
              </div>


              {/* Description */}

              <p
                className="
                  mt-7
                  max-w-[620px]
                  font-amiri
                  text-[1.15rem]
                  leading-[1.7]
                  text-[#E4DFD2]

                  sm:mt-8
                  sm:text-[1.3rem]

                  lg:text-[1.5rem]

                  min-[1920px]:mt-[calc(32*var(--u))]
                  min-[1920px]:max-w-[calc(620*var(--u))]
                  min-[1920px]:text-[length:calc(24*var(--u))]
                "
              >
                Through Bagh-e-Khizar Publications, we bring forward works
                of literary, historical, spiritual, cultural and intellectual
                significance.
              </p>


              {/* Supporting text */}

              <p
                className="
                  mt-6
                  max-w-[570px]
                  text-[15px]
                  leading-7
                  text-[#AEB7AC]

                  sm:leading-8

                  min-[1920px]:mt-[calc(24*var(--u))]
                  min-[1920px]:max-w-[calc(570*var(--u))]
                  min-[1920px]:text-[length:calc(15*var(--u))]
                  min-[1920px]:leading-[calc(32*var(--u))]
                "
              >
                We believe a good book should do more than occupy a place
                on a bookshelf. It should open a conversation, inspire a
                question, preserve a memory or illuminate a forgotten part
                of our collective heritage.
              </p>


              {/* =================================================
                  FEATURED BOOK STATEMENT
              ================================================= */}

              <div
                className="
                  mt-9 border-l border-[#D6AD55] pl-5

                  sm:mt-10 sm:pl-6

                  min-[1920px]:mt-[calc(40*var(--u))]
                  min-[1920px]:pl-[calc(24*var(--u))]
                "
              >

                <p
                  className="
                    max-w-[520px]
                    font-amiri
                    text-lg
                    italic
                    leading-relaxed
                    text-[#D8C99B]

                    sm:text-xl

                    min-[1920px]:max-w-[calc(520*var(--u))]
                    min-[1920px]:text-[length:calc(20*var(--u))]
                  "
                >
                  “A work of enduring value, presented with care,
                  authenticity and thoughtful attention.”
                </p>

              </div>


              {/* =================================================
                  CTA
                  Primary: Order Your Copy (filled gold button)
                  Secondary: Explore the publication (text link)
              ================================================= */}

              <div
                className="
                  mt-10 flex flex-col gap-6

                  sm:mt-12
                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-x-8
                  sm:gap-y-6

                  min-[1920px]:mt-[calc(48*var(--u))]
                  min-[1920px]:gap-x-[calc(32*var(--u))]
                  min-[1920px]:gap-y-[calc(24*var(--u))]
                "
              >

                {/* Order Your Copy */}

                <OrderTag
                  {...orderProps}
                  className="
                    group
                    inline-flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D6AD55]
                    px-8
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#10251A]
                    transition-all
                    duration-300
                    motion-reduce:transition-none

                    hover:bg-[#E7C76C]
                    hover:shadow-[0_8px_30px_rgba(214,173,85,0.18)]
                    active:scale-[0.98]

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#E7C76C]

                    sm:w-auto

                    min-[1920px]:min-h-[calc(48*var(--u))]
                    min-[1920px]:gap-[calc(12*var(--u))]
                    min-[1920px]:px-[calc(32*var(--u))]
                    min-[1920px]:text-[length:calc(11*var(--u))]
                  "
                >

                  <span>
                    Order Your Copy
                  </span>

                  {isExternal && (
                    <span className="sr-only">(opens in a new tab)</span>
                  )}

                  <span
                    className="
                      text-base
                      transition-transform
                      duration-300
                      motion-reduce:transition-none
                      group-hover:translate-x-1

                      min-[1920px]:text-[length:calc(16*var(--u))]
                    "
                    aria-hidden="true"
                  >
                    →
                  </span>

                </OrderTag>


                {/* Explore the publication */}

                <Link
                  to="/publications"
                  className="
                    group
                    inline-flex
                    min-h-11
                    w-fit
                    max-w-full
                    items-center
                    gap-4
                    border-b
                    border-[#D6AD55]/60
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#F4F0E5]
                    transition-all
                    duration-300
                    motion-reduce:transition-none

                    hover:border-[#D6AD55]
                    hover:text-[#D6AD55]

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#E7C76C]

                    sm:tracking-[0.22em]

                    min-[1920px]:min-h-[calc(44*var(--u))]
                    min-[1920px]:gap-[calc(16*var(--u))]
                    min-[1920px]:text-[length:calc(11*var(--u))]
                  "
                >

                  <span>
                    Explore the publication
                  </span>

                  <span
                    className="
                      shrink-0
                      text-lg
                      transition-transform
                      duration-300
                      motion-reduce:transition-none
                      group-hover:translate-x-2

                      min-[1920px]:text-[length:calc(18*var(--u))]
                    "
                    aria-hidden="true"
                  >
                    →
                  </span>

                </Link>


                <span
                  className="
                    text-[9px] uppercase tracking-[0.25em] text-[#7F8B80]

                    min-[1920px]:text-[length:calc(9*var(--u))]
                  "
                >
                  Featured Publication
                </span>

              </div>

            </motion.div>

          </div>


          {/* =====================================================
              BOTTOM STATEMENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="
              mt-20 border-t border-[#F4F0E5]/10 pt-8

              sm:mt-24

              md:mt-32

              min-[1920px]:mt-[calc(128*var(--u))]
              min-[1920px]:pt-[calc(32*var(--u))]
            "
          >

            <div
              className="
                grid gap-4

                md:grid-cols-[1fr_auto_1fr]
                md:items-center
                md:gap-8

                min-[1920px]:gap-[calc(32*var(--u))]
              "
            >

              <span
                className="
                  text-[9px] uppercase tracking-[0.28em] text-[#7F8B80]

                  min-[1920px]:text-[length:calc(9*var(--u))]
                "
              >
                Literature
              </span>

              <p
                className="
                  font-amiri text-lg text-[#D8C99B]

                  md:text-center

                  min-[1920px]:text-[length:calc(18*var(--u))]
                "
              >
                Preserving what deserves to endure
              </p>

              <span
                className="
                  text-[9px] uppercase tracking-[0.28em] text-[#7F8B80]

                  md:text-right

                  min-[1920px]:text-[length:calc(9*var(--u))]
                "
              >
                Bagh-e-Khizar Publications
              </span>

            </div>

          </motion.div>

        </div>

      </section>
    </MotionConfig>
  );
}

export default FeaturedBook;