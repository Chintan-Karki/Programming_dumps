import configureStore from "./store/configureStore";
import * as actions from "./store/projects";
import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";

const store = configureStore();

console.log("Starter state of the store: ", store.getState());

store.subscribe(() => {
	console.log("Store Changed", store.getState());
});

console.log("Bug Added through action dispatch");
store.dispatch(actions.projectsAdded({ name: "First bug" }));
store.dispatch(actions.projectsAdded({ name: "Second bug" }));

store.dispatch(bugAdded({ description: "Sec bug" }));
store.dispatch(bugAdded({ description: "Third bug" }));
store.dispatch(bugAdded({ description: "4th bug" }));
store.dispatch(bugResolved({ id: 2 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const unresolvedBugs2 = getUnresolvedBugs(store.getState());

console.log(unresolvedBugs === unresolvedBugs2);
