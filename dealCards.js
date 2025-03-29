
// let card1 = { rank: 'ace', suit: 'hearts'}
// let card2 = {rank: 7 , suit: 'diamonds'}
// let card3 = {rank: 'king', suit: 'spades'}

//console.log(card1)



//console.log('You are holding the ' + card1.rank + ' of ' + card1.suit + ' and the ' + card2.rank+ ' of ' + card2.suit)
let deck = []
let place = 0
let suits = ['hearts', 'diamonds', 'spades', 'clubs']
let rank = ['ace', 2,3,4,5,6,7,8,9,10, 'jack', 'queen', 'king']
let r
let s




for (let i = 0; i < 13; i++) {
    for (let s = 0; s < suits.length; s++) {
        
        
        console.log( rank[place] + ' of ' + suits[s])
        
    }
    place = place + 1
    deck.push(rank[place] + ' of ' + suits[s])
    
}


console.log(deck)
deck.splice(Math.floor(Math.random() * 53), 1)
deck.splice(Math.floor(Math.random() * 52), 1)
console.log(deck)

