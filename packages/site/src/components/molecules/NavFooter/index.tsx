import React, {useState, useCallback, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {getIsBrowser} from '@store/helpers'
import {Grid, Col} from '@components/atoms/Grid'
import ButtonFullscreen from './ButtonFullscreen'
import LinkRepo from '../LinkRepo'

const NavFooter = () => {
  const {
    colors: {current: color, contrast},
    loop: {transition},
  } = useSelector((state: RootState) => state)

  const [isFullscreenActive, setIsFullscreenActive] = useState(false)
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(true)
  const [isBrowser] = useState(getIsBrowser())

  useEffect(() => {
    if (isBrowser) {
      const isFullscreenAvailable = document && document?.fullscreenEnabled

      setIsFullscreenSupported(isFullscreenAvailable)

      document.body.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) setIsFullscreenActive(false)
      })
    }
  }, [])

  const onToggleIsFullscreen = useCallback(() => {
    if (isFullscreenSupported) {
      setIsFullscreenActive(!isFullscreenActive)

      if (isFullscreenActive) {
        return document.exitFullscreen()
      }

      return document.body.requestFullscreen()
    }
  }, [isFullscreenSupported, isFullscreenActive])

  return (
    <Grid>
      {isFullscreenSupported && (
        <Col>
          <ButtonFullscreen
            color={color}
            contrastColor={contrast}
            transition={transition}
            isActive={isFullscreenActive}
            onClick={onToggleIsFullscreen}
            tabIndex={14}
          />
        </Col>
      )}
      <Col flex={1} alignSelf="flex-end">
        <LinkRepo contrastColor={contrast} transition={transition} />
      </Col>
    </Grid>
  )
}

export default NavFooter
