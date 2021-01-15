import React, { useState } from "react";

import Carousel from "../components/Carousel";

import MovieList from "../components/MovieList";
import SideMenu from "../components/SideMenu";
import { getCategories, getMovies } from "../Actions/Index";

const Home = (props) => {
  const { images, categories, movies } = props;
  const [filter, setFilter] = useState("all");
  const changeCategory = (category) => {
    setFilter(category);
  };
  const filterMovies = (movies) => {
    if (filter === "all") {
      return movies;
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter);
    });
  };
  return (
    <div className="home-page">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
              activeCategory={filter}
              changeCategory={changeCategory}
              categories={categories}
            />
          </div>
          <div className="col-lg-9">
            <Carousel images={images} />
            {/* {error && <div className="alert alert-danger">{error}</div>} */}

            <h1> Displaying {filter} movies</h1>

            <MovieList movies={filterMovies(movies) || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      url: movie.banner,
      name: movie.name,
    };
  });
  return { movies, images, categories };
};

export default Home;

// //
// class Home extends React.Component {

//   static async getInitialProps() {
//     const movies = await getMovies();
//     return { movies };
//   }

//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     movies: [],
//   //     error: "",
//   //   };
//   // }

//   //is called only on client (browser)
//   // componentDidMount() {
//   //   getMovies()
//   //     .then((movies) => {
//   //       this.setState({ movies });
//   //     })
//   //     .catch((error) => {
//   //       this.setState({ error });
//   //     });
//   // }

//   render() {
//     const { movies } = this.props;
//     return (
//       <div>
//         <Head>
//           <title>Movie List</title>
//           <link
//             rel="stylesheet"
//             href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//             crossOrigin="anonymous"
//           />
//           <script
//             src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//             integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//             crossOrigin="anonymous"></script>
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//             integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//             crossOrigin="anonymous"></script>
//           <script
//             src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//             integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//             crossOrigin="anonymous"></script>
//         </Head>
//         <Navbar />
//         <div className="home-page">
//           <div className="container ">
//             <div className="row">
//               <div className="col-lg-3">
//                 <SideMenu />
//               </div>
//               <div className="col-lg-9">
//                 <Carousel />
//                 {/* {error && <div className="alert alert-danger">{error}</div>} */}
//                 <MovieList movies={movies} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />

//         <style jsx>
//           {`
//             .home-page {
//               padding-top: 80px;
//             }
//           `}
//         </style>
//       </div>
//     );
//   }
// }
