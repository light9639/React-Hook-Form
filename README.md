# :zap: React-Hook-Form 연습 페이지입니다.
:octocat: https://light9639.github.io/React-Hook-Form/

![127 0 0 1_5173_](https://user-images.githubusercontent.com/95972251/233539308-098afe6b-346f-4d28-8e1b-57eecbc51acf.png)

:sparkles: 🛠️ React-Hook-Form 연습 페이지입니다. :sparkles:
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
## 🛸 react-hook-form, styled-components, yup, @hookform/resolvers 설치
- `react-hook-form`, `styled-components`, `yup`, `@hookform/resolvers`을 다음 명령어로 설치한다.
```bash
npm install react-hook-form styled-components yup @hookform/resolvers
# or
yarn add react-hook-form styled-components yup, @hookform/resolvers
```

## ✒️ App.tsx, Style.ts 수정 및 작성
### :zap: App.tsx
- `react-hook-form`을 `import`하여, `Style.ts`에 작성되어있는 `styled-components` 작성 자료 가져온다.
- `yup` 라이브러리를 이용하여 `schema`를 제작하고 `useForm`에 데이터를 대입한다.
```js
import reactLogo from './assets/react.svg'
import FormImg from './assets/form.svg'
import { useForm } from "react-hook-form";
import './App.css'
import * as S from './Style';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function App(): JSX.Element {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className='ImgBox'>
        <a href="https://react-hook-form.com/" target="_blank">
          <img src={FormImg} className="logo" alt="form logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Hooks Form</h1>
      <div className="card">
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Input type="text" placeholder="Full Name..." {...register("fullName")} />
          <S.Text>{errors.fullName?.message}</S.Text>
          <S.Input type="text" placeholder="Email..." {...register("email")} />
          <S.Text>{errors.email?.message}</S.Text>
          <S.Input type="number" placeholder="Age..." {...register("age")} />
          <S.Text>{errors.age?.message}</S.Text>
          <S.Input
            type="password"
            placeholder="Password..."
            {...register("password")}
          />
          <S.Text>{errors.password?.message}</S.Text>
          <S.Input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
          <S.Text>{errors.confirmPassword?.message}</S.Text>
          <S.Submit type="submit" />
        </S.Form>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Form and React logos to learn more
      </p>
    </div>
  )
}
```
### :zap: Style.ts
- `styled-components`를 `import`한 뒤 각각의 스타일을 `export` 한 다음 `App.tsx`에서 사용하여 스타일링한다.
```js
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    vertical-align: center;
    margin-bottom: 30px;
`

export const Input = styled.input`
    padding: 10px 5px;
    border-radius: 5px;
    font-size: 14px;
    width: 300px;
    border: 1px solid gray;
    margin: 0 auto;
`

export const Text = styled.p`
    font-size: 0.875rem;
    color: #ff0000;
    text-align: center;
`

export const Submit = styled.input`
    padding: 10px 5px;
    border-radius: 5px;
    font-size: 14px;
    width: 310px;
    border: none;
    background-color: #EC5990;
    color: white;
    margin: 0 auto;
`
```

## :test_tube: input 버튼 클릭 후 콘솔 확인
- input에 값을 입력하면 콘솔을 통해 값을 확인할 수 있다.
<img src="https://user-images.githubusercontent.com/95972251/212851053-57e3fd19-af0b-4191-a336-c1c014c83017.gif" alt="Img" width="450px" />

