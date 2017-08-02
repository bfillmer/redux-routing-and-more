
import React from 'react'
import Link from 'redux-first-router-link'

import {routeHome} from 'actions'

export const About = () => (
  <p>Head to the <Link to={routeHome()}>Home Page</Link>.</p>
)
