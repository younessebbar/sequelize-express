const express = require('express');
const app = express();

const db = require("./models");

app.use(express.json());

db.sequelize.sync({ force: true }) // Always drops tables and recreates them
    .then(() => {
        console.log("Database synchronized successfully.");
        createRolesAndUsers();
    })
    .catch(err => {
        console.log("Failed to synchronize the database: " + err.message);
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function createRolesAndUsers() {
    db.role.create({ name: "user" })
        .then(() => db.role.create({ name: "admin" }))
        .then(() => {
            console.log("Roles created successfully.");

            return db.user.create({
                name: "Younes SEBBAR",
                email: "younes.seb@example.com",
                password: "123"
            });
        })
        .then(user => {
            console.log("User created successfully.");

            // Assign the 'admin' role to the user
            return db.role.findOne({ where: { name: "admin" } })
                .then(role => {
                    user.addRole(role);
                    console.log("Assignement complete");
                });
        })
        .catch(err => {
            console.error("Error creating roles or users: ", err);
        });
}
