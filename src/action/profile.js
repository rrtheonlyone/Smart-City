import axios from 'axios'
import qs from 'qs'

import {GET_USER_SUCCESS, 
		GET_USER_FAILURE,
		GET_HISTORY_SUCCESS
	   } from '../action'

function fetchUserSuccess(data) {
	return {
		type: GET_USER_SUCCESS,
		data
	}
}

function fetchUserFailure(error) {
	return {
		type: GET_USER_FAILURE,
		error
	}
}

function fetchHistorySuccess(data) {
	return {
		type: GET_HISTORY_SUCCESS,
		data
	}
}

const SAP_HANA_URL = "presalesdigitallabg85556318.jp1.hana.ondemand.com/SmartCity/services"
axios.defaults.baseURL = 'https://' + SAP_HANA_URL;

export function fetchProfile(user_id) {
	return (dispatch) => {
				axios.get('/citizen.xsjs', {
					params: {
						id: user_id
					}
				})	
				  .then(function (response) {
				    dispatch(fetchUserSuccess(response.data))
				  })
				  .catch(function (error) {
				    dispatch(fetchUserFailure("Something went wrong with the fetch request"))
				  })
			}	
}

export function fetchHistory(user_id) {
	return (dispatch) => {
				axios.get('/citizen.xsjs', {
					params: {
						id: user_id
					}
				})	
				  .then(function (response) {

				  	let medicalHistory = response.data[0].MEDICAL
				  	let eventHistory = response.data[0].PROGRAM

				  	medicalHistory = medicalHistory.map((data, index) => {
				  		data['Category'] = 'Medical'
				  		return data
				  	})

				  	eventHistory = eventHistory.map((data, index) => {
				  		data['Category'] = 'Event'
				  		return data
				  	})

				  	let res = eventHistory.concat(medicalHistory)
				    dispatch(fetchHistorySuccess(res))
				  })
				  .catch(function (error) {
				    dispatch(fetchUserFailure(error))
				  })
			}	
}

export function bookAppointment(data, branch, user_id) {
	return (dispatch) => {
		axios({
		    method: 'post',
		    url: '/health_bookings.xsjs',
		    data: qs.stringify({
		    	userID: user_id,
				branch: branch,
				remarks: data.Condition,
				timestamp: data.Date
		    }),
		    headers: {
		    	config: 'application/x-www-form-urlencoded'
		    }
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}


export function registerEvent(data, user_id) {
	return (dispatch) => {
		axios({
		    method: 'post',
		    url: '/citizen_programs.xsjs',
		    data: qs.stringify({
		    	userID: user_id,
				programID: data,
		    }),
	        headers: {
		        'Content-Type': 'application/x-www-form-urlencoded'
		    }
		  })
		  .then(function (response) {
		    console.log(JSON.stringify(response));
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}	
}







