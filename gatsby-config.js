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
          '@static': './static',
          '@contexts': './src/contexts',
          '@components': './src/components',
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
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/img/icon-manifest.png',
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
