import ReactCardFlip from "react-card-flip";
import pokeballImg from "../../imgs/pokeball.png";

/**
 * GameCard Component representing each individual card in the memory matching game.
 * It uses ReactCardFlip for flip animation and displays either the Pokéball or the Pokémon image based on its state.
 */
function GameCard(props) {
  const { name, imageUrl, id, isFlipped, isMatched, onClick } = props;

  return (
    <div
      className="relative w-full h-full aspect-square cursor-pointer"
      onClick={isMatched ? null : onClick}
      data-id={id}
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerClassName="w-full h-full"
      >
        {/* Front Side */}
        <div
          key="front"
          className="w-full h-full rounded-xl border-2 border-white/20 shadow-lg bg-slate-800 overflow-hidden hover:brightness-110 transition-all flex items-center justify-center"
        >
          <img
            src={pokeballImg}
            alt="Pokeball"
            className="w-full h-full object-cover p-2"
          />
        </div>

        {/* Back Side */}
        <div
          key="back"
          className={`w-full h-full rounded-xl border-2 shadow-xl bg-white flex items-center justify-center transition-all overflow-hidden ${
            isMatched
              ? "border-yellow-400 ring-4 ring-yellow-400/50"
              : "border-gray-300"
          }`}
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain p-3"
          />
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default GameCard;
