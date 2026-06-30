export default function DataSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Nguồn dữ liệu</span>
          <h2 className="sec-title mt-4">
            Bất cứu từ đâu bạn đến, bạn đều có thể kiểm tra
          </h2>
          <p className="text-[#30476f] mt-6 max-w-2xl mx-auto">
            Tất cả dữ liệu được lấy từ đề án tuyển sinh chính thức của các trường, đối chiếu cho mùa 2024–2026, và ghi rõ nguồn để bạn có thể tự kiểm tra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#eaf1fb] mb-4">
                <span className="text-2xl font-bold text-[#0f5ed7]">✓</span>
              </div>
              <h3 className="font-bold text-[#0b1f4d] mb-2">
                Nguồn {item}
              </h3>
              <p className="text-sm text-[#6f7f99]">
                Dữ liệu được kiểm chứng từ các trường đại học chính thức.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#eaf1fb] to-[#f2f6fd] rounded-2xl p-8 border border-[#dde6f3]">
          <h3 className="font-bold text-[#0b1f4d] mb-4">📊 Học sinh & phụ huynh tin dùng</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-black text-[#0f5ed7]">50K+</div>
              <p className="text-sm text-[#6f7f99] mt-2">Học sinh đã sử dụng</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#0f5ed7]">98%</div>
              <p className="text-sm text-[#6f7f99] mt-2">Hài lòng với dữ liệu</p>
            </div>
            <div>
              <div className="text-3xl font-black text-[#0f5ed7]">583+</div>
              <p className="text-sm text-[#6f7f99] mt-2">Trường được hỗ trợ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
