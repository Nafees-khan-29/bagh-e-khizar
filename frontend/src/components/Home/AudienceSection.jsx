import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import bookImage from "../../assets/book.jpeg";


/* ============================================================
   RESPONSIVE STRATEGY
   ------------------------------------------------------------
   < 640px        Phones. 1 column, fluid heading, full-width cards.
   640 - 1023px   Tablets. Cards stay stacked but sit in a centred
                  640px column (no 900px-wide lines of 12px text),
                  and the bullet points flow into 2 columns.
   >= 1024px      Laptop / desktop. 3 columns — ORIGINAL
                  composition preserved.
   >= 1920px      Ultra-wide / 2K / 4K. Everything scales up in
                  proportion through one CSS variable (--u).

   Also handled: 280px foldables, safe-area insets in landscape,
   reduced-motion (via MotionConfig), stagger delay that follows
   the column count, and slightly larger micro-text on phones and
   tablets.

   Class-group order inside each className string:
     base (phones) -> sm -> md -> lg -> ultra-wide (1920+)
   ============================================================ */


// ============================================================
// DATA
// (The "action" / "href" fields were removed together with the
//  card links.)
// ============================================================

const audienceSections = [
  {
    number: "01",
    title: "For Readers",
    subtitle: "Books that inform. Books that endure.",
    description:
      "Discover books selected and developed with an emphasis on substance, authenticity and long-term relevance. Whether you seek knowledge, history, literature, spirituality or practical guidance, our growing catalogue is built around books worth keeping and sharing.",
    points: [
      "Thoughtful and distinctive works",
      "Books rooted in knowledge and heritage",
      "Literature, spirituality and practical guidance",
      "Works designed for long-term value",
    ],
  },
  {
    number: "02",
    title: "For Authors",
    subtitle: "Have a story worth publishing?",
    description:
      "We welcome authors, scholars, researchers and independent writers whose work contributes meaningfully to literature, knowledge, history, heritage, spirituality, culture and contemporary thought.",
    points: [
      "Manuscripts and book proposals",
      "Literary and knowledge works",
      "Research and cultural works",
      "Works deserving a wider audience",
    ],
  },
  {
    number: "03",
    title: "For Institutions",
    subtitle: "Building tomorrow's libraries.",
    description:
      "We seek to make meaningful publications accessible to public libraries, universities, colleges, research institutions, schools and other educational organisations.",
    points: [
      "Public and district libraries",
      "Universities and colleges",
      "Research institutions",
      "Schools and educational organisations",
    ],
  },
];


// ============================================================
// MEDIA QUERY HOOK
// Used so each card's stagger delay follows its position in the
// current grid (1 or 3 columns) instead of its list index.
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


