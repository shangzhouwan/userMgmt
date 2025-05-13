# userMgmt

Use Express.js along with a database like MongoDB or MySQL. Here's a basic example of how you can implement this:

## Features to Implement:
1.Add User (Create) 

2.Edit User (Read and Modify)

3.Update User (Modify)

4.Delete User (Remove)

## Steps:
1.Create a new Node.js project.

2.Install required dependencies.

3.Set up an Express server.

4.Use a database (e.g., MongoDB) for data persistence.

5.Implement CRUD routes.

## Instructions:
Run `npm init -y` to create a package.json file.

Install dependencies:

`npm install express mongoose body-parser`

Start your MongoDB server (e.g., mongod command).

Run the Node.js application:

`node index.js`
### Test the API using tools like Postman or cURL:
POST /users → Create a new user.

GET /users → Get all users.

GET /users/:id → Get a specific user by ID.

PUT /users/:id → Update a user by ID.

DELETE /users/:id → Delete a user by ID.
