import React, { useState } from "react";
import "./gifts.css";
import gift from "../../assets/gift.png";
import santaHat from "../../assets/santa-hat.png";
import ornament from "../../assets/ornament.png";
import sleigh from "../../assets/sleigh.png";
import cookies from "../../assets/cookies.png";

function Gifts() {
  const [giftbox1, setGiftbox1] = useState(false);
  const [giftbox2, setGiftbox2] = useState(false);
  const [giftbox3, setGiftbox3] = useState(false);
  return (
    <div className="gifts" id="gifts">
      <div className="gifts-title">
        <h2>Here Is Your Gifts</h2>
      </div>
      <div className="gift-bar-container">
        <div className="gift-bar"></div>
      </div>
      <div className="gifts-wrapper section-padding">
        <div className="gift">
          <div className="gift-image-wrapper">
            <img src={gift} alt="gift-box1" />
          </div>

          <p>Tap to find out what is inside the gift box</p>
          <div className="giftButton">
            {giftbox1 ? (
              <div
                className="gift-button-btn "
                onClick={() => setGiftbox1(false)}
              >
                <p className="gradient-text">close</p>
              </div>
            ) : (
              <div
                className="gift-button-btn "
                onClick={() => setGiftbox1(true)}
              >
                <p className="gradient-text">open</p>
              </div>
            )}

            {giftbox1 && (
              <div className="gift-container swirl-in-fwd">
                <img src={ornament} className="ornament-gifts" />
                <h1>You Got A Santa Hat !!</h1>
                <div className="gift-container-image">
                  <img src={santaHat} />
                </div>
                <div
                  className="gift-container-close-btn"
                  onClick={() => setGiftbox1(false)}
                >
                  Close
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="gift">
          <div className="gift-image-wrapper">
            <img src={gift} alt="gift-box1" />
          </div>
          <p>Tap to find out what is inside the gift box</p>
          <div className="giftButton">
            {giftbox2 ? (
              <div
                className="gift-button-btn"
                onClick={() => setGiftbox2(false)}
              >
                <p className="gradient-text">close</p>
              </div>
            ) : (
              <div
                className="gift-button-btn"
                onClick={() => setGiftbox2(true)}
              >
                <p className="gradient-text">open</p>
              </div>
            )}

            {giftbox2 && (
              <div className="gift-container swirl-in-fwd">
                <img src={ornament} className="ornament-gifts" />
                <h1>You Got Cookies !!</h1>
                <div className="gift-container-image">
                  <img src={cookies} />
                </div>
                <div
                  className="gift-container-close-btn"
                  onClick={() => setGiftbox2(false)}
                >
                  Close
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="gift">
          <div className="gift-image-wrapper">
            <img src={gift} alt="gift-box1" />
          </div>

          <p>Tap to find out what is inside the gift box</p>
          <div className="giftButton">
            {giftbox3 ? (
              <div
                className="gift-button-btn"
                onClick={() => setGiftbox3(false)}
              >
                <p className="gradient-text">close</p>
              </div>
            ) : (
              <div
                className="gift-button-btn"
                onClick={() => setGiftbox3(true)}
              >
                <p className="gradient-text">open</p>
              </div>
            )}

            {giftbox3 && (
              <div className="gift-container swirl-in-fwd">
                <img src={ornament} className="ornament-gifts" />
                <h1>You Got A Sleigh !!</h1>
                <div className="gift-container-image">
                  <img src={sleigh} />
                </div>
                <div
                  className="gift-container-close-btn"
                  onClick={() => setGiftbox3(false)}
                >
                  Close
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
