const fs = require("fs").promises;

function displayBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return (
      "![License](https://img.shields.io/badge/license-" +
      license +
      "-blue.svg)" // common color used for open-source projects is blue
    );
  }
}

function createFile(data) {
  return fs

    .writeFile(
      data.file_name + ".md",
      `# ${data.title}
${displayBadge(data.license)}
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
Licensed under the ${data.license} license.
	  
## Contributing
${data.contributing}
	  
## Tests
${data.tests}
	  
## Questions
If you have any questions, please feel free to reach out to me via:
	
- [${data.username}](https://github.com/${data.username})
- [${data.email}](mailto:${data.email})

`
    )
    .then(() => {
      console.log(`You have successfully created the ${data.file_name} file`);
      // console.log(`The contents of the file are:\n${data.content}`);
    });
}

module.exports = createFile;
