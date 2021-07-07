const express = require("express");
const router = express.Router();
const { BookModel } = require("../../Assi/BookSchema"); //filename
const friendcontroll = require("../../controller/friend-controller");
router.post("/add/book", friendcontroll.addfriendcontroller);

//getting a document by id

router.get("/get/bookById", (req, res) => {
    const _id = req.query._id;
    // console.log("req.query", req.query);
    if (_id) {
        console.log("inside then");
        BookModel.findOne({ _id: _id }).then((data) => {
            if (!data) {
                res.send("couldn't find user");
            } else {
                res.send(data);
            }
        }).catch((err) => {
            console.log("err", err);
            res.send("something wrong");
        });
        //console.log("friend", friend);
    } else {
        res.send("Invalid Id");
    }
});
//delete object through i
router.delete("/delete/bookById", (req, res) => {
    const _id = req.query._id;
    const data = req.body;
    BookModel.findByIdAndDelete({ _id: _id }).then((data) => {
        res.status(200).send("Deleted Successfully");
    }).catch(err => {
        console.log("err", err);
        res.status(500).send("something went wrong ,Please try again later!");
    })
});
//update value
router.put('/update/bookById', (req, res) => {
    console.log("route", req.query)
    const body = req.body;
    const query = req.query;
    console.log("Language", body);

    if (req.query.BookName && Object.keys(req.body).length > 0) {
        BookModel.where({ BookName: req.query.book }).findOne()
            .then((data) => {
                console.log("available data", data);
                if (data != null) {
                    BookModel.updateOne({ BookName: query.BookName }, { Language: body.Language }, (error, docs) => {
                        if (error) {
                            console.log(error);
                            res.status(400).send("Error");
                        } else {
                            console.log("Updated Docs : ", docs);
                            res.status(200).send(docs.nModified + "data updated");
                        }
                    })
                } else {
                    res.status(400).send("Unable to find book");
                }

            })
            .catch((err) => res.status(400).send("unable find given book in database"));
    } else {
        if (Object.keys(req.body).length < 1) {
            res.status(400).send("Bad Request Please provide body");
        } else {
            res.status(400).send("Bad Request Please provide book query");
        }

    }

});

module.exports = router;