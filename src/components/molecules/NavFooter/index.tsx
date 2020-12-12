import React, {useState, useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {Grid, Col} from '@components/atoms/Grid'
import ButtonFullscreen from './ButtonFullscreen'
import LinkRepo from '../LinkRepo'

const NavFooter = () => {
  const [color] = useColor()
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false)
  const isFullscreenSupported = !!document.body.requestFullscreen

  const onToggleIsFullscreenEnabled = useCallback(() => {
    setIsFullscreenEnabled(!isFullscreenEnabled)

    if (isFullscreenEnabled && document.exitFullscreen) {
      return document.exitFullscreen()
    }
    return document.body.requestFullscreen()
  }, [isFullscreenEnabled])

  return (
    <Grid>
      {isFullscreenSupported && (
        <Col>
          <ButtonFullscreen color={color.current} isActive={isFullscreenEnabled} onClick={onToggleIsFullscreenEnabled} />
        </Col>
      )}
      <Col flex={1} alignSelf="flex-end">
        <LinkRepo />
      </Col>
    </Grid>
  )
}

export default NavFooter
