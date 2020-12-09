import {combineReducers} from 'redux'
import colors from './colors'
import loop from './loop'
import fadeOut from './fade-out'

const reducers = combineReducers({
  colors,
  loop,
  fadeOut,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
