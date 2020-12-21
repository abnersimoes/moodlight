import React, {createContext, useState} from 'react'
import {NavContextProps, NavState} from './types'

const DEFAULT_VALUE = {
  navState: {
    isActive: true,
    isActiveTrigged: false,
  },
  setNavState: (state: NavState) => state,
}

const NavContext = createContext<NavContextProps>(DEFAULT_VALUE)

function NavContextProvider({children}) {
  const [navState, setNavState] = useState(DEFAULT_VALUE.navState)

  return (
    <NavContext.Provider
      value={{
        navState,
        setNavState,
      }}>
      {children}
    </NavContext.Provider>
  )
}

export {NavContextProvider}
export default NavContext
