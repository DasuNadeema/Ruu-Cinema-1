import { Fragment } from "react";
import "../component/Movie.css";
import img2 from "../images/1338709.png";

export default function Movie() {
  return (
    <Fragment>
      <div className="movie">
        <img src={img2} alt="" className="m-img1" />
      </div>
      <br />
    </Fragment>
  );
}
