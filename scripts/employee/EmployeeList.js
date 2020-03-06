import { Employee } from "./Employee.js";
import { useEmployee } from "./employeeDataProvider.js";


const contentTarget = document.querySelector(".employee")

export const EmployeeList = () => {

const employeeArray = useEmployee()

for (const employeeObject of employeeArray) {
    const employeeHTML = Employee(employeeObject)
    contentTarget.innerHTML += employeeHTML
}
}