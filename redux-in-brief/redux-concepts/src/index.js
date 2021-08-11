import configureStore from "./store/configureStore";
import * as actions from "./store/projects";
import {
	bugAdded,
	bugResolved,
	bugAssignedToUser,
	getUnresolvedBugs,
	getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";

const store = configureStore();

console.log("Starter state of the store: ", store.getState());

store.subscribe(() => {
	console.log("Store Changed", store.getState());
});

console.log("Bug Added through action dispatch");
store.dispatch(actions.projectsAdded({ name: "FIRST PROJECT" }));
store.dispatch(actions.projectsAdded({ name: "SECOND PROJECT" }));
store.dispatch(actions.projectsAdded({ name: "THIRD PROJECT" }));

store.dispatch(bugAdded({ description: "1ST bug" }));
store.dispatch(bugAdded({ description: "2ND bug" }));
store.dispatch(bugAdded({ description: "3RD bug" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 2 }));

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(userAdded({ name: "User 3" }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const unresolvedBugs2 = getUnresolvedBugs(store.getState());

const bugsByUser = getBugsByUser(1)(store.getState());

console.log(bugsByUser);
