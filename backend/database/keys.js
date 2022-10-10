import { Pool } from "pg";
const pool=new Pool({//Patron Singleton
    user:"anderadmin@postgresqlmerkaltok",
    password:"anderonCloud123!",
    host:"postgresqlmerkaltok.postgres.database.azure.com",
    port:5432,
    database:"postgres"  ,
    ssl: {
      rejectUnauthorized: false
    }
})
module.exports = pool;
