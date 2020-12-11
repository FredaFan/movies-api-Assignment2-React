import React from "react";

const HeaderPerson = ({ name, numPeople }) => {
  return (
    <div className="row mt-3">
      <div className="col-md-6 offset-4">
        <h2>
          {`${name}  `}
          <span className="badge badge-pill badge-success">{numPeople}</span>
        </h2>
      </div>
    </div>
  );
};

export default HeaderPerson;