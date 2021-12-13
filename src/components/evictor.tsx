import React from "react";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import contentfulOptions from "../utils/contentful-rich-text-options";
import BackgroundImage from "gatsby-background-image";

import "../styles/evictors-list.scss";

import { OutboundLink } from "../components/outbound-link";

const AddAmongOthers = (array: string[]) => {
  const lastElem = array.slice(-1)[0] + " (Among Others)";
  return array.slice(0, -1).concat([lastElem]);
};

const FormatListAsArray = (list: string) => {
  const rawArray = list.split(",").map(item => item.trim());
  return AddAmongOthers(rawArray);
};

const FormatPublicFundingSources = (sources: string[]) => {
  if (sources.includes("Other")) {
    const mainSources = sources.filter(s => s !== "Other");
    return !!mainSources.length
      ? AddAmongOthers(mainSources)
      : ["Other (not HPD or HDC)"];
  } else return sources;
};

const FormatBusinessAddress = (addr: string) => {
  const addressPartsAsArray = addr.split(" ");
  const formattedAddress = addressPartsAsArray.reduce((address, part) => {
    if (/[a-zA-Z]/.test(part.charAt(0)) && part !== "NY" && part !== "CT") {
      return (
        address +
        " " +
        part.charAt(0).toUpperCase() +
        part.toLowerCase().slice(1)
      );
    } else return address + " " + part.toUpperCase();
  }, "");
  return formattedAddress;
};

type EvictorProps = {
  content: {
    citywideRank: number;
    rankLastYear: number;
    name: string;
    corporation: string;
    primaryBusinessAddress: string;
    photo: {
      fluid: any;
    };
    photoCaption: string;
    citywideEvictions: number;
    pastExecutedEvictions: number;
    citywideUnits: number;
    citywidePercentRs: number;
    banks: string;
    lawyers: string;
    subsidies: string;
    publicFundingType: string[];
    estimatedWorth: string;
    citywideEvictionsMapUrl: {
      citywideEvictionsMapUrl: string;
    };
    whoOwnsWhatUrl: string;
    citywideListDescription: {
      json: Document;
    };
  };
};

const EvictorProfile: React.FC<EvictorProps> = ({ content }) => (
  <section
    className="bg-primary evictor-profile"
    key={content.citywideRank}
    id={content.citywideRank.toString()}
  >
    <div className="columns text-secondary">
      <div className="column col-4 col-xl-6 col-lg-12 sticky-column-desktop full-height-container-desktop">
        <div className="full-height-container-desktop">
          <div className="eyebrow rank">{content.citywideRank}.</div>
          {content.rankLastYear && (
            <div className="eyebrow">Last Year: {content.rankLastYear}</div>
          )}
          <br />
          <span className="text-bold">
            <h1>{content.name}</h1>
            <h2>{content.corporation}</h2>
            <br />
            <br />
            <h2>{content.citywideEvictions} households sued for eviction</h2>
          </span>
          <p>{content.pastExecutedEvictions} evictions executed since 2017</p>
          <p>{content.citywideUnits} families housed</p>
          <p>{content.citywidePercentRs}% rent stabilized</p>
          <p>{content.estimatedWorth || "Unknown amount"} paid for buildings</p>
          <br />
        </div>
        <Link
          to="/map"
          className="btn btn-primary"
          state={{
            iframe: content.citywideEvictionsMapUrl.citywideEvictionsMapUrl,
            mapType: "citywide"
          }}
        >
          See Map of Portfolio
        </Link>
        <OutboundLink href={content.whoOwnsWhatUrl} className="btn btn-primary">
          See if your building is in this portfolio
        </OutboundLink>
      </div>
      <div className="column col-8 col-xl-6 col-lg-12">
        <BackgroundImage
          className="background-cover-photo"
          fluid={content.photo.fluid}
        />

        <div className="eyebrow text-right">
          <p>Photo: {content.photoCaption}</p>
        </div>
        <br />
        <p>
          <span className="text-bold text-uppercase">Funded By</span>
          <br />
          {FormatListAsArray(content.banks).map((bank: string, i: number) => (
            <li key={i}>{bank}</li>
          ))}
        </p>
        <p>
          <span className="text-bold text-uppercase">Represented by</span>
          <br />
          {content.lawyers} (Among Others)
          <br />
        </p>
        <p>
          <span className="text-bold text-uppercase">
            Public subsidy programs
          </span>
          <br />
          {!!content.subsidies ? (
            <>
              {FormatListAsArray(content.subsidies).map(
                (subsidy: string, i: number) => (
                  <li key={i}>{subsidy}</li>
                )
              )}
            </>
          ) : (
            "None"
          )}
        </p>
        <p>
          <span className="text-bold text-uppercase">
            Public funding sources
          </span>
          <br />
          {!!content.publicFundingType ? (
            <>
              {FormatPublicFundingSources(content.publicFundingType).map(
                (fundingType: string, i: number) => (
                  <li key={i}>{fundingType}</li>
                )
              )}
            </>
          ) : (
            "None"
          )}
        </p>
        <p>
          <span className="text-bold text-uppercase">
            Primary business address
          </span>
          <br />
          {FormatBusinessAddress(content.primaryBusinessAddress)}
          <br />
        </p>
        <br />
        {content.citywideListDescription &&
          content.citywideListDescription.json &&
          documentToReactComponents(
            content.citywideListDescription.json,
            contentfulOptions
          )}
        <br />
        <Link to="/" className="btn btn-primary">
          Back to worst evictors list
        </Link>
      </div>
    </div>
  </section>
);

export default EvictorProfile;
