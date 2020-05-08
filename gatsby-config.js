/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },	
	{
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-gatsby-lj.pantheonsite.io/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
        secret: "ec64445c-5a98-4462-b4a9-d2b6d0ca0422",
        basicAuth: {
          username: "restws.admin",
          password: "admin123",
        },
      },
    },
  ],
}
