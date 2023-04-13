function addition(firstNum, secondNum) {
  if (typeof firstNum == "number" && typeof secondNum == 'number') {
    return firstNum + secondNum;
  }
  return "Please enter 2 numbers."
}

module.exports = addition;