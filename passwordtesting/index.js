//min 8 characters
//at least 1 small case
//at least 1 capital case
//at least 1 number

//the pass is the type of string but is dont know so in vs code shortcut /** */ is used it gives follows type string.
// these is called doc sting.
// testing the string

//TDD (test driven development)  mostly asked interview questions
//the TDD that means to write the testcases first the develope logic of code.

/**
 * 
 * @param {string} pass 
 * @returns 
 */
const validate=(pass)=>{
    const lowercase="abcdefghijklmnopqrstuvwxyz".split("");
    const uppercase=lowercase.map((e)=>e.toUpperCase());
    const number="1234567890".split("");
    
    
    if(pass.length<8){
        return{
            status:false,
            message:"min 8 characters"
        }
    }
    if(!pass.split("").find(c=>lowercase.includes(c))){
        return{
            status:false,
            message:"at least min 1 lowercase characters"
        }
    }
    if(!pass.split("").find(c=>uppercase.includes(c))){
        return{
            status:false,
            message:"at least min 1 uppercase characters"
        };
    };
    
    if(!pass.split("").find(c=>number.includes(c))){
        return{
            status:false,
            message:"at least min 1 number"
        }
    }
    return {
        status:true,
        message:"Password is valid"
    };
 };
    

module.exports=validate;