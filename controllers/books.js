let books = [
    {
        id: '1',
        name: 'Harry Potter',
        author: 'J. K. Rowling'
    },
    {
        id: '2',
        name: 'Spare',
        author: ' Prince Harry'
    },
    {
        id: '3',
        name: 'Eat, Pray, Love',
        author: ' Elizabeth Gilbert'
    }
];

const bookController = {
    getBookById: (id) => {
        return books.find((book) => book.id === id);
    },

    getBook: (req, res) => {
        res.status(200).json(books);
    },

    getBookById: (req, res) => {
        const { id } = req.params;
        console.log(id);

        const booksExist = bookController.getBookById(id);
        if (booksExist) {
            res.status(200).json(booksExist);
        } else {
            res.status(404).json({
                message: `Book with id ${id} not exist`
            });
        }
    },

    postBook: (req, res) => {
        const { name, author } = req.body;
        const newBook = {
            id: String(books.length + 1),
            name: name,
            author: author
        };
        books.push(newBook);
        res.status(201).json(newBook);
    },

    putBook: (req, res) => {
        const { id } = req.params;
        const { name, author } = req.body;
        console.log(name, author);
        const booksExsit = bookController.getBookById(id);
        if (booksExsit) {
            books.forEach((book, index) => {
                if (book.id === id) {
                    const updatedBook = {
                        id: id,
                        name: name,
                        author: author
                    };
                    books[index] = updatedBook;
                    res.status(200).json(updatedBook);
                }
            });
        } else {
            res.status(200).json({ message: 'Book not found with id ' });
        }
    },

    deleteBook: (req, res) => {
        const { id } = req.params;
        const bookExsit = bookController.getBookById(id);
        if (bookExsit) {
            books = books.filter((book) => book.id !== id);
            res.status(200).json({
                message: `book with id ${id} successfully deleted`
            });
        } else {
            res.status(200).json({
                message: `Book not found with id: ${id} doesn't exist`
            });
        }
    }
};

export default bookController;
