import { State } from './state';

export type Getters = {
  getList(state: State): [];
}

export const getters: Getters = {
  getList: (state) => state.list,
};
