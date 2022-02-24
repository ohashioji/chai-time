import { render, screen } from "@testing-library/react";
import KeyBoard from "./KeyBoard";


it("Renders Keyboard into dom", () => {
    render(<KeyBoard word="potat"  />);
    expect(screen.getByTestId("key-board")).toBeTruthy();
});