var should = require('chai').should();
var index = require('../index').index;
var colors = require("colors");

// =========== [ elwms TESTS ] ===========
describe('elwms', function() {

    console.log("run elwms tests".blue);

    // =========== [ help ] ===========
    it('job undefined', function* testUndefined() {
        process.env.dmnJob = "paskdjföalskdjflk";
        var result =
            yield index();
        result.job.should.equal("undefined");
        result.success.should.equal(true);
    });

    // =========== [ start ] ===========
    it('job start', function* testStart() {
        process.env.dmnJob = "start";
        var result =
            yield index();
        result.job.should.equal("start");
        result.success.should.equal(true);
    });

});
