import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import institutePoster from "../../assets/dr-rank-initiative.jpeg";


// ============================================================
// SHARED RESPONSIVE TOKENS
// (kept as full class strings so Tailwind can detect them)
// ============================================================

// Section vertical / horizontal spacing (add lg:px-[7vw] or lg:px-[8vw] per section)
const PAD = "px-6 py-14 sm:px-10 sm:py-16 lg:py-20 xl:py-24";

// Small uppercase label (colour is added where it is used)
const LABEL =
  "text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.28em]";

// Fluid headings — smaller on phones, original scale from lg up
const H_L =
  "font-amiri text-[clamp(2rem,8vw,3rem)] leading-[1.06] lg:text-[clamp(2.2rem,4.2vw,3.5rem)]";
const H_M =
  "font-amiri text-[clamp(1.85rem,7vw,2.6rem)] leading-[1.1] lg:text-[clamp(2rem,3.6vw,3rem)]";
const H_S =
  "font-amiri text-[clamp(1.7rem,6.5vw,2.4rem)] leading-[1.1] lg:text-[clamp(1.8rem,3vw,2.8rem)]";
const H_F =
  "font-amiri text-[clamp(1.7rem,6.5vw,2.2rem)] leading-[1.05] lg:text-[clamp(1.9rem,3.2vw,2.7rem)]";

// Body copy
const BODY = "text-[14px] leading-7 lg:text-[15px]";

// Hero / CTA buttons: full width on phones, natural width from sm up
const BTN =
  "inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 sm:w-auto";

// Form fields: 1 col phones · 2 cols sm · 1 col lg (narrow form column) · 2 cols xl
const FIELD_GRID = "grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2";


// ============================================================
// DATA
// ============================================================

const programmes = [
  {
    number: "01",
    title: "UPSC Civil Services Examination",
    text: "Prelims, Mains and Interview Guidance",
  },
  {
    number: "02",
    title: "State Civil Services",
    text: "Karnataka and Other States",
  },
  {
    number: "03",
    title: "Other Competitive Examinations",
    text: "SSC, Banking, Railways, Defence and Other Government Examinations",
  },
  {
    number: "04",
    title: "Online & Offline Coaching",
    text: "Live Classes, Recorded Lectures, Interactive Learning and Test Series",
  },
  {
    number: "05",
    title: "Mentorship & Personal Guidance",
    text: "Guidance from experienced faculty and experts",
  },
  {
    number: "06",
    title: "Current Affairs & Answer Writing",
    text: "Regular evaluation and feedback",
  },
];


const approach = [
  "Focused guidance for deserving students",
  "Experienced faculty and subject experts",
  "Comprehensive and updated study material",
  "Regular assessment and feedback",
  "Flexible learning through online and offline modes",
  "Mentorship for personality development",
  "Supportive and value-based learning environment",
];


const principles = [
  {
    title: "Knowledge",
    text: "Learning that develops informed and capable young minds.",
  },
  {
    title: "Character",
    text: "Education that nurtures values, responsibility and integrity.",
  },
  {
    title: "Public Service",
    text: "Preparing students to contribute meaningfully to society.",
  },
];


const benefits = [
  {
    icon: "✦",
    title: "Expert Guidance",
    text: "Learn from experienced faculty and subject experts.",
  },
  {
    icon: "□",
    title: "Flexible Learning",
    text: "Online and offline learning options.",
  },
  {
    icon: "◉",
    title: "Personalised Mentorship",
    text: "Regular interaction, guidance and feedback.",
  },
  {
    icon: "▮",
    title: "Comprehensive Study Support",
    text: "Updated study material and test series.",
  },
  {
    icon: "❧",
    title: "For Deserving Students",
    text: "An inclusive and supportive learning environment.",
  },
];


const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

const states = [
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "Maharashtra",
  "Delhi",
  "Uttar Pradesh",
  "Other",
];

const exams = [
  "UPSC Civil Services",
  "State Civil Services",
  "SSC",
  "Banking",
  "Railways",
  "Defence",
  "Other Competitive Examination",
];

const sources = [
  "Google Search",
  "Social Media",
  "Friend / Family",
  "School / College",
  "Bagh-e-Khizar Website",
  "Other",
];


