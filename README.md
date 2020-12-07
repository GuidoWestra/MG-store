#User stories

- As a customer I want to see a list of available products so I know what I can buy
- As a customer I want to see the products belonging to a specific category, so I can find what I am looking for
- As a new customer I want to be able to sign up & log in so I can start making an order
- As a customer I want to create a new empty order, so I can start purchasing products
- As a customer I add a product to my order, so I can purchase a product
- As a customer I want to see which products are part of my order, so I know what I am paying for
- As an admin I want to be able to add a new product to the shop

## Models:

- Product (name, description, price, imageUrl, ...)
- Category (name, imageUrl, description, ...)
- User (firstName, lastName, address, email, phone, isAdmin, ...)
- Order (this one is up to you to figure out)

1. Users:

- email : string
- password : string
- name : string
- userType: string
- address: string (street Name, [LATER: city, country postalcode])
- phone: integer
- [id] : integer

2. Products: (availability can be set to true / false )

- name string
- price: float
- categoryId: string
- available: boolean
- [id] : integer

3. Categories

- name: string
- description: string
- imageUrl: string

3. Cart/order (a list of products the customer has selected to purchase)

- productId (every Row with a different product)
- userId (user has the product in his cart)
- quantity

Things common to all User Stories:
Database which Stores:
Products w/ product details & Product Categories (all in one table?)
Users (& admins)
Current User Order / Cart ? ( ideally stored in frontend )
API for client to call
Endpoints for to handle different types of requests / types of data.
Users / Customers which interact with the site (unregistered & registered)

Tasks

- Find and retrieve fake products data (or make the data yourself)
- Setup express API
- Setup Database
- Configure & test Database connection details
- Create Models with attributes:
- Do Migration files
- Create Seeders for all tables
- Test Database relations & table shapes with queries

- Setup Express API
- Create Basic server
- Create Routes for
- users,
- products,
- orders ( can only exist if user is registered)
- create endpoints in routes to match User stories.

User Stories to Implement later
as an admin I want to be able to add new products

As a customer I want to see a list of available products so I know what I can buy
Requirements:
API Endpoint for client to request a list of available products,
retreive the data from DB
responds with the available products
Client calls the /products endpoint with the details of request
server handles & validates request,
server queries database,
database responds with requested data
server sends response with the data

Implementation:
Route: /products:

Show all products: GET /products

Show available products: GET /products?available=true
where product.available === true

As a customer I want to see the products belonging to a specific category, so I can find what I am looking for

Implementation:
Route: /products

Show products by Category: GET /products/category/:categoryId

As a new customer I want to be able to sign up & log in so I can start making an order

Implementation

Sign up and Create a New user account: POST /users {name, email, password}

Login with user credentials: POST /login {email, password}

Client stays authenticated after user logs in: GET /<anyRoute> Authorization:”Bearer ValidJsonWebToken"

As a customer I want to create a new empty order, so I can start purchasing products

On client-side webpage : <button>Add to Cart <button>

Client Sends Request:
