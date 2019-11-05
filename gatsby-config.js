module.exports = {
  siteMetadata: {
    title: 'API Test Rick & Morty',
    description: 'API Test Rick & Morty',

    siteUrl: 'https://randm-api-test.now.sh',

    themeColor: '#fff',
    msapplicationTileColor: '#fff',

    ogType: 'website',
    ogSiteName: 'API Test Rick & Morty',
    ogLocale: 'ru_Ru',
  },

  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://randm-api-test.now.sh/',
        sitemap: null,
        policy: [{ userAgent: '*', disallow: ['/404', '/404.js'] }],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "RANDMAPI",
        fieldName: "randmapi",
        url: "https://rickandmortyapi.com/graphql/",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
