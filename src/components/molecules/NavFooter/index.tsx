import React, {useState, useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {Grid, Col} from '@components/atoms/Grid'
import ButtonFullscreen from './ButtonFullscreen'
import LinkRepo from '../LinkRepo'
import {useLoop} from '@contexts/loop/hooks'

const NavFooter = () => {
  const [{current: color}] = useColor()
  const [{transition}] = useLoop()
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false)
  let isFullscreenSupported

  if (typeof window !== 'undefined') {
    isFullscreenSupported = !!document.body.requestFullscreen
  }

  const onToggleIsFullscreenEnabled = useCallback(() => {
    if (isFullscreenSupported) {
      setIsFullscreenEnabled(!isFullscreenEnabled)
      if (isFullscreenEnabled && document?.exitFullscreen) {
        return document.exitFullscreen()
      }

      return document.body.requestFullscreen()
    }
  }, [isFullscreenEnabled])

  return (
    <Grid>
      {isFullscreenSupported && (
        <Col>
          <ButtonFullscreen color={color} transition={transition} isActive={isFullscreenEnabled} onClick={onToggleIsFullscreenEnabled} />
        </Col>
      )}
      <Col flex={1} alignSelf="flex-end">
        <LinkRepo />
      </Col>
    </Grid>
  )
}

export default NavFooter
