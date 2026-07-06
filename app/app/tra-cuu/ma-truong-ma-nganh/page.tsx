'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Search, Info } from 'lucide-react'
import { mockMajors, mockUniversities } from '@/lib/mockData'

export default function MaTruongMaNganh() {
  const [searchTerm, setSearchTerm] = useState('')
  const [schoolFilter, setSchoolFilter] = useState('all')

  const filteredMajors = useMemo(() => {
    return mockMajors.filter((major) => {
      if (schoolFilter !== 'all' && major.schoolId !== schoolFilter) {
        return false
      }
      
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase()
        if (
          !major.name.toLowerCase().includes(term) &&
          !major.schoolId.toLowerCase().includes(term) &&
          !major.code.toLowerCase().includes(term)
        ) {
          return false
        }
      }
      return true
    })
  }, [searchTerm, schoolFilter])

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="text-gray-500">
            <Link href="/app" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">›</span>
            <Link href="/app/tra-cuu/du-lieu-tuyen-sinh" className="hover:text-blue-600">Tra cứu</Link>
            <span className="mx-2">›</span>
            <span className="font-medium text-gray-900">Mã trường – Mã ngành</span>
          </div>
          <Link href="/app/tra-cuu/du-lieu-tuyen-sinh" className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft size={16} className="mr-1" />
            Quay lại Tra cứu
          </Link>
        </div>

        {/* Title */}
        <div className="mb-6">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Đang đồng bộ</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mã trường – Mã ngành</h1>
          <p className="text-gray-600">Tra mã đăng ký nguyện vọng trên Hệ thống của Bộ GD&ĐT.</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 flex flex-col md:flex-row gap-4 shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Nhập mã trường (DUT, DUE...) hoặc mã ngành (7480201...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-50">#</div>
          </div>
          
          <select
            value={schoolFilter}
            onChange={(e) => setSchoolFilter(e.target.value)}
            className="px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
          >
            <option value="all">Tất cả trường</option>
            {mockUniversities.map(uni => (
              <option key={uni.id} value={uni.id}>{uni.name}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Mã trường</th>
                  <th className="px-6 py-4">Mã ngành</th>
                  <th className="px-6 py-4">Tên ngành</th>
                  <th className="px-6 py-4">Trường</th>
                  <th className="px-6 py-4">Khối</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredMajors.map((major, idx) => (
                  <tr key={`${major.id}-${idx}`} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-blue-600">{major.schoolId}</td>
                    <td className="px-6 py-4 font-mono font-bold text-gray-900">{major.code}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{major.name}</td>
                    <td className="px-6 py-4 text-gray-500">{major.schoolId}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {major.examGroups.map(group => (
                          <span key={group} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium border border-gray-200">
                            {group}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredMajors.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      Không tìm thấy kết quả nào phù hợp.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="flex items-start gap-2 mt-4 text-sm text-gray-500">
          <Info size={16} className="mt-0.5 flex-shrink-0" />
          <p>Mã trường - mã ngành tham chiếu theo cổng đăng ký của Bộ GD&ĐT. Đang hiển thị {filteredMajors.length} ngành.</p>
        </div>
      </div>
    </div>
  )
}
