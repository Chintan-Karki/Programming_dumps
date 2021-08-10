import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
	console.log("Store Changed!");
});

store.dispatch(actions.bugAdded("bug 1"));

console.log(store);
console.log(store.getState());
