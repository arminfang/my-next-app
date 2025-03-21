### 函数（Functions）

#### 1. `theme()`

- **作用**：允许在 CSS 中访问 Tailwind 配置文件里的主题值，使自定义 CSS 能使用与 Tailwind 内置实用类相同的主题变量。
- **示例**：

```css
.custom-text {
  color: theme("colors.red.500");
}
```

#### 2. `screen()`

- **作用**：在 CSS 里引用 Tailwind 的响应式断点，方便在自定义媒体查询中使用和 Tailwind 一致的断点设置。
- **示例**：

```css
@media (min-width: screen("lg")) {
  .custom-container {
    width: 80%;
  }
}
```

#### 3. `config()`

- **作用**：可以访问整个 Tailwind 配置对象，不仅仅局限于主题部分，可获取配置中的任何设置。
- **示例**：

```css
.custom-setting {
  value: config("customSection.someOption");
}
```

#### 4. `variants()`

- **作用**：主要用于编写 Tailwind 插件时，获取特定实用类的变体列表。
- **示例（插件开发）**：

```javascript
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, variants }) {
  const myUtilities = {
    ".new-utility": {
      /* 样式 */
    },
  };
  const utilityVariants = variants("new-utility", []);
  addUtilities(myUtilities, { variants: utilityVariants });
});
```

### 指令（Directives）

#### 1. `@tailwind`

- **作用**：将 Tailwind 的不同层（基础样式、组件样式、实用类）引入到 CSS 文件中。
- **示例**：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 2. `@layer`

- **作用**：把自定义的 CSS 样式归类到 Tailwind 的不同层（`base`、`components`、`utilities`）中，便于管理和控制样式优先级。
- **示例**：

```css
@layer base {
  body {
    font-family: "Open Sans", sans-serif;
  }
}
```

#### 3. `@apply`

- **作用**：在自定义 CSS 中应用 Tailwind 的实用类，可将多个实用类组合成一个新类，提高代码复用性。
- **示例**：

```css
.custom-button {
  @apply bg-blue-500 text-white py-2 px-4 rounded;
}
```

#### 4. `@responsive`

- **作用**：快速创建响应式的自定义 CSS 类，会依据 Tailwind 配置中的响应式断点自动生成不同屏幕尺寸下的类。
- **示例**：

```css
@responsive {
  .custom-margin {
    margin: 1rem;
  }
}
```

#### 5. `@variants`

- **作用**：为自定义的 CSS 类添加特定的变体，如 `hover`、`focus`、`active` 等，可一次添加多个变体。
- **示例**：

```css
@variants hover, focus {
  .custom-scale {
    transform: scale(1.1);
  }
}
```

#### 6. `@import`（与 Tailwind 集成使用）

- **作用**：在 CSS 中导入其他 CSS 文件，结合 Tailwind 使用时可引入外部样式。
- **示例**：

```css
@import "another-stylesheet.css";
@tailwind base;
```

#### 7. 特殊实用类变体（可看作特殊指令场景）

- **`group-hover` 和 `group-focus`**：当父元素具有 `group` 类时，子元素使用 `group-hover:` 或 `group-focus:` 来响应父元素的悬停或聚焦状态。
- **示例**：

```html
<div class="group">
  <p class="text-gray-500 group-hover:text-gray-900">
    文字颜色随父元素悬停改变
  </p>
</div>
```

虽然以上涵盖了 Tailwind CSS 核心的函数和指令，但 Tailwind 不断发展，新功能可能会添加，建议参考 [Tailwind CSS 官方文档](https://tailwindcss.com/docs) 获取最准确和最新的信息。