// ============================================================
// SMALL HELPERS
// ============================================================

// 16px on phones/tablets stops iOS Safari zooming the page when a field is
// focused; drops to the compact 13px size on desktop.
const inputCls =
  "w-full border border-[#172D20]/20 bg-white/60 px-4 py-3 text-base outline-none placeholder:text-[#9AA19A] focus:border-[#B18B35] focus:ring-1 focus:ring-[#B18B35]/30 lg:text-[13px]";


function Field({ id, label, required, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-xs font-medium">
        {label}
        {required && <span className="text-[#B18B35]"> *</span>}
      </label>
      {children}
    </div>
  );
}


// ============================================================
// COMPONENT
// ============================================================

function Initiatives() {
  const GOOGLE_ENROLLMENT_URL =
    import.meta.env.VITE_GOOGLE_ENROLLMENT_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    exam: "",
    source: "",
    receiveUpdates: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!GOOGLE_ENROLLMENT_URL) {
      setError("Enrollment service is not configured. Please try again later.");
      return;
    }

    setSubmitting(true);
    setMessage("");
    setError("");

    try {
      const body = new URLSearchParams({
        fullName: formData.fullName,
        dob: formData.dob,
        gender: formData.gender,
        email: formData.email,
        mobile: formData.mobile,
        state: formData.state,
        city: formData.city,
        exam: formData.exam,
        source: formData.source,
        receiveUpdates: formData.receiveUpdates ? "true" : "false",
      });

      const response = await fetch(GOOGLE_ENROLLMENT_URL, {
        method: "POST",
        body,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setMessage(
        `Enrollment submitted successfully${
          result.applicationId ? ` (${result.applicationId})` : ""
        }. Our team will contact you soon.`
      );

      setFormData({
        fullName: "",
        dob: "",
        gender: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        exam: "",
        source: "",
        receiveUpdates: false,
      });
    } catch (err) {
      console.error("Enrollment submission error:", err);
      setError(
        "Unable to submit your enrollment right now. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="overflow-x-hidden bg-[#F4F0E5] font-jost text-[#172D20]">


      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#10251A] text-[#F4F0E5]">

        <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full border border-[#D6AD55]/10 sm:left-[-150px] sm:top-[-150px] sm:h-[450px] sm:w-[450px]" />
        <div className="pointer-events-none absolute bottom-[-140px] right-[-120px] h-[320px] w-[320px] rounded-full border border-[#D6AD55]/10 sm:bottom-[-180px] sm:right-[-150px] sm:h-[500px] sm:w-[500px]" />
        <div className="absolute left-0 top-0 h-px w-full bg-[#D6AD55]/25" />

        <div className={`relative mx-auto max-w-[1400px] 2xl:max-w-[1560px] ${PAD} lg:px-[7vw]`}>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-14 xl:gap-24">


            {/* HERO LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[700px] 2xl:max-w-[760px]"
            >

              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-6 sm:gap-x-4">
                <span className="font-amiri text-xl text-[#E7C76C]">
                  باغِ خضر
                </span>
                <span className="h-px w-8 bg-[#D6AD55]/50 sm:w-10" />
                <span className={`${LABEL} text-[#AFAF9F]`}>
                  An Initiative
                </span>
              </div>

              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.32em]">
                Education · Empowerment · Opportunity
              </p>

              <h1 className="font-amiri text-[clamp(2.1rem,8vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.015em] lg:text-[clamp(2.4rem,4.2vw,4rem)] lg:leading-[0.98]">
                Dr. Rank Nazeer
                <br />
                <span className="text-[#D6AD55]">
                  Institute of Excellence
                </span>
              </h1>

              <div className="mt-5 h-px w-20 bg-[#D6AD55] sm:mt-6 sm:w-24" />

              <h2 className="mt-5 max-w-[650px] font-amiri text-[clamp(1.25rem,4.2vw,1.75rem)] leading-[1.45] text-[#E7E2D7] sm:mt-6 lg:text-[clamp(1.4rem,2.5vw,2rem)]">
                Civil Services & Competitive Examinations
              </h2>

              <p className={`mt-4 max-w-[620px] ${BODY} text-[#AEB3A9]`}>
                An initiative of Bagh-e-Khizar focused on education,
                preparation, mentorship and opportunities for deserving
                students pursuing competitive examinations.
              </p>

              <div className="mt-7 border-l border-[#D6AD55] pl-4 sm:pl-5">
                <p className="font-amiri text-lg leading-[1.5] text-[#D9D6CA] sm:text-xl">
                  “Knowledge, Character and Public Service
                  are the foundations of a stronger India.”
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#A0A99F] sm:tracking-[0.2em]">
                  — Dr. Rank Nazeer Ahmed
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <a
                  href="#programmes"
                  className={`${BTN} group bg-[#D6AD55] text-[#10251A] hover:bg-[#E7C76C]`}
                >
                  Explore Programmes
                  <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
                </a>

                <a
                  href="#enrollment"
                  className={`${BTN} group border border-[#D6AD55]/40 text-[#E7C76C] hover:border-[#D6AD55] hover:bg-[#D6AD55]/5`}
                >
                  Student Enrollment
                  <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
                </a>

                <Link
                  to="/"
                  className={`${BTN} border border-[#D6AD55]/30 text-[#E7C76C] hover:border-[#D6AD55]`}
                >
                  Bagh-e-Khizar
                  <span>→</span>
                </Link>

              </div>

            </motion.div>


            {/* HERO RIGHT — POSTER */}

            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[400px] sm:max-w-[440px]"
            >
              <div className="absolute -right-2 -top-2 h-full w-full border border-[#D6AD55]/30 sm:-right-3 sm:-top-3" />

              <div className="relative overflow-hidden border border-[#D6AD55]/25 bg-[#F4F0E5] p-2">
                <img
                  src={institutePoster}
                  alt="Dr. Rank Nazeer Ahmed Institute of Excellence"
                  className="h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>
            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          2. ABOUT  (institute + vision & mission + foundation)
      ====================================================== */}

      <section className={`${PAD} lg:px-[8vw]`}>

        <div className="mx-auto max-w-[1150px] 2xl:max-w-[1300px]">

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">


            {/* ABOUT TEXT */}

            <div>

              <p className={`${LABEL} text-[#B18B35]`}>
                About the Institute
              </p>

              <div className="mt-4 h-px w-16 bg-[#B18B35]" />

              <h2 className={`mt-6 ${H_L}`}>
                Educate.
                <br />
                <span className="text-[#9A7932]">
                  Empower. Enlighten. Serve.
                </span>
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-[#59645A] sm:leading-8">
                The Dr. Rank Nazeer Ahmed Institute of Excellence is an
                educational initiative focused on Civil Services and
                Competitive Examinations, with online and offline coaching
                for deserving students. Its approach combines structured
                preparation, experienced faculty, mentorship, assessment
                and value-based learning.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#59645A] sm:leading-8">
                Its educational vision is centred on empowering young
                individuals to develop knowledge, character and the
                ability to contribute to a just, inclusive and
                prosperous India.
              </p>

            </div>


            {/* VISION & MISSION — side by side on tablets, stacked on phones and desktop */}

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border border-[#172D20]/10 bg-[#ECE7DA] p-6 sm:p-7"
              >
                <p className={`${LABEL} text-[#B18B35]`}>
                  Our Vision
                </p>
                <h3 className="mt-3 font-amiri text-xl sm:text-2xl">
                  Empower young individuals.
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[#59645A]">
                  To empower young individuals from underrepresented
                  sections to excel in competitive examinations and
                  contribute to a just, inclusive and prosperous India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border border-[#172D20]/10 bg-[#ECE7DA] p-6 sm:p-7"
              >
                <p className={`${LABEL} text-[#B18B35]`}>
                  Our Mission
                </p>
                <h3 className="mt-3 font-amiri text-xl sm:text-2xl">
                  Accessible education.
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[#59645A]">
                  To provide high-quality, accessible and affordable
                  coaching, mentorship and resources that nurture
                  knowledge, character and a commitment to public service.
                </p>
              </motion.div>

            </div>

          </div>


          {/* FOUNDATION STRIP */}

          <div className="mt-12 sm:mt-14">

            <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[#B18B35] sm:tracking-[0.3em]">
              Our Foundation
            </p>

            <div className="mt-6 grid border-y border-[#172D20]/10 md:grid-cols-3 md:divide-x md:divide-[#172D20]/10">

              {principles.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border-b border-[#172D20]/10 p-6 text-center last:border-b-0 sm:p-7 md:border-b-0"
                >
                  <span className="font-amiri text-xl text-[#B18B35]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-amiri text-xl sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[260px] text-[13px] leading-6 text-[#687268]">
                    {item.text}
                  </p>
                </motion.article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          3. PROGRAMMES + WHY CHOOSE US
      ====================================================== */}

      <section
        id="programmes"
        className={`scroll-mt-20 bg-[#172D20] text-[#F4F0E5] ${PAD} lg:px-[8vw]`}
      >

        <div className="mx-auto max-w-[1200px] 2xl:max-w-[1360px]">

          {/* Header */}

          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.3em]">
                Our Programmes
              </p>
              <h2 className={`mt-4 ${H_L}`}>
                Preparing minds
                <br />
                for public service.
              </h2>
            </div>

            <p className={`max-w-[520px] ${BODY} text-[#B6BDB4]`}>
              The institute offers preparation and guidance across
              Civil Services and other competitive examinations.
            </p>

          </div>


          {/* Programme grid */}

          <div className="mt-10 grid border-l border-t border-[#D6AD55]/20 md:grid-cols-2 lg:grid-cols-3">

            {programmes.map((programme, index) => (
              <motion.article
                key={programme.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
                className="group border-b border-r border-[#D6AD55]/20 p-5 transition-colors duration-300 hover:bg-[#D6AD55]/5 sm:p-6"
              >
                <span className="text-[10px] tracking-[0.2em] text-[#D6AD55]">
                  {programme.number}
                </span>

                <h3 className="mt-4 font-amiri text-[1.2rem] leading-[1.2] text-[#F4F0E5] sm:mt-5 sm:text-[1.3rem]">
                  {programme.title}
                </h3>

                <div className="mt-4 h-px w-8 bg-[#D6AD55]/50 transition-all duration-300 group-hover:w-14" />

                <p className="mt-4 text-[13px] leading-6 text-[#AEB6AC]">
                  {programme.text}
                </p>
              </motion.article>
            ))}

          </div>


          {/* Why choose us */}

          <div className="mt-12 grid gap-8 border-t border-[#D6AD55]/20 pt-10 sm:mt-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.3em]">
                Why Choose Us?
              </p>
              <h3 className={`mt-4 ${H_S}`}>
                Focused guidance.
                <br />
                Meaningful preparation.
              </h3>
            </div>

            <div className="grid gap-x-10 sm:grid-cols-2">

              {approach.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.04 }}
                  className="flex gap-4 border-b border-[#D6AD55]/15 py-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6AD55] text-[9px] text-[#10251A]">
                    ✓
                  </span>
                  <p className="text-[13px] leading-6 text-[#B6BDB4] sm:text-sm">
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          4. ABOUT DR. RANK NAZEER AHMED
      ====================================================== */}

      <section className={`bg-[#ECE7DA] ${PAD} lg:px-[8vw]`}>

        <div className="mx-auto max-w-[1150px] 2xl:max-w-[1300px]">

          <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B18B35] sm:tracking-[0.3em]">
                About Dr. Rank Nazeer Ahmed
              </p>
              <div className="mt-4 h-px w-16 bg-[#B18B35]" />

              <h2 className={`mt-6 ${H_M}`}>
                A life of science,
                <br />
                education and service.
              </h2>
            </div>

            <div>

              <p className={`${BODY} text-[#59645A]`}>
                The institute's poster describes Dr. Rank Nazeer Ahmed
                as a scientist, educator and social reformer, and
                highlights his association with NASA and his work in
                education and social development. The profile also notes
                his academic background in engineering, aeronautics,
                theoretical and applied mechanics and management.
              </p>

              <p className={`mt-4 ${BODY} text-[#59645A]`}>
                The material highlights his efforts in establishing
                and supporting educational initiatives, schools,
                colleges, scholarships and programmes for meritorious
                and underprivileged students.
              </p>

              <div className="mt-6 border-l-2 border-[#B18B35] pl-4 sm:pl-6">
                <p className="font-amiri text-lg leading-[1.5] text-[#526554] sm:text-xl">
                  “His life and work continue to inspire
                  young minds to dream, learn and serve humanity.”
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          5. STUDENT ENROLLMENT  (+ closing line)
      ====================================================== */}

      <section
        id="enrollment"
        className={`relative scroll-mt-20 overflow-hidden bg-[#10251A] text-[#F4F0E5] ${PAD} lg:px-[7vw]`}
      >

        <div className="pointer-events-none absolute -left-32 top-20 h-56 w-56 rounded-full border border-[#D6AD55]/10 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full border border-[#D6AD55]/10 sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-[1250px] 2xl:max-w-[1420px]">

          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] xl:gap-16">


            {/* ENROLLMENT LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-[560px]"
            >

              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
                <span className="font-amiri text-xl text-[#E7C76C]">
                  باغِ خضر
                </span>
                <span className="h-px w-8 bg-[#D6AD55]/50 sm:w-9" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9BA59A] sm:tracking-[0.25em]">
                  Student Enrollment
                </span>
              </div>

              <h2 className="font-amiri text-[clamp(2.4rem,9vw,3.5rem)] font-bold leading-[1] tracking-[-0.015em] lg:text-[clamp(2.6rem,4.4vw,4.2rem)] lg:leading-[0.98]">
                Student
                <br />
                <span className="text-[#D6AD55]">Enrollment</span>
              </h2>

              <div className="mt-5 h-px w-20 bg-[#D6AD55] sm:mt-6" />

              <h3 className="mt-5 font-amiri text-[1.3rem] leading-[1.35] text-[#E7E2D7] sm:text-[1.5rem]">
                Take the first step towards{" "}
                <br className="hidden sm:block" />
                a brighter future !
              </h3>

              <p className={`mt-4 max-w-[500px] ${BODY} text-[#B4BBB2]`}>
                Join the Dr. Rank Nazeer Ahmed Institute of Excellence
                and become part of a learning journey focused on Civil
                Services and other competitive examinations.
              </p>


              {/* Benefits */}

              <div className="mt-7 space-y-4">

                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6AD55]/50 bg-[#D6AD55]/10 text-base text-[#D6AD55]">
                      {b.icon}
                    </div>

                    <div>
                      <h4 className="font-amiri text-lg leading-tight text-[#F4F0E5]">
                        {b.title}
                      </h4>
                      <p className="mt-0.5 text-[13px] leading-5 text-[#9FA89F]">
                        {b.text}
                      </p>
                    </div>

                  </div>
                ))}

              </div>


              <div className="mt-8 border-l border-[#D6AD55] pl-4 sm:pl-5">
                <p className="font-amiri text-lg leading-[1.5] text-[#D9D6CA] sm:text-xl">
                  “A just, inclusive and developed India
                  is within the reach of our young people.”
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#8F9990] sm:tracking-[0.18em]">
                  — Dr. Rank Nazeer Ahmed
                </p>
              </div>

            </motion.div>


            {/* ENROLLMENT FORM */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="absolute -right-2 -top-2 h-full w-full border border-[#D6AD55]/25" />

              <div className="relative bg-[#F4F0E5] p-5 text-[#172D20] shadow-[0_25px_70px_rgba(0,0,0,0.22)] sm:p-8 lg:p-9">

                <p className="text-[10px] uppercase tracking-[0.18em] text-[#B18B35] sm:tracking-[0.25em]">
                  Dr. Rank Nazeer Ahmed Institute of Excellence
                </p>

                <h3 className={`mt-3 font-bold ${H_F}`}>
                  Enrollment Form
                </h3>

                <p className="mt-2 text-[13px] text-[#687268]">
                  Fill in your details to register.
                </p>


                <form
                  className="mt-6 space-y-4"
                  onSubmit={handleSubmit}
                >

                  <Field id="fullName" label="Full Name" required>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </Field>


                  <div className={FIELD_GRID}>

                    <Field id="dob" label="Date of Birth" required>
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        autoComplete="bday"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                        className={`${inputCls} min-h-[46px] appearance-none`}
                      />
                    </Field>

                    <Field id="gender" label="Gender" required>
                      <select
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="" disabled>Select</option>
                        {genders.map((g) => (
                          <option key={g.value} value={g.value}>{g.label}</option>
                        ))}
                      </select>
                    </Field>

                  </div>


                  <div className={FIELD_GRID}>

                    <Field id="email" label="Email Address" required>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </Field>

                    <Field id="mobile" label="Mobile Number" required>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        inputMode="tel"
                        placeholder="Enter your mobile number"
                        autoComplete="tel"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </Field>

                  </div>


                  <div className={FIELD_GRID}>

                    <Field id="state" label="State" required>
                      <select
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="" disabled>Select State</option>
                        {states.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="city" label="City / Town" required>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter your city / town"
                        autoComplete="address-level2"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className={inputCls}
                      />
                    </Field>

                  </div>


                  <div className={FIELD_GRID}>

                    <Field id="exam" label="Select Your Exam Interest" required>
                      <select
                        id="exam"
                        name="exam"
                        required
                        value={formData.exam}
                        onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="" disabled>Select an option</option>
                        {exams.map((e) => (
                          <option key={e}>{e}</option>
                        ))}
                      </select>
                    </Field>

                    <Field id="source" label="How did you hear about us?">
                      <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="" disabled>Select an option</option>
                        {sources.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                  </div>


                  <label className="flex cursor-pointer items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      name="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-[#172D20] sm:mt-1 sm:h-4 sm:w-4"
                    />
                    <span className="text-xs leading-5 text-[#59645A]">
                      I am interested in receiving updates about classes,
                      programmes and other initiatives from Bagh-e-Khizar.
                    </span>
                  </label>


                  {message && (
                    <div
                      role="status"
                      className="border border-[#0D5C3A]/20 bg-[#E9F4EE] px-4 py-3 text-sm leading-6 text-[#174C34]"
                    >
                      {message}
                    </div>
                  )}

                  {error && (
                    <div
                      role="alert"
                      className="border border-red-700/20 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group flex w-full items-center justify-center gap-3 bg-[#0D5C3A] px-6 py-4 font-amiri text-lg text-[#F4F0E5] transition-all duration-300 hover:bg-[#174C34] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : "Submit Enrollment"}
                    {!submitting && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>


                  <p className="text-center text-[11px] leading-5 text-[#7C847C]">
                    No documents are required at this stage.
                    <br className="hidden sm:block" />{" "}
                    Our team will get in touch with you soon.
                  </p>

                </form>

              </div>

            </motion.div>

          </div>


          {/* CLOSING LINE */}

          <div className="mt-12 grid items-center gap-8 border-t border-[#D6AD55]/15 pt-10 sm:mt-14 lg:grid-cols-[1.2fr_0.8fr]">

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D6AD55] sm:tracking-[0.3em]">
                An Initiative of Bagh-e-Khizar
              </p>

              <h2 className={`mt-3 font-bold tracking-[-0.01em] ${H_S}`}>
                From aspiration to nation building.
              </h2>

              <p className="mt-3 text-[13px] text-[#B7BDB5]">
                Learn. Prepare. Serve. Lead.
              </p>
            </div>

            <div className="lg:text-right">

              <Link
                to="/"
                className="inline-flex w-full items-center justify-center gap-3 border border-[#D6AD55]/40 px-6 py-4 text-[10px] uppercase tracking-[0.15em] text-[#E7C76C] transition-all duration-300 hover:border-[#D6AD55] sm:w-auto sm:px-7 sm:tracking-[0.2em]"
              >
                Return to Bagh-e-Khizar
                <span>→</span>
              </Link>

              <p className="mt-5 font-amiri text-base text-[#D6AD55] sm:text-lg">
                Knowledge · Character · Public Service
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#7F897F] sm:tracking-[0.25em]">
                Educate · Empower · Enlighten · Serve
              </p>

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}


export default Initiatives;