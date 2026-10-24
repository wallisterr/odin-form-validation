import path from "node:path";
import htmlWebpackPlugin from "html-webpack-plugin"
import test from "node:test";
import { watchFile } from "node:fs";
import { fileURLToPath } from 'node:url';
export default {
  entry: "./src/scripts.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins:[
    new htmlWebpackPlugin({
        template: "./src/index.html"
    }),
  ],
  module: {
    rules:[
        {
            test: /\.css$/i,
            use :["style-loader","css-loader"]
        },
        {
            test:/\.html$/i,
            use: ["html-loader"]
        },
        {
            test: /\.(png|svg|jpg\jpeg|gif)$/i,
            type: "asset/resource",
        }
    ],
  },
};