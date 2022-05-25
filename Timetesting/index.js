
function time(num){
 var min=Math.floor(num/60000);
 var sec=((num%60000)/1000);
 return min+"minutes"+" "+sec+"seconds";
};

module.exports=time;