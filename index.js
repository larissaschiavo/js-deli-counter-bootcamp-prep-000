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

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    const n = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${n}.`
  }
}
