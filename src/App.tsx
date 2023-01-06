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
