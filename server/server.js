const cors = require('cors');
const express = require('express');
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const productRoutes = require('./routes/product.routes')
productRoutes(app);

const port = 8000;

app.listen(port, () => console.log(`Listening at port: ${port}`));