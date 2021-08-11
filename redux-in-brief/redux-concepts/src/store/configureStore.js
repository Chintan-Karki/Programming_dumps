import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default function () {
	return configureStore({
		reducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(logger({ justADemoParameter: 20 }))
				.concat(toast)
				.concat(api),
		// [
		// 	...getDefaultMiddleware(),
		// 	logger({ justADemoParameter: 20 }),
		// 	toast,
		// ],
		//we can also use redux's 'applyMiddleware(logger)' in place of redux-toolkit's'middleware: ...'s
	});
}
