const func = (type, a, b) => {
	switch (type) {
		case "add":
			return a + b;
		case "subtract":
			return a - b;
		case "multiply":
			return a * b;
		case "divide":
			return a / b;
		default:
			return;
	}
};

exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.divide = (a, b) => a / b;
exports.multiply = (a, b) => a * b;

module.exports = { func, add, multiply, subtract, divide };
