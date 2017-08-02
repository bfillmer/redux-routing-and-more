
import {select, spawn, take} from 'redux-saga/effects'

import {ROUTE_HOME} from 'types'
import {routeType} from 'selectors'

// Route Sagas
import {loadHome} from 'state/sagas/home'

// Routes that require side effects on load are mapped here, type to saga.
const routesMap = {
  [ROUTE_HOME]: loadHome
}

// On application boot we check state to see if we should load anything, then
// we watch for future changes.
export function * routes () {
  const initialRoute = yield select(routeType)
  // Run saga in route map that matches initialRoute if exists
  if (routesMap[initialRoute]) {
    yield spawn(routesMap[initialRoute])
  }
  // Watch for future navigation events and run the correct saga if needed.
  while (true) {
    const {type} = yield take(Object.keys(routesMap))
    yield spawn(routesMap[type])
  }
}
