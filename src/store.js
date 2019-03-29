import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { configureStore } from 'redux-starter-kit';

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
})

export default store;