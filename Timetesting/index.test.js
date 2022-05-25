
const {test, expect,describe}=require("@jest/globals");
const time=require("./index");


describe("Test time function in Number",function(){

    test("check time milliseconds to minutes/seconds",function(){
        expect(time(210000)).toBe("3minutes 30seconds");
        expect(time(500000)).toBe("8minutes 20seconds");
        expect(time(410000)).toBe("6minutes 50seconds");
        expect(time(1000000)).toBe("16minutes 40seconds");

});
});