import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  // Mail,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";

// ============================================================
// 1. YOUR DETAILS — edit these
// ============================================================

const CONTACT = {
  email: "baghekhizar@gmail.com",
};

// Free key from https://web3forms.com
// Put it in a .env file:
// VITE_WEB3FORMS_KEY=your-access-key
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// Message length limits
const MIN_MESSAGE = 10;
const MAX_MESSAGE = 1500;

// ============================================================
// 2. SHARED RESPONSIVE TOKENS
// ============================================================

const PX = "px-6 sm:px-10 lg:px-[6vw]";

const WRAP = "mx-auto w-full max-w-[1200px] 2xl:max-w-[1360px]";

const LABEL =
  "text-xs font-semibold uppercase tracking-[0.16em] text-[#9A7430] sm:tracking-[0.2em]";

const H2 =
  "font-amiri text-[clamp(1.9rem,7vw,2.6rem)] font-bold leading-tight lg:text-[clamp(2.4rem,3.6vw,3.25rem)]";

const CONTROL =
  "w-full border-b border-[#10251A]/20 bg-transparent px-0 py-3 text-base text-[#10251A] outline-none placeholder:text-[#969990] focus:border-[#D6AD55] lg:text-sm";

const FORM_LABEL =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#555B53] sm:tracking-[0.14em]";

// ============================================================
// 3. DATA
// ============================================================

const ENQUIRY_SLUGS = {
  general: "General Enquiry",
  authors: "Authors & Manuscripts",
  books: "Books & Publications",
  libraries: "Libraries & Institutions",
  booksellers: "Booksellers & Distribution",
  collaborations: "Collaborations",
  other: "Other",
};

const enquiryTypes = Object.values(ENQUIRY_SLUGS);

const emptyForm = {
  name: "",
  email: "",
  enquiry: "",
  message: "",
};

// ============================================================
// 4. COMPONENT
// ============================================================

