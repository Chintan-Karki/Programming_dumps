import axios from "axios";
import * as actions from "../api";

const api =
	({ dispatch }) =>
	(next) =>
	async (action) => {
		if (action.type !== actions.apiCallBegan.type) return next(action);
		next(action);
		const { url, method, data, onSuccess, onError } = action.payload;

		try {
			const response = await axios.request({
				baseURL: "http://localhost:9001/api/",
				url, // '/bugs'
				method,
				data,
			});
			// General
			dispatch(actions.apiCallSuccess(response.data));
			// Specific
			if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
		} catch (error) {
			// General
			dispatch(actions.apiCallFailed(error));
			// Specific
			if (onError) dispatch({ type: onError, payload: error });
		}
	};

export default api;
