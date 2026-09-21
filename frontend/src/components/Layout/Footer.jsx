import { Link } from 'react-router-dom'

/* ============================================================
   RESPONSIVE STRATEGY
   ------------------------------------------------------------
   < 640px        Phones. Single column, everything left-aligned,
                  copyright centred (as in your original).
   640 - 1023px   Tablets. 2 columns: brand across the top,
                  Company | Support side by side, Socials below.
                  (Your original went to 4 columns at 768px, which
                  squeezed each column to ~150px.)
   >= 1024px      Laptop / desktop. 4 equal columns.
   >= 1920px      Ultra-wide / 2K / 4K. Everything scales up in
                  proportion through one CSS variable (--u), so the
                  footer stays aligned with the page sections above.

   Also handled: 44px touch targets for links and social icons on
   touch-size screens (original sizes restored at lg+), visible
   keyboard focus on the social icons, and safe-area insets so the
   copyright line never sits under a phone's home indicator.

   Class-group order inside each className string:
     base (phones) -> sm -> md -> lg -> ultra-wide (1920+)
   ============================================================ */

// Shared styles for the footer links (touch-friendly below lg).
const linkClass =
  'inline-block py-2.5 hover:text-ink transition-colors lg:py-0'

// Section headings (Company / Support / Socials).
const headingClass = `
  mb-4 text-xs uppercase tracking-[0.15em] text-gold-bright
  min-[1920px]:mb-[calc(16*var(--u))]
  min-[1920px]:text-[length:calc(12*var(--u))]
  min-[1920px]:leading-[calc(16*var(--u))]
`

// Link lists.
const listClass = `
  flex flex-col text-sm
  lg:gap-3
  min-[1920px]:gap-[calc(12*var(--u))]
  min-[1920px]:text-[length:calc(14*var(--u))]
  min-[1920px]:leading-[calc(20*var(--u))]
`

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-11 w-11
        items-center justify-center
        rounded-full
        border border-gold/35
        transition-colors
        hover:bg-gold hover:text-bg-deep

        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-gold-bright

        lg:h-9 lg:w-9

        min-[1920px]:h-[calc(36*var(--u))]
        min-[1920px]:w-[calc(36*var(--u))]
      "
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer
      className="
        mt-auto
        w-full
        bg-bg-deep
        text-ink-dim

        pl-[env(safe-area-inset-left)]
        pr-[env(safe-area-inset-right)]
        pb-[env(safe-area-inset-bottom)]

        [--u:1px]
        min-[1920px]:[--u:calc(100vw/1920)]
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-10
          px-6
          py-12

          sm:grid-cols-2
          sm:px-8
          sm:py-14

          lg:grid-cols-4
          lg:py-16

          min-[1920px]:max-w-[calc(1280*var(--u))]
          min-[1920px]:gap-[calc(40*var(--u))]
          min-[1920px]:px-[calc(24*var(--u))]
          min-[1920px]:py-[calc(64*var(--u))]
        "
      >

        {/* Brand + tagline */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            to="/"
            className="
              inline-block
              font-amiri
              text-xl
              font-bold
              text-ink

              min-[1920px]:text-[length:calc(20*var(--u))]
              min-[1920px]:leading-[calc(28*var(--u))]
            "
          >
            Bagh<span className="text-gold">-e-Khizar</span>
          </Link>

          <p
            className="
              mt-4
              max-w-xs
              text-sm
              leading-relaxed

              sm:max-w-md

              lg:max-w-xs

              min-[1920px]:mt-[calc(16*var(--u))]
              min-[1920px]:max-w-[calc(320*var(--u))]
              min-[1920px]:text-[length:calc(14*var(--u))]
            "
          >
            A garden, taking root — working toward education, health, and poverty alleviation.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h4 className={headingClass}>Company</h4>
          <ul className={listClass}>
            <li><Link to="/about" className={linkClass}>About Us</Link></li>
            <li><Link to="/Initiatives" className={linkClass}>Our Programs</Link></li>
            <li><Link to="/Publications" className={linkClass}>Our Publication</Link></li>
            {/* <li><Link to="/careers" className={linkClass}>Careers</Link></li> */}
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h4 className={headingClass}>Support</h4>
          <ul className={listClass}>
            <li><Link to="/contact-us" className={linkClass}>Contact Us</Link></li>
            {/* <li><Link to="/get-involved/volunteer" className={linkClass}>Volunteer</Link></li>
            <li><Link to="/legal/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
            <li><Link to="/legal/terms-of-use" className={linkClass}>Terms of Use</Link></li> */}
          </ul>
        </div>

        {/* Socials */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className={headingClass}>Socials</h4>

          <div
            className="
              flex gap-3

              min-[1920px]:gap-[calc(12*var(--u))]
            "
          >

            {/* YouTube */}
            <SocialLink href="https://youtube.com/@bagh-e-khizar?si=9-7mmm4i5qUBUbaE" label="YouTube">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="
                  h-4 w-4

                  min-[1920px]:h-[calc(16*var(--u))]
                  min-[1920px]:w-[calc(16*var(--u))]
                "
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
              </svg>
            </SocialLink>

            {/* Twitter / X */}
            <SocialLink href="https://x.com/BaghKhizar" label="Twitter/X">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="
                  h-4 w-4

                  min-[1920px]:h-[calc(16*var(--u))]
                  min-[1920px]:w-[calc(16*var(--u))]
                "
              >
                <path d="M18.9 2H22l-7.2 8.2L23 22h-6.9l-5.4-6.9L4.4 22H1.3l7.7-8.8L1 2h7l4.9 6.3L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" />
              </svg>
            </SocialLink>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gold/15">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-6
            py-6

            sm:px-8

            md:flex-row

            min-[1920px]:max-w-[calc(1280*var(--u))]
            min-[1920px]:gap-[calc(16*var(--u))]
            min-[1920px]:px-[calc(24*var(--u))]
            min-[1920px]:py-[calc(24*var(--u))]
          "
        >
          <p
            className="
              text-center
              text-xs
              text-ink-dim

              md:text-left

              min-[1920px]:text-[length:calc(12*var(--u))]
              min-[1920px]:leading-[calc(16*var(--u))]
            "
          >
            Copyright © {new Date().getFullYear()} — Bagh-e-Khizar
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer