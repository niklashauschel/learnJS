async function waitForcall(){
    const result = new Promise((response, reject) => {
        const random = Math.random();
        setTimeout(()=> {
            if(random > 0.5) {
                response('good')
            } else {
                reject('Poor guy')
            }
        }, 3000)
        
    });

    try {
        console.log('Result is', await result);
    } catch(err) {
        // catches errors
        console.log(err);
    }
}

waitForcall();
console.log('Faster log');