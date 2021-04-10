// producto1

const products1 = require('../product1.json');

router.get('/', (req, res) => {
    res.json(products1);
})
router.post('/', (req, res) => {
    const { id, title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        const id = products1.length + 1;
        const newProduct = { ...req.body, id };
        products1.push(newProduct);
        res.json(products1);
    } else {
        res.send('error');
    }

});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id) {
        _.each(products1, (product, i) => {
            if (product.id == id) {
                products1.splice(i, 1);
            }
        });
        res.json(products1);
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, image, price, description, sentence } = req.body;
    if (id && title && image && price && description && sentence) {
        _.each(products1, (product, i) => {
            if (product.id === id) {
                product.id = id;
                product.title = title;
                product.image = image;
                product.price = price;
                product.description = description;
                product.sentence = sentence;
            }
        });
        res.json(products1);
    } else {
        res.status(500).json({ error: 'error' });
    }
});

module.exports = router;