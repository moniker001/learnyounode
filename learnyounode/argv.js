//finds sum of command line arguments

var sum = 0;
for (i=2; i<process.argv.length; i++) { //first two args are file name and pathway
  sum += Number(process.argv[i]); //must convert cmdline args from string to int
}
console.log(sum);
