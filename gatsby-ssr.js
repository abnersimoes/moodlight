import wrapWithProvider from './wrap-with-provider'

export const onPreRenderHTML = ({getHeadComponents, replaceHeadComponents}) => {
  const headComponents = getHeadComponents()

  headComponents.sort((a, b) => {
    if (a.props && a.props['data-react-helmet']) {
      return 0
    }
    return 1
  })

  replaceHeadComponents(headComponents)
}

export const wrapRootElement = wrapWithProvider
