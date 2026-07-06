'use client'

import Link from 'next/link'
import { ArrowLeft, Wallet, Info, TrendingUp, HelpCircle } from 'lucide-react'
import { mockUniversities } from '@/lib/mockData'

export default function HocPhi() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="text-gray-500">
            <Link href="/app" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">›</span>
            <span className="font-medium text-gray-900">Học phí</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-md">
              <Wallet size={16} />
              Năm học 2024 - 2025
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tra cứu học phí các trường Đại học</h1>
            <p className="text-green-50 text-lg">Thông tin tổng hợp mức học phí dự kiến của các trường Đại học tại khu vực Đà Nẵng, giúp bạn có kế hoạch tài chính phù hợp.</p>
          </div>
        </div>

        {/* Filters/Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <span className="font-bold text-lg">{mockUniversities.length}</span>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Trường Đại học</div>
              <div className="text-xs text-gray-400">Đã cập nhật dữ liệu</div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 font-medium">Mức tăng</div>
              <div className="text-xs text-gray-400">~10% mỗi năm</div>
            </div>
          </div>
        </div>

        {/* Grid List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUniversities.map((uni) => (
            <div key={uni.id} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-xl transition-all flex flex-col group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1 h-full ${uni.type === 'Công lập' ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
              
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${uni.color} text-white shadow-md transform group-hover:scale-110 transition-transform`}>
                  {uni.icon}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${uni.type === 'Công lập' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                  {uni.type}
                </div>
              </div>

              <div className="mb-6 flex-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-tight mb-1">{uni.name}</h3>
                <div className="text-sm text-gray-500">{uni.shortName}</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Mức học phí / Năm</div>
                <div className="text-xl font-bold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-3">
                  {uni.tuitionRange}
                </div>
                
                <div className="flex items-start gap-2 text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-100">
                  <Info size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-xs">{uni.tuitionNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-4">
          <HelpCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-yellow-800 mb-1">Lưu ý về dữ liệu</h4>
            <p className="text-sm text-yellow-700">Mức học phí trên mang tính chất tham khảo và có thể thay đổi tùy thuộc vào chương trình đào tạo (Đại trà, Chất lượng cao, Liên kết quốc tế, Tiên tiến, v.v.). Vui lòng kiểm tra chi tiết trên trang web chính thức của trường hoặc Đề án tuyển sinh mới nhất.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
