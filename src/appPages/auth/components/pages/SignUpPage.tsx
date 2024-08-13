"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { usePostRegistrationMutation } from "@/redux/api/auth";
import scss from "./SignUpPage.module.scss";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Auth.PostRegistrationRequest>();
  const router = useRouter();
  const [registration] = usePostRegistrationMutation();

  const onSubmit: SubmitHandler<Auth.PostRegistrationRequest> = async (
    data
  ) => {
    const formData = new FormData();
    for (let i in data) {
      formData.append(i, data[i]);
    }
    const { data: response } = await registration(formData);
    if (response) {
      router.push("/auth/sign-in");
    } else {
      alert("Не удалось зарегистрироваться, попробуйте снова!");
    }
    reset();
  };
  return (
    <div className={scss.authSignIn}>
      <div className={scss.filter}>
        <div className="container">
          <center>
            <div className={scss.login}>
              <h2>Create Your Account</h2>
              <form onSubmit={handleSubmit(onSubmit)} className={scss.inputs}>
                <div className={scss.dataSignUp}>
                  <TextField
                    sx={{ width: "300px" }}
                    label="First Name"
                    multiline
                    variant="standard"
                    {...register("first_name", { required: true })}
                  />
                  <TextField
                    sx={{ width: "300px" }}
                    label="Last Name"
                    multiline
                    variant="standard"
                    {...register("last_name", { required: true })}
                  />
                  <TextField
                    sx={{ width: "300px" }}
                    label="User Name"
                    multiline
                    variant="standard"
                    {...register("username", { required: true })}
                  />
                  <TextField
                    sx={{ width: "300px" }}
                    label="Email"
                    multiline
                    variant="standard"
                    {...register("email", { required: true })}
                  />
                  <TextField
                    sx={{ width: "300px" }}
                    label="Password"
                    multiline
                    variant="standard"
                    {...register("password", { required: true })}
                  />
                </div>
                {isSubmitting ? (
                  <button type="button">Submitting</button>
                ) : (
                  <button type="submit">Sign-up</button>
                )}
              </form>
              <div className={scss.createGoogle}>
                <h1>Create With Google</h1>
                <a className="">
                  <FcGoogle />
                </a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
