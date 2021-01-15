import Link from "next/link";
import React from "react";

class MovieList extends React.Component {
  shoren = (text, maxLenght) => {
    if (text && text.length > maxLenght) {
      return text.substr(0, maxLenght) + "...";
    }
    return text;
  };

  rendermovies(movies) {
    return movies.map((movie) => (
      <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img className="card-img-top" src={movie.image} alt={movie.name} />
            </a>
          </Link>

          <div className="card-body">
            <h4>
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a className="card-title">{movie.name}</a>
              </Link>
            </h4>
            <div className="my-1 movie-genre">{movie.genre}</div>
            <h5>$24.99</h5>
            <p className="card-text">{this.shoren(movie.description, 100)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Rating: {movie.rating}</small>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    const { movies } = this.props;
    return (
      <>
        <div className="row">{this.rendermovies(movies)}</div>
      </>
    );
  }
}

export default MovieList;
