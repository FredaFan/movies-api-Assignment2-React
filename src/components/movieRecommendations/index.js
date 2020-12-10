import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovieRecommendations(movie.id).then(recommendations => {
      setRecommendations(recommendations);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Overview</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {recommendations.map(r => {
            return (

              <tr key={r.id}>
                <td>{r.title}</td>
                <td>{excerpt(r.overview)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/movies/${r.id}`,
                      state: {
                        recommendations: r,
                        movie: movie
                      }
                    }}
                  >
                    Full Details
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};