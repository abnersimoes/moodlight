import React from 'react'
import TemplateMain from '@components/templates/TemplateMain'
import Nav from '@components/organisms/Nav'
import SEO from '@components/atoms/Seo'
import useStoreHooks from '@store/hooks'

function IndexPage() {
  useStoreHooks()

  return (
    <TemplateMain>
      <SEO title="MOODLIGHT" />
      <Nav />
    </TemplateMain>
  )
}

export default IndexPage
