// call stack
// sync ve async

// setTimeout(() => {
//     console.log("Merhaba 2")
// }, 1500);

// setTimeout(() => {
//     console.log("Merhaba 3")
// }, 1500);

// 4,5  saniye
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log("1.for: " + i)
//     }, 1000);
// }

// for (let i = 10; i < 20; i++) {
//     setTimeout(() => {
//         console.log("2.for: " + i)
//     }, 1000);
// }

// for (let i = 0; i < 10; i++) {
//     console.log("sync: " + i);
// }

// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         console.log("1. timeout: " + i);
//     }
// }, 1500);


// setTimeout(() => {
//     for (let i = 10; i < 10000; i++) {
//         console.log("2. timeout: " + i);
//     }
//     // api call
// }, 50);

// promise
// resolve, reject
// await, then-catch-finally

let sendRequestToServer = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.startsWith("esbaş")) {
                console.log("Resolve ediliyor..");
                resolve({ success: false, message: "Başarıyla kayıt olundu.", data: { username: "deneme" } });
            }
            else {
                console.log("Reject ediliyor..");
                reject("Server kapalı...");
            }
        }, 3000);
    })
}

let myFunction = async () => {
    let data = await sendRequestToServer("esbaş");
    console.log(data);
    console.log("API CALL BİTTİ");
    console.log("Bu kodun sync çalışmasını istemiyorum..")
}

// myFunction();


let myFunction2 = () => {
    let data = sendRequestToServer("esbaş").then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
    // loading 
    console.log("Bu kodun sync çalışmasını istemiyorum..");
}

myFunction2();

/// veriyi işleme kodları..

//sendRequestToServer("esbaş")
// .then((data) => {
//     console.log("60. satır: ", data);
// })
// .catch((error) => {
//     console.log("63. satır: " + error);
// })
// .finally(() => {
//     console.log("66. satır: Finally çalıştı.");
// })
