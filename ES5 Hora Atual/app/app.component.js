
(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Hora Atual</h1>' +
      '<getHoraAtual></getHoraAtual>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));