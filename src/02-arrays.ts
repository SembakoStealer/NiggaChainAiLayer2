//Cara 1: Tipe [] Square brackets
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Jeremy", "Joy", "ThompsonFuki"]

//Cara 2: Array[]
let scores: Array<number> = [1, 2, 3, 4];
let fruits: Array<string> = ["Apple", "Orange", "Banana"];

//Array dengan multiple types (union type)
let mixed: (string | number) [] = [1, "Two", 3, "Four"];

//Array Methods
numbers.push(6); //Menambah Element
names.pop(); // Menghapus element terakhir

//iterasi array
numbers.forEach(num =>{
    console.log("Number: ", num);
})

//Array mapping

const doubledNumbers = numbers.map((num) => num * 2)
console.log("Doubled numbers: ", doubledNumbers);

export {};