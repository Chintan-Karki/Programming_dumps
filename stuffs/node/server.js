const os = require("os");
const math = require("./math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log(math.func("add", 2, 8));
console.log(math.func("subtract", 2, 8));
console.log(math.func("divide", 2, 8));
console.log(math.add(1, 2));
