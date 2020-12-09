import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../store/reducers'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Nav from '../components/Nav'

function IndexPage() {
  const color = useSelector(({colors}: RootState) => colors)

  return (
    <Layout color={color.current}>
      <SEO title="home" />
      <Nav color={color.current} />
    </Layout>
  )
}

export default IndexPage
