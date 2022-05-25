//here is not required the file name as test.js because all inside the tests folder.(makesure the all test folder in test);

const { expect,test,describe } = require("@jest/globals")

 
const validate=require("../passwordtesting/index")

describe("Validate Password",function(){
    test("All Conditions Satisfied",function(){
       expect(validate("aaaaaa1A").status).toBe(true);
       expect(validate("aaaaaa1A").message).toBe("Password is valid");
    });
    test("Minimum 8 characters",function(){
        expect(validate("aa1A").status).toBe(false);
        expect(validate("aa1A").message).toBe("min 8 characters")
    });
    test("Minimum 1 lowercase",function(){
        expect(validate("aaaaaG3f").status).toBe(true);
        expect(validate("aaaaaG3f").message).toBe("Password is valid");
    });
    test("Minimum 1 uppercase",function(){
        expect(validate("aaaaag3f").status).toBe(false);
        expect(validate("aaaaag3f").message).toBe("at least min 1 uppercase characters");
    });
    test("Minimum 1 uppercase",function(){
        expect(validate("aaaDag3f").status).toBe(true);
        expect(validate("aaaDag3f").message).toBe("Password is valid");
    });
});