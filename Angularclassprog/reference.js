a=[3423,423,23,24,5,46,125,356]
a.push(90)
console.log(a)
b=a
b.push('young')
console.log(a)
//in JS while assigning a array or list to a variable it copies reference not value

c=[]
for (let x of a)
     console.log(c.push(x))
//for copying an array elements to another array.
console.log(c)
c.push("johanson")
console.log(c)
console.log(a)