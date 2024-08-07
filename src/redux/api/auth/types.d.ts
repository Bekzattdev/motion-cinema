namespace Auth {
  interface User {
    id?: string;
    username: string;
    email?: string;
    password: string;
    first_name: string;
    last_name: string;
    image?: string;
  }

  interface Detail {
    detail: string;
  }

  interface IError {
    data: Detail;
    status: number;
  }

  type GetMeRequest = void;
  type GetMeResponse = void;

  type Login = {
    username: string;
    password: string;
  };

  type PostLoginRequest = FormData<Login>;
  type PostLoginResponse = {
    id: number;
    access: string;
    refresh: string;
    username: string;
    error: IError;
  };

  type PostRegistrationRequest = FormData<User>;
  type PostRegistrationResponse = {
    access: string;
    refresh: string;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
  };

  type PostTokenVerifyRequest = FormData<{
    token: string;
  }>;
  type PostTokenVerifyResponse = {
    detail: string;
    code: string;
  };

  type PostRefreshTokenRequest = FormData<{
    refresh: string;
  }>;
  type PostRefreshTokenResponse = {
    refresh: string;
    access: string;
  };

  type PostForgotPasswordRequest = void;
  type PostForgotPasswordResponse = void;

  type PatchResetPasswordResponse = void;
  type PatchResetPasswordRequest = void;

  type GetGoogleRequest = void;
  type GetGoogleResponse = {};
}
