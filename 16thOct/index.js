

// console.log(typeof {});
// console.log(typeof []);



// console.log(Array.isArray({}));
// console.log(Array.isArray([]));


//map and set


// let user = {
//     1: 'John'
// }


// let user = {
//     name: 'John',
//     age: 20
// }

// for (let a in user) {

//     console.log(a)
// }


//map is collection of keyed data
//in Map keys can be of any type


// let nums = [
//     { name: 'John', age: 30 }
// ]

// // for (let i = 0; i < nums.length ; i +){

// //     nums[i].name
// // }

// for (let value of nums) {
//     console.log(value.name)
// }


// let map = new Map();

// // console.log(map)
// // map.set(key, value)
// map.set('1', 'string');
// map.set(1, 'number');
// map.set(true, 'bool');

// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.size)


// console.log(map.get(1));
// console.log(obj[1]);


// let john = { name: 'John' };

// let noOfVisitsCount = new Map();

// noOfVisitsCount.set(john, 100);

// console.log(noOfVisitsCount.get(john))
// console.log(noOfVisitsCount)



// let map = new Map();


// map.set('name', 'John')
//     .set('age', 20)
//     .set('city', 'Delhi')
//     .set('country', 'India')

// console.log(map)



//looping over map

// let userMap = new Map(
//     [
//         ['age', 20],
//         ['city', 'Delhi'],
//         ['name', 'John'],
//         ['country', 'India']
//     ]
// )

// console.log(userMap)

//work with  the keys 

// for (let key of userMap.keys()) {
//     console.log('key', key)
// }

// //work with  the values 

// for (let value of userMap.values()) {
//     console.log('value', value)
// }

// for (let keyValue of userMap) {
//     console.log('keyValue', keyValue)
// }

//the insertion order is used in case map unlike regular object


// let userMap = new Map(
//     [
//         ['age', 20],
//         ['city', 'Delhi'],
//         ['name', 'John'],
//         ['country', 'India']
//     ]
// );

// userMap.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`)
// })



//Object methods


// let obj = {
//     value1: 1,
//     value2: 2,
//     value3: 3,
//     value4: 4,
// }

// //Object.keys(obj) => returns an array of keys
// //Object.values(obj) => returns an array of values
// //Object.entries(obj) => returns an array of [key, value] pair


// let transformedArray = Object.values(obj).map(v => v * 2)

// console.log(transformedArray)

// // [1, 4, 6, 8]


//transforming an object

//object => processing  => transformedObject





// let stationaryItems = {
//     pen: 5,
//     pencil: 3,
//     rubber: 5,
//     scale: 15,
// }

// let keyValuePairs = Object.entries(stationaryItems);
// console.log('keyValuePairs', keyValuePairs)

// let transformedArray = keyValuePairs.map(function (item) {
//     console.log('item', item)
//     let newArray = [item[0], item[1] * 3];
//     return newArray;
// })
// console.log('transformedArray', transformedArray)
// let convertIntoObject = Object.fromEntries(transformedArray)
// console.log('convertIntoObject', convertIntoObject)

// let stationaryItemsWithUpdatedPrice = Object.fromEntries(Object.entries(stationaryItems).map(item => [item[0], item[1] * 3]))

//object => array of arrays => transformed array of arrays =>transformed object

//  {
//     pen: 15,
//     pencil: 9,
//     rubber: 15,
//     scale: 45,
// }

// Object.entries({
//     name:'John',
//     age:20
// })



//continue map

// let obj = {
//     name: 'Peter',
//     age: 30
// }

// let map = new Map(Object.entries(obj))

// console.log(map)
// //create a map from this object?


// let backToObj = Object.fromEntries(map)

// console.log(backToObj)

//Set

//=> set of unique values (without keys)

// let set = new Set();


// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);
// set.add(10);
// set.add(30);

// console.log(set)

// for (let value of set) {
//     console.log('value', value)
// }


//array of multiple users
//unique user
//set


// let nums = [10, 10, 20, 30, 40, 40];


// let numsSet = new Set(nums);

// // console.log([...numsSet])


// //set.keys() -  returns an iterable for keys
// //set.values()-  returns an iterable for values
// //set.entries() - -  returns an iterable for [value, value]

// let entries = numsSet.entries()
// console.log(entries)


//other simple methods

//map.has(key) => return boolean 
//map.delete(key)
//map.clear() => removes everything from the map


//set.delete(value)
//set.has(value) => returns boolean
//set.clear() => removes everything from the set


console.dir(document)

// < head >


console.dir(document.head)
