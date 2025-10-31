const prompt = require("prompt-sync")();


class EmployeeWage{
    
    constructor(wagePerHour){
        this.wagePerHour=wagePerHour;
    }

    getWorkingHours(){
        let hours;
        do{
            hours=Number(prompt("Enter the number of hours "));
        }while(hours>8 || hours<0)

            return hours;
    }

    computeWage(){
        const hours=this.getWorkingHours();
        let wage=hours*20;
        console.log(wage);
    }

}

const emp = new EmployeeWage(20);
emp.computeWage();