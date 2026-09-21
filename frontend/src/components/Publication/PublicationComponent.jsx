import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bookCover from "../../assets/book.jpeg";
import exportArtwork from "../../assets/export-book.jpeg";


// ============================================================
// SHARED RESPONSIVE TOKENS
// (kept as full class strings so Tailwind can detect them)
// ============================================================

// Section vertical / horizontal spacing (add lg:px-[7vw] or lg:px-[8vw] per section)
const PAD = "px-6 py-14 sm:px-10 sm:py-16 lg:py-20 xl:py-24";

// Small uppercase label (colour is added where it is used)
const LABEL =
  "text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.28em]";

// Fluid headings — smaller and gentler on phones, original scale from lg up
const H_XL =
  "font-amiri text-[clamp(1.9rem,7vw,2.75rem)] leading-[1.1] lg:text-[clamp(2.1rem,3.8vw,3.3rem)]";
const H_L =
  "font-amiri text-[clamp(2rem,8vw,3rem)] leading-[1.05] lg:text-[clamp(2.2rem,4.2vw,3.6rem)]";
const H_M =
  "font-amiri text-[clamp(1.85rem,7vw,2.6rem)] leading-[1.1] lg:text-[clamp(2rem,3.4vw,3rem)]";
const H_S =
  "font-amiri text-[clamp(1.7rem,6.5vw,2.4rem)] leading-[1.1] lg:text-[clamp(1.9rem,3.2vw,2.8rem)]";
const H_Q =
  "font-amiri text-[clamp(1.5rem,5.5vw,2rem)] leading-[1.15] lg:text-[clamp(1.7rem,2.6vw,2.3rem)]";
const H_R =
  "font-amiri text-[clamp(1.6rem,6vw,2.2rem)] leading-[1.1] lg:text-[clamp(1.8rem,3vw,2.6rem)]";

// Body copy
const BODY = "text-[14px] leading-7 lg:text-[15px]";

// Buttons: full width on phones, natural width from sm up
const BTN_BASE =
  "group inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 sm:w-auto";


// ============================================================
// DATA
// ============================================================

const publishingInterests = [
  "History & Heritage",
  "Spirituality & Mysticism",
  "Literature & Poetry",
  "Culture & Civilisation",
  "Biographies & Life Stories",
  "Knowledge & Reference Works",
  "India's Intellectual & Cultural Traditions",
  "Contemporary Works of Enduring Relevance",
];


const qualityPoints = [
  {
    number: "01",
    title: "Editorial Quality",
    text: "Careful editing, fact-checking and thoughtful presentation.",
  },
  {
    number: "02",
    title: "Design",
    text: "Contemporary, elegant book design that respects the character of the work.",
  },
  {
    number: "03",
    title: "Production",
    text: "High-quality printing and durable formats suited to individual readers and institutional libraries.",
  },
  {
    number: "04",
    title: "Accessibility",
    text: "Making valuable knowledge available through appropriate print and digital channels.",
  },
  {
    number: "05",
    title: "Distribution",
    text: "Building access through bookstores, online platforms, libraries, institutions and direct readers.",
  },
];


const readers = [
  {
    title: "Readers & Book Lovers",
    text: "Thoughtful and distinctive works for those who seek books worth keeping and sharing.",
  },
  {
    title: "Students & Researchers",
    text: "Reliable books and reference material for learning, study and research.",
  },
  {
    title: "Libraries & Institutions",
    text: "Books of lasting academic, cultural and intellectual value.",
  },
  {
    title: "Families & Younger Generations",
    text: "Works that open doors to India's heritage, ideas and intellectual traditions.",
  },
  {
    title: "Scholars & Seekers",
    text: "Books for those who continue the timeless pursuit of knowledge.",
  },
];


const publishingJourney = [
  "Manuscript Development",
  "Editorial Preparation",
  "Design",
  "Production",
  "Distribution & Promotion",
];


