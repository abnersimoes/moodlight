import {useNav} from './nav'
import {useColors} from './colors'
import {useLoop} from './loop'
import {useBlackout} from './blackout'
import {useSaturate} from './saturate'

export {useNav, useColors, useLoop, useBlackout}

export default () => {
  useNav()
  useColors()
  useLoop()
  useBlackout()
  useSaturate()
}
