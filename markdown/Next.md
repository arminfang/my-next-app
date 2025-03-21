### 函数（Functions）

#### 1. `theme()`

- **作用**：允许在 CSS 中访问 Tailwind 配置文件里的主题值，使自定义 CSS 能使用与 Tailwind 内置实用类相同的主题变量。
- **示例**：

```css
.custom-text {
  color: theme("colors.red.500");
}
```
