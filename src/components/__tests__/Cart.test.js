import {render} from "@testing-library/react";


global.fetch =jest.fn(()=>{
    return Promise.resolve ({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should load Restaurant Menu component", ()=>{
    render(
    
    )
})