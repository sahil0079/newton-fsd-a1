
//looging types



//console.log() = prints messages to the console


// console.error('This is an error message: Some error occurred')

// console.warn('This is a warning meesage')

// console.info('this is some important information')
// console.log('this is normal  information')

// console.debug('debugging information')

// const data = [
//     { name: "John", age: 30 },
//     { name: "Peter", age: 20, }
// ]

// // console.log(data)
// console.table(data)


let obj = { name: "John", age: 30 };


for (let key in obj) {
    console.log('key: ', key)

    console.log('value: ', obj[key])
}
