const Book = require('../models/Book')

const getBook=async (req, res)=> {
    
    try {
        const data=await Book.findAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send(err)
        console.log(err);
    }
}

const getOneBook = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const data = await Book.findOne({ where: { id: id } });
        res.status(200).send(data)
    } catch (err) {
        res.status(404).send(err)
        console.log(err);
    }
}

const createBook = async (req, res) => {
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price
    const data = {
        name: name,
        author: author,
        price: price
    }
    // console.log(data);   
    try {
        const newData = await Book.create(data);
        res.status(200).send('Book created successfully')
    } catch (err) {
        res.status(404).send(err)
        console.log(err)
    }
}

const updateBook = async (req, res) => {
    const id = req.params.id
    const name=req.body.name;
    const author=req.body.author;
    const price=req.body.price;
    const data = {
        name:name,
        author:author,
        price:price
    }
    console.log('hiiii update')
    try {
        console.log('idhr aa gya hu')
        const updateData = await Book.update(data, { where: { id: id } });
        console.log(updateData)
        res.status(200).send('Book details updated Successfully');
    } catch (err) {
        console.log(err)
    }
}


const deleteOneBook = async (req, res) => {
    const id = req.params.id
    try {
        const data = await Book.destroy({ where: { id: id } });
        res.status(200).send('Book deleted successfully')
    } catch (err) {
        res.status(404).send(err)
        console.log(err)
    }
}



module.exports = {
    getBook,
    getOneBook,
    createBook,
    updateBook,
    deleteOneBook,
}