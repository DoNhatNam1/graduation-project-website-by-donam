"use client"

import ValidateLoginForm from '@/src/Actions/POST/ValidateLoginForm';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const { asPath } = useRouter();



  const onSubmit = async (data: LoginFormInputs) => {
    const validate = await ValidateLoginForm(data)
      const origin =
      typeof window !== 'undefined' && window.location.origin
          ? window.location.origin
          : '';
    
    const URL = `${origin}${asPath}`;
    console.log(URL);
    if(!validate) {
        toast.error("Sai tài khoản hoặc mật khẩu, vui lòng thử lại")
    } else {
        toast.success(`Đăng nhập thành công với quán ${URL}}`)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input {...register('username', { required: true })} />
        {errors.username && <span>Username is required</span>}
      </div>
      <div>
        <label>Password:</label>
        <input {...register('password', { required: true })} type="password" />
        {errors.password && <span>Password is required</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
