import React, {useState, useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {Col} from '../../Grid'
import * as Styled from '../styled'
import ButtonFullscreen from './ButtonFullscreen'

const FormGroupFullscreen = ({children}) => {
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false)
  const [colorState] = useColor()
  const isFullscreenSupported = !!document.body.requestFullscreen

  const onToggleIsFullscreenEnabled = useCallback(() => {
    setIsFullscreenEnabled(!isFullscreenEnabled)

    if (isFullscreenEnabled && document.exitFullscreen) {
      return document.exitFullscreen()
    }
    return document.body.requestFullscreen()
  }, [isFullscreenEnabled])

  return (
    <Styled.Grid>
      {isFullscreenSupported && (
        <Col>
          <ButtonFullscreen color={colorState.color} isActive={isFullscreenEnabled} onClick={onToggleIsFullscreenEnabled} />
        </Col>
      )}
      <Col flex={1} alignSelf="flex-end">
        {children}
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupFullscreen
