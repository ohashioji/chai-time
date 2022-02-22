import GameBoard from "./GameBoard";
import { render, screen } from "@testing-library/react";



it("GameBoard renders in dom", () => {
    render(<GameBoard />);
    expect(screen.getByTestId("game-board")).toBeTruthy();
});