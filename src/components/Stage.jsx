import Cell from "./Cell";

const Stage = ({ stage }) => {
  return (
    <div>
      {stage.map((row) => {
        return row.map((cell, x) => {
          return <Cell key={x} type={cell[0]} />;
        });
      })}
    </div>
  );
};

export default Stage;
