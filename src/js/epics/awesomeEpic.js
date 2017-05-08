import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/delay'

export const awesomeEpic = (action$) => {
  return action$.filter(action => action.type === 'AWESOME_EVENT')
                .delay(1000)
                .mapTo({ type: 'ASYNC_EVENT' })
}
