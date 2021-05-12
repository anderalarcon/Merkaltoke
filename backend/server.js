import express from 'express'
import morgan from 'morgan';
import cors from "cors"
import fileUpload from "express-fileupload"
import history from "connect-history-api-fallback"
import path from "path"
const app=express();


//midlware
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({useTempFiles:true}))


app.use('/',require('./routes/auth' ))
app.use("/productos", require('./routes/productos'));
app.use("/proveedores", require('./routes/proveedor'));
app.use("/categorias", require('./routes/categorias'));
app.use("/carrito", require('./routes/carrito'));
app.use("/Comprobante", require('./routes/Comprobante'));


app.use(history())
app.use(express.static(path.join(__dirname,'public')));
app.set('port',process.env.PORT||4000);

app.listen(app.get('port'),()=>{
 console.log('Server on port ' +app.get('port') );   
})