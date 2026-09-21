import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";


/* ============================================================
   RESPONSIVE STRATEGY
   ------------------------------------------------------------
   < 640px        Phones. 1 column, fluid heading, cards sized to
                  their content (no overlap on tiny screens).
   640 - 1023px   Tablets. 2 columns (3 even rows).
   >= 1024px      Laptop / desktop. 3 columns — ORIGINAL
                  composition preserved.
   >= 1920px      Ultra-wide / 2K / 4K. Everything scales up in
                  proportion through one CSS variable (--u).

   Also handled: 280px foldables, safe-area insets in landscape,
   reduced-motion (via MotionConfig), stagger delay that follows
   the column count (no waiting for cards in a 1-column list),
   and slightly larger micro-text on phones.

   Class-group order inside each className string:
     base (phones) -> sm -> md -> lg -> ultra-wide (1920+)
   ============================================================ */


// ============================================================
// DATA
// ============================================================

const publishingAreas = [
  {
    number: "01",
    title: "History",
    description:
      "Works that explore the events, people and narratives that have shaped our understanding of the past.",
    keyword: "Remember",
  },
  {
    number: "02",
    title: "Heritage",
    description:
      "Books that preserve traditions, manuscripts, memories and the cultural inheritance passed between generations.",
    keyword: "Preserve",
  },
  {
    number: "03",
    title: "Spirituality",
    description:
      "Works exploring spirituality, mysticism, wisdom and the timeless search for deeper understanding.",
    keyword: "Reflect",
  },
  {
    number: "04",
    title: "Literature",
    description:
      "Poetry, stories and literary works that enrich imagination, preserve voices and open new conversations.",
    keyword: "Discover",
  },
  {
    number: "05",
    title: "Culture",
    description:
      "Works celebrating culture, civilisation, people and the diverse traditions that connect communities.",
    keyword: "Connect",
  },
  {
    number: "06",
    title: "Knowledge",
    description:
      "Reference works and contemporary knowledge that inform readers and remain useful across generations.",
    keyword: "Learn",
  },
];


// ============================================================
// MEDIA QUERY HOOK
// Used so each card's stagger delay follows its position in the
// current grid (1, 2 or 3 columns) instead of its list index.
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


