//  task-18 Seeing the World:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["Chaina", "Denmark", "Brazil", "Australia", "Europe"];
console.log("original order:", countriesToVisit);
console.log("Alphabetical order", __spreadArray([], countriesToVisit, true).sort());
console.log("still in original order:", countriesToVisit);
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("still in original order:", countriesToVisit);
console.log("original array reversed:", countriesToVisit.reverse());
console.log("Back to original order:", countriesToVisit.reverse());
console.log("Sorted in alphabetical order:", countriesToVisit.sort());
console.log("original array reversed again:", countriesToVisit.reverse());
