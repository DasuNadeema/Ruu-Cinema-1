import { Fragment } from "react";
import "../component/Movie.css";
import img2 from "../images/1338709.png";

export default function Movie() {
  return (
    <Fragment>
      <div className="movie">
        {/* <img src={img3} alt="" className="m-img1" /> */}
        <img src={img2} alt="" className="m-img1" />
        <div className="m-text">
          <h4>John Wick</h4>
          <span>2012</span>
          <br />
          <span>Action/Adventure</span>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            aliquid explicabo consectetur harum pariatur soluta aliquam, autem
            eum exercitationem dignissimos ipsum dolorum sequi tempore. Harum
            excepturi sit eos a quasi.
          </p>
          <br />
        </div>
        <a className="a1" href="#">
          Watch <ion-icon name="play-circle-outline"></ion-icon>
        </a>
        {/* <img src={img3} alt="" className="m-img2" /> */}
      </div>
      <br />
    </Fragment>
  );
}
