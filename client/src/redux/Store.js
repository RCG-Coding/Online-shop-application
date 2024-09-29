import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/rootReducer';

const Store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV !== 'production'
});

export default Store;