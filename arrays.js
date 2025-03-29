let names = ['Olivia', 'Tyler', 'Lilly', 'Micah', 'Ady']


console.log(names)

names.push('Mr. Gorton')
console.log(names)

console.log('the second value is ' + names[1]) 

printAllNames(false)

console.log('__________')


printAllNames(true)

function printAllNames(sort) {
    if (sort) {
        names.sort()
    } 
    for (let i = 0; i < names.length; i++){
        console.log(names[i])
    }
}