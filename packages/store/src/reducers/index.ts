import {combineReducers} from 'redux'
import colors from './colors'

const reducers = combineReducers({
  colors,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
