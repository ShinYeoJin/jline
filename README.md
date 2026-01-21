# 제이라인 (JLine) - 속눈썹 전문 스튜디오 웹사이트

제이라인 속눈썹 전문 스튜디오의 공식 웹사이트입니다. Next.js와 React를 기반으로 제작된 반응형 웹 애플리케이션으로, 모바일, 태블릿, 데스크탑 모든 기기에서 최적화된 사용자 경험을 제공합니다.

## 🌟 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 화면 크기에 최적화
- **이미지 갤러리**: 슬라이드 형식의 시술 사진 및 제품 소개
- **시술 안내**: 플랫모 1D/2D/3D 시술 정보 및 가격 표시
- **고객 후기**: 네이버 리뷰 연동 및 고객 만족도 표시
- **오시는 길**: 네이버 지도 API를 활용한 위치 정보 및 지도 표시
- **예약 시스템**: 네이버 예약 시스템 연동

## 🛠 기술 스택

- **프레임워크**: Next.js 16.1.2 (App Router)
- **언어**: TypeScript 5
- **UI 라이브러리**: React 19.2.3
- **스타일링**: Tailwind CSS 4
- **아이콘**: Lucide React
- **지도 API**: 네이버 지도 Open API v3

## 📋 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/ShinYeoJin/jline.git
cd jline
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 3. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_NAVER_MAP_CLIENT_ID=ms6l78wr46
```

**네이버 지도 API 설정 방법:**
1. [네이버 클라우드 플랫폼](https://www.ncloud.com/)에 접속
2. Application > Application 등록에서 새 애플리케이션 생성
3. Maps > Web Dynamic Map 서비스 활성화
4. Web 서비스 URL에 배포 도메인 등록 (예: `https://jline.vercel.app/`)
5. 발급받은 Client ID를 환경 변수에 설정

### 4. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 5. 프로덕션 빌드

```bash
npm run build
npm start
# 또는
yarn build
yarn start
```

## 📁 프로젝트 구조

```
jline/
├── app/
│   ├── components/          # React 컴포넌트
│   │   ├── Header.tsx       # 헤더 및 네비게이션
│   │   ├── Gallery.tsx      # 이미지 갤러리 슬라이더
│   │   ├── Service.tsx      # 시술 안내 섹션
│   │   ├── Reviews.tsx      # 고객 후기 섹션
│   │   ├── Location.tsx     # 오시는 길 및 지도
│   │   ├── Footer.tsx       # 푸터
│   │   └── UI/              # 재사용 가능한 UI 컴포넌트
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── IconTextRow.tsx
│   ├── data/                # 정적 데이터
│   │   ├── services.ts      # 시술 정보
│   │   └── reviews.ts       # 고객 후기
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 전역 스타일
├── css/
│   └── font.css             # 커스텀 폰트 (Aritaburi)
├── public/
│   └── images/              # 이미지 파일
├── next.config.ts           # Next.js 설정
├── tailwind.config.ts       # Tailwind CSS 설정
└── tsconfig.json            # TypeScript 설정
```

## 🎨 주요 기능 상세

### 반응형 디자인
- 모바일: 터치 스와이프 지원, 최적화된 이미지 레이아웃
- 태블릿: 중간 화면 크기에 맞춘 그리드 레이아웃
- 데스크탑: 넓은 화면을 활용한 풍부한 콘텐츠 표시

### 이미지 갤러리
- 자동 슬라이드 전환 (4초 간격)
- 터치 스와이프 지원 (모바일)
- 화살표 버튼으로 수동 제어
- 인디케이터로 현재 슬라이드 표시

### 네이버 지도 통합
- 실시간 위치 표시
- 마커 및 줌 컨트롤
- 모바일 최적화된 지도 뷰

## 🌐 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 프로젝트 연결
2. 환경 변수 `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID` 설정
3. 자동 배포 완료

### 수동 배포

```bash
npm run build
npm start
```

## 🔧 개발 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm start`: 프로덕션 서버 실행
- `npm run lint`: ESLint 실행

## 📝 라이선스

이 프로젝트는 비공개 프로젝트입니다.

## 📞 문의

- **상호명**: 제이라인
- **주소**: 경기 김포시 북변1로16번길 34 산호상가 124호
- **전화**: 0507-1478-0261
- **운영시간**: 평일 10:00 - 19:00

---

Made by Shin Yeo Jin ⭐
