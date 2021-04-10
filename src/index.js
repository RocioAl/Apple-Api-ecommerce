const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors())


app.get('/con-cors', cors(), (req, res, next) => {
    res.json({ msg: 'con cors 🔝 🎉' })
})
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// rutas
app.use(require('./routes/index'));
app.use('/api/products', require('./routes/products'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});