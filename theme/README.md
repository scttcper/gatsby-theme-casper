# Gatsby Theme Casper

Demo: https://gatsby-casper-theme.netlify.com/

This is a Gatsby theme that, when installed, creates a static blog. A port of [Casper](https://github.com/TryGhost/Casper) v2 a theme from [Ghost](https://ghost.org/) for [GatsbyJS](https://www.gatsbyjs.org/) using [TypeScript](https://www.typescriptlang.org/). This repo and theme was based on the gatsby starter theme [gatsby-casper](https://github.com/scttcper/gatsby-casper).

### 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the gatsby-theme-casper starter.

    ```sh
    # create a new Gatsby site using the gatsby-theme-casper starter
    gatsby new my-theme https://github.com/scttcper/gatsby-theme-casper
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-theme/
    gatsby develop
    ```

### Configuration

```js
module.exports = { 
  siteMetadata: {
    title: 'Ghost',
    description: 'The professional publishing platform',
    coverImage: 'img/blog-cover.jpg',
    logo: 'img/ghost-logo.png',
    /**
     * Specifying a valid BCP 47 language helps screen readers announce text properly.
     * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
     */
    lang: 'en',
    /**
     * blog full path, no ending slash!
     */
    siteUrl: 'https://gatsby-casper.netlify.com',
    /**
     * full url, no username, optional
     */
    facebook: 'https://www.facebook.com/ghost',
    /**
     * full url, no username, optional
     */
    twitter: 'https://twitter.com/tryghost'
    /**
     * hide or show all email subscribe boxes
     */
    showSubscribe: true
    /**
     * create a list on mailchimp and then create an embeddable signup form. this is the form action
     */
    mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
    /**
     * this is the hidden input field name
     */
    mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
    /**
     * name and id of the mailchimp email field
     */
    mailchimpEmailFieldName: 'MERGE0',
    /**
    /**
     * Meta tag for Google Webmaster Tools
     */
    googleSiteVerification: 'GoogleCode',
    /**
    /**
     * Appears alongside the footer, after the credits
     */
    footer: 'is based on Gatsby Casper',
    /**
     * adjust posts per page in pagination
     */
    postsPerPage: 6,
  },
}

```

### Progress

- [x] emotion / component styles
- [x] home page
- [x] tag page
- [x] author page
- [x] blog page
  - [x] subscribe form - using [mailchimp](https://mailchimp.com)
  - [ ] full width images in markdown? - not sure if possible
  - [ ] multiple post authors
  - [ ] floating reading progress bar
- [x] 404 page
- [x] subscribe modal/overlay
- [x] rss feed
- [x] polish ✨
  - [x] meta tags
  - [x] page titles
  - [x] pagination
