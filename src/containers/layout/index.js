import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Phones from '../phones'

const routes = (
  <Switch>
    <Route path={'/'} component={Phones} exact />
  </Switch>
)

const Layout = () => {
  return (
    <>
      {routes}
    </>
  )
}

export default Layout
