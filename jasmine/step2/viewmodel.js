define(["knockout", "jquery"], function (ko, $) {

   var data = {
       Name:"The Plan", 
       Id: 1
   };

   var TestViewModel = function (data) {
       var self = this;

       self.planName = ko.observable(data.Name);
       self.planId = ko.observable(data.Id);

       return self;
   }

   function mainViewModel() {
       var self = this;

       self.plan = ko.observableArray([]);
       self.plan.push(new TestViewModel(data));
   }

   return mainViewModel;

});
