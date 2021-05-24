/**
*Solution:Create a new object type
*Create a new object type "Book" using a class or an object constructor function
* add at least 5 book objects
*/
import Backpack from "/Backpack.js";
import Book from "/Book.js";
const everydayPack = new Backpack(
"Everyday Backpack",
30,
"grey",
15,
26,
false,
"December 5, 2018 15:00:00 PST2"
);

console.log("The everydayPack object:", everydayPack);
console.log("the pocketNum value:", everydayPack.pocketNum);
console.log("Days since acquired:", everydayPack.backpackAge);
