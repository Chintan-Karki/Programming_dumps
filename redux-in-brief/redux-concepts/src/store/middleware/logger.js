// Middleware curry sequence
// S -> N -> A
// State -> Next -> Action

const logger = param => (store) => (next) => (action) => {
    console.log("parameter passed in middleware: ", param)
	// console.log("store", store);
	// console.log("next", next);
	// console.log("action", action);
	next(action);
};

export default logger;
