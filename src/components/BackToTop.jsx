import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 bg-indigo-200 right-8 z-50 bg-primary text-white rounded-full shadow-lg p-3 hover:bg-indigo-600 transition"
      aria-label="Back to top"
    >
      ↑
    </button>
  ) : null;
}
