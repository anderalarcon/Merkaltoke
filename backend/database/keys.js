import{Pool} from 'pg';
const pool=new Pool({//Patron Singleton
    user:"dxhystgervvpex",
    password:"234982dfd2e2ea026d2178320ba6c31f94db0bf31b197c778282d16385723bba",
    host:"ec2-107-22-83-3.compute-1.amazonaws.com",
    port:5432,
    database:"dfrq6dj08llsm5"  ,
    ssl: {
      rejectUnauthorized: false
    } 
})

module.exports=pool;