import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Biography</h4>
      <p>{person.biography}</p>
      <ul className="list-group list-group-horizontal">
       
        <li key="rdh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rdv" className="list-group-item ">
          {person.birthday}
        </li>
        
      </ul>

      <ul className="list-group list-group-horizontal">
       
        <li key="rdh" className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        <li key="rdv" className="list-group-item ">
          {person.place_of_birth}
        </li>
        
      </ul>
      

      <ul className="list-group list-group-horizontal">
       
       <li key="aka" className="list-group-item list-group-item-dark">
         Also Known As
       </li>
       <li key="akap" className="list-group-item ">
         {person.also_known_as}
       </li>
       
     </ul>
     
      
    </>
  );
};
