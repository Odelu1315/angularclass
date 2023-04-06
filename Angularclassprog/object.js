person={
    sno:1,
    name:"Odelu",
    city:"Chennai"
}


console.log(person)
console.log(person.name)
console.log(person['name'])

person.city="Mumbai"
person.skills=["python","Javascript","CSS"]
console.log(person)
//in JSON double quotes are mandatory declaring property in obj but  not in JS

people=[
    { sno:1,name:"odelu",city:"mumbai"},//o
    {sno:2,name:"Shashikanth",city:"mumbai"},//1
    {sno:3,name:"Bramaiah",city:"mumbai"},
    {sno:4,name:"RRR",city:"mumbai"},
    {sno:5,name:"Kousiiii",city:"mumbai"}
]

console.log(people[4].name)