const prompt=require("prompt-sync")();

let hours;

do{
    hours=Number(prompt("Enter the number of hours : "));
} while(hours>8 || hours<0)

    let wagePerHour=20;
    let dailyWage;
    switch(hours){
        case 1:
        dailyWage=wagePerHour*1;
        console.log("Employee is part time");
        break;
        case 2:
        dailyWage=wagePerHour*2;
        console.log("Employee is part time");
        break;
        case 3:
        dailyWage=wagePerHour*3;
        console.log("Employee is part time");
        break;
        case 4:
        dailyWage=wagePerHour*4;
        console.log("Employee is part time");
        break;
        case 5:
        dailyWage=wagePerHour*5;
        console.log("Employee is part time");
        break;
        case 6:
        dailyWage=wagePerHour*6;
        console.log("Employee is part time");
        break;
        case 7:
        dailyWage=wagePerHour*7;
        console.log("Employee is part time");
        break;
        case 8:
        dailyWage=wagePerHour*8;
        console.log("Employee is Full time");
        break;
    }
    console.log("Daily wage is ",dailyWage);