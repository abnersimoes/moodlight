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

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isFullscreenSupported, setIsFullscreenSupported] = useState(true)
  const [isBrowser] = useState(getIsBrowser())

  useEffect(() => {
    if (isBrowser) setIsFullscreenSupported(!!document.body.requestFullscreen)
  }, [])

  const onToggleIsFullscreen = useCallback(() => {
    if (isFullscreenSupported) {
      setIsFullscreen(!isFullscreen)

      if (isFullscreen && document?.exitFullscreen) {
        return document.exitFullscreen()
      }

      return document.body.requestFullscreen()
    }
  }, [isFullscreen, isFullscreenSupported])

  return (
    <Grid>
      {isFullscreenSupported && (
        <Col>
          <ButtonFullscreen
            color={color}
            contrastColor={contrast}
            transition={transition}
            isActive={isFullscreen}
            onClick={onToggleIsFullscreen}
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
