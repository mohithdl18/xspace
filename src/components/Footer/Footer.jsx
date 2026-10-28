
import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Our process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Plywood", href: "#products" },
      { label: "Blockboard", href: "#products" },
      { label: "Doors", href: "#products" },
      { label: "MDF & Boards", href: "#products" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Our Products", href: "#products" },
      { label: "Manufacturing", href: "#process" },
      { label: "Brochure", href: "#brochure" },
      { label: "FAQs", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V13h2.8v8h3.3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 8.5H2V21h3.2V8.5ZM3.6 3A1.9 1.9 0 1 0 3.6 6.8 1.9 1.9 0 0 0 3.6 3ZM21.5 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2V8.5H9.8V21H13v-6.2c0-1.6.3-3.2 2.3-3.2s2 1.9 2 3.3V21h3.2l1-7.2Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7C.5 8.9.5 12 .5 12s0 3.1.5 5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17c.5-1.9.5-5 .5-5s0-3.1-.5-5ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-secondary-bg text-secondary-text">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-0 pt-12 sm:px-8 md:px-12 md:pt-16 lg:px-16">
        {/* Footer navigation */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 font-body text-base font-semibold md:text-lg">
                {column.title}
              </h3>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-secondary-text/75 transition-colors duration-300 hover:text-hover-bg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-body text-base font-semibold md:text-lg">
              Contact
            </h3>

            <ul className="space-y-4 font-body text-sm text-secondary-text/75">
              <li>
                <a
                  href="mailto:info@xspaceply.com"
                  className="break-words transition-colors hover:text-hover-bg"
                >
                  info@xspaceply.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+910000000000"
                  className="transition-colors hover:text-hover-bg"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-hover-bg"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-9 border-t border-secondary-text/20 md:my-10" />

        {/* Address, copyright and social links */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div className="max-w-xl">
            <p className="font-body text-base leading-7 md:text-lg">
              XSpace Ply
              <br />
              Powered by C Nanjappa Timbers
            </p>

            <p className="mt-4 font-body text-sm text-secondary-text/75">
              © {currentYear} XSpace Ply. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-text text-secondary-bg transition-colors duration-300 hover:bg-hover-bg"
              >
                <span className="h-[17px] w-[17px]">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Large background wordmark */}
        <div className="pointer-events-none relative mt-7 h-[130px] overflow-hidden sm:h-[170px] md:mt-4 md:h-[220px] lg:h-[260px]">
          <p
            aria-hidden="true"
            className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-body text-[19vw] leading-none text-secondary-text/[0.09] sm:text-[18vw] lg:text-[16vw]"
          >
            XSpacePly
          </p>
        </div>
      </div>
    </footer>
  );
}
