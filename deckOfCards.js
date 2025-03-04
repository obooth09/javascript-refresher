




let suit
let number
let rank
let printSuit
for (suit = 1; suit < 5; suit++) {
    if (suit == 1) {
        printSuit = 'hearts'
    } else if (suit == 2) {
        printSuit == 'clubs'
    } else if (suit == 3) {
        printSuit = 'spades'
    } else if (suit == 4) {
        printSuit = 'diamonds'
    }


for (number = 1; number < 14; number++) {

    if (number == 1) {
        rank = 'Ace'
    } else if (number == 11) {
        rank = 'Jack'
    } else if (number == 12) {
        rank = 'Queen'
    } else if (number == 13) {
        rank = "King"
    } else {
        rank = number
    }
    console.log(rank + " of " + printSuit)
}
   
    
}



