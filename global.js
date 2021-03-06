// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";

        // =========== [ test ] ===========
        if (["test", "-test", "t", "-t"].indexOf(argv2) > -1) {
            var task = require("./tasks/test/index.js");
            yield task.start();
        }
        // =========== [ init project ] ===========
        else if (["project", "-project", "pr", "-pr"].indexOf(argv2) > -1) {
            var job = require("./modules/project/index.js");
            yield job.start(module_path);
        }

        // automatically add tasks here


        // =========== [ getCommonTasks ] ===========
        else {
            require("dm-npm").getCommonTasks(argv2, __dirname);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()

// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
