
//  1. Declare a variable named weight.

// let weight

//  2. What data type is the above variable?

// console.log(typeof weight)

/*  
    3. Declare a variable and assign values to each of the data:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/ 

// let name = "Alex"
// let age = 23
// let stars = 4.8
// let isSubscribed = true 

/*
    4. The variable students below is of what data type?

    4.1 Assign it the same properties and values as in exercise 3.

    4.2 Display the following message in the console:

        <name> age <age> weight <weight> kg.

        Attention, replace <name> <age> and <weight> with the values of each property of the object.
*/

let student = {
    name: "Alex",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
}


// console.log(`${student.name} age ${student.age} weight ${student.weight} kg.`)

/*
    5.  Declare a variable of type array, called students and do not assign any value to it, that is, just the empty array.
    
*/

let students = []

/*
    6. Reassign value to the variable above, placing the student object from question 4 inside it. (Don't copy and paste the object, but use the created object and insert it into the array)
*/

students = [
    student
]


/*
    7. Put in the console the value of the zero position of the array above.
 
*/

// console.log(students[0])

/*

    8. Create a new student and place it in position 1 of the Array students.

*/

const jhon = {
    name: "Jhon",
    age: 25,
    weight: 60.7,
    isSubscribed: true,

} 

// students = [
//     student,
//     jhon
// ]

//or

students[1] = jhon
console.log(students)

/*
    9. Without running the code, answer what is the response of the code below and why? 
    After your answer, run the code and see if you got it right.

    console.log(a)
    var a = 1
*/



