const database = require('../data');

module.exports = function (app) {

  app.get('/List', function (req, res) {
    database.List.find({}).then(function(data){
      res.json(data)
    });
  
  });

  app.post('/add/List', function (req, res) {
    database.List.create(req.body)
      .then(
        function (data) {
          console.log(data);
          console.log("success");
          let response = [data];
          res.json(response);

        }
      )
      .catch(function (err) {
        console.log(err);
      })
  });

  app.post('/delete/List', function (req, res) {
    let query = {
       _id: req.body.id
    };
    database.List.findOneAndDelete(query)
      .then(
        function (data) {
          console.log(data);
          console.log("success");
          let response = [data];
          res.json(response);
        }).catch(function (err) {
          console.log(err);
        });
  });
}