define(["jquery", "ko", "text!./components/sandbox.view.html"],
    function ($, ko, htmlString) {
        function Sandbox(params) {
            let self = this;

            console.log(`TRACER sandbox model`);
            self.myList = ko.observable(params.myList);
        }

        return {viewModel: Sandbox, template: htmlString};
    }
);
