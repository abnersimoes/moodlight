import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNav} from '@store/contexts/nav/hooks'
// import Form from '@components/molecules/Form'
// import NavFooter from '@components/molecules/NavFooter'
// import * as Styled from './styled'

function Nav() {
  const [{isActive}] = useNav()

  console.log({isActive})

  return (
    <View>
      <Text>UEPA</Text>
    </View>
  )
}

export default Nav
