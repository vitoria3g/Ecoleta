import Knex from 'knex'; 

//Para criar a migration
export async function up(knex: Knex){

  return knex.schema.createTable('point_items', table=>{
    table.increments('id').primary();

    //Chave estrangeira
    table.integer('point_id').notNullable().references('id').inTable('points');
    table.integer('item_id').notNullable().references('id').inTable('items');
  });
}

//Para desfazer a migration
export async function down(knex: Knex){

  return knex.schema.dropTable('point_items');
}