# Cities By Population
To Run the program:
clone the repo first and from the root directory run this command. Make sure Node.js is installed.
``` bash
node citiesByPopulation.js
```
Write the following input line by line or copy paste all of it and hit enter.
The program will calculate result for each line and print the new results for each line you enter. Last output will be the final result.

#### Input
```# Skip this line.
27|Chicago|Illinois|I-94;I-90;I-88;I-57;I-55
83|New York|New York|I-78;I-95;I-87;I-80
15|Phoenix|Arizona|I-10;I-17;I-8
15|Philadelphia|Pennsylvania|I-95;I-76
```

#### Expected Output
```
NEW RESULTS:

83

New York, New York
Interstates: I-78, I-80, I-87, I-95

27

Chicago, Illinois
Interstates: I-55, I-57, I-88, I-90, I-94

15

Phoenix, Arizona
Interstates: I-8, I-10, I-17

Philadelphia, Pennsylvania
Interstates: I-76, I-95
```


# Interstates By Cities
To Run the program:
clone the repo first and from the root directory run this command. Make sure Node.js is installed.
``` bash
node interstatesByCity.js
```
Write the following input line by line or copy paste all of it and hit enter.
The program will calculate result for each line and print the new results for each line you enter. Last output will be the final result.

#### Input
```# Skip this line.
# Skip this line.
4|Raleigh|North Carolina|I-40;I-85;I-95
27|Chicago|Illinois|I-94;I-90;I-88;I-57;I-55
2|Madison|Wisconsin|I-94;I-90
```

#### Expected Output
```
NEW RESULTS:

I-40 1
I-55 1
I-57 1
I-85 1
I-88 1
I-90 2
I-94 2
I-95 1
```

