exports.up = function (knex) {
    return knex.schema.raw(`create table koboResponse (
    _id bigint primary key identity,
    _formName varchar(255) not null,
    jsonData nvarchar(max) not null
);`)
        .raw(`ALTER TABLE koboResponse
    ADD CONSTRAINT [jsonData record should be formatted as JSON]
                   CHECK (ISJSON(jsonData)=1)`)
};

exports.down = function (knex) {
    return knex.schema.dropTable(koboResponse)
};