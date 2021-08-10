import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
	name: "projects",
	initialState: [],
	reducers: {
		projectsAdded: (state, action) => {
			state.push({
				id: ++lastId,
				name: action.payload.name,
			});
		},
	},
});

export const { projectsAdded } = slice.actions;
export default slice.reducer;
