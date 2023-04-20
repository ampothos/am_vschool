let employees = []

function Employee(name, job, salary) {
    this.name = name
    this.jobTitle = job
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function() {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: $${this.salary}/hour, Status: ${this.status}`)
} 

let jerry = new Employee("Jerry", "Janitor", 50)
let marigold = new Employee("Marigold", "Pharmacist", 40)
let evelyn = new Employee("Evelyn", "Physical Therapist", 1000)

jerry.status = "Part Time"

jerry.printEmployeeForm()
marigold.printEmployeeForm()
evelyn.printEmployeeForm()