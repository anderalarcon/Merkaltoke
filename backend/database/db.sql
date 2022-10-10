
CREATE TABLE cliente(
	id_cliente SERIAL PRIMARY KEY NOT NULL,
	nombre_cliente VARCHAR(50),
	email_cliente VARCHAR(59) UNIQUE,
	password_cliente VARCHAR(50),
	direccion_cliente VARCHAR(100),
	DNI INTEGER,
	img_cliente VARCHAR
);
CREATE TABLE proveedor(
	id_proveedor SERIAL PRIMARY KEY NOT NULL,
	nombre_proveedor VARCHAR(50),
	email_proveedor VARCHAR(59) UNIQUE,
	password_proveedor VARCHAR(50),
	direccion_proveedor VARCHAR(100),
	RUC BIGINT,
	img_proveedor VARCHAR,
	activo VARCHAR
);
CREATE TABLE admin(
	id SERIAL primary key NOT NULL,
	admin_nickname varchar(50) NOT NULL,
	password_admin varchar(50) NOT NULL
);
CREATE TABLE tbl_metodo_pago(
	id_metodo_pago bigserial primary key NOT NULL,
	metodo VARCHAR(20)
);
CREATE TABLE tbl_categoria(
	id_categoria bigserial primary key NOT NULL,
	categoria VARCHAR(20),
	img_categoria VARCHAR
);

CREATE TABLE tbl_estado(
	id_estado bigserial primary key NOT NULL,
	estado VARCHAR(20)
);

CREATE TABLE tbl_producto(
	id_producto bigserial primary key NOT NULL,
	nombre VARCHAR(50),
	precio DECIMAL,
	stock int,
	detalle VARCHAR(50),
	id_proveedor BIGINT REFERENCES proveedor(id_proveedor) NOT NULL,
	id_categoria BIGINT REFERENCES tbl_categoria(id_categoria) NOT NULL,
	img_producto VARCHAR,
	visible VARCHAR
);
CREATE TABLE tbl_carrito(
	id_carrito serial primary key NOT NULL,
	id_cliente BIGINT REFERENCES cliente(id_cliente) NOT NULL
);
CREATE TABLE carrito_producto(
	id serial primary KEY NOT NULL,
	carrito_id BIGINT REFERENCES tbl_carrito(id_carrito) NOT NULL,
	producto_id BIGINT REFERENCES tbl_producto(id_producto) NOT NULL,
	cantidad_id INTEGER
);
CREATE TABLE tbl_pedido( 
	id_pedido serial primary key NOT NULL,
	fecha DATE,
	id_estado BIGINT REFERENCES tbl_estado(id_estado) NOT NULL,
	total DECIMAL,
	id_cliente BIGINT REFERENCES cliente(id_cliente) NOT NULL,
	id_metodo BIGINT REFERENCES tbl_metodo_pago(id_metodo_pago) NOT NULL
);
CREATE TABLE tbl_pedido_detalle(
	id_pedido_detalle serial primary key NOT NULL,
	cantidad INTEGER,
	precio DECIMAL,
	id_pedido BIGINT REFERENCES tbl_pedido(id_pedido) NOT NULL,
	id_producto BIGINT REFERENCES tbl_producto(id_producto) NOT NULL
);

CREATE TABLE tbl_devolucion_pedido(
	id_devolucion serial primary key NOT NULL,
	motivo VARCHAR (30),
	detalle_motivo VARCHAR(500),
	fecha DATE,
	procede VARCHAR,
	id_pedido BIGINT REFERENCES tbl_pedido(id_pedido) NOT NULL
);



DROP SCHEMA public CASCADE;
CREATE SCHEMA public;


INSERT INTO tbl_metodo_pago(metodo)VALUES('Tarjeta de Credito');
INSERT INTO tbl_metodo_pago(metodo)VALUES('Tarjeta de Debito');

