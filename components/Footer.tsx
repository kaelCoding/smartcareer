import { Mail, Share2, MessageSquare, Send } from 'lucide-react'
import { LogoIcon } from './LogoIcon'

export default function Footer() {
  return (
    <footer className="bg-[#0b2a5b] text-white py-12 md:py-16">
      <div className="wrap">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#ffc20a] flex items-center justify-center shadow-[0_4px_14px_rgba(255,194,10,0.28)]">
                <LogoIcon className="text-[#0b2a5b] w-5 h-5" />
              </div>
              <span className="font-bold">SMART CAREER</span>
            </div>
            <p className="text-blue-200 text-sm mb-6">
              Tìm ngành và sắp xếp nguyện vọng bằng dữ liệu chính xác từ 583+ trường đại học.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Sản phẩm</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tra điểm chuẩn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tra ngành phù hợp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hỏi cố vấn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  So sánh ngành
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Công ty</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Pháp lý</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tiếp nhận cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2026 Tra Tuyển Sinh. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-blue-200 text-sm mt-4 md:mt-0">
              Được tạo bằng ❤️ cho các bạn học sinh Việt Nam
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
