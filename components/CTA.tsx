export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0f5ed7] via-[#0751c8] to-[#0b8cff]">
      <div className="wrap">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Sẵn sàng lập danh sách nguyện vọng của bạn?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tham gia 50,000+ học sinh đã sử dụng công cụ này để tìm được ngành và trường đại học phù hợp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-gold gap-2 text-lg px-8 py-4">
              Bắt đầu miễn phí
            </button>
            <button className="btn btn-ghost gap-2 text-lg px-8 py-4">
              Xem demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
