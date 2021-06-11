import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationTypes } from './mutations'
import { State } from './state'
import axios from 'axios'
const api = "https://pokeapi.co/api/v2"
export enum ActionTypes {
  GetItems = 'GET_ITEMS',
  UpdateItems = 'UPDATE_ITEMS',
  SearchItems = 'SEARCH_ITEMS',
  GetStatusItem = 'GET_FAVORITES_ALL_ITEMS',
  GetOneItem = 'GET_ONE_ITEM',
  UpdateItem = 'UPDATE_ITEM',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}
export type Actions = {
    [ActionTypes.GetItems](context: ActionAugments): void
    [ActionTypes.UpdateItems](context: ActionAugments, data: []): void
    [ActionTypes.SearchItems](context: ActionAugments,word: string): void
    [ActionTypes.GetStatusItem](context: ActionAugments,status: boolean): void
    [ActionTypes.GetOneItem](context: ActionAugments, name: string): void
    [ActionTypes.UpdateItem](context: ActionAugments, data: []): void
}
export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetItems]({ commit }) {
    let {data: {results}} = await axios.get(`${api}/pokemon/`)
    let content = results.map((e) => {
      e.status = false
      return e
    })
    commit(MutationTypes.SET_DATA, content)
    return content
  },
  async [ActionTypes.UpdateItems]({ commit }, data) {
    commit(MutationTypes.SET_DATA, data)
  },
  async [ActionTypes.SearchItems]({ dispatch, commit }, word) {
    let data = await dispatch(ActionTypes.GetItems)
    let filterItems = data.filter((e) => {
      if(e.name.toLowerCase().includes(word.toLowerCase())){
        return true
      }
      return false
    })
    commit(MutationTypes.SET_DATA, filterItems)
  },
  async [ActionTypes.GetStatusItem]({ state, commit }, status) {
    let data = state.list
    let filterItems = data.filter((e) => e.status == status)
    commit(MutationTypes.SET_DATA, filterItems)
  },
  async [ActionTypes.GetOneItem]({ commit }, name) {
    let {data} = await axios.get(`${api}/pokemon/${name}/`)
    let content = data
    content.status = false
    commit(MutationTypes.SET_DATA_ITEM, content)
  },
  async [ActionTypes.UpdateItem]({ commit }, data) {
    commit(MutationTypes.SET_DATA_ITEM, data)
  },
}