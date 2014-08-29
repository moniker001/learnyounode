/* Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
Same result as filesync.js
The full path to the file to read will be provided as the first command-line argument.
*/

var fs = require('fs');
//utf8 makes buf a string instead of Object
fs.readFile(process.argv[2], 'utf8', function callback (err, buf) { 
  if (err) throw err;
	var result = buf.split('\n').length - 1; //splits string into substrings with '\n' as delimiter
	console.log(result);
});

