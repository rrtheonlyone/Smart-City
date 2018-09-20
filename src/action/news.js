import axios from 'axios'

import {GET_NEWS_SUCCESS, 
		GET_NEWS_FAILURE
	   } from '../action'

function fetchSuccess(data) {
	return {
		type: GET_NEWS_SUCCESS,
		data
	}
}

function fetchFailure(error) {
	return {
		type: GET_NEWS_FAILURE,
		error
	}
}


const SAP_HANA_URL = "presalesdigitallabg85556318.jp1.hana.ondemand.com/SmartCity/services"
axios.defaults.baseURL = 'https://' + SAP_HANA_URL;


export function fetchNews() {
	return (dispatch) => {
				axios.get('/news.xsjs')	
				  .then(function (response) {
				    dispatch(fetchSuccess(response.data))
				  })
				  .catch(function (error) {
				    dispatch(fetchFailure("Something went wrong with the fetch request"))
				  })
			}	
}

