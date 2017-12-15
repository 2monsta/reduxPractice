import {combineReducers} from 'redux';
import CountriesReducer from './CountriesReducer'

var rootReducer = combineReducers({
    countries: CountriesReducer
});

export default rootReducer;