import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'

const store = createStore(
    reducers, 
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.dispatch({
//     type: "test"
// })
// export default createStore(reducers, state)
export default store