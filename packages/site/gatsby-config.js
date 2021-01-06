module.exports = {
  siteMetadata: {
    title: '✨',
    description: 'Colors loop application',
    author: '@absimoess',
    url: 'https://moodlight.me',
    image: '/img/og-image.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@store': '../store/src',
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
        name: 'moodlight',
        short_name: 'moodlight',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'fullscreen',
        icon: 'static/img/icon-manifest.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
