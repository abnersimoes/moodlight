import React from 'react'
import {LoopContextProvider} from './loop'
import {BlackoutContextProvider} from './blackout'
import {SaturateContextProvider} from './saturate'
import {ColorContextProvider} from './color'
import {NavContextProvider} from './nav'

function GlobalContext({children}) {
  return (
    <LoopContextProvider>
      <BlackoutContextProvider>
        <SaturateContextProvider>
          <ColorContextProvider>
            <NavContextProvider>{children}</NavContextProvider>
          </ColorContextProvider>
        </SaturateContextProvider>
      </BlackoutContextProvider>
    </LoopContextProvider>
  )
}

export default GlobalContext
