const Product = require('../models/product');
const Wishlist = require('../models/wishlist');
const Cart = require('../models/cart');
const Order = require('../models/order');
const User = require('../models/user');
const Category = require('../models/category');
const config = require('../config/database');

module.exports = (router) => {

    /******************* Products Route ************************/

    router.post('/register', (req,res) => {

        if (!req.body.title) {
            res.json({ success: false, message: 'Provide a title' });
        } else if (!req.body.price) {
            res.json({ success: false, message: 'Provide price' });
        } else if (!req.body.category) {    
            res.json({ success: false, message: 'Provide category' });
        } else if (!req.body.stock) {    
            res.json({ success: false, message: 'Provide quantity' });
        } else if (!req.body.imageurl) {    
            res.json({ success: false, message: 'Provide imageurl' });
        } else {
           let product = new Product({

                title: req.body.title,
                discription: req.body.discription,
                price: req.body.price,
                category: req.body.category,
                quantity: 1,
                stock: req.body.stock,
                imageurl: req.body.imageurl

            });

    
            product.save( (err, done) => {
                if (err) {
                    res.json({ success: false, message: 'Product already exists in inventory'});
                } else {
                    res.json({ success: true, message: 'Product saved successfully' });    
                }
            });  

        }

    });

    router.get('/register', (req,res) => {

        Product.find().exec((err, product) => {
            if (err){
                return console.log(err);
            } else if(!product) {
                res.json({ success: false, message: 'No products to display'});
            } else {
            res.json(product);
            }
        });

    });

    // Deletes product from the product-list
    router.post('/deleteProduct', (req,res)=> {
    
        Product.findOneAndRemove({ title: req.body.title }, (err,done) => {
            
            if(err) {
                res.json({ success: false, message: 'Error in deleting product' });
            } 
        });
    });

    router.put('/updateProduct', (req,res) => {

        Product.findOneAndUpdate(
            { title: req.body.title },
            { $set:  
                {
                    price: req.body.price,
                    category: req.body.category,
                    discription: req.body.discription,
                    stock: req.body.stock,
                    imageurl: req.body.imageurl
                }
            }, (err,done) => {

                if(err) {
                    res.json({ success: false, message: 'Error in updating product' });
                } else {
                    res.json({ success: true, message: 'Product updated successfully'});
                }
            });
    });


     /******************* Products Route ************************/

    
    /******************* Wishlist Route ************************/

    router.post('/wishlist', (req,res)=> {

        let wish = new Wishlist({

            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            discription: req.body.discription,
            quantity: 1,
            stock: req.body.stock,
            imageurl: req.body.imageurl

        });

        wish.save( (err) => {
            if (err) {
                res.json({ success:false, message: 'Could not save to wishlist. Error: ', err });
            } else {
                res.json({ success: true, message: 'Product saved successfully' });    
            }
        }); 

    });

    router.get('/wishlist', (req,res) => {

        Wishlist.find().exec((err, wish) => {
            if (err){
                return console.log(err);
            } else {
                res.json(wish);
            }
            
        });

    });

    router.post('/removeFromWishlist', (req,res) => {

        Wishlist.findOneAndRemove({ title: req.body.title }, (err,done) => {
            
            if(err) {
                res.json({ success: false, message: 'Error in removing product' });
            }
        });
    });

    /******************* Wishlist Route ************************/

    /******************* Cart Route ************************/

    router.post('/cart', (req,res)=> {

        let cart = new Cart({

            title: req.body.title,
            price: req.body.price,
            category: req.body.category,
            discription: req.body.discription,
            quantity: 1,
            stock: req.body.stock,
            imageurl: req.body.imageurl

        });

        cart.save( (err) => {
            if (err) {
                res.json({ success:false, message: 'Could not save to cart. Error: ', err });
            } else {
                res.json({ success: true, message: 'Product saved successfully' });    
            }
        }); 

    });

    router.put('/cart', (req,res) => {

        Cart.findOneAndUpdate(
            {_id: req.body._id},
            {$set: { quantity: req.body.quantity }}, (err,done)=> {

            if(err) {
                res.json({ success: false, message: 'Error in updating' });
            } 
        });

    });

    router.get('/cart', (req,res) => {

        Cart.find().exec((err, cart) => {
            if (err){
                return console.log(err);
            } else {
                res.json(cart);
            }
            
        });

    });

    router.delete('/clearCart', (req,res) => {

        Cart.remove({}, (err,done)=> {

        });
    });

    /******************* Cart Route ************************/

    /******************* Order Route ************************/


    router.post('/Order', (req,res) => {
        
        let order = new Order({

            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            address1: req.body.address1,
            address2: req.body.address2, 
            country: req.body.country,
            state: req.body.state,
            zip: req.body.zip,
            datePlaced: req.body.date,
            cart: req.body.cart,
            completed: req.body.completed

        });

        order.save( (err, done) => {
            if(err) {
                res.json({ success: false, message: 'Could not save product' });
            } 
        });

    });

    router.get('/Order', (req,res) => {

        Order.find().exec((err, order) => {
            if (err){
                return console.log(err);
            } else {
                res.json(order);
            }
        });

    });

    router.put('/dispatchOrder', (req,res) => {

        Order.findOneAndUpdate(
            {_id: req.body._id},
            {$set: { completed: 'true' }}, (err,done)=> {

            if(err) {
                res.json({ success: false, message: 'Error in updating' });
            } else {
                res.json({ success: true, message: 'Order Completed Successfully' });
            }
        });

    });

    /******************* Cart Route ************************/

    /******************* User Route ************************/

    router.post('/user', (req,res) => {

            let user = new User({

                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact,
                isAdmin: 'false',

                country: req.body.country,
                state: req.body.state,
                zip: req.body.zip,

            });

            user.save( (err) => {
                if (err) {
                    res.json({ success: false, message: 'Error in saving User' });
                } else {
                    res.json({ success: true, message: 'User saved successfully' });
                }
            });  
    });

    // Find User by email to compare passwords
    router.post('/findUser', (req,res) => {

        User.findOne( { 'email': req.body.email }, (err,user) => {
            if (err){
                res.json(err);
            } else {
                res.json(user);

            }
        });

    });

    /******************* User Route ************************/

    /******************* Category Route ************************/

    router.post('/category', (req,res) => {

        let category = new Category({
            categoryName: req.body.category
        });

        category.save( (err) => {
            if (err) {
                res.json({ success: false, message: 'Error in saving Category'});
            } else {
                res.json({ success: true, message: 'Category saved successfully' });   
            }
        });  

    });

    router.get('/category', (req,res) => {

        Category.find().exec((err, category) => {
            if (err){
                return console.log(err);
            } else {
                res.json(category);
            }
            
        });

    });

    /******************* Category Route ************************/

    return router;

}