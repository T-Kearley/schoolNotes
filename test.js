function whosPaying(names){
    var numberOfPeople = names .length;
    var random = Math.floor( Math.random() * numberOfPeople);
    var random = names [random];
    return random + " is buying lunch"
}
console.log(whosPaying (["Angela", "Ben", "Jenny", "Michael", "Chloe"]))