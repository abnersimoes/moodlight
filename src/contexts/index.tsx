import React from 'react'
import {LoopContextProvider} from './loop'
import {BlackoutContextProvider} from './blackout'
import {SaturateContextProvider} from './saturate'
import {ColorContextProvider} from './color'

function GlobalContext({children}) {
  return (
    <LoopContextProvider>
      <BlackoutContextProvider>
        <SaturateContextProvider>
          <ColorContextProvider>{children}</ColorContextProvider>
        </SaturateContextProvider>
      </BlackoutContextProvider>
    </LoopContextProvider>
  )
}

export default GlobalContext
