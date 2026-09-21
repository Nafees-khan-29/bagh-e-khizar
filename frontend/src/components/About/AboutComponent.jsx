import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ============================================================
// IMAGES
// ============================================================

import about5 from "../../assets/about5.jpeg";
import about1 from "../../assets/about1.jpeg";
import about3 from "../../assets/about3.jpeg";
import about4 from "../../assets/about4.jpeg";
import about2 from "../../assets/about2.jpeg";

// Your Bagh-e-Khizar publication
import bookImage from "../../assets/book.jpeg";

// ============================================================
// SHARED RESPONSIVE TOKENS
// (kept as full class strings so Tailwind can detect them)
// ============================================================

// Horizontal / vertical section spacing
const PAD_X = "px-5 sm:px-8 md:px-10 lg:px-[7vw]";
const PAD_Y = "py-16 sm:py-24 md:py-32 lg:py-40";

// Content wrapper: grows a little on very large monitors
const WRAP = "mx-auto w-full max-w-[1200px] 2xl:max-w-[1360px]";

// Small section label
const EYEBROW =
  "mb-5 inline-block text-[10px] uppercase tracking-[0.22em] sm:mb-7 sm:tracking-[0.3em]";

// Fluid section heading (single column on mobile/tablet, two columns from lg)
const H2 =
  "font-amiri text-[clamp(2.5rem,9vw,4.5rem)] leading-[1.02] lg:text-[clamp(3rem,6vw,6rem)] lg:leading-[0.95]";

// Serif lead paragraph + regular body copy
const LEAD = "font-amiri text-xl leading-[1.5] sm:text-2xl lg:text-3xl";
const BODY = "text-[15px] leading-7 sm:text-base sm:leading-8";

// Framed image card
const FRAME =
  "relative flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#10251A] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:min-h-[420px] sm:p-3 lg:min-h-[500px]";
const FRAME_LINE =
  "pointer-events-none absolute inset-2 border border-[#D6AD55]/25 sm:inset-3";
const FRAME_IMG =
  "h-auto max-h-[75svh] w-full object-contain object-center transition-transform duration-700 sm:max-h-[700px]";

// ============================================================
// ABOUT COMPONENT
// ============================================================

