

function tax(number){
    if(number<=250000){
        return("No tax")
    }
    if(number>250000 && number<=500000){
        return("10% tax")
    }
    if(number>500000 && number<=1000000){
        return("20% tax");
    }
    if(number>1000000){
       return("30% tax");
    }
   }
   module.exports=tax;