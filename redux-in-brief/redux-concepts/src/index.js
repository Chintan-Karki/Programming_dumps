import configureStore from "./store/configureStore";
import * as actions from "./store/api";
const store = configureStore();

store.dispatch(
	actions.apiCallBegan({
		url: "/bugs",
		onSuccess: "bugsReceived",
	})
);

/*
//* Example dispatches
import * as actions from "./store/projects";
import {
	bugAdded,
	bugResolved,
	bugAssignedToUser,
	getUnresolvedBugs,
	getBugsByUser,
} from "./store/bugs";

import { userAdded } from "./store/users";
console.log("Starter state of the store: ", store.getState());

store.subscribe(() => {
	console.log("Store Changed", store.getState());
});

console.log("Bug Added through action dispatch");
store.dispatch(actions.projectsAdded({ name: "FIRST PROJECT" }));

store.dispatch(bugAdded({ description: "1ST bug" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 2 }));

store.dispatch(userAdded({ name: "User 1" }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);

const bugsByUser = getBugsByUser(1)(store.getState());
console.log(bugsByUser);
*/
