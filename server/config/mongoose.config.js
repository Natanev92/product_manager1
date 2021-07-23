const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Success, connected to the product_manager1 DB'))
    .catch(err => console.log('Something went wrong connecting to the product_manger1 DB', err));