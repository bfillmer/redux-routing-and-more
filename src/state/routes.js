
import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import {ROUTE_HOME, ROUTE_ABOUT} from 'types'

const routesMap = {
  [ROUTE_HOME]: '/',
  [ROUTE_ABOUT]: '/about'
}

const history = createHistory()

const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routesMap)

// @HACK Exporting when assigning the variables above works when the application compiles to run,
// however Jest chokes on the reducer when running our snapshot tests.
export {
  reducer,
  middleware,
  enhancer
}
