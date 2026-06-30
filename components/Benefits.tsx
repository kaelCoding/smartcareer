import { CheckCircle } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    'Tra cứu miễn phí dữ liệu điểm chuẩn từ 583+ trường và 8,200+ chương trình đào tạo',
    'Nhập hồ sơ và nhận gợi ý ngành phù hợp với điểm, sở thích, và điều kiện của bạn',
    'Tra cứu tổ hợp môn, đề án tuyển sinh, và thông tin chi tiết từng trường',
    'Lưu nguyện vọng và lịch sử tư vấn để dùng lại sau',
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <h2 className="sec-title">Xem toàn bộ lợi ích của bạn và sự tùy chỉnh được thực hiện</h2>
            <p className="text-[#30476f] mt-6 mb-8">
              Ứng dụng của chúng tôi cung cấp toàn bộ công cụ tìm kiếm ngành đại học hàng đầu — hoàn toàn miễn phí.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle size={24} className="text-[#0f5ed7] flex-shrink-0 mt-0.5" />
                  <span className="text-[#30476f]">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="btn btn-primary mt-8">
              Bắt đầu tìm kiếm
            </button>
          </div>

          {/* Right side */}
          <div className="bg-gradient-to-br from-[#eaf1fb] to-[#f2f6fd] rounded-2xl p-8 border border-[#dde6f3]">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0b1f4d] mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Ngành phù hợp
                </h3>
                <p className="text-sm text-[#6f7f99]">
                  Nhập điểm, sở thích, và các điều kiện. Hệ thống sẽ gợi ý ngành phù hợp nhất cho bạn.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0b1f4d] mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Dữ liệu chính xác
                </h3>
                <p className="text-sm text-[#6f7f99]">
                  Tất cả dữ liệu được cập nhật từ đề án tuyển sinh chính thức của các trường.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0b1f4d] mb-3 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Hỗ trợ tư vấn
                </h3>
                <p className="text-sm text-[#6f7f99]">
                  Hỏi các cố vấn giáo dục về ngành, trường, và quy trình tuyển sinh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
