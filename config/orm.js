const db = require('./connection')('burgers_db', 'skotkalb')

async function selectAll(){
 let result= await db.query( "select * from burgers" )
 return result
}

async function insertOne(burger){
    let result = await db.query( `INSERT INTO  burgers (burger_name,devoured)  Values ('${burger.burgerName}',false)`)
    return result
}
async function updateOne(id){
    let result = await  db.query( `UPDATE burgers SET devoured = true WHERE id = ${id}`)
   
   let result2 = await db.query( `select * from burgers where devoured = true`)
   return result2
}


module.exports = {selectAll,insertOne,updateOne}