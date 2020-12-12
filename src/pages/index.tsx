import React from 'react'
import TemplateMain from '@components/templates/TemplateMain'
import Nav from '@components/organisms/Nav'
import SEO from '@components/atoms/Seo'

function IndexPage() {
  return (
    <TemplateMain>
      <SEO title="home" />
      <Nav />
    </TemplateMain>
  )
}

export default IndexPage
