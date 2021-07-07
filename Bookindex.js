//Create server through Express
const express = require("express");
//const mongoose = require('mongoose');
const app = express();
//const { BookModel } = require("./BookSchema"); //filename
const BookRoutes=require("./module/routes/routes");
const mongoconnect=require("../../mongodb/link");

//connecting to mongodb
// mongoose.connect('mongodb+srv://Krushnaraj004:BANNA@44@cluster0.dqlkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     }).then((data) => console.log("connect to database"))
//     .catch((err) => console.log("err occured while connecting"));

//parsing body using middleware act
app.use(express.json());
//app.use(checkAge); to check at all api request
//middleware

app.use(BookRoutes);

// const checkAge = (req, res, next) => {
//         const Price = req.body.age;
//         if (Price >= 100) {
//             // console.log("Best price");
//             next();
//         } else {
//             console.log("good Price");
//         }
//     }
//     //saving Data to DB
// app.post("/add/book", checkAge, (req, res) => {
//     const data = req.body;


//     const Book = new BookModel({
//         BookName: data.BookName,
//         Price: data.Price,
//         Author: data.Author,
//         Language: data.Language,
//         AboutAuthor: data.AboutAuthor,
//     });
//     Book.save().then((data) => {
//         console.log("data", data);
//         res.send(data);
//     }).catch((err) => {
//         console.log("err", err);
//         res.send("unable to send");
//     });
// });

//getting a document by id

// app.get("/get/bookById", (req, res) => {
//     const _id = req.query._id;
//     // console.log("req.query", req.query);
//     if (_id) {
//         console.log("inside then");
//         BookModel.findOne({ _id: _id }).then((data) => {
//             if (!data) {
//                 res.send("couldn't find user");
//             } else {
//                 res.send(data);
//             }
//         }).catch((err) => {
//             console.log("err", err);
//             res.send("something wrong");
//         });
//         //console.log("friend", friend);
//     } else {
//         res.send("Invalid Id");
//     }
// });

// // //fetch all docs inside a collection

// //delete object through i
// app.delete("/delete/bookById", (req, res) => {
//     const _id = req.query._id;
//     const data = req.body;
//     BookModel.findByIdAndDelete({ _id: _id }).then((data) => {
//         res.status(200).send("Deleted Successfully");
//     }).catch(err => {
//         console.log("err", err);
//         res.status(500).send("something went wrong ,Please try again later!");
//     })
// });

// //Update object through id
// // app.put("update/bookById", (req, res) => {
// //     const _id = req.query._id;
// //     const data = req.body;

// //     console.log("data", data);
// //     BookModel.findByIdAndUpdate({ _id: _id }, { $set: { BookName: data.BookName } }, { new: true })
// //         .then((data) => {
// //             res.status(200).send("data", data);
// //         }).catch(err => {
// //             console.log("err", err);
// //             res.status(500).send("something went wrong ,Please try again later!");
// //         })
// // });

// //PUT mb
// app.put('/update/bookById', (req, res) => {
//     console.log("route", req.query)
//     const body = req.body;
//     const query = req.query;
//     console.log("Language", body);

//     if (req.query.BookName && Object.keys(req.body).length > 0) {
//         BookModel.where({ BookName: req.query.book }).findOne()
//             .then((data) => {
//                 console.log("available data", data);
//                 if (data != null) {
//                     BookModel.updateOne({ BookName: query.BookName }, { Language: body.Language }, (error, docs) => {
//                         if (error) {
//                             console.log(error)
//                             res.status(400).send("Error")
//                         } else {
//                             console.log("Updated Docs : ", docs);
//                             res.status(200).send(docs.nModified + "data updated")
//                         }
//                     })
//                 } else {
//                     res.status(400).send("Unable to find book")
//                 }

//             })
//             .catch((err) => res.status(400).send("unable find given book in database"))
//     } else {
//         if (Object.keys(req.body).length < 1) {
//             res.status(400).send("Bad Request Please provide body")
//         } else {
//             res.status(400).send("Bad Request Please provide book query")
//         }

//     }

// });

app.listen(8080, function() {
    console.log("server is up on port 8080");
});