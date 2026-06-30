export default function GettingStarted() {
  return (
    <section className="py-16 md:py-20 bg-[#f7faff]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Bắt đầu</span>
          <h2 className="sec-title mt-4">
            Dùng lỡ tìm ngành kỳ nguyện vọng
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
              <span className="text-xl">📝</span>
            </div>
            <h3 className="font-bold text-[#0b1f4d] mb-3">Tạo hồ sơ</h3>
            <p className="text-sm text-[#6f7f99] mb-4">
              Tạo một hồ sơ mới hoặc đăng nhập tài khoản hiện có để bắt đầu.
            </p>
            <button className="text-[#0f5ed7] font-semibold text-sm hover:underline">
              Tạo ngay →
            </button>
          </div>

          <div className="card">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="font-bold text-[#0b1f4d] mb-3">Nhập thông tin</h3>
            <p className="text-sm text-[#6f7f99] mb-4">
              Nhập điểm, tổ hợp môn và các thông tin cơ bản khác.
            </p>
            <button className="text-[#0f5ed7] font-semibold text-sm hover:underline">
              Hướng dẫn →
            </button>
          </div>

          <div className="card">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
              <span className="text-xl">🎯</span>
            </div>
            <h3 className="font-bold text-[#0b1f4d] mb-3">Nhận gợi ý</h3>
            <p className="text-sm text-[#6f7f99] mb-4">
              Nhận gợi ý ngành phù hợp với hồ sơ của bạn.
            </p>
            <button className="text-[#0f5ed7] font-semibold text-sm hover:underline">
              Bắt đầu →
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-[#0f5ed7] text-center">
          <h3 className="text-2xl font-bold text-[#0b1f4d] mb-4">
            Bạn cần hỗ trợ?
          </h3>
          <p className="text-[#30476f] mb-6">
            Hãy liên hệ với chúng tôi qua email hoặc chat trực tiếp để được giúp đỡ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">
              Liên hệ ngay
            </button>
            <button className="btn bg-[#f2f6fd] text-[#0f5ed7] border border-[#dde6f3] hover:bg-[#eaf1fb]">
              Xem FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
