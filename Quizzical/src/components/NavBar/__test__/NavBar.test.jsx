import Navbar from "../Navbar";
import { render, screen } from "@testing-library/react";


describe("NavBar's tests", () => {
  test('Should render the Navbar to the DOM', () => {
    render(<Navbar navLinks={["Home", "About", "Contact"]}/>)
    const navElement = screen.getByRole("navigation")
    expect(navElement).toBeInTheDocument()
  })
})