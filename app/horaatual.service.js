(function(app) {
  var Class = ng.core.Class;

  app.HoraAtualService = Class({
    constructor: function HoraAtualService() {},
    getAgora: function() {
      var currentdate = new Date; 
      
      return currentdate;
    },
    generateHoraAtual: function(delay, callback) {
      var self = this;
      callback(this.getAgora());
      setInterval(function() {
        callback(self.getAgora());
      }, delay);
    }
  });  

})(window.app || (window.app = {}));