function ContactComponent() {
  const [formData, setFormData] = useState(emptyForm);

  // "idle" | "sending" | "success" | "invalid" | "error"
  const [status, setStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const [copied, setCopied] = useState(false);

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  // ---------- helpers ----------

  const resetStatus = () => {
    if (status === "success" || status === "error" || status === "invalid") {
      setStatus("idle");
    }
  };

  // Smooth-scroll to the form
  const scrollToForm = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    formRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

    // Only auto-focus on devices with a mouse
    if (window.matchMedia("(hover: hover)").matches) {
      setTimeout(() => {
        const target = formData.name ? messageRef.current : nameRef.current;
        target?.focus({ preventScroll: true });
      }, 600);
    }
  };

  // Copy email to clipboard
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  // ---------- form ----------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    resetStatus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam trap
    if (new FormData(e.currentTarget).get("website")) {
      setStatus("success");
      return;
    }

    // Check for whitespace-only or very short input
    const name = formData.name.trim();
    const message = formData.message.trim();

    if (name.length < 2) {
      setFormError("Please enter your name.");
      setStatus("invalid");
      nameRef.current?.focus();
      return;
    }

    if (message.length < MIN_MESSAGE) {
      setFormError(
        `Please write at least ${MIN_MESSAGE} characters so we can help you properly.`
      );
      setStatus("invalid");
      messageRef.current?.focus();
      return;
    }

    if (!WEB3FORMS_KEY) {
      console.error("Missing VITE_WEB3FORMS_KEY in your .env file.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry (${formData.enquiry}) - Bagh-e-Khizar`,
          from_name: "Bagh-e-Khizar Website",
          name,
          email: formData.email.trim(),
          enquiry_type: formData.enquiry,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Request failed");
      }

      setStatus("success");
      setFormData(emptyForm);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="overflow-x-hidden bg-[#F4F0E5] text-[#10251A]">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[72svh] overflow-hidden bg-[#10251A]">
        {/* Decorative circles */}

        <div className="absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full border border-[#D6AD55]/10 sm:-right-40 sm:-top-40 sm:h-[500px] sm:w-[500px]" />

        <div className="absolute -bottom-48 -left-32 h-[320px] w-[320px] rounded-full border border-[#D6AD55]/10 sm:-bottom-64 sm:-left-40 sm:h-[500px] sm:w-[500px]" />

        {/* Decorative dots */}

        <div className="absolute right-[15%] top-[22%] h-2 w-2 rounded-full bg-[#D6AD55]" />

        <div className="absolute bottom-[20%] left-[18%] h-1 w-1 rounded-full bg-[#D6AD55]/70" />

        <div
          className={`relative mx-auto flex min-h-[72svh] max-w-[1400px] items-center py-24 sm:py-28 2xl:max-w-[1560px] ${PX}`}
        >
          <div className="w-full max-w-4xl">
            {/* Small heading */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-amiri text-sm uppercase tracking-[0.18em] text-[#D6AD55] sm:tracking-[0.22em] md:text-base"
            >
              Bagh-e-Khizar
            </motion.p>

            {/* Main heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-amiri text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[0.98] tracking-[-0.02em] text-[#F4F0E5] sm:mt-6"
            >
              Contact Us
            </motion.h1>

            {/* Gold line */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 h-px max-w-full bg-[#D6AD55] sm:mt-8"
            />

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-2xl text-base leading-7 text-[#D9D5C7] sm:mt-8 sm:leading-8 md:text-lg"
            >
              Whether you are a student, reader, author, scholar, institution,
              bookseller or simply someone who wishes to connect with
              Bagh-e-Khizar, we would be glad to hear from you.
            </motion.p>

            {/* Button */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#D6AD55] px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-[#10251A] transition-all duration-300 hover:bg-[#E7C76C] sm:w-auto"
              >
                Write to Us
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </button>
            </motion.div>

            {/* Identity */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-amiri text-xs uppercase tracking-[0.14em] text-[#C3C4BA] sm:mt-10 sm:tracking-[0.16em]"
            >
              <span>Discover</span>
              <span className="text-[#D6AD55]">•</span>
              <span>Learn</span>
              <span className="text-[#D6AD55]">•</span>
              <span>Educate</span>
              <span className="text-[#D6AD55]">•</span>
              <span>Publish</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIRECT EMAIL
      ===================================================== */}

      <section className={`py-14 sm:py-16 lg:py-20 ${PX}`}>
        <div className={WRAP}>
          <div className="border border-[#10251A]/10 bg-[#EEE9DC] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <div>
                <p className={LABEL}>Email Us</p>

                <p className="mt-3 text-sm leading-6 text-[#62675F] sm:text-base">
                  For publications, manuscripts, collaborations and general
                  enquiries, write to us directly.
                </p>
              </div>

              <div className="flex min-w-0 items-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="min-w-0 break-all font-amiri text-2xl font-semibold text-[#10251A] transition-colors duration-300 hover:text-[#9A7430] sm:text-3xl"
                >
                  {CONTACT.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  title={copied ? "Copied" : "Copy email"}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#10251A]/10 text-[#7A7D75] transition-colors duration-300 hover:border-[#D6AD55] hover:text-[#10251A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6AD55]"
                >
                  {copied ? (
                    <Check size={16} strokeWidth={1.75} />
                  ) : (
                    <Copy size={16} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section className={`py-16 sm:py-24 lg:py-32 ${PX}`}>
        <div
          className={`${WRAP} grid gap-10 sm:gap-14 lg:grid-cols-[0.7fr_1.3fr]`}
        >
          {/* LEFT CONTENT */}

          <div>
            <p className={LABEL}>Send an Enquiry</p>

            <h2 className={`mt-5 ${H2}`}>Write to us.</h2>

            <div className="mt-6 h-px w-16 bg-[#D6AD55]" />

            <p className="mt-6 max-w-md text-base leading-7 text-[#666A62] sm:mt-7 sm:leading-8">
              Tell us a little about your enquiry and our team can get back to
              you with the relevant information.
            </p>

            {/* Quote */}

            <div className="mt-8 border-l border-[#D6AD55] pl-4 sm:mt-12 sm:pl-6">
              <p className="font-amiri text-lg italic leading-8 text-[#4F5B51] sm:text-xl">
                "Knowledge grows when it is shared."
              </p>
            </div>
          </div>

          {/* FORM */}

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="relative min-w-0 scroll-mt-24 overflow-hidden border border-[#10251A]/10 bg-[#EEE9DC] p-5 sm:p-8 lg:p-10"
          >
            {/* Honeypot */}

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            {/* NAME + EMAIL */}

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-7">
              {/* Name */}

              <div className="min-w-0">
                <label htmlFor="name" className={FORM_LABEL}>
                  Your Name
                </label>

                <input
                  ref={nameRef}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className={CONTROL}
                />
              </div>

              {/* Email */}

              <div className="min-w-0">
                <label htmlFor="email" className={FORM_LABEL}>
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={CONTROL}
                />
              </div>
            </div>

            {/* ENQUIRY TYPE */}

            <div className="mt-6 sm:mt-8">
              <label htmlFor="enquiry" className={FORM_LABEL}>
                Enquiry Type
              </label>

              <select
                id="enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                required
                className={CONTROL}
              >
                <option value="">Select an enquiry type</option>

                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}

            <div className="mt-6 sm:mt-8">
              <label htmlFor="message" className={FORM_LABEL}>
                Your Message
              </label>

              <textarea
                ref={messageRef}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                maxLength={MAX_MESSAGE}
                placeholder="Write your message here..."
                className={`${CONTROL} resize-none leading-7`}
              />

              <p className="mt-1 text-right text-[11px] text-[#8A8D85]">
                {formData.message.length} / {MAX_MESSAGE}
              </p>
            </div>

            {/* BUTTON + STATUS */}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#10251A] px-8 text-xs font-semibold uppercase tracking-[0.12em] text-[#F4F0E5] transition-all duration-300 hover:bg-[#1B3928] hover:shadow-[0_12px_30px_rgba(16,37,26,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6AD55] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending..." : "Send Message"}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              {/* Success message */}

              {status === "success" && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-[#52684F]"
                >
                  Thank you. Your enquiry has been received.
                </motion.p>
              )}

              {/* Validation message */}

              {status === "invalid" && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-[#9B3B2F]"
                >
                  {formError}
                </motion.p>
              )}

              {/* Sending failed */}

              {status === "error" && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-[#9B3B2F]"
                >
                  Something went wrong. Please try again, or email us at{" "}
                  <a href={`mailto:${CONTACT.email}`} className="underline">
                    {CONTACT.email}
                  </a>
                  .
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* =====================================================
          CLOSING SECTION
      ===================================================== */}

      <section
        className={`border-t border-[#10251A]/10 py-16 sm:py-20 lg:py-24 ${PX}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-amiri text-xl italic leading-relaxed text-[#536054] sm:text-2xl md:text-3xl">
            "Every book has a journey. Every reader is its traveler."
          </p>

          <div className="mx-auto mt-6 h-px w-16 bg-[#D6AD55] sm:mt-8" />

          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#777B73] sm:mt-7">
            Bagh-e-Khizar
          </p>
        </div>
      </section>
    </main>
  );
}

export default ContactComponent;
