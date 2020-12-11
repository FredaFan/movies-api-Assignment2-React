import React from "react";
import HeaderPerson from '../headerPerson'
import "./personPage.css";

const TemplatePersonPage = ({ person, children }) => {
  return (
    <>
      <HeaderPerson person={person} />
      <div className="row">
        <div className="col-3">
          <img
            src={
                person.profile_path
                ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                : "./person-profile-placeholder.png"
            }
            className="person"
            alt={person.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePersonPage;