import Card from "./Card";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { Fragment, useEffect } from "react";
import { getAllMovies } from "../redux/dispatchers/allMoviesDispatcher";

function Schedule() {
  const dispatch = useAppDispatch();

  const { movies } = useAppSelector((state) => state.allMovies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <div>
      <section id="schedule" className="schedule">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Movies for you</h4>
          </div>
          <div className="row"></div>
        </div>
        <div className="categories">
          <ul>
            <li className="important">
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Hindi</a>
            </li>
            <li>
              <a href="#">Korean</a>
            </li>
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Tamil</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
          </ul>
        </div>
        {movies ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              imageUrl={movie.banner}
              filmName={movie.name}
              runtime={movie.duration}
              category={movie.categories}
            />
          ))
        ) : (
          <Fragment></Fragment>
        )}
      </section>
    </div>
  );
}

export default Schedule;
