var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, personName) {
  if (katzDeliLine.length === 0) {
    katzDeliLine[0] = personName
  } else {
    katzDeliLine.push(personName)
  }
    return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`
}
