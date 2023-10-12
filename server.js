import express from 'express';
import dotenv from 'dotenv';

import booksRoutes from './routes/books.js';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());

// Register your routes
app.use('/books', booksRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
