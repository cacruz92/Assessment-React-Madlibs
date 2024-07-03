function addCommas(num) {
    // Convert number to a string
    let numString = num.toString();

    // see if the number is negative
    let isNegative = numString[0]=== '-';

    if(isNegative){
        numString  = numString.slice(1);
    }
  
    // separate each number and enter them into an array
    let numArr = numString.split('');

    // loop over the array backward and then insert a comma every three spaces
    for(let i = numArr.length-3; i>0; i-=3){
        numArr.splice(i,0,',');
    }

    let finalNum = numArr.join('');

    if(isNegative){
        finalNum = '-'+ finalNum;
    }

    return finalNum;
}

module.exports = addCommas;