function AboutComponent() {
  const imageRefs = useRef([]);

  // Ref callback factory (braces avoid returning a value from the ref callback)
  const setRef = (i) => (el) => {
    imageRefs.current[i] = el;
  };

  useEffect(() => {
    document.title = "About — Bagh-e-Khizar";

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Pointer parallax only makes sense with a mouse / trackpad
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const images = imageRefs.current;

    if (reduceMotion.matches || !finePointer.matches || !images.length) return;

    let frame = 0;

    const handlePointerMove = (e) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;

        images.forEach((el, i) => {
          if (!el) return;

          const strength = i % 2 === 0 ? 3 : -3;

          // The standalone `translate` property is used (not `transform`) so it
          // doesn't fight framer-motion's scale animation or the Tailwind
          // hover-scale on the book cover.
          el.style.translate = `${nx * strength}px ${ny * strength}px`;
        });
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
      images.forEach((el) => {
        if (el) el.style.translate = "";
      });
    };
  }, []);

  const commitments = [
    {
      title: "Preserve Knowledge",
      text: "We preserve literary, spiritual, historical and cultural works that carry enduring value across generations.",
    },
    {
      title: "Encourage Thoughtful Reading",
      text: "We encourage reading, reflection and scholarship that deepen understanding and invite meaningful dialogue.",
    },
    {
      title: "Amplify Meaningful Voices",
      text: "We help deserving authors and ideas reach wider audiences while keeping their character and purpose intact.",
    },
    {
      title: "Publish with Integrity",
      text: "We value accuracy, authenticity and responsible editorial practices in every work we bring forward.",
    },
    {
      title: "Connect Tradition with Today",
      text: "We use contemporary publishing standards to make enduring knowledge accessible to the modern reader.",
    },
    {
      title: "Build Bridges Through Knowledge",
      text: "We create space for India's intellectual and spiritual traditions to connect people, cultures and generations.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#F4F0E5] text-[#1B2A20]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[100svh] overflow-hidden bg-[#10251A]">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={about5}
            alt="Scholar studying by the light of a lamp"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#10251A]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10251A]/30 via-[#10251A]/45 to-[#10251A]/95" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 pb-28 pt-24 text-center sm:px-8 sm:pb-24">
          <div className="w-full max-w-[900px] 2xl:max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mb-8 sm:gap-x-4"
            >
              <span className="font-amiri text-lg text-[#D6AD55] sm:text-xl">
                باغِ خضر
              </span>

              <span className="hidden h-px w-10 bg-[#D6AD55]/60 sm:block" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#EDE8DC]/80 sm:tracking-[0.28em]">
                A garden of knowledge
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-amiri text-[clamp(2.25rem,7vw,4.6rem)] font-bold leading-[1] text-[#F4F0E5] 2xl:text-[5.5rem]"
            >
              About
              <br />
              <span className="block pt-1 text-[clamp(2.5rem,11vw,5rem)] font-bold leading-[1.05] text-[#D6AD55] sm:text-[clamp(2.6rem,8vw,4.6rem)] 2xl:text-[6.5rem]">
                Bagh-e-Khizar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mx-auto mt-8 max-w-[650px] font-amiri text-[clamp(1.05rem,4vw,1.45rem)] leading-[1.7] text-[#EDE8DC]/90 sm:mt-10 2xl:max-w-[760px] 2xl:text-[1.65rem]"
            >
              A space for knowledge, spirituality, literature
              <br className="hidden sm:block" /> and the timeless search for
              truth.
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "64px", opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mx-auto mt-8 h-px bg-[#D6AD55] sm:mt-10"
            />
          </div>
        </div>

        {/* Scroll indicator (hidden on short landscape screens) */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center sm:bottom-8 [@media(max-height:520px)]:hidden">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#EDE8DC]/70">
            Explore
          </span>

          <motion.div
            animate={{ scaleY: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mt-3 h-10 w-px origin-top bg-[#D6AD55] sm:h-12"
          />
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className={`bg-[#F4F0E5] ${PAD_X} ${PAD_Y}`}>
        <div
          className={`${WRAP} grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1 }}
          >
            <span className={`${EYEBROW} font-medium text-[#687969]`}>
              01 — THE GARDEN
            </span>

            <h2 className={`${H2} text-[#172D20]`}>
              A humble
              <br />
              garden of
              <br />
              <em className="text-[#526554]">knowledge.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1 }}
            className="lg:pt-14"
          >
            <p className={`${LEAD} text-[#1B2A20]`}>
              Bagh-e-Khizar is conceived as a humble garden of knowledge and
              contemplation—an endeavour rooted in the belief that the written
              word can illuminate the mind, enrich the heart and bring
              generations closer to the wisdom of those who walked the path
              before us.
            </p>

            <p className={`mt-6 sm:mt-8 ${BODY} text-[#536057]`}>
              The name Bagh-e-Khizar evokes the timeless symbolism of Khizar
              (Al-Khidr)—the mysterious guide associated with knowledge, wisdom
              and the hidden dimensions of learning.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#536057]`}>
              In that spirit, Bagh-e-Khizar seeks to create a space where
              seekers, readers, writers and lovers of knowledge can come
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          IMAGE — ABOUT 5
      ===================================================== */}

      <section className="bg-[#E8E1D2] px-4 py-12 sm:px-[5vw] sm:py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1 }}
          className="relative mx-auto flex min-h-[320px] max-w-[900px] items-center justify-center overflow-hidden bg-[#10251A] p-2 sm:min-h-[480px] sm:p-3 md:min-h-[640px] lg:min-h-[700px] 2xl:max-w-[1000px]"
        >
          <img
            ref={setRef(0)}
            src={about5}
            alt="Scholar reading and writing"
            loading="lazy"
            className="h-auto max-h-[75svh] w-full object-contain object-center transition-transform duration-700 sm:max-h-[850px]"
          />

          <div className={FRAME_LINE} />

          <div className="absolute bottom-4 left-5 right-5 flex justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F4F0E5] sm:tracking-[0.25em]">
              01
            </span>

            <span className="text-right text-[10px] uppercase tracking-[0.2em] text-[#F4F0E5] sm:tracking-[0.25em]">
              A garden of contemplation
            </span>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          KHIZAR — ABOUT 1
      ===================================================== */}

      <section className={`bg-[#E8E1D2] ${PAD_X} ${PAD_Y}`}>
        <div
          className={`${WRAP} grid items-center gap-12 sm:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="flex items-center justify-center"
          >
            <div className={`${FRAME} mx-auto max-w-[420px] sm:max-w-[460px] lg:max-w-[420px]`}>
              <img
                ref={setRef(1)}
                src={about1}
                alt="Quran and traditional books illuminated by natural light"
                loading="lazy"
                className={FRAME_IMG}
              />

              <div className={FRAME_LINE} />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className={`${EYEBROW} text-[#687969]`}>02 — THE NAME</span>

            <h2 className={`${H2} text-[#172D20]`}>
              In the spirit
              <br />
              of <em className="text-[#526554]">Khizar.</em>
            </h2>

            <p className={`mt-8 sm:mt-12 ${BODY} text-[#536057]`}>
              The name Bagh-e-Khizar evokes the timeless symbolism of Khizar
              (Al-Khidr)—the mysterious guide associated with knowledge, wisdom
              and the hidden dimensions of learning.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#536057]`}>
              Our journey is inspired by the great traditions of scholarship,
              spirituality, literature and humanism that have flourished across
              India and the wider world.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#536057]`}>
              We believe that true knowledge is not confined to one language,
              one community or one discipline. It is a bridge between people,
              cultures and generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VISION — ABOUT 3
      ===================================================== */}

      <section className={`bg-[#F4F0E5] ${PAD_X} ${PAD_Y}`}>
        <div
          className={`${WRAP} grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24`}
        >
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className={`${EYEBROW} text-[#687969]`}>03 — OUR VISION</span>

            <h2 className={`${H2} text-[#172D20]`}>
              Nurturing a living
              <br />
              tradition of
              <br />
              <em className="text-[#526554]">knowledge and wisdom.</em>
            </h2>

            <p className={`mt-8 sm:mt-12 ${LEAD} text-[#1B2A20]`}>
              Our vision is to nurture a living tradition of knowledge, wisdom
              and meaningful literature.
            </p>

            <p className={`mt-6 sm:mt-8 ${BODY} text-[#536057]`}>
              We seek to discover, preserve and present works that have
              enduring value—works that encourage reflection, deepen
              understanding and contribute positively to society.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#536057]`}>
              Bagh-e-Khizar aspires to be more than a publishing or literary
              initiative. It seeks to become a knowledge and cultural platform,
              bringing together books, ideas, heritage, spirituality and
              scholarship in a manner that is accessible to contemporary
              readers while remaining faithful to their original spirit.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <div className={`${FRAME} mx-auto max-w-[560px] lg:max-w-none`}>
              <img
                ref={setRef(2)}
                src={about3}
                alt="Illuminated traditional architectural interior"
                loading="lazy"
                className={FRAME_IMG}
              />

              <div className={FRAME_LINE} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PUBLISHING — BOOK IMAGE
      ===================================================== */}

      <section className={`bg-[#172D20] text-[#F4F0E5] ${PAD_X} ${PAD_Y}`}>
        <div
          className={`${WRAP} grid items-center gap-12 sm:gap-16 lg:grid-cols-[0.9fr_1fr] lg:gap-24`}
        >
          {/* BOOK */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <div className="group relative mx-auto flex w-full max-w-[320px] items-center justify-center overflow-hidden rounded-sm border border-[#D6AD55]/40 bg-[#0B1B12] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:max-w-[400px] sm:p-4 lg:max-w-[430px]">
              <img
                ref={setRef(3)}
                src={bookImage}
                alt="The Indian Export Handbook published by Bagh-e-Khizar Publications"
                loading="lazy"
                className="block h-auto max-h-[720px] w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="pointer-events-none absolute inset-3 border border-[#D6AD55]/20 sm:inset-4" />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className={`${EYEBROW} text-[#D6AD55]`}>
              04 — OUR PUBLISHING ENDEAVOUR
            </span>

            <h2 className={`${H2} text-[#F4F0E5]`}>
              Books that
              <br />
              <em className="text-[#D6AD55]">endure.</em>
            </h2>

            <p className={`mt-8 sm:mt-12 ${BODY} text-[#D8DCD4]`}>
              An important part of our work is the publication and
              dissemination of books that deserve to be read, preserved and
              shared.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#D8DCD4]`}>
              Through Bagh-e-Khizar Publications, we aim to bring forward works
              of literary, historical, spiritual, cultural and intellectual
              significance.
            </p>

            <blockquote className="my-8 border-l border-[#D6AD55] pl-4 font-amiri text-xl leading-relaxed text-[#F4F0E5] sm:my-12 sm:pl-6 sm:text-2xl md:text-3xl">
              “A good book should not merely occupy a place on a bookshelf.”
            </blockquote>

            <p className={`${BODY} text-[#D8DCD4]`}>
              It should open a conversation, inspire a question, preserve a
              memory or illuminate a forgotten part of our collective heritage.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#D6AD55]/40 px-4 py-2 text-[13px] text-[#D6AD55] sm:px-5 sm:py-2.5 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#D6AD55]" />
              Bagh-e-Khizar Publications
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE — ABOUT 4
      ===================================================== */}

      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-[#10251A] sm:min-h-[90svh]">
        <motion.img
          ref={setRef(4)}
          src={about4}
          alt="Traditional gathering of teacher and students"
          loading="lazy"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#10251A]/75 md:bg-[#10251A]/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#10251A]/95 via-[#10251A]/65 to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`relative z-10 w-full max-w-2xl py-20 sm:py-28 md:py-40 ${PAD_X}`}
        >
          <span className={`${EYEBROW} text-[#D6AD55]`}>
            05 — PRESERVING HERITAGE
          </span>

          <h2 className={`${H2} text-[#F4F0E5]`}>
            From the past,
            <br />
            <em className="text-[#D6AD55]">towards the future.</em>
          </h2>

          <p className={`mt-8 sm:mt-12 ${BODY} text-[#E5E7E0]`}>
            India possesses an extraordinary heritage of poetry, mysticism,
            philosophy, scholarship and cultural exchange. Much of this
            heritage has travelled across centuries through manuscripts, oral
            traditions, poetry and the written word.
          </p>

          <p className={`mt-5 sm:mt-6 ${BODY} text-[#E5E7E0]`}>
            Bagh-e-Khizar seeks to participate in the preservation and renewal
            of this heritage.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          OPEN TO ALL — ABOUT 2
      ===================================================== */}

      <section className={`bg-[#E8E1D2] ${PAD_X} ${PAD_Y}`}>
        <div
          className={`${WRAP} grid items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24`}
        >
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className={`${EYEBROW} text-[#687969]`}>
              06 — A GARDEN OPEN TO ALL
            </span>

            <h2 className={`${H2} text-[#172D20]`}>
              Different flowers.
              <br />
              <em className="text-[#526554]">One garden.</em>
            </h2>

            <p className={`mt-8 sm:mt-12 ${LEAD} text-[#1B2A20]`}>
              A garden is a place where different flowers grow together.
            </p>

            <p className={`mt-6 sm:mt-8 ${BODY} text-[#536057]`}>
              Bagh-e-Khizar draws inspiration from that simple idea.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#536057]`}>
              We welcome literature and thought that promote knowledge,
              compassion, harmony, dignity and understanding. Our purpose is
              not to create barriers, but to create bridges.
            </p>

            <p className={`mt-5 sm:mt-6 ${BODY} text-[#536057]`}>
              Whether one comes to Bagh-e-Khizar as a reader, seeker, scholar,
              writer or simply as someone curious to discover something new, we
              hope the experience will leave behind a thought worth carrying
              forward.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <div className={`${FRAME} mx-auto max-w-[560px] lg:max-w-none`}>
              <img
                ref={setRef(5)}
                src={about2}
                alt="Traditional window with patterned light"
                loading="lazy"
                className={FRAME_IMG}
              />

              <div className={FRAME_LINE} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COMMITMENT
      ===================================================== */}

      <section className={`bg-[#F4F0E5] ${PAD_X} ${PAD_Y}`}>
        <div className={WRAP}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className={`${EYEBROW} text-[#687969]`}>
              07 — OUR COMMITMENT
            </span>

            <h2 className={`${H2} text-[#172D20]`}>
              What we
              <br />
              <em className="text-[#526554]">stand for.</em>
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 border-t border-[#526554]/30 sm:mt-16 md:grid-cols-2 lg:mt-24">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index % 2) * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group relative min-h-[170px] border-b border-[#526554]/30 p-6 transition-colors duration-500 hover:bg-[#E8E1D2] sm:min-h-[200px] sm:p-8 lg:min-h-[220px] lg:p-9 ${
                  index % 2 === 0 ? "md:border-r md:border-[#526554]/30" : ""
                }`}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#687969]">
                  0{index + 1}
                </span>

                <div className="mt-6 max-w-md sm:mt-10">
                  <h3 className="font-amiri text-2xl font-bold leading-tight text-[#172D20] sm:text-[1.65rem] lg:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#536057] sm:mt-4">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL JOURNEY
      ===================================================== */}

      <section
        className={`relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#10251A] py-20 text-center sm:py-28 lg:py-32 ${PAD_X}`}
      >
        <div className="absolute inset-0 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 500 C250 250 350 750 500 500 C650 250 750 750 1000 500"
              fill="none"
              stroke="#D6AD55"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10 w-full max-w-4xl"
        >
          <span className={`${EYEBROW} text-[#D6AD55]`}>THE JOURNEY AHEAD</span>

          <h2 className={`${H2} text-[#F4F0E5]`}>
            A journey,
            <br />
            <em className="text-[#D6AD55]">not a destination.</em>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl font-amiri text-xl leading-[1.5] text-[#EDE8DC] sm:mt-14 sm:text-2xl md:text-3xl">
            Bagh-e-Khizar is a journey rather than a destination.
          </p>

          <p className={`mx-auto mt-5 max-w-xl sm:mt-6 ${BODY} text-[#C8CEC6]`}>
            With every book, every reader and every conversation, the garden
            grows.
          </p>

          <div className="mx-auto my-10 h-px w-16 bg-[#D6AD55] sm:my-14" />

          <p className="mx-auto max-w-2xl font-amiri text-xl leading-relaxed text-[#EDE8DC] sm:text-2xl">
            Our hope is that, over time, Bagh-e-Khizar will become a trusted
            home for works that inform the mind, touch the heart and endure
            beyond their time.
          </p>

          <div className="mt-14 flex flex-col items-center sm:mt-24">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#AEB8AE]">
              Welcome to
            </span>

            <span className="mt-3 font-amiri text-5xl text-[#D6AD55] sm:text-6xl md:text-7xl">
              باغِ خضر
            </span>

            <span className="mt-2 font-amiri text-lg text-[#EDE8DC] sm:text-xl">
              Bagh-e-Khizar
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default AboutComponent;