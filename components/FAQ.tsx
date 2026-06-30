'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Sử dụng có mất phí không?',
      answer:
        'Miễn phí. Bạn có thể tra điểm chuẩn, tìm ngành và hỏi cố vấn mà không mất phí.',
    },
    {
      question: 'Dữ liệu lấy từ đâu?',
      answer:
        'Từ đề án tuyển sinh chính thức của các trường, đối chiếu cho mùa 2024–2026, và ghi rõ nguồn để bạn tự kiểm tra.',
    },
    {
      question: 'Gợi ý ngành có chính xác không?',
      answer:
        'Gợi ý dựa trên điểm chuẩn thật và hồ sơ bạn nhập. Đây là công cụ tham khảo để thu hẹp lựa chọn — quyết định cuối vẫn là của bạn.',
    },
    {
      question: 'Mình có cần đăng nhập không?',
      answer:
        'Không bắt buộc để tra cứu. Đăng nhập giúp lưu điểm, nguyện vọng và lịch sử tư vấn để dùng lại sau.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#f7faff]">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Câu hỏi thường gặp</span>
          <h2 className="sec-title mt-4">
            Giải đáp nhanh trước khi bắt đầu kỳ nguyện vọng của bạn
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#dde6f3] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f7faff] transition-colors text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#0b1f4d]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#0f5ed7] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-[#f7faff] border-t border-[#dde6f3]">
                  <p className="text-[#6f7f99] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 border border-[#dde6f3] text-center">
          <h3 className="font-bold text-[#0b1f4d] text-xl mb-3">
            Không tìm thấy câu trả lời?
          </h3>
          <p className="text-[#6f7f99] mb-6">
            Liên hệ với đội hỗ trợ của chúng tôi để được giúp đỡ.
          </p>
          <button className="btn btn-primary">
            Liên hệ với chúng tôi
          </button>
        </div>
      </div>
    </section>
  )
}
