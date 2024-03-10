var completed = false


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function one() {
    await delay(5000)
    console.log('hello')
    console.log('Why is this working')
    completed = true
}

function two() {
    console.log('hi')
    console.log('hi')
    console.log('hi')
    console.log('hi')
    console.log('hi')
}

async function start() {
   await one()
    two()
}

start()