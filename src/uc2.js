const prompt = require("prompt-sync")();

let hours;

do{
    hours=Number(prompt("Enter Number of Hours worked (0-8) : "))
}while(hours>8 || hours<0)


    let wagerPerHour=20;
    let dailyWage=wagerPerHour*hours;
    console.log(dailyWage);