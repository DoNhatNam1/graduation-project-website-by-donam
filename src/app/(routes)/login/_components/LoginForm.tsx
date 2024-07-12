"use client";

import { login } from "@/src/Actions/POST/HomePage/Authentication";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { formSchemaLogin } from "@/src/libs/zod/formSchemaLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox, Link } from "@nextui-org/react";
import { AccountType } from "@/src/types/login";
import { ManagerIcon } from "@/src/components/Ui/Icons/ManagerIcon";
import { SaleBagIcon } from "@/src/components/Ui/Icons/SaleBagIcon";

type LoginSchema = z.infer<typeof formSchemaLogin>;

const LoginForm = () => {
  const [rememberPassword, setRememberPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<AccountType | 'default'>('default');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchemaLogin),
  });

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role as AccountType | 'default');
  };

  const onSubmit = async (data: LoginSchema) => {
    if (!rememberPassword) {
      toast.error("Vui lòng xác nhận lại thông tin!");
      return;
    }
  
    try {
      const splitHostName = window.location.hostname.split(".")[0];
      const role = splitHostName === "admin" ? "Admin" : selectedRole as AccountType['role'];
  
      const userData = {
        phone_number: data.phone_number,
        password: data.password,
        role: role,
      };
  
      await login(userData, splitHostName);
      toast.success(`Đăng nhập thành công!`);
      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-5 text-base">
        <div className="flex flex-col px-5">
          <label htmlFor="phone_number" className="sr-only">
            Tài khoản
          </label>
          <input
            {...register("phone_number", { valueAsNumber: true })}
            type="tel"
            className="justify-center items-start p-2.5 border-b border-solid border-slate-50 text-slate-50 max-md:pr-5 bg-transparent"
            placeholder="Nhập tài khoản"
          />
          {errors.phone_number && (
            <span className="text-red-500 block mt-1">
              {`${errors.phone_number.message}`}
            </span>
          )}
          <label htmlFor="password" className="sr-only">
            Mật khẩu
          </label>
          <input
            {...register("password")}
            type="password"
            className="justify-center items-start p-2.5 mt-7 border-b border-solid border-slate-50 text-slate-50 max-md:pr-5 bg-transparent"
            placeholder="Nhập mật khẩu"
            name="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <span className="text-red-500">{`${errors.password.message}`}</span>
          )}
          <div className="flex gap-0 mt-7 text-xs font-bold">
            <div className="flex flex-1 gap-0 border-r border-solid border-neutral-400 text-slate-50">
              <Checkbox
                
                isSelected={rememberPassword}
                onValueChange={setRememberPassword}>
                <span className="text-white font-semibold text-sm">Duy trì mật khẩu</span>
              </Checkbox>

            </div>
            <div
              className="flex-1 justify-center items-start p-2.5 text-blue-600 max-md:pr-5"
              >
              <Link
              className="ml-5 text-sm"
               href="/forgot-password">Quên mật khẩu</Link>
            </div>
          </div>
        </div>
        <div className="flex gap-0 mt-7 font-bold rounded-none text-slate-50">
          <button 
          type="submit"
          onClick={() => handleRoleSelection('Agency')}
          disabled={isSubmitting}
          className="flex flex-1 gap-2.5 justify-center p-2.5 bg-blue-600 rounded-none max-md:px-5"
          >
            <ManagerIcon className="shrink-0 aspect-square w-[30px]" />
            <span className="my-auto">Quản lý</span>
          </button>
          <button 
          type="submit"
          onClick={() => handleRoleSelection('SubAccount')}
          disabled={isSubmitting}
          className="flex flex-1 gap-2.5 justify-center p-2.5 bg-fuchsia-800 rounded-none max-md:px-5"
          >
            <SaleBagIcon className="shrink-0 aspect-square w-[30px]" />
            <span className="my-auto">Bán hàng</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
