import { useState } from 'react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-slate-800 sticky top-0 z-20">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between py-3 px-4 sm:px-8">
        {/* Logo */}
        <span className="font-bold text-xl">⚡</span>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-1 transition-colors hover:text-indigo-600"
            >
              {link.name}
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
        <nav className="md:hidden px-4 pb-3 flex flex-col gap-2 bg-white border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-slate-800 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
