import React, { useEffect, useState } from "react";
import { getMovieCast } from "../../api/tmdb-api";



export default ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movie.id).then(cast => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[movie.id]);
  return (
    console.log(cast),
    <table className="table table-striped table-bordered table-hover">
     <thead>
        <tr>
          <th scope="col">Cast Name</th>
          <th scope="col">Character</th>
          <th scope="col">Popularity</th>
          <th scope="col">Known department</th>
          <th scope="col">Profile</th>
          
        </tr>
      </thead>
      <tbody>
      {cast&&cast.map(ca => {
            return (

              <tr key={ca.id}>
                <td>{ca.name}</td>
                <td>{ca.character}</td>
                <td>{ca.popularity}</td>
                <td>{ca.known_for_department}</td>
                <td>
                 
                  
                  
                  <img
            src={
              ca.profile_path
                ? `https://image.tmdb.org/t/p/w500/${ca.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={ca.name}
          />
                  
                  
                </td>
                
                
              </tr>
            );
          })}
                
           
          
      </tbody>
    </table>
  );
};