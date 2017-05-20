(function(app) {
  var Component = ng.core.Component;
  var HoraAtualService = app.HoraAtualService;

  app.GetHoraAtualComponent = Component({
    selector: 'getHoraAtual',
    template: '<p>{{agora}}</p>'
  })
  .Class({
    constructor: [HoraAtualService, function GetHoraAtualComponent(horaAtualService) {
      var self = this;
      horaAtualService.generateHoraAtual(1000, function(agora) {
        self.agora = agora;
      });
    }]
  });

})(window.app || (window.app = {}));