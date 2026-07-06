'use client'

import { Search, ChevronDown, Filter, Zap, Users, DollarSign, TrendingUp, Star, MapPin, X, Briefcase, Info } from 'lucide-react'
import { useState, useMemo } from 'react'
import { mockMajors, mockUniversities, Major } from '@/lib/mockData'

export default function ExploreMajors() {
  const [examGroupFilter, setExamGroupFilter] = useState('all')
  const [majorFilter, setMajorFilter] = useState('')
  const [schoolFilter, setSchoolFilter] = useState('all')
  const [scoreFilter, setScoreFilter] = useState('all')
  const [tuitionFilter, setTuitionFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null)

  // Derive unique exam groups from mock data
  const uniqueExamGroups = Array.from(
    new Set(mockMajors.flatMap((m) => m.examGroups))
  ).sort()

  const filteredMajors = useMemo(() => {
    return mockMajors.filter((major) => {
      // Filter by Exam Group
      if (examGroupFilter !== 'all' && !major.examGroups.includes(examGroupFilter)) {
        return false
      }
      
      // Filter by Major name
      if (majorFilter.trim() !== '' && !major.name.toLowerCase().includes(majorFilter.toLowerCase())) {
        return false
      }

      // Filter by School
      if (schoolFilter !== 'all' && major.schoolId !== schoolFilter) {
        return false
      }

      // Filter by Score Level
      if (scoreFilter !== 'all') {
        if (scoreFilter === '<20' && major.score >= 20) return false
        if (scoreFilter === '20-24' && (major.score < 20 || major.score > 24)) return false
        if (scoreFilter === '>24' && major.score <= 24) return false
      }

      // Filter by Tuition Fee (million VND)
      if (tuitionFilter !== 'all') {
        if (tuitionFilter === '<20' && major.tuitionFee >= 20) return false
        if (tuitionFilter === '20-40' && (major.tuitionFee < 20 || major.tuitionFee > 40)) return false
        if (tuitionFilter === '>40' && major.tuitionFee <= 40) return false
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'salary') return parseInt(b.salary) - parseInt(a.salary) // naive sorting for demo
      if (sortBy === 'demand') return b.demand - a.demand
      if (sortBy === 'score') return b.score - a.score
      return b.views - a.views // 'popular' by default
    })
  }, [examGroupFilter, majorFilter, schoolFilter, scoreFilter, tuitionFilter, sortBy])

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Khám phá ngành học (Đà Nẵng)</h1>
        <p className="text-gray-600">Tìm ngành phù hợp với điểm số, sở thích và điều kiện của bạn</p>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto space-y-4 bg-white p-4 md:p-6 rounded-xl border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={20} className="text-blue-500" />
          <h2 className="font-bold text-gray-900">Bộ lọc tìm kiếm</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* By Major */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Tên ngành</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Tìm ngành..."
                value={majorFilter}
                onChange={(e) => setMajorFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* By School */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Trường đại học</label>
            <select
              value={schoolFilter}
              onChange={(e) => setSchoolFilter(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả các trường</option>
              {mockUniversities.map((uni) => (
                <option key={uni.id} value={uni.id}>{uni.name}</option>
              ))}
            </select>
          </div>

          {/* By Exam Group */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Tổ hợp môn</label>
            <select
              value={examGroupFilter}
              onChange={(e) => setExamGroupFilter(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả tổ hợp</option>
              {uniqueExamGroups.map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>

          {/* By Score Level */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Điểm chuẩn (Dự kiến)</label>
            <select
              value={scoreFilter}
              onChange={(e) => setScoreFilter(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Mọi mức điểm</option>
              <option value="<20">Dưới 20 điểm</option>
              <option value="20-24">Từ 20 - 24 điểm</option>
              <option value=">24">Trên 24 điểm</option>
            </select>
          </div>

          {/* By Tuition Fee */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Học phí</label>
            <select
              value={tuitionFilter}
              onChange={(e) => setTuitionFilter(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Mọi mức học phí</option>
              <option value="<20">Dưới 20 triệu/năm</option>
              <option value="20-40">20 - 40 triệu/năm</option>
              <option value=">40">Trên 40 triệu/năm</option>
            </select>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            Tìm thấy <span className="font-bold text-gray-900">{filteredMajors.length}</span> ngành học phù hợp
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sắp xếp theo:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Phổ biến nhất</option>
              <option value="score">Điểm chuẩn cao - thấp</option>
              <option value="demand">Nhu cầu cao nhất</option>
              <option value="salary">Lương cao nhất</option>
            </select>
          </div>
        </div>
      </div>

      {/* Majors Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMajors.map((major) => (
            <div
              key={major.id}
              className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className={`${major.color} p-4 flex items-start justify-between`}>
                <div className="text-3xl">{major.icon}</div>
                <button className="text-gray-400 group-hover:text-yellow-500 transition-colors">
                  <Star size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4 flex-1">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                    {major.name}
                  </h3>
                  <div className="flex items-start gap-1 mt-1 text-sm text-gray-600">
                    <MapPin size={16} className="flex-shrink-0 mt-0.5 text-blue-500" />
                    <span>{major.schoolName}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {major.examGroups.map(group => (
                    <span key={group} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200">
                      {group}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Điểm chuẩn</span>
                    <span className="font-bold text-gray-900">{major.score}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Học phí</span>
                    <span className="font-bold text-gray-900">{major.tuitionFee > 0 ? `${major.tuitionFee} triệu/năm` : 'Miễn phí'}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <TrendingUp size={16} />
                      Nhu cầu
                    </div>
                    <span className="font-bold text-gray-900">{major.demand}/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <DollarSign size={16} />
                      Lương dự kiến
                    </div>
                    <span className="font-bold text-gray-900">{major.salary}</span>
                  </div>
                </div>
              </div>

              {/* Engagement & CTA */}
              <div className="p-4 border-t border-gray-50 bg-gray-50/50">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {major.views.toLocaleString('vi-VN')} lượt xem
                  </div>
                  <div>
                    {major.duration} năm học
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedMajor(major)}
                  className="w-full py-2 bg-white border border-blue-200 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
          {filteredMajors.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              Không tìm thấy ngành học nào phù hợp với bộ lọc của bạn.
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedMajor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className={`p-6 ${selectedMajor.color} relative`}>
              <button 
                onClick={() => setSelectedMajor(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 bg-white/50 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-4">
                <div className="text-4xl bg-white p-3 rounded-xl shadow-sm">
                  {selectedMajor.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedMajor.name}</h2>
                  <div className="flex items-center gap-1 mt-1 text-gray-700">
                    <MapPin size={16} />
                    <span>{selectedMajor.schoolName}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Info size={20} className="text-blue-500" />
                  <h3 className="text-lg font-bold text-gray-900">Mô tả ngành học</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedMajor.description || 'Chưa có mô tả cho ngành học này.'}
                </p>
              </div>

              {/* Jobs */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={20} className="text-blue-500" />
                  <h3 className="text-lg font-bold text-gray-900">Cơ hội việc làm</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedMajor.suggestedJobs?.map((job, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{job}</span>
                    </div>
                  ))}
                  {(!selectedMajor.suggestedJobs || selectedMajor.suggestedJobs.length === 0) && (
                    <div className="text-gray-500 text-sm">Chưa có dữ liệu việc làm.</div>
                  )}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div className="bg-blue-50 p-3 rounded-xl text-center">
                  <div className="text-sm text-blue-600 font-medium mb-1">Điểm chuẩn</div>
                  <div className="text-xl font-bold text-blue-900">{selectedMajor.score}</div>
                </div>
                <div className="bg-green-50 p-3 rounded-xl text-center">
                  <div className="text-sm text-green-600 font-medium mb-1">Học phí</div>
                  <div className="text-xl font-bold text-green-900">{selectedMajor.tuitionFee > 0 ? `${selectedMajor.tuitionFee}tr` : '0đ'}</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-xl text-center">
                  <div className="text-sm text-purple-600 font-medium mb-1">Thời gian</div>
                  <div className="text-xl font-bold text-purple-900">{selectedMajor.duration} năm</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-xl text-center">
                  <div className="text-sm text-orange-600 font-medium mb-1">Nhu cầu</div>
                  <div className="text-xl font-bold text-orange-900">{selectedMajor.demand}/5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
