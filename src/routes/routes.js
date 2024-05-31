module.exports = application => {

  application.get('/', function (req, res, next) {
    application.src.controllers.controller.index(application, req, res, next);
  });


  application.get('/db', function (req, res, next) {
    application.src.controllers.controller.db(application, req, res, next);
  });


  application.get('/cdf', function (req, res) {
    return res.json({ name: "Ciclano Fulano" });
  });




}

