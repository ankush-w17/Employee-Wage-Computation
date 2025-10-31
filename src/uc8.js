const prompt = require("prompt-sync")({ sigint: true });

class EmployeeWageCalculator {
  computeWage(wagePerHour, maxWorkingDays, maxWorkingHoursPerMonth) {
    const FULL_DAY_HOURS = 8;
    const PART_TIME_HOURS = 4;

    let totalHours = 0;
    let totalDays = 0;
    let totalWage = 0;

    while (totalHours < maxWorkingHoursPerMonth && totalDays < maxWorkingDays) {
      totalDays += 1;
      const empCheck = Math.floor(Math.random() * 3); 
      let hoursWorked = 0;

      if (empCheck === 1) hoursWorked = PART_TIME_HOURS;
      else if (empCheck === 2) hoursWorked = FULL_DAY_HOURS;

      if (totalHours + hoursWorked > maxWorkingHoursPerMonth) {
        hoursWorked = maxWorkingHoursPerMonth - totalHours;
      }

      totalHours += hoursWorked;
      totalWage += hoursWorked * wagePerHour;
    }

    return { totalDays, totalHours, totalWage };
  }
}

function askNumber(promptText, defaultValue) {
  const input = prompt(promptText);
  if (input === undefined || input === null || input.trim() === "")
    return defaultValue;
  const n = Number(input);
  return Number.isNaN(n) ? defaultValue : n;
}

function mainInteractive() {
  console.log("Employee Wage Computation");
  const calc = new EmployeeWageCalculator();

  const numCompanies = Math.max(
    0,
    askNumber("How many companies to enter? ", 0)
  );
  if (numCompanies === 0) {
    console.log("No companies entered. Exiting.");
    return;
  }
  const companies = [];
  for (let i = 0; i < numCompanies; i++) {
    console.log(`\nEnter details for company #${i + 1}:`);
    const companyName = (prompt(" Company name: ") || `Company${i + 1}`).trim();
    const wagePerHour = askNumber(" Wage per hour (number): ", 20);
    const maxWorkingDays = Math.max(
      1,
      askNumber(" Max working days per month (integer): ", 20)
    );
    const maxWorkingHoursPerMonth = Math.max(
      1,
      askNumber(" Max working hours per month (integer): ", 100)
    );

    companies.push({
      companyName,
      wagePerHour,
      maxWorkingDays,
      maxWorkingHoursPerMonth,
    });
  }

  console.log("\nMonthly wages for all companies:");
  for (const c of companies) {
    const res = calc.computeWage(
      c.wagePerHour,
      c.maxWorkingDays,
      c.maxWorkingHoursPerMonth
    );
    console.log(`Company: ${c.companyName}`);
    console.log(` Wage per hour: ${c.wagePerHour}`);
    console.log(` Total Days Worked: ${res.totalDays}`);
    console.log(` Total Hours Worked: ${res.totalHours}`);
    console.log(` Total Monthly Wage: ${res.totalWage}`);
    console.log("----------------------------------------------");
  }
}


 mainInteractive();
