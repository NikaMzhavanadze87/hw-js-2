// ვიცი ესე არ ითვლება საშუალო, მაგრამ რადგან არ გვისწავლია loop და ფუნქციები ესე გავაკეთე.
let myArr = [4, 6, 2, 8, 52];
let arrSum = myArr[0] + myArr[1] + myArr[2] + myArr[3] + myArr[4];
let arrCount = myArr.length;
let arrMean = arrSum/arrCount;
console.log(arrMean);
// #2-------
let myObjArr = [
    {
        name: "Nika",
        age: 35,
    },
    {
        name: "Elene",
        age: 21,
    },
    {
        name: "Tea",
        age: 27,
    },
    {
        name: "Zura",
        age: 34,
    },
    {
        name: "Nuka",
        age: 25,
    },

];
// #3-------
let myObj = {
    firstName: "Nika",
    lastName: "Mzhavanadze",
    age: 35,
    phoneNumber: [555, 444, 333],
    address: ["Tbilisi", "street", "app"],
    zipCode: 1421,
};
// #4-------
let userName = "User name is ";
console.log(userName + myObj.firstName)
let userAge = "User age is ";
console.log(userAge + myObj.age) 
let userAddress = "User address is ";
console.log(userAddress + myObj.address[0]);