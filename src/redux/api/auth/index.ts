import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<Auth.GetMeResponse, Auth.GetMeRequest>({
      query: () => ({
        url: "/userprofile/",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    postLogin: build.mutation<Auth.PostLoginResponse, Auth.PostLoginRequest>({
      query: (data) => ({
        url: "/login/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    postRegistration: build.mutation<
      Auth.PostRegistrationResponse,
      Auth.PostRegistrationRequest
    >({
      query: (data) => ({
        url: "/register/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    postTokenVerify: build.mutation<
      Auth.PostTokenVerifyResponse,
      Auth.PostTokenVerifyRequest
    >({
      query: (data) => ({
        url: "/api/token/verify/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    postRefreshToken: build.mutation<
      Auth.PostRefreshTokenResponse,
      Auth.PostRefreshTokenRequest
    >({
      query: (data) => ({
        url: "/api/token/refresh/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    postForgotPassword: build.mutation<
      Auth.PostForgotPasswordResponse,
      Auth.PostForgotPasswordRequest
    >({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    patchResetPassword: build.mutation<
      Auth.PatchResetPasswordResponse,
      Auth.PatchResetPasswordRequest
    >({
      query: (data) => ({
        url: "",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    getGoogle: build.query<Auth.GetGoogleResponse, Auth.GetGoogleRequest>({
      query: () => ({
        url: "/google/login/",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    getGoogleCallback: build.query({
      query: () => ({
        url: "/google/login/callback/",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});
export const {
  useGetMeQuery,
  usePostLoginMutation,
  usePostRegistrationMutation,
  usePostTokenVerifyMutation,
  usePostRefreshTokenMutation,
  usePostForgotPasswordMutation,
  usePatchResetPasswordMutation,
  useGetGoogleQuery,
  useLazyGetGoogleCallbackQuery,
} = api;
