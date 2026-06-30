export default function Experience() {
  return (
    <section className="py-16 md:py-20 bg-[#f7faff]">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="hidden md:grid grid-cols-2 gap-4 auto-rows-min">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-56 flex items-center justify-center border border-[#dde6f3]">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">📖</div>
                <p className="text-xs">Trải nghiệm 1</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-48 flex items-center justify-center border border-[#dde6f3] mt-8">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🎓</div>
                <p className="text-xs">Trải nghiệm 2</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-48 flex items-center justify-center border border-[#dde6f3] col-span-2">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">✨</div>
                <p className="text-xs">Trải nghiệm 3</p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div>
            <span className="eyebrow">Trải nghiệm sắp xếp nguyện vọng</span>
            <h2 className="sec-title mt-4 mb-6">
              Trải nghiệm sắp xếp nguyện vọng nhanh chóng và đơn giản
            </h2>
            <p className="text-[#30476f] mb-8">
              Chỉ cần 5 bước đơn giản, bạn có thể nhận được gợi ý ngành phù hợp với hồ sơ của mình.
            </p>

            <div className="space-y-6">
              <div className="card">
                <h3 className="font-bold text-[#0b1f4d] mb-2">1. Nhập thông tin hồ sơ</h3>
                <p className="text-sm text-[#6f7f99]">
                  Nhập điểm, tổ hợp môn, và các thông tin cơ bản về hồ sơ của bạn.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-[#0b1f4d] mb-2">2. Chọn sở thích</h3>
                <p className="text-sm text-[#6f7f99]">
                  Lựa chọn từ hàng nghìn ngành và trường đại học có sẵn.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-[#0b1f4d] mb-2">3. Nhận gợi ý</h3>
                <p className="text-sm text-[#6f7f99]">
                  Hệ thống sẽ gợi ý những ngành và trường phù hợp nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
