const { Router } = require('express')
const router = Router()
const { getProducts, postProducts, getProductsView } = require('../controllers/productsController')

router.get('/', getProducts)
router.get('/productos', getProductsView)
router.post('/productos', postProducts)

module.exports = router