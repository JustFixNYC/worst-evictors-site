import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";
import { Document } from "@contentful/rich-text-types";

import Layout from "../components/layout";

type InfoPageProps = {
  title: string;
  subtitle?: {
    json: Document;
  };
  description: {
    json: Document;
  };
  image?: {
    description?: string;
    sizes: {
      src: string;
    };
  };
};

export const InfoPage: React.FC<InfoPageProps> = ({
  title,
  subtitle,
  description,
  image
}) => (
  <Layout>
    <div className="columns bg-primary text-secondary">
      <div className="column col-4 col-md-12 bg-primary sticky-column d-flex">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          {subtitle &&
            documentToReactComponents(subtitle.json, contentfulOptions)}
        </div>
      </div>
      <div className="column col-8 col-md-12 bg-primary">
        {image && (
          <>
            <div
              className="background-cover-photo"
              style={{
                backgroundImage: `url(${image.sizes.src})`
              }}
            />
            {image.description && (
              <span className="text-assistive">
                Image description: {image.description}
              </span>
            )}
          </>
        )}
      </div>
      <div className="column col-4 col-md-12" />
      <div className="column col-8 col-md-12">
        <div className="rich-text-bulleted-list">
          {documentToReactComponents(description.json, contentfulOptions)}
        </div>
      </div>
    </div>
  </Layout>
);

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAboutPage {
          title
          subtitle {
            json
          }
          description {
            json
          }
          image {
            description
            sizes(maxWidth: 1000) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    `}
    render={data => {
      return <InfoPage {...data.contentfulAboutPage} />;
    }}
  />
);

export default AboutPage;
