
import React from 'react'
import Link from 'redux-first-router-link'

import {routeAbout} from 'actions'

export const Home = () => (
  <p>Head to the <Link to={routeAbout()}>About Page</Link>.</p>
)
