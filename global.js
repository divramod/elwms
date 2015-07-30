var colors = require("colors");
var co = require("co");
require("shelljs/global");
var jobs = {};
var result = {};
var module_path = __dirname;

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        result.job = process.env.dmnJob || process.argv[2] || "help";

        // =========== [ help ] ===========
        if (["help", "-help", "h", "-h"].indexOf(result.job) > -1) {
            var task = require("./tasks/help/index.js");
            yield task.start(module_path);
        }
        // =========== [ test ] ===========
        else if (["test", "-test", "t", "-t"].indexOf(result.job) > -1) {
            var task = require("./tasks/test/index.js");
            yield task.start();
        }

        // =========== [ init project ] ===========
        else if (["project", "-project", "pr", "-pr"].indexOf(result.job) > -1) {
            var job = require("./modules/project/index.js");
            yield job.start(module_path);
        }

        // =========== [ prompt ] ===========
        else if (["prompt", "-prompt", "p", "-p"].indexOf(result.job) > -1) {
            var job = require("./tasks/prompt/index.js");
            yield job.start(module_path);
        }

        // =========== [ help ] ===========
        else {
            var task = require("./tasks/help/index.js");
            yield task.start(module_path);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve(result);
}); // job.index()

// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
