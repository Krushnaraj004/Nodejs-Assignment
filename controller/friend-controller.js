exports.addfriendcontroller = (req, res) => {
    const data = req.body;
    const Book = new BookModel({
        BookName: data.BookName,
        Price: data.Price,
        Author: data.Author,
        Language: data.Language,
        AboutAuthor: data.AboutAuthor,
    });
    Book.save();
};
const asyncfun = async(status, status1) => {
    try {
        const response = addfriendcontroller(status);
        console.log("response", response);
    } catch (error) {
        console.log("error", error);
    }
};
