import React from "react";
import BotsList from "./BotsList";
import "./BotCard.css";

const BotCard = () => {
  return (
    <>
      <div className="allCards">
        {BotsList.map((e) => {
          return (
            <div className="cardOfBot" key={e.id}>
              <div className="img">
                <img src={e.img} alt="car" />
              </div>
              <div className="title">{e.title}</div>
              <div className="discription">{e.discription}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BotCard;
