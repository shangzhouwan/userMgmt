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

```
npm install express mongoose body-parser

npm install multer

```


Start your MongoDB server (e.g., mongod command).

Run the Node.js application:

`node index.js`
### Test the API using tools like Postman or cURL:
POST /users → Create a new user.

GET /users → Get all users.

GET /users/:id → Get a specific user by ID.

PUT /users/:id → Update a user by ID.

DELETE /users/:id → Delete a user by ID.

上传或更新头像 API：

POST /users/:id/avatar：
使用 multer 上传头像文件。
将上传的文件路径保存到用户的 avatar 字段中

访问上传的文件：

使用 express.static 中间件提供静态文件访问，路径为 /uploads/

测试上传头像：

使用 Postman 或其他工具，发送 POST 请求到 /users/:id/avatar。

在 form-data 中添加字段 avatar，选择文件作为值。

成功后，返回头像路径。

获取用户的头像：

用户的 avatar 字段会返回文件的相对路径，例如 /uploads/1683968201423-avatar.jpg。

使用完整 URL（如 http://localhost:3000/uploads/1683968201423-avatar.jpg）访问头像文件。
