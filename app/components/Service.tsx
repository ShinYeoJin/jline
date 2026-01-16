'use client';

import Button from './UI/Button';
import Card from './UI/Card';
import IconTextRow from './UI/IconTextRow';
import { services } from '../data/services';

export default function Service() {
  const handleReservation = () => {
    window.open(
      'https://map.naver.com/p/search/%EC%A0%9C%EC%9D%B4%EB%9D%BC%EC%9D%B8/place/1200546550?placePath=/ticket',
      '_blank'
    );
  };

  return (
    <section id="service" className="py-12 sm:py-16 lg:py-24 bg-white">
      {/* Section Title */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-900">
          시술 안내
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          전문 속눈썹 펌 시술
        </p>
      </div>

      {/* ✅ Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <Card
              key={i}
              className="
                p-6 sm:p-8 lg:p-10
                hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-1
                active:scale-[0.98]
              "
            >
              {/* Title */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center bg-white p-3 sm:p-4 rounded-full mb-3 sm:mb-4 border border-gray-200 shadow-sm">
                  <span className="text-2xl sm:text-3xl text-[#C9A27E]">✓</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {s.description}
                </p>
              </div>

              {/* Price */}
              <Card className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {s.price}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm font-medium">
                    {s.duration}
                  </p>
                </div>
              </Card>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {s.features.map((f, idx) => (
                  <IconTextRow
                    key={idx}
                    icon={<span className="text-white text-sm">✓</span>}
                    text={f}
                  />
                ))}
              </div>

              {/* CTA */}
              <Button onClick={handleReservation}>
                지금 예약하기
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
