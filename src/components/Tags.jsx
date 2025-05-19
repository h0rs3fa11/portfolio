export default function Tag({ children, color = "bg-gray-200", textColor = "text-gray-900" }) {
  return (
    <span
      className={`inline-block px-4 py-1 rounded-xl font-semibold text-base ${color} ${textColor}`}
      style={{ marginBottom: '0.5rem' }}
    >
      {children}
    </span>
  );
}
