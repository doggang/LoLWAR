
# LOL team balancing service v1.0
> **소속 : 수도기계화보병사단 통신중대** <br/> **개발기간 : 2025.02.02 ~ 2025.05.05**

## 배포 주소

> **개발 버전** : [lolwar.vercel.app/](https://lolwar.vercel.app/) <br>

## 웹개발자 소개
| 김도현 | 
| --- | 
| <img width="160px" src="https://github.com/user-attachments/assets/f82a7855-2c4e-45f7-b8de-155376cf7edd" />| 
| [@DogGang](https://github.com/doggang) | 
| 대한민국 육군 중위 | 


## 프로젝트 소개

롤 팀밸런싱 서비스는 제목 그대로 팀 밸런스를 맞춰주는 서비스입니다. <br>친구들과 롤(League of Legends)이라는 게임을 하면서 팀 밸런스가 잘 맞지 않아 실망했던 경험이 많아, 직접 팀 밸런싱을 하여 게임을 더 재미있게 즐기기 위해 이 서비스를 개발했습니다. 롤 팀밸런싱 서비스는 내전 고정멤버들과 신규 멤버들을 추가하여 균형 잡힌 팀을 만들 수 있는 웹사이트입니다.

-----

The LoL Team Balancing Service is exactly what the title suggests - a service that helps balance teams. When playing the game LoL (League of Legends) with friends, I often felt disappointed when the teams weren't balanced well, so I developed this service to balance teams myself and make the game more enjoyable. The LoL Team Balancing Service is a website that allows you to add regular internal match members and new members to create balanced teams.

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js v18.8.0.](https://nodejs.org/ko/blog/release/v18.8.0)
- [Npm v8.18.0](https://www.npmjs.com/package/npm/v/8.18.0)

### Installation
``` bash 
$ git https://github.com/doggang/LoLWAR.git
$ cd lolwar
```

#### Frontend
```
$ cd lolwar
$ nvm use v.18.8.0
$ npm install 
$ npm run dev
```

---

## Stacks 🏍

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---
## 화면 구성 🚀
<table align="center">
  <tr>
    <th colspan="2" align="center">
      <img src="https://github.com/user-attachments/assets/ce115ee0-5a06-4902-8f23-03e41e3a8e7c" width="1000"/><br/>메인화면
    </th>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/74bb2ac0-35c5-4e1d-ad14-41d2e58c9209" width="500"/><br/>밸런싱 화면
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/86c10270-9288-4ed5-aab0-8171ed5c3c72" width="500"/><br/>음악 ON/OFF 버튼
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/f2759071-2f36-42cb-b7f9-f189a7882293" width="500"/><br/>소환사 추가
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/be39be6f-1074-4e3d-a50c-0ecf571c288b" width="500"/><br/>고멤 추가
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/90537e70-270f-468f-ad2c-82ba779226a5" width="500"/><br/>티어/포인트 변환(커뮤니티 변화)
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b822a156-34ac-43b2-b352-dd2d398c268e" width="500"/><br/>티어/포인트 변환
    </td>
  </tr>
</table>


---
## 주요 기능 🚢

### ⭐️ 밸런싱 기능
- 플레이어 밸런싱시 Select-option을 사용하여 티어 또는 포인트를 기준으로 바꾸면서 진행할 수 있게 함.
- 밸런스 맞추기 버튼 클릭시 각 팀의 포인트 합이 최대한 비슷하게 될 수 있게 함.
- 클릭할 때마다 팀이 바뀌게 구현.
### 💙 포인트 / 티어 토글버튼
- 포인트 / 티어를 select option을 선택하여 더 자유롭게 팀밸런싱을 맞출 수 있음.
### 💜 티어 숨기기 버튼
- 티어 숨기기 버튼을 통해 팀밸런싱 방송 중 다른 인원이 자신 혹은 다른 사람의 티어/포인트를 볼 수 없게 함.
### 🧡 배경 음악 토글버튼 
- 음악 ON/OFF 버튼을 이용하여 밸런싱시 더욱 몰입할 수 있게 함.
### 💛 고정멤버 localStorage 구현
- 고정멤버들은 고멤 버튼을 이용해서 따로 포인트/티어 설정 없이 추가할 수 있게 함.
- 고정멤버들은 자주 사용하는 이유 등 편의성을 위해 LocalStorage에 저장하게 구현함.
### 💚 신규멤버 추가기능
- 신규멤버나 게스트 참여시 소환사 추가 버튼을 이용하여 추가 가능.

---
## 아키텍쳐

### 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── index.html
├── eslint.config.js
├── bgm.mp3
├── .gitignore
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── component
│   │   ├── Pick.jsx (좌측 픽창 부분)
│   │   ├── Community.jsx (우측 커뮤니티창 부분)
│   │   ├── Summoner.jsx (Community.jsx 속 플레이어 Tag)
│   ├── style
│   │   ├── Pick.css
│   │   ├── Community.css
│   │   ├── Summoner.css
│   ├── assets
│   │   ├── RIXGOB.TTF
│   │   ├── RIXGOEB.TTF
│   │   ├── RIXGOL.TTF
│   │   ├── RIXGOM.TTF
│   │   ├── bgimg.jpg
│   │   ├── icon.jpg
│   │   ├── lolicon.png
│   │   ├── rix모던고딕b.ttf
│   │   ├── sumIcon.jpg
│   │   ├── title.png
│   │   ├── 만질때 소리.ogg
│   │   ├── 일반겜 픽.ogg
│   │   ├── 픽잡는소리.ogg
│   │   ├── 픽창소리.ogg
```
### 성능 최적화
![image](https://github.com/user-attachments/assets/7b68ef4c-627b-42d9-baec-6766f001cbeb)

#### 이미지 PNG to Webp로 변환하여 로딩속도 개선
#### background music 용량 압축하여 로딩속도 개선
- 계속 진행중 ..
