import type { Game } from "../types/game.type";

interface Props {
  game: Game;
}

const GameRow: React.FC<Props> = ({ game }) => {
  return (
    <div className="flex justify-between items-center border border-gray-900 px-4 py-3">
      <div>
        <p className="text-xl font-bold uppercase">
          {game.name}
        </p>
        <p className="text-sm text-red-900">
          {game.time}
        </p>
      </div>

      <div className="flex gap-8 text-2xl font-medium">
        <span>{game.yesterday}</span>
        <span>{game.today}</span>
      </div>
    </div>
  );
};

export default GameRow;