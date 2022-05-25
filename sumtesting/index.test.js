
// import {test} from "@jest/globals";
const {test,expect,describe} =require("@jest/globals");

//importing the sum function in index.js file
const sum=require("./index");
describe("Test sum function with Number",function(){
test("Should Work on all positive number",function(){
    //Assertions-->pratipadan
    //expect(1).toBe(1); i,e if true gives true
    //expect(true).toBeTruthy();   i,e same but diffrent ways
    //expect("").toBeFalsy();
    //left hand:your side & right hand :expected
expect (sum(2,2)).toBe(4);
expect (sum(0,0)).toBe(0);
expect (sum(100,0)).toBe(100);
});

test("Should Work on all Negative Number",function(){
    expect (sum(-2,-2)).toBe(-4);
    expect (sum(-2,0)).toBe(-2);
});
});

describe("Test sum function with Characters",function(){
    test("it should work two characters",function(){
        expect(sum("a","b")).toBe("ab");
    });
});



