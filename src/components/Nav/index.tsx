import React, {useState} from 'react'
import {Formik, Form} from 'formik'
import Logo from '@static/svg/logo.svg'
import * as Styled from './styled'
import {Col} from '../Grid'
import {ControlProps} from './Form/types'
import FormGroupTransition, {fieldName as transitionFieldName} from './Form/FormGroupTransition'
import FormGroupFadeOut, {fieldName as fadeOutFieldName} from './Form/FormGroupFadeOut'

interface NavProps {
  color: string
  loop: ControlProps
  fadeOut: ControlProps
}

function Nav({color, loop, fadeOut}: NavProps) {
  const [initialValues] = useState({[transitionFieldName]: loop.time, [fadeOutFieldName]: fadeOut.time})

  return (
    <Styled.NavWrapper>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={() => console.log('tei')}
        // validateOnBlur={false}
        enableReinitialize>
        {({values}) => {
          const {[transitionFieldName]: transition, [fadeOutFieldName]: fadeOutValue} = values

          return (
            <Form>
              <FormGroupTransition color={color} control={loop} value={transition} />
              <FormGroupFadeOut color={color} control={fadeOut} value={fadeOutValue} />

              <Styled.Grid>
                <Col>
                  <Logo />
                </Col>
              </Styled.Grid>
            </Form>
          )
        }}
      </Formik>
    </Styled.NavWrapper>
  )
}

export default Nav
