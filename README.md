# 전진영 포트폴리오

개발자 전진영의 개인 포트폴리오 웹사이트입니다.  
Notion을 CMS로 활용하여 자기소개서, 경력기술서, 프로젝트 목록을 관리합니다.

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 13.1.6 (Pages Router) |
| 언어 | JavaScript (JSX) |
| 스타일 | Tailwind CSS 3.2.4 (JIT) |
| CMS | Notion API (@notionhq/client) |
| 다크모드 | next-themes |
| 폰트 | Nanum Gothic (Google Fonts) |

---

## 주요 기능

- **홈**: Lottie 애니메이션이 포함된 히어로 섹션
- **프로젝트**: Notion 데이터베이스 기반 프로젝트 목록
- **자기소개**: 자기소개서 / 경력기술서 탭 전환 뷰 (Notion 페이지 렌더링)
- **다크모드**: 시스템 설정 연동 토글 지원

---

## 프로젝트 구조

```
src/
├── components/
│   ├── about-me/
│   │   └── notion-block-renderer.js  # Notion 블록 렌더러
│   ├── home/
│   │   ├── hero.js
│   │   └── animation.js
│   ├── header.js
│   ├── footer.js
│   ├── layout.js
│   └── dark-mode-toggle-button.js
├── pages/
│   ├── index.js
│   ├── about-me.js
│   └── projects.js
├── config/
│   └── index.js                      # 환경변수 참조
├── lib/
│   └── notion.js                     # Notion API 호출
└── styles/
    └── globals.css
```

---

## 환경변수 설정

`.env.local` 파일을 생성하고 아래 값을 입력합니다.

```env
NOTION_TOKEN=         # Notion Integration 토큰
NOTION_DATABASE_ID=   # 프로젝트 데이터베이스 ID
RESUME_PAGE_ID=       # 자기소개서 페이지 ID
CAREER_PAGE_ID=       # 경력기술서 페이지 ID
```

---

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# ESLint 검사
npm run lint
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

---

## Claude Code로 개발한 내용

이 프로젝트의 UI/UX 개선 작업은 **[Claude Code](https://claude.ai/code)** (Anthropic의 AI 코딩 도구)를 활용하여 진행했습니다.

### 작업 내역

- **자기소개 페이지 리디자인** (`src/pages/about-me.js`)
  - 그라디언트 헤더 섹션 추가 (이름 + 소개 문구)
  - 탭을 pill 스타일 버튼으로 교체, 선택 시 인디고 색상 강조
  - 콘텐츠 영역을 둥근 카드 박스(`rounded-2xl`)로 래핑

- **Notion 블록 렌더러 개선** (`src/components/about-me/notion-block-renderer.js`)
  - `h1`: 인디고 하단 보더 라인 강조
  - `h2`: 좌측 인디고 수직 바 액센트
  - 불릿 리스트: `list-disc marker:text-indigo-400` 자연스러운 정렬
  - 번호 리스트: `list-decimal marker:text-indigo-500` 프로젝트별 줄 간격 확대
  - divider: 장식 구분선(`✦`) 적용
  - callout: 인디고 배경 카드 형태로 개선
  - 전체 줄간격 및 섹션 여백 확대로 가독성 향상

- **전역 스타일 적용** (`src/styles/globals.css`)
  - 나눔고딕(Google Fonts) 폰트 적용
  - 기본 폰트 크기 15pt 설정

---

## 라이선스

MIT
