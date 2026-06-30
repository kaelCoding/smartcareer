import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SMART CAREER — Chọn ngành & xếp nguyện vọng đại học 2026 bằng dữ liệu',
  description: 'Tra cứu điểm chuẩn, tổ hợp môn và đề án tuyển sinh của 583+ trường. Nhập hồ sơ để nhận gợi ý ngành phù hợp với điểm, sở thích và điều kiện — miễn phí.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f5ed7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#f7faff] text-[#0b1f4d]`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
