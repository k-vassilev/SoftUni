class Company{
    constructor(departments) {
        this.departments = []
    }
    addEmployee(username, Salary, Position, Department) {
        if ((username===undefined || username===null || username==="") ||
        (Salary===undefined || Salary===null || Salary==="" || Salary<0) ||
        (Position===undefined || Position===null || Position==="") ||
        (Department===undefined || Department===null || Department==="")){
            throw new Error('Invalid input!')
        } else {   
           let obj = {
                   username,
                   Salary: Number(Salary),
                   Position,
                   Department
           }
          this.departments.push(obj)
          
            return `New employee is hired. Name: ${username}. Position: ${Position}`
        }
    }
    bestDepartment() {
        let sorted= this.departments.sort((a,b) => b.Salary - a.Salary)
        let best = Object.values(sorted[0])[3]
        let avgSalary = 0;
        let count = 0;
        let persons = []
        for (let obj of sorted) {
            if (Object.values(obj).includes(best)) {
                avgSalary += Number(Object.values(obj)[1])
                count++
                persons.push(`${Object.values(obj)[0]} ${Object.values(obj)[1]} ${Object.values(obj)[2]}`)
            }
        }
        avgSalary/=count;
        
        let result = `Best Department is: ${best}\nAverage salary: ${avgSalary.toFixed(2)}\n${persons.join("\n")}`
        

       return result.trim()
        
    }
}

let c = new Company();

console.log(c.bestDepartment());
