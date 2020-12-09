import React, {useState} from 'react'
import {Formik, Form} from 'formik'
import Logo from '@static/svg/logo.svg'
import * as Styled from './styled'
import {Col} from '../Grid'
import FormGroupTransition, {fieldName as transitionFieldName} from './Form/FormGroupTransition'
import FormGroupFadeOut, {fieldName as fadeOutFieldName} from './Form/FormGroupFadeOut'

interface NavProps {
  color: string
}

function Nav({color}: NavProps) {
  const [initialValues] = useState({[transitionFieldName]: '12', [fadeOutFieldName]: '2'})

  return (
    <Styled.NavWrapper>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={() => console.log('tei')}
        // validateOnBlur={false}
        enableReinitialize>
        {({values}) => {
          const {[transitionFieldName]: transition, [fadeOutFieldName]: fadeOut} = values

          return (
            <Form>
              <FormGroupTransition color={color} value={transition} />
              <FormGroupFadeOut color={color} value={fadeOut} />

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
