import React from "react";
import Nheader from "../component/N-components/Nheader";
import "../pages/NewPage.css";
import tag4 from "../images/Mini/Tiger-3.jpg";
import tag5 from "../images/Mini/uuot1N5AgZ7xRCKgm4ZCwOhgIJu.jpg";
import tag6 from "../images/Mini/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg";
import tag7 from "../images/Mini/vN0rKik0oCSfFmMFoH7qicPhcHj.jpg";
import tag8 from "../images/Mini/xzlMB1nGJtMhr2GnecpHIh7XUZe.jpg";
import tag11 from "../images/Mini/img4.jpg";
import tag12 from "../images/Mini/img5.jpg";
import tag13 from "../images/Mini/157259.jpg";
import tag14 from "../images/Mini/inspector-avinash.jpg";
import tag15 from "../images/Mini/ruby-gillman-teenage-kraken.webp";
import wick from "../images/Mini/075f284bd2a54e4c9f554d37578986ed.webp";
import img2 from "../images/1338709.png";
import tag2 from "../images/Mini/MV5BNWQ5NGE2YjctYjc0Yi00Yzc1LTgxYTMtMTZiOTU2ZDRiODIwXkEyXkFqcGdeQXVyNjk1Njg5NTA@.webp";
import Footer from "../component/Footer";
import HomePage from "./HomePage.jsx";
import { Link } from "react-router-dom";

function NewPage() {
  return (
    <div className="N-main">
      <div className="h-btn">
        <Link to="HomePage">Home</Link>
      </div>
      <div className="n-content">
        <br />
        <div className="n-img">
          <img src={img2} alt="" className="m-img2" />
          <img src={wick} alt="" />
        </div>
        <div className="detail-box">
          <h2>John Wick : 2014</h2>
          <div className="categories-2">
            <ul>
              <li className="important">
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Adventure</a>
              </li>
              <li>
                <a href="#">Thriller</a>
              </li>
              {/* <li>
                <a href="#">Tamil</a>
              </li>
              <li>
                <a href="#">Other</a>
              </li> */}
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nulla et, velit id magnam voluptates quas rerum illum, fugiat neque
            aliquam doloremque iusto reiciendis ipsum tenetur molestias corrupti
            omnis! Obcaecati! Error asperiores totam reprehenderit delectus unde
          </p>
          <div className="watch">
            <a href="#">
              Watch Movie <i className="bx bx-play-circle"></i>
            </a>
            <a href="#">
              Watch Trailer <i className="bx bx-play-circle"></i>
            </a>
          </div>
          <div className="rating-and-others">
            <span>
              <i className="bx bxs-star"></i> Rating - 7. 2 / 109 min
              <br />
              Director: Chad Stahelski <br />
              Creator: Derek Kolstad
              <br />
              Actors: Keanu Reeves, Michael Nyqvist,Alfie Allen
            </span>
          </div>
        </div>
      </div>
      <div className="download-sec">
        <h3>To Download</h3>
        <span>SD 480P -- 600Mb</span>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
        <span>HD 720P -- 800Mb</span>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
        <span>FHD 1080P -- 1.2GB</span>
        <a href="">Link 1</a>
        <a href="">Link 2</a>
        <a href="">Link 3</a>
      </div>
      <div className="feedback">
        <legend>
          <h2>Leave A Comment</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            aperiam, ipsa tempore voluptate dolorem sint voluptas earum
            voluptatum facere et ratione molestias ad eius quia? Facere fugiat
            nihil corporis quidem.
          </p>

          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Last Name" />
          <input type="Telephone" placeholder="Contact Number" />
          <input type="email" placeholder="Email Address" />
        </legend>
        <div className="im">
          <input type="email" placeholder="Type Your Message" />
        </div>
        <br />
        <a href="#"> Post Comment</a>
      </div>
      <br />
      <div className="more-movies">
        <h2> -- More Movies</h2>
        <div className="box2">
          <div className="box2-img">
            <img src={tag2} alt="" />
          </div>
          <h3>Blonde</h3>
          <span>120min | Action</span>
        </div>
        <div className="box2">
          <div className="box2-img">
            <img src={tag11} alt="" />
          </div>
          <h3>Monster</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box2">
          <div className="box2-img">
            <img src={tag12} alt="" />
          </div>
          <h3>Little Women</h3>
          <span>120min | Action</span>
        </div>{" "}
        <div className="box2">
          <div className="box2-img">
            <img src={tag13} alt="" />
          </div>
          <h3>Paw</h3>
          <span>120min | Action</span>
        </div>
        <div className="box2">
          <div className="box2-img">
            <img src={tag14} alt="" />
          </div>
          <h3>Inspector-Avinash</h3>
          <span>120min | Action</span>
        </div>
        <div className="box2">
          <div className="box2-img">
            <img src={tag4} alt="" />
          </div>
          <h3>Tiger-3</h3>
          <span>120min | Action</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewPage;
