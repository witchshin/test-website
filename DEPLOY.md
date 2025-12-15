# 배포 가이드

이 프로젝트를 무료로 배포하는 방법입니다.

## 🚀 방법 1: Vercel (추천)

Vercel은 Next.js를 만든 회사에서 제공하는 플랫폼으로, 무료 티어를 제공합니다.

### 단계별 가이드

#### 1. GitHub에 코드 업로드
```bash
# Git 저장소 초기화 (아직 안 했다면)
cd website
git init
git add .
git commit -m "Initial commit"

# GitHub에 새 저장소를 만들고 연결
# GitHub에서 새 저장소 생성 후:
git remote add origin https://github.com/사용자명/저장소명.git
git branch -M main
git push -u origin main
```

#### 2. Vercel에 배포
1. [Vercel](https://vercel.com)에 가입 (GitHub 계정으로 간단히 가입 가능)
2. "Add New Project" 클릭
3. GitHub 저장소 선택
4. 프로젝트 설정:
   - **Root Directory**: `website` 선택
   - **Framework Preset**: Next.js (자동 감지됨)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `.next` (자동 설정됨)
5. "Deploy" 클릭

#### 3. 배포 완료!
- 몇 분 후 배포가 완료됩니다
- 자동으로 `https://프로젝트명.vercel.app` URL이 생성됩니다
- GitHub에 푸시할 때마다 자동으로 재배포됩니다

### Vercel 무료 티어 제한
- ✅ 무제한 프로젝트
- ✅ 무제한 대역폭
- ✅ 자동 HTTPS
- ✅ 자동 배포
- ⚠️ 서버리스 함수 실행 시간 제한 (월 100GB-시간)
- ⚠️ 빌드 시간 제한 (월 6000분)

---

## 🌐 방법 2: Netlify

Netlify도 무료 티어를 제공합니다.

### 배포 방법
1. [Netlify](https://www.netlify.com)에 가입
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 연결
4. 빌드 설정:
   - **Base directory**: `website`
   - **Build command**: `npm run build`
   - **Publish directory**: `website/.next`
5. "Deploy site" 클릭

---

## 📦 방법 3: GitHub Pages (정적 사이트만)

Next.js를 정적 사이트로 빌드하여 GitHub Pages에 배포할 수 있습니다.

### 설정 방법

1. `next.config.ts`에 다음 설정 추가:
```typescript
const nextConfig: NextConfig = {
  output: 'export', // 정적 사이트로 빌드
  images: {
    unoptimized: true, // 정적 빌드에서는 이미지 최적화 비활성화
  },
  // ... 기존 설정
};
```

2. GitHub Actions로 자동 배포 설정 (선택사항)

---

## 💡 추천: Vercel

Next.js 프로젝트이므로 **Vercel을 강력히 추천**합니다:
- ✅ Next.js에 최적화됨
- ✅ 설정이 가장 간단함
- ✅ 자동 HTTPS 및 CDN
- ✅ 환경 변수 관리 쉬움
- ✅ 프리뷰 배포 (Pull Request마다 자동 배포)

---

## 🔧 배포 전 체크리스트

- [ ] `package.json`에 빌드 스크립트가 있는지 확인 (`npm run build`)
- [ ] 환경 변수가 있다면 Vercel/Netlify 설정에 추가
- [ ] 이미지 도메인이 `next.config.ts`에 설정되어 있는지 확인
- [ ] GitHub에 코드가 푸시되어 있는지 확인

---

## 📝 문제 해결

### 빌드 에러가 발생하는 경우
```bash
# 로컬에서 빌드 테스트
cd website
npm run build
```

### 이미지가 안 보이는 경우
- `next.config.ts`의 `remotePatterns`에 이미지 도메인이 추가되어 있는지 확인
- 외부 이미지의 경우 CORS 설정 확인

### 환경 변수 설정
Vercel 대시보드 → 프로젝트 설정 → Environment Variables에서 추가

