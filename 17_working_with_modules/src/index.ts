//in TS functions from utils are visible in index
//in JS you have to import files in correct order using <script> tag
import { add, sample as sampleUtils, PI } from './utils';
import user, { userHelper, sample } from './user';

add(5, 5);
sampleUtils([1, 2, 3, 4, 5, 6]);
