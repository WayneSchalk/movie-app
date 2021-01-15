import React, { useState } from "react";
import Modal from "./Modal";
import MovieCreateForm from "./MovieCreateForm";
import { createMovie } from "../Actions/Index";
import { useRouter } from "next/router";

const SideMenu = (props) => {
  const { categories, changeCategory } = props;
  const router = useRouter();

  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={(e) => (modal = e)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>

      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((categorie) => (
          <a
            onClick={() => changeCategory(categorie.name)}
            href="#"
            key={categorie.id}
            className={`list-group-item ${
              props.activeCategory === categorie.name ? "active" : ""
            }`}>
            {categorie.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
