const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Rocio"
    }
    res.json(data);
})

app.get('/con-cors', cors(), (req, res, next) => {
    res.json({ msg: 'con cors 🔝 🎉' })
})
module.exports = router;