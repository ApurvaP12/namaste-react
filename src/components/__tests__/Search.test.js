import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mockData/resListMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
// import { act } from "react-dom/test-utils";

//Mock-fetch with global function using jest.fn()
global.fetch = jest.fn(()=>{

    //This jest function will return a Promise
    return Promise.resolve({
        //After this Promise is reolved, It will return a JSON
        json: ()=>{
            //JSON will give again Promise and return data from API (here MOCK_DATA)
            return Promise.resolve(MOCK_DATA);
        }
    });
});

//IMP_ Whenever we are using Fetch() or State update wrap component inside act()
    // act(() => {
    //     /* fire events that update state */
    //   });
    //   /* assert on the output */

//************* 
//IMP NOTE: When using @testing-library/react, you usually DO NOT need to import act manually at all.
// Testing Library already wraps most things in act() internally.

// it("Should render Body component with Search", async () => {
//     await act(async () => 
//         { 
//             render(<Body/>); 
//         });
// });
//************* 

it("Should render Body component with Search placeholder text", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const searchInput = await screen.findByPlaceholderText("Search..");
  expect(searchInput).toBeInTheDocument();
});

// it("Should render filters restaurant cards when user searches for Pizza", async () => {
//    render(
//     <BrowserRouter>
//       <Body />
//     </BrowserRouter>
//   );

//     const cardsBeforeSearch =  await screen.getAllByTestId("resCard");
//     expect(cardsBeforeSearch.length).toBe(10);

//     // const searchBtn =  screen.getByRole("button", {name: "Search"});

//     // const searchInput =  screen.getByTestId("searchInput");

//     // fireEvent.change(searchInput, {target: {value: "pizza"}});
//     // fireEvent.click(searchBtn);

//     // const cardsAfterSearch =  screen.getAllByTestId("resCard");
//     // expect(cardsAfterSearch.length).toBe(1);
    
// });

it("filters restaurant cards when user searches for Pizza", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // WAIT for restaurants to load
  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // WAIT again after filtering
  const cardsAfterSearch = await screen.findAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});