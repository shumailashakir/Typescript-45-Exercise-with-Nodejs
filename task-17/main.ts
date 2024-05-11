// task-17 Shrinking Guest:


let guestList = ["Shumaila","Shaista","Anila"];

let dontCome = guestList [0];

console.log( dontCome ," Bimar hn nhi aa skti");

guestList.splice(0, 1, "Farheen");

console.log("Good News ! we have found a bigger table for dinner");

guestList.unshift("Asma");

guestList.push("Amber");

let middleIndex: number = Math.floor (guestList.length / 2);

guestList.splice(middleIndex, 0, "sana");

console.log("Updated list of our guest");

guestList.forEach(oneguest => console.log(`Assalamom-alikum ${oneguest} , you are cordially invited to dinner`));

console.log("Unfortunately the new dinner table wont arrive on time , so I can only invite two guest to dinner with me");

while(guestList.length > 2) {

    let removedGuest = guestList.pop();

    console.log(`Sorry,${removedGuest}, I cant invite you to dinner`);

}
console.log("Invitations to the last 2 guests");

guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo},you are still invited to dinner`));

guestList.pop();

guestList.pop();

console.log("Empty List:",guestList);
