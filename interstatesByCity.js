var readline = require('readline')

//This is a way of reading input at node applications.
var RI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Everytime there is a new line entered, this callback calculator will fire.
RI.on('line', function(line) {
    calculator(line)
})

//Data object to save all the data read from input.
//Keys are the interstate names.
//Values are the number of states where this interstate passes.
const data = {}

function calculator(line) {
    //Skip the line if it starts with '#'
    if(line[0] === '#') return

    //Result array is used because sorting is easier.
    const result = []

    //Line is splitted by '|' for every line entered.
    const lineArr = line.split('|')

    //Then interstates splitted into its own array.
    const interstates = lineArr[3].split(';')

    //Loop through the interstates:
    //If data has the key as interstate, increment the value by one.
    //Else create the key and set value to one.
    for(let i = 0; i < interstates.length; i++) {
        if(data.hasOwnProperty(interstates[i])) {
            data[interstates[i]]++
        } else {
            data[interstates[i]] = 1
        }
    }

    //Loop through the object and push the correct string versions to result array.
    for(let key in data) {
        result.push(`${key} ${data[key]}`)
    }

    //Every time a new line is entered, new results are calculated and printed.
    //Before printing, interstates are sorted.
    console.log('NEW RESULTS:\n')
    console.log(result.sort(comparator).join('\n'))
}

//Comparator function is used to sort interstates.
function comparator(interstateA, interstateB) {
    return Number(interstateA.slice(2, interstateA.indexOf(' '))) - Number(interstateB.slice(2, interstateB.indexOf(' ')))
}


