'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { mockMajors } from '@/lib/mockData'

const combinationDetails: Record<string, { group: string, subjects: string[] }> = {
  'A00': { group: 'KHỐI KHOA HỌC TỰ NHIÊN', subjects: ['Toán', 'Vật lý', 'Hóa học'] },
  'A01': { group: 'KHỐI KHOA HỌC TỰ NHIÊN', subjects: ['Toán', 'Vật lý', 'Tiếng Anh'] },
  'D01': { group: 'KHỐI NGOẠI NGỮ', subjects: ['Toán', 'Ngữ văn', 'Tiếng Anh'] },
  'D07': { group: 'KHỐI KHOA HỌC TỰ NHIÊN', subjects: ['Toán', 'Hóa học', 'Tiếng Anh'] },
  'D14': { group: 'KHỐI KHOA HỌC XÃ HỘI', subjects: ['Ngữ văn', 'Lịch sử', 'Tiếng Anh'] },
  'D15': { group: 'KHỐI KHOA HỌC XÃ HỘI', subjects: ['Ngữ văn', 'Địa lý', 'Tiếng Anh'] },
  'C00': { group: 'KHỐI KHOA HỌC XÃ HỘI', subjects: ['Ngữ văn', 'Lịch sử', 'Địa lý'] },
}

export default function ToHopMon() {
  const allGroups = Array.from(new Set(mockMajors.flatMap(m => m.examGroups))).sort()
  const [selectedGroup, setSelectedGroup] = useState(allGroups[0] || 'A00')

  const matchingMajors = useMemo(() => {
    return mockMajors.filter(major => major.examGroups.includes(selectedGroup))
  }, [selectedGroup])

  const details = combinationDetails[selectedGroup] || { group: 'TỔ HỢP MÔN', subjects: ['Môn 1', 'Môn 2', 'Môn 3'] }

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
            <span className="font-medium text-gray-900">Tổ hợp môn</span>
          </div>
          <Link href="/app/tra-cuu/du-lieu-tuyen-sinh" className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft size={16} className="mr-1" />
            Quay lại Tra cứu
          </Link>
        </div>

        {/* Title */}
        <div className="mb-6">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Tra theo tổ hợp</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tổ hợp môn</h1>
          <p className="text-gray-600">Tổ hợp xét tuyển ↔ ngành nhận tổ hợp đó.</p>
        </div>

        {/* Group Selector */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 mb-6 shadow-sm">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">CHỌN TỔ HỢP · {allGroups.length} TỔ HỢP</div>
          <div className="flex flex-wrap gap-2">
            {allGroups.map(group => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                  selectedGroup === group
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Left: Combination Details */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white text-xl font-bold rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  {selectedGroup}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{details.group}</div>
                  <div className="text-2xl font-bold text-gray-900">Tổ hợp {selectedGroup}</div>
                </div>
              </div>

              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{details.subjects.length} môn xét tuyển</div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cấu thành tổ hợp</h3>

              <div className="space-y-3">
                {details.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div className="font-bold text-gray-900 flex-1">{subject}</div>
                    <div className="text-xs font-medium text-gray-400">Hệ số 1</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Majors List */}
          <div className="md:col-span-7 lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{matchingMajors.length} NGÀNH TUYỂN SINH</div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Ngành nhận tổ hợp này</h3>

            <div className="space-y-4">
              {matchingMajors.map(major => (
                <div key={major.id} className="flex items-start justify-between p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center uppercase shadow-md flex-shrink-0">
                      {major.schoolId.substring(0, 3)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base">{major.name}</div>
                      <div className="text-sm text-gray-500">{major.schoolId}</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-gray-900">{major.score.toFixed(2)}</div>
                    <div className="text-xs text-gray-400">2024</div>
                  </div>
                </div>
              ))}
              
              {matchingMajors.length === 0 && (
                <div className="py-12 text-center text-gray-500">
                  Không có ngành nào sử dụng tổ hợp này trong hệ thống.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
