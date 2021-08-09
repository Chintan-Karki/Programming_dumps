import { bugAdded, bugRemoved, bugResolved } from "./actions";
import * as actions from "./actionTypes";
import store from "./store";

console.log("Starter state of the store: ", store.getState());

const unsubscribe = store.subscribe(() => {
	console.log("Store Changed", store.getState());
});

console.log("Bug Added through action dispatch");
store.dispatch(bugAdded("First bug"));
console.log("Another Bug Added through action dispatch");
store.dispatch(bugAdded("Second bug"));
console.log("Bug Resolved through action dispatch");
store.dispatch(bugResolved(2));
console.log("Bug Removed through action dispatch");
store.dispatch(bugRemoved(1));
console.log("Another Bug Removed through another action dispatch");
store.dispatch(bugRemoved(2));
console.log("Final State");
console.log(store.getState());
// unsubscribe();
