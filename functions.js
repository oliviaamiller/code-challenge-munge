/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];

findByName('jumpy', petsArray)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    const findName = arr.filter(pet => pet.name === name)[0];
    return findName;
}

/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/

export function getDogs(arr) {
    const dogs = arr.filter(pet => {
        if(pet.type === 'dog') {
            return true;
        }
    });
    return dogs;
}

/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const dogNames = arr        
        .filter(pet => pet.type === 'dog')
        .map(pet => pet.name);
    return dogNames;
}


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const namesArr = arr.map(pet => {
        return pet.name;
    });
    return namesArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reverseType = arr.map(pet => {
        return pet.type;
    }).reverse();
    return reverseType;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArr = arr.map(pet => {
        return {
            nombre: pet.name,
            tipo: pet.type
        };
    }); 
    return spanishArr;
}




/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

// export function makeArrayOfNamesWithMap(arr) {
//     return [];
// }

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const hungryArr = arr.map(pet => {
        return {
            name: pet.name,
            isHungry: true,
            type: pet.type
        };
    }); 
    return hungryArr;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shoutArr = arr.map(pet => {
        return {
            name: pet.name.toUpperCase(),
            type: pet.type
        };
    }); 
    return shoutArr;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
   
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    return [];
}

////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    const cars = arr.filter(vehicle => {
        if(vehicle.type === 'car') {
            return true;
        }
    });
    return cars;
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    const getChevy = arr.filter(vehicle => {
        if(vehicle.make === 'chevy' && vehicle.type === 'car') {
            return true;
        }
    });
    return getChevy;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return '';
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    return 0;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
