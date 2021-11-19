/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/** Redirect donation page to external portal */
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  createRedirect({
    fromPath: "/evictors-list",
    toPath: "/evictors-list/citywide",
    isPermanent: true
  });
  createRedirect({
    fromPath: "/evictors-list/rtc",
    toPath: "/evictors-list/citywide",
    isPermanent: true
  });
};
