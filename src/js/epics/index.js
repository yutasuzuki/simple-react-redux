import { createEpicMiddleware } from 'redux-observable'
import { awesomeEpic } from './awesomeEpic'

const epicMiddleware = createEpicMiddleware(
  awesomeEpic
)
export default epicMiddleware