const catalogueLines = [
  { title: "Every book", text: "Has a journey" },
  { title: "Every author", text: "Has a story" },
  { title: "Every reader", text: "Brings new meaning" },
];


// ============================================================
// COMPONENT
// ============================================================

function Publications() {
  return (
    <main className="overflow-x-hidden bg-[#F4F0E5] font-jost text-[#172D20]">


      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#10251A] text-[#F4F0E5]">

        <div className="pointer-events-none absolute left-[5%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#D6AD55]/[0.035] blur-3xl sm:h-[450px] sm:w-[450px]" />
        <div className="pointer-events-none absolute bottom-[-100px] right-[5%] h-[300px] w-[300px] rounded-full bg-[#D6AD55]/[0.025] blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="absolute left-0 top-0 h-px w-full bg-[#D6AD55]/30" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D6AD55]/20" />

        <div className={`relative mx-auto max-w-[1400px] 2xl:max-w-[1560px] ${PAD} lg:px-[7vw]`}>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">


            {/* LEFT — INTRO */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[680px] lg:max-w-[620px] 2xl:max-w-[700px]"
            >

              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-6 sm:gap-x-4">
                <span className="font-amiri text-xl text-[#E7C76C]">
                  باغِ خضر
                </span>
                <span className="h-px w-8 bg-[#D6AD55]/50 sm:w-10" />
                <span className={`${LABEL} text-[#AFAF9F]`}>
                  Publications
                </span>
              </div>

              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.32em]">
                Discover · Preserve · Publish · Share
              </p>

              <h1 className="font-amiri text-[clamp(2.4rem,9vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.015em] lg:text-[clamp(2.8rem,4.6vw,4.8rem)] lg:leading-[0.98]">
                Bagh-e-Khizar
                <br />
                <span className="text-[#D6AD55]">
                  Publications
                </span>
              </h1>

              <div className="mt-5 h-px w-20 bg-[#D6AD55] sm:mt-6 sm:w-24" />

              <h2 className="mt-5 max-w-[600px] font-amiri text-[clamp(1.35rem,4vw,1.9rem)] leading-[1.45] text-[#E7E2D7] sm:mt-6 lg:text-[clamp(1.45rem,2.6vw,2.1rem)]">
                Books that preserve knowledge,
                celebrate heritage and inspire discovery.
              </h2>

              <p className={`mt-5 max-w-[560px] ${BODY} text-[#AEB3A9]`}>
                Bagh-e-Khizar Publications is the publishing arm of
                Bagh-e-Khizar, established with a simple yet enduring
                purpose: to discover, publish and share works that
                have something meaningful to say.
              </p>

              {/* <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <Link
                  to="/books"
                  className={`${BTN_BASE} bg-[#D6AD55] text-[#10251A] hover:bg-[#E7C76C]`}
                >
                  Explore Our Books
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  to="/authors"
                  className="inline-flex w-full items-center justify-center border border-[#D6AD55]/40 px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-[#E7C76C] transition-all duration-300 hover:border-[#D6AD55] sm:w-auto"
                >
                  Submit Your Manuscript
                </Link>

              </div> */}

            </motion.div>


            {/* RIGHT — BOOK */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px]"
            >

              <div className="absolute -right-2 -top-2 h-full w-full border border-[#D6AD55]/30 sm:-right-3 sm:-top-3" />

              <div className="relative overflow-hidden border border-[#D6AD55]/25 bg-[#0A1C13] p-4 sm:p-6">

                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#929B91] sm:tracking-[0.25em]">
                    Featured Publication
                  </span>
                  <span className="font-amiri text-lg text-[#D6AD55]">
                    باغِ خضر
                  </span>
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute inset-x-[15%] bottom-0 h-20 rounded-full bg-black/40 blur-2xl" />
                  <img
                    src={bookCover}
                    alt="The Indian Export Handbook by Mehak Dil Nawaz"
                    className="relative z-10 h-auto max-h-[340px] w-auto max-w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition-transform duration-700 hover:scale-[1.025] sm:max-h-[460px]"
                  />
                </div>

                <div className="mt-5 border-t border-[#D6AD55]/15 pt-4">
                  <p className="text-center font-amiri text-lg text-[#F4F0E5] sm:text-xl">
                    The Indian Export Handbook
                  </p>
                  <p className="mt-2 text-center text-[9px] uppercase leading-relaxed tracking-[0.15em] text-[#899489] sm:tracking-[0.18em]">
                    A Practical Guide to Exports,
                    IT Exports and Artificial Intelligence
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          2. FEATURED PUBLICATION
      ====================================================== */}

      <section className={`${PAD} lg:px-[7vw]`}>

        <div className="mx-auto max-w-[1200px] 2xl:max-w-[1360px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">


            {/* PROMOTIONAL IMAGE */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
            >
              <div className="absolute -bottom-2 -left-2 h-full w-full border border-[#B18B35]/20 sm:-bottom-3 sm:-left-3" />

              <div className="relative overflow-hidden bg-white">
                <img
                  src={exportArtwork}
                  alt="The Indian Export Handbook publication information"
                  loading="lazy"
                  className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>
            </motion.div>


            {/* TEXT */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className={`${LABEL} text-[#B18B35]`}>
                Our First Featured Publication
              </p>

              <h2 className={`mt-4 ${H_L}`}>
                The Indian
                <br />
                Export Handbook
              </h2>

              <p className="mt-3 font-amiri text-lg text-[#526554] sm:text-xl">
                A Practical Guide to India's Export Ecosystem
              </p>

              <div className="mt-5 h-px w-16 bg-[#B18B35]" />

              <p className="mt-6 text-[15px] leading-7 text-[#59645A] sm:leading-8">
                A comprehensive reference for exporters,
                entrepreneurs, MSMEs, students and anyone seeking
                to understand the world of Indian exports. The book
                brings essential information, practical guidance and
                an understanding of India's export ecosystem together
                in one accessible reference.
              </p>


              {/* Metadata — single column on phones, 2×2 from sm */}

              <div className="mt-7 grid grid-cols-1 border-y border-[#172D20]/10 sm:grid-cols-2">

                <div className="border-b border-[#172D20]/10 py-4 sm:border-r sm:pr-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A9389]">Edition</p>
                  <p className="mt-1.5 font-amiri text-lg">First Edition · 2026</p>
                </div>

                <div className="border-b border-[#172D20]/10 py-4 sm:pl-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A9389]">Language</p>
                  <p className="mt-1.5 font-amiri text-lg">English</p>
                </div>

                <div className="border-b border-[#172D20]/10 py-4 sm:border-b-0 sm:border-r sm:pr-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A9389]">Publisher</p>
                  <p className="mt-1.5 font-amiri text-lg">Bagh-e-Khizar Publications</p>
                </div>

                <div className="py-4 sm:pl-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A9389]">ISBN</p>
                  <p className="mt-1.5 break-all font-amiri text-lg sm:break-normal">978-81-904068-0-2</p>
                </div>

              </div>


              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <a
                  href="https://amzn.in/d/0bYYgqOi"
                  className={`${BTN_BASE} bg-[#172D20] text-[#F4F0E5] hover:bg-[#243D2D]`}
                >
                  Order Your Copy
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                {/* <a
                  href="https://amzn.in/d/0bYYgqOi"
                  className="inline-flex w-full items-center justify-center gap-3 border border-[#172D20]/25 px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-[#172D20] transition-all duration-300 hover:border-[#B18B35] sm:w-auto"
                >
                  Order Your Copy
                </a> */}

              </div>

            </motion.div>

          </div>
w
        </div>

      </section>


      {/* =====================================================
          3. PURPOSE & PUBLISHING PHILOSOPHY
      ====================================================== */}

      <section className={`bg-[#172D20] text-[#F4F0E5] ${PAD} lg:px-[8vw]`}>

        <div className="mx-auto max-w-[1200px] 2xl:max-w-[1360px]">


          {/* Purpose */}

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            <div>
              <p className={`${LABEL} text-[#D6AD55]`}>
                Our Purpose
              </p>

              <div className="mt-4 h-px w-16 bg-[#D6AD55]/60" />

              <h2 className={`mt-6 ${H_XL}`}>
                More than printed pages.{" "}
                <br className="hidden sm:block" />
                <span className="text-[#D6AD55]">
                  A bridge between generations.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className={`${BODY} text-[#B6BDB4]`}>
                We believe that a book is more than a collection of
                printed pages. A good book carries an idea, a memory,
                a voice or a piece of knowledge from one generation
                to another.
              </p>

              <p className={`${BODY} text-[#B6BDB4]`}>
                Our publishing programme is guided by a commitment
                to quality, authenticity and lasting value. We seek
                works that expand understanding and enrich the reader.
              </p>
            </div>

          </div>


          {/* Philosophy */}

          <div className="mt-12 border-t border-[#D6AD55]/20 pt-10 sm:mt-14">

            <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">

              <div>
                <p className={`${LABEL} text-[#D6AD55]`}>
                  Our Publishing Philosophy
                </p>
                <h3 className={`mt-4 ${H_S}`}>
                  Ideas that inform.
                  <br />
                  Works that endure.
                </h3>
              </div>

              <p className={`max-w-[520px] ${BODY} text-[#B6BDB4]`}>
                At Bagh-e-Khizar Publications, we are interested in
                works that expand understanding and enrich the reader.
                Our publishing interests encompass history, heritage,
                spirituality, literature, culture and knowledge.
              </p>

            </div>


            <div className="mt-8 grid border-l border-t border-[#D6AD55]/20 sm:grid-cols-2 lg:grid-cols-4">

              {publishingInterests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.04 }}
                  className="group border-b border-r border-[#D6AD55]/20 p-5 transition-colors duration-300 hover:bg-[#D6AD55]/5"
                >
                  <span className="text-[10px] tracking-[0.2em] text-[#D6AD55]">
                    0{index + 1}
                  </span>

                  <h4 className="mt-3 font-amiri text-lg leading-tight sm:mt-4">
                    {interest}
                  </h4>

                  <div className="mt-4 h-px w-8 bg-[#D6AD55]/50 transition-all duration-300 group-hover:w-14" />
                </motion.div>
              ))}

            </div>


            <div className="mt-8 border-l border-[#D6AD55] pl-4 sm:pl-6">
              <p className="max-w-[850px] font-amiri text-[1.1rem] leading-[1.6] text-[#D9D6CA] sm:text-[1.25rem]">
                We are particularly interested in bringing to readers
                works that connect India's extraordinary past with the
                questions and aspirations of the present.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          4. PRESERVING VOICES  +  QUALITY WITH PURPOSE
      ====================================================== */}

      <section className={`bg-[#ECE7DA] ${PAD} lg:px-[8vw]`}>

        <div className="mx-auto max-w-[1150px] 2xl:max-w-[1300px]">

          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">


            {/* Preserving voices */}

            <div>

              <p className={`${LABEL} text-[#B18B35]`}>
                Preserving Voices & Stories
              </p>

              <div className="mt-4 h-px w-16 bg-[#B18B35]" />

              <h2 className={`mt-6 ${H_M}`}>
                Stories waiting
                <br />
                to be rediscovered.
              </h2>

              <p className={`mt-6 ${BODY} text-[#59645A]`}>
                Across India, countless stories, traditions,
                manuscripts, poems, memories and experiences remain
                waiting to be documented and shared. Bagh-e-Khizar
                Publications seeks to provide a platform for such voices.
              </p>

              <p className={`mt-4 ${BODY} text-[#59645A]`}>
                We welcome authors, scholars, researchers and
                independent writers whose work contributes to a deeper
                understanding of people, places, ideas and traditions.
                Where appropriate, we also seek to revive and present
                works that deserve to be rediscovered by a new
                generation of readers.
              </p>

            </div>


            {/* Quality */}

            <div>

              <p className={`${LABEL} text-[#B18B35]`}>
                Quality With Purpose
              </p>

              <h3 className={`mt-4 ${H_Q}`}>
                Meaningful content deserves thoughtful presentation.
              </h3>

              <div className="mt-6 divide-y divide-[#172D20]/10 border-y border-[#172D20]/10">

                {qualityPoints.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="grid grid-cols-[34px_1fr] gap-3 py-4 sm:grid-cols-[40px_1fr]"
                  >
                    <span className="pt-0.5 font-amiri text-lg text-[#B18B35]">
                      {item.number}
                    </span>

                    <div>
                      <h4 className="font-amiri text-xl leading-tight">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[13px] leading-6 text-[#687268] sm:text-sm">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          5. LIBRARY  +  READERS  +  CATALOGUE
      ====================================================== */}

      <section className={`border-t border-[#172D20]/10 ${PAD} lg:px-[8vw]`}>

        <div className="mx-auto max-w-[1150px] 2xl:max-w-[1300px]">


          {/* Building a library */}

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">

            <div>

              <p className={`${LABEL} text-[#B18B35]`}>
                Building a Library for the Future
              </p>

              <h2 className={`mt-4 ${H_XL}`}>
                Not merely for today's{" "}
                <br className="hidden sm:block" />
                bookshelf.
              </h2>

              <p className={`mt-5 max-w-[620px] ${BODY} text-[#59645A]`}>
                Bagh-e-Khizar Publications has a larger ambition than
                creating individual titles. We aspire to build a
                library of meaningful books — a growing collection
                that readers, researchers, students and institutions
                can return to over many years.
              </p>

            </div>

            <div className="border-l border-[#B18B35] pl-4 sm:pl-6">
              <p className="font-amiri text-[1.15rem] leading-[1.5] text-[#526554] sm:text-[1.4rem]">
                “Our books are intended not merely
                for today's bookshelf, but for
                tomorrow's libraries.”
              </p>
            </div>

          </div>


          {/* Readers */}

          <div className="mt-12 border-t border-[#172D20]/10 pt-10 sm:mt-14">

            <div className="grid items-end gap-4 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className={`${LABEL} text-[#B18B35]`}>
                  Our Readers
                </p>
                <h3 className={`mt-4 ${H_R}`}>
                  A readership as diverse
                  as the subjects we explore.
                </h3>
              </div>
            </div>

            {/* 1 col phones · 2 cols sm · 3 cols lg · 5 cols xl (last card fills the row) */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

              {readers.map((reader, index) => (
                <motion.article
                  key={reader.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
                  className="border border-[#172D20]/10 bg-[#ECE7DA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B18B35]/40 sm:last:col-span-2 xl:last:col-span-1"
                >
                  <span className="font-amiri text-lg text-[#B18B35]">
                    0{index + 1}
                  </span>

                  <h4 className="mt-3 font-amiri text-xl leading-tight">
                    {reader.title}
                  </h4>

                  <p className="mt-3 text-[13px] leading-6 text-[#687268]">
                    {reader.text}
                  </p>
                </motion.article>
              ))}

            </div>

          </div>


          {/* Growing catalogue */}

          <div className="mt-12 grid items-center gap-10 border-t border-[#172D20]/10 pt-10 sm:mt-14 lg:grid-cols-2 lg:gap-16">

            <div>

              <p className={`${LABEL} text-[#B18B35]`}>
                Our Growing Catalogue
              </p>

              <h3 className={`mt-4 ${H_R}`}>
                Every publication is
                <br />
                a new addition to the library.
              </h3>

              <p className={`mt-5 ${BODY} text-[#59645A]`}>
                As our catalogue grows, we hope to create a collection
                that reflects the richness and diversity of human
                experience — from the spiritual to the historical,
                from literature to contemporary knowledge.
              </p>

              {/* <Link
                to="/books"
                className="group mt-6 inline-flex items-center gap-4 border-b border-[#B18B35] pb-2 text-[10px] uppercase tracking-[0.2em]"
              >
                View Our Books
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link> */}

            </div>


            <div className="divide-y divide-[#172D20]/15 border-y border-[#172D20]/15">

              {catalogueLines.map((line) => (
                <div
                  key={line.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2 py-4 sm:py-5"
                >
                  <p className="font-amiri text-xl text-[#B18B35] sm:text-2xl">
                    {line.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#7B847A]">
                    {line.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          6. AUTHOR JOURNEY  +  JOIN
      ====================================================== */}

      <section className={`relative overflow-hidden bg-[#172D20] text-[#F4F0E5] ${PAD} lg:px-[8vw]`}>

        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[240px] w-[240px] rounded-full border border-[#D6AD55]/10 sm:h-[350px] sm:w-[350px]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-[220px] w-[220px] rounded-full border border-[#D6AD55]/10 sm:h-[300px] sm:w-[300px]" />

        <div className="relative mx-auto max-w-[1150px] 2xl:max-w-[1300px]">


          {/* From author to reader */}

          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.3em]">
                From the Author to the Reader
              </p>
              <h2 className={`mt-4 ${H_XL}`}>
                A complete publishing journey.
              </h2>
            </div>

            <p className={`max-w-[520px] ${BODY} text-[#AEB3A9]`}>
              Our role does not end when a manuscript is accepted.
              We seek to work with authors through the complete
              publishing journey — from manuscript development to
              distribution and promotion.
            </p>

          </div>


          {/* 1 col phones · 2 cols sm (last step spans both) · 5 cols lg */}
          <div className="mt-8 grid gap-px overflow-hidden border border-[#D6AD55]/20 bg-[#D6AD55]/10 sm:grid-cols-2 lg:grid-cols-5">

            {publishingJourney.map((step, index) => (
              <div
                key={step}
                className="bg-[#172D20] p-5 transition-colors duration-300 hover:bg-[#1F3A29] sm:last:col-span-2 lg:last:col-span-1"
              >
                <span className="text-[10px] text-[#D6AD55]">
                  0{index + 1}
                </span>

                <p className="mt-3 font-amiri text-lg leading-tight sm:mt-4">
                  {step}
                </p>
              </div>
            ))}

          </div>


          {/* Join the journey */}

          <div className="mt-12 grid items-center gap-8 border-t border-[#D6AD55]/20 pt-10 sm:mt-14 lg:grid-cols-[1fr_auto] lg:gap-12">

            <div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.3em]">
                Join the Journey
              </p>

              <h2 className={`mt-4 max-w-[700px] ${H_L}`}>
                Have a story
                <br />
                worth publishing?
              </h2>

              <p className={`mt-5 max-w-[650px] ${BODY} text-[#B7BDB5]`}>
                Are you an author with a manuscript? A scholar with
                research that deserves a wider audience? Do you have
                a forgotten work that deserves to be rediscovered?
                We would be pleased to hear from you.
              </p>

            </div>

            <Link
              to="/contact-us"
              className="group inline-flex w-full items-center justify-center gap-4 bg-[#D6AD55] px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-[#10251A] transition-all duration-300 hover:bg-[#E7C76C] sm:w-auto sm:px-7 sm:tracking-[0.2em]"
            >
              Contact Us
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

          </div>


          {/* Final identity */}

          <div className="mt-12 flex flex-col justify-between gap-5 border-t border-[#D6AD55]/15 pt-7 sm:flex-row sm:items-end">

            <div>
              <p className="font-amiri text-xl text-[#D6AD55] sm:text-2xl">
                Bagh-e-Khizar Publications
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#899389] sm:tracking-[0.25em]">
                Discover · Preserve · Publish · Share
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="font-amiri text-lg text-[#D6D5CA]">
                Knowledge for today.
              </p>
              <p className="font-amiri text-lg text-[#D6D5CA]">
                Heritage for tomorrow.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Publications;