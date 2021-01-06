import React, {ReactElement} from 'react'
import {Provider} from 'react-redux'
import store from './store'

interface StoreProvider {
  children: ReactElement
}

export default ({children}: StoreProvider) => {
  return <Provider store={store}>{children}</Provider>
}
