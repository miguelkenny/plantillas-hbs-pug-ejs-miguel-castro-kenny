
const contenedor = require('../contenedor/contenedor')

const { products } = new contenedor();

const getProducts = (req, res) => {
    res.render('main.ejs', { products })
}

const getProductsView = (req, res) => {
    res.render('products.ejs', { products })
}

const postProducts = (req, res) => {
    const {nombre, precio, url} = req.body
    const id = products.length ? ((products[products.length - 1].id) + 1) : products.length + 1;
    
    if((nombre !== '' && precio !== '' && url !== '')){
        products.push({nombre, precio, url, id})
    }
    res.status(201).redirect('/')
}

module.exports = {
    getProducts,
    getProductsView,
    postProducts
}