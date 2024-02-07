import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 引入path模块以处理目录路径
import * as path from "path";

// 配置路径别名
const alias = {
  "@": path.resolve(__dirname, "src"), // 将@指向src目录
  "@components": path.resolve(__dirname, "src/components"), // 可以定义更多别名
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  resolve: {
    alias,
  },
});
