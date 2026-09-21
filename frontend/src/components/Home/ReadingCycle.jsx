import { motion, MotionConfig } from "framer-motion";


/* ============================================================
   RESPONSIVE STRATEGY
   ------------------------------------------------------------
   < 640px        Phones. Tighter card padding (content stays
                  usable at 280px), fluid heading, benefits stacked.
   640 - 1023px   Tablets. Benefits in a 2 x 2 grid.
   >= 1024px      Laptop / desktop. Benefits in a single row of 4 —
                  ORIGINAL composition preserved.
   >= 1920px      Ultra-wide / 2K / 4K. Everything scales up in
                  proportion through one CSS variable (--u).

   Also handled: 280px foldables, safe-area insets in landscape,
   reduced-motion (via MotionConfig), balanced line breaks in the
   headings, and a fix for the doubled border under the 3rd benefit
   in the 2-column layout.

   NOTE: the email form is commented out, exactly as in your
   version. The empty <form> is kept so the spacing is unchanged.
   The commented-out markup has been updated for responsiveness so
   it is ready to re-enable (16px input text prevents iOS Safari
   from zooming the page when the field is focused).

   Class-group order inside each className string:
     base (phones) -> sm -> md -> lg -> ultra-wide (1920+)
   ============================================================ */


// ============================================================
// DATA
// The border classes give the benefits grid its dividers at
// each layout (1 / 2 / 4 columns) without doubling up on the
// outer border.
// ============================================================

const memberBenefits = [
  {
    number: "01",
    label: "New Releases",
    border: "border-b sm:border-r lg:border-b-0",
  },
  {
    number: "02",
    label: "Pre-orders",
    border: "border-b lg:border-b-0 lg:border-r",
  },
  {
    number: "03",
    label: "Author Events",
    border: "border-b sm:border-b-0 sm:border-r",
  },
  {
    number: "04",
    label: "Special Editions",
    border: "",
  },
];


