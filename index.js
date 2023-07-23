// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {

    cats.push(cat);

}

function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(cat) {
    let newCat = [...cats, cat];
    return newCat;
}


function prependCat(cat) {
    let newCat = [cat, ...cats];
    return newCat;
}
function removeLastCat() {
    let newCat = cats.slice(0, 2);
    return newCat;
}
function removeFirstCat() {
    let newCat = cats.slice(-2);
    return newCat;
}


