// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
job.start = co.wrap(function*(module_path) {
    try {
        console.log("project");

        // =========== [ get params from user input ] ===========
        var argv3 = process.argv[3] || "help";

        // =========== [ help ] ===========
        if (["help", "-help", "h", "-h"].indexOf(argv3) > -1) {
            var job = require(module_path + "/modules/project/tasks/help/index.js");
            yield job.start();
        }

        // =========== [ init project ] ===========
        else if (["init", "-init", "i", "-i"].indexOf(argv3) > -1) {
            var job = require(module_path + "/modules/project/jobs/init/index.js");
            yield job.start();
        }

        // =========== [ prompt ] ===========
        else if (["prompt", "-prompt", "p", "-p"].indexOf(argv3) > -1) {
            var job = require(module_path + "/modules/project/tasks/prompt/index.js");
            yield job.start();
        }

        // =========== [ help ] ===========
        else {
            var job = require(module_path + "/modules/project/tasks/help/index.js");
            yield job.start();
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve();
}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
