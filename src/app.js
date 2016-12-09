var SinginAppViewModel = function() {

  var self = this;
  self.username = ko.observable();
  self.password = ko.observable();
  self.onSignin = onSignin;

  function onSignin() {
    console.log('username:'+self.username()+ '\npassword:'+self.password());
  }

}

var vm = new SinginAppViewModel();
ko.applyBindings(vm);
