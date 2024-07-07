import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "./../utils/tetrominos";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
};

export default Cell;
