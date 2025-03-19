# LOL team balancing service v1.0
> **소속 : 수도기계화보병사단 통신중대** <br/> **개발기간 : 2025.02.02 ~ 2025.03.19**

## 배포 주소

> **개발 버전** : [https://doggang.github.io/LoLWAR/](https://doggang.github.io/LoLWAR/) <br>

## 웹개발팀 소개
| 김도현 | 
| --- | 
| <img width="160px" src=".png" />| 
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
| 메인 페이지  |  소개 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src=".png"/> |  <img width="329" src=".png"/>|  
| 강좌 소개 페이지   |  강의 영상 페이지   |  
| <img width="329" src=".png"/>   |  <img width="329" src=".png"/>     |

---
## 주요 기능 🚢

### ⭐️ 밸런싱 기능
- 플레이어 밸런싱시 Select-option을 사용하여 티어 또는 포인트를 기준으로 바꾸면서 진행할 수 있게 함.  
- 음악 ON/OFF 버튼을 이용하여 밸런싱시 더욱 몰입할 수 있게 함.
- 고정멤버들은 고멤 버튼을 이용해서 따로 포인트/티어 설정 없이 추가할 수 있게 함.(고정멤버에 한하여 포인트/티어가 보이지 않게 설정함)
- 신규멤버나 게스트 참여시 소환사 추가 버튼을 이용하여 추가 가능.
- 밸런스 맞추기 버튼 클릭시 각 팀의 포인트 합이 최대한 비슷하게 될 수 있게 함.

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
│   ├── assets
│   │   ├── RIXGOB.TTF
│   │   ├── RIXGOEB.TTF
│   │   ├── RIXGOL.TTF
│   │   ├── RIXGOM.TTF
│   │   ├── bgimg.jpg
│   │   ├── icon.jpg
│   │   ├── lolicon.png
│   │   ├── rix모던고딕b.ttf
│   │   ├── sumIcon.jpg
│   │   ├── title.png
│   │   ├── 만질때 소리.ogg
│   │   ├── 일반겜 픽.ogg
│   │   ├── 픽잡는소리.ogg
│   │   ├── 픽창소리.ogg
│   ├── component
│   │   ├── Community.jsx
│   │   ├── Pick.jsx
│   │   ├── Summoner.jsx
│   ├── style
│   │   ├── Community.css
│   │   ├── Pick.css
│   │   ├── Summoner.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
