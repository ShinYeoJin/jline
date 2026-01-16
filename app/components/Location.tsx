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

if (!NAVER_MAP_CLIENT_ID) {
  console.error('NEXT_PUBLIC_NAVER_MAP_CLIENT_ID 환경변수가 설정되지 않았습니다.');
}


export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);

  const handleReservation = () => {
    window.open(
      'https://map.naver.com/p/search/%EC%A0%9C%EC%9D%B4%EB%9D%BC%EC%9D%B8/place/1200546550?placePath=/ticket&entry=pll&fromNxList=true&fromPanelNum=2&locale=ko&searchText=%EC%A0%9C%EC%9D%B4%EB%9D%BC%EC%9D%B8&svcName=map_pcv5&timestamp=202601151003&from=map&searchType=place&c=15.00,0,0,0,dh',
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
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      if (!window.naver || !window.naver.maps) {
        console.error('네이버 지도 API가 로드되지 않았습니다.');
        return;
      }

      try {
        const position = new window.naver.maps.LatLng(37.6238, 126.7154);
        const map = new window.naver.maps.Map(mapRef.current, {
          center: position,
          zoom: 16,
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
    <section id="location" className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-900">오시는 길</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 주소 / 정보 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-left">
            <h3 className="text-xl font-bold mb-6 text-gray-900">찾아오시는 길</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">제이라인</p>
                  <p className="text-gray-600">경기 김포시 북변1로16번길 34 산호상가 124호</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1" />
                <div>
                  <p className="text-gray-600 font-medium">0507-1478-0261</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1" />
                <div>
                  <p className="text-gray-600 font-medium">평일 10:00 - 19:00</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3 font-medium">걸포북변역 2번 출구에서 489m</p>
              <Button className="hover:bg-[#222]" onClick={handleReservation}>
                예약 문의하기
              </Button>
            </div>
          </div>

          {/* 지도 */}
          <div className="h-96 md:h-auto rounded-2xl overflow-hidden border border-gray-300">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
