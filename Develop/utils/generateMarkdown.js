// function to generate markdown for README
const generateMarkdown= data => {
  return `# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Technology](#technology)
* [Collaborators](#collaborators)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage
${data.repo}

## License
This application is protected by the the license listed below.  All applicable protections apply.

${data.license}

## Technology
This application used the following technology:

${data.technology.join(', ')}

## Collaborators
The following coders collaborated on this application:

${data.collaborators}

## Contributing
${data.contributions}

## Tests
To run tests, run the folloing command:
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.  You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
