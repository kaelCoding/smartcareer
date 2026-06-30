/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/smartcareer', // <-- THÊM DÒNG NÀY BẮT BUỘC
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
}

export default nextConfig