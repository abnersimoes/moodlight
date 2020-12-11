import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/Seo'
import Nav from '@components/Nav'

function IndexPage() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const fadeOutValue = parseInt(value)

  //   if (fadeOutValue >= minValue && isFadeOut) {
  //     const interval = setInterval(() => console.log('te'), fadeOutValue * 1000)
  //     setIntervalFadeOut(interval)
  //   } else {
  //     clearInterval(intervalFadeOut)
  //     setIntervalFadeOut(null)
  //   }
  // }, [value, isFadeOut])

  return (
    <Layout>
      <SEO title="home" />
      <Nav />
    </Layout>
  )
}

export default IndexPage
