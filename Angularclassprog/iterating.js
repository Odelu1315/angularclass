list=[34,45,67,87,4,29,13,23,25,56]
list[18]=2349

for (let x of list)
    console.log(x)

for (let x in list)
    console.log(x)
for (let x in list)
    console.log(list[x])
//Its always better to use "in" , it doesnot give undefined elements


