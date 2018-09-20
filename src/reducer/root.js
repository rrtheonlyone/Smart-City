import { combineReducers } from 'redux'

import hospital from './hospitals'
import news from './news'
import programs from './events'
import user from './profile'

const rootReducer = combineReducers({
	hospital: hospital,
	news: news,
	programs: programs,
	user: user
})



export default rootReducer