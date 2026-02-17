
import { sum } from "../sum";

//Test function contains 2 arguments
//1. String what this test is for
//2. Callback function in which actual test is happening

test("Sum function should calculate sum of two numbers", ()=>{

    //Testing -calling sum function
    const result = sum(3, 4);

    //Assertion-not mandatory
    expect(result).toBe(7);
})