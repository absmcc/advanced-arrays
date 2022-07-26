let studentNames = ["Tom", "Lisa","Tim"]

let teachers = [
{
name: "Manny",
subjects: "arrays, javascript, mongodb"
},
{
name: "bobby",
subjects: "arrays,javascript"
}
]

// //sort(
// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames)

//filter() using an anonymous function

//const filteredStudentNames = studentNames.filter(function(student)

// function (student) => {
//     return student === "Lisa"
// }


// (student) => student === "Lisa"
    
//(student) => true //don't do this
//console.log(filteredStudentNames)

//studentNames = studentNames.filter((student) => true)

// const Lisa =studentNames.find((student) => student === "Lisa")
// console.log(Lisa)


// const somelisa = studentNames.some((student) => student === "Lisa")
// console.log("Do we have at least a Lisa?", somelisa)

// const everyLisa = studentNames.every((studen
//) => student === "Lisa")
// console.log("Everyone's a lisa?",everyLisa )

// studentNames.forEach((student) => {
//     console.log(student)
// }
// const justTheNames = teachers.map(teacher =>{
//     return teacher.name
// }) 
// console.log(justTheNames)  

//let ages = [11, 17, 20, ]


let numbers = [10, 20, 30]

// let totals = numbers.reduce((accumulator, currentValue, index, array) => {
// return accumulator + currentValue;
// }, 0)//the 0 is the starting point
// console.log(totals)

// let total = 0
// for(let i = 0; i< numbers.length; i++){
//     total += numbers[i]
// }

total = numbers.reduce((total, currentNumber)=> total + currentNumber, 0)
console.log(total)
