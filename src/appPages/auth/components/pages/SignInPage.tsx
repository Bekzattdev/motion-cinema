"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { usePostLoginMutation } from "@/redux/api/auth";
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
    <div className="auth">
      <div className="container">
        <div className="auth">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <input
              placeholder="Username"
              type="text"
              {...register("username", { required: true })}
            />
            <input
              placeholder="Password"
              type="text"
              {...register("password", { required: true })}
            />
            {isSubmitting ? (
              <button type="button">Submitting</button>
            ) : (
              <button type="submit">Sing-in</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
