// 2 Memories : Stack(Primitive dt), Heap(Reference dt)

let myPokemon="Snorlax";//primirive type stored in stack
let anotherPokemon=myPokemon;//copy not the original reference
console.log(myPokemon);
console.log(anotherPokemon);

anotherPokemon="Pikachu";//only copy changed
console.log(myPokemon);
console.log(anotherPokemon);

let user={//nonPrimirtives/reference stored in heap
    email: "user@email.com",
    upi: "abcdef@bank"
}

let userTwo=user;//Not a copy created reference given
console.log(user.email);
console.log(userTwo.email);

userTwo.email="user2@email.com";//both changed
console.log(user.email);
console.log(userTwo.email);
