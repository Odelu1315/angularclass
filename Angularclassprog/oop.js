function Student(sno,name){
    this.sno=sno
    this.name=name

    console.log(this)
}

Student.prototype.display=function(){
    console.log("Sno"+this.sno+" Nmae: "+this.name)
}

a=new Student(1,"odelu")
b=new Student(2,"RRR")
a.display()
b.display()