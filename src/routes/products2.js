// producto2
const products2 = require('../product2.json');

router.get('/', (req, res) => {
    res.json(products2);
})
// router.post('/', (req, res) => {
//     const { id, title, image, price, description, sentence } = req.body;
//     if (id && title && image && price && description && sentence) {
//         const id = products2.length + 1;
//         const newProduct = { ...req.body, id };
//         products2.push(newProduct);
//         res.json(products2);
//     } else {
//         res.send('error');
//     }

// });
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     if (id) {
//         _.each(products2, (product, i) => {
//             if (product.id == id) {
//                 products2.splice(i, 1);
//             }
//         });
//         res.json(products2);
//     }
// });
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, image, price, description, sentence } = req.body;
//     if (id && title && image && price && description && sentence) {
//         _.each(products2, (product, i) => {
//             if (product.id === id) {
//                 product.id = id;
//                 product.title = title;
//                 product.image = image;
//                 product.price = price;
//                 product.description = description;
//                 product.sentence = sentence;
//             }
//         });
//         res.json(products2);
//     } else {
//         res.status(500).json({ error: 'error' });
//     }
// });

module.exports = router;