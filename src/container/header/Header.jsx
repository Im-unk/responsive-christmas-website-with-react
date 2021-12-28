import React from "react";
import "./header.css";
import headerImage from "../../assets/headerImage.png";
import seprator from "../../assets/seprator.png";
function Header() {
  return (
    <div className="header section-padding snowflakes">
      <div class="snowflake">❅</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
      <div class="snowflake">❅</div>
      <div class="snowflake">❆</div>
      <div class="snowflake">❄</div>
      <div className="header-image scale-up-center">
        <img src={headerImage} alt="header-picture" />
      </div>
      <div className="header-content slide-in-bottom">
        <div className="seprator-pic">
          <img src={seprator} alt="mistletoe-seprator" />
        </div>
        <h1 className="gradient-text">Merry Christams!</h1>
        <p>
          Welcome to my christmas website, I've prepared some gifts for you
          which you can get them as soon as you click on the button below
        </p>

        <button>
          <a href="#gifts">Get your presents right now</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
