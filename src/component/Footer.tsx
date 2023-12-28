import React from "react";
import "../component/Footer.css";
import banner from "../images/Mini/banner3.jpg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="btn-footer">
          <div className="f-main">
            <div className="f-link">
              <a href="https://www.facebook.com/Ruucinemaofficia">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://youtube.com/c/RuuCinema">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="t.me/ruucinema">
                <i className="bx bxl-telegram"></i>
              </a>
              <a href="tiktok.com/@ruu_cinema?is_from_webapp=1&sender_device=pc">
                <i className="bx bxl-tiktok"></i>
              </a>
              <a className="to-home" href="#">
                <i className="bx bxs-chevrons-up"></i>
              </a>
            </div>
            <div className="t-home"></div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="about">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
