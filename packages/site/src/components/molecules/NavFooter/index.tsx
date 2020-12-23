import React, {useState, useCallback} from 'react'
import {useColor} from '@store/contexts/color/hooks'
import {useLoop} from '@store/contexts/loop/hooks'
import {Grid, Col} from '@components/atoms/Grid'
import ButtonFullscreen from './ButtonFullscreen'
import LinkRepo from '../LinkRepo'

const NavFooter = () => {
  const [{current: color, contrastColor}] = useColor()
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
          <ButtonFullscreen
            color={color}
            contrastColor={contrastColor}
            transition={transition}
            isActive={isFullscreenEnabled}
            onClick={onToggleIsFullscreenEnabled}
          />
        </Col>
      )}
      <Col flex={1} alignSelf="flex-end">
        <LinkRepo contrastColor={contrastColor} transition={transition} />
      </Col>
    </Grid>
  )
}

export default NavFooter
