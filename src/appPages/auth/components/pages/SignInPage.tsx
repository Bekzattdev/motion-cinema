"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { usePostLoginMutation } from "@/redux/api/auth";
import scss from "./SignInPage.module.scss";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Auth.Login>();
  const router = useRouter();
  const [login] = usePostLoginMutation();
  const [password, setPassword] = useState(false);

  const onSubmit: SubmitHandler<Auth.PostLoginRequest> = async (data) => {
    const formData = new FormData();

    for (let i in data) {
      formData.append(i, data[i]);
    }

    const { data: response, error } = await login(formData);

    if (response) {
      const { access, refresh, id } = response;
      localStorage.setItem("access", JSON.stringify(access));
      localStorage.setItem("refresh", JSON.stringify(refresh));
      localStorage.setItem("id", JSON.stringify(id));
      router.push("/");
    }
    if (error) {
      alert("Не найдено активной учетной  записи с указанными данными");
    }
    reset();
  };

  return (
    <div className={scss.authLogIn}>
      <div className={scss.filter}>
      <div className="container">
        <center>
          <div className={scss.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={scss.inputs}>
              <div className={scss.loginName}>
                <h2>Username</h2>
                <div className={scss.name}>
                  <a className="">
                    <FaRegUser />
                  </a>
                  <input
                    placeholder="Username"
                    type="text"
                    {...register("username", { required: true })}
                  />
                </div>
              </div>
              <div className={scss.loginPassword}>
                <h2>UserPassword</h2>
                <div className={scss.password}>
                  <a className="">
                    <MdOutlineLock />
                  </a>
                  <input
                    placeholder="Password"
                    type={password ? "text" : "password"}
                    {...register("password", { required: true })}
                  />
                  <h5 className="">
                    {password ? (
                      <IoEyeSharp
                        onClick={() => {
                          setPassword(false);
                        }}
                      />
                    ) : (
                      <BsFillEyeSlashFill
                        onClick={() => {
                          setPassword(true);
                        }}
                      />
                    )}
                  </h5>
                </div>
              </div>
              {isSubmitting ? (
                <button type="button">Submitting</button>
              ) : (
                <button type="submit">Sing-in</button>
              )}
            </form>
            <div className={scss.using}>
              <h4>
                Create With Google
              </h4>
                <a className=''>
                  <FcGoogle />
                </a>
            </div>
            <Link href={'/auth/sign-up'}>
              <h3>
                Sign Up 
              </h3>
            </Link>
          </div>
        </center>
      </div>
      </div>
    </div>
  );
};

export default SignInPage;
