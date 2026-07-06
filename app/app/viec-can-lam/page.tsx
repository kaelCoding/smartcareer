'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, CheckCircle2, Circle, Clock, ArrowRight, AlertCircle } from 'lucide-react'

type Task = {
  id: string
  title: string
  period: string
  description: string
  status: 'completed' | 'current' | 'upcoming'
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Rà soát và hoàn thiện học bạ',
    period: 'Tháng 4 - 06/06/2026',
    description: 'Kiểm tra kỹ thông tin cá nhân, điểm số các môn học trên học bạ đảm bảo chính xác để phục vụ xét tuyển sớm.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Đăng ký dự thi tốt nghiệp THPT',
    period: 'Đầu tháng 5/2026',
    description: 'Đăng ký bài thi/môn thi phù hợp với định hướng tổ hợp xét tuyển. Đảm bảo nộp hồ sơ đúng hạn tại trường THPT.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Tham gia xét tuyển sớm (Tùy chọn)',
    period: 'Tháng 3 - Tháng 7/2026',
    description: 'Nộp hồ sơ xét tuyển bằng Học bạ, ĐGNL, ĐGTD, IELTS... vào các trường Đại học theo đề án riêng của trường.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Biết điểm thi & Đăng ký Nguyện vọng chung',
    period: 'Tháng 7/2026',
    description: 'Có kết quả thi THPT. Thực hiện đăng ký, điều chỉnh và sắp xếp nguyện vọng trên hệ thống của Bộ GD&ĐT (Bao gồm cả các ngành đã trúng tuyển sớm).',
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'Nộp lệ phí xét tuyển trực tuyến',
    period: 'Cuối tháng 7 - Đầu tháng 8/2026',
    description: 'Thanh toán lệ phí đăng ký nguyện vọng trực tuyến theo lịch phân luồng của Bộ GD&ĐT để xác nhận nguyện vọng hợp lệ.',
    status: 'upcoming',
  },
  {
    id: '6',
    title: 'Xác nhận nhập học trực tuyến',
    period: 'Giữa tháng 8/2026',
    description: 'Sau khi có kết quả trúng tuyển chính thức đợt 1, thí sinh bắt buộc phải xác nhận nhập học trực tuyến trên hệ thống.',
    status: 'upcoming',
  }
]

export default function ViecCanLam() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        if (task.status === 'completed') return { ...task, status: 'current' }
        if (task.status === 'current') return { ...task, status: 'completed' }
        return { ...task, status: 'current' }
      }
      return task
    }))
  }

  const completedCount = tasks.filter(t => t.status === 'completed').length
  const progress = Math.round((completedCount / tasks.length) * 100)

  return (
    <div className="p-4 md:p-8 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/app" className="hover:text-blue-600">Trang chủ</Link>
          <span>›</span>
          <span className="font-medium text-gray-900">Việc cần làm</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lộ trình xét tuyển 2026</h1>
        <p className="text-gray-600 text-lg mb-8">
          Theo dõi sát sao từng cột mốc để không bỏ lỡ bất kỳ cơ hội nào tiến vào cánh cửa Đại học.
        </p>

        {/* Progress Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-gray-900">Tiến độ của bạn</div>
            <div className="text-blue-600 font-bold">{progress}%</div>
          </div>
          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            <AlertCircle size={16} />
            Đã hoàn thành {completedCount}/{tasks.length} mục quan trọng
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-24 top-4 bottom-4 w-0.5 bg-gray-200"></div>

        <div className="space-y-8">
          {tasks.map((task) => {
            const isCompleted = task.status === 'completed'
            const isCurrent = task.status === 'current'
            
            return (
              <div key={task.id} className="relative flex items-start gap-4 md:gap-8">
                {/* Time Indicator (Desktop) */}
                <div className="hidden md:block w-32 pt-3 text-right">
                  <div className={`text-sm font-bold ${isCompleted ? 'text-gray-400' : isCurrent ? 'text-blue-600' : 'text-gray-400'}`}>
                    {task.period}
                  </div>
                </div>

                {/* Status Node */}
                <div className="relative z-10 flex flex-col items-center pt-2">
                  <button 
                    onClick={() => toggleTaskStatus(task.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm
                      ${isCompleted 
                        ? 'bg-blue-600 text-white border-none' 
                        : isCurrent 
                          ? 'bg-white border-2 border-blue-600 text-blue-600' 
                          : 'bg-white border-2 border-gray-300 text-gray-300 hover:border-blue-400'
                      }`}
                  >
                    {isCompleted ? <CheckCircle2 size={20} /> : <Circle size={16} fill={isCurrent ? 'currentColor' : 'transparent'} />}
                  </button>
                </div>

                {/* Content Card */}
                <div className={`flex-1 bg-white p-5 md:p-6 rounded-2xl border transition-all
                  ${isCurrent ? 'border-blue-300 shadow-md ring-4 ring-blue-50' : 'border-gray-200 shadow-sm hover:border-gray-300'}
                  ${isCompleted ? 'opacity-70 bg-gray-50' : ''}
                `}>
                  {/* Time Indicator (Mobile) */}
                  <div className="md:hidden flex items-center gap-1.5 text-xs font-bold text-gray-500 mb-3">
                    <Calendar size={14} />
                    {task.period}
                  </div>
                  
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-lg font-bold mb-2 ${isCompleted ? 'text-gray-500 line-through decoration-gray-300' : 'text-gray-900'}`}>
                      {task.title}
                    </h3>
                    
                    {isCurrent && (
                      <span className="shrink-0 px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider">
                        Đang diễn ra
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-sm ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {task.description}
                  </p>

                  {!isCompleted && !isCurrent && (
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                      <Clock size={14} />
                      Sắp tới
                    </div>
                  )}

                  {isCurrent && (
                    <button 
                      onClick={() => toggleTaskStatus(task.id)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Đánh dấu đã xong <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
