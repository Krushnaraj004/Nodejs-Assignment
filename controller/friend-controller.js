exports.addfriendcontroller = (req, res) => {
    const data = req.body;
    const Book = new BookModel({
        BookName: data.BookName,
        Price: data.Price,
        Author: data.Author,
        Language: data.Language,
        AboutAuthor: data.AboutAuthor,
    });
    Book.save() //.then((data) => {
        //     console.log("data", data);
        //     res.send(data);
        // }).catch((err) => {
        //     console.log("err", err);
        //     res.send("unable to send");
        // });
};
const asyncfun = async(status, status1) => {
    try {
        const response = addfriendcontroller(status);
        console.log("response", response);
    } catch (error) {
        console.log("error", error);
    }
};