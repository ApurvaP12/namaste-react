import { fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

//Example 1-screen.getByRole("button", {name: "Login"});
it("Should load Header component with Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider> 
        </BrowserRouter>    
    ); 
    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");

    //If there are multiple buttons, search by 2 parameters byrole and bytext
    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

//Example 2-  //We can pass regex as well screen.getByText(/Cart/);
it("Should load header component with cart is there are not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider> 
        </BrowserRouter>    
    ); 
    //We can pass regex as well
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

//Example 3- Button click event by using fireEvent- fireEvent.click(loginButton);
it("Should load header component with Login- Logout button click change", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider> 
        </BrowserRouter>    
    ); 

    
    const loginButton = screen.getByRole("button", {name: "Login"});

    //To stimulate button click event by "fireEvent"
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});

