import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/Seo'
import Nav from '@components/Nav'

function IndexPage() {
  return (
    <Layout>
      <SEO title="home" />
      <Nav />
    </Layout>
  )
}

export default IndexPage
