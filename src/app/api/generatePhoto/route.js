import { createCanvas } from "canvas";

export async function GET(request) {
  try {
    // 创建一个 canvas 实例
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext("2d");

    // 在 canvas 上绘制图形，这里简单绘制一个红色矩形
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 将 canvas 内容转换为 PNG 格式的二进制数据
    const buffer = canvas.toBuffer("image/png");

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "生成图片时出错" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
