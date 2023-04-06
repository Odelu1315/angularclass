a=[23,24,25,26,27,28,29,30]

a[18]=9030
console.log(a.length)
a[-9]=18
console.log(a.length)
a["odelu"]="employee"

console.log(a.length)

console.log(a)

for (let x in a)
    console.log(a[x],x)
for (let x of a)
console.log(x)