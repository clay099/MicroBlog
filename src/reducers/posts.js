import { UPDATE_POST, REMOVE_POST } from "../actionTypes";
import cloneDeep from "lodash/cloneDeep";
const INITIAL_STATE = {};

export default function posts(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_POST:
			return {
				...state,
				[action.id]: {
					title: action.title,
					description: action.description,
					body: action.body,
				},
			};
		case REMOVE_POST:
			delete state[action.id];
			return cloneDeep(state);

		default:
			return state;
	}
}
