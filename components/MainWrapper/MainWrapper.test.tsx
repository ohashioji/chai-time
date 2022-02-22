import { render, screen } from "@testing-library/react";
import MainWrapper from "./MainWrapper";



it("Main wrapper renders in dom", () => {
    render(<MainWrapper ><h1>Test</h1></MainWrapper>);
    expect(screen.getByTestId("main-wrapper")).toBeTruthy();
});