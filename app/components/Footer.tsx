'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold">제이라인</h3>
          </div>
          <p className="text-gray-400 mb-4">자연스러운 아름다움을 위한<br />속눈썹 전문 스튜디오</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>상호명: 제이라인</p>
            <p>주소: 경기 김포시 북변1로16번길 34 산호상가 124호</p>
            <p>전화: 0507-1478-0261</p>
            <p>사업자등록번호: 123-45-67890</p>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 제이라인. All rights reserved.</p>
      </div>
    </footer>
  );
}
