# Week 3 – Practical Exercise
### Express Server & Prisma ORM

#### Task Details
&nbsp;

###### *Project Setup*

* Initialise a `node` project via `npm init -y`.
* Install the following dependencies:
  * `express`
  * `nodemon`
  * `dotenv`
  * `prisma`
* Create a __start__ script in `package.json` to enable `index.js` to be executed via `nodemon`.
* Create a __prisma__ object in `package.json`, which contains a __seed__ command, where `node` executes the `seed.js` file.
* Initialise __prisma__, and specify `sqlite` as the database provider.
* Create a `dev.db` file inside of the newly created __prisma__ folder.
* Create a schema file which contains both a *User* model, and a `Product` model.
    * __User Model__
        * _id_
        * _email_
        * _username_
        * _password_
        * _registered_
        ___
    * __Product Model__
        * _id_
        * _title_
        * _description_
        * _category_
        * _price_
        * _quantity_
        * _available_
&nbsp;
* Create a migration via __Prisma CLI__, to update the structure of the database.
* Seed the database with __1 registered__, and __non-registered user__, as well as __2__ products.
&nbsp;
___

###### *API Endpoints*

* Import `express` and create an instance of a server.
    * Create a root __endpoint__ to handle the server being started. Return __HTML__ instead of raw text.
        * __Example__ __endpoints__: '/' , '/_products_', '/_profile_'
        * __Example__ __HTML__: `<h1>Server is Running!</h1>` Use backticks ``, to render HTML content.
&nbsp;
* Create an __endpoint__ which accepts data via the *request* body, and __return__ the data to the client via a *response*. 
    * *__Use appropriate middleware to parse JSON data from both requests, and responses.__*
* Create an __endpoint__ which returns a list of products from the *database* via __prisma__.
* Create an __endpoint__ allowing the user to create a new product, returning both the newly created product, **and** a *response* containing the **updated** products data from the *database* via __prisma__.
  
&nbsp;

## Documentation

&nbsp;
### Prisma ORM

##### [Prisma ORM • CLI Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)

##### [Prisma ORM • SQLite](https://www.prisma.io/docs/concepts/database-connectors/sqlite)

##### [Prisma ORM • Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)

##### [Prisma ORM • Client API Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)

##### [Prisma ORM • Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate/get-started)

##### [Prisma ORM • Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)

##### [Prisma ORM • CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)

&nbsp;
### Express

##### [Express • Starter Template](https://expressjs.com/en/starter/hello-world.html)

##### [Express • Routing Syntax](https://expressjs.com/en/guide/routing.html)

##### [Express • API Reference](https://expressjs.com/en/4x/api.html)