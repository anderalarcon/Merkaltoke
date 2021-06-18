
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


DROP SCHEMA public CASCADE;
CREATE SCHEMA public;



INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('ander','ander@gmail.com','123', 'Direccion 1', 12345678,'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('boris','boris@gmail.com','123', 'Direccion 2', 12345678,'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('cesar','cesar@gmail.com','123', 'Direccion 3', 12345678,'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('dante','dante@gmail.com','123', 'Direccion 4', 12345678,'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('edgar','edgar@gmail.com','123', 'Direccion 5', 12345678,'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');
INSERT INTO cliente( nombre_cliente, email_cliente, password_cliente, direccion_cliente, DNI, img_cliente)VALUES('roger','roger@gmail.com','123', 'Direccion 6', 12345678,'https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg');




INSERT INTO tbl_carrito(id_cliente) values(1);
INSERT INTO tbl_carrito(id_cliente) values(2);
INSERT INTO tbl_carrito(id_cliente) values(3);
INSERT INTO tbl_carrito(id_cliente) values(4);
INSERT INTO tbl_carrito(id_cliente) values(5);
INSERT INTO tbl_carrito(id_cliente) values(6);



INSERT INTO TBL_estado(id_estado,estado)VALUES(1,'Por confirmar');
INSERT INTO TBL_estado(id_estado,estado)VALUES(2,'Confirmado');
INSERT INTO TBL_estado(id_estado,estado)VALUES(3,'En camino');
INSERT INTO TBL_estado(id_estado,estado)VALUES(4,'Entregado');



INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)VALUES('Coca Cola','coca@gmail.com','123', 'Direccion Prov 1', 12345678,'https://image.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg','Activo');
INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)VALUES('LG','lg@gmail.com','123', 'Direccion Prov 2', 12345678,'https://image.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg','Activo');
INSERT INTO proveedor( nombre_proveedor, email_proveedor, password_proveedor, direccion_proveedor, RUC, img_proveedor,activo)VALUES('Backus','backus@gmail.com','123', 'Direccion Prov 3', 12345678,'https://image.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg','Activo');



INSERT INTO tbl_metodo_pago(metodo)VALUES('Tarjeta de Credito');
INSERT INTO tbl_metodo_pago(metodo)VALUES('Tarjeta de Debito');


INSERT INTO tbl_categoria( categoria, img_categoria)VALUES('Bebidas','https://integralatampost.s3.amazonaws.com/uploads/article/picture/16320/20190508_Estas-son-las-marcas-de-bebidas-alcoh%C3%B3licas-m%C3%A1s-valiosas-de-Latinoam%C3%A9rica.jpg' );
INSERT INTO tbl_categoria( categoria, img_categoria)VALUES('Electrodomesticos','https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/12/11-mitos-electrodomesticos-hora-dejes-creerte-2157733.jpg?itok=vbhgGesl' );
INSERT INTO tbl_categoria( categoria, img_categoria)VALUES('Tecnologia','https://www.latino-news.com/wp-content/uploads/2019/01/tecnologia.png' );


INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)VALUES('Gaseosa Coca Cola',12, 100, 'Paquete de 6 und 600 ml', 1 , 1 , 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40606157-lKgjlCTi-large.jpg','no');
INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)VALUES('Gaseosa Inca Cola',11, 500, 'Paquete de 6 und 600 ml', 1 , 1 , 'https://vivanda.vteximg.com.br/arquivos/ids/227924-1000-1000/20109810.jpg?v=637419714971300000','no');
INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)VALUES('Gaseosa Guarana',22.5, 500, 'Paquete de 15 und 450 ml', 3 , 1 , 'https://realplaza.vtexassets.com/arquivos/ids/15205012-1600-auto?width=1600&height=auto&aspect=true','no');
INSERT INTO tbl_producto(nombre, precio, stock, detalle, id_proveedor, id_categoria, img_producto,visible)VALUES('Refrigeradora LG',3000, 200, 'Ultimo Modelo', 2 , 2 , 'https://hiraoka.com.pe/media/catalog/product/cache/a357cb11a228eb6f7f15c0ee1ff203af/r/m/rm-138h_vista_1_1.jpg','no');








