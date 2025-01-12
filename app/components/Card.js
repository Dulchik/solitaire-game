import React from "react";

const Card = ({ suit, value, isFaceUp }) => {
  const getCardColor = (suit) => {
    return suit === "hearts" || suit === "diamonds" ? "red" : "black";
  };

  return (
    <div className={`card ${isFaceUp ? "face-up" : "face-down"}`}>
      {isFaceUp ? (
        <>
          <div className="card-value">{value}</div>
          <div className="card-suit" style={{ color: getCardColor(suit) }}>
            {suit}
          </div>
        </>
      ) : (
        <div className="card-back">🂠</div>
      )}
      <style jsx>{`
        .card {
          width: 100px;
          height: 150px;
          border: 1px solid #000;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          background-color: white;
        }
        .face-down {
          background-color: blue;
          color: white;
        }
        .card-value {
          position: absolute;
          top: 10px;
          left: 10px;
        }
        .card-suit {
          font-size: 48px;
        }
        .card-back {
          font-size: 48px;
        }
      `}</style>
    </div>
  );
};

export default Card;
