/* uses single synchronous filesystem op to read file and print number of
 newlines it contains */

var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var result = str.split('\n').length - 1; //splits string into substrings with '\n' as delimiter
console.log(result);
