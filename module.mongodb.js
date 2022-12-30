/**
 * This is function insertOne, update, or detete
 * lib for crud  with mongodb cloud
 *
 */
let dbName = 'bot';
let collectionName = 'binance'
let  {collection, connect, client}   = require('./db.js');

let insert = async function (symbol){
  let db = await connect(dbName);
  let collect = await db.collection(collectionName);
  let r = await collect.insertOne(symbol);
}
let update = async function (symbol,thuoctinh , value){
  let db = await connect(dbName);
  let collection = await db.collection(collectionName);
  let r =  await collection.updateOne({name: symbol},{$set: { [thuoctinh]: value} } ) ;
}
let find = async function (symbol){
  let db = await connect(dbName);
  let collect  = await db.collection(collectionName);
  let r = await collect.findOne({name: symbol} );
  return r ;
}
let remove = async function (symbol){
  let db = await connect(dbName);
  let collection = await db.collection(collectionName);
  await collection.deleteOne({name: symbol} );
}

let find_mutil = async function(symbol){
  let db = await connect(dbName);
  let collection = await db.collection(collectionName);
  await collection.find({
    $and:
     [
       {name: symbol},
       { age: "19"}
    ]
    });
  /** 
  db.customers.find({
    $or: [
      {
        Country: "Germany"
      },
      {
        Country: "France"
      }
    ]
  })
  */
}
let find_id  = async function (symbol, _id){
  let db = await connect(dbName);
  let collection = await db.collection(collectionName);
 // await db.test.find(ObjectId("4ecc05e55dd98a436ddcc47c"))
  await db.test.find(ObjectId(_id)) ;
}

let find_id_update  = async function (symbol,_id, thuoctinh, value){
  let db = await connect(dbName);
  let collection = await db.collection(collectionName);
  let r =  await collection.updateOne(ObjectId(_id),{$set: { [thuoctinh]: value} } ) ;
}

module.exports  = {
  insert , update, find, remove } 