import menuReducer from './menu'
import siteActiveReducer from './siteActive'
import {combineReducers} from 'redux';



const allReducers = combineReducers({
    isMenuActive : menuReducer,
    siteActive: siteActiveReducer

});

export default allReducers;