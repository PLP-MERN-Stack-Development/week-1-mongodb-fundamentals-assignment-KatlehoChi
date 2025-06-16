const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function runQueries() {
    try {
        await client.connect();
        const db = client.db("plp_bookstore");
        const books = db.collection("books");

        console.log("🔍 Find all books in a specific genre (e.g., Fiction):");
        console.log(await books.find({ genre: "Fiction" }).toArray());

        console.log("📅 Find books published after a certain year (e.g., 2000):");
        console.log(await books.find({ published_year: { $gt: 2000 } }).toArray());

        console.log("✍️ Find books by a specific author (e.g., George Orwell):");
        console.log(await books.find({ author: "George Orwell" }).toArray());

        console.log("💰 Update the price of a specific book (e.g., '1984'):");
        console.log(await books.updateOne({ title: "1984" }, { $set: { price: 12.99 } }));

        console.log("🗑️ Delete a book by its title (e.g., 'Moby Dick'):");
        console.log(await books.deleteOne({ title: "Moby Dick" }));

        console.log("✅ Find books that are both in stock and published after 2010:");
        console.log(await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

        console.log("🎯 Use projection to return only the title, author, and price:");
        console.log(await books.find({}, { projection: { title: 1, author: 1, price: 1, _id: 0 } }).toArray());

        console.log("📊 Sorting books by price (Ascending):");
        console.log(await books.find().sort({ price: 1 }).toArray());

        console.log("📉 Sorting books by price (Descending):");
        console.log(await books.find().sort({ price: -1 }).toArray());

        console.log("📖 Pagination (5 books per page, skipping first 5):");
        console.log(await books.find().skip(5).limit(5).toArray());

    } catch (err) {
        console.error("Error running queries:", err);
    } finally {
        await client.close();
    }
}

runQueries();
