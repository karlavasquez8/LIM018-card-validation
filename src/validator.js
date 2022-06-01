const validator = {
 isValid: function (carNumber){
  let arrayOfNumbers=carNumber.split ("");

  let newArray = arrayOfNumbers.map( ( value,index)=>{
    let double = parseInt (value)*2;
    let sumOfPairs = double

      if (double >=10){
        let convertArray= double.toString().split("");
         sumOfPairs = (parseInt (convertArray.at(0)) + parseInt (convertArray.at(1)));
      }

    return index %2 ===0 ? sumOfPairs : parseInt (value);
  })
  let sumTotal = 0;
    newArray.forEach((value )=> {
      (sumTotal += value )
    });
     return (sumTotal %10 == 0)
  
 },
 maskify:function (ccNumber){
   return ccNumber.split("").map((value,indx)=> indx < ccNumber.length-4? "#": value).join("");
  }
};
   export default validator;
   

  
