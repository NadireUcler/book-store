// running each test file and print result status
const { execSync: runCommand } = require("child_process");

// test list
const testSuite = [
    { path: "tests/nadire.test.js", user: "nadireozel@gmail.com" },
    { path: "tests/joe.test.js", user: "joecarter070@gmail.com" }
];

// function to execute a single test
const executeTest = (testObj) => {
    try {
        runCommand(`npx jest ${testObj.path} --runInBand --silent`, {
            stdio: "pipe"
        });

        console.log(`${testObj.user} - getAll to show all product - 200 - PASSED`);
    } catch (err) {
        console.log(`${testObj.user} - getAll to show all product - FAILED`);
    }
};

// loop through all tests
testSuite.forEach((t) => executeTest(t));