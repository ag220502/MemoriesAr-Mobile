let array = []
array.push("\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt")
array.push("Did you know? The first camera phone was invented in 2000.")
array.push("\"Creativity is intelligence having fun.\" - Albert Einstein")
array.push("In 2019, the global augmented reality market size was valued at $10.7 billion.")
array.push("\"A computer would deserve to be called intelligent if it could deceive a human into believing that it was human\" - Alan Turing")
array.push("Did you know? The first computer virus was created in 1983.")
array.push("\"The best way to predict the future is to invent it.\" - Alan Kay")
array.push("The first ever social media site, Six Degrees, was launched in 1997.")
array.push("\"The only way to do great work is to love what you do.\" - Steve Jobs")
array.push("Did you know? The first ever video game was created in 1958.")
array.push("\"You miss 100% of the shots you don't take.\" - Wayne Gretzky")
array.push("\"Don't watch the clock; do what it does. Keep going.\" - Sam Levenson")
array.push("Scrapbooking can improve memory and cognitive function, according to some studies.")
array.push("Pinterest, a popular scrapbooking and social media platform, has over 400 million active users.")

const randNum = (array) => {
    min = 0;
    max = array.length;
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;
    return rand;
}


const getRandQuote = () => {
    return array[randNum(array)]
}

module.exports = { getRandQuote }