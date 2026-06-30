'use client'

import { X, Plus, TrendingUp, DollarSign, Users, BookOpen, Award, Check } from 'lucide-react'
import { useState } from 'react'
import { mockMajors, Major } from '@/lib/mockData'

export default function ComparePage() {
  const [selected, setSelected] = useState<Major[]>([mockMajors[0], mockMajors[1]])
  const [showAddMore, setShowAddMore] = useState(false)

  // Use the remaining mock majors for suggestions
  const suggestedMajors = mockMajors.filter(m => !selected.find(s => s.id === m.id))

  const criteria = [
    { label: 'Điểm chuẩn', key: 'score', unit: '' },
    { label: 'Tổ hợp môn', key: 'examGroups', unit: '' },
    { label: 'Học phí', key: 'tuitionFee', unit: 'triệu/năm' },
    { label: 'Mức lương', key: 'salary', unit: '' },
    { label: 'Nhu cầu', key: 'demand', unit: '/5' },
    { label: 'Số lượng SV', key: 'students', unit: 'người' },
    { label: 'Thời gian học', key: 'duration', unit: 'năm' },
  ]

  const removeMajor = (id: string) => {
    setSelected(selected.filter((item) => item.id !== id))
  }

  const addMajor = (major: Major) => {
    if (!selected.find((item) => item.id === major.id)) {
      setSelected([...selected, major])
    }
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">So sánh ngành học</h1>
        <p className="text-gray-600">So sánh các tiêu chí để chọn ngành phù hợp nhất</p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="bg-white rounded-xl border border-gray-200">
          {/* Column Headers */}
          <div className="grid gap-4 p-4 border-b border-gray-200" style={{ gridTemplateColumns: `200px repeat(${selected.length}, 1fr) 120px` }}>
            <div className="font-bold text-gray-900">Tiêu chí</div>
            {selected.map((major) => (
              <div key={major.id} className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm line-clamp-2">{major.name}</p>
                    <p className="text-xs text-gray-600">{major.schoolName}</p>
                  </div>
                  <button
                    onClick={() => removeMajor(major.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center">
              {selected.length < 4 && (
                <button
                  onClick={() => setShowAddMore(!showAddMore)}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  <Plus size={18} />
                  Thêm
                </button>
              )}
            </div>
          </div>

          {/* Comparison Rows */}
          {criteria.map((criterion, index) => (
            <div
              key={criterion.key}
              className={`grid gap-4 p-4 border-b border-gray-200 last:border-b-0 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
              style={{ gridTemplateColumns: `200px repeat(${selected.length}, 1fr) 120px` }}
            >
              <div className="font-medium text-gray-900">{criterion.label}</div>
              {selected.map((major) => {
                const value = major[criterion.key as keyof typeof major]
                let displayValue = typeof value === 'number' ? value : value;
                if (Array.isArray(value)) {
                  displayValue = value.join(', ');
                }
                
                return (
                  <div key={major.id} className="flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-gray-900">
                        {displayValue === 0 && criterion.key === 'tuitionFee' ? 'Miễn phí' : displayValue}
                      </p>
                      {criterion.unit && displayValue !== 0 && (
                        <p className="text-xs text-gray-500">{criterion.unit}</p>
                      )}
                    </div>
                  </div>
                )
              })}
              <div></div>
            </div>
          ))}

          {/* Comparison Summary */}
          <div className="grid gap-4 p-4 bg-gray-50 border-t border-gray-200" style={{ gridTemplateColumns: `200px repeat(${selected.length}, 1fr) 120px` }}>
            <div className="font-medium text-gray-900">Điểm đánh giá</div>
            {selected.map((major) => {
              const score = ((major.score / 30) * 10 + (major.demand * 2) - (major.tuitionFee / 100)).toFixed(1)
              return (
                <div key={major.id} className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-bold text-lg text-blue-600">{score}/10</p>
                    <p className="text-xs text-gray-500">tổng điểm</p>
                  </div>
                </div>
              )
            })}
            <div></div>
          </div>
        </div>
      </div>

      {/* Add More Modal */}
      {showAddMore && (
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Thêm ngành để so sánh</h3>
              <button
                onClick={() => setShowAddMore(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {suggestedMajors.map((major) => (
                <button
                  key={major.id}
                  onClick={() => {
                    addMajor(major)
                    setShowAddMore(false)
                  }}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
                >
                  <p className="font-medium text-gray-900">{major.name}</p>
                  <p className="text-sm text-gray-600">{major.schoolName}</p>
                </button>
              ))}
              {suggestedMajors.length === 0 && (
                <div className="col-span-full py-4 text-center text-gray-500">
                  Không còn ngành nào khác để thêm.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pros & Cons */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {selected.map((major) => (
          <div key={major.id} className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">{major.name}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-green-600 mb-2">✓ Ưu điểm</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="flex-shrink-0 text-green-500 mt-0.5" />
                    <span>Nhu cầu nhân lực cao ({major.demand}/5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="flex-shrink-0 text-green-500 mt-0.5" />
                    <span>Mức lương cạnh tranh ({major.salary})</span>
                  </li>
                  {major.tuitionFee < 25 && (
                    <li className="flex items-start gap-2">
                      <Check size={16} className="flex-shrink-0 text-green-500 mt-0.5" />
                      <span>Học phí hợp lý</span>
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-600 mb-2">✗ Nhược điểm</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {major.score >= 24 && <li>Điểm chuẩn cao ({major.score})</li>}
                  {major.tuitionFee >= 25 && <li>Học phí khá cao</li>}
                  <li>Áp lực việc làm lớn</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <Award className="flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">Gợi ý cho bạn</h3>
              <p className="text-blue-100 mb-4">
                Dựa trên điểm số và sở thích của bạn, <span className="font-bold">{selected[0]?.name || 'một ngành phù hợp'}</span> là lựa chọn tối ưu với điểm chuẩn {selected[0]?.score} và nhu cầu nhân lực cao.
              </p>
              <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Xem chi tiết →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
