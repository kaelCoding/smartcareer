export default function Steps() {
  const steps = [
    {
      number: '01',
      title: 'Nhập thông tin hồ sơ',
      description: 'Cung cấp điểm thi, tổ hợp môn và thông tin cơ bản về bạn.',
    },
    {
      number: '02',
      title: 'Lựa chọn sở thích',
      description: 'Chọn các ngành, trường mà bạn quan tâm từ cơ sở dữ liệu của chúng tôi.',
    },
    {
      number: '03',
      title: 'Nhận gợi ý',
      description: 'Hệ thống sẽ gợi ý những ngành và trường phù hợp nhất cho bạn.',
    },
  ]

  return (
    <section id="steps" className="py-16 md:py-20 bg-[#f7faff]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Hướng dẫn sử dụng</span>
          <h2 className="sec-title mt-4">
            Chỉ 3 bước để tìm được ngành phù hợp
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card h-full">
                <div className="text-5xl font-black text-[#0f5ed7] mb-4 opacity-20">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#0b1f4d] mb-3 text-lg">
                  {step.title}
                </h3>
                <p className="text-[#6f7f99] text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="text-3xl text-[#dde6f3]">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
