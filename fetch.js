// Fetch API
import fetch from 'node-fetch';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => { console.log(data) })
//     .catch((error) => {
//         console.log("Error:", error);
//     })

// kullanıcının formda doldurduğu bilgiler
// let todo = { userId: 1, title: "Deneme", completed: false };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer token"
//     },
//     method: "POST",
//     body: JSON.stringify(todo)
// }).then(response => response.json()).then((data) => console.log(data));


const getDataFromServer = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
    let data = await response.json();
    console.log(data);
}

getDataFromServer();