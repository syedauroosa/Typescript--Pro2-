#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => (setTimeout(res, 2000)));
};
async function welcome() {
    let neonTitle = chalkAnimation.neon("lets start calcutaion"); //start
    await sleep();
    neonTitle.stop();
    console.log(`
   ______________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
}
await welcome();
async function quesAns() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "what operation you want to perform? \n",
            choices: ["+", "-", "*", "/"],
        },
        {
            type: "number",
            name: "num1",
            message: "enter your number1",
        },
        {
            type: "number",
            name: "num2",
            message: "enter your number2",
        }
    ]);
    {
        if (answers.operator == "+") {
            console.log(chalk.yellow(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operator == "-") {
            console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.operator == "*") {
            console.log(chalk.yellow(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operator == "/") {
            console.log(chalk.yellow(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    }
}
;
//quesAns(); 
async function startAgain() {
    do {
        await quesAns();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "do you want to restart the calculation",
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
