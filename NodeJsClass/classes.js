var Employee = /** @class */ (function () {
    function Employee(sno, name, city) {
        this.sno = sno;
        this.name = name;
        this.city = city;
    }
    Employee.prototype.display = function () {
        console.log(this.sno, this.name, this.city);
    };
    return Employee;
}());
