const validator = {
 isValid: function (carNumber){
  let arrayOfNumbers=carNumber.split ("");

  let newArray = arrayOfNumbers.map( ( value,index)=>{
    return index %2 ===0 ? parseInt (value)*2 : parseInt (value);
  })

  return newArray;
 },
 maskify:function (ccNumber){
   return ccNumber.split("").map((value,indx)=> indx < ccNumber.length-4? "#": value).join("");
  }
};
   export default validator;
   

  
