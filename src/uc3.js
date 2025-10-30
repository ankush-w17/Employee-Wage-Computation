const prompt =require("prompt-sync")();

let hours;

do{
    hours=Number(prompt("Enter Number of Hours: "));
} while(hours>8 || hours<0)

    if(hours===8){
        console.log("Employee is Full time");
    }
    else{
        console.log("Employee is part time");
    }