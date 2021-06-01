const { mysSqlConnection } = require("../configs/db");

const getUsers = (req, res) => {
    mysSqlConnection.query("SELECT * FROM users", (error, data, fields) => {
        if (!error) res.status(200).send(data);
        else console.log(error);
    });
};

const addUser = (req, res) => {
    const { firstName, lastName, address, postcode, contactNo, email, username, password } = req.body;

    mysSqlConnection.query(
        `INSERT INTO users (firstName, lastName, address, postcode, contactNo, email, username, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, address, postcode, contactNo, email, username, password],
        (error, data, fields) => {
            if (!error) res.status(201).send({ message: "Data Inserted Succesfully" });
            else console.log(error);
        }
    );
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, address, postcode, contactNo, email, username, password } = req.body;

    mysSqlConnection.query(
        `UPDATE users SET firstName = ?, lastName = ?,  address = ?, postcode = ?, contactNo = ?, email = ?, username = ?, password = ? WHERE id = ?`,
        [firstName, lastName, address, postcode, contactNo, email, username, password, id],
        (error, data, fields) => {
            if (!error) res.status(201).send({ message: "Data Updated Succesfully" });
            else console.log(error);
        }
    );
};

const deleteUser = (req, res) => {
    // variable ids is an array of id
    const { ids } = req.body;

    mysSqlConnection.query(`DELETE FROM users WHERE id IN (?)`, [ids], (error, data, fields) => {
        if (!error) res.status(200).send({ message: "Data Deleted Succesfully" });
        else console.log(error);
    });
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};
