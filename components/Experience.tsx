import { GripVertical, List, ArrowRight, Pointer } from 'lucide-react'

export default function Experience() {
  return (
    <section className="py-16 md:py-20 bg-[#f7faff]">
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Dynamic list */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#dde6f3] overflow-hidden flex flex-col hidden md:flex">
            {/* Header */}
            <div className="bg-[#0b1f4d] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 font-semibold">
                <List size={18} />
                <span>Danh sách nguyện vọng của bạn</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-300">Điểm:</span> <span className="text-[#facc15] font-bold">25.5</span>
              </div>
            </div>

            {/* List */}
            <div className="p-4 space-y-3">
              {[
                { name: 'Công nghệ thông tin', uni: 'ĐH Bách Khoa - ĐH Đà Nẵng', score: 26.5, type: 'Thử sức', typeColor: 'text-amber-700 bg-amber-100' },
                { name: 'Kinh doanh quốc tế', uni: 'ĐH Kinh tế - ĐH Đà Nẵng', score: 26.0, type: 'Thử sức', typeColor: 'text-amber-700 bg-amber-100' },
                { name: 'Sư phạm Tiếng Anh', uni: 'ĐH Ngoại ngữ - ĐH Đà Nẵng', score: 25.0, type: 'Vừa sức', typeColor: 'text-blue-700 bg-blue-100' },
                { name: 'Báo chí', uni: 'ĐH Sư phạm - ĐH Đà Nẵng', score: 24.0, type: 'An toàn', typeColor: 'text-green-700 bg-green-100' },
                { name: 'Kỹ thuật phần mềm', uni: 'ĐH Sư phạm Kỹ thuật - ĐH ĐN', score: 23.5, type: 'An toàn', typeColor: 'text-green-700 bg-green-100' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center p-3 border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all bg-white group">
                  <GripVertical size={18} className="text-gray-300 mr-2 cursor-grab group-hover:text-gray-500" />
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-bold text-[#0b1f4d] truncate leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{item.uni}</p>
                  </div>
                  <div className="flex items-center gap-3 ml-2 flex-shrink-0">
                    <div className="text-sm text-gray-500 hidden sm:block">ĐC <span className="font-bold text-gray-700">{item.score.toFixed(1)}</span></div>
                    <div className={`text-xs font-semibold px-2.5 py-1 rounded-md ${item.typeColor} whitespace-nowrap`}>
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex flex-col xl:flex-row gap-3 xl:justify-between xl:items-center text-sm">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-500"></div><span className="text-gray-600">Thử sức</span></div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-gray-600">Vừa sức</span></div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-gray-600">An toàn</span></div>
              </div>
              <button className="text-blue-600 font-semibold flex items-center gap-1 hover:text-blue-700 transition-colors">
                <Pointer size={16} /> Mở công cụ đầy đủ <ArrowRight size={14} />
              </button>
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
