export default function Experience() {
  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
      <div className="flex flex-col bg-white md:flex-row items-center md:items-start gap-6 hover:bg-indigo-50 p-6 rounded-2xl">
        {/* Image Placeholder */}
        <div className="w-full md:w-64 h-40 bg-gray-200 rounded-xl bg-[repeating-linear-gradient(135deg,_#e5e7eb_0px,_#e5e7eb_10px,_#d1d5db_10px,_#d1d5db_20px)]" />
        {/* Experience Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold mb-1">Frontend Developer</h3>
          <p className="text-gray-700 mb-1">Company Name</p>
          <p className="text-gray-600">You've never made a website this fast before. Works like the canvas tools you're familiar with.</p>
        </div>
      </div>
    </section>
  );
}
