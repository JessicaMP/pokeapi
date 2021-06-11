import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
  SET_DATA = 'SET_DATA',
  SET_DATA_ITEM = 'SET_DATA_ITEM'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, payload: []): void;
  [MutationTypes.SET_DATA_ITEM](state: S, payload: []): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATA](state: State, data: []) {
    state.list = data;
  },
  [MutationTypes.SET_DATA_ITEM](state: State, data: []) {
    state.item = data;
  },
};
