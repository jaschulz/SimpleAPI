var appRouter = function(app) {
  
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  
app.get("/account", function(req, res) {
    var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy"
    }
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
});
  
app.post("/account", function(req, res) {
    if(!req.body.email || !req.body.password) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});
  
app.post("/dishes", function(req, res) {
    return res.send(req.body);
});
  
app.get("/dishes", function(req, res) {
    var accountMock = {"dishes":[{
        "description": "Milanga con fritas",
        "price": "1234"}]
    }
        return res.send(accountMock);
    
});  
}

module.exports = appRouter;
