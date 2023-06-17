import Component from "../Component";
import { render, screen } from "@testing-library/react";

describe("Component's tests", () => {
  test('Should render the component to the DOM', () => {
    const text = "Something to render"
    render(<Component textToRender={text}/>)
    const divElement = screen.getByText(text)
    expect(divElement).toBeInTheDocument()
  })
})