import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test("Should load Contact-US component", ()=>{
    //Whenever we want render UI component we have to use render() menthod from @testing-library/react
    //and to make this work install- @babel/preset-react (It is for converstion of JSX to HTML)
    render(<Contact />);

    //To access getByRole or toBeIntheDocument() functions like this install> npm i -D @testing-library/jest-dom 

    //Quering
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact-US component", ()=>{
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("Should load Button text-submit inside Contact-US component", ()=>{
    render(<Contact />);

    //getByText it is case sensitive
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test("Should load Placeholder text from input-  inside Contact-US component", ()=>{
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Enter name");
    expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes when Contact component loads", ()=> {
    render(<Contact/>);

    //Multiple items: getAllByRole
    const inputBoxes= screen.getAllByRole("textbox");

    //This will return an object- JSX Element-React Element- Virtual DOM object- HTMLInputElement
    // console.log(inputBoxes[0]);
    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
})

