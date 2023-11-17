

function greetings() {
    console.log('Hi there');
    setTimeout(() => { console.log('Inside second timeout') }, 2000)
};

function runningFor1Sec() {
    //blocks the javascript thread or callstack for 1 seconds
};

setTimeout(greetings, 0);
runningFor1Sec();
console.log('Bye')

//web api rules
//event loop, tasks queues

