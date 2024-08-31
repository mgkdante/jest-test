const capitalize = (string) => {
  const sList = string.split("")
  sList[0] = sList[0].toUpperCase()
  const string2 = sList.join("")
  return string2
}

const reverseString = (string) => {
  let sList = []
  for (let i = string.length - 1; i >= 0; i--) {
    sList.push(string[i])
  }
  return sList.join("")
}

const calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

const cesarCipher = (string, n) => {
  let charCodeArray = []
  let newStringArray = []

  for (let char of string) {
    let charCode = getCharForAlpha(char.charCodeAt(0), n)
    charCodeArray.push(charCode)
  }
  for (let charCode of charCodeArray) {
    newStringArray.push(String.fromCharCode(charCode))
  }
  return newStringArray.join("")
}

const getCharForAlpha = (charCode, n) => {
  n = n % 26
  if (charCode > 90 && charCode < 97) {
    return charCode
  } else if (charCode >= 65 && charCode <= 122) {
    let newCharCode = charCode + n
    if (newCharCode < 65) {
      newCharCode = 90 - (64 - newCharCode)
    }
    if (newCharCode > 122) {
      newCharCode = 97 - (123 - newCharCode)
    }
    return newCharCode
  } else {
    return charCode
  }
}

const analyzeArray = (array) => {
  const obj = {}
  let sum = 0
  let min = array[0]
  let max = 0
  for (let item of array) {
    sum += item
    min = Math.min(min, item)
    max = Math.max(max, item)
  }
  obj.average = sum / array.length
  obj.min = min
  obj.max = max
  obj.length = array.length
  return obj
}

export { capitalize, reverseString, calculator, cesarCipher, analyzeArray }
