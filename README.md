# Aiffel Front Test

## 구현한 기능

- 헤더
- 로그인
- 포럼 목록
- 포럼 상세 화면

## 실행 방법

1. 레포지토리를 클론하여 해당 디렉토리로 이동합니다.
    ```shell
    git clone https://github.com/sounmind/aiffel-front-test
    cd aiffel-front-test
    ```
 - 서버를 위한 디렉토리도 있습니다.
    ```shell
    cd json-server-test
    ```

2. 각 디렉토리(서버, 클라이언트)의 dependencies 를 다운로드 받습니다.
    ```shell
    npm install
    ```

3. 두 프로젝트(서버, 클라이언트)아래 명령어를 입력해 프로젝트를 시작합니다.
    ```shell
    npm start
    ```


## 과제를 하면서

- react-router-dom 버전 6의 새로운 문법을 익히느라 시간이 좀 걸렸습니다. 로그인하지 않은 사용자에 대한 접근을 동적 라우팅으로 막기 위한 설계를 했는데, 저의 코드가 합리적인 개발 방식이었는지 모르겠습니다.
- 재사용 가능한 컴포넌트를 만들기 위한 초석으로 파일 구조를 잘 짜보려고 시도했는데, 컴포넌트를 어느 단위, 또는 어느 시점에서 분리해야 하는지 계속 고민했습니다.
- 예시 이미지와 구현 요구사항의 차이를 구분하는 것에 꽤 시간이 소모됐습니다. 기간이 더 주어진다면 나머지도 꼭 구현해보고 싶습니다.
- 중간에 다른 일정이 많아 제한 시간 안에 주어진 기능을 모두 구현하지 못해 아쉽습니다. 상세하고 친절한 과제 요구사항으로 개발하는데 무척 도움을 많이 받았습니다! 좋은 기회 주셔서 감사합니다.
