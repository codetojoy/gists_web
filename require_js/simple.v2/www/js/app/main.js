define(["jquery", "ko", "text!../../component/sandbox.view.html"], function($, ko, htmlString) {
    $(function() {
        console.log('TRACER main :: Ready.');
        console.log(`TRACER main :: htmlString: ${htmlString}`);
    });
});
