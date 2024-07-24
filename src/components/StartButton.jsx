import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton data-testid="startButton-1" onClick={callback}>
      Start Game
    </StyledStartButton>
  );
};

export default StartButton;
