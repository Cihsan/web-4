// -------------------------------------- Problem 01 ----- Ana To Vori
function anaToVori(ana) {
if (typeof ana !== "number") {
return "Please enter a valid Number";
}
if (ana <= 0) {
return "Please enter a Positive Number";
}
const vori = ana / 16;
return vori;
}
// console.log(anaToVori(64))
// ----------------------------------- Problem 02 ----- Panda Cost
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
if (singaraQuantity, somuchaQuantity, jilapiQuantity <= 0) {
return "Please enter a Positive Number";
}
let singaraPrice = 7;
let somuchaPrice = 10;
let jilapiPrice = 15;
let totalCost = (singaraQuantity * singaraPrice) + (somuchaQuantity * somuchaPrice) + (jilapiQuantity * jilapiPrice);
return totalCost;
}
// console.log(pandaCost(5, 10, 20));
// ----------------------------------- Problem 03 ----- Picnic Budget
function picnicBudget(person) {
if (typeof person !== "number") {
return "Please enter a valid Number";
}
if (person <= 0) {
return "Please enter a Positive Number";
}
if (person <= 100) {
let totalBudget = person * 5000;
return totalBudget;
}
else if (person <= 200) {
let first100 = 100 * 5000;
let second100 = (person - 100) * 4000;
let totalBudget = first100 + second100;
return totalBudget;
}
else {
let first100 = 100 * 5000;
let second100 = 100 * 4000;
let more200 = (person - 200) * 3000;
let totalBudget = first100 + second100 + more200;
return totalBudget;
}
}
// console.log(picnicBudget(100));
// ----------------------------------- Problem 04 ----- Odd Friend
let friends = ['Anam Ahmed', 'Shihab Ahmed', 'Mizanur Rahman Mizan', 'Shubo Raj Hasan', 'Aminul Hoque Amin', 'Abdullah Al Jaber', 'Joynal Ahmed Raihan',];
function oddFriend(friends) {
if (typeof friends !== 'object') {
return "Please Ensure An Array";
}
let oddName = [];
for (const i of friends.reverse()) {
let element = i;
if (element.length % 2 != 0) {
oddName = element;
}
} return oddName;
}
// console.log(oddFriend(friends));