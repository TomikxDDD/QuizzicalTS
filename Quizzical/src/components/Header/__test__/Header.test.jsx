import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header's tests", () => {
  test('Should render the header to the DOM', () => {
    render(<Header/>)
    const divElement = screen.getByTestId("header")
    expect(divElement).toBeInTheDocument()
  })
})