function AudienceSections() {
  // Matches Tailwind's `lg` breakpoint, where the cards become 3 columns.
  const isLg = useMediaQuery("(min-width: 1024px)");
  const columns = isLg ? 3 : 1;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="audiences"
        className="
          relative
          overflow-hidden
          bg-[#172D20]
          py-24
          text-[#F4F0E5]

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
            BACKGROUND
        ====================================================== */}

        <div
          className="
            pointer-events-none absolute
            left-[-180px] top-[15%]
            h-[420px] w-[420px]
            rounded-full border border-[#D6AD55]/10

            min-[1920px]:left-[calc(-180*var(--u))]
            min-[1920px]:h-[calc(420*var(--u))]
            min-[1920px]:w-[calc(420*var(--u))]
          "
        />

        <div
          className="
            pointer-events-none absolute
            bottom-[-180px] right-[-150px]
            h-[450px] w-[450px]
            rounded-full border border-[#D6AD55]/10

            min-[1920px]:bottom-[calc(-180*var(--u))]
            min-[1920px]:right-[calc(-150*var(--u))]
            min-[1920px]:h-[calc(450*var(--u))]
            min-[1920px]:w-[calc(450*var(--u))]
          "
        />

        <div
          className="
            pointer-events-none absolute
            left-[40%] top-[20%]
            h-[400px] w-[400px]
            rounded-full bg-[#D6AD55]/[0.025] blur-3xl

            min-[1920px]:h-[calc(400*var(--u))]
            min-[1920px]:w-[calc(400*var(--u))]
          "
        />


        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div
          className="
            relative mx-auto
            max-w-[1250px]
            px-6

            sm:px-10

            lg:px-[5vw]

            min-[1920px]:max-w-[calc(1250*var(--u))]
          "
        >


          {/* =================================================
              INTRO
          ================================================== */}

          <div
            className="
              mx-auto max-w-[800px] text-center

              min-[1920px]:max-w-[calc(800*var(--u))]
            "
          >

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
                  h-px w-6 shrink-0 bg-[#D6AD55]/60

                  sm:w-10

                  min-[1920px]:w-[calc(40*var(--u))]
                "
              />

              <span
                className="
                  text-[9px] uppercase
                  tracking-[0.2em]
                  text-[#D6AD55]

                  sm:tracking-[0.3em]

                  min-[1920px]:text-[length:calc(9*var(--u))]
                "
              >
                Connect With Bagh-e-Khizar
              </span>

              <span
                className="
                  h-px w-6 shrink-0 bg-[#D6AD55]/60

                  sm:w-10

                  min-[1920px]:w-[calc(40*var(--u))]
                "
              />

            </motion.div>


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

                text-[clamp(2.25rem,10vw,3.25rem)]

                sm:text-[clamp(3.25rem,5.2vw,4.8rem)]

                min-[1920px]:mt-[calc(24*var(--u))]
                min-[1920px]:text-[length:calc(76.8*var(--u))]
              "
            >
              A place for
              <br />

              <span className="text-[#D6AD55]">
                every journey.
              </span>
            </motion.h2>


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
                text-[#B6BDB5]

                sm:mt-7
                sm:text-[15px]

                min-[1920px]:mt-[calc(28*var(--u))]
                min-[1920px]:max-w-[calc(650*var(--u))]
                min-[1920px]:text-[length:calc(15*var(--u))]
                min-[1920px]:leading-[calc(28*var(--u))]
              "
            >
              Whether you come as a reader, an author or an institution,
              Bagh-e-Khizar Publications seeks to connect meaningful
              books and ideas with the people and communities who can
              carry them forward.
            </motion.p>

          </div>


          {/* =================================================
              BOOK VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              mx-auto mt-12 flex justify-center

              sm:mt-14

              min-[1920px]:mt-[calc(56*var(--u))]
            "
          >

            <div className="relative">

              {/* Gold offset frame */}

              <div
                className="
                  absolute
                  -right-3
                  -top-3
                  h-full
                  w-full
                  border
                  border-[#D6AD55]/25

                  min-[1920px]:right-[calc(-12*var(--u))]
                  min-[1920px]:top-[calc(-12*var(--u))]
                "
              />

              {/* Image */}

              <div
                className="
                  relative
                  h-[250px]
                  w-[175px]
                  overflow-hidden
                  border
                  border-[#D6AD55]/20
                  bg-[#0F2118]
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)]

                  sm:h-[300px]
                  sm:w-[210px]

                  min-[1920px]:h-[calc(300*var(--u))]
                  min-[1920px]:w-[calc(210*var(--u))]
                "
              >

                <img
                  src={bookImage}
                  alt="The Indian Export Handbook — Bagh-e-Khizar Publications"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.025]
                  "
                />

              </div>

            </div>

          </motion.div>


          {/* =================================================
              THREE AUDIENCE CARDS
              Phones: full width. Tablets: centred 640px column.
              Desktop: 3 columns.
          ================================================== */}

          <div
            className="
              mx-auto
              mt-12
              grid
              gap-px
              overflow-hidden
              border border-[#D6AD55]/20
              bg-[#D6AD55]/20

              sm:mt-14
              sm:max-w-[640px]

              lg:mt-16
              lg:max-w-none
              lg:grid-cols-3

              min-[1920px]:mt-[calc(64*var(--u))]
            "
          >

            {audienceSections.map((section, index) => (

              <motion.article
                key={section.number}
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
                  delay: (index % columns) * 0.08,
                }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  bg-[#172D20]
                  p-7
                  transition-all
                  duration-500
                  motion-reduce:transition-none
                  hover:bg-[#1D3828]

                  sm:p-9

                  lg:p-10

                  min-[1920px]:p-[calc(40*var(--u))]
                "
              >

                {/* Large background number */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-[-8px]
                    top-[-25px]
                    font-amiri
                    text-[9rem]
                    leading-none
                    text-[#D6AD55]/[0.035]
                    transition-colors
                    duration-500
                    group-hover:text-[#D6AD55]/[0.07]

                    min-[1920px]:right-[calc(-8*var(--u))]
                    min-[1920px]:top-[calc(-25*var(--u))]
                    min-[1920px]:text-[length:calc(144*var(--u))]
                  "
                >
                  {section.number}
                </span>


                {/* Number */}

                <div className="relative flex items-center justify-between">

                  <span
                    className="
                      text-[9px] tracking-[0.2em] text-[#D6AD55]

                      min-[1920px]:text-[length:calc(9*var(--u))]
                    "
                  >
                    {section.number}
                  </span>

                  <span
                    className="
                      h-px w-10 bg-[#D6AD55]/30
                      transition-all duration-500
                      motion-reduce:transition-none
                      group-hover:w-16 group-hover:bg-[#D6AD55]/60

                      min-[1920px]:w-[calc(40*var(--u))]
                      min-[1920px]:group-hover:w-[calc(64*var(--u))]
                    "
                  />

                </div>


                {/* Title */}

                <h3
                  className="
                    relative
                    mt-10
                    font-amiri
                    text-[clamp(2rem,3vw,2.7rem)]
                    leading-[1.05]
                    text-[#F4F0E5]

                    min-[1920px]:mt-[calc(40*var(--u))]
                    min-[1920px]:text-[length:calc(43.2*var(--u))]
                  "
                >
                  {section.title}
                </h3>


                {/* Subtitle */}

                <p
                  className="
                    relative mt-4
                    font-amiri
                    text-[1.2rem]
                    leading-[1.4]
                    text-[#D6AD55]

                    min-[1920px]:mt-[calc(16*var(--u))]
                    min-[1920px]:text-[length:calc(19.2*var(--u))]
                  "
                >
                  {section.subtitle}
                </p>


                {/* Divider */}

                <div
                  className="
                    relative mt-6 h-px w-12
                    bg-[#D6AD55]/50
                    transition-all duration-500
                    motion-reduce:transition-none
                    group-hover:w-20

                    min-[1920px]:mt-[calc(24*var(--u))]
                    min-[1920px]:w-[calc(48*var(--u))]
                    min-[1920px]:group-hover:w-[calc(80*var(--u))]
                  "
                />


                {/* Description */}

                <p
                  className="
                    relative
                    mt-6
                    text-[13px]
                    leading-6
                    text-[#AEB7AE]

                    sm:text-[14px]
                    sm:leading-7

                    lg:text-[12px]
                    lg:leading-6

                    min-[1920px]:mt-[calc(24*var(--u))]
                    min-[1920px]:text-[length:calc(12*var(--u))]
                    min-[1920px]:leading-[calc(24*var(--u))]
                  "
                >
                  {section.description}
                </p>


                {/* Points
                    1 column on phones, 2 on tablets, 1 again on
                    desktop where each card is narrow. */}

                <div
                  className="
                    relative
                    mt-7
                    grid
                    grid-cols-1
                    gap-3

                    sm:grid-cols-2
                    sm:gap-x-6

                    lg:grid-cols-1

                    min-[1920px]:mt-[calc(28*var(--u))]
                    min-[1920px]:gap-y-[calc(12*var(--u))]
                  "
                >

                  {section.points.map((point) => (

                    <div
                      key={point}
                      className="
                        flex items-start gap-3

                        min-[1920px]:gap-[calc(12*var(--u))]
                      "
                    >

                      <span
                        className="
                          mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D6AD55]

                          min-[1920px]:mt-[calc(7*var(--u))]
                          min-[1920px]:h-[calc(6*var(--u))]
                          min-[1920px]:w-[calc(6*var(--u))]
                        "
                      />

                      <p
                        className="
                          text-[12px]
                          leading-5
                          text-[#AAB3AA]

                          sm:text-[13px]

                          lg:text-[11px]

                          min-[1920px]:text-[length:calc(11*var(--u))]
                          min-[1920px]:leading-[calc(20*var(--u))]
                        "
                      >
                        {point}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.article>

            ))}

          </div>


          {/* =================================================
              BOOK / LIBRARY STATEMENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mx-auto
              mt-12
              max-w-[850px]
              border-y
              border-[#D6AD55]/15
              py-8
              text-center

              sm:mt-14
              sm:py-10

              lg:mt-16

              min-[1920px]:mt-[calc(64*var(--u))]
              min-[1920px]:max-w-[calc(850*var(--u))]
              min-[1920px]:py-[calc(40*var(--u))]
            "
          >

            <p
              className="
                font-amiri
                text-[clamp(1.4rem,2.5vw,1.8rem)]
                leading-[1.5]
                text-[#D9D6CA]

                min-[1920px]:text-[length:calc(28.8*var(--u))]
              "
            >
              A book begins with an idea.
              <br className="hidden sm:block" />
              Its journey continues through its readers.
            </p>


            <div
              className="
                mt-6 flex items-center justify-center gap-3

                sm:gap-4

                min-[1920px]:mt-[calc(24*var(--u))]
                min-[1920px]:gap-[calc(16*var(--u))]
              "
            >

              <span
                className="
                  h-px w-8 bg-[#D6AD55]/40

                  sm:w-10

                  min-[1920px]:w-[calc(40*var(--u))]
                "
              />

              <span
                className="
                  font-amiri text-lg text-[#D6AD55]

                  min-[1920px]:text-[length:calc(18*var(--u))]
                "
              >
                باغِ خضر
              </span>

              <span
                className="
                  h-px w-8 bg-[#D6AD55]/40

                  sm:w-10

                  min-[1920px]:w-[calc(40*var(--u))]
                "
              />

            </div>


            <p
              className="
                mt-4
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#7F897F]

                sm:tracking-[0.28em]

                lg:text-[8px]

                min-[1920px]:mt-[calc(16*var(--u))]
                min-[1920px]:text-[length:calc(8*var(--u))]
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

export default AudienceSections;