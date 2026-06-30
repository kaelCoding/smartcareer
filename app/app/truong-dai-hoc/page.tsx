'use client'

import { Search, MapPin, Users, Award, ChevronRight, Star } from 'lucide-react'
import { useState, useMemo } from 'react'
import { mockUniversities } from '@/lib/mockData'

export default function Universities() {
  const [region, setRegion] = useState('all')
  const [type, setType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const regions = [
    { id: 'all', name: 'Tất cả' },
    { id: 'Hà Nội', name: 'Hà Nội' },
    { id: 'TP.HCM', name: 'TP.HCM' },
    { id: 'Đà Nẵng', name: 'Đà Nẵng' },
    { id: 'other', name: 'Khác' },
  ]

  const types = [
    { id: 'all', name: 'Tất cả' },
    { id: 'Công lập', name: 'Công lập' },
    { id: 'Tư thục', name: 'Tư thục' },
  ]

  const filteredUniversities = useMemo(() => {
    return mockUniversities.filter((uni) => {
      if (region !== 'all' && uni.location !== region) return false;
      if (type !== 'all' && uni.type !== type) return false;
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        if (!uni.name.toLowerCase().includes(term) && !uni.shortName.toLowerCase().includes(term)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => a.ranking - b.ranking);
  }, [region, type, searchTerm]);

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Danh sách trường đại học</h1>
        <p className="text-gray-600">Tìm thông tin chi tiết về các trường đại học tại khu vực miền Trung</p>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm trường, viết tắt..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Tabs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Địa phương</label>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRegion(r.id)}
                  className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    region === r.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Loại trường</label>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {types.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    type === t.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Universities List */}
      <div className="max-w-7xl mx-auto space-y-3">
        {filteredUniversities.map((uni) => (
          <div
            key={uni.id}
            className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 md:p-6">
              {/* Logo */}
              <div
                className={`${uni.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}
              >
                {uni.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{uni.name}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg">
                    #{uni.ranking}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{uni.shortName}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    {uni.location}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users size={16} />
                    {uni.majorsCount} ngành
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(uni.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">{uni.rating}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                Xem chi tiết
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
        {filteredUniversities.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            Không tìm thấy trường nào phù hợp.
          </div>
        )}
      </div>
    </div>
  )
}
