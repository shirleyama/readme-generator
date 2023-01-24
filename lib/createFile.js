const fs = require("fs").promises;

// function createFile(data) {
//   return fs.writeFile(data.file_name + ".md", data.content).then(() => {
//     console.log(`You have successfully created the ${data.file_name} file`);
//     console.log(`The contents of the file are:\n${data.content}`);
//   });
// }
// const answers = `Title: ${data.title}\nDescription: ${data.description}\nInstallation:${data.description}`;

function createFile(data) {
  return fs
    .writeFile(
      data.file_name + ".md",
      `# ${data.title}

## Description	   
${data.description}
	  
## Table of Contents
	  
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)

	  
## Installation	  
${data.installation}
	  
## Usage	  
${data.usage}

## License
${data.license}
	  
## Contributing
${data.contributing}
	  
## Tests
${data.tests}
	  
## Questions
If you have any questions, please feel free to reach out to me via:
	
1. - [${data.email}](mailto:${data.email})
2. ${data.username})
- [${data.email}](mailto:${data.email})

`
    )
    .then(() => {
      console.log(`You have successfully created the ${data.file_name} file`);
      // console.log(`The contents of the file are:\n${data.content}`);
    });
}

module.exports = createFile;
