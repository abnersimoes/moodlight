import React from 'react'
import {LoopContextProvider} from './contexts/loop'
import {BlackoutContextProvider} from './contexts/blackout'
import {SaturateContextProvider} from './contexts/saturate'
import {ColorContextProvider} from './contexts/color'
import {NavContextProvider} from './contexts/nav'

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
