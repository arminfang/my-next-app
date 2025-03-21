import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import "github-markdown-css/github-markdown.css";
// import "prismjs/components/prism-javascript";

const MarkDownPage: React.FC = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDirectory);
  const markdownFiles = files
    .filter((file) => path.extname(file).toLowerCase() === ".md")
    .map((file) => file.split(".").slice(0, -1).join(".").toLowerCase());

  return (
    <main className="p-4 flex flex-col markdown-body">
      {markdownFiles.map((file) => {
        return <Link href={`/blogs/${file}`}>{file}</Link>;
      })}
    </main>
  );
};

export default MarkDownPage;
