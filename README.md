[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19768211&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

# PLP Bookstore Database (MongoDB)
  
## 📌 Project Overview
This project sets up a **MongoDB database** for managing a bookstore collection. It includes:
- **Data insertion script (`insert_books.js`)**
- **Query operations (`queries.js`)**
- **Indexing & aggregation pipelines**


## 🛠 Prerequisites

- **MongoDB** 
- **MongoDB Compass** 
- **Node.js & npm**
- **VS Code**

## 🚀 Running the Scripts

### **1️⃣ Insert Sample Data**
Run `insert_books.js` to populate your database:

node insert_books.js

# Execute Query Scripts
Run CRUD operations & aggregation queries:

node queries.js

 # MongoDB Compass Query Examples

- Find all books in Fiction genre
- { "genre": "Fiction" }

- Find books published after 2000
- {"published_year": { "$gt": 2000 } }

- Sort books by price (descending)
- db.books.find().sort({ price: -1 })


# Indexing & Aggregation Pipelines


- Create an Index on Title
- db.books.createIndex({ title: 1 })

- Find the Average Price of Books by Genre
- db.books.aggregate([
 - { "$group": { "_id": "$genre", "averagePrice": { "$avg": "$price" } } }
])