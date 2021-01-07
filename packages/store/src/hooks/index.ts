import {useNav} from './nav'
import {useColors} from './colors'
import {useLoop} from './loop'
import {useBlackout} from './blackout'

export {useNav, useColors, useLoop, useBlackout}

export default () => {
  useNav()
  useColors()
  useLoop()
  useBlackout()
}
