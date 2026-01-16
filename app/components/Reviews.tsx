'use client';
import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">고객 후기</h2>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (<span key={i} className="text-amber-400 text-xl sm:text-2xl">★</span>))}
        </div>
        <p className="text-gray-600 font-medium mb-8 sm:mb-12 text-sm sm:text-base">네이버 평점 4.9 / 5.0</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-2 sm:mb-3 justify-center">
                {[...Array(5)].map((_, j) => (<span key={j} className="text-amber-400 text-sm sm:text-base">★</span>))}
              </div>
              <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{r.text}</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">- {r.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <button 
            onClick={() => window.open('https://map.naver.com/p/search/%EC%A0%9C%EC%9D%B4%EB%9D%BC%EC%9D%B8/place/1200546550?placePath=/review&entry=pll&fromNxList=true&fromPanelNum=2&locale=ko&searchText=%EC%A0%9C%EC%9D%B4%EB%9D%BC%EC%9D%B8&svcName=map_pcv5&timestamp=202601151003&from=map&searchType=place&c=15.00,0,0,0,dh', '_blank')} 
            className="text-gray-700 hover:text-black active:text-gray-900 font-semibold underline text-sm sm:text-base py-2 px-4 min-h-[44px] inline-flex items-center"
          >
            네이버 후기 더 보기 →
          </button>
        </div>
      </div>
    </section>
  );
}
