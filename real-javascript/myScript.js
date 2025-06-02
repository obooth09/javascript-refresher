

function doStuff(){
    let name = document.getElementById('name').value
    let animal = document.getElementById('animal').value
    let msg = "Hello " + name + ". Don't you wish you were a " + animal + "?"
    
    let myH = document.getElementById('myH').innerHTML = msg
    myH.innerHTML = msg
}

function changeColor(){
    console.log('working')
    document.getElementById('name').style.backgroundColor = 'red'
}
