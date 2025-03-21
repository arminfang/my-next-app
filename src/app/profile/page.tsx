"use client";
import React, { useState, useEffect } from "react";
import Button from "./components/button";
import Link from "next/link";
import Footer from "../components/footer";
interface Props {}

const Profile: React.FC<Props> = () => {
  console.log("profile page rendered");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("profile page ready");
  }, []);
  return (
    <div className="profile-page">
      hello this is Profile page
      <h2>
        <Link href={"/news"}>go to news page</Link>
      </h2>
      <div>current count is: {count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        click me
      </button>
      <Button name="Tea">
        <Footer />
      </Button>
    </div>
  );
};

export default Profile;
