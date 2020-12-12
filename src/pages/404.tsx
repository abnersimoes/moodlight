import React from 'react'
import TemplateMain from '@components/templates/TemplateMain'
import SEO from '@components/atoms/Seo'

function NotFoundPage() {
  return (
    <TemplateMain>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </TemplateMain>
  )
}

export default NotFoundPage
