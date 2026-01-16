'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "자연스러운 컬",
    description: "눈매에 맞는 최적의 각도와 컬로\n자연스럽고 아름다운 속눈썹을 연출합니다",
    images: ['시술사진2.jpg','시술사진.jpg',]
  },
  {
    id: 2,
    title: "프리미엄 제품",
    description: "눈 건강을 최우선으로\n검증된 고품질 제품만을 사용합니다",
    images: ['속눈썹.jpg', '제품사진.jpg']
  },
  {
    id: 3,
    title: "1:1 맞춤 시술",
    description: "개인별 눈 모양과 속눈썹 상태를\n정밀 분석하여 맞춤 시술을 제공합니다",
    images: ['시술사진3.jpg', '가게사진.jpg']
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 모바일 체크
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md 브레이크포인트
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // 터치 스와이프 처리
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide(); // 왼쪽으로 스와이프 - 다음 슬라이드
    } else if (distance < -minSwipeDistance) {
      prevSlide(); // 오른쪽으로 스와이프 - 이전 슬라이드
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-stone-50 pt-20 sm:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative h-[70vh] min-h-[500px] sm:h-[60vh] sm:min-h-[400px] md:h-[65vh] lg:h-[75vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-md"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 배경 이미지 2장 나란히 (모바일에서는 세로로, 데스크탑에서는 가로로) */}
              <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-stretch gap-1 sm:gap-4 p-1 sm:p-0">
                {slide.images
                  .filter((img, i) => {
                    // 모바일에서 특정 슬라이드의 첫 번째 이미지 필터링
                    // 데스크탑에서는 모든 이미지 표시
                    if (!isMobile) return true; // 데스크탑에서는 모든 이미지
                    if (slide.id === 2 && i === 0) return false; // 프리미엄 제품: 첫 번째 이미지(속눈썹.jpg) 숨기기
                    if (slide.id === 3 && i === 0) return false; // 1:1 맞춤 시술: 첫 번째 이미지(시술사진3.jpg) 숨기기
                    return true;
                  })
                  .map((img, filteredIndex) => {
                    // 필터링된 배열의 인덱스로 원본 인덱스 찾기
                    const originalIndex = slide.images.indexOf(img);
                    
                    // 필터링된 이미지 개수 계산
                    const filteredImages = slide.images.filter((img, i) => {
                      if (!isMobile) return true;
                      if (slide.id === 2 && i === 0) return false;
                      if (slide.id === 3 && i === 0) return false;
                      return true;
                    });
                    const imageCount = filteredImages.length;
                    
                    // 데스크탑에서는 항상 h-full, 모바일에서는 이미지 개수에 따라
                    const heightClass = !isMobile 
                      ? 'h-full' 
                      : imageCount === 1 
                        ? 'h-full' 
                        : 'h-1/2';
                    
                    return (
                      <img
                        key={`${slide.id}-${originalIndex}`}
                        src={`/images/${encodeURIComponent(img)}`}
                        alt={slide.title}
                        className={`w-full md:w-1/2 ${heightClass} object-cover rounded-lg sm:rounded-2xl flex-shrink-0`}
                      />
                    );
                  })}
              </div>

              {/* 텍스트 오버레이 */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 px-2 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="text-center px-4 py-6 sm:px-6 sm:py-8 bg-white/90 md:bg-white/80 backdrop-blur-md max-w-lg mx-2 sm:mx-4 rounded-xl sm:rounded-2xl shadow-lg">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">{slide.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed whitespace-pre-line">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 좌우 화살표 */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white active:bg-white/95 p-2 sm:p-3 rounded-full transition z-10 border border-gray-200 shadow-md min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white active:bg-white/95 p-2 sm:p-3 rounded-full transition z-10 border border-gray-200 shadow-md min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="다음 슬라이드"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-900" />
          </button>

          {/* 인디케이터 */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex gap-3 z-10 items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="p-1 border-0 bg-transparent"
                aria-label={`슬라이드 ${idx + 1}로 이동`}
              >
                <span
                  className={`block transition-all duration-300 ease-out ${
                    idx === currentSlide
                      ? 'bg-black w-8 h-[3px] rounded-full'
                      : 'bg-gray-400 w-4 h-[3px] rounded-full hover:bg-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
