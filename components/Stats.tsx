export default function Stats() {
  const stats = [
    { number: '583+', label: 'Chương trình đào tạo' },
    { number: '8,202+', label: 'Cách chọn ngành phù hợp' },
    { number: '2024-2026', label: 'Mùa tuyển sinh mới nhất' },
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#0f5ed7] via-[#0751c8] to-[#0b8cff]">
      <div className="wrap">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
