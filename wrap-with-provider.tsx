import React, {ReactElement} from 'react'
import GlobalStyle from './src/global-styles'

interface WrapWithProviderProps {
  element: ReactElement
}

// eslint-disable-next-line react/display-name
export default ({element}: WrapWithProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
