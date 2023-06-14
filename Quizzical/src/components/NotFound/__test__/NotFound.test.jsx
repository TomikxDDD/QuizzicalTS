import NotFound from "../NotFound";
import { render, screen } from "@testing-library/react";

describe("NavBar's tests", () => {
  test('Should render the NotFound to the DOM', () => {
    render(<NotFound />)
    const notFoundElement = screen.getByTestId("notfound")
    expect(notFoundElement).toBeInTheDocument()
  })
})