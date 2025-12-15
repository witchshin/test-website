# GitHub에 변경사항 푸시하기

## 방법 1: GitHub Desktop 사용 (가장 쉬움)

1. GitHub Desktop 실행
2. 왼쪽에서 변경사항이 보일 것입니다
3. 하단에 커밋 메시지 입력 (이미 입력되어 있을 수 있음)
4. "Commit to main" 클릭
5. "Push origin" 버튼 클릭
6. 완료!

## 방법 2: 터미널 사용

터미널에서 다음 명령어 실행:

```bash
cd /Users/sshstar/Documents/cursorstudy/homepage/website
git push origin main
```

만약 인증 오류가 나면 GitHub Desktop을 사용하세요.

---

## 푸시 후

GitHub에 푸시하면 Vercel이 자동으로 재배포를 시작합니다!
몇 분 후 https://test-website-sand-gamma.vercel.app 에서 확인하세요.

