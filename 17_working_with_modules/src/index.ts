//in TS functions from utils are visible in index
//in JS you have to import files in correct order using <script> tag
import { add, sample } from './utils';
add(5, 5);
sample([1, 2, 3, 4, 5, 6]);
