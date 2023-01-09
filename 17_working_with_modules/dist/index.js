"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//in TS functions from utils are visible in index
//in JS you have to import files in correct order using <script> tag
const utils_1 = require("./utils");
(0, utils_1.add)(5, 5);
(0, utils_1.sample)([1, 2, 3, 4, 5, 6]);
