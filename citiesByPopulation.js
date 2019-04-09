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
//Keys are populations.
//Values are an array of cities with that population.
const data = {}

//Populations array to easily sort by populatin later.
const populations = []

function calculator(line){
    //Skip the line if it starts with '#'
    if(line[0] === '#') return

    //Line is splitted by '|' for every line entered.
    const lineArr = line.split('|')

    //An object representing this city is created.
    const cityObj = {
        city: lineArr[1],
        state: lineArr[2],
        interstates: lineArr[3].split(';')
    }

    //If data has the same population already, push the city object to the array.
    //Else new key is created by the population number and value is an array with one element which is the city object. Also this unique population is pushed to the populations array and the array is sorted.
    if(data.hasOwnProperty(lineArr[0])) {
        data[lineArr[0]].push(cityObj)
    } else {
        data[lineArr[0]] = [cityObj]
        populations.push([lineArr[0]])
        populations.sort((a,b) => b-a)
    }

    //Every time this calculation happens, we output the new results.
    console.log("\nNEW RESULTS:\n")

    //For each population (pop) in the populations array:
    //First population is printed,
    //Then the city information is printed in the expected format.
    populations.forEach(pop => {
        console.log(pop + '\n')
        data[pop].forEach(city => {
            console.log(city.city + ', ' + city.state)
            console.log("Interstates: " + city.interstates.sort(comparator).join(', '))
            console.log('\n')
        })
    })

}

//Comparator function is used to sort interstates.
function comparator(interstateA, interstateB) {
    return Number(interstateA.slice(2, interstateA.indexOf(' '))) - Number(interstateB.slice(2, interstateB.indexOf(' ')))
}
