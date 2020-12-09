import React from 'react'
import {Formik, Form} from 'formik'
import Logo from '@static/svg/logo.svg'
import * as Styled from './styled'
import {Col} from '../Grid'
import FormTransition, {fieldName as transitionFieldName} from './Form/FormTransition'

interface NavProps {
  color: string
}

function Nav({color}: NavProps) {
  return (
    <Styled.NavWrapper>
      <Formik
        initialValues={{[transitionFieldName]: ''}}
        // validationSchema={validationSchema}
        onSubmit={() => console.log('tei')}
        // validateOnBlur={false}
        enableReinitialize>
        <Form>
          <FormTransition color={color} />

          <Styled.Grid>
            <Col>
              <Logo />
            </Col>
          </Styled.Grid>
        </Form>
      </Formik>
    </Styled.NavWrapper>
  )
}

export default Nav
