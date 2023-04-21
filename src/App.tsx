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
