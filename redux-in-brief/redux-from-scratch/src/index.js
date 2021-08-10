import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
	console.log("Store Changed!");
});

store.dispatch(actions.bugAdded("bug 1"));
store.dispatch(actions.bugAdded("bug 2"));
store.dispatch(actions.bugAdded("bug 3"));
store.dispatch(actions.bugAdded("bug 4"));
store.dispatch(actions.bugAdded("bug 5"));

console.log(store);
console.log(store.getState());
