var readline = require('readline')

var RI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


RI.on('line', function(line) {
    calculator(line)
})


const data = {}

function calculator(line) {
    const result = []
    if(line[0] === '#') return

    const lineArr = line.split('|')
    const interstates = lineArr[3].split(';')
    for(let i = 0; i < interstates.length; i++) {
        if(data.hasOwnProperty(interstates[i])) {
            data[interstates[i]]++
        } else {
            data[interstates[i]] = 1
        }
    }
    for(let key in data) {
        result.push(`${key} ${data[key]}`)
    }

    console.log('New Results:\n')
    console.log(result.sort(comparator).join('\n'))
}

function comparator(interstateA, interstateB) {
    return Number(interstateA.slice(2, interstateA.indexOf(' '))) - Number(interstateB.slice(2, interstateB.indexOf(' ')))
}


/*
# Skip this line.
4|Raleigh|North Carolina|I-40;I-85;I-95
27|Chicago|Illinois|I-94;I-90;I-88;I-57;I-55
2|Madison|Wisconsin|I-94;I-90

*/
