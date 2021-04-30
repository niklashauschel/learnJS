// Callbacks are called after a while. Here every 5 seconds

setInterval(calc, 5000);

function calc() {
    const random = Math.random();
    console.log('Result', 10 * random);
}