import {FETCH_HOSPITAL_SUCCESS, FETCH_HOSPITAL_FAILURE, FETCH_ADDRESS_SUCCESS, FETCH_ADDRESS_FAILURE} from '../action'

const initial_state = {}

function hospital(state = initial_state, action) {
	switch(action.type) {
		case FETCH_HOSPITAL_SUCCESS:
			return Object.assign({}, state, {
					data: action.data
  				   });
		case FETCH_HOSPITAL_FAILURE:
			return Object.assign({}, state, {
					error: action.error
  				   });
		case FETCH_ADDRESS_SUCCESS:
			return Object.assign({}, state, {
					address: action.data
  				   });
		case FETCH_ADDRESS_FAILURE:
			return Object.assign({}, state, {
					error: action.error
  				   });
  		default:
  			return state
	}
}

export default hospital;



