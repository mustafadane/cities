var readline = require('readline')

var RI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


RI.on('line', function(line) {
    calculator(line)
})

const data = {}
const populations = []

function calculator(line){
    if(line[0] === '#') return

    const lineArr = line.split('|')
    const cityObj = {
        city: lineArr[1],
        state: lineArr[2],
        interstates: lineArr[3].split(';')
    }
    if(data.hasOwnProperty(lineArr[0])) {
        data[lineArr[0]].push(cityObj)
    } else {
        data[lineArr[0]] = [cityObj]
        populations.push([lineArr[0]])
        populations.sort((a,b) => b-a)
    }

    console.log("\nNEW RESULTS:\n")
    populations.forEach(pop => {
        console.log(pop + '\n')
        data[pop].forEach(city => {
            console.log(city.city + ', ' + city.state)
            console.log("Interstates: " + city.interstates.sort(comparator).join(', '))
            console.log('\n')
        })
    })

}

function comparator(interstateA, interstateB) {
    return Number(interstateA.slice(2, interstateA.indexOf(' '))) - Number(interstateB.slice(2, interstateB.indexOf(' ')))
}

/*
# Skip this line.
27|Chicago|Illinois|I-94;I-90;I-88;I-57;I-55
83|New York|New York|I-78;I-95;I-87;I-80
15|Phoenix|Arizona|I-10;I-17;I-8
15|Philadelphia|Pennsylvania|I-95;I-76
*/
