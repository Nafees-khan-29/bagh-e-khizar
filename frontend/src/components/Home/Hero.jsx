import { useEffect } from "react";
import { Link } from "react-router-dom";

import heroBg from "../../assets/bg.png";
import logo from "../../assets/logo-bagh-e-khizar.png";

/* ============================================================
   RESPONSIVE STRATEGY
   ------------------------------------------------------------
   < 640px        Phones (portrait). Fluid type, stacked layout,
                  full-width CTA, vertical overlay.
   640 - 1023px   Tablets. Fluid type continues smoothly (no size
                  "jumps" at breakpoints), vertical overlay.
   >= 1024px      Laptop / desktop. ORIGINAL composition preserved.
   >= 1920px      Ultra-wide / 2K / 4K. Everything scales up in
                  proportion through one CSS variable (--u).
   Short landscape (max-height 520px)
                  Phones on their side, tiny browser windows.
                  Switches to a 2-column grid so nothing is
                  pushed below the fold.

   Also handled: notches / safe-area insets, 280px foldables,
   reduced-motion, 44px minimum touch target on the CTA.

   NOTE: for the safe-area insets to take effect, index.html
   needs:  <meta name="viewport"
                 content="width=device-width, initial-scale=1, viewport-fit=cover" />
   (they safely resolve to 0 otherwise).
   ============================================================ */

// ============================================================
// DATA
// ============================================================

const identity = ["Discover", "Preserve", "Publish", "Educate"];

// ============================================================
// ANIMATION WRAPPER
// ============================================================

