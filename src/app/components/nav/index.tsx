import React from "react";
import Link from "next/link";
import { ROUTERS } from "@/lib/consts";

interface Props {}

const TopNav: React.FC<Props> = () => {
  console.log("TopNav rendered");

  return (
    <nav
      key="xx"
      className="items-center flex gap-4 h-14 px-6  justify-start text-yellow-500 text-lg py-0"
    >
      {ROUTERS.map((item) => {
        return (
          <Link key={item.name} href={item.path}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default TopNav;
