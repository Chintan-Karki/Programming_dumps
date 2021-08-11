import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

export default function () {
	return configureStore({
		reducer,
		middleware: [
			...getDefaultMiddleware(),
			logger({ justADemoParameter: 20 }),
			toast,
		],
		//we can also use redux's 'applyMiddleware(logger)' in place of redux-toolkit's'middleware: [logger]'s
	});
}
