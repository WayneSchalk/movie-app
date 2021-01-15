import React from "react";
import { useRouter } from "next/router";
import { deleteMovie, getMovieById } from "../../../Actions/Index";
import Link from "next/link";
const Movie = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container bg-light shadow-sm mb-5 rounded">
      <div className="row p-lg-5">
        <div className="col-lg-12 col-md-12 ">
          <h1 className="display-4">{movie.name}</h1>
          <p className="lead text-muted">{movie.description}</p>
          <hr className="my-4" />
          <p>{movie.longDesc}</p>
          <div className="border">{movie.genre}</div>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Learn More
            </a>
          </p>
          <p>
            <Link href="/movies/[id]/Edit" as={`/movies/${movie.id}/Edit`}>
              <button className="btn btn-warning my-1">Edit Movie</button>
            </Link>
          </p>
          <p>
            <button
              onClick={() => {
                handleDeleteMovie(movie.id);
              }}
              className="btn btn-danger my-1">
              Delete Movie
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default Movie;
