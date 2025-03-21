import React from "react";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="profile-layout">{children}</div>;
};

export default Layout;
