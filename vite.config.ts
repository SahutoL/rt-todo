import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  bash: "/rt-todo/",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Todo App",
        short_name: "Todo",
        description: "Todo プログレッシブ・ウェブアプリ",
        start_url: ".",
        id: "rt-todo",
        /**
         * 表示モード:
         * fullscreen: フルスクリーン
         * standalone: 単独のアプリのようになる
         * minimal-ui: 最小限のブラウザ UI は残る
         * browser: 通常のブラウザ
         */
        display: "standalone",
        /**
         * アプリの向き:
         * portrait: 縦向き
         * landscape: 横向き
         * any: 向きを強制しない
         */
        orientation: "portrait",
        theme_color: "#3f51b2",
        background_color: "#efeff4",

        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512x512-mask.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
