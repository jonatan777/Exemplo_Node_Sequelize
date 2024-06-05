// routes/routers.js


module.exports = app => {

  app.get('/', function (req, res, next) {
      var resultado = app.src.controllers.controller.index();
      res.json({ resultado })
  });


  app.get('/all', async function (req, res, next) {
    const resultado = await app.src.controllers.controller.FindAll();
      //res.statusCode = 202;
      res.json({ resultado })
  });


  app.get('/getId/:id', async function (req, res, next) {
    const resultado = await app.src.controllers.controller.FindId(req.params.id);
    res.json({ resultado })
  });

  app.post('/create', async function (req, res, next) {
    const resultado = await app.src.controllers.controller.Create(req.body);
    res.json({ resultado })
  });

  app.put('/update/:id', async (req, res, next) => {
    const resultado = await app.src.controllers.controller.Update(req.body, req.params.id);
    res.json({resultado });
  });
    
  app.get('/delete/:id', async (req, res) => {
    const resultado = await app.src.controllers.controller.Delete(req.params.id);
    res.json({resultado});
    });
}