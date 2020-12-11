import React, { useEffect, useState } from "react";
import { getMovieCrew } from "../../api/tmdb-api";



export default ({ movie }) => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    getMovieCrew(movie.id).then(crew => {
      setCrew(crew);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[movie.id]);
  return (
    console.log(crew),
    <table className="table table-striped table-bordered table-hover">
     <thead>
        <tr>
          <th scope="col">Crew Name</th>
          <th scope="col">Job</th>
          <th scope="col">Popularity</th>
          <th scope="col">Known department</th>
          <th scope="col">Profile</th>
          
        </tr>
      </thead>
      <tbody>
      {crew&&crew.map(cr => {
            return (

              <tr key={cr.id}>
                <td>{cr.name}</td>
                <td>{cr.job}</td>
                <td>{cr.popularity}</td>
                <td>{cr.known_for_department}</td>
                <td>
                 
                  
                  
                  <img
            src={
              cr.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cr.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={cr.name}
          />
                  
                  
                </td>
                
                
              </tr>
            );
          })}
                
           
          
      </tbody>
    </table>
  );
};