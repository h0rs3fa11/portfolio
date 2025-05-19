export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center md:items-start gap-12 py-12 md:py-20 justify-center max-w-4xl mx-auto px-4 sm:px-8">
      {/* Profile Image Placeholder */}
      <div className="flex-shrink-0 w-48 h-48 rounded-full bg-gray-200 bg-[repeating-linear-gradient(135deg,_#e5e7eb_0px,_#e5e7eb_10px,_#d1d5db_10px,_#d1d5db_20px)] border-4 border-white shadow mx-auto md:mx-0" />
      {/* About Text */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-2xl font-bold mb-6">About me</h2>
        <p className="text-gray-600">
          Double click the image placeholders to add images. Do the same for any text, then tweak styles and publish.
        </p>
      </div>
    </section>
  );
}
