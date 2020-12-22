import React, {useCallback, useMemo, useState} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useSaturate} from '@contexts/saturate/hooks'
import {useLoop} from '@contexts/loop/hooks'
import {Col} from '@components/atoms/Grid'
import * as Styled from '../styled'
import ButtonSaturateHigh from './ButtonSaturateHigh'
import ButtonSaturateLow from './ButtonSaturateLow'
import HighlightSaturateBar from './HighlightSaturateBar'

const FormGroupSaturate = () => {
  const [{current: color}] = useColor()
  const [{transition}] = useLoop()
  const [saturateState, setSaturateState] = useSaturate()
  const [isMinLvl, setIsMinLvl] = useState(true)
  const [isMaxLvl, setIsMaxLvl] = useState(true)

  useMemo(() => {
    const {lvl, min, max} = saturateState

    setIsMinLvl(lvl <= min)
    setIsMaxLvl(lvl >= max)
  }, [saturateState])

  const onSetSaturateLvl = useCallback(
    (lvl: number) => {
      setSaturateState({
        ...saturateState,
        lvl,
      })
    },
    [saturateState]
  )

  return (
    <Styled.Grid flowAlign="center" counterFlowAlign="center">
      <Col>
        <ButtonSaturateLow
          color={color}
          transition={transition}
          isDisabled={isMinLvl}
          onClick={() => onSetSaturateLvl(saturateState.lvl - 1)}
        />
      </Col>
      <Col flex={1}>
        <HighlightSaturateBar lvl={saturateState.lvl} max={saturateState.max} />
      </Col>
      <Col>
        <ButtonSaturateHigh
          color={color}
          transition={transition}
          isDisabled={isMaxLvl}
          onClick={() => onSetSaturateLvl(saturateState.lvl + 1)}
        />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupSaturate