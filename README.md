# SaaS Wss App

## 1. 프로젝트 환경

- **언어**: TypeScript
- **프레임워크**: ReactNative
- **런타임**: Node.js 20.18.1
- **패키지 매니저**: Yarn

## 2. 주요 명령어

### 가. 종속성 설치

프로젝트의 루트 디렉토리에서 다음 명령어를 실행하여 모든 종속성을 설치합니다.

    nvm use 20.18.1
    yarn install

### 나. lint 및 commit Convention

로컬에서 테스트를 실행합니다.
yarn lint

.lintstagedrc 파일에서 commit convention 설정(소문자 시작의 명령형 문장)
git commit -m "feat: initial commit"

commit convention 무시
git commit -m "Initial commit" --no-verify

### 다. EAS Cli 배포

특정 패키지를 EAS로 배포합니다.