function Rise({ delay = 0, className = "", children }) {
  return (
    <div
      className={`opacity-0 animate-rise motion-reduce:animate-none motion-reduce:opacity-100 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ============================================================
// ARROW
// ============================================================

function Arrow({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 12"
      className={`
        h-3 w-6
        fill-none stroke-current stroke-[1.6]
        min-[1920px]:h-[calc(12*var(--u))]
        min-[1920px]:w-[calc(24*var(--u))]
        ${className}
      `}
      aria-hidden="true"
    >
      <path
        d="M0,6 H22 M17,1 L22,6 L17,11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ============================================================
// STAR POINTS
// ============================================================

function starPoints(cx, cy, outer, inner) {
  return Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / 5) * i - Math.PI / 2;

    return `${(cx + r * Math.cos(a)).toFixed(2)},${(
      cy +
      r * Math.sin(a)
    ).toFixed(2)}`;
  }).join(" ");
}

// ============================================================
// LAUREL LEAVES
// ============================================================

function laurelLeaves(side) {
  const leaves = [];
  const count = 7;

  for (let i = 0; i < count; i++) {
    const phi =
      ((22 + (i / (count - 1)) * 108) * Math.PI) / 180;

    const x = 40 + side * 27 * Math.sin(phi);
    const y = 43 + 27 * Math.cos(phi);

    const rotate =
      (Math.atan2(side * Math.cos(phi), Math.sin(phi)) * 180) /
      Math.PI;

    leaves.push({
      x,
      y,
      rotate,
      key: `${side}-${i}`,
    });
  }

  return leaves;
}

// ============================================================
// INSTITUTE EMBLEM
// ============================================================

function InstituteEmblem({ className = "" }) {
  const left = laurelLeaves(-1);
  const right = laurelLeaves(1);

  return (
    <svg
      viewBox="10 4 60 72"
      className={className}
      role="img"
      aria-label="Dr. Rank Nazeer Institute of Excellence emblem"
    >
      {/* Laurel */}

      {[...left, ...right].map((leaf) => (
        <path
          key={leaf.key}
          d="M0,0 C3.4,-3 3.4,-8.5 0,-12 C-3.4,-8.5 -3.4,-3 0,0Z"
          fill="#D6AD55"
          transform={`translate(${leaf.x.toFixed(
            2
          )} ${leaf.y.toFixed(2)}) rotate(${leaf.rotate.toFixed(1)})`}
        />
      ))}

      {/* Laurel tie */}

      <path
        d="M33,71 Q40,75 47,71"
        fill="none"
        stroke="#D6AD55"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Open book */}

      <path
        d="M40,60 C34,56 25,55 17,57 L17,43 C25,41 34,42 40,46 Z"
        fill="#F4F0E5"
      />

      <path
        d="M40,60 C46,56 55,55 63,57 L63,43 C55,41 46,42 40,46 Z"
        fill="#E7E1D0"
      />

      <path d="M40,46 L40,60" stroke="#D6AD55" strokeWidth="1" />

      {/* Book details */}

      <path
        d="M21,47 C27,46 33,47 37,49 M21,51 C27,50 33,51 37,53"
        fill="none"
        stroke="#10251A"
        strokeOpacity="0.28"
        strokeWidth="0.7"
      />

      <path
        d="M59,47 C53,46 47,47 43,49 M59,51 C53,50 47,51 43,53"
        fill="none"
        stroke="#10251A"
        strokeOpacity="0.28"
        strokeWidth="0.7"
      />

      {/* Pen nib */}

      <path
        d="M40,19 L35.5,32 C35.5,35.5 38,37.5 40,44 C42,37.5 44.5,35.5 44.5,32 Z"
        fill="#F4F0E5"
      />

      <path
        d="M40,27 L40,40"
        stroke="#10251A"
        strokeOpacity="0.55"
        strokeWidth="0.9"
      />

      <circle
        cx="40"
        cy="27"
        r="1.3"
        fill="#10251A"
        fillOpacity="0.55"
      />

      {/* Star */}

      <polygon
        points={starPoints(40, 10, 4.6, 1.9)}
        fill="#D6AD55"
      />
    </svg>
  );
}

// ============================================================
// HERO
//
// Class-group order inside every className string:
//   base (phones) -> sm -> md -> lg -> ultra-wide (1920+) -> short landscape
// Later groups intentionally override earlier ones.
//
// "Short landscape" variant used below:
//   [@media(max-height:520px)_and_(orientation:landscape)]:
// ============================================================

function Hero() {
  useEffect(() => {
    document.title = "Bagh-e-Khizar";
  }, []);

  return (
    <section
      className="
        relative isolate
        flex flex-col
        min-h-[100svh]
        overflow-hidden
        bg-[#050D08]
        font-jost
        text-[#F4F0E5]

        pt-[env(safe-area-inset-top)]
        pr-[env(safe-area-inset-right)]
        pb-[env(safe-area-inset-bottom)]
        pl-[env(safe-area-inset-left)]

        [--u:1px]
        min-[1920px]:[--u:calc(100vw/1920)]
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="
          absolute inset-0 -z-20
          h-full w-full
          object-cover
          object-[72%_center]
        "
      />

      {/* =====================================================
          DESKTOP OVERLAY (lg+) — original design
      ====================================================== */}

      <div
        className="
          absolute inset-0 -z-10
          hidden
          bg-[linear-gradient(90deg,rgba(4,10,7,0.97)_0%,rgba(4,10,7,0.91)_35%,rgba(4,10,7,0.55)_60%,rgba(4,10,7,0.08)_88%,rgba(4,10,7,0)_100%)]
          lg:block
          [@media(max-height:520px)_and_(orientation:landscape)]:hidden
        "
      />

      {/* =====================================================
          MOBILE / TABLET OVERLAY (below lg)
      ====================================================== */}

      <div
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(180deg,rgba(4,10,7,0.94)_0%,rgba(4,10,7,0.72)_48%,rgba(4,10,7,0.96)_100%)]
          lg:hidden
          [@media(max-height:520px)_and_(orientation:landscape)]:hidden
        "
      />

      {/* =====================================================
          SHORT-LANDSCAPE OVERLAY
          Text sits on the left, emblem on the right, so the
          gradient runs left -> right and stays stronger under
          the text than the desktop one.
      ====================================================== */}

      <div
        className="
          absolute inset-0 -z-10
          hidden
          bg-[linear-gradient(90deg,rgba(4,10,7,0.96)_0%,rgba(4,10,7,0.88)_50%,rgba(4,10,7,0.45)_78%,rgba(4,10,7,0.1)_100%)]
          [@media(max-height:520px)_and_(orientation:landscape)]:block
        "
      />

      {/* Bottom fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-32
          bg-gradient-to-t
          from-[#050D08]
          to-transparent

          sm:h-40
          md:h-44
        "
      />

      {/* Top gold line */}

      <div className="absolute left-0 top-0 h-px w-full bg-[#D6AD55]/25" />

      {/* =====================================================
          MAIN CONTENT

          - Fills the section (flex-1) so safe-area padding
            never causes extra scroll.
          - No max-width + auto margins: content stays anchored
            to the left where the overlay gradient is darkest,
            even on ultra-wide screens.
      ====================================================== */}

      <div
        className="
          relative
          flex
          w-full
          flex-1

          px-5
          pb-24
          pt-16

          sm:px-8
          sm:pb-28
          sm:pt-20

          md:px-10
          md:pb-32
          md:pt-20

          lg:px-[6vw]
          lg:pb-16
          lg:pt-24

          min-[1920px]:pb-[calc(64*var(--u))]
          min-[1920px]:pt-[calc(96*var(--u))]

          [@media(max-height:520px)_and_(orientation:landscape)]:pb-6
          [@media(max-height:520px)_and_(orientation:landscape)]:pt-6
        "
      >
        {/* =====================================================
            CONTENT COLUMN
            Stacked flex column normally; 2-column grid in
            short landscape.
        ====================================================== */}

        <div
          className="
            flex w-fit max-w-full flex-col

            [@media(max-height:520px)_and_(orientation:landscape)]:grid
            [@media(max-height:520px)_and_(orientation:landscape)]:w-full
            [@media(max-height:520px)_and_(orientation:landscape)]:grid-cols-[minmax(0,1fr)_auto]
            [@media(max-height:520px)_and_(orientation:landscape)]:content-center
            [@media(max-height:520px)_and_(orientation:landscape)]:items-center
            [@media(max-height:520px)_and_(orientation:landscape)]:gap-x-8
            [@media(max-height:520px)_and_(orientation:landscape)]:gap-y-4
          "
        >
          {/* =================================================
              TOP: MAIN HEADING
          ================================================== */}

          <Rise
            delay={100}
            className="
              max-w-[900px]
              [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]

              min-[1920px]:max-w-[calc(900*var(--u))]

              [@media(max-height:520px)_and_(orientation:landscape)]:col-start-1
              [@media(max-height:520px)_and_(orientation:landscape)]:row-start-1
            "
          >
            <h1
              className="
                font-amiri
                font-bold
                leading-[1]
                tracking-[-0.015em]
                text-[#F4F0E5]

                text-[clamp(2rem,10.5vw,3.5rem)]

                sm:text-[clamp(3.5rem,1.86rem_+_4.09vw,4.5rem)]

                lg:text-[clamp(3.5rem,7vw,5.5rem)]

                min-[1920px]:text-[length:calc(88*var(--u))]

                [@media(max-height:520px)_and_(orientation:landscape)]:text-[clamp(2rem,12svh,4rem)]
              "
            >
              Bagh
              <span className="text-[#D6AD55]">-e-Khizar</span>
            </h1>

            {/* Gold line */}

            <div
              className="
                mt-4
                h-px
                w-20
                bg-[#D6AD55]

                sm:mt-5
                sm:w-24

                md:mt-6
                md:w-28

                lg:mt-5
                lg:w-28

                min-[1920px]:mt-[calc(20*var(--u))]
                min-[1920px]:w-[calc(112*var(--u))]

                [@media(max-height:520px)_and_(orientation:landscape)]:mt-3
              "
            />

            {/* Identity */}

            <ul
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-x-2.5
                gap-y-2

                font-amiri
                text-[11px]
                uppercase
                tracking-[0.08em]
                text-[#D9D5C7]

                sm:mt-5
                sm:gap-x-3
                sm:text-xs
                sm:tracking-[0.12em]

                md:mt-6
                md:text-[13px]
                md:tracking-[0.14em]

                lg:mt-5
                lg:text-[13px]

                min-[1920px]:mt-[calc(20*var(--u))]
                min-[1920px]:gap-x-[calc(12*var(--u))]
                min-[1920px]:gap-y-[calc(8*var(--u))]
                min-[1920px]:text-[length:calc(13*var(--u))]

                [@media(max-height:520px)_and_(orientation:landscape)]:mt-3
              "
            >
              {identity.map((word, index) => (
                <li
                  key={word}
                  className="
                    flex items-center gap-2.5
                    sm:gap-3
                    min-[1920px]:gap-[calc(12*var(--u))]
                  "
                >
                  {index > 0 && (
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[#D6AD55]

                        min-[1920px]:h-[calc(4*var(--u))]
                        min-[1920px]:w-[calc(4*var(--u))]
                      "
                      aria-hidden="true"
                    />
                  )}

                  {word}
                </li>
              ))}
            </ul>
          </Rise>

          {/* =================================================
              MIDDLE: LOGO
              Stacked layout: sits between heading and CTA.
              Short landscape: right-hand column, spans both rows.
          ================================================== */}

          <div
            className="
              flex
              flex-1
              items-center
              justify-center

              py-4

              sm:py-6

              md:py-7

              lg:py-8

              min-[1920px]:py-[calc(32*var(--u))]

              [@media(max-height:520px)_and_(orientation:landscape)]:col-start-2
              [@media(max-height:520px)_and_(orientation:landscape)]:row-span-2
              [@media(max-height:520px)_and_(orientation:landscape)]:row-start-1
              [@media(max-height:520px)_and_(orientation:landscape)]:py-0
            "
          >
            <Rise delay={200} className="relative">
              {/* Soft dark glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-6
                  bg-[radial-gradient(closest-side,rgba(4,10,7,0.75),rgba(4,10,7,0))]

                  sm:-inset-10

                  md:-inset-12
                "
                aria-hidden="true"
              />

              {/* Logo */}

              <img
                src={logo}
                alt=""
                aria-hidden="true"
                width="640"
                height="783"
                decoding="async"
                className="
                  relative
                  block
                  h-[clamp(90px,20svh,208px)]
                  w-auto

                  sm:h-[clamp(100px,21svh,208px)]

                  md:h-[clamp(110px,22svh,208px)]

                  lg:h-[clamp(88px,22svh,208px)]

                  min-[1920px]:h-[clamp(88px,22svh,calc(208*var(--u)))]

                  [@media(max-height:520px)_and_(orientation:landscape)]:h-[clamp(72px,40svh,170px)]
                "
              />
            </Rise>
          </div>

          {/* =================================================
              BOTTOM: INSTITUTE + BUTTON
          ================================================== */}

          <Rise
            delay={300}
            className="
              w-full
              max-w-[620px]
              [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]

              min-[1920px]:max-w-[calc(620*var(--u))]

              [@media(max-height:520px)_and_(orientation:landscape)]:col-start-1
              [@media(max-height:520px)_and_(orientation:landscape)]:row-start-2
            "
          >
            <Link
              to="/Initiatives"
              aria-label="Dr. Rank Nazeer Institute of Excellence, learn more"
              className="
                group
                block
                w-fit
                max-w-full

                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-8
                focus-visible:outline-[#E7C76C]
              "
            >
              {/* Institute */}

              <div
                className="
                  flex
                  items-center

                  gap-2.5

                  sm:gap-3

                  md:gap-4

                  min-[1920px]:gap-[calc(16*var(--u))]
                "
              >
                {/* Emblem */}

                <InstituteEmblem
                  className="
                    h-[42px]
                    w-auto
                    aspect-[5/6]
                    shrink-0

                    sm:h-[52px]

                    md:h-[60px]

                    min-[1920px]:h-[calc(60*var(--u))]
                  "
                />

                {/* Institute name */}

                <div className="min-w-0">
                  <p
                    className="
                      font-amiri
                      text-[clamp(0.75rem,3.2vw,1.05rem)]
                      font-bold
                      leading-[1.25]
                      tracking-[-0.005em]

                      lg:text-[clamp(1.05rem,1.25vw,1.3rem)]

                      min-[1920px]:text-[length:calc(20.8*var(--u))]
                    "
                  >
                    <span className="text-[#F4F0E5]">
                      Dr. Rank Nazeer
                    </span>{" "}
                    <span className="text-[#D6AD55]">
                      Institute of Excellence
                    </span>
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      uppercase
                      leading-[1.6]
                      tracking-[0.1em]
                      text-[#C3C4BA]

                      sm:tracking-[0.15em]

                      md:text-[10px]
                      md:tracking-[0.18em]

                      min-[1920px]:mt-[calc(4*var(--u))]
                      min-[1920px]:text-[length:calc(10*var(--u))]
                    "
                  >
                    Civil Services &amp; Competitive Examinations
                  </p>
                </div>
              </div>

              {/* Navigation arrow */}

              <div
                className="
                  mt-2.5
                  flex
                  items-center

                  sm:mt-3

                  md:mt-4

                  min-[1920px]:mt-[calc(16*var(--u))]

                  [@media(max-height:520px)_and_(orientation:landscape)]:mt-2
                "
                aria-hidden="true"
              >
                <span
                  className="
                    h-px
                    w-10
                    bg-[#D6AD55]/70
                    transition-all
                    duration-500
                    motion-reduce:transition-none

                    group-hover:w-16

                    sm:w-14
                    sm:group-hover:w-20

                    md:w-16
                    md:group-hover:w-24

                    min-[1920px]:w-[calc(64*var(--u))]
                    min-[1920px]:group-hover:w-[calc(96*var(--u))]
                  "
                />

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D6AD55]/70
                    text-[#D6AD55]
                    transition-colors
                    duration-300
                    motion-reduce:transition-none

                    group-hover:border-[#D6AD55]
                    group-hover:bg-[#D6AD55]
                    group-hover:text-[#10251A]

                    sm:h-9
                    sm:w-9

                    min-[1920px]:h-[calc(36*var(--u))]
                    min-[1920px]:w-[calc(36*var(--u))]
                  "
                >
                  <Arrow className="transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            {/* Publications button */}

            <div
              className="
                mt-5

                sm:mt-6

                md:mt-7

                min-[1920px]:mt-[calc(28*var(--u))]

                [@media(max-height:520px)_and_(orientation:landscape)]:mt-3
              "
            >
              <Link
                to="/Publications"
                className="
                  group
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-[#D6AD55]
                  px-6
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
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

                  sm:min-h-12
                  sm:w-auto
                  sm:px-7

                  md:px-8

                  min-[1920px]:min-h-[calc(48*var(--u))]
                  min-[1920px]:gap-[calc(10*var(--u))]
                  min-[1920px]:px-[calc(32*var(--u))]
                  min-[1920px]:text-[length:calc(11*var(--u))]

                  [@media(max-height:520px)_and_(orientation:landscape)]:w-auto
                "
              >
                <span>Our Publications</span>

                <Arrow className="transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1" />
              </Link>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  );
}

export default Hero;