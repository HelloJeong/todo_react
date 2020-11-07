# 리액트를 다루는 기술

## 이번 챕터의 최종목표

- 일정 관리 웹 애플리케이션 만들기

  - 책의 코드대로 만들지 않고 나만의 방식으로 똑같이 구현

- md 파일 작성법도 함께 터득하기

## Part.1

- `react-icons`

  - 다양한 아이콘을 사용할 수 있는 라이브러리
  - https://react-icons.netlify.com/

- UI 구성

  - 아마 기능 구현을 하면서 구조가 바뀔수도 있을 것 같다.

## Part.2

- todo state에 저장되는 내용은 `[{ id: number, checked:t/f, text:string }, ...]`이다.

  - id를 저장할 목적으로 useRef()를 사용.
    - `로컬 변수` : 렌더링과 상관없이 바뀔 수 있는 값을 의미
    - 주의점 : ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다

- 리렌더링이 필요하지 않는 함수들은 useCallback()을 사용

- 생각보다 쉽지는 않았다. 책을 많이 참조했다.

## Part.3

- 컴포넌트의 성능 최적화 단계(2~3초 -> 0.1초 이내)

- useState 기본값에 함수를 넣어주면 함수의 리턴값이 기본값이 된다.

  - `useState(createTodo)` => 컴포넌트가 처음 렌더링될 때만 함수 호출
  - `useState(createTodo())` => 컴포넌트가 리렌더링될 때마다 함수 호출

- 컴포넌트 리렌더링을 방지할 때는 shouldComponentUpdate 라이프사이클 사용

  - 함수형 컴포넌트에서는 React.memo 사용

- useState의 함수형 업데이트

  - setState의 파라미터로 함수를 넣는 방식

- `react-virtualized`
  - 눈에 안 보이는 약 2490개 정도의 데이터(todos)를 매번 렌더링하기 때문에 비효율적이다.
  - `react-virtualized`는 눈에 보이는 부분만 렌더링 시켜주는 작업을 한다.
