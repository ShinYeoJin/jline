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
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <div id='logo' className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">제이라인</div>
          </div>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {Object.keys(menuItems).map((key) => (
              <button
                key={key}
                onClick={() => {
                  scrollToSection(key);
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-black transition font-medium text-sm lg:text-base px-2 py-2 min-h-[44px]"
              >
                {menuItems[key]}
              </button>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4 animate-in slide-in-from-top">
            <nav className="flex flex-col space-y-2">
              {Object.keys(menuItems).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    scrollToSection(key);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-black font-medium py-3 px-2 text-base min-h-[44px] transition"
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
