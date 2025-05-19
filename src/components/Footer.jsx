export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 text-center bg-indigo-50 text-slate-800 text-sm border-t bg-white break-words">
      <div>
        © {new Date().getFullYear()} Qiuxuan Ma. Portfolio project. Built with
        React & Tailwind CSS.
      </div>
    </footer>
  );
} 