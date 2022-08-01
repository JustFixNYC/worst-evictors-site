<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Right To Counsel NYC Coalition's Worst Evictors Website
</h1>

This repository contains the Right To Counsel (RTC) NYC Coalition's Worst Evictors Website.

It is based on a [Gatsby starter](https://github.com/fhavrlent/gatsby-contentful-typescript-starter). Almost all of the content is pulled from [Contentful](https://www.contentful.com/).


## 🚀 Quick start

1. **Set Contentful API keys.**

  Copy **`.env.sample`** to **`.env`** and set your Contentful API variables. To grab these variables, make an account and create a content space with [Contentful](https://www.contentful.com/). 

2. **Install dependencies.**

  Run `yarn` to install all dependencies.

3. **Start developing.**

  Run `yarn develop` to start developing.

  Your site is now running at `http://localhost:8000`!

  *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

4. **Edit some files!**

  Open the the repository's root directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real time!

## Docker setup

You can also run the site using Docker. Create an `.env` file as per the quick start instructions, but then run:

```
docker-compose run app yarn --frozen-lockfile
docker-compose up
```

Then visit `http://localhost:8000`!

## Deployment 

  We deploy our version of the site using [Netlify](https://www.netlify.com/), which links directly to this repo and deploys on commits to the master branch. To use Netlify in deploying your own version, follow this [step-by-step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).
  
## Code of Conduct

  Read about JustFix's code of conduct as an organization on our [Mission page](https://www.justfix.org/our-mission/).