import Tag from './Tags';

export default function Skills() {
  return (
    <section id="skills" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Programming Languages Card */}
        <div className="bg-white rounded-xl shadow p-6 min-h-[150px] flex flex-col items-start hover:bg-indigo-50 transition-colors duration-200">
          <h3 className="font-semibold mb-2">Programming Languages</h3>
          <Tag color="bg-blue-200" textColor="text-blue-800">JavaScript</Tag>
          <Tag color="bg-red-200" textColor="text-red-800">TypeScript</Tag>
          <Tag color="bg-orange-200" textColor="text-orange-800">Python</Tag>
          <Tag color="bg-green-200" textColor="text-green-800">Java</Tag>
          <Tag color="bg-blue-200" textColor="text-blue-800">C#</Tag>
        </div>
        {/* Frameworks Card */}
        <div className="bg-white rounded-xl shadow p-6 min-h-[150px] flex flex-col items-start hover:bg-indigo-50 transition-colors duration-200">
          <h3 className="font-semibold mb-2">Frameworks</h3>
        </div>
        {/* Others Card */}
        <div className="bg-white rounded-xl shadow p-6 min-h-[150px] flex flex-col items-start hover:bg-indigo-50 transition-colors duration-200">
          <h3 className="font-semibold mb-2">Others</h3>
        </div>
      </div>
    </section>
  );
}
