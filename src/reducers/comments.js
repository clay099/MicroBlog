import {
	UPDATE_COMMENT,
	REMOVE_COMMENT,
	GET_COMMENTS,
} from "../actions/actionTypes";
import cloneDeep from "lodash/cloneDeep";

const INITIAL_STATE = {};

export default function comments(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_COMMENT:
			return {
				...state,
				[action.postId]: {
					...state[action.postId],
					[action.commentId]: action.comment,
				},
			};
		case REMOVE_COMMENT:
			delete state[action.postId][action.commentId];
			return cloneDeep(state);

		case GET_COMMENTS:
			let summary = { ...state };
			action.data.comments.map((c) => {
				summary[action.data.postId] = {
					...summary[action.data.postId],
					[c.id]: c.text,
				};
				return summary[action.data.postId];
			});

			return summary;

		default:
			return state;
	}
}
