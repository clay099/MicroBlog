import {
	UPDATE_POST,
	REMOVE_POST,
	VOTE,
	GET_POSTS,
} from "../actions/actionTypes";
import cloneDeep from "lodash/cloneDeep";
const INITIAL_STATE = {};

export default function posts(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_POST:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					title: action.title,
					description: action.description,
					body: action.body,
				},
			};
		case REMOVE_POST:
			delete state[action.id];
			return cloneDeep(state);

		case GET_POSTS:
			let summary = {};
			action.data.map((p) => {
				summary[p.id] = {
					id: p.id,
					title: p.title,
					description: p.description,
				};

				return summary[p.id];
			});
			return summary;

		case VOTE:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					votes: action.votes,
				},
			};

		default:
			return state;
	}
}
