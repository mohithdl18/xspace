
"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  // { name: "Process", href: "#applications" },
  { name: "FAQ", href: "#contact" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 lg:px-16">

        {/* Logo */}
        <Link
          href="#home"
          className="shrink-0 font-body text-2xl font-extrabold tracking-tight md:text-3xl"
        >
          <span className="text-primary-bg">XSpace</span>
          <span className="text-button-bg">Ply</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden text-secondary-text items-center gap-7 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-body text-sm font-medium text-secondary-text transition-colors duration-300 hover:text-secondary-text"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className="rounded-sm bg-button-bg px-6 py-3 font-body text-sm font-semibold text-secondary-text transition-colors duration-300 hover:bg-hover-bg hover:text-primary-text"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Quote Button */}
        <Link
          href="#contact"
          className="rounded-sm bg-button-bg px-4 py-2.5 font-body text-sm font-semibold text-secondary-text transition-colors duration-300 hover:bg-hover-bg hover:text-primary-text lg:hidden"
        >
          Get Quote
        </Link>

      </div>
    </nav>
  );
}
