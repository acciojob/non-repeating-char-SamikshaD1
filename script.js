function firstNonRepeatedChar(inputString) {
  // Create a map to store character frequencies
  const charFrequency = new Map();

  // Iterate through the string to count character frequencies
  for (let char of inputString) {
    if (charFrequency.has(char)) {
      charFrequency.set(char, charFrequency.get(char) + 1);
    } else {
      charFrequency.set(char, 1);
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (let char of inputString) {
    if (charFrequency.get(char) === 1) {
      return char; // Found the first non-repeated character
    }
  }

  // If all characters are repeated or the string is empty, return null
  return null;
}

// Example usage:
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
