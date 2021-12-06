import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulOptions from "../utils/contentful-rich-text-options";
import { Link } from "gatsby";

const evictorPlaceholder = require("../images/evictor-placeholder.png");

// CONTENT MODEL:

// data {
// boro
// rank
// name
// corporation
// description {
//   json
// }
// photo {
//   sizes(maxWidth: 613) {
//     aspectRatio
//     src
//     srcSet
//     sizes
//   }
// }
// photoCaption
// evictions
// boroUnits
// boroFilings
// boroPercentFiled
// boroPercentRs
// citywideEvictions
// citywideUnits
// citywideFilings
// citywidePercentFiled
// citywidePercentRs
// banks
// lawyers
// organizingCta {
//   json
// }
// organizingPhoto1 {
//   fluid {
//     aspectRatio
//     src
//     srcSet
//     sizes
//   }
// }
// organizingPhotoCaption1
// organizingPhoto2 {
//   fluid {
//     aspectRatio
//     src
//     srcSet
//     sizes
//   }
// }
// organizingPhotoCaption2
// organizingPhoto3 {
//   fluid {
//     aspectRatio
//     src
//     srcSet
//     sizes
//   }
// }
// organizingPhotoCaption3
// evictionsMapUrl {
//   evictionsMapUrl
// }
// whoOwnsWhatUrl
// }

const AmongOthersLabel = () => (
  <span className="nobr text-gray-medium text-italic pl-1">(Among Others)</span>
);

type EvictorProps = {
  data: any;
};

const Evictor: React.FC<EvictorProps> = props => {
  const imageURL = props.data.photo
    ? props.data.photo.sizes.src
    : evictorPlaceholder;
  const style = {
    backgroundImage: "url(" + imageURL + ")",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div className="evictor-container" id={props.data.citywideRank}>
      <div className="columns">
        <div className="column col-2 col-sm-4 evictor-rank">
          <div>
            <h1 className={props.data.citywideRank > 9 ? "double-digit" : ""}>
              {props.data.citywideRank}
            </h1>
          </div>
        </div>
        <div className="column col-8 col-sm-8 show-sm">
          <div className="evictor-pic-container">
            <div
              className="evictor-pic s-circle p-centered"
              style={style}
            ></div>
            <small className="caption p-centered text-gray-medium text-center text-italic my-2">
              {props.data.photoCaption}
            </small>
          </div>
        </div>
        <div className="column col-7 col-sm-12">
          <div className="evictor-intro">
            <h5 className="evictor-name text-uppercase text-secondary mb-1">
              {props.data.name}
            </h5>
            <h6 className="evictor-corp text-dark">{props.data.corporation}</h6>
            <h6 className="text-gray-medium text-italic">
              Last year's rank:{" "}
              {props.data.rankLastYear ? (
                <>
                  <sup>#</sup>
                  {props.data.rankLastYear}
                </>
              ) : (
                "N/A"
              )}
            </h6>
          </div>
          <div className="evictor-stats">
            <div className="columns">
              <div className="column col-12 rtc-data">
                <h4 className="eviction-count">
                  <span className="text-primary">
                    {props.data.citywideEvictions}
                  </span>{" "}
                  Evictions
                </h4>
                <div className="secondary-data">
                  <span>
                    <span className="text-primary text-bold mr-1">
                      {props.data.citywideUnits}
                    </span>{" "}
                    families housed
                  </span>
                  <br />
                  <span
                    className="tooltip"
                    data-tooltip="Total from January 2013 to June 2015"
                  >
                    <span className="text-primary text-bold mr-1">
                      {props.data.citywideFilings}
                    </span>{" "}
                    families sued<sup>*</sup>
                  </span>
                  <br />
                  <span>
                    <span className="text-primary text-bold mr-1">
                      {props.data.citywidePercentRs}%
                    </span>{" "}
                    rent stabilized
                  </span>
                  <br />
                  <span
                    className="tooltip"
                    data-tooltip="Landlord's net worth likely much higher."
                  >
                    <span className="text-primary text-bold mr-1">
                      {props.data.estimatedWorth}
                    </span>{" "}
                    paid for buildings<sup>*</sup>
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <span>
                Funded by<span> </span>
                <span className="text-primary text-bold ml-2">
                  {props.data.banks}
                </span>
                <AmongOthersLabel />
              </span>
              <br />
              <span>
                Represented by<span> </span>
                <span className="text-primary text-bold ml-2">
                  {props.data.lawyers}
                </span>
                <AmongOthersLabel />
              </span>
              <br />
              <span>
                Evictions conducted by<span> </span>
                <span className="text-primary text-bold ml-2">
                  {props.data.marshals}
                </span>
                <AmongOthersLabel />
              </span>
            </div>
          </div>
          <div className="btn-group evictor-links">
            {props.data.citywideEvictionsMapUrl &&
              props.data.citywideEvictionsMapUrl.citywideEvictionsMapUrl && (
                <Link
                  to="/map"
                  className="btn btn-outline-primary my-1"
                  state={{
                    iframe:
                      props.data.citywideEvictionsMapUrl
                        .citywideEvictionsMapUrl,
                    mapType: "citywide"
                  }}
                >
                  View on Evictions Map
                </Link>
              )}
            {props.data.whoOwnsWhatUrl && (
              <a
                className="btn btn-outline-primary my-1"
                target="_blank"
                href={props.data.whoOwnsWhatUrl}
              >
                View on Who Owns What
              </a>
            )}
          </div>
          {props.data.citywideListDescription &&
            props.data.citywideListDescription.json &&
            documentToReactComponents(
              props.data.citywideListDescription.json,
              contentfulOptions
            )}
          {props.data.organizingCta ? (
            <span className="get-involved">
              <div
                className="divider text-center"
                data-content="HOW TO GET INVOLVED"
              ></div>
              {documentToReactComponents(
                props.data.organizingCta.json,
                contentfulOptions
              )}
            </span>
          ) : (
            <div />
          )}
        </div>
        <div className="evictor-pic-container column col-3 hide-sm">
          <div className="evictor-pic s-circle p-centered" style={style}></div>
          <small className="caption p-centered text-gray-medium text-center text-italic my-2">
            {props.data.photoCaption}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Evictor;
