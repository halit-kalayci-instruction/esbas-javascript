let carArray = [
    { brand: "BMW", model: "520", year: 2022, price: 1000 },
    { brand: "BMW", model: "320", year: 2021, price: 1200 },
    { brand: "Mercedes", model: "C", year: 2021, price: 1500 },
    { brand: "Fiat", model: "Egea", year: 2018, price: 500 }
]
// forEach
carArray.forEach((car) => {
    console.log(car);
});
console.log("*********");
// map
let newArray = carArray.map((car) => {
    // Destructring
    // Spread operator
    // ...
    return { ...car, price: car.price + 50 }
});
console.log(newArray);

// filter, find
// filter => verilen condition'a göre conditiona uyumlu elemanları array olarak geriye döner..
let filteredArray = carArray.filter((car) => {
    return car.price > 600
});
console.log("*************");
console.log(filteredArray);

let bmwCar = carArray.find((car) => car.brand == "BMW");
console.log(bmwCar);

console.log("******* BMW CAR VS CARS ***********")

let bmwCars = carArray.filter((car) => {
    return car.brand == "BMW" && car.price > 1100;
});
console.log(bmwCars[bmwCars.length - 1]);


// Fiyatı 900'den fazla olan arabalara 100 tl indirim uygula..
console.clear();
let newCarArray = carArray
    .filter((car) => car.price > 900)
    .map((car) => {
        return { ...car, price: car.price - 100 }
    })
console.log(newCarArray);


// tüm arabaların fiyatlarının toplamını hesaplamak..
let totalPrice = 0;
carArray.forEach((car) => {
    totalPrice += car.price;
})
console.clear();
console.log(totalPrice);

// accumulator
// accumulation => birikim
let totalPriceWithReduce = carArray.reduce((acc, car) => {
    return acc + car.price;
}, 0)
console.log(totalPriceWithReduce);

// acc = 0
//  { brand: "BMW", model: "520", year: 2022, price: 1000 },
// acc = 1000
//  { brand: "BMW", model: "320", year: 2021, price: 1200 },
// acc = 1000 + 1200
