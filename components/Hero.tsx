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
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frmep.vn%2Fwp-content%2Fuploads%2F2024%2F06%2Fz5503795221847_32de2d1145b3d58dba3c7c10de7885c0.jpg&f=1&nofb=1&ipt=ab6d8f1f03552174b03c726c70eed49d4a8478875d1a53052e08748629141fb7" alt="Hình ảnh trường 1" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-48 flex items-center justify-center border-4 border-white/30 mt-8">
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdut.udn.vn%2FFiles%2Fadmin%2Fimages%2FTuyen_sinh%2F2019%2Fimage007.jpg&f=1&nofb=1&ipt=32f32af7e24bc3cbb3a3de8252ea9ce3a32039863134650d072296bf1a2f2835" alt="Hình ảnh trường 2" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-48 flex items-center justify-center border-4 border-white/30 col-span-2">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.tuoitre.vn%2Fthumb_w%2F730%2F471584752817336320%2F2025%2F10%2F21%2F0331d86525b8a8e6f1a9-1761037645589200150506.jpg&f=1&nofb=1&ipt=480b0f819cb202b0dbfb4e1756e11eac1406effb9effb56943a331ff390f0e24" alt="Hình ảnh trường 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
