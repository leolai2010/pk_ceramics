const mongoose = require('mongoose');
const Ceramic = mongoose.model('Ceramic');
const Cart = mongoose.model('Cart');
module.exports = {
    index:(req,res)=>{
        Ceramic.find({}, (err,ceramic)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(ceramic);
            }
        });
    },
    create:(req,res)=>{
        Ceramic.create(req.body, (err,ceramic)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(ceramic);
            }
        });
    },
    show:(req,res)=>{
        Ceramic.findOne({_id:req.params.id}, (err,ceramic)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(ceramic);
            }
        });
    },
    delete:(req,res)=>{
        Ceramic.remove({_id:req.params.id}, (err,ceramic)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(ceramic);
            }
        });
    },
    main:(req,res)=>{
        Cart.find({}, (err,cart)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(cart);
            }
        });
    },
    new:(req,res)=>{
        Cart.create(req.body, (err,cart)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(cart);
            }
        });
    },
    remove:(req,res)=>{
        Cart.remove({_id:req.params.id}, (err,cart)=>{
            if(err){
                console.log("Returned Error", err)
                res.json({message:"Error", error: err});
            } else {
                res.json(cart);
            }
        });
    },
}