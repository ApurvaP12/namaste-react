import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mockData/resCardMock.json";
import '@testing-library/jest-dom';

//For RestaurantCard HOC- wrapped component
const VegRestaurantCard = withVegLabel(RestaurantCard);

it("Should load Restarant Card component with props data", () =>{

    //Restaurant card need data via props so, created MOCK_DATA for such cases
    render(<RestaurantCard resData={MOCK_DATA}/>);

    console.log("MOCK_DATA", MOCK_DATA);

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();
});

//HOC- Higher order component with withVegLabel label
it("should render retaurant card with withVegLabel label", ()=>{
    
    render(<VegRestaurantCard resData={MOCK_DATA}/>);

    const vegLabel = screen.getByText("Veg");

    expect(vegLabel).toBeInTheDocument();
});

