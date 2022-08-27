console.log("Coming from basic file.");

// string type
let user_name : string = 'user name';

// number
let user_age: number = 28;

// boolean
let is_developer: boolean = true;

// array
let programing_language_know: string[] = ['c','c++', 'java']
let score : number[] = [1,4,5]

// tuples
let user_address: [string, number] = ['india', 91]

// enum

enum Color {gray, green, blue}

enum Color1 {gray, green = 100, blue}

let user_color: Color = Color.blue

// any type

let car: any = "BMW"

car = {brand: 'BMW', series: 4}

console.log(user_address)
console.log(user_color)
console.log(car)
