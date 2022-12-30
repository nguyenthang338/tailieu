/*
 * Return db connection, connect with
 * https://cloud.mongodb.com/v2/5fd0938e5158907fb78f3e38
*/

const MongoClient = require('mongodb').MongoClient;

let password = 'nvthang123'
let username = 'nvthang01';
let db_name = 'bot'

const uri = 'mongodb://localhost:27017';
// Database name
//
const client = new MongoClient(uri, {
  useNewUrlParser: true, useUnifiedTopology: true
});

/**
 * @return db
 *
 */
async function connect(db_name) {
  await client.connect();
  //console.log("Connected ckworrectly to server");
  const db  = await client.db(db_name);
  return db
}
/**
 * @param {string} collection_name  Collection of database
 * @return collection
 *
 */
async function collection (collection_name){
  let db = await connect() ;
   let collection = await db.collection (collection_name);
  return collection;
}


module.exports =  { connect , collection, client }  ;