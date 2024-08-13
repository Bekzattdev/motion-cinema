// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { useGetMeQuery, usePostRefreshTokenMutation } from "../redux/api/auth";

// interface SessionProviderProps {
//   children: React.ReactNode;
// }

// export const SessionProvider: React.FC<SessionProviderProps> = ({
//   children,
// }) => {
//   const { status } = useGetMeQuery();
//   const pathname = usePathname();
//   const router = useRouter();
//   const [refreshToken] = usePostRefreshTokenMutation();
//   const [refresh, setRefresh] = useState<string | null>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const storedRefresh = localStorage.getItem("refresh");
//       if (storedRefresh) {
//         setRefresh(JSON.parse(storedRefresh));
//       }
//     }
//   }, []);

//   const handleNavigation = async () => {
//     if (status === "rejected" && refresh) {
//       const formData = new FormData();
//       formData.append("refresh", refresh);
//       const { data, error } = await refreshToken(formData);
//       if (error) {
//         localStorage.clear();
//       }
//       if (data) {
//         localStorage.setItem("access", JSON.stringify(data.access));
//       }
//     }

//     switch (pathname) {
//       case "/auth/sign-in":
//       case "/auth/sign-up":
//       case "/auth/reset-password":
//       case "/auth/forgot":
//         if (status === "fulfilled") {
//           router.push("/");
//         }
//         break;
//       case "/":
//       case "/movie":
//       case "/movie/info":
//       case "/notifications":
//       case "/settings":
//       case "/my-profile":
//       case "/my-public":
//         if (status === "rejected") {
//           router.push("/auth/sign-in");
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     handleNavigation();
//   }, [status, pathname, router, refresh]);

//   return <>{children}</>;
// };

"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGetMeQuery, usePostRefreshTokenMutation } from "../redux/api/auth";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  const { status } = useGetMeQuery();
  const pathname = usePathname();
  const router = useRouter();
  const [refreshToken] = usePostRefreshTokenMutation();
  const [refresh, setRefresh] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRefresh = localStorage.getItem("refresh");
      if (storedRefresh) {
        setRefresh(JSON.parse(storedRefresh));
      }
    }
  }, []);

  const handleNavigation = async () => {
    if (status === "rejected" && refresh) {
      const formData = new FormData();
      formData.append("refresh", refresh);
      const { data, error } = await refreshToken(formData);
      if (error) {
        localStorage.clear();
        router.push("/auth/sign-in"); // Перенаправление в случае ошибки
        return;
      }
      if (data) {
        localStorage.setItem("access", JSON.stringify(data.access));
      }
    }

    if (status === "fulfilled" && pathname && pathname.startsWith("/auth")) {
      router.push("/");
    } else if (
      status === "rejected" &&
      pathname &&
      !pathname.startsWith("/auth")
    ) {
      router.push("/auth/sign-in");
    }
  };

  useEffect(() => {
    if (router && pathname) {
      handleNavigation();
    }
  }, [status, pathname, router, refresh]);

  return <>{children}</>;
};
