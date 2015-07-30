// =========== [ REQUIRE ] ===========
var co = require("co");
var dmUtil = require("dm-util");
var dmPrompt = require("dm-prompt").Inquirer;

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
// TODO
job.start = co.wrap(function*() {
    try {
        console.log("Init");
        console.log(process.cwd());


        // =========== [ get project name ] ===========
        var projectNameAnswer =
          yield dmPrompt({
            type: "input",
            name: "projectName",
            message: "Whats the name of your Project:"
          });
        var projectName = projectNameAnswer.projectName;

        // create job
        var configJob = {
            templatePath: __dirname + '/templates',
            targetPath: process.cwd(),
            deleteBefore: false,
            overwrite: true, // [true, false, "ask"]
            rename: ["files", "dirs"], // renames
            replace: [{
                search: "PROJECTNAME",
                replace: projectName
            }],
            messages: {
                success: "Project initiated!",
                error: "Project not inititated!"
            }
        };
        dmUtil.cpTemplate(configJob);

        //TODO create config.json

        //TODO create README.md

        //TODO create dir code

        //TODO create dir docs

        //TODO create dir orga


    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }
    return yield Promise.resolve();
}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
