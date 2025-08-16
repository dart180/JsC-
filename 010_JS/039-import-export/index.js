// index.js
import { PI, add, Rectangle } from "./my-math.js";
import subtract from './def-subtract.js';
import * as util from './util.js';
import { miltiply as mul } from "./util.js";

console.log(add(2, 3));
console.log(subtract(5, 3));
console.log(PI);
console.log(new Rectangle(5, 8).width);
console.log(util.miltiply(2, 3));
console.log(mul(3, 4));
