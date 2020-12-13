import React, {useCallback} from 'react'
import {useLoop} from '@contexts/loop/hooks'
import {useColor} from '@contexts/color/hooks'
import {Col} from '@components/atoms/Grid'
import FormField from '@components/atoms/FormField'
import * as Styled from '../styled'
import ButtonLoop from './ButtonLoop'

export const fieldName = 'play-time'

const FormGroupPlay = () => {
  const [loopState, setLoopState] = useLoop()
  const [colorState] = useColor()

  const onToggleIsActive = useCallback(() => setLoopState({...loopState, isActive: !loopState.isActive}), [loopState])

  const onSetTime = useCallback(
    ({target: {value: time}}) => {
      setLoopState({...loopState, time})
    },
    [loopState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonLoop colorState={colorState} isActive={loopState.isActive} onClick={onToggleIsActive} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} colorState={colorState} value={loopState.time} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupPlay

// import { Transition } from 'react-transition-group';

// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms linear`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered:  { opacity: 1 },
//   exiting:  { opacity: 0 },
//   exited:  { opacity: 0 },
// };

// const Fade = ({ in: inProp }) => (
//   <Transition in={inProp} timeout={duration}>
//     {state => (
//       <div style={{
//         ...defaultStyle,
//         ...transitionStyles[state]
//       }}>
//         I'm a fade Transition!
//       </div>
//     )}
//   </Transition>
// );
