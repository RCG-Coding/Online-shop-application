import {combineReducers} from 'redux';
import { ProductReducer } from './productReducer';

const Reducers = combineReducers({
    allReducers: ProductReducer
})

export default Reducers;