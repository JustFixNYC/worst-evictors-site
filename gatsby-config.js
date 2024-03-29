if (process.env.ENVIROMENT !== "production") {
  require("dotenv").config();
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST || "cdn.contentful.com"
};

const tracking = {
  gtm: "GTM-NMPT5JP"
};

module.exports = {
  siteMetadata: {
    title: "NYC's Worst Evictors"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "NYC's Worst Evictors during COVID-19",
        short_name: "Worst COVID Evictors",
        start_url: "/",
        background_color: "#242323",
        theme_color: "#242323",
        display: "minimal-ui",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: tracking.gtm,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.worstevictorsnyc.org/`
      }
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-remove-trailing-slashes`,
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig
    },
    {
      resolve: `gatsby-plugin-emotion`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-67069242-7"
      }
    },
    `gatsby-plugin-client-side-redirect`
  ]
};
