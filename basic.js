"use strict";
console.log("Coming from basic file.");
// string type
var user_name = 'user name';
// number
var user_age = 28;
// boolean
var is_developer = true;
// array
var programing_language_know = ['c', 'c++', 'java'];
var score = [1, 4, 5];
// tuples
var user_address = ['india', 91];
// enum
var Color;
(function (Color) {
    Color[Color["gray"] = 0] = "gray";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var Color1;
(function (Color1) {
    Color1[Color1["gray"] = 0] = "gray";
    Color1[Color1["green"] = 100] = "green";
    Color1[Color1["blue"] = 101] = "blue";
})(Color1 || (Color1 = {}));
var user_color = Color.blue;
// any type
var car = "BMW";
car = { brand: 'BMW', series: 4 };
console.log(user_address);
console.log(user_color);
console.log(car);
