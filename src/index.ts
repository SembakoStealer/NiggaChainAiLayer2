let hasil: number = 10;
hasil = 1000;

console.log(hasil);

interface PersonalData {
    name: string;
    age: number;
    email: string;
    address: string;
    hobbies: string[];
}

const personalData: PersonalData = {
    name: "John Doe",
    age: 20,
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    hobbies: ["coding", "reading", "traveling"]
}

function printPersonalData(data: PersonalData) {
    console.log(`Name: ${data.name}`);
    console.log(`Age: ${data.age}`);
    console.log(`Email: ${data.email}`);
    console.log(`Address: ${data.address}`);
    console.log("Hobbies: ");
    data.hobbies.forEach((hobby) => {
        console.log(`- ${hobby}`);
    }) 
}

printPersonalData(personalData);
