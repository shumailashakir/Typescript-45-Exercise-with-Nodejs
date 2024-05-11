// task-15 Changing Guest List: 
var guestList = ["Shumaila", "Shaista", "Anila"];
var dontCome = guestList[0];
console.log(dontCome, " Bimar hn nhi aa skti");
guestList.splice(0, 1, "Farheen");
guestList.forEach(function (guest) { return console.log("Assalamoalikum ".concat(guest, " , you are cordially invited to dinner")); });
