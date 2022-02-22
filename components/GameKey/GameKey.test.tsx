import { render, screen } from "@testing-library/react";
import GameKey from "./GameKey";


it("Game Key renders in the dom", () => {
    render(<GameKey><h1>test</h1></GameKey>);
    expect(screen.getByTestId("game-key")).toBeTruthy();
});