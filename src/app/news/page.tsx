"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Props {}

const News: React.FC<Props> = () => {
  console.log("news page rendered");
  return (
    <div>
      <h1>this is News page</h1>
      <h2
        onClick={() => {
          if (window.parent !== window) {
            window.parent.location.href = "/";
          }
        }}
      >
        redirect top page
      </h2>
      {/* <Link href={"/profile"}>go to profile page</Link> */}
      <br />
      {/* <button
        type="button"
        onClick={() => {
          router.push("/profile");
        }}
      >
        Profile
      </button> */}
    </div>
  );
};

export default News;
