export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Tra ngành phù hợp',
      description: 'Nhập hồ sơ để nhận gợi ý ngành phù hợp với điểm, sở thích và điều kiện của bạn.',
    },
    {
      icon: '📊',
      title: 'Tra điểm chuẩn',
      description: 'Xem điểm chuẩn của 8,202+ chương trình đào tạo từ 583+ trường đại học.',
    },
    {
      icon: '📋',
      title: 'Xem đề án tuyển sinh',
      description: 'Tra cứu tổ hợp môn, chỉ tiêu, và thông tin chi tiết từng trường.',
    },
    {
      icon: '💬',
      title: 'Hỏi cố vấn giáo dục',
      description: 'Nhận lời tư vấn từ các chuyên gia về ngành, trường và quy trình tuyển sinh.',
    },
  ]

  return (
    <section id="features" className="py-16 md:py-20 bg-white">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Tính năng chính</span>
          <h2 className="sec-title mt-4">
            Một nơi duy nhất cho tất cả nhu cầu tuyển sinh của bạn
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-[#0b1f4d] mb-3 text-lg">
                {feature.title}
              </h3>
              <p className="text-[#6f7f99] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