function PublishingFocusCards() {
  // Match Tailwind's `sm` (2 columns) and `lg` (3 columns) breakpoints.
  const isSm = useMediaQuery("(min-width: 640px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const columns = isLg ? 3 : isSm ? 2 : 1;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="what-we-publish"
        className="
          relative
          overflow-hidden
          bg-[#F4F0E5]
          py-24
          text-[#172D20]

          pl-[env(safe-area-inset-left)]
          pr-[env(safe-area-inset-right)]

          sm:py-28

          lg:py-32

          min-[1920px]:py-[calc(128*var(--u))]

          [--u:1px]
          min-[1920px]:[--u:calc(100vw/1920)]
        "
      >
        {/* =====================================================
            BACKGROUND DECORATION
        ====================================================== */}

        <div
          className="
            pointer-events-none absolute
            left-[-180px] top-[10%]
            h-[400px] w-[400px]
            rounded-full border border-[#B18B35]/10

            min-[1920px]:left-[calc(-180*var(--u))]
            min-[1920px]:h-[calc(400*var(--u))]
            min-[1920px]:w-[calc(400*var(--u))]
          "
        />

        <div
          className="
            pointer-events-none absolute
            bottom-[-180px] right-[-150px]
            h-[420px] w-[420px]
            rounded-full border border-[#B18B35]/10

            min-[1920px]:bottom-[calc(-180*var(--u))]
            min-[1920px]:right-[calc(-150*var(--u))]
            min-[1920px]:h-[calc(420*var(--u))]
            min-[1920px]:w-[calc(420*var(--u))]
          "
        />

        <div
          className="
            pointer-events-none absolute
            left-[50%] top-[30%]
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full bg-[#D6AD55]/[0.025] blur-3xl

            min-[1920px]:h-[calc(500*var(--u))]
            min-[1920px]:w-[calc(500*var(--u))]
          "
        />


        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative mx-auto
            max-w-[1200px]
            px-6

            sm:px-10

            lg:px-[5vw]

            min-[1920px]:max-w-[calc(1200*var(--u))]
          "
        >


          {/* =================================================
              SECTION INTRO
          ================================================== */}

          <div
            className="
              mx-auto max-w-[760px] text-center

              min-[1920px]:max-w-[calc(760*var(--u))]
            "
          >

            {/* Small label */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                flex items-center justify-center gap-3

                sm:gap-4

                min-[1920px]:gap-[calc(16*var(--u))]
              "
            >

              <span
                className="
                  h-px w-6 bg-[#B18B35]/60

                  sm:w-10

                  min-[1920px]:w-[calc(40*var(--u))]
                "
              />

              <span
                className="
                  text-[9px] font-medium uppercase
                  tracking-[0.25em]
                  text-[#9A7932]

                  sm:tracking-[0.3em]

                  min-[1920px]:text-[length:calc(9*var(--u))]
                "
              >
                What We Publish
              </span>

              <span
                className="
                  h-px w-6 bg-[#B18B35]/60

                  sm:w-10

                  min-[1920px]:w-[calc(40*var(--u))]
                "
              />

            </motion.div>


            {/* Main heading */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="
                mt-6
                font-amiri
                font-bold
                leading-[0.98]
                tracking-[-0.015em]
                text-[#172D20]

                text-[clamp(2.25rem,10vw,3.25rem)]

                sm:text-[clamp(3.25rem,5.2vw,4.8rem)]

                min-[1920px]:mt-[calc(24*var(--u))]
                min-[1920px]:text-[length:calc(76.8*var(--u))]
              "
            >
              Ideas worth
              <br />

              <span className="text-[#9A7932]">
                remembering.
              </span>
            </motion.h2>


            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="
                mx-auto
                mt-6
                max-w-[650px]
                text-[14px]
                leading-7
                text-[#687268]

                sm:mt-7
                sm:text-[15px]

                min-[1920px]:mt-[calc(28*var(--u))]
                min-[1920px]:max-w-[calc(650*var(--u))]
                min-[1920px]:text-[length:calc(15*var(--u))]
                min-[1920px]:leading-[calc(28*var(--u))]
              "
            >
              Our publishing interests span history, heritage, spirituality,
              literature, culture and knowledge — bringing meaningful works
              to readers while preserving their enduring value.
            </motion.p>

          </div>


          {/* =================================================
              SIX PUBLISHING AREAS
              1 column -> 2 columns -> 3 columns
          ================================================== */}

          <div
            className="
              mt-12
              grid
              gap-px
              overflow-hidden
              border border-[#172D20]/10
              bg-[#172D20]/10

              sm:mt-14
              sm:grid-cols-2

              lg:mt-16
              lg:grid-cols-3

              min-[1920px]:mt-[calc(64*var(--u))]
            "
          >

            {publishingAreas.map((area, index) => (

              <motion.article
                key={area.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % columns) * 0.06,
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[285px]
                  flex-col
                  overflow-hidden
                  bg-[#F4F0E5]
                  p-7
                  transition-all
                  duration-500
                  motion-reduce:transition-none
                  hover:bg-[#172D20]

                  sm:p-8

                  lg:p-9

                  min-[1920px]:min-h-[calc(285*var(--u))]
                  min-[1920px]:p-[calc(36*var(--u))]
                "
              >

                {/* Background number */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-5
                    font-amiri
                    text-[8rem]
                    leading-none
                    text-[#172D20]/[0.035]
                    transition-all
                    duration-500
                    group-hover:text-[#D6AD55]/[0.07]

                    min-[1920px]:right-[calc(-12*var(--u))]
                    min-[1920px]:top-[calc(-20*var(--u))]
                    min-[1920px]:text-[length:calc(128*var(--u))]
                  "
                >
                  {area.number}
                </span>


                {/* Top row */}

                <div className="relative flex items-center justify-between">

                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.2em]
                      text-[#B18B35]
                      transition-colors
                      duration-300
                      group-hover:text-[#D6AD55]

                      min-[1920px]:text-[length:calc(9*var(--u))]
                    "
                  >
                    {area.number}
                  </span>

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#8A918A]
                      transition-colors
                      duration-300
                      group-hover:text-[#9FA99F]

                      lg:text-[8px]

                      min-[1920px]:text-[length:calc(8*var(--u))]
                    "
                  >
                    {area.keyword}
                  </span>

                </div>


                {/* Gold line */}

                <div
                  className="
                    relative
                    mt-8
                    h-px
                    w-10
                    bg-[#B18B35]
                    transition-all
                    duration-500
                    motion-reduce:transition-none
                    group-hover:w-16
                    group-hover:bg-[#D6AD55]

                    min-[1920px]:mt-[calc(32*var(--u))]
                    min-[1920px]:w-[calc(40*var(--u))]
                    min-[1920px]:group-hover:w-[calc(64*var(--u))]
                  "
                />


                {/* Title */}

                <h3
                  className="
                    relative
                    mt-6
                    font-amiri
                    text-[2rem]
                    leading-[1.05]
                    text-[#172D20]
                    transition-colors
                    duration-300
                    group-hover:text-[#F4F0E5]

                    min-[1920px]:mt-[calc(24*var(--u))]
                    min-[1920px]:text-[length:calc(32*var(--u))]
                  "
                >
                  {area.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    relative
                    mt-5
                    max-w-[310px]
                    text-[13px]
                    leading-6
                    text-[#687268]
                    transition-colors
                    duration-300
                    group-hover:text-[#B8C0B8]

                    lg:text-[12px]

                    min-[1920px]:mt-[calc(20*var(--u))]
                    min-[1920px]:max-w-[calc(310*var(--u))]
                    min-[1920px]:text-[length:calc(12*var(--u))]
                    min-[1920px]:leading-[calc(24*var(--u))]
                  "
                >
                  {area.description}
                </p>


                {/* Bottom decorative mark
                    In normal flow (pushed down with mt-auto) instead of
                    absolutely positioned, so it can never overlap the
                    description when text wraps onto extra lines. */}

                <div
                  className="
                    relative
                    mt-auto
                    flex
                    items-center
                    gap-2
                    pt-8

                    min-[1920px]:gap-[calc(8*var(--u))]
                    min-[1920px]:pt-[calc(32*var(--u))]
                  "
                >

                  <span
                    className="
                      h-1
                      w-1
                      rotate-45
                      bg-[#B18B35]
                      transition-colors
                      duration-300
                      group-hover:bg-[#D6AD55]

                      min-[1920px]:h-[calc(4*var(--u))]
                      min-[1920px]:w-[calc(4*var(--u))]
                    "
                  />

                  <span
                    className="
                      h-px
                      w-8
                      bg-[#B18B35]/30
                      transition-all
                      duration-300
                      motion-reduce:transition-none
                      group-hover:w-12
                      group-hover:bg-[#D6AD55]/40

                      min-[1920px]:w-[calc(32*var(--u))]
                      min-[1920px]:group-hover:w-[calc(48*var(--u))]
                    "
                  />

                </div>

              </motion.article>

            ))}

          </div>


          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mx-auto mt-12 max-w-[800px] text-center

              sm:mt-14

              lg:mt-16

              min-[1920px]:mt-[calc(64*var(--u))]
              min-[1920px]:max-w-[calc(800*var(--u))]
            "
          >

            <div
              className="
                mx-auto flex items-center justify-center gap-3

                sm:gap-4

                min-[1920px]:gap-[calc(16*var(--u))]
              "
            >

              <span
                className="
                  h-px w-10 bg-[#B18B35]/40

                  sm:w-16

                  min-[1920px]:w-[calc(64*var(--u))]
                "
              />

              <span
                className="
                  font-amiri text-xl text-[#B18B35]

                  min-[1920px]:text-[length:calc(20*var(--u))]
                "
              >
                باغِ خضر
              </span>

              <span
                className="
                  h-px w-10 bg-[#B18B35]/40

                  sm:w-16

                  min-[1920px]:w-[calc(64*var(--u))]
                "
              />

            </div>


            <p
              className="
                mt-5 font-amiri text-[1.35rem] leading-[1.5] text-[#526554]

                sm:text-[1.5rem]

                min-[1920px]:mt-[calc(20*var(--u))]
                min-[1920px]:text-[length:calc(24*var(--u))]
              "
            >
              From the spiritual to the historical,
              from literature to contemporary knowledge.
            </p>


            <p
              className="
                mt-4 text-[9px] uppercase
                tracking-[0.2em]
                text-[#8A918A]

                sm:tracking-[0.25em]

                min-[1920px]:mt-[calc(16*var(--u))]
                min-[1920px]:text-[length:calc(9*var(--u))]
              "
            >
              Discover · Preserve · Publish · Share
            </p>

          </motion.div>

        </div>

      </section>
    </MotionConfig>
  );
}

export default PublishingFocusCards;