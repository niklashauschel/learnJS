console.log('Hello');
setInterval(()=> {
    const prom = new Promise(function(resolve, reject){
            const random = Math.random();
            if(random > 0.5) {
                resolve(random);
            } else {
                reject('Number to less');
            }
    });

    prom.then(val => console.log('Resolved', val))
        .catch(reason => console.log('Rejected:', reason))

}, 2000);