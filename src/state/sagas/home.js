
import {delay} from 'redux-saga'

// Here we would do checks for existing data and load whatever we need for this view. Also manage
// generic tasks such as showing/hiding loaders based on UI needs.
export function * loadHome () {
  yield delay(1000)
  yield console.log('Just Finished a Super Long API Call')
}
