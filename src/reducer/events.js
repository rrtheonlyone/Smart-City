import {GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE} from '../action'

const initial_state = {}

function programs(state = initial_state, action) {
	switch(action.type) {
		case GET_EVENTS_SUCCESS:
			return Object.assign({}, state, {
					data: action.data
  				   });
		case GET_EVENTS_FAILURE:
			return Object.assign({}, state, {
					error: action.error
  				   });
  		default:
  			return state
	}
}

export default programs;



