import { createStage } from "../utils/gameHelper";

//Components
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

const Tetris = () => {
  return (
    <div>
      {" "}
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </aside>
      <StartButton />
    </div>
  );
};

export default Tetris;
