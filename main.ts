import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {name: "firstNumber", type: "number", message: "enter firstNumber"},
    {name: "secondNumber", type: "number", message: "enter secondNumber"},
    {name: "operator", type: "list", message: "selet operator to perform operation",
    choices: ["Addition", "subtraction", "multiplication", "division"],
},
]);
if(answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}else if(answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}else if(answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}else if(answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}else{
    console.log("please select valid operator");
}