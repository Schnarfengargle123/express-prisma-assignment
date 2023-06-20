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
    // res.sendStatus(201);
    res.send(req.body);
})

app.get('/products', async (req, res) => {
    const products = await prisma.product.findMany();
    console.log("Products: ", products);
    res.send(products);
})

app.post('/products', async (req, res) => {
    const {title, description, price, quantity, available, category} = req.body;

    // const products = await prisma.product.findMany();

    // let toBeCreatedProduct = newProduct;
    // console.log("To Be Created Product: ", toBeCreatedProduct);

    const newProduct = await prisma.product.create({
        // data: {
        //     title: req.body.title,
        //     description: req.body.description,
        //     price: req.body.price,
        //     quantity: req.body.quantity,
        //     available: req.body.available
        // }

        // data: {
        //     title: title,
        //     description: description,
        //     price: price,
        //     quantity: quantity,
        //     available: available,
        //     category: category
        // }

        data: {
            title,
            description,
            price,
            quantity,
            available,
            category
        }
    });

    const products = await prisma.product.findMany();

    console.log("New Product: ", newProduct);
    console.log("Products: ", products);
    res.send({newProduct, products});
})

app.listen(port, () => {
    console.log(`Visit server @ localhost:${port}`);
})