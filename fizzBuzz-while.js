let fizzes = 0
let buzzes = 0
let fizzBuzzes = 0

// while (fizzes < 1001) {
//     for (let x = 1; x++;) {
//         if (x % 3 == 0 && x % 5 == 0) {
//             console.log(x + ' fizz buzz')
//             fizzBuzzes = fizzBuzzes + 1
//         } else if (x % 3 == 0) {
//             console.log(x +' fizz')
//             fizzes = fizzes + 1
//         } else if (x % 5 == 0) {
//             console.log(x + ' buzz')
//             buzzes = buzzes + 1
//         } else {
//             console.log (x)
//         }
    
    
//     }
    
// }
// console.log('fizzes')

do {
    for (let x = 1; x < 1001; x++) {
                if (x % 3 == 0 && x % 5 == 0) {
                    console.log(x + ' fizz buzz')
                    fizzBuzzes = fizzBuzzes + 1
                } else if (x % 3 == 0) {
                    console.log(x +' fizz')
                    fizzes = fizzes + 1
                } else if (x % 5 == 0) {
                    console.log(x + ' buzz')
                    buzzes = buzzes + 1
                } else {
                    console.log (x)
                }

    }
    
}while (fizzes < 1001);
console.log(fizzes)