export default function InfoCard({ title, subtitle, description }) {
  return (
    <div className="flex flex-col bg-white md:flex-row items-center md:items-start gap-6 hover:bg-indigo-50 p-6 rounded-2xl shadow-md border border-slate-200 transition-colors duration-200">
      {/* 图片占位 */}
      <div className="w-full md:w-64 h-40 bg-gray-200 rounded-xl bg-[repeating-linear-gradient(135deg,_#e5e7eb_0px,_#e5e7eb_10px,_#d1d5db_10px,_#d1d5db_20px)] flex-shrink-0" />
      {/* 内容 */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        {subtitle && <p className="text-gray-700 mb-1">{subtitle}</p>}
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
