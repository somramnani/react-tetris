import { useState } from "react";
import { createStage } from "../utils/gameHelper";
// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
//Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = (dir) => {};

  const startGame = () => {};

  const dropPlayer = () => {};
  const move = ({ keyCode }) => {};

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
