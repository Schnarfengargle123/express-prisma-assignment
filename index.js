const express = require('express');
const app = express();
const port = 8000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<h2>Server is running!</h2>`);
});

app.post('/', (req, res) => {
    console.log("Request Body: ", req.body);
    res.send(req.body);
})

app.get('/products', async (req, res) => {
    const products = await prisma.product.findMany();
    console.log("Products: ", products);
    res.send(products);
})

app.listen(8000, () => {
    console.log(`Visit server @ localhost:${port}`);
})