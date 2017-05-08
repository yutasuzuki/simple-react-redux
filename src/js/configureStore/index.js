import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'
import epicMiddleware from '../epics'

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      epicMiddleware,
      createLogger()
    )
  )
  return store
}
