在 Node.js 中，`path` 模块提供了一些实用工具，用于处理和转换文件路径。`path` 模块根据不同的操作系统有不同的实现（Windows 和 POSIX），但使用时可以通过 `path.posix` 和 `path.win32` 来明确指定使用 POSIX 或 Windows 的路径处理方式。下面详细介绍 `path` 对象的常用属性和方法及其作用。

### 属性

#### 1. `path.sep`

- **作用**：提供平台特定的路径分隔符。在 Windows 上是反斜杠 `\`，在 POSIX 系统上是正斜杠 `/`。
- **示例代码**：

```javascript
const path = require("path");
console.log(path.sep);
```

#### 2. `path.delimiter`

- **作用**：提供平台特定的路径定界符。在 Windows 上是分号 `;`，在 POSIX 系统上是冒号 `:`，常用于环境变量（如 `PATH`）中分隔不同的路径。
- **示例代码**：

```javascript
const path = require("path");
console.log(path.delimiter);
```

### 方法

#### 1. `path.join([...paths])`

- **作用**：将多个路径片段连接在一起，处理路径中的多余斜杠、点和双点，返回一个规范化的路径。
- **示例代码**：

```javascript
const path = require("path");
const joinedPath = path.join("/foo", "bar", "baz/asdf", "quux", "..");
console.log(joinedPath);
```

#### 2. `path.resolve([...paths])`

- **作用**：将路径或路径片段的序列解析为绝对路径。从右到左处理路径，直到构造出一个绝对路径。如果没有传入路径，则返回当前工作目录的绝对路径。
- **示例代码**：

```javascript
const path = require("path");
const resolvedPath = path.resolve("foo", "bar");
console.log(resolvedPath);
```

#### 3. `path.normalize(path)`

- **作用**：规范化给定的路径，解析 `.` 和 `..` 片段，去除多余的斜杠。
- **示例代码**：

```javascript
const path = require("path");
const normalizedPath = path.normalize("/foo/bar//baz/asdf/quux/..");
console.log(normalizedPath);
```

#### 4. `path.dirname(path)`

- **作用**：返回路径的目录名。
- **示例代码**：

```javascript
const path = require("path");
const dirName = path.dirname("/foo/bar/baz/asdf/quux.txt");
console.log(dirName);
```

#### 5. `path.basename(path[, ext])`

- **作用**：返回路径的最后一部分，即文件名。如果提供了可选的 `ext` 参数，则会去除该扩展名。
- **示例代码**：

```javascript
const path = require("path");
const baseName1 = path.basename("/foo/bar/baz/asdf/quux.txt");
const baseName2 = path.basename("/foo/bar/baz/asdf/quux.txt", ".txt");
console.log(baseName1);
console.log(baseName2);
```

#### 6. `path.extname(path)`

- **作用**：返回路径的扩展名，即从最后一个 `.` 到字符串结束的部分。如果路径中没有 `.` 或者是第一个字符，则返回空字符串。
- **示例代码**：

```javascript
const path = require("path");
const extName = path.extname("index.html");
console.log(extName);
```

#### 7. `path.parse(path)`

- **作用**：将路径解析为一个对象，包含 `root`、`dir`、`base`、`name` 和 `ext` 属性。
- **示例代码**：

```javascript
const path = require("path");
const parsedPath = path.parse("/home/user/dir/file.txt");
console.log(parsedPath);
```

#### 8. `path.format(pathObject)`

- **作用**：从一个路径对象创建路径字符串，是 `path.parse` 的反向操作。
- **示例代码**：

```javascript
const path = require("path");
const pathObject = {
  root: "/",
  dir: "/home/user/dir",
  base: "file.txt",
  ext: ".txt",
  name: "file",
};
const formattedPath = path.format(pathObject);
console.log(formattedPath);
```

#### 9. `path.isAbsolute(path)`

- **作用**：判断给定的路径是否为绝对路径。
- **示例代码**：

```javascript
const path = require("path");
const isAbsolute1 = path.isAbsolute("/foo/bar");
const isAbsolute2 = path.isAbsolute("foo/bar");
console.log(isAbsolute1);
console.log(isAbsolute2);
```
