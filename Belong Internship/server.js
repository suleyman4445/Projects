   // server.js
   const express = require('express');
   const bodyParser = require('body-parser');
   const { Sequelize, DataTypes } = require('sequelize');

   const app = express();
   const PORT = process.env.PORT || 3000;

   // Middleware
   app.use(bodyParser.json());

   // Database connection
   const sequelize = new Sequelize('database_name', 'username', 'password', {
       host: 'localhost',
       dialect: 'postgres' // or 'mysql'
   });

   // Test database connection
   sequelize.authenticate()
       .then(() => console.log('Database connected...'))
       .catch(err => console.error('Unable to connect to the database:', err));

   // User model
   const User = sequelize.define('User ', {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       email: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true
       }
   });

   // Sync the model with the database
   sequelize.sync();

   // CRUD Operations
   // Create a new user
   app.post('/api/users/', async (req, res) => {
       try {
           const user = await User.create(req.body);
           res.status(201).json(user);
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   });

   // Fetch user by ID
   app.get('/api/users/:id', async (req, res) => {
       try {
           const user = await User.findByPk(req.params.id);
           if (user) {
               res.json(user);
           } else {
               res.status(404).json({ error: 'User  not found' });
           }
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   });

   // Update user information
   app.put('/api/users/:id', async (req, res) => {
       try {
           const [updated] = await User.update(req.body, {
               where: { id: req.params.id }
           });
           if (updated) {
               const updatedUser  = await User.findByPk(req.params.id);
               res.json(updatedUser );
           } else {
               res.status(404).json({ error: 'User  not found' });
           }
       } catch (error) {
           res.status(400).json({ error: error.message });
       }
   });

   // Remove user
   app.delete('/api/users/:id', async (req, res) => {
       try {
           const deleted = await User.destroy({
               where: { id: req.params.id }
           });
           if (deleted) {
               res.status(204).send();
           } else {
               res.status(404).json({ error: 'User  not found' });
           }
       } catch (error) {
           res.status(500).json({ error: error.message });
       }
   });

   // Error handling middleware
   app.use((err, req, res, next) => {
       console.error(err.stack);
       res.status(500).send('Something broke!');
   });

   // Start the server
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   

/* Step-1:
Initialize a new Node.js project:
mkdir user-api
cd user-api
npm init -y

Step-2:
Install required packages:
npm install express sequelize pg pg-hs

Step-3:
Start the server:
node server.js

Step-4:
Test the API using Postman:
POST /api/users/: Create a new user by sending a JSON body with name and email.
GET /api/users/:id: Fetch a user by their ID.
PUT /api/users/:id: Update user information by sending a JSON body with updated fields.
DELETE /api/users/:id: Remove a user by their ID. */
