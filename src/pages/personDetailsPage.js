import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PeoplePageTemplate from "../components/templatePersonPage";

import usePerson from "../hooks/usePerson";

const PersonPage = props => {
  const { id } = props.match.params;
  console.log(id)
  const [person] = usePerson(id)  // NEW
  return (
    <>
    {person ? (
      <>
        <PeoplePageTemplate person={person}>
          <PersonDetails person={person} />
        </PeoplePageTemplate>
       

      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);