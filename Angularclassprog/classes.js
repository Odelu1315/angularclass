class Student{
    constructor(sno,name){
        this.sno=sno
        this.name=name
    }
    display(){
        console.log(this.sno,this.name)
    }
}

a=new Student(1,"kousiiiii")
b=new Student(2,"shashikanth")
a.display();
b.display();