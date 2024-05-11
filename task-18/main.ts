//  task-18 Seeing the World:

let countriesToVisit: string[] = ["Chaina","Denmark","Brazil","Australia","Europe"];

console.log("original order:",countriesToVisit);

console.log("Alphabetical order",[...countriesToVisit].sort());

console.log("still in original order:" ,countriesToVisit);

console.log("Reverse order:",[...countriesToVisit].reverse());

console.log("still in original order:" ,countriesToVisit);

console.log("original array reversed:", countriesToVisit.reverse());

console.log("Back to original order:", countriesToVisit.reverse());

console.log("Sorted in alphabetical order:",countriesToVisit.sort());

console.log("original array reversed again:", countriesToVisit.reverse());