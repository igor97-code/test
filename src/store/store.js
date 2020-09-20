import {createStore} from 'redux'
import quizReducer from './reducers/quizReducer'

let store = createStore(quizReducer);

export default store