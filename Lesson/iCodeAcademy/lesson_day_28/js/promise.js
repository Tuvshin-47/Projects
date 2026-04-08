console.log('Callback hell Solution - Promise');
// fullfilled
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, name: 'Test' };
        resolve(data);
    }, 1000 * Math.floor(Math.random * 4 + 1));
});

console.log('fullfilled', promise);

// default - pending state
const defaultPromise = new Promise((resolve, reject) => {
});

console.log('pending', defaultPromise);

// error - rejected state
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, name: 'Test' };
        reject(data);
    }, 1000 * Math.floor(Math.random * 4 + 1));
})
// console.log('rejected', errorPromise);

// using promise object
promise
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Next Data');
            }, 2000);
        });
    })
    .then((data) => {
        console.log(data);
        // 1 секундын дараа my next next data гэж хэвлэдэг болгоно уу заавал
        // resolve хийдэг болгоорой.
        // дараагийн then-ийг ашиглаад тухайн буцаасан датаг авдаг болгоорой.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('My next next data');
            }, 1000)
        })
    })
    .then((data) => {
        console.log(data);
        // A, B , C-г 1 секундын завсартайгаар гаргадаг болгоно уу
        // promise resolve ашиглаарай.
    })