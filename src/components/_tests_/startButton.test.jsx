import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StartButton from "../StartButton";

describe("Start Button Component", () => {
  let mockCallback;

  afterEach(() => {
    mockCallback = jest.fn();
  });

  it("should render Start Button component", () => {
    render(<StartButton callback={mockCallback} />);

    const startButtonElement = screen.getByTestId("startButton-1");

    expect(startButtonElement).toBeInTheDocument();
    expect(startButtonElement).toHaveTextContent("Start Game");
  });

  it("calls the callback when button is clicked", () => {
    render(<StartButton callback={mockCallback} />);

    fireEvent.click(screen.getByTestId("startButton-1"));

    expect(mockCallback).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<StartButton callback={mockCallback} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
