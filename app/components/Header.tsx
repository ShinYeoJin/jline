'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 메뉴 아이템 매핑 (key = section id, value = 메뉴 이름)
  const menuItems: { [key: string]: string } = {
    gallery: '소개',
    service: '시술 안내',
    reviews: '후기',
    location: '오시는 길',
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">제이라인</div>
          </div>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex items-center space-x-10">
            {Object.keys(menuItems).map((key) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(key);
                  setIsMenuOpen(false); // 혹시 메뉴 열려 있으면 닫기
                }}
                className="text-gray-700 hover:text-black transition font-medium"
              >
                {menuItems[key]}
              </button>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              {Object.keys(menuItems).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    scrollToSection(key);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-700 font-medium"
                >
                  {menuItems[key]}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
