import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 한글 파일명 처리 개선
  images: {
    unoptimized: false,
  },
  // Turbopack 설정 (Next.js 16 기본값)
  turbopack: {},
};

export default nextConfig;
