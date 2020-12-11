import React from 'react'
import {ColorContextProvider} from './color'
import {BlackoutContextProvider} from './blackout'

const GlobalContext: React.FC = ({children}) => {
  return (
    <ColorContextProvider>
      <BlackoutContextProvider>{children}</BlackoutContextProvider>
    </ColorContextProvider>
  )
}

export default GlobalContext
