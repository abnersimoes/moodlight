import React, {ReactElement} from 'react'
import {Provider} from 'react-redux'
import store from '@store'
import GlobalStyle from './src/global-styles'

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
