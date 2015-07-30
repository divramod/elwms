// =========== [ REQUIRE ] ===========
var co = require("co");
var colors = require("colors");
var dmPrompt = require("dm-prompt").Inquirer;

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
// TODO
job.start = co.wrap(function*() {
    try {
        var promptAnswer =
            yield dmPrompt({
                type: "list",
                name: "prompt",
                message: "What do you want to do?",
                choices: [
                    "Initialize Project",
                    "Help",
                    "Top",
                    "Quit".red,
                ]
            });
        var action = promptAnswer.prompt;
        if (action === "Initialize Project") {
            var choice = require("./../init/index.js");
            yield choice.start();
        } else if (action === "Top") {
            var job = require("./../../../jobs/prompt/index.js");
            yield job.start();

        } else if (action === "Help") {

        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve();
}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
