// task-44 Sandwiches:

function makeSandwich(...items: string[]){

    console.log("Making a Sandwich with the following items:\n")

    items.forEach(singleItem => console.log(singleItem));

    console.log("Now enjoy your sandwich");
}

makeSandwich("chicken","cheese","mayo","egg");

makeSandwich("bread","butter");

makeSandwich("beef","ketchup","mayo","cucumber","onion","egg");