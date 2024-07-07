import { createStage } from "../utils/gameHelper";
import { StyledTetrisWrraper, StyledTetris } from "./styles/StyledTetris";

//Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <StyledTetrisWrraper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </aside>
        <StartButton />
      </StyledTetris>
    </StyledTetrisWrraper>
  );
};

export default Tetris;
