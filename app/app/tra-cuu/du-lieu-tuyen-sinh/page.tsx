import Link from 'next/link'
import { FileText, ArrowRight, LayoutGrid, Hash } from 'lucide-react'

export default function DuLieuTuyenSinh() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dữ liệu tuyển sinh</h1>
        <p className="text-gray-600">Tra cứu nhanh chóng mã trường, mã ngành, tổ hợp môn xét tuyển.</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mã trường - Mã ngành Card */}
          <Link href="/app/tra-cuu/ma-truong-ma-nganh" className="group block h-full">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-md">Đang đồng bộ</span>
              </div>
              
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Hash size={24} />
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Mã trường – Mã ngành
              </h2>
              
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Tra mã đăng ký nguyện vọng trên Hệ thống của Bộ GD&ĐT.
              </p>
              
              <div className="flex items-center text-blue-600 font-medium text-sm gap-2">
                Mở bảng dữ liệu
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Tổ hợp môn Card */}
          <Link href="/app/tra-cuu/to-hop-mon" className="group block h-full">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-md">Tra theo tổ hợp</span>
              </div>
              
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <LayoutGrid size={24} />
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Tổ hợp môn
              </h2>
              
              <p className="text-gray-600 text-sm mb-6 flex-1">
                Tổ hợp xét tuyển ↔ ngành nhận tổ hợp đó.
              </p>
              
              <div className="flex items-center text-blue-600 font-medium text-sm gap-2">
                Mở bảng dữ liệu
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
