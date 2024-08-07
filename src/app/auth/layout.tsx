import LayoutAuth from "@/appPages/auth/components/layout/LayoutAuth";
import React, { FC, ReactNode } from "react";
interface LayoutType {
  children: ReactNode;
}
const layout: FC<LayoutType> = ({ children }) => {
  return <LayoutAuth>{children}</LayoutAuth>;
};

export default layout;
