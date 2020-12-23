import React, {ReactElement} from 'react'
import GlobalStore from '../store/src'
import GlobalStyle from './src/global-styles'

interface WrapWithProviderProps {
  element: ReactElement
}

// eslint-disable-next-line react/display-name
export default ({element}: WrapWithProviderProps) => {
  return (
    <GlobalStore>
      <GlobalStyle />
      {element}
    </GlobalStore>
  )
}
