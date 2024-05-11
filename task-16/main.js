// task-16 More Guests:
var guestList = ["Shumaila", "Shaista", "Anila"];
var dontCome = guestList[0];
console.log(dontCome, " Bimar hn nhi aa skti");
guestList.splice(0, 1, "Farheen");
console.log("Good News ! we have found a bigger table for dinner");
guestList.unshift("Asma");
guestList.push("Amber");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "sana");
console.log("Updated list of our guest");
guestList.forEach(function (oneguest) { return console.log("Assalamom-alikum ".concat(oneguest, " , you are cordially invited to dinner")); });
