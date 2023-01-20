// fs.readFile("./texts.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//     //console.error(error);
//   } else {
//     console.log(data);//gives a string
//     console.log(data.split('\n'));//splits into line
//   }
// });

// fs.writeFile("./text.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//     //console.error(error);
//   } else {
//     //console.log(data); //gives a string
//     console.log(data.split("\n")); //gives an array of strings

//     const tasks = data.split("\n");

//     console.log(tasks[1]); //gives second string in the array
//   }
// });

// //creates the file
// fs.writeFile("./text1.txt", "learning", (error) => {
//   if (error) {
//     console.log(error);
//     //console.error(error);
//   }
// });

// //creates the file
// fs.appendFile("./text1.txt", "\nalways", (error) => {
//   if (error) {
//     console.log(error);
//     //console.error(error);
//   }
// });

const inquirer = require("inquirer"); //get back an object of methods
//inquirer(lhs) pulls in what is exported from that package inquirer(rhs)
//inquirer.prompt();//takes singular for one question or multiple for an array
//returns a promise object
const fs = require("fs"); //no need to install, comes with node
inquirer
  .prompt([
    {
      name: "file_name",
      message: "What would you like the filename to be?",
    },
    {
      name: "content",
      message: "What content would you like to add to your file?",
    }, //when above completes,below is called
  ])
  .then((data) => {
    //console.log(data);
    fs.writeFile(data.file_name + ".md", data.content, (err) => {
      if (err) return console.log(err); //avoided using else by doing a retuirn
      console.log(
        `You have successfully created the ${data.file_name}.md file`
      );
      console.log(`The contents of the file are:\n${data.content}`);
    });
  });
