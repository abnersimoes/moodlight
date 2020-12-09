import React, {ReactElement} from 'react'
import {Provider} from 'react-redux'
import GlobalStyle from './src/global-styles'
import store from './src/store'

interface WrapWithProviderProps {
  element: ReactElement
}

// eslint-disable-next-line react/display-name
export default ({element}: WrapWithProviderProps) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>{element}</Provider>
    </>
  )
}
