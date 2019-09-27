import {combineReducers} from 'redux'
import {phones} from './phones'
import {connectRouter} from 'connected-react-router'


export const reducer = (history) => combineReducers({
  phones,
  router: connectRouter(history)
})