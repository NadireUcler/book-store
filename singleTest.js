// import child_process to run test
const { execSync } = require("child_process");

try {
    // running only my test 
    execSync("npx jest tests/nadire.test.js --runInBand --silent", {
        stdio: "pipe"
    });

    // creating output
    console.log("nadireozel@gmail.com - getAll to show all product - 200 - PASSED");

} catch (error) {
    console.log("nadireozel@gmail.com - getAll to show all product - 200 - FAILED");
}