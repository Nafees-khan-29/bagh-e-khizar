
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../../assets/about5.jpeg";

function AboutTeaser() {
  const imageRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (media.matches) return;

    const handlePointerMove = (e) => {
      if (!imageRef.current) return;

      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      imageRef.current.style.transform = `
        translate(${nx * 4}px, ${ny * 4}px)
        scale(1.03)
      `;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        bg-[#F4F0E5]
        px-5 py-20
        sm:px-8 sm:py-24
        md:px-10 md:py-28
        lg:px-[6vw] lg:py-36
        xl:py-40
        2xl:py-44
      "
    >
      {/* =====================================================
          BACKGROUND ORNAMENT
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large faded circles */}

        <div
          className="
            absolute
            -right-32 top-24
            h-[320px] w-[320px]
            rounded-full
            border border-[#526554]/10

            sm:-right-40 sm:h-[450px] sm:w-[450px]

            md:-right-48 md:top-20
            md:h-[600px] md:w-[600px]

            lg:h-[700px] lg:w-[700px]
          "
        />

        <div
          className="
            absolute
            -right-24 top-36
            h-[250px] w-[250px]
            rounded-full
            border border-[#D6AD55]/10

            sm:h-[350px] sm:w-[350px]

            md:h-[500px] md:w-[500px]

            lg:h-[580px] lg:w-[580px]
          "
        />

        {/* Decorative dots */}

        <div
          className="
            absolute
            left-[8%] top-[18%]
            h-1.5 w-1.5
            rounded-full
            bg-[#D6AD55]/60

            sm:h-2 sm:w-2
          "
        />

        <div
          className="
            absolute
            bottom-[15%] right-[10%]
            h-1 w-1
            rounded-full
            bg-[#526554]/50

            sm:h-1.5 sm:w-1.5
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1250px]
        "
      >
        <div
          className="
            grid
            items-center

            gap-14

            md:gap-16

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20

            xl:gap-24
          "
        >

          {/* =================================================
              IMAGE SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              relative
              mx-auto
              w-full

              max-w-[420px]

              sm:max-w-[460px]

              md:max-w-[500px]

              lg:max-w-[540px]
            "
          >

            {/* Decorative frame */}

            <div
              className="
                absolute
                -left-2 -top-2
                h-full w-full
                border
                border-[#D6AD55]/50

                sm:-left-3 sm:-top-3

                md:-left-5 md:-top-5

                lg:-left-6 lg:-top-6
              "
            />

            {/* Image */}

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                bg-[#172D20]
              "
            >
              <img
                ref={imageRef}
                src={image}
                alt="Bagh-e-Khizar — a garden of knowledge"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#10251A]/65
                  via-transparent
                  to-[#10251A]/10
                "
              />

              {/* Image caption */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  flex
                  items-end
                  justify-between

                  sm:bottom-5
                  sm:left-5
                  sm:right-5

                  md:bottom-6
                  md:left-6
                  md:right-6
                "
              >
                <span
                  className="
                    font-amiri
                    text-lg
                    text-[#F4F0E5]

                    sm:text-xl
                  "
                >
                  باغِ خضر
                </span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[#EDE8DC]/80

                    sm:text-[9px]
                    sm:tracking-[0.25em]
                  "
                >
                  The Garden
                </span>
              </div>
            </div>

            {/* Floating number */}

            <div
              className="
                absolute
                -bottom-5
                -right-2
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#D6AD55]

                sm:-bottom-6
                sm:-right-3
                sm:h-14
                sm:w-14

                md:-bottom-7
                md:-right-5
                md:h-16
                md:w-16

                lg:-right-6
              "
            >
              <span
                className="
                  font-amiri
                  text-xl
                  text-[#172D20]

                  sm:text-2xl
                "
              >
                01
              </span>
            </div>
          </motion.div>

          {/* =================================================
              TEXT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              w-full
              min-w-0
            "
          >

            {/* Eyebrow */}

            <div
              className="
                mb-5
                flex
                flex-wrap
                items-center
                gap-3

                sm:mb-6
                sm:gap-4

                md:mb-7
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#687969]

                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                About Bagh-e-Khizar
              </span>

              <span className="h-px w-8 bg-[#D6AD55] sm:w-12" />
            </div>

            {/* Heading */}

            <h2
              className="
                font-amiri
                text-[clamp(2.8rem,10vw,6rem)]
                font-bold
                leading-[0.9]
                tracking-tight
                text-[#172D20]
              "
            >
              A garden
              <br />
              of{" "}
              <em className="font-normal text-[#526554]">
                knowledge.
              </em>
            </h2>

            {/* Arabic */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="
                mt-5
                font-amiri
                text-xl
                text-[#D6AD55]

                sm:mt-6
                sm:text-2xl

                md:mt-7
              "
            >
              باغِ خضر
            </motion.div>

            {/* Main description */}

            <p
              className="
                mt-6
                max-w-[620px]
                font-amiri
                text-[1.15rem]
                leading-[1.65]
                text-[#1B2A20]

                sm:mt-7
                sm:text-[1.25rem]

                md:mt-8
                md:text-[1.45rem]

                lg:text-[1.55rem]
              "
            >
              Bagh-e-Khizar is conceived as a humble garden of knowledge
              and contemplation—where the written word can illuminate
              the mind, enrich the heart and connect generations with
              the wisdom of those who walked the path before us.
            </p>

            {/* Supporting paragraph */}

            <p
              className="
                mt-5
                max-w-[570px]
                text-[14px]
                leading-7
                text-[#536057]

                sm:mt-6
                sm:text-[15px]
                sm:leading-8

                md:mt-7
              "
            >
              Inspired by the traditions of scholarship, spirituality,
              literature and humanism, we seek to preserve and share
              works that carry enduring meaning.
            </p>

            {/* =================================================
                QUOTE
            ================================================= */}

            <div
              className="
                mt-7
                border-l
                border-[#D6AD55]
                pl-4

                sm:mt-8
                sm:pl-5

                md:mt-10
                md:pl-6
              "
            >
              <p
                className="
                  font-amiri
                  text-lg
                  italic
                  leading-relaxed
                  text-[#526554]

                  sm:text-xl
                "
              >
                “True knowledge is not confined to one language,
                one community or one discipline.”
              </p>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-9

                sm:mt-10

                md:mt-12
              "
            >
              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#526554]/50
                  pb-2
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#172D20]
                  transition-colors
                  duration-300
                  hover:border-[#D6AD55]
                  hover:text-[#526554]

                  sm:gap-4
                  sm:pb-3
                  sm:text-[11px]
                  sm:tracking-[0.22em]

                  md:gap-5
                "
              >
                <span>
                  Discover our story
                </span>

                <span
                  className="
                    text-base
                    transition-transform
                    duration-300
                    group-hover:translate-x-2

                    sm:text-lg
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 1,
            delay: 0.2,
          }}
          className="
            mt-20
            border-t
            border-[#526554]/20
            pt-6

            sm:mt-24
            sm:pt-7

            md:mt-28
            md:pt-8

            lg:mt-36
          "
        >
          <div
            className="
              grid
              gap-3

              sm:gap-4

              md:grid-cols-3
              md:items-center
              md:gap-6
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-[#687969]

                sm:text-[9px]
                sm:tracking-[0.28em]
              "
            >
              Knowledge
            </span>

            <p
              className="
                font-amiri
                text-base
                text-[#526554]

                sm:text-lg

                md:text-center
              "
            >
              Preserving the wisdom of the past
            </p>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-[#687969]

                sm:text-[9px]
                sm:tracking-[0.28em]

                md:text-right
              "
            >
              Towards the future
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutTeaser;
