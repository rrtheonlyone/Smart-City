import {GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from '../action'

const initial_state = {}

function news(state = initial_state, action) {
	switch(action.type) {
		case GET_NEWS_SUCCESS:
			return Object.assign({}, state, {
					data: action.data
  				   });
		case GET_NEWS_FAILURE:
			return Object.assign({}, state, {
					error: action.error
  				   });
  		default:
  			return state
	}
}

export default news;



