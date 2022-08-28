const generateTableofContents = table => {
    if (!table) {
        return "";
    } else {
        console.log(generateTableofContents)
        return `
            test
        `;
    }
}

module.exports = questions => {
    const {title, description, installation, usage, license, contributing, test, username, email} = questions;

    return `
    # ${title}

    ## Description
    ${description}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${test}

    ## Questions
    ${username}
    ${email}
    `
};