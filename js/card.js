let tbody = document.getElementById("studentdata");
const array = [
    {
        sr_no : 1,
        name: "Denisha",
        age: 18,
        contact : "1234567890",
        enail : "j@j.com",  
    },
    {
        sr_no : 2,
        name: "Monika",
        age: 18,
        contact : "1234567890",
        enail : "j@j.com",  
    },
    {
        sr_no : 3,
        name: "Divya",
        age: 18,
        contact : "1234567890",
        enail : "j@j.com",  
    },
    {
        sr_no : 4,
        name: "Aishwarya",
        age: 18,
        contact : "1234567890",
        enail : "j@j.com",  
    },
    {
        sr_no : 5,
        name: "Sushmita",
        age: 18,
        contact : "1234567890",
        enail : "j@j.com",  
    },
] 
array.forEach((element) => {
    studentdata.innerHTML +=` <tr><td>${element.sr_no}</td><td>${element.name}</td><td>${element.age}</td><td>${element.contact}</td><td>${element.enail}</td></tr> `
});