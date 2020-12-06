import {createGlobalStyle} from 'styled-components'
import {normalize} from 'polished'
import OswaldLight from '@static/fonts/Oswald-Light.woff'
import OswaldLight2 from '@static/fonts/Oswald-Light.woff2'
import OswaldRegular from '@static/fonts/Oswald-Regular.woff'
import OswaldRegular2 from '@static/fonts/Oswald-Regular.woff2'
import OswaldBold from '@static/fonts/Oswald-Bold.woff'
import OswaldBold2 from '@static/fonts/Oswald-Bold.woff2'

export default createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: 'Oswald Light';
    src: local('Oswald Light'), local('OswaldLight'), url(${OswaldLight2}) format('woff2'), url(${OswaldLight}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Oswald Regular';
    src: local('Oswald Regular'), local('OswaldRegular'), url(${OswaldRegular2}) format('woff2'), url(${OswaldRegular}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Oswald Bold';
    src: local('Oswald Bold'), local('OswaldBold'), url(${OswaldBold2}) format('woff2'), url(${OswaldBold}) format('woff');
    font-display: fallback;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    line-height: 1.5;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }

  body {
    font-size: 16px;
    color: white;
    font-family: 'Oswald Bold', Arial, sans-serif;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%
  }

  // ul,
  // ol {
  //   margin: 0;
  //   padding: 0;
  //   list-style: none;
  // }

  // a {
  //   color: inherit;
  //   cursor: pointer;
  // }

  // button {
  //   background-color: transparent;
  //   color: inherit;
  //   border-width: 0;
  //   padding: 0;
  //   cursor: pointer;
  // }

  // figure {
  //   margin: 0;
  // }

  // input {
  //   line-height: normal;
  // }

  // input::-moz-focus-inner {
  //   border: 0;
  //   padding: 0;
  //   margin: 0;
  // }

  // h1, h2, h3, h4, h5, h6{
  //   margin: 0;
  //   font-size: inherit;
  //   font-weight: inherit;
  // }

  // p {
  //   margin: 0;
  // }

  // cite {
  //   font-style: normal;
  // }

  // fieldset {
  //   border-width: 0;
  //   padding: 0;
  //   margin: 0;
  // }
`
