declare module '*.woff' {
  const fileName: string
  export default fileName
}

declare module '*.woff2' {
  const fileName: string
  export default fileName
}

declare module '*.mp3' {
  const fileName: string
  export default fileName
}

declare module '*.jpg' {
  const fileName: string
  export default fileName
}

declare module '*.png' {
  const fileName: string
  export default fileName
}

declare module '*.svg' {
  import React = require('react')

  export const content: React.FunctionComponent<React.SVGProps<{}>>

  export default content
}
