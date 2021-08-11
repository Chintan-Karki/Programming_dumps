// ****************** //
// * DUCK'S PATTERN * //
// * Simply means adding all the actions and reducer functions in a same module *//
// ****************** //

// * Final and the best approach : createSlice of reduxToolkit
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
	name: "bugs",
	initialState: [],
	reducers: {
		// actions : action handlers
		bugAdded: (bugs, action) => {
			bugs.push({
				id: ++lastId,
				description: action.payload.description,
				resolved: false,
			});
		},
		bugResolved: (bugs, action) => {
			const index = bugs.findIndex((bug) => bug.id === action.payload.id);
			bugs[index].resolved = true;
		},
		bugAssignedToUser: (bugs, action) => {
			const { bugId, userId } = action.payload;
			const index = bugs.findIndex((bug) => bug.id === bugId);
			bugs[index].userId = userId;
		},
	},
});

// Selector
// export const getUnresolvedBugs = (state) =>
// 	state.entities.bugs.filter((bug) => !bug.resolved);

// * Making a memoized selector using reselect
export const getUnresolvedBugs = createSelector(
	(state) => state.entities.bugs,
	(bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
	createSelector(
		(state) => state.entities.bugs,
		(bugs) => bugs.filter((bug) => bug.userId === userId)
	);

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

//*  Using createAction and createReducer from React-toolkit
// import { createAction, createReducer } from "@reduxjs/toolkit";
// //* Action creators

// export const bugAdded = createAction("bugAdded");
// export const bugRemoved = createAction("bugRemoved");
// export const bugResolved = createAction("bugResolved");

// //* Reducer function

// export default createReducer([], {
//  Key ( action ) : value ( function ) pair

// 	[bugAdded.type]: (bugs, action) => {
// 		bugs.push({
// 			id: ++lastId,
// 			description: action.payload.description,
// 			resolved: false,
// 		});
// 	},
// 	[bugResolved.type]: (bugs, action) => {
// 		const index = bugs.findIndex((bug) => bug.id === action.payload.id);
// 		bugs[index].resolved = true;
// 	},
// });

// The reducer's export must be default in Duck's pattern
// export default function reducer(state = [], action) {
// 	switch (action.type) {
// 		case bugAdded.type:
// 			return [
// 				...state,
// 				{
// 					id: ++lastId,
// 					description: action.payload.description,
// 					resolved: false,
// 				},
// 			];
// 		case bugRemoved.type:
// 			return state.filter((bug) => bug.id !== action.payload.id);
// 		case bugResolved.type:
// 			return state.map((bug) =>
// 				bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
// 			);
// 		default:
// 			return state;
// 	}
// }
