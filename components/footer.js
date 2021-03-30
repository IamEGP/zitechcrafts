import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                Welcome to our web design agency. ZiTECH CRAFTS offers contemporary smart digital solutions dedicated to automate and innovate your business model. We provide strategic business alignment to technology solutions. Crafted by a team of young ambitious techno-prenuers determined to work with dexterity and be amongst Africa's leading technology solutions entity.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                43 Central Avenues
                <br />
               Harare
              </p>
              <p>Contact: +263 71 713 3187</p>
              <p>
               Help Desk : <a href="support@zitechcrafts.com">support@zitechcrafts.com</a>
              </p>
              <p>
                Projects: <a href="#">consulting@zitechcrafts.com</a>
              </p>
              <p>
                Inquiries: <a href="#">info@zitechcrafts.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="zitechcrafts.com">zitechcrafts.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
