// routes/routers.js


module.exports = app => {

  app.get('/', function (req, res, next) {
      var resultado = app.src.controllers.controller.index();
      res.json({ resultado })
  });


  app.get('/all', async function (req, res, next) {
      var resultado2 = await app.src.controllers.controller.FindAll();
      res.json({ resultado2 })
  });

  
}

