import { useState } from "react";
import { createStage } from "../utils/gameHelper";

// Styled Components
import { StyledTetrisWrraper, StyledTetris } from "./styles/StyledTetris";

//Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

// Custom Hooks
import { usePlayer } from "../hooks/usePlayer";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player] = usePlayer();

  return (
    <StyledTetrisWrraper>
      <StyledTetris>
        <Stage stage={createStage()} />
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
    </StyledTetrisWrraper>
  );
};

export default Tetris;
