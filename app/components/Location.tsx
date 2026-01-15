'use client';
import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import Button from './UI/Button';

declare global {
  interface Window {
    naver: any;
  }
}

const NAVER_MAP_CLIENT_ID = String(process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || '0dhku3yuua');


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

    const existingScript = document.getElementById('naver-map-script');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'naver-map-script';
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_MAP_CLIENT_ID}`;
    script.async = true;

    script.onload = () => {
      if (!window.naver || !window.naver.maps) return;

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
              <Button onClick={handleReservation}>
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
