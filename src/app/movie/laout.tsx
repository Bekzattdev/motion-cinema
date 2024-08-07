import React, { FC, ReactNode } from "react";

interface LayoutType {
  children: ReactNode;
}
const layout: FC<LayoutType> = ({ children }) => {
  return <div></div>;
};

export default layout;
