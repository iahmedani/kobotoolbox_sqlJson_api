exports.up = function (knex) {
    return knex.schema.createTable('tblTest', (t) => {
        t.increments('id').primary();
        t.string('name')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('tblTest')
};