import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURES
} from '../actionTypes'
import {fetchPhonesApi} from '../api'


export const fetchPhones = () => async (dispatch) => {
  dispatch({
    type: FETCH_PHONES_START
  })

  try {
    const phones = await fetchPhonesApi()
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch(e) {
      dispatch({
        type: FETCH_PHONES_FAILURES,
        payload: e,
        error: true
      })
  }
}