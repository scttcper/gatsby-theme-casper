/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: ["gatsby-theme-casper"],
  siteMetadata: {
    title: 'Ghost',
    description: 'The professional publishing platform',
    coverImage: 'img/blog-cover.jpg',
    logo: 'img/ghost-logo.png',
    lang: 'en',
    siteUrl: 'https://gatsby-casper.netlify.com',
    facebook: 'https://www.facebook.com/ghost',
    twitter: 'https://twitter.com/tryghost',
    showSubscribe: true,
    mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
    mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
    mailchimpEmailFieldName: 'MERGE0',
    googleSiteVerification: 'GoogleCode',
    footer: 'is based on Gatsby Casper',
    postsPerPage: 6,
  },
}
