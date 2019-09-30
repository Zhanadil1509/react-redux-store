import {applyMiddleware, createStore} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserHistory} from 'history'
import './main.css'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {reducer} from './reducers'
import {Provider} from 'react-redux'
import Layout from './containers/layout'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Layout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
