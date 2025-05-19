import config from "../portfolio.config";
export default function About() {
  const { avatar, title, paragraphs } = config.about;

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start gap-12 py-12 md:py-20 justify-center max-w-4xl mx-auto px-4 sm:px-8"
    >
      {/* Profile Image Placeholder */}
      <div className="flex-shrink-0 w-56 h-56 rounded-full bg-gray-200 bg-[repeating-linear-gradient(135deg,_#e5e7eb_0px,_#e5e7eb_10px,_#d1d5db_10px,_#d1d5db_20px)] border-4 border-white shadow md:self-center overflow-hidden">
        {avatar && (
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </div>
      {/* About Text */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        {paragraphs.map((text, idx) => (
          <p key={idx} className="text-gray-600 mb-4 last:mb-0">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
