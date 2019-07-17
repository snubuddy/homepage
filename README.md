# Overview
SNUBuddy 동아리의 회원 관리 및 활동 사항 기록을 위한 홈페이지 프론트엔드입니다.
react를 기반으로 redux, redux-saga로 구현되었습니다.

# Dependencies
프론트엔드는 아래 npm package 상에서 구현되었습니다.

|Requirements|Version|
|------------|-------|
|react|16.8.6|
|react-dom|16.8.6|
|redux|4.0.4|
|react-redux|7.1.0|
|redux-saga|1.0.5|
|react-datepicker|2.8.0|

# Directory
src 디렉토리 내부의 구조는 아래와 같습니다.

|Directory|Description|
|---------|-----------|
|components/molecules|Components used in different views|
|components/views|Layouts for each pages|
|components/MainContainer.js|Router for each views|
|store/actions|Defined actions for redux|
|store/reducers|Defined reducers for redux|
|store/sagas|Defined reducers for redux-saga|
|style|Contains css style files|

