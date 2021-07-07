const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Krushnaraj004:BANNA@44@cluster0.dqlkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then((data) => console.log("connect to database"))
    .catch((err) => console.log("err occured while connecting"));