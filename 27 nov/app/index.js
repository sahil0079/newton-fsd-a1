const thunk = require('thunks')()
const fs = require('fs')

const deferredFunction = thunk(function (done) {
    fs.stat('package.json', done)
});

deferredFunction(function (error, res) {
    console.log(error, res)
})