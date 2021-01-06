import React, {ReactElement} from 'react'
import GlobalContexts from '../contexts/src'
import GlobalStore from '../store/src'
import GlobalStyle from './src/global-styles'

interface WrapWithProviderProps {
  element: ReactElement
}

// eslint-disable-next-line react/display-name
export default ({element}: WrapWithProviderProps) => {
  return (
    <GlobalStore>
      <GlobalContexts>
        <GlobalStyle />
        {element}
      </GlobalContexts>
    </GlobalStore>
  )
}
