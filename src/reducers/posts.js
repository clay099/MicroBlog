import { UPDATE_POST, REMOVE_POST } from "../actionTypes";
const INITIAL_STATE = {};
let id = 0;

export default function posts(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_POST:
			if (!action.id) {
				id++;
			}
			return {
				...state,
				[action.id || id]: {
					title: action.title,
					description: action.description,
					body: action.body,
				},
			};
		case REMOVE_POST:
			delete state[action.id];
			return {
				...state,
			};
		default:
			return state;
	}
}
