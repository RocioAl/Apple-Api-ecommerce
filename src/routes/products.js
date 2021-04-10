const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const products = require('../products.json');

router.get('/', (req, res) => {
    res.json(products);
})
router.post('/', (req, res) => {
    const { id, title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        const id = products.length + 1;
        const newProduct = { ...req.body, id };
        products.push(newProduct);
        res.json(products);
    } else {
        res.send('error');
    }

});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        _.each(products, (product, i) => {
            if (product.id == id) {
                products.splice(i, 1);
            }
        });
        res.json(products);
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        _.each(products, (product, i) => {
            if (product.id === id) {
                product.id = id;
                product.title = title;
                product.image = image;
                product.price = price;
                product.description = description;
                product.sentence = sentence;
            }
        });
        res.json(products);
    } else {
        res.status(500).json({ error: 'error' });
    }
});


// producto3


const products3 = require('../product3.json');

router.get('/', (req, res) => {
    res.json(products3);
})
router.post('/', (req, res) => {
    const { id, title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        const id = products3.length + 1;
        const newProduct = { ...req.body, id };
        products3.push(newProduct);
        res.json(products3);
    } else {
        res.send('error');
    }

});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        _.each(products3, (product, i) => {
            if (product.id == id) {
                products3.splice(i, 1);
            }
        });
        res.json(products3);
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        _.each(products3, (product, i) => {
            if (product.id === id) {
                product.id = id;
                product.title = title;
                product.image = image;
                product.price = price;
                product.description = description;
                product.sentence = sentence;
            }
        });
        res.json(products3);
    } else {
        res.status(500).json({ error: 'error' });
    }
});

module.exports = router;