let s15 = document.querySelector(".s15");
let student15 = {
    name: "Denisha",
    age: 18,        
    contact : "1234567890",
    enail : "j@j.com",
    education : "bca",
    address : "kathmandu",
    hobbies : ["singing","dancing","reading"],
    greeting : () => {
        return "Hello World";
    }
};
s15.innerHTML = "Name: " + " " + student15.name + "<br> <br>" ; 
s15.innerHTML += "Age: " + " " + student15.age + "<br> <br>" ;
s15.innerHTML += "Contact: " + " " + student15.contact + "<br> <br>" ;
s15.innerHTML += "Email: " + " " + student15.enail + "<br> <br>" ;
s15.innerHTML += "Education: " + " " + student15.education + "<br> <br>" ;
s15.innerHTML += "Address: " + " " + student15.address + "<br> <br>" ;
s15.innerHTML += "Greeting: " + " " + student15.greeting() + "<br> <br>" ;
s15.innerHTML += "Hobbies: " + " " + student15.hobbies + "<br> <br>" ;