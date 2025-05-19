import { useState } from 'react';

const navLinks = [
  { name: 'About me', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full text-slate-800 bg-indigo-50 sticky top-0 z-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center py-3 sm:px-8">
        {/* Logo
        <div className="font-bold text-xl mb-2">⚡</div> */}
        {/* Nav */}
        <nav className="w-full flex justify-center gap-8 text-base font-medium text-gray-700">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 py-1 transition-colors hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden mt-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-3 flex flex-col gap-2 bg-white border-t">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-gray-700 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
