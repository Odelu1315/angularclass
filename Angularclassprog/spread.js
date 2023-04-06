a=[23,2345,35,24,24,36]
b=a

c=[...a]//spread operator ,copies elements

console.log("bbbbb")
b.push("arjun")
console.log(b)
console.log(a)
//changes in b will present in a
console.log("ccccc")
c.push("dharma")
console.log(c)
console.log(a)
//changes in c wont effect in a


personAskills=["python","java","c"]
//person b has same skills of Person A and addition to that javascript and css

personBskills=[...personAskills,"Javascript","css"]

categoryA=["SQL","MongoDB","Datascience"]
categoryB=["Azure","AWS","Google Cloud"]
categoryC=["GitHub","Jenkins"]

// person c has category b and c skills and addition to that angular ,react

personCskills=[...categoryA,categoryB,"angular","react"]
personCskills2=[...categoryA,...categoryB,"angular","react"]