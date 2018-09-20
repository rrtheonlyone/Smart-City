import axios from 'axios'

import {FETCH_HOSPITAL_SUCCESS, FETCH_HOSPITAL_FAILURE, FETCH_ADDRESS_SUCCESS, FETCH_ADDRESS_FAILURE, API_KEY} from '../action'

function fetchSuccess(data) {
	return {
		type: FETCH_HOSPITAL_SUCCESS,
		data
	}
}

function fetchFailure(error) {
	return {
		type: FETCH_HOSPITAL_FAILURE,
		error
	}
}

function fetchAddressSuccess(data) {
	return {
		type: FETCH_ADDRESS_SUCCESS,
		data
	}
}

function fetchAddressFailure(error) {
	return {
		type: FETCH_ADDRESS_FAILURE,
		error
	}
}

// const GOOGLE_MAP_URL = "maps.googleapis.com/maps/api"
// axios.defaults.baseURL = 'https://' + GOOGLE_MAP_URL;
// axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=1.305,103.837&key=AIzaSyA-YPaxiwk03VMrQcYgD4ly0IfouCApjHw'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function fetchHospitals(location) {
	return (dispatch) => {
				axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
					params: {
						key: API_KEY,
						location: location,
						radius: "10000",
						type: 'school'
					}
				})	
				  .then(function (response) {
				    dispatch(fetchSuccess(response.data))
				  })
				  .catch(function (error) {
				    dispatch(fetchFailure(error))
				  })
			}	
}

export function fetchAddress(location) {
	return (dispatch) => {
			axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
					params: {
						key: API_KEY,
						latlng: location,
					}
				})	
			  .then(function (response) {
			    dispatch(fetchAddressSuccess(response.data.results[0].formatted_address))
			  })
			  .catch(function (error) {
			    dispatch(fetchAddressFailure(error.message))
			  })
		}
}






