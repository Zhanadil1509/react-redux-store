import * as r from 'ramda'
import {FETCH_PHONES_SUCCESS} from '../actionTypes'

const initialState = {
  ids: []
}

export const phonesPage = (state = initialState, {type, payload}) => {
    switch (type) {
      case FETCH_PHONES_SUCCESS:
        return r.merge(state, {
          ids: r.pluck('id', payload)
        })
      default:
        return state
    }
}
