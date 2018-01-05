import { combineReducers } from 'redux';
import CitySelectReducer from './components/CitySelect/citySelectReducer';

const rootReducer = combineReducers({
    citySelect: CitySelectReducer
});

export default rootReducer;
