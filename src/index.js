const express = require("express");
const db = require("./db");
const config = require("./shared/config");
const handleError = require("./shared/errors/handle");
const adminsRoute = require("./modules/admins/_api");
const borrowersRoute = require("./modules/borrowers/_api");
const pubishersRoute = require("./modules/publishers/_api");
const authorsRoute = require("./modules/authors/_api");
const booksRoute = require("./modules/books/_api");
const loansRoute = require("./modules/loans/_api");

const app = express();

app.use(express.json());
app.use(adminsRoute);
app.use(borrowersRoute);
app.use(pubishersRoute);
app.use(authorsRoute);
app.use(booksRoute);
app.use(loansRoute);

app.use(handleError);

db();
app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
});
