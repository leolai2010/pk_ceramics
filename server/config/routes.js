var Ceramic = require('../controllers/ceramiccontrollers.js');
var Cart = require('../controllers/ceramiccontrollers.js');
module.exports = (app)=>{
    app.get('/ceramics', (req,res)=>{
        Ceramic.index(req,res);
    });
    app.post('/new/ceramic', (req,res)=>{
        Ceramic.create(req,res);
    });
    app.get('/show/ceramic/:id', (req,res)=>{
        Ceramic.show(req,res);
    });
    app.post('/edit/ceramic/:id', (req,res)=>{
        Ceramic.edit(req,res);
    });
    app.delete('/delete/ceramic/:id', (req,res)=>{
        Ceramic.delete(req,res);
    });
    app.get('/cart', (req,res)=>{
        Cart.main(req,res);
    });
    app.post('/new/item/:id', (req,res)=>{
        Cart.new(req,res);
    });
    app.delete('/delete/item/:id', (req,res)=>{
        Cart.remove(req,res)
    });
}