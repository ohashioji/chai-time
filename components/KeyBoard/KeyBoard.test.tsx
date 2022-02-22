import { render, screen } from "@testing-library/react";
import KeyBoard from "./KeyBoard";


it("Renders Keyboard into dom", () => {
    render(<KeyBoard />);
    expect(screen.getByTestId("key-board")).toBeTruthy();
});