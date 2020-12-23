module.exports = {
  siteMetadata: {
    title: '🎨',
    description: 'Application with color loop control',
    author: '@absimoess',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@contexts': '../contexts/src',
          '@components': './src/components',
          '@static': './static',
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/svg/,
          options: {
            removeViewBox: true,
          },
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'static/img/icon-manifest.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
