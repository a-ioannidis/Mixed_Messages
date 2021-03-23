const typeOf = ["food", "activity", "sports"]
const food = ["apple", "banana", "spaggeti", "pizza", "chicken", "rice", "beans"]
const activity = ["watch a movie", "clean the house", "read a book", "learn to code", "hack a device (to learn)"]
const sports = ["football", "tennis", "ping - pong", "basketball", "volleyball"]


function chooseRandom(ar) {
   return Math.floor(Math.random()*ar.length)
}


function mixMessage() {

    switch (typeOf[chooseRandom(typeOf)]) {
        case 'food':
            return `Time to eat: ${food[chooseRandom(food)]}`
        case 'activity':
            return `Time for activity: ${activity[chooseRandom(activity)]}`
        case 'sports':
            return `Wake lets play: ${sports[chooseRandom(sports)]}`
        default:
            return `Nothing for today`

    }
}

console.log(mixMessage())