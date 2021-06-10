import { MutationTree } from 'vuex';
import { State } from './state';
// import { DocumentsMutationTypes } from './mutation-types';

export enum MutationTypes {
  SET_DATA = 'SET_DATA',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, payload: []): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATA](state: State, data: []) {
    state.list = data;
  },
};
