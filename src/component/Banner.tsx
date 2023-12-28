import { Fragment } from "react";
import "../component/Banner.css";
import img2 from "../images/1338709.png";
import img1 from "../images/714381.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function Movie() {
  return (
    <Fragment>
      <div className="movie">
        <Carousel>
          <Carousel.Item>
            <img src={img2} alt="" className="m-img1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} alt="" className="m-img1" />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
    </Fragment>
  );
}
