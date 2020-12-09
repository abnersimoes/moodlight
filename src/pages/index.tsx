import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store/reducers'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Nav from '../components/Nav'

function IndexPage() {
  const {colors, loop, fadeOut} = useSelector((state: RootState) => state)

  return (
    <Layout color={colors.current}>
      <SEO title="home" />
      <Nav color={colors.current} loop={loop} fadeOut={fadeOut} />
    </Layout>
  )
  return null
}

export default IndexPage
