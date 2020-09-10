import { UPDATE_COMMENT, REMOVE_COMMENT } from "../actionTypes";
const INITIAL_STATE = {};
let commentId = 0;

export default function comments(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_COMMENT:
			if (!action.commentId) {
				commentId++;
			}
			return {
				...state,
				[action.postId]: {
					...state[action.postId],
					[action.commentId || commentId]: {
						comment: action.comment,
					},
				},
			};
		case REMOVE_COMMENT:
			delete state[action.postId][action.commentId];
			// return {
			// 	...state,
			// };
			return JSON.parse(JSON.stringify(state));
		default:
			return state;
	}
}
