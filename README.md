# 카라멜에셋 신소연 FC 모바일 명함

## 사용 방법
1. ZIP 압축을 풉니다.
2. `index.html`을 브라우저로 엽니다. 인터넷 연결 없이도 디자인과 프로필 사진이 표시됩니다.
3. 카카오톡에 웹페이지 링크를 공유하려면 `index.html`, `assets`, `css`, `js` 폴더를 **함께** 정적 웹 호스팅에 업로드합니다. (예: Netlify / GitHub Pages 등)

## 구성
- `index.html`: 모바일 명함 본문
- `assets/shin-soyeon-profile.webp`: 이미지 에셋 (AI 생성된 프로필)
- `assets/share-preview.jpg`: SNS/소개용 미리보기 이미지 에셋
- `assets/favicon.svg`: 사이트 아이콘 에셋
- `assets/shin-soyeon-fc.vcf`: 연락처 저장용 vCard
- `css/style.css`: 브랜드 디자인 사양서 반영 스타일
- `js/app.js`: 사례 아코디언, 명함 공유 기능

## 참고사항
- 연결된 전화번호: 010-4006-4221 / 070-4439-2400 (제공된 가입제안서 기준)
- 5개 사례는 모두 **가상 상담 시나리오**입니다. 실재 고객 후기 또는 실적처럼 표시하거나 홍보하지 마세요. 실제 후기를 수집했다면 본인의 동의 및 정확한 근거를 확인한 뒤 수정하세요.
- 모바일 명함을 웹에 배포하기 전 개인정보·금융상품 광고 관련 내부 검토가 필요할 수 있습니다.
- 프로필 사진은 사용자가 제공한 인물 사진을 바탕으로 생성한 이미지입니다. 사진을 실사 촬영 기록처럼 설명하지 마세요.
- 카카오톡 링크 미리보기 이미지를 확실히 제공하려면 배포 후 `index.html`의 `<head>`에 `og:image` 절대 URL(예: https://도메인/assets/share-preview.jpg)을 추가하세요.
- 이 정적 페이지는 개인정보 입력/서버 전송을 하지 않습니다.

## 디자인 시스템
- Primary: #E8610C
- Background: #FFFFFF / #FFF8F2
- Heading: #222222
- Responsive mobile-first: 360, 390, 768, 1440px
- 별도 외부 JS, CSS, 웹폰트, CDN 의존성 없음
