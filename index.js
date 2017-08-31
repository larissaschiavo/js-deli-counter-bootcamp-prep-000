var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, personName) {
  if (katzDeliLine.length === 0) {
    katzDeliLine[0] = personName
    // return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
  } else {
    katzDeliLine.push(personName)
    // return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
  }
    return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}
