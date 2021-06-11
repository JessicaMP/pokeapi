import {createStore, Store} from 'vuex'
import { state } from './state';
import { mutations } from './mutations';
import { actions } from './actions';

export const store = createStore({
    state,
    actions,
    mutations
})

export default store;