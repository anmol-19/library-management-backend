const express=require('express')
const router=express.Router();
const bookController=require('../controllers/bookControllers')


module.exports=()=>{
    router.route('/').get(bookController.getBook);
    router.route('/').post(bookController.createBook);
    router.route('/:id').get(bookController.getOneBook);
    router.route('/:id').patch(bookController.updateBook);
    router.route('/:id').delete(bookController.deleteOneBook);
    return router
}   