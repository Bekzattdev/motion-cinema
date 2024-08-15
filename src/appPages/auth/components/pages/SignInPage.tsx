"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { usePostLoginMutation } from "@/redux/api/auth";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import scss from "./SignInPage.module.scss";

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
    } else {
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
                  <div className={scss.name}>
                    <TextField
                      sx={{ width: "300px" }}
                      label="User name"
                      multiline
                      type="text"
                      variant="standard"
                      {...register("username", { required: true })}
                    />
                  </div>
                </div>
                <div className={scss.loginPassword}>
                  <div className={scss.password}>
                    <TextField
                      sx={{ width: "300px" }}
                      label="Password"
                      multiline
                      variant="standard"
                      type={password ? "password" : "password"}
                      {...register("password", { required: true })}
                    />

                    {/* <h5 className="">
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
                      )} */}
                    {/* </h5> */}
                  </div>
                </div>
                {isSubmitting ? (
                  <button type="button">Submitting</button>
                ) : (
                  <button type="submit">Sing-in</button>
                )}
              </form>
              <div className={scss.using}>
                <h4>Create With Google</h4>
                <a className="">
                  <FcGoogle />
                </a>
              </div>
              <Link href={"/auth/sign-up"}>
                <h3>Sign Up</h3>
              </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
