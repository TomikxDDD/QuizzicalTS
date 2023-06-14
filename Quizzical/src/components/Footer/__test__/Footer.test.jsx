import Footer from "../Footer";
import { render, screen } from "@testing-library/react";

describe("Footer's tests", () => {
  test('Should render the Footer to the DOM', () => {
    render(<Footer />)
    const footerElement = screen.getByTestId("footer")
    expect(footerElement).toBeInTheDocument()
  })
})