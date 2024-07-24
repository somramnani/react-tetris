import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StartButton from "../StartButton";

test("should render Start Button component", () => {
  render(<StartButton />);
  const startButtonElement = screen.getByTestId("startButton-1");
  expect(startButtonElement).toBeInTheDocument();
});
