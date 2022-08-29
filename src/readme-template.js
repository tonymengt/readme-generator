

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


// dont need this?
const generateLicense = licenseData => {
    if (!licenseData) {
        return "";
    } else {
        let output = ""
        licenseData.forEach(data => {
            if (data === "MIT License") {
                output += `* [MIT License](https://choosealicense.com/licenses/mit/) <br>`
            } else if (data === "Apache License 2.0") {
                output += `* [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/) <br>`
            } else {
                output += `* [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`
            }
        })
        return output
    }
};

const generateContribute = contributeData => {
    if (!contributeData) {
        return "";
    } else {
        return `
## Contributors
${contributeData}
        `;
    }
};

const generateTest = testData => {
    if (!testData) {
        return "";
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
* [Installation](installation)`;
    } else {
        return "";
    }
};

const generateTableUsage = tableUsageData => {
    if (tableUsageData) {
        return`* [Usage](usage)`;
    } else {
        return "";
    }
};
const generateTableLicense = tableLicenseData => {
    if (tableLicenseData) {
        return`* [License](license)`;
    } else {
        return "";
    }
};
const generateTableContribute = tableContributeData => {
    if (tableContributeData) {
        return`* [Contributor](contributor)`;
    } else {
        return "";
    }
};
const generateTableTest = tableTestData => {
    if (tableTestData) {
        return`* [Tests](test)`;
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
            return;
        }
        if (data === "MIT License") {
            output += `[![badge](https://img.shields.io/badge/license-${data}-brightgreen)](https://choosealicense.com/licenses/mit/)`
        } else if (data === "Apache License 2.0") {
            output += `[![badge](https://img.shields.io/badge/license-${data}-brightgreen)](https://choosealicense.com/licenses/apache-2.0/)`
        } else {
            output += `[![badge](https://img.shields.io/badge/license-${data}-brightgreen)](https://choosealicense.com/licenses/gpl-3.0/)`
        }
        
    })
    return output;
}
module.exports = questions => {
    const {title, description, installation, usage, license, contributors, test, username, email, ...rest} = questions;

    return `
# ${title}

## Description
${generateLicenseInfo(license)}
${description}

## Table of contents
${generateTableInstall(rest.installConfirm)}
${generateTableUsage(rest.usageConfirm)}
${generateTableLicense(license)}
${generateTableContribute(rest.contributeConfirm)}
${generateTableTest(rest.testConfirm)}
* [Questions](questions)

${generateInstallation(installation)}
${generateUsage(usage)}

## License
    This application has the following licenses:
    ${generateLicense(license)}
${generateContribute(contributors)}
${generateTest(test)}
## Questions
    Contact Info:
    GitHub: [${username}](https://github.com/${username})
    Email: [${email}](mailto:${email})
    `
};