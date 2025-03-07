## 🍙 타쿠의 식탁

![logo2](https://user-images.githubusercontent.com/51734656/224306446-d8eef6c3-5152-4fab-9dce-fc01f0e25274.png)

## 📢 프로젝트 소개

애니메이션을 보다가 “어! 이 음식 맛잇겠다” 생각해본적 없으신가요?<br>
애니메이션 속 음식을 직접 만들어볼 수 있는 웹사이트 “오타쿠의 식탁”을 소개합니다.<br>
다른 사람들과 함께 레시피를 공유하고 내가 따라해본 애니메이션 레시피도 함께 공유해주세요!

## 🍽 타쿠의 식탁 바로 보러가기 !!

[홈페이지 방문하기](https://tacku-table-harenohee.vercel.app/)

## 📢 타쿠의 식탁 주요 기능

- 나만의 레시피 작성
- 공유하고 싶은 레시피 소셜네트워크에 직접 공유하기
- 찾고싶은 레시피 직접 키워드 검색
- 내가 보고싶은 레시피 카테고리별 조회
- 마음에 들었던 레시피 북마크 저장
- 나만의 페이지에서 내 북마크 글 조회, 내 글 한눈에 보기
- 커뮤니티 자유롭게 글 작성
- 커뮤니티 글에 자유롭게 댓글 달기
- 구글,페이스북 소셜 회원가입

## 📝 프로젝트 아키텍처

![Untitled](https://user-images.githubusercontent.com/51734656/224305131-aa51fda1-963c-4c6b-a7db-ca7a61bb734d.png)

## 🛠 STACK

- **프론트엔드 :** NEXT.js, React, tailwind,typescript, react-query, react-player, react-quill,fuse.js
- **DB관리(백엔드) :** TMDB ⇒ REST API로 서버와 실시간 통신, firebase 이용하여 데이터 관리
- **협력툴 :** 깃, 깃허브, 슬랙, 노션 , 구글 스프레드시트
- **배포** : vercel

## 🛠 DEV-Tool

| 사용 기술       | 기술 설명                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| next.js         | getServerSideProps와 같은 pre-rendering의 사용과 검색엔진 최적화를 위해 사용했습니다.                                                                                                                                                   |
| typescript      | 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 버그를 사전에 제거할 수 있으며, 또한 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있어 사용했습니다.     |
| react-query     | get 한 데이터에 대해 업데이트가 생기면 자동으로 다시 get을 수행해줍니다. 이를 이용하여 레시피 글쓰기 페이지에서 “애니메이션 제목” 검색시 항상 최신의 영화 제목 데이터를 가져올 수 있도록 리액트쿼리를 선택했습니다.                     |
| firebase        | 백엔드에서 구현이 필요한 로그인,회원가입 DB를 콘솔로 쉽게 확인 가능하여 사용했습니다.                                                                                                                                                   |
| tailwind        | UI작업을 최소화 하고 간단한 반응형웹 커스텀, @apply를 통한 공통적인 css의 재활용성을 고려해 선택했습니다.                                                                                                                               |
| react quill     | 사진, 문단 정렬 등 유저가 직관적으로 원하는 스타일의 글을 작성할 수 있도록 리액트에 사용하기 적합하고 편집기 스타일링을 위한 사전 설정으로 사용자 정의 콘텐츠 및 서식을 적용할 수 있고 Destkop/Mobile을 모두 지원하기에 사용하였습니다. |
| react-hook-form | 제어 컴포넌트로 폼을 다루기 위해서는 각각 state를 선언해주고, 해당 state 를 다루기 위해서 또 핸들링 함수를 만들어야 하지만 react-hook-form을 통해 회원가입페이지의 많은 폼을 효과적으로 관리하고 코드를 줄일 수 있어 사용했습니다.      |

## 💥 Trouble Shooting

### 이미지 생성

### **`issue`**

레시피 상세글이나 검색시 조회 썸네일, 유저의 프로필 이미지 등 많은 이미지가 불러와질 때 사용자가 불편함을 느끼지 않고 빠르게 정보를 조회할 수 있도록 로딩 속도를 줄이고자 함.

### **`solve`**

자동으로 레이아웃 쉬프트를 방지하고 각 디바이스에 올바른 크기의 이미지가 제공되며 로컬 이미지가 로드되는 동안 작은 사이즈의 blur이미지로 미리 로딩하여 보여주어 이미지 최적화가 가능한 Next/Image 컴포넌트를 사용.

### **회원가입시 렌더링속도가 과하게 느려지는 이슈**

### **`issue`**

회원가입 버튼 클릭시 일정시간동안 렌더링이 느려지는 이슈 발생. firebase의 DB가 등록되는 과정에서 문제가 있을 거라고 판단했다.

### **`solve`**

DB등록시 적용했었던 불필요한 await를 삭제하고 비동기함수가 동시에 병렬적으로 실행될 수 있도록 Promise all을 사용하여 로직수정 및 react-hook-form으로 리팩토링 적용.

### **sessionStorage**

### **`issue`**

로그인한 사용자와 비로그인한 사용자에 따른 결과값 출력하고, 페이지를 나갈 시 로그인 기록을 삭제하여 재 접속시 로그인이 활성화 되도록 진행.

### **`solve`**

firebase의 authservice 대신 페이지를 새로 고침 해도 데이터가 남아있도록 세션 스토리지를 통해 데이터를 저장. 다만 페이지를 나갈시에는 sessionStorage.clear()를 통해 브라우저에 등록되있던 유저 정보를 삭제.

## 👀 우리의 Git Convention

- main : 주가 되는 백업 브랜치, dev에서 작업이 끝나면 병합할 최종본
- dev : 각자 작업 내용을 merge 하면서 관리하는 브랜치
- release : 배포용 브랜치
- 기능별 이름 brench : 이슈별 작업을 반영하고 업로드하는 각 업무별 브랜치

### 커밋 메세지 양식

- feat : 새로운 기능 추가
- fix : 버그 수정
- design : UI 작업
- refactor : 기존 코드 리팩토링

## 타쿠의 식탁 팀원들!

| Role       | Name   | email               | Gihub                        |
| ---------- | ------ | ------------------- | ---------------------------- |
| 리더\*FE   | 홍다경 | hdkpp89@gmail.com   | https://github.com/ddoqi     |
| 부리더\*FE | 홍희진 | panda4859@gmail.com | https://github.com/harenohee |
| FE         | 김채하 | chha5232@gmail.com  | https://github.com/be-brain  |
| FE         | 서재희 | anfseo12@gmail.com  | https://github.com/JH-anfseo |
| Design     | 이상빈 | qlsdl3865@gmail.com | mailto:qlsdl3865@gmail.com   |
