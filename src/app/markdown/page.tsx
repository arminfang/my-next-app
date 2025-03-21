import React from "react";
import Markdown from "react-markdown";
import fs from "fs";
import path from "path";
import "github-markdown-css/github-markdown.css";
const Prism = require("prismjs");

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
interface Props {}

const MarkDownPage: React.FC<Props> = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `tailwind-css.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  return (
    <article className="markdown-body px-8 py-4">
      <Markdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return (
              <code {...rest} className={className}>
                {Prism.highlight(
                  children,
                  Prism.languages.javascript,
                  "javascript"
                )}
              </code>
            );

            // return match ? (
            //   <SyntaxHighlighter
            //     {...rest}
            //     children={String(children).replace(/\n$/, "")}
            //     language={match[1]}
            //     style={dark}
            //   />
            // ) : (
            //   <code {...rest} className={className}>
            //     {children}
            //   </code>
            // );
          },
        }}
      >
        {fileContents}
      </Markdown>
    </article>
  );
};

export default MarkDownPage;
