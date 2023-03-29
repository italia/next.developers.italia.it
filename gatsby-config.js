module.exports = {
  siteMetadata: {
    name: "Developers Italia",
    hostname: "next.developers.italia.it",
    siteUrl: "https://next.developers.italia.it/",
  },
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/data/`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-jss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-attr",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 740,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
        }
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "jg7pYvEqvM",
        matomoUrl: `https://ingestion.webanalytics.italia.it/`,
        siteUrl: "https://developers.italia.it",
        matomoPhpScript: "matomo.php",
        matomoJsScript: "matomo.js",
        localScript: "/assets/matomo.js",
        enableJSErrorTracking: true,
      },
    },
  ],
};
