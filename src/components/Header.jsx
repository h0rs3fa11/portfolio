import { useState } from 'react';
import config from "../portfolio.config";

const sectionMap = [
  { key: "about", label: "About", href: "#about" },
  { key: "skills", label: "Skills", href: "#skills" },
  { key: "projects", label: "Projects", href: "#projects" },
  { key: "education", label: "Education", href: "#education" },
  { key: "experience", label: "Experience", href: "#experience" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = sectionMap.filter((section) => config[section.key]);

  return (
    <header className="w-full bg-white text-slate-800 sticky top-0 z-20">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between py-3 px-4 sm:px-8">
        {/* Logo */}
        <a href="#hero" className="font-bold text-xl cursor-pointer">
          🌎
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="px-2 py-1 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-slate-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-slate-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-slate-800"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full px-4 pb-3 flex flex-col gap-2 bg-white border-t z-50 shadow">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="py-2 text-slate-800 hover:text-indigo-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
