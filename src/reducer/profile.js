import {GET_USER_SUCCESS, GET_USER_FAILURE, GET_HISTORY_SUCCESS} from '../action'

const initial_state = {}

function user(state = initial_state, action) {
	switch(action.type) {
		case GET_USER_SUCCESS:
			return Object.assign({}, state, {
					data: action.data
  				   });
		case GET_USER_FAILURE:
			return Object.assign({}, state, {
					error: action.error
  				   });
		case GET_HISTORY_SUCCESS:
			return Object.assign({}, state, {
					history: action.data
  				   });
  		default:
  			return state
	}
}

export default user;



