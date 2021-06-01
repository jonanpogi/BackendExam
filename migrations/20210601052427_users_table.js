exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("firstName");
        table.string("lastName");
        table.string("address");
        table.string("postcode");
        table.string("contactNo");
        table.string("email");
        table.string("username");
        table.string("password");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("users");
};
