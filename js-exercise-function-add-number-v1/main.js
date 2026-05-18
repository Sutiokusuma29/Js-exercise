function addNumber(numStr, options){
   let result = [];
   let angkaArray = numStr.split('').map(Number);
if (numStr.length < 2){
    return "Input tidak valid";
}
   if(options === "left"){
    for(let i = 0; i < angkaArray.length - 1; i++)
        result += parseInt(angkaArray[i]) + parseInt(angkaArray[i+1]);
   } else if (options === "right"){
        for (let i = angkaArray.length-1; i > 0; i--){
            result += parseInt(angkaArray[i]) + parseInt(angkaArray[i - 1]);
        }
    }else {
        return "Opsi tidak valid";
    }
    return result;
}

console.log(addNumber("012345", "left"));
console.log(addNumber("672318", "right"));


module.exports = addNumber;
