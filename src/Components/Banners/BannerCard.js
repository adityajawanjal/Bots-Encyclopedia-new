import React from "react";
import Banforward from "./Bannerforward";
import Banreverse from "./Bannerreverse";

const BannerCard = () => {
  return (
    <>
      <div className="animation"></div>
      <div className="banners">
        {Banforward.map((e) => {
          return (
            <div className="banner">
              <div className="info">{e.info}</div>
              <div className="img">
                <img src={e.img} alt="cam" />
              </div>
              <div className="btn">
                <button type="button">Read More</button>
              </div>
            </div>
          );
        })}
        ;
        {Banreverse.map((e) => {
          return (
            <div className="banner">
              <div className="img">
                <img src={e.img} alt="cam" />
              </div>
              <div className="info">{e.info}</div>
              <div></div>
              <div className="btn">
                <button type="button">Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BannerCard;
