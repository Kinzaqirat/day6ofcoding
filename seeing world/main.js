var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// original order
var placesToVisit = ["Spain", " Japan", "Malayisa", "Turkey"];
console.log(placesToVisit);
// alphabbtical oder
console.log(__spreadArray([], placesToVisit, true).sort());
//original order
console.log("still in original place", placesToVisit);
//reverse
console.log(__spreadArray([], placesToVisit, true).reverse());
//original order
console.log("still in original place", placesToVisit);
//reverse
console.log(placesToVisit.reverse());
//original order
console.log(placesToVisit.reverse());
//alphabetical order
console.log(placesToVisit.sort());
//reverse
console.log(placesToVisit.reverse());
