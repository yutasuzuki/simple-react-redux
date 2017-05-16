import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/delay'
import { AWESOME_EVENT, asyncEvent } from '../actions'

export const awesomeEpic = (action$) => {
  return action$.ofType(AWESOME_EVENT)
                .delay(2000)
                .mapTo(asyncEvent())
}
