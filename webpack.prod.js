import path from "node:path";
import htmlWebpackPlugin from "html-webpack-plugin"
import test from "node:test";
import { watchFile } from "node:fs";
import common from "./webpack.common.js"
import {merge} from "webpack-merge"

export default merge(common,{
  mode: "production",
});