//Files it needs to make it work
const inquirer = require("inquirer");
const createFile = require("./createFile.js");

//Gives user choice to try again
function cyclePrompt() {
  console.log("--------Welcome to the file gen app!--------");
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "choice",
        message: "Would you like to generate a file?",
      },
    ])
    .then((data) => {
      if (data.choice) {
        return promptUser();
      } //avoids using else. If true do next function otherwise show bye message

      console.log("Thanks for using our app!\n");
    });
}

function promptUser() {
  console.log("---------------");

  inquirer
    .prompt([
      {
        ttype: "input",
        name: "file_name",
        message: "What would you like the file name to be?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
      },
      {
        type: "input",
        name: "description",
        message: "Give a description of your project",
      },
      {
        type: "list",
        name: "license",
        message: "Please choose the license you would want the project to have",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"],
      },

      // {
      //   type: "checkbox",
      //   message: "Choose a licence",
      //   name: "license",
      //   choices: [
      //     new inquirer.Separator(" = The Licenses = "),
      //     {
      //       name: "GNU General Public License v3.0 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      //     },
      //     {
      //       name: "MIT License[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      //     },
      //     {
      //       name: 'BSD 2-Clause "Simplified" License [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
      //     },
      //     {
      //       name: 'BSD 3-Clause "New" or "Revised [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" License',
      //     },

      //     {
      //       name: "Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      //     },
      //     {
      //       name: "Creative Commons Zero v1.0 Universal [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
      //     },

      //     {
      //       name: "Eclipse Public License 2.0[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
      //     },
      //     {
      //       name: "GNU Affero General Public License v3.0 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
      //     },
      //     {
      //       name: "GNU Lesser General Public License v2.1 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
      //     },
      //     {
      //       name: "The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
      //     },
      //   ],
      //   validate(answer) {
      //     if (answer.length < 1) {
      //       return "You must choose at least one license.";
      //     }

      //     return true;
      //   }
      // ,
      // }
      {
        type: "input",
        name: "installation",
        message: "What steps are required to install it?",
      },
      { type: "input", name: "usage", message: "How will you run it?" },
      // {
      //   type: "input",
      //   name: "license",
      //   message: "Choose a license from the following",
      // },
      {
        type: "input",
        name: "contributing",
        message: "Who are the contributors?",
      },
      { type: "input", name: "tests", message: "How was it tested?" },
      {
        type: "input",
        name: "username",
        message: "What is your github username",
      },
      {
        type: "input",
        name: "email",
        message: "what is your email address?",
      },
    ])
    .then(createFile)
    .then(cyclePrompt);
}

//shares functions across the files// exports to files requiring it
module.exports = {
  cyclePrompt: cyclePrompt,
  promptUser: promptUser,
};
