const stringLength = (string) => {
    numCharacter = string.split('').length;
    if (numCharacter < 1) {
      return 'String is empty';
    }
    if (numCharacter > 10) {
      return 'String is to long';
    }
    return numCharacter;
  };
  
  const reverseString = (string) => {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
  };
  
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  };
  
   
  export default { stringLength, reverseString, capitalize};