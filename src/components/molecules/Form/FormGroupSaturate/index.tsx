import React from 'react'
import {useColor} from '@contexts/color/hooks'
import {Col} from '@components/atoms/Grid'
import * as Styled from '../styled'
import ButtonSaturateHigh from './ButtonSaturateHigh'
import ButtonSaturateLow from './ButtonSaturateLow'

const FormGroupSaturate = () => {
  const [colorState] = useColor()

  return (
    <Styled.Grid>
      <Col>
        <ButtonSaturateLow color={colorState.color} onClick={() => console.log('t')} />
      </Col>
      <Col flex={1}>
        <span>teste</span>
      </Col>
      <Col>
        <ButtonSaturateHigh color={colorState.color} onClick={() => console.log('t')} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupSaturate
