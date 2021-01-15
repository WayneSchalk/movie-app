import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Movie List
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link href="/">
              <a className="nav-link active">Home</a>
            </Link>
            <Link href="/About">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/Services">
              <a className="nav-link">Services</a>
            </Link>
            <Link href="/Contact">
              <a className="nav-link">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
