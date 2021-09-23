require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Gatsby Blog Demo",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: process.env.DATO_USE_PREVIEW_API === 'TRUE',
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
