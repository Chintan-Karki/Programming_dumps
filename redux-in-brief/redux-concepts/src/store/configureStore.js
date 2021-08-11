import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";

export default function () {
	return configureStore({
		reducer,
		middleware: [logger({ justADemoParameter: 20 }), func],
		//we can also use redux's 'applyMiddleware(logger)' in place of redux-toolkit's'middleware: [logger]'
	});
}
