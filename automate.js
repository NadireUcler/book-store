// tool used to execute shell commands inside Node.js
const { execSync } = require("child_process");

// helper function to trigger a specific test file
function executeTest(testLabel, testFile) {
    try {
        console.log(`\nStarting ${testLabel} test...\n`);

        // run jest for the selected test file in sequence
        execSync(`npx jest ${testFile} --runInBand --silent`, {
            stdio: "inherit"
        });

        console.log(`\n${testLabel} test finished without errors.\n`);
    } catch (err) {
        console.log(`\n${testLabel} test encountered an issue.\n`);
    }
}

// execute all group member tests one by one
executeTest("Nadire", "tests/nadire.test.js");
executeTest("Joe", "tests/joe.test.js");
executeTest("Hamzah", "tests/hamzah.test.js");