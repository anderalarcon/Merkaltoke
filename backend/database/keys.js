import{Pool} from 'pg';
const pool=new Pool({
    host:'localhost',
    port:'5432',
    user:'ander',
    password:'ander',
    database:'merkaltok_vue'
})

module.exports=pool;