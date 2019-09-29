import * as r from 'ramda'

import {
    FETCH_PHONES_SUCCESS
} from '../actionTypes'

const initialState = {}

export const phones = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = r.indexBy(r.prop('id'), payload)
            return r.merge(state, newValues)
        default:
            return state
    }
}