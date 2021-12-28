import React from "react";
import "./github.css";
import { FaInstagram, FaGithub } from "react-icons/fa";
import github from "../../assets/github.png";

function Github() {
  return (
    <div className="github" id="github">
      <div className="github-header">
        <div className="github-header-title">
          <h1>Info</h1>
        </div>
        <div className="github-bar-container">
          <div className="github-bar"></div>
        </div>
      </div>
      <div className="github-content section-padding">
        <div className="github-content-pic">
          <img src={github} alt="github-icon-gradient" />
        </div>

        <div className="github-content-links">
          <h3 className="gradient-text">Iman-Unk</h3>
          <p>
            Thanks for visiting, I got more projects like this would be happy if
            you check them out!
          </p>
          <div className="github-content-insta">
            <FaInstagram size={25} />
            <p>
              <a href="https://www.instagram.com/unk.iman.dev/">
                Follow me on Instagram
              </a>
            </p>
          </div>
          <div className="github-content-insta">
            <FaGithub size={25} />
            <p>
              <a href="https://github.com/Im-unk">
                Check out more projects on Github!
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;
