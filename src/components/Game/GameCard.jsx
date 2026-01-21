import ReactCardFlip from "react-card-flip";
import pokeballImg from "../../imgs/pokeball.png";

function GameCard(props) {
  const { name, imageUrl, id, isFlipped, isMatched, onClick } = props;
  return (
    <div
      className="flex justify-center items-center h-60 w-60"
      name={name}
      onClick={onClick}
      data-id={id}
      isMatched={isMatched}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          key="front"
          className="relative w-60 h-60 min-w-20 min-h-20 max-w-80 max-h-80 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white"
        >
          {/* THE IMAGE:  */}
          <img
            src={pokeballImg} //! needs to be changed to prop later
            alt="Small card"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* back side of the card */}

        <div
          key="back"
          className="relative w-60 h-60 min-w-20 min-h-20 max-w-80 max-h-80 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white"
        >
          {/* THE IMAGE:  */}
          <img
            src={imageUrl}
            alt="Small card"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* THE SHADOW */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.1,
            }}
          ></div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GameCard;
