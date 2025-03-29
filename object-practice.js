let student1 = {fName: 'Sue', lName: 'Smith', gpa: 2.9, playsVollyball: true }
let student2 = {fName: 'Rob', lName: 'Roberts', gpa: 2.1, playsVollyball: false}


console.log('I know ' + student1.fName, student1.lName)

if(student1.playsVollyball) {
    console.log(student1.fName + ' does play volleyball')

}else {
    console.log (student1.fName + ' does not play volleyball')
}

let students = [student1]
students.push(student2)
students.push({fName: 'Zeeb', lName: 'Doyle', gpa: 4.9, playsVollyball: true})
console.log(students)
student1.fName = 'Stuuuu'
student2.fname = 'blob'
students[students.length-1].gpa += 0.5
console.table(students)

