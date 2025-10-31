const prompt = require('prompt-sync')();

let hour;
do{
    hour = prompt('Enter hour (0-8): ');
} while(hour>8 || hour<0)

    let dailyWage=8*hour;
    let monthlyWage=dailyWage*20;
    console.log(monthlyWage);