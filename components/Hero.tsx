import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0f5ed7] via-[#0751c8] to-[#0b8cff] py-16 md:py-24 overflow-hidden">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Tư tin chọn ngành và sắp xếp nguyện vọng bằng dữ liệu
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Tra cứu điểm chuẩn, tổ hợp môn, và đề án tuyển sinh của 583+ trường đại học. Nhập hồ sơ để nhận gợi ý ngành phù hợp với điểm, sở thích và điều kiện của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn btn-gold gap-2">
                Khám phá ngay <ArrowRight size={18} />
              </button>
              <button className="btn btn-ghost gap-2">
                Xem điểm chuẩn
              </button>
            </div>

            {/* Feature list */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-blue-200" />
                <span className="text-sm">Dữ liệu từ 583+ trường đại học</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-blue-200" />
                <span className="text-sm">Gợi ý ngành dựa trên hồ sơ của bạn</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-blue-200" />
                <span className="text-sm">Hoàn toàn miễn phí</span>
              </div>
            </div>
          </div>

          {/* Right side - Images */}
          <div className="hidden md:grid grid-cols-2 gap-4 auto-rows-min">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-64 flex items-center justify-center border-4 border-white/30">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🏢</div>
                <p className="text-sm">Hình ảnh trường 1</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-48 flex items-center justify-center border-4 border-white/30 mt-8">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🎓</div>
                <p className="text-sm">Hình ảnh trường 2</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-48 flex items-center justify-center border-4 border-white/30 col-span-2">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">📚</div>
                <p className="text-sm">Hình ảnh trường 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
