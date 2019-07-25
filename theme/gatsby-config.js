/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, 'content')];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

module.exports = {
  siteMetadata: {
    title: 'Ghost',
    description: 'The professional publishing platform',
    coverImage: 'img/blog-cover.jpg',
    logo: 'img/ghost-logo.png',
    lang: 'en',
    siteUrl: 'https://gatsby-casper.netlify.com', // full path to blog - no ending slash
    facebook: 'https://www.facebook.com/ghost',
    twitter: 'https://twitter.com/tryghost',
    showSubscribe: false, // subscribe button in site nav and home page
    mailchimpAction: '', // 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
    mailchimpName: '', // 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
    mailchimpEmailFieldName: '', // 'MERGE0',
    googleSiteVerification: '', // 'GoogleCode',
    footer: 'is based on Gatsby Casper',
    postsPerPage: 6,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(process.cwd(), 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 90,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-casper.netlify.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
  ],
};
