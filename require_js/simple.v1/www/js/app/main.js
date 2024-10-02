define(["jquery", "ko", "text!../../test.html"], function($, ko, testHtml) {
    $(function() {
        console.log('TRACER main :: Ready.');
        console.log(`TRACER main :: testHtml: ${testHtml}`);
    });
});
