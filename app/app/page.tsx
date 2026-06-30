'use client'

import { ArrowRight, BookOpen, Lightbulb, Target } from 'lucide-react'
import Link from 'next/link'

export default function AppDashboard() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hướng dẫn bắt đầu</h1>
        <p className="text-gray-600">3 bước để có gợi ý ngành</p>
      </div>

      {/* Steps Guide */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold">
                1
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-bold">
                2
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 font-bold">
                3
              </div>
            </div>
            <Link href="#" className="text-sm text-blue-500 hover:text-blue-600 font-medium">
              Bỏ qua hướng dẫn →
            </Link>
          </div>

          {/* Step titles */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">Nhập điểm dự kiến</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Trả lời câu hỏi số thích</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Nhận gợi ý ngành</p>
            </div>
          </div>

          {/* Current step content */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
              <Lightbulb size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Nhập điểm dự kiến</h3>
              <p className="text-sm text-gray-600 mb-4">
                Nhập điểm thi thử hoặc dự kiến, chọn tổ hợp môn và phương thức xét tuyển bạn muốn dùng.
              </p>
              <p className="text-xs text-gray-500">Thời gian: 2-3 phút</p>
            </div>
            <Link
              href="/app/kham-pha-nganh"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center gap-2 whitespace-nowrap ml-4"
            >
              <Lightbulb size={18} />
              Nhập điểm dự kiến
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <p className="text-sm font-medium text-blue-100 mb-2">TUYỂN SINH 2026 · TỔNG QUAN</p>
          <h2 className="text-4xl font-bold mb-3">Chào bạn 👋</h2>
          <p className="text-blue-100 mb-6">
            Bắt đầu bằng cách nhập điểm dự kiến để nhận gợi ý ngành sắt với bạn.
          </p>
          <div className="flex gap-3 mb-8">
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <BookOpen size={18} />
              Hỏi cố vấn tuyển sinh
            </button>
            <button className="px-6 py-2 border border-blue-200 text-white rounded-lg font-bold hover:bg-blue-500 transition-colors">
              Tìm ngành phù hợp
            </button>
          </div>
          
          {/* Event Card */}
          <div className="bg-blue-500/30 border border-blue-400/50 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-300 mb-2">● MỐC GẦN NHẤT</p>
            <div className="text-2xl font-bold mb-1">1 ngày nữa</div>
            <p className="text-sm text-blue-100 mb-3">
              Công bố điểm thi tốt nghiệp THPT<br/>
              <span className="text-xs">Thứ Tư · 01 tháng 07, 2026</span>
            </p>
            <Link href="#" className="text-sm text-yellow-300 hover:text-yellow-200 font-medium flex items-center gap-1">
              Xem lịch đầy đủ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:border-blue-500 cursor-pointer transition-colors">
          <div className="text-3xl mb-2">📚</div>
          <p className="text-sm font-medium text-gray-900">Khám phá ngành</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:border-blue-500 cursor-pointer transition-colors">
          <div className="text-3xl mb-2">🏫</div>
          <p className="text-sm font-medium text-gray-900">Trường đại học</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:border-blue-500 cursor-pointer transition-colors">
          <div className="text-3xl mb-2">📊</div>
          <p className="text-sm font-medium text-gray-900">So sánh ngành</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 text-center hover:border-blue-500 cursor-pointer transition-colors">
          <div className="text-3xl mb-2">💬</div>
          <p className="text-sm font-medium text-gray-900">Cố vấn</p>
        </div>
      </div>
    </div>
  )
}
