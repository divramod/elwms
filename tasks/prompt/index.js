// =========== [ REQUIRE ] ===========
var co = require("co");
var dmPrompt = require("dm-prompt").Inquirer;

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
// TODO
job.start = co.wrap(function*() {
    try {
        var actionAnswer =
            yield dmPrompt({
                type: "list",
                name: "action",
                message: "Choose:",
                choices: [
                    "Project",
                    "Mobile-App",
                    "Desktop-App",
                    "Server-Api",
                    "Server-Static",
                    "Website",
                    "Quit".red
                ]
            });
        var action = actionAnswer.action;
        if (action === "Project") {
          console.log(process.cwd());
            var job = require("./../../modules/pr/prompt/index.js");
            yield job.start();
        } else if (action === "Mobile-App") {
            var job = require("./../../modules/ma/prompt/index.js");
            yield job.start();
        } else {

        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve();
}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
