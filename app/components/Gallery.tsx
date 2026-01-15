'use client';

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[60vh] lg:h-[75vh] rounded-2xl overflow-hidden shadow-md">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 배경 이미지 2장 나란히 */}
              <div className="absolute inset-0 flex justify-center items-center gap-4">
                {slide.images.map((img, i) => (
                  <img
                    key={i}
                    src={`/images/${img}`}
                    alt={slide.title}
                    className="w-1/2 h-full object-cover rounded-2xl"
                  />
                ))}
              </div>

              {/* 텍스트 오버레이 */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="text-center px-6 py-8 bg-white/80 backdrop-blur-md max-w-lg mx-4 rounded-2xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{slide.title}</h3>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed whitespace-pre-line">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 좌우 화살표 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition z-10 border border-gray-200"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition z-10 border border-gray-200"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>

          {/* 인디케이터 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-black w-8' : 'bg-gray-400 w-2 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
