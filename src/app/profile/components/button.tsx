import React from "react";
interface Props {
  name: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ name, children }) => {
  return <h2>{children}</h2>;
};

export default Button;
