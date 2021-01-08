import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import GlobalStore from '../store/src'
// import {NavContextProvider} from '../store/src/contexts/nav'
import Nav from './src/components/organisms/Nav'

export default function App() {
  return (
    <GlobalStore>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <NavContextProvider> */}
        <Nav />
        {/* </NavContextProvider> */}
      </View>
    </GlobalStore>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
