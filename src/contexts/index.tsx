import React from 'react'
import {ColorContextProvider} from './color'

const GlobalContext: React.FC = ({children}) => {
  return <ColorContextProvider>{children}</ColorContextProvider>
}

export default GlobalContext
