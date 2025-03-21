const fs = require("fs");
const path = require("path");

// 获取当前脚本所在目录
const currentDirectory = __dirname;

// 读取当前目录下的所有 Markdown 文件
fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error("读取目录时出错:", err);
    return;
  }

  // 过滤出 Markdown 文件
  const markdownFiles = files.filter((file) => path.extname(file) === ".md");

  // 遍历每个 Markdown 文件
  markdownFiles.forEach((file, index) => {
    let combinedContent = "";
    const filePath = path.join(currentDirectory, file);

    // 读取 Markdown 文件内容
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`读取文件 ${file} 时出错:`, err);
        return;
      }

      // 处理 Markdown 内容，将反引号转义
      const formattedContent = data.replace(/`/g, "\\`");

      combinedContent += `export const ${
        path.parse(file).name
      }Markdown = \`${formattedContent}\`;\n\n`;

      const outputFilePath = path.join(
        currentDirectory,
        `${path.parse(file).name}-output.js`
      );
      fs.writeFile(outputFilePath, combinedContent, "utf8", (err) => {
        if (err) {
          console.error("写入文件时出错:", err);
        } else {
          console.log(
            `Markdown 内容已成功转换并写入 ${path.parse(file).name}-output.js`
          );
        }
      });
    });
  });
});
