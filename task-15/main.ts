// task-15 Changing Guest List: 

let guestList = ["Shumaila","Shaista","Anila"];

let dontCome = guestList [0];

console.log( dontCome ," Bimar hn nhi aa skti");

guestList.splice(0, 1, "Farheen");

guestList.forEach(guest => console.log(`Assalamoalikum ${guest} , you are cordially invited to dinner`))