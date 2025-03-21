import React, { useEffect } from "react";

interface Props {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  size?: number | string;
  mask?: boolean;
  showClose?: boolean;
}

const Drawer: React.FC<Props> = ({
  visible = false,
  onClose,
  children,
  placement = "right",
  size = 256,
  mask = true,
  showClose = false,
}) => {
  // 处理 ESC 键关闭
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && visible) {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [visible, onClose]);

  // 计算抽屉样式
  const getDrawerStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {};

    switch (placement) {
      case "top":
        style.height = typeof size === "number" ? `${size}px` : size;
        style.width = "100%";
        style.top = visible ? 0 : `-${style.height}`;
        break;
      case "right":
        style.width = typeof size === "number" ? `${size}px` : size;
        style.height = "100%";
        style.right = visible ? 0 : `-${style.width}`;
        break;
      case "bottom":
        style.height = typeof size === "number" ? `${size}px` : size;
        style.width = "100%";
        style.bottom = visible ? 0 : `-${style.height}`;
        break;
      case "left":
        style.width = typeof size === "number" ? `${size}px` : size;
        style.height = "100%";
        style.left = visible ? 0 : `-${style.width}`;
        style.top = 0;
        break;
    }

    return style;
  };

  return (
    <>
      {mask && (
        <div
          className={`absolute inset-0 w-100 h-100 bg-[rgba(0, 0, 0, 0.45)] transition-all ${
            visible ? "z-1000" : "-z-1000"
          }`}
          onClick={onClose}
        />
      )}
      <div
        className="fixed bg-neutral-700 z-[1001] shadow-[0 0 10px rgba(0, 0, 0, 0.2)] transition-all p-2"
        style={getDrawerStyle()}
      >
        {showClose && <button onClick={onClose}>close</button>}
        {children}
      </div>
    </>
  );
};

export default Drawer;
