import {Action} from 'redux'
import {ThunkDispatch, ThunkAction} from 'redux-thunk'
import {RootState} from './reducers'

export type AsyncResult<Result> = ThunkAction<Result, RootState, undefined, Action>
export type AsyncAction = AsyncResult<Promise<Action>>
export type AsyncDispatch = ThunkDispatch<RootState, undefined, Action>
