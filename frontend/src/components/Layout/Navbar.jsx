import { Link, useLocation } from "react-router-dom";


// ============================================================
// DATA
// ============================================================

const links = [
  { name: "Home", path: "/", icon: "home" },
  { name: "About", path: "/about", icon: "about" },
  { name: "Publications", path: "/Publications", icon: "publications" },
  { name: "Contact", path: "/contact-us", icon: "contact" },
];


/* Home is exact; the rest also match nested routes (/about/team) and any URL casing. */
function isCurrent(pathname, path) {
  if (path === "/") return pathname === "/";
  return pathname.toLowerCase().startsWith(path.toLowerCase());
}


// ============================================================
// ICONS — outline when idle, solid when the page is active
// ============================================================

function NavIcon({ name, active }) {
  const line = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const solid = { fill: "currentColor" };

  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0" aria-hidden="true">

      {name === "home" && (
        <path
          d="M3.5 10.6 12 3.4l8.5 7.2V19.5a1.5 1.5 0 0 1-1.5 1.5h-4v-5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V21H5a1.5 1.5 0 0 1-1.5-1.5z"
          {...line}
          fill={active ? "currentColor" : "none"}
        />
      )}

      {name === "about" &&
        (active ? (
          <path
            {...solid}
            fillRule="evenodd"
            d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zM12 6.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM11.1 11h1.8v6.2h-1.8z"
          />
        ) : (
          <>
            <circle cx="12" cy="12" r="9" {...line} />
            <path d="M12 11.2v5.3M12 7.7h.01" {...line} />
          </>
        ))}

      {name === "publications" &&
        (active ? (
          <>
            <path
              {...solid}
              d="M11 7.1C9.5 6.2 7.3 5.8 4.3 5.9a.8.8 0 0 0-.8.8v11a.8.8 0 0 0 .8.8c3-.1 5.2.3 6.7 1.2z"
            />
            <path
              {...solid}
              d="M13 7.1c1.5-.9 3.7-1.3 6.7-1.2a.8.8 0 0 1 .8.8v11a.8.8 0 0 1-.8.8c-3-.1-5.2.3-6.7 1.2z"
            />
          </>
        ) : (
          <>
            <path
              d="M12 6.5C10.3 5.3 7.6 4.8 3.5 5v13.5c4.1-.2 6.8.3 8.5 1.5 1.7-1.2 4.4-1.7 8.5-1.5V5c-4.1-.2-6.8.3-8.5 1.5z"
              {...line}
            />
            <path d="M12 6.5V20" {...line} />
          </>
        ))}

      {name === "contact" &&
        (active ? (
          <path
            {...solid}
            fillRule="evenodd"
            d="M5.2 5.5h13.6A2.2 2.2 0 0 1 21 7.7v8.6a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 16.3V7.7a2.2 2.2 0 0 1 2.2-2.2zM3.9 6.9 12 12.6l8.1-5.7v1.6L12 14.2 3.9 8.5z"
          />
        ) : (
          <>
            <rect x="3" y="5.5" width="18" height="13" rx="2.2" {...line} />
            <path d="m3.6 7.8 8.4 5.9 8.4-5.9" {...line} />
          </>
        ))}

    </svg>
  );
}


// ============================================================
// COMPONENT
// ============================================================

/*
  Floating glass dock, fixed to the bottom of the screen.

  · Neutral, near-black glass (no green tint): heavy blur + saturation let the
    page behind it — the hero photo, the floor, the lantern glow — colour the bar,
    so it always matches what it sits over.

  · The active page expands to show its title; the others stay icon-only
    (title appears as a tooltip on hover / keyboard focus, and is always
    available to screen readers).
  · Because the bar is fixed at the bottom, give the page content
    bottom padding (~112px, e.g. `pb-28`) so the last section is never hidden.
*/

function Navbar() {
  const { pathname } = useLocation();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-3 sm:bottom-6">

      <nav
        aria-label="Primary"
        className="pointer-events-auto animate-rise rounded-full border border-white/15 bg-[#0A0907]/70 p-2 opacity-0 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-2xl backdrop-saturate-150 motion-reduce:animate-none motion-reduce:opacity-100"
        style={{ animationDelay: "500ms" }}
      >

        <ul className="flex items-center gap-1">

          {links.map((link) => {
            const active = isCurrent(pathname, link.path);

            return (
              <li key={link.path}>

                <Link
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex h-12 items-center rounded-full px-3.5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-bright motion-reduce:transition-none sm:px-5 ${
                    active
                      ? "bg-white/[0.12] text-gold-bright"
                      : "text-ink/80 hover:bg-white/[0.08] hover:text-ink"
                  }`}
                >

                  <NavIcon name={link.icon} active={active} />

                  {/* Title — grows open on the active item, collapsed (but still readable by screen readers) on the rest */}
                  <span
                    className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                      active ? "ml-2 grid-cols-[1fr] opacity-100" : "ml-0 grid-cols-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden whitespace-nowrap text-[13px] font-medium tracking-wide sm:text-sm">
                      {link.name}
                    </span>
                  </span>

                  {/* Hover / focus tooltip for idle items (desktop) */}
                  {!active && (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-full left-1/2 mb-3 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[#0A0907]/90 px-3 py-1 text-xs text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none md:block"
                    >
                      {link.name}
                    </span>
                  )}

                </Link>

              </li>
            );
          })}

        </ul>

      </nav>

    </div>
  );
}

export default Navbar;