'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Minh Anh',
      school: 'THPT Chuyên Hà Nội - Amsterdam',
      rating: 5,
      text: 'Cảm ơn ứng dụng đã giúp tôi tìm được ngành phù hợp. Dữ liệu rất chính xác và gợi ý của hệ thống thật sự hữu ích.',
    },
    {
      name: 'Thanh Tùng',
      school: 'THPT Phan Bội Châu',
      rating: 5,
      text: 'Tôi rất thích giao diện của ứng dụng. Nó dễ sử dụng và đưa ra những gợi ý rất hợp lý.',
    },
    {
      name: 'Hà My',
      school: 'THPT Kim Liên',
      rating: 5,
      text: 'Với dữ liệu từ 583+ trường, tôi cảm thấy yên tâm khi lựa chọn ngành. Rất khuyên dùng!',
    },
  ]

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="wrap">
        <div className="text-center mb-12">
          <span className="eyebrow">Học sinh & Phụ huynh tin dùng</span>
          <h2 className="sec-title mt-4">
            Học sinh & phụ huynh tin dùng
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-[#eaf1fb] to-[#f2f6fd] rounded-2xl p-8 md:p-12 border border-[#dde6f3] min-h-80">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-lg text-[#0b1f4d] font-medium mb-8 leading-relaxed italic">
              &quot;{testimonials[current].text}&quot;
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-[#0b1f4d]">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-[#6f7f99]">
                  {testimonials[current].school}
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#0f5ed7] text-white flex items-center justify-center font-bold text-xl">
                {testimonials[current].name.charAt(0)}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-[#dde6f3] hover:bg-[#f2f6fd] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-[#0f5ed7]" />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-[#0f5ed7] w-8' : 'bg-[#dde6f3]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-lg border border-[#dde6f3] hover:bg-[#f2f6fd] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-[#0f5ed7]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
