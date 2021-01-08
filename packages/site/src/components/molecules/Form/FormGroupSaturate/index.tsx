import React, {useCallback, useMemo, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {setLvlSaturate} from '@store/actions'
import {SATURATE_LVL} from '@store/constants/storage'
import {getIsBrowser} from '@store/helpers'
import {Col} from '@components/atoms/Grid'
import * as Styled from '../styled'
import ButtonSaturateHigh from './ButtonSaturateHigh'
import ButtonSaturateLow from './ButtonSaturateLow'
import HighlightSaturateBar from './HighlightSaturateBar'

const FormGroupSaturate = () => {
  const {
    colors: {current: color, contrast},
    loop: {transition},
    saturate: {min, max, lvl},
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const [isMinLvl, setIsMinLvl] = useState(true)
  const [isMaxLvl, setIsMaxLvl] = useState(true)
  const [isBrowser] = useState(getIsBrowser())

  useMemo(() => {
    if (isBrowser) localStorage.setItem(SATURATE_LVL, `${lvl}`)
    setIsMinLvl(lvl <= min)
    setIsMaxLvl(lvl >= max)
  }, [min, max, lvl])

  const onSetSaturateLvl = useCallback((lvl: number) => dispatch(setLvlSaturate(lvl)), [lvl])

  return (
    <Styled.Grid flowAlign="center" counterFlowAlign="center">
      <Col>
        <ButtonSaturateLow
          color={color}
          contrastColor={contrast}
          transition={transition}
          isDisabled={isMinLvl}
          onClick={() => onSetSaturateLvl(lvl - 1)}
          tabIndex={12}
        />
      </Col>
      <Col flex={1}>
        <HighlightSaturateBar lvl={lvl} max={max} transition={transition} contrastColor={contrast} />
      </Col>
      <Col>
        <ButtonSaturateHigh
          color={color}
          contrastColor={contrast}
          transition={transition}
          isDisabled={isMaxLvl}
          onClick={() => onSetSaturateLvl(lvl + 1)}
          tabIndex={13}
        />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupSaturate
