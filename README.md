# :zap: react-hook-form 연습 페이지입니다.
:octocat: https://light9639.github.io/react-hook-form/

![light9639 github io_react-hook-form_](https://user-images.githubusercontent.com/95972251/212851297-f49a2bf5-da43-46cc-a787-1a89e6063588.png)

:sparkles: react-hook-form 연습 페이지입니다. :sparkles:
## :tada: React 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt 선택하면 생성 완료.
## 🛸 react-hook-form, styled-components 설치
- react-hook-form 설치 명령어
```bash
npm install react-hook-form, styled-components
# or
yarn add react-hook-form, styled-components
```

## ✒️ App.tsx, Style.ts 수정 및 작성
### :zap: App.tsx
- react-hook-form을 import하고, Style.ts에서 styled-components 작성 자료 가져오기
```js
import reactLogo from './assets/react.svg'
import { useForm } from "react-hook-form";
import './App.css'
import * as S from './Style';

function App() {
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
          <S.Input
            type="text"
            placeholder="username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 5,
                message: "Username must be longer than 5 characters"
              }
            })}
          />
          <S.Submit type="submit" />
        </S.Form>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
```
### :zap: Style.ts
- styled-components import한 뒤 export 하여 App.tsx에서 사용
```js
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    vertical-align: center;
    margin-bottom: 30px;
`

export const Input = styled.input`
    padding: 10px 5px;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    width: 250px;
    border: 1px solid gray;
    border-right: none;
`

export const Submit = styled.input`
    padding: 7.5px 5px;
    border-radius: 0 5px 5px 0;
    font-size: 14px;
    width: 50px;
    border: none;
    background-color: skyblue;
    color: white;
`
```

## :test_tube: input 버튼 클릭 후 콘솔 확인
- input에 값을 입력하면 콘솔을 통해 값을 확인할 수 있다.
<img src="https://user-images.githubusercontent.com/95972251/212851053-57e3fd19-af0b-4191-a336-c1c014c83017.gif" alt="Img" width="450px" />

