
const {test,expect,describe}=require("@jest/globals");

const tax =require("./index");

describe("Testing tax of all numbers",function(){

test("caluclate tax of income below 250000 ",function(){

    expect(tax(210000)).toBe("No tax");
    expect(tax(20000)).toBe("No tax");

});
test("caluclate tax of income above 250000 and below 500000 ",function(){
    expect(tax(300000)).toBe("10% tax");
    expect(tax(400000)).toBe("10% tax");

});
test("caluclate tax of income above 500000 and below 1000000 ",function(){
    expect(tax(750000)).toBe("20% tax");
    expect(tax(850000)).toBe("20% tax");

});
test("caluclate tax of income above 1000000 ",function(){
    expect(tax(3000000)).toBe("30% tax");
    expect(tax(5000000)).toBe("30% tax");

});

});