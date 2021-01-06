import React, {ReactNode} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {useNav} from '@contexts/contexts/nav/hooks'
import {useColor} from '@contexts/contexts/color/hooks'
import {useLoop} from '@contexts/contexts/loop/hooks'
import * as Styled from './styled'

interface TemplateMainProps {
  children: ReactNode
}

function TemplateMain({children}: TemplateMainProps) {
  const {current: color} = useSelector(({colors}: RootState) => colors)
  const [nav, setNav] = useNav()
  // const [{current: color}] = useColor()
  const [{transition}] = useLoop()

  return (
    <Styled.TemplateMainWrapper color={color} transition={transition} onClick={() => setNav({...nav, isActiveTrigged: true})}>
      {children}
    </Styled.TemplateMainWrapper>
  )
}

export default TemplateMain
