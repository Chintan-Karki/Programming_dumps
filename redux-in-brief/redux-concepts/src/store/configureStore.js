import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import reducer from "./reducer";

export default function () {
	return configureStore({ reducer: reducer });
}
