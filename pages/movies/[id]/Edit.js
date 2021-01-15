import React from "react";
import Router from "next/router";
import { getMovieById, updateMovie } from "../../../Actions/Index";
import MovieCreateForm from "../../../components/MovieCreateForm";

class EditMovie extends React.Component {
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);
    return { movie };
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      Router.push("/movies/[id]", `/movies/${movie.id}`);
    });
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="container mb-5">
        <h1>Edit Movie</h1>
        <MovieCreateForm
          submitBtn="Update"
          handleFormSubmit={this.handleUpdateMovie}
          initialData={movie}
        />
      </div>
    );
  }
}

export default EditMovie;
