import React from 'react'
import Logo from '@static/svg/logo.svg'
import * as Styled from './styled'
import FormGroupTransition from '../Form/FormGroupTransition'
// import FormGroupFadeOut, {fieldName as fadeOutFieldName} from './Form/FormGroupFadeOut'

function Nav() {
  return (
    <Styled.NavWrapper>
      <FormGroupTransition />
    </Styled.NavWrapper>
  )
}

// function Nav({color, loop, fadeOut}: NavProps) {
//   const [initialValues] = useState({[transitionFieldName]: loop.time, [fadeOutFieldName]: fadeOut.time})

//   return (
//     <Styled.NavWrapper>
//       <Formik
//         initialValues={initialValues}
//         // validationSchema={validationSchema}
//         onSubmit={() => console.log('tei')}
//         // validateOnBlur={false}
//         enableReinitialize>
//         {({values}) => {
//           const {[transitionFieldName]: transition, [fadeOutFieldName]: fadeOutValue} = values

//           return (
//             <Form>
//               <FormGroupTransition color={color} control={loop} value={transition} />
//               <FormGroupFadeOut color={color} control={fadeOut} value={fadeOutValue} />

//               <Styled.Grid>
//                 <Col>
//                   <Logo />
//                 </Col>
//               </Styled.Grid>
//             </Form>
//           )
//         }}
//       </Formik>
//     </Styled.NavWrapper>
//   )
// }

export default Nav