INSERT INTO TBL_estado(id_estado,estado)VALUES(1,'Por confirmar');
INSERT INTO TBL_estado(id_estado,estado)VALUES(2,'Confirmado');
INSERT INTO TBL_estado(id_estado,estado)VALUES(3,'En camino');
INSERT INTO TBL_estado(id_estado,estado)VALUES(4,'Entregado');


INSERT INTO tbl_categoria( categoria, img_categoria)
VALUES('Bebidas','https://integralatampost.s3.amazonaws.com/uploads/article/picture/16320/20190508_Estas-son-las-marcas-de-bebidas-alcoh%C3%B3licas-m%C3%A1s-valiosas-de-Latinoam%C3%A9rica.jpg' );

INSERT INTO tbl_categoria( categoria, img_categoria)
VALUES('Embutidos','https://i1.wp.com/goula.lat/wp-content/uploads/2019/11/Embutidos-scaled-e1574403546717.jpg?fit=1600%2C813&ssl=1' );

INSERT INTO tbl_categoria( categoria, img_categoria)
VALUES('Abarrotes','https://cdn.needish.com/prod-boxfish/b567e729-1b3d-485f-b93f-7997f893bfa6-grpn/scale/900x600.jpg' );

INSERT INTO tbl_categoria( categoria, img_categoria)
VALUES('Electrodomesticos','https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?itok=vbhgGesl' );

INSERT INTO tbl_categoria( categoria, img_categoria)
VALUES('Tecnologia','https://www.latino-news.com/wp-content/uploads/2019/01/tecnologia.png' );

INSERT INTO tbl_categoria( categoria, img_categoria)
VALUES('Limpieza','https://www.redaccionmedica.com/images/destacados/-engordan-los-ninos-por-culpa-de-los-productos-de-limpieza--9331.jpg' );








insert into admin(admin_nickname,password_admin)values('admin@gmail.com','admin');


INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('ander','ander@gmail.com','123', 'Direccion 1', 12345678,'usuario.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('boris','boris@gmail.com','123', 'Direccion 2', 12345678,'usuario.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('cesar','cesar@gmail.com','123', 'Direccion 3', 12345678,'usuario.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('dante','dante@gmail.com','123', 'Direccion 4', 12345678,'usuario.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('edgar','edgar@gmail.com','123', 'Direccion 5', 12345678,'usuario.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('roger','roger@gmail.com','123', 'Direccion 6', 12345678,'usuario.jpg');




INSERT INTO tbl_carrito(id_cliente) values(1);
INSERT INTO tbl_carrito(id_cliente) values(2);
INSERT INTO tbl_carrito(id_cliente) values(3);
INSERT INTO tbl_carrito(id_cliente) values(4);
INSERT INTO tbl_carrito(id_cliente) values(5);
INSERT INTO tbl_carrito(id_cliente) values(6);




INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)VALUES('Coca Cola','coca@gmail.com','123', 'Direccion Prov 1', 12345678,'usuario.jpg','Activo');
INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)VALUES('Backus','backus@gmail.com','123', 'Direccion Prov 2', 12345678,'usuario.jpg','Activo');


INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Gloria','gloria@gmail.com','123', 'Direccion Prov 3', 12345678,'usuario.jpg','Activo');


INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('San Fernando','sanfernando@gmail.com','123', 'Direccion Prov 4', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Braedt','braedt@gmail.com','123', 'Direccion Prov 5', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Molitalia','molitalia@gmail.com','123', 'Direccion Prov 6', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Costeño','costeño@gmail.com','123', 'Direccion Prov 7', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Primor','primor@gmail.com','123', 'Direccion Prov 8', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Bells','bells@gmail.com','123', 'Direccion Prov 9', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('LG','lg@gmail.com','123', 'Direccion Prov 10', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Samsung','samsung@gmail.com','123', 'Direccion Prov 11', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('HP','hp@gmail.com','123', 'Direccion Prov 12', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Huawei','huawei@gmail.com','123', 'Direccion Prov 13', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Elite','elite@gmail.com','123', 'Direccion Prov 14', 12345678,'usuario.jpg','Activo');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)
VALUES('Sapolio','sapolio@gmail.com','123', 'Direccion Prov 15', 12345678,'usuario.jpg','Activo');



INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Coca Cola',12, 100, 'Paquete de 6 und 500ml', 1 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/493602-1000-1000/20035109.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Coca Cola',18, 100, 'Paquete de 2 und 3L ', 1 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/730907-1000-1000/20102587.jpg?v=637479663350570000','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Coca Cola',8, 100, 'Paquete de 6 und 300ml', 1 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/730910-1000-1000/20136607.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Inca Cola',12, 500, 'Paquete de 6 und 500ml', 1 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/530256-450-450/20109810.jpg?v=637419679027930000','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Inca Cola',18, 500, 'Paquete de 2 und 3L', 1 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/525923-450-450/109850.jpg?v=637418780812430000','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Inca Cola',8, 500, 'Paquete de 6 und 300ml', 1 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/730911-450-450/20136609.jpg?v=637479663486600000','no');


INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Guarana',22.5, 500, 'Paquete de 15 und 450ml', 2 , 1 , 'https://realplaza.vtexassets.com/arquivos/ids/15205012-1600-auto?width=1600&height=auto&aspect=true','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Guarana',28, 500, 'Paquete de 4 und 3L', 2 , 1 , 'https://http2.mlstatic.com/D_NQ_NP_820318-MPE42465515647_072020-W.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Gaseosa Guarana',30, 500, 'Paquete de 6 und 2L ', 2 , 1 , 'https://http2.mlstatic.com/D_NQ_NP_704027-MPE42368418926_062020-O.webp','no');


INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Leche Gloria Entera',13.20, 200, 'Paquete de 3 und 1L', 3 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/553482-450-450/929548.jpg?v=637426553273330000','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Leche Gloria Light',13.20, 200, 'Paquete de 3 und 1L', 3 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/553469-1000-1000/919289.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Leche Gloria Niños',14.10, 200, 'Paquete de 3 und 1L', 3 , 1 , 'https://plazavea.vteximg.com.br/arquivos/ids/553480-450-450/20083790.jpg?v=637426553211700000','no');


INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Salchicha de Pollo San Fernando',3.90, 200, 'Paquete de 5 und 250g', 4 , 2 , 'https://plazavea.vteximg.com.br/arquivos/ids/429619-450-450/5617.jpg?v=637382877526500000','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Hamburguesa de Pollo San Fernando',9.50, 200, 'Paquete de 14 und 850g', 4 , 2 , 'https://plazavea.vteximg.com.br/arquivos/ids/1704342-1000-1000/79470.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Hamburguesa de Carne San Fernando',11.59, 200, 'Paquete de 14 und 952g', 4 , 2 , 'https://plazavea.vteximg.com.br/arquivos/ids/1693126-1000-1000/20120784.jpg','no');



INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Chorizo Parrillero Braedt',15.49, 200, 'Paquete de 6 und 500g', 5 , 2 , 'https://plazavea.vteximg.com.br/arquivos/ids/228739-1000-1000/chorizo-braedt-parrillero-precocido-paquete-500g.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Queso Edam Braedt',10.49, 200, 'Paquete en tajadas 200g', 5 , 2 , 'https://plazavea.vteximg.com.br/arquivos/ids/211227-1000-1000/queso-edam-braedt-bandeja-200g.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Jamon de Pavita Braedt',9.49, 200, 'Paquete en tajadas 200g', 5 , 2 , 'https://plazavea.vteximg.com.br/arquivos/ids/203389-1000-1000/jamon-de-pavita-braedt-balance-paquete-200g.jpg','no');


INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Fideos Spaghetti Molitalia',4, 200, 'Paquete de 1kg', 6 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/554053-1000-1000/20080120.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Fideos Canuto Molitalia',1.20, 200, 'Paquete de 250g', 6 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/412036-1000-1000/20120436.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Ravioles de Ricota Y Espinaca Molitalia',5.79, 200, 'Caja de 250g', 6 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/412038-1000-1000/20100706.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Arroz Costeño',19.90, 200, 'Bolsa de 5kg', 7 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/554165-1000-1000/641425.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Maiz Pop Corn Costeño',3.20, 200, 'Bolsa de 500g', 7 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/554155-1000-1000/998185.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Lentejas Costeño',5.10, 200, 'Bolsa de 500g', 7 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/554167-1000-1000/995413.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Aceite Vegetal Primor',9.10, 200, 'Botella de 1 L', 8 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/550602-1000-1000/161.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Aceite de Oliva Primor',36.90, 200, 'Botella de 1 L', 8 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/561756-1000-1000/20192226.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Filete de Atun Primor',5.20, 200, 'Lata de 170g', 8 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/560970-1000-1000/20125294.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Papa Amarilla Bells',9.90, 200, 'Malla de 2kg', 9 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/646600-1000-1000/20187582.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Huevos de Gallina Bells',6.60, 200, 'Bandeja de 15 und', 9 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/550593-1000-1000/2294.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Cocktail de Frutas Bells',7.10, 200, 'Lata de 820g', 9 , 3 , 'https://plazavea.vteximg.com.br/arquivos/ids/1355262-1000-1000/20193598.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Cocina a Gas LG',2899, 200, 'Cocina con 6 quemadores de hierro fundido', 10 , 4 , 'https://plazavea.vteximg.com.br/arquivos/ids/369940-1000-1000/20199488.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Refrigeradora LG',1349, 200, 'Refrigeradora con control de humedad', 10 , 4 , 'https://plazavea.vteximg.com.br/arquivos/ids/544521-1000-1000/20130327.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Lavadora LG',1299, 200, 'Lavadora con Smart Motion', 10 , 4 , 'https://plazavea.vteximg.com.br/arquivos/ids/545061-1000-1000/20140344.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Televisor 4K Smart TV Samsung',9899, 200, 'Televisor de 75 pulgadas', 11 , 4 , 'https://plazavea.vteximg.com.br/arquivos/ids/1729510-1000-1000/20196352.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Soundbar Samsung',499, 200, 'Soundbar con 3 parlantes', 11 , 4 , 'https://plazavea.vteximg.com.br/arquivos/ids/344089-1000-1000/20198065.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Microondas Samsung',389, 200, 'Microondas con 10 niveles de potencia', 11 , 4 , 'https://plazavea.vteximg.com.br/arquivos/ids/348242-1000-1000/20040435.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Impresora HP',1030, 200, 'Impresora con sistema de inyeccion de tinta', 12 , 5 , 'https://plazavea.vteximg.com.br/arquivos/ids/539268-1000-1000/20183583.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Tinta Negra HP',199, 200, 'Tinta de calidad superior', 12 , 5 , 'https://plazavea.vteximg.com.br/arquivos/ids/541123-1000-1000/20118925.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Notebook HP',3999, 200, 'Laptop equipada con procesador de 7ma generacion AMD', 12 , 5 , 'https://plazavea.vteximg.com.br/arquivos/ids/1883447-1000-1000/20234696.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Notebook Huawei',5999, 200, 'Laptop equipada con procesador de 7ma generacion Intel', 13 , 5 , 'https://plazavea.vteximg.com.br/arquivos/ids/1745915-1000-1000/20200209.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Balanza Corporal Huawei',99, 200, 'Balanza Smart Digital', 13 , 5 , 'https://plazavea.vteximg.com.br/arquivos/ids/344101-1000-1000/20198071.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Audifonos Inalambricos Huawei',599, 200, 'Audifonos con cancelacion de ruido', 13 , 5 , 'https://plazavea.vteximg.com.br/arquivos/ids/330285-1000-1000/20191386.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Papel Higienico Elite',33.70, 200, 'Papel con fragancia a manzanilla y lavanda', 14 , 6 , 'https://plazavea.vteximg.com.br/arquivos/ids/867455-1000-1000/20183469.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Servilletas de Papel Elite',3.60, 200, 'Servilletas dobladas en 4 80 und', 14 , 6 , 'https://plazavea.vteximg.com.br/arquivos/ids/412244-1000-1000/118720.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Papel Toalla Elite',6.80, 200, 'Papel toalla extragrueso 2 und', 14 , 6 , 'https://plazavea.vteximg.com.br/arquivos/ids/538617-1000-1000/20184380.jpg','no');


INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Lavavajillas Liquido Sapolio',9.40, 200, 'Lavavajillas con aroma a manzana 1250ml', 15 , 6 , 'https://plazavea.vteximg.com.br/arquivos/ids/537026-1000-1000/20106124.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Limpiatodo Sapolio',13.80, 200, 'Limpiador con aroma a lavanda 5L', 15 , 6 , 'https://plazavea.vteximg.com.br/arquivos/ids/537834-1000-1000/20144716.jpg','no');

INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)
VALUES('Insecticida Sapolio',13.50, 200, 'Insecticida de ácaros 360ml', 15 , 6 , 'https://plazavea.vteximg.com.br/arquivos/ids/236214-1000-1000/image-41b1cc1da783478f8caadda33349bb91.jpg','no');


INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Backus','backus@gmail.com','123', 'Direccion Prov 3', 12345678,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5GJMvhtgeGR8PBe1aXcc7ICenycZww5kkw&usqp=CAU');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Gloria','gloria@gmail.com','123', 'Direccion Prov 3', 12345678,'https://saludconlupa.com/media/images/gloria.width-465.png');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('San Fernando','sanfernando@gmail.com','123', 'Direccion Prov 3', 12345678,'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052013/horizontal_fondo_blanco.png?itok=h2XFS3bB');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Braedt','braedt@gmail.com','123', 'Direccion Prov 3', 12345678,'https://yt3.ggpht.com/ytc/AAUvwnhlPF0DZOBhMIgXS60h-rCft4begOsiC6QH9zjH=s900-c-k-c0x00ffffff-no-rj');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Molitalia','molitalia@gmail.com','123', 'Direccion Prov 3', 12345678,'https://molipromo.pe/images/logo.png');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Costeño','costeño@gmail.com','123', 'Direccion Prov 3', 12345678,'https://mir-s3-cdn-cf.behance.net/projects/404/0c816898489881.Y3JvcCwxOTE3LDE1MDAsMzcsMA.jpg');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Primor','primor@gmail.com','123', 'Direccion Prov 3', 12345678,'https://logosenvector.com/logo/img/aceite-primor-60.jpg');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Bells','bells@gmail.com','123', 'Direccion Prov 3', 12345678,'https://plazavea.vteximg.com.br/arquivos/bell-s-logo.png');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('LG','lg@gmail.com','123', 'Direccion Prov 2', 12345678,'https://jmservices.com.mx/wp-content/uploads/2016/04/lg-logo-300x180.png');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Samsung','samsung@gmail.com','123', 'Direccion Prov 3', 12345678,'https://www.digitaltoo.com/wp-content/uploads/sites/3/2013/05/images_Logo_Samsung.png');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('HP','hp@gmail.com','123', 'Direccion Prov 3', 12345678,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vCBOdCTJzvsECKn-r1ZxuP34RLMHN9Hnmw&usqp=CAU');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Huawei','huawei@gmail.com','123', 'Direccion Prov 3', 12345678,'https://logos-marcas.com/wp-content/uploads/2020/04/Huawei-Logotipo-2018%E2%80%93presente.jpg');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Elite','elite@gmail.com','123', 'Direccion Prov 3', 12345678,'https://limpiamas.cl/wp-content/uploads/2019/11/papel-higiencio-servilleta-papel-toalla-elite-profesional-300x300.png');

INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor)
VALUES('Sapolio','sapolio@gmail.com','123', 'Direccion Prov 3', 12345678,'https://scentmaticperu.com/wp-content/uploads/2017/06/sapolio-productos-de-limpieza.png');

