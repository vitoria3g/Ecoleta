import Knex from 'knex'; 

//Para criar a migration
export async function up(knex: Knex){

  return knex.schema.createTable('items', table=>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
    
  });
}

//Para desfazer a migration
export async function down(knex: Knex){

  return knex.schema.dropTable('items');
}