function ReadingCircleSignup() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="reading-circle"
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
            DECORATIVE BACKGROUND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-1/2
            h-[420px]
            w-[420px]
            -translate-y-1/2
            rounded-full
            border
            border-[#B18B35]/10

            min-[1920px]:left-[calc(-160*var(--u))]
            min-[1920px]:h-[calc(420*var(--u))]
            min-[1920px]:w-[calc(420*var(--u))]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            border
            border-[#B18B35]/10

            min-[1920px]:right-[calc(-160*var(--u))]
            min-[1920px]:h-[calc(500*var(--u))]
            min-[1920px]:w-[calc(500*var(--u))]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#D6AD55]/[0.025]
            blur-3xl

            min-[1920px]:h-[calc(500*var(--u))]
            min-[1920px]:w-[calc(500*var(--u))]
          "
        />


        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div
          className="
            relative mx-auto
            max-w-[1100px]
            px-6

            sm:px-10

            lg:px-[5vw]

            min-[1920px]:max-w-[calc(1100*var(--u))]
          "
        >

          <div
            className="
              relative
              overflow-hidden
              border
              border-[#172D20]/10
              bg-[#172D20]
            "
          >

            {/* Inner gold frame */}

            <div
              className="
                pointer-events-none
                absolute
                inset-2
                border
                border-[#D6AD55]/15

                sm:inset-3

                min-[1920px]:inset-[calc(12*var(--u))]
              "
            />


            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                px-5
                py-14
                text-center

                sm:px-12
                sm:py-20

                lg:px-20
                lg:py-24

                min-[1920px]:px-[calc(80*var(--u))]
                min-[1920px]:py-[calc(96*var(--u))]
              "
            >


              {/* Arabic identity */}

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
                    h-px w-8 bg-[#D6AD55]/50

                    sm:w-10

                    min-[1920px]:w-[calc(40*var(--u))]
                  "
                />

                <span
                  className="
                    font-amiri text-xl text-[#E7C76C]

                    min-[1920px]:text-[length:calc(20*var(--u))]
                  "
                >
                  باغِ خضر
                </span>

                <span
                  className="
                    h-px w-8 bg-[#D6AD55]/50

                    sm:w-10

                    min-[1920px]:w-[calc(40*var(--u))]
                  "
                />

              </motion.div>


              {/* Section label */}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="
                  mt-6
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#D6AD55]

                  sm:tracking-[0.32em]

                  min-[1920px]:mt-[calc(24*var(--u))]
                  min-[1920px]:text-[length:calc(9*var(--u))]
                "
              >
                The Reading Circle
              </motion.p>


              {/* =================================================
                  MAIN HEADING
              ================================================== */}

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="
                  mx-auto
                  mt-5
                  max-w-[850px]
                  font-amiri
                  font-bold
                  leading-[0.98]
                  tracking-[-0.015em]
                  text-[#F4F0E5]
                  [text-wrap:balance]

                  text-[clamp(2rem,9vw,3rem)]

                  sm:text-[clamp(3rem,5.2vw,4.8rem)]

                  min-[1920px]:mt-[calc(20*var(--u))]
                  min-[1920px]:max-w-[calc(850*var(--u))]
                  min-[1920px]:text-[length:calc(76.8*var(--u))]
                "
              >
                Stay close to the
                <br />

                <span className="text-[#D6AD55]">
                  garden of knowledge.
                </span>
              </motion.h2>


              {/* Divider */}

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="
                  mx-auto mt-7 h-px w-20 origin-center bg-[#D6AD55]

                  min-[1920px]:mt-[calc(28*var(--u))]
                  min-[1920px]:w-[calc(80*var(--u))]
                "
              />


              {/* Description */}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="
                  mx-auto
                  mt-7
                  max-w-[650px]
                  text-[14px]
                  leading-7
                  text-[#B7BDB5]

                  sm:text-[15px]

                  min-[1920px]:mt-[calc(28*var(--u))]
                  min-[1920px]:max-w-[calc(650*var(--u))]
                  min-[1920px]:text-[length:calc(15*var(--u))]
                  min-[1920px]:leading-[calc(28*var(--u))]
                "
              >
                Join the Bagh-e-Khizar Reading Circle and stay connected
                with new books, forthcoming titles, author events and
                stories worth discovering.
              </motion.p>


              {/* =================================================
                  WHAT MEMBERS RECEIVE
                  1 column -> 2 x 2 -> single row of 4
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="
                  mx-auto
                  mt-10
                  grid
                  max-w-[750px]
                  border
                  border-[#D6AD55]/15

                  sm:grid-cols-2

                  lg:grid-cols-4

                  min-[1920px]:mt-[calc(40*var(--u))]
                  min-[1920px]:max-w-[calc(750*var(--u))]
                "
              >

                {memberBenefits.map((item) => (

                  <div
                    key={item.number}
                    className={`
                      border-[#D6AD55]/15
                      px-5
                      py-5

                      min-[1920px]:px-[calc(20*var(--u))]
                      min-[1920px]:py-[calc(20*var(--u))]

                      ${item.border}
                    `}
                  >

                    <span
                      className="
                        font-amiri text-2xl text-[#D6AD55]

                        min-[1920px]:text-[length:calc(24*var(--u))]
                      "
                    >
                      {item.number}
                    </span>

                    <p
                      className="
                        mt-3
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-[#D6D9D0]

                        min-[1920px]:mt-[calc(12*var(--u))]
                        min-[1920px]:text-[length:calc(9*var(--u))]
                      "
                    >
                      {item.label}
                    </p>

                  </div>

                ))}

              </motion.div>


              {/* =================================================
                  SIGNUP FORM
                  (Disabled — same as your original. Stacks on
                  phones, sits in one row from 640px up.)
              ================================================== */}

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.34 }}
                onSubmit={(e) => e.preventDefault()}
                className="
                  mx-auto
                  mt-10
                  flex
                  max-w-[650px]
                  flex-col
                  gap-3
                  sm:flex-row

                  min-[1920px]:mt-[calc(40*var(--u))]
                  min-[1920px]:max-w-[calc(650*var(--u))]
                  min-[1920px]:gap-[calc(12*var(--u))]
                "
              >

                {/* <label htmlFor="reading-circle-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="reading-circle-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="
                    min-w-0
                    flex-1
                    border
                    border-[#D6AD55]/25
                    bg-[#F4F0E5]/[0.06]
                    px-5
                    py-4
                    text-[16px]
                    text-[#F4F0E5]
                    outline-none
                    placeholder:text-[#929B92]
                    transition
                    duration-300
                    focus:border-[#D6AD55]
                    focus:bg-[#F4F0E5]/[0.09]

                    min-[1920px]:px-[calc(20*var(--u))]
                    min-[1920px]:py-[calc(16*var(--u))]
                    min-[1920px]:text-[length:calc(16*var(--u))]
                  "
                />

                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-3
                    bg-[#D6AD55]
                    px-7
                    py-4
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#10251A]
                    transition-all
                    duration-300
                    hover:bg-[#E7C76C]
                    active:scale-[0.98]

                    min-[1920px]:px-[calc(28*var(--u))]
                    min-[1920px]:py-[calc(16*var(--u))]
                    min-[1920px]:text-[length:calc(9*var(--u))]
                  "
                >

                  Join the Reading Circle

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button> */}

              </motion.form>


              {/* Privacy note */}

              <p
                className="
                  mt-4 text-[9px] tracking-[0.05em] text-[#737E74]

                  min-[1920px]:mt-[calc(16*var(--u))]
                  min-[1920px]:text-[length:calc(9*var(--u))]
                "
              >
                New books, announcements and occasional updates.
              </p>


              {/* =================================================
                  CLOSING QUOTE
              ================================================== */}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="
                  mx-auto mt-12 max-w-[700px]

                  sm:mt-14

                  min-[1920px]:mt-[calc(56*var(--u))]
                  min-[1920px]:max-w-[calc(700*var(--u))]
                "
              >

                <div
                  className="
                    flex items-center justify-center gap-3

                    sm:gap-4

                    min-[1920px]:gap-[calc(16*var(--u))]
                  "
                >

                  <span
                    className="
                      h-px w-8 bg-[#D6AD55]/30

                      sm:w-12

                      min-[1920px]:w-[calc(48*var(--u))]
                    "
                  />

                  <span
                    className="
                      h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D6AD55]

                      min-[1920px]:h-[calc(6*var(--u))]
                      min-[1920px]:w-[calc(6*var(--u))]
                    "
                  />

                  <span
                    className="
                      h-px w-8 bg-[#D6AD55]/30

                      sm:w-12

                      min-[1920px]:w-[calc(48*var(--u))]
                    "
                  />

                </div>


                <p
                  className="
                    mt-6
                    font-amiri
                    text-[1.25rem]
                    leading-[1.5]
                    text-[#D9D6CA]
                    [text-wrap:balance]

                    sm:text-[1.45rem]

                    min-[1920px]:mt-[calc(24*var(--u))]
                    min-[1920px]:text-[length:calc(23.2*var(--u))]
                  "
                >
                  Every book has a journey.
                  <br />
                  Every reader brings a new meaning.
                </p>

              </motion.div>

            </div>

          </div>


          {/* =================================================
              BOTTOM TAGLINE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              mt-10 text-center

              min-[1920px]:mt-[calc(40*var(--u))]
            "
          >

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-[#8A918A]

                sm:tracking-[0.3em]

                lg:text-[8px]

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

export default ReadingCircleSignup;