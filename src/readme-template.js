

const generateInstallation = installData => {
    if (!installData) {
        return "";
    } else {
        return `
## Installation
${installData}
        `;
    }
};

const generateUsage = usageData => {
    if (!usageData) {
        return "";
    } else {
        return `
## Usage
${usageData}
        `;
    }
};


const generateLicense = licenseData => {
    if (!licenseData) {
        return ``;
    } else {
        let output1 = ""
        let output2 = ""
        let output3 = ""
        let output4 = ""
        let output5 = ""
        let output6 = ""
        let output7 = ""
        let output8 = ""
        licenseData.forEach(data => {
            if (data === "MIT License") {
                output1 += `* [MIT License](https://choosealicense.com/licenses/mit/)`
            } else if (data === "Apache License 2.0") {
                output2 += `* [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`
            } else if (data === "GNU GPLv3") {
                output3 += `* [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
            } else if (data === "GNU AGPLv3") {
                output4 += `* [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`
            }  else if (data === "GNU LGPLv3") {
                output5 += `* [GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`
            }  else if (data === "Mozilla Public License 2.0") {
                output6 += `* [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`
            }  else if (data === "Boost Software License 1.0") {
                output7 += `* [Boost Software License 1.0](https://choosealicense.com/licenses/bls-1.0/)`
            }  else if (data === "The Unlicense") {
                output8 += `* [The Unlicense](https://choosealicense.com/licenses/unlicense/)`
            } 
        })
        if (!output1 || !output2 || !output3 || !output4 || !output5 || !output6 || !output7 || !output8){
        return `
        `
        } else {
            return `## License
This application has the following licenses:
${output1}
${output2}
${output3}
${output4}
${output5}
${output6}
${output7}
${output8}
                    `;
        }
    }
};

const generateContribute = contributeData => {
    if (!contributeData) {
        return ``;
    } else {
        return `
## Contributors
${contributeData}
        `;
    }
};

const generateTest = testData => {
    if (!testData) {
        return ``;
    } else {
        return `
## Tests
${testData}
        `;
    }
};

const generateTableInstall = tableInstallData => {
    if (tableInstallData) {
        return`
* [Installation](#installation)`;
    } else {
        return "";
    }
};

const generateTableUsage = tableUsageData => {
    if (tableUsageData) {
        return`* [Usage](#usage)`;
    } else {
        return "";
    }
};
const generateTableLicense = tableLicenseData => {
    if (tableLicenseData) {
        return`* [License](#license)`;
    } else {
        return "";
    }
};
const generateTableContribute = tableContributeData => {
    if (tableContributeData) {
        return`* [Contributor](#contributor)`;
    } else {
        return "";
    }
};
const generateTableTest = tableTestData => {
    if (tableTestData) {
        return`* [Tests](#test)`;
    } else {
        return "";
    }
};

const generateLicenseInfo = licenseData => {
    // let licenseDataArr = licenseData.split(",");
    let output = ""
    licenseData.forEach(data => {
        data = data.replace(/\s+/g,'%20')
        if (!data) {
            return ``;
        }
        if (data === "MIT License") {
            output += `[![badge](https://img.shields.io/badge/License-${data}-brightgreen)](https://choosealicense.com/licenses/mit/) `
        } else if (data === "Apache License 2.0") {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightblue)](https://choosealicense.com/licenses/apache-2.0/) `
        } else if (data === "GNU AGPLv3") {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightorange)](https://choosealicense.com/licenses/agpl-3.0/)`
        } else if (data === "GNU GPLv3") {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightorange)](https://choosealicense.com/licenses/gpl-3.0/)`
        } else if (data === "GNU LGPLv3") {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightorange)](https://choosealicense.com/licenses/lgpl-3.0/)`
        } else if (data === "Mozilla Public License 2.0") {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightorange)](https://choosealicense.com/licenses/mpl-2.0/)`
        } else if (data === "Boost Software License 1.0") {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightorange)](https://choosealicense.com/licenses/bsl-1.0/)`
        } else {
            output += ` [![badge](https://img.shields.io/badge/License-${data}-brightorange)](https://choosealicense.com/licenses/unlicense/)`
        }
        
    })
    return output;
}
module.exports = questions => {
    const {title, description, installation, usage, license, contributors, test, username, email, ...rest} = questions;

    return `
# ${title}
${generateLicenseInfo(license)}
## Description
${description}

## Table of contents
${generateTableInstall(rest.installConfirm)}
${generateTableUsage(rest.usageConfirm)}
${generateTableLicense(generateLicenseInfo(license))}
${generateTableContribute(rest.contributeConfirm)}
${generateTableTest(rest.testConfirm)}
* [Questions](#questions)

${generateInstallation(installation)}
${generateUsage(usage)}
${generateLicense(license)}
${generateContribute(contributors)}
${generateTest(test)}
## Questions
If you have any questions feel free to contact me using the following sources: <br>
GitHub: [${username}](https://github.com/${username}) <br>
Email: [${email}](mailto:${email})
`
};