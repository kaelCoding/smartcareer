'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { LogoIcon } from './LogoIcon'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#dde6f3] shadow-sm">
      <div className="wrap py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#ffc20a] flex items-center justify-center shadow-[0_8px_18px_rgba(255,194,10,0.28)]">
              <LogoIcon className="text-[#0b2a5b] w-6 h-6" />
            </div>
            <span className="font-bold text-[#0b1f4d]">SMART CAREER</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm text-[#30476f] hover:text-[#0f5ed7]">
              Tính năng
            </a>
            <a href="#steps" className="text-sm text-[#30476f] hover:text-[#0f5ed7]">
              Cách sử dụng
            </a>
            <a href="#faq" className="text-sm text-[#30476f] hover:text-[#0f5ed7]">
              FAQ
            </a>
            <a href="#contact" className="text-sm text-[#30476f] hover:text-[#0f5ed7]">
              Liên hệ
            </a>
          </nav>

          <div className="hidden md:flex gap-3">
            <button className="btn btn-ghost">Đăng nhập</button>
            <Link href="/app" className="btn btn-gold">Bắt đầu ngay</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#dde6f3] pt-4">
            <nav className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-[#30476f]">
                Tính năng
              </a>
              <a href="#steps" className="text-sm text-[#30476f]">
                Cách sử dụng
              </a>
              <a href="#faq" className="text-sm text-[#30476f]">
                FAQ
              </a>
              <a href="#contact" className="text-sm text-[#30476f]">
                Liên hệ
              </a>
              <div className="flex gap-2 mt-4">
                <button className="btn btn-ghost text-sm">Đăng nhập</button>
                <Link href="/app" className="btn btn-gold text-sm">Bắt đầu ngay</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
