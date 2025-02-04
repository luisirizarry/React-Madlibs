function addCommas(num) {
  // Convert number to string, im assuming the input would be ints all the time
  let numStr = num.toString();

  // incase there's negative numbers
  let isNegative = numStr[0] === "-";
  if (isNegative) {
    // Remove the negative sign 
    numStr = numStr.substring(1);
  }

  // initialize result and count
  let result = [];
  let count = 0;

  // iterate through string from the end to the beginning
  for (let i = numStr.length - 1; i >= 0; i--) {
    result.push(numStr[i]);
    count++;
    if (count % 3 === 0 && i !== 0) {
      result.push(",");
    }
  }

  // reverse the string back and join the result array
  let formattedStr = result.reverse().join("");

  // Add back the negative sign if needed
  if (isNegative) {
    formattedStr = "-" + formattedStr;
  }

  return formattedStr;
}

module.exports = addCommas;
