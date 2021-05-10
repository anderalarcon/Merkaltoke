
CREATE DATABASE MERKALTOK_VUE;


CREATE TABLE cliente(
    id_cliente SERIAL PRIMARY KEY NOT NULL,
    nombre_cliente VARCHAR(50),
    email_cliente VARCHAR(59) UNIQUE,
    password_cliente VARCHAR(50)
);

CREATE TABLE proveedor(
    id_proveedor SERIAL PRIMARY KEY NOT NULL,
    nombre_proveedor VARCHAR(50),
    email_proveedor VARCHAR(59) UNIQUE,
    password_proveedor VARCHAR(50)
);








CREATE TABLE admin(
	id bigserial primary key NOT NULL,
	admin_nickname varchar(50) NOT NULL,
	password_admin varchar(50) NOT NULL
);




CREATE TABLE tbl_metodo_pago(
	id_metodo_pago bigserial primary key NOT NULL,
	metodo VARCHAR(20)
);
CREATE TABLE tbl_categoria(
	id_categoria bigserial primary key NOT NULL,
	categoria VARCHAR(20)
);
CREATE TABLE tbl_local(
	id_local bigserial primary key NOT NULL,
	direccion VARCHAR(50),
	referencia VARCHAR(50),
	zip VARCHAR(10)
);
CREATE TABLE tbl_cuenta_cliente(
	id_cuenta_cliente bigserial primary key NOT NULL,
	usuario_nickname VARCHAR(30),
	usuario_password VARCHAR(100)
);
CREATE TABLE tbl_cuenta_proveedor(
	id_cuenta_proveedor bigserial primary key NOT NULL,
	proveedor_nickname VARCHAR(30),
	proveedor_password VARCHAR(30)
);
CREATE TABLE tbl_proveedor(
	id_proveedor bigserial primary key NOT NULL,
	nombre_proveedor VARCHAR(50),
	ruc VARCHAR(40),
	razon_social VARCHAR(50),
	utilidades decimal,
	id_cuenta_cliente BIGINT REFERENCES tbl_cuenta_proveedor(id_cuenta_proveedor) NOT NULL,
	id_local BIGINT REFERENCES tbl_local(id_local) NOT NULL
);
CREATE TABLE tbl_producto(
	id_producto bigserial primary key NOT NULL,
	nombre VARCHAR(50),
	precio DECIMAL,
	stock int,
	detalle VARCHAR(50),
	/* id_proveedor BIGINT REFERENCES tbl_proveedor(id_proveedor) NOT NULL,
	id_categoria BIGINT REFERENCES tbl_categoria(id_categoria) NOT NULL */
);
CREATE TABLE tbl_cliente(
	id_cliente bigserial primary key NOT NULL,
	nombre_cliente VARCHAR(50),
	apellido_cliente VARCHAR(50),
	email_Cliente VARCHAR(100),
	direccion VARCHAR(100),
	id_cuenta_cliente BIGINT REFERENCES tbl_cuenta_cliente(id_cuenta_cliente) NOT NULL
);
CREATE TABLE tbl_carrito(
	id_carrito bigserial primary key NOT NULL,
	cantidad INT,
	suma DECIMAL(10, 4),
	id_cliente BIGINT REFERENCES tbl_cliente(id_cliente) NOT NULL,
	id_producto BIGINT REFERENCES tbl_producto(id_producto) NOT NULL
);
CREATE TABLE tbl_pedido(
	id_pedido bigserial primary key NOT NULL,
	fecha DATE,
	estado VARCHAR(20),
	total DECIMAL(10, 4),
	id_cliente BIGINT REFERENCES tbl_cliente(id_cliente) NOT NULL,
	id_metodo BIGINT REFERENCES tbl_metodo_pago(id_metodo_pago) NOT NULL
);
CREATE TABLE tbl_pedido_detalle(
	id_pedido_detalle bigserial primary key NOT NULL,
	cantidad INTEGER,
	precio DECIMAL(10, 4),
	id_pedido BIGINT REFERENCES tbl_pedido(id_pedido) NOT NULL,
	id_producto BIGINT REFERENCES tbl_producto(id_producto) NOT NULL
);
