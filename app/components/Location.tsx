'use client';
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import Button from './UI/Button';

declare global {
  interface Window {
    naver: any;
  }
}

const NAVER_MAP_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
// const NAVER_MAP_CLIENT_ID = 'ms6l78wr46';

if (!NAVER_MAP_CLIENT_ID) {
  console.error('NEXT_PUBLIC_NAVER_MAP_CLIENT_ID 환경변수가 설정되지 않았습니다.');
}


export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleReservation = () => {
    window.open(
      'https://nid.naver.com/nidlogin.login?svctype=64&url=https%3A%2F%2Ftalk.naver.com%2Fct%2Fw4eicr%3Ffrm%3Dmnmb%26frm%3Dnmb_detail%26resizeTo%3D1920%2C1040nidref%3Dhttps%253A%252F%252Fpcmap.place.naver.com%252Fplace%252F1200546550%252Fhome%253FfromPanelNum%253D2%2526timestamp%253D202601161013%2526locale%253Dko%2526svcName%253Dmap_pcv5%2526searchText%253D%2525EC%2525A0%25259C%2525EC%25259D%2525B4%2525EB%25259D%2525BC%2525EC%25259D%2525B8',
      '_blank'
    );
  };

  useEffect(() => {
    if (!mapRef.current) return;

    if (!NAVER_MAP_CLIENT_ID) {
      console.error('네이버 지도 API Client ID가 설정되지 않았습니다.');
      return;
    }

    // 디버깅: 실제 사용되는 Client ID 확인
    console.log('네이버 지도 API Client ID:', NAVER_MAP_CLIENT_ID);
    console.log('현재 페이지 URL:', window.location.href);
    console.log('현재 페이지 Origin:', window.location.origin);
    console.log('현재 페이지 Pathname:', window.location.pathname);
    
    // 런타임 환경변수 확인 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.log('환경변수 직접 확인:', process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID);
    }

    const existingScript = document.getElementById('naver-map-script');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'naver-map-script';
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      if (!window.naver || !window.naver.maps) {
        console.error('네이버 지도 API가 로드되지 않았습니다.');
        return;
      }

      try {
        const position = new window.naver.maps.LatLng(37.6238, 126.7154);
        // 모바일에서 더 적절한 zoom 레벨 계산
        const isMobile = window.innerWidth < 768;
        const map = new window.naver.maps.Map(mapRef.current, {
          center: position,
          zoom: isMobile ? 17 : 16,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
          },
        });

        new window.naver.maps.Marker({
          position,
          map,
          title: '제이라인',
        });
      } catch (error) {
        console.error('네이버 지도 초기화 중 오류 발생:', error);
      }
    };

    script.onerror = () => {
      console.error('네이버 지도 API 스크립트 로드 실패');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-gray-900">오시는 길</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* 주소 / 정보 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm text-left order-2 md:order-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900">찾아오시는 길</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin size={18} className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">제이라인</p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">경기 김포시 북변1로16번길 34 산호상가 124호</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Phone size={18} className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:050714780261" 
                    className="text-gray-600 hover:text-gray-900 active:text-gray-900 font-medium text-sm sm:text-base underline decoration-gray-400 hover:decoration-gray-900 transition-colors"
                  >
                    0507-1478-0261
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Clock size={18} className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">평일 10:00 - 19:00</p>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 font-medium text-center md:text-left">걸포북변역 2번 출구에서 489m</p>
              <Button className="hover:bg-[#222] active:bg-[#111] w-full md:px-12 md:py-5 md:text-xl min-h-[44px] md:min-h-[56px]" onClick={handleReservation}>
                예약 문의하기
              </Button>
            </div>
          </div>

          {/* 지도 */}
          <div className="h-[300px] sm:h-[400px] md:h-full rounded-xl sm:rounded-2xl overflow-hidden border border-gray-300 order-1 md:order-2">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
