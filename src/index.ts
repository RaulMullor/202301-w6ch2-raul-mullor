import inquirer from "inquirer";

inquirer
  .prompt({
    type: "list",
    name: "fruits",
    message: "What fruit do you like to use?",
    choices: ["cucumber", "banna", "watermelon"],
  })
  .then((answers: any) => {
    console.log("Answer: ", answers);
  });
