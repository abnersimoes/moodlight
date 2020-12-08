import React, {useState} from 'react'
import {Formik, Form} from 'formik'
import Logo from '@static/svg/logo.svg'
import * as Styled from './styled'
import TransitionButton from './Form/TransitionButton'
import FormField from './Form/FormField'

interface NavProps {
  color: string
}

function Nav({color}: NavProps) {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <Styled.NavWrapper>
      <Formik
        initialValues={{loop: ''}}
        // validationSchema={validationSchema}
        onSubmit={() => console.log('tei')}
        // validateOnBlur={false}
        enableReinitialize>
        <Form>
          <Styled.FlexWrapper>
            <TransitionButton color={color} isActive={isPlaying} onClick={() => setIsPlaying(!isPlaying)} />
            <FormField name="loop" />
          </Styled.FlexWrapper>
        </Form>
      </Formik>
      <Logo />
    </Styled.NavWrapper>
  )
}

export default Nav
