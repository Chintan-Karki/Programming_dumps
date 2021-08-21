const os = require("os");
// const math = require("./math");

console.log(os.type()); //      Darwin
console.log(os.version()); //   Darwin Kernel Version 21.0.0: Mon Aug  2 00:18:13 PDT 2021; root:xnu-8019.30.9~9/RELEASE_ARM64_T8101
console.log(os.homedir()); //    /Users/chintan

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
/* 
Expected output:
{ root: '/',
  dir: '/Users/chintan/Desktop/Random DUmps/Programming_dumps/stuffs/node',
  base: 'server.js',
  ext: '.js',
  name: 'server' }
  */
