import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../assets/logo_light.svg"
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { href: "https://www.instagram.com/dotslash.cet/", label: "Instagram", Icon: Instagram },
  { href: "https://in.linkedin.com/company/dotslash-cse-cet", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/dotslash_cet?lang=en", label: "Twitter", Icon: Twitter },
];

const explore = [
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#collaboration", label: "Collaborate" },
];

const quick = [
  { href: "/events", label: "Register" },
  { href: "/#tshirt", label: "Get the tee" },
  { href: "https://forms.gle/r4VKAswC8zZhFrdY9", label: "For clubs", external: true },
];

const contact = [
  { name: "Geevees", phone: "+91 95623 20988" },
  { name: "Arya Vijayan", phone: "+91 77364 73139" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-logo-light">
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16 pt-16 md:pt-24">
        {/* Technical top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-body text-xs uppercase tracking-[0.3em] text-logo-light/60 pb-8 border-b border-logo-light/20">
          <span>
            DotSlash <span className="font-display text-primary">/</span> CET
          </span>
          <span className="text-primary">/ 2026</span>
        </div>

        {/* Oversized heading */}
        <div className="pt-12 md:pt-16 pb-4">
          <Link
            href="/#landing"
            className="block font-display font-medium uppercase leading-[0.92] tracking-tight text-logo-light text-[clamp(3rem,10vw,10rem)] hover:text-white transition-colors duration-200"
          >
            Keep <span className="text-primary">building.</span>
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 py-14 md:py-20">
          {/* Brand */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Image src={logo} alt="DotSlash CET" className="w-[300px] md:w-[380px] h-auto" />
            <p className="font-body text-lg text-logo-light/70 leading-relaxed max-w-md">
              The techno-cultural festival of the CSE department, CET. Built for
              people who make things.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-logo-light/80 hover:text-primary transition-colors duration-200"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-body text-xs uppercase tracking-[0.3em] text-logo-light/50 mb-2">
                Explore
              </h4>
              {explore.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-base text-logo-light/85 hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-body text-xs uppercase tracking-[0.3em] text-logo-light/50 mb-2">
                Get Moving
              </h4>
              {quick.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-body text-base text-logo-light/85 hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-body text-xs uppercase tracking-[0.3em] text-logo-light/50 mb-2">
                Contact
              </h4>
              {contact.map((person) => (
                <div key={person.name}>
                  <div className="font-body font-medium text-logo-light/90">{person.name}</div>
                  <div className="font-body text-sm text-logo-light/60">{person.phone}</div>
                </div>
              ))}
              <a
                href="mailto:dotslashcet.cse@gmail.com"
                className="font-body text-sm text-logo-light/60 hover:text-primary transition-colors duration-200 w-fit break-all"
              >
                dotslashcet.cse@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-logo-light/20 py-6 font-body text-xs uppercase tracking-[0.2em] text-logo-light/60">
          <span>© 2026 DotSlash CET</span>
          <span className="hidden md:inline text-primary">/</span>
          <span>Built by the people who ship</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer