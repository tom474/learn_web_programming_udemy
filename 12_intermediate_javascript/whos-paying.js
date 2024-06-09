function whosPaying(names) {
    var index = Math.floor(Math.random() * names.length);
    var person = names[index];
    return person + " is going to buy lunch today!";
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(names));