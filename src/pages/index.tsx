import React, {useState} from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Nav from '../components/Nav'

function IndexPage() {
  const [color, setColor] = useState('#efa21b')

  return (
    <Layout color={color}>
      <SEO title="home" />
      <Nav color={color} />
    </Layout>
  )
}

export default IndexPage
