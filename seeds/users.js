const faker = require("faker");

const createFakerUser = () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.city(),
    postcode: faker.address.zipCode(),
    contactNo: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
});

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("users")
        .del()
        .then(function () {
            // Inserts seed entries
            const users = [];
            const rows = 1000;

            for (let i = 0; i < rows; i++) {
                users.push(createFakerUser());
            }

            return knex("users").insert(users.map((obj) => ({ ...obj, password: "12345678" })));
        });
};
