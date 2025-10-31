const prompt=require("prompt-sync")();

let hours;

do {
    hours=prompt("Enter the number of hours ");
} while(hours>8 || hours<0)

    if(hours*20<100){
        console.log("Total working days limit reached");
        let wage=hours*20*20;
        console.log(wage);
    }
    else{
        console.log("Total working hours limit reached");
        let wage=100*20;
        console.log(wage);
    }
