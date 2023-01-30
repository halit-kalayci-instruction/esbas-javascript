const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 rejected");
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 3000);
})

Promise.race([promise1, promise2, promise3]).then((data) => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

// Promise.all([promise1, promise2, promise3]).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// Promise.allSettled([promise1, promise2, promise3]).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })


