"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import logo from "../assets/navbar_logo.svg";
import logoLight from "../assets/logo_light.svg";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        menuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const links = [
    { href: "/#about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#collaboration", label: "Collaborate" },
  ];

  const transparent = pathname === "/" && !scrolled && !menuOpen;
  const solid = !transparent;

  return (
    <nav
      className={`z-[1000] fixed top-0 left-0 w-full transition-colors duration-200 ${
        solid ? "bg-background border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-16 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="DotSlash home">
          <Image src={transparent ? logoLight : logo} alt="DotSlash CET" width={150} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm !font-body font-medium tracking-wide uppercase transition-colors duration-200 ${
                transparent
                  ? i === 0
                    ? "text-white"
                    : "text-logo-light/90 hover:text-white"
                  : i === 0
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
              } hover:text-primary`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/events"
            className="font-display font-medium uppercase tracking-[0.08em] text-xs bg-primary text-white px-7 py-3 border border-primary transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5"
          >
            Join now →
          </Link>
        </div>

        <button
          className={`md:hidden focus:outline-none menu-button transition-colors duration-200 ${
            transparent ? "text-logo-light" : "text-foreground"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`mobile-menu md:hidden bg-background border-t border-border flex flex-col gap-6 px-6 py-8 transition-all duration-200 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none absolute inset-x-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-body text-base font-medium uppercase tracking-wide text-foreground-muted hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/events"
          onClick={() => setMenuOpen(false)}
          className="font-display font-medium uppercase tracking-[0.08em] text-sm bg-primary text-white px-7 py-3.5 border border-primary text-center"
        >
          Join now →
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;