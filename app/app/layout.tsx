'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Search, BookOpen, Building2, BarChart3, FileText, Users, MessageCircle, Bell, Settings, LogOut, User } from 'lucide-react'

import { LogoIcon } from '@/components/LogoIcon'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Tổng quan', href: '/app', color: 'text-gray-600' },
    { icon: Search, label: 'Tìm ngành', href: '/app/kham-pha-nganh', color: 'text-gray-600' },
    { icon: Building2, label: 'Trường đại học', href: '/app/truong-dai-hoc', color: 'text-gray-600' },
    { icon: BarChart3, label: 'So sánh ngành', href: '/app/compare', color: 'text-gray-600' },
  ]

  const bottomItems = [
    { icon: MessageCircle, label: 'Cố vấn tuyển sinh', href: '#', color: 'text-gray-600' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 md:relative md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#ffc20a] flex items-center justify-center shadow-[0_4px_14px_rgba(255,194,10,0.28)]">
                <LogoIcon className="text-[#0b2a5b] w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-gray-900">SMART CAREER</div>
                <div className="text-xs text-gray-600">Dữ liệu tuyển sinh đại học</div>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute right-4 top-4 md:hidden text-gray-500"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Menu */}
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
            <div className="text-xs font-bold text-gray-500 px-3 uppercase tracking-wider mb-3">KHÁM PHÁ</div>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${item.color === 'text-blue-500'
                    ? 'text-blue-500 hover:bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}

            <div className="text-xs font-bold text-gray-500 px-3 uppercase tracking-wider mb-3 mt-6">ĐỊNH HƯỚNG</div>
            {bottomItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${item.color === 'text-blue-500'
                    ? 'text-blue-500 hover:bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Sidebar Footer */}
          {/* <div className="p-4 border-t border-gray-200 space-y-2">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
              <LogOut size={20} />
              <span className="text-sm">Đăng xuất</span>
            </button>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
            <input
              type="text"
              placeholder="Tìm ngành, trường, điểm chuẩn..."
              className="hidden md:block px-4 py-2 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 max-w-md"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center -mt-7 -mr-1">
                2
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-blue-900">
              N
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
