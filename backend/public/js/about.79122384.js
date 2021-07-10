(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["about"],
  {
    "04fd": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBarAdmin"),
              r(
                "v-container",
                [
                  r(
                    "v-alert",
                    {
                      attrs: { type: t.alert.type, dismissible: "" },
                      model: {
                        value: t.alert.show,
                        callback: function (e) {
                          t.$set(t.alert, "show", e);
                        },
                        expression: "alert.show",
                      },
                    },
                    [t._v(" " + t._s(t.alert.message) + " ")]
                  ),
                ],
                1
              ),
              r(
                "v-container",
                { staticClass: "mt-5" },
                [
                  r(
                    "v-card",
                    {
                      staticClass: "pb-3",
                      attrs: { elevation: "15", shaped: "", loading: "" },
                    },
                    [
                      r(
                        "v-card-title",
                        [t._v(" Gestión de Clientes "), r("v-spacer")],
                        1
                      ),
                      r("v-data-table", {
                        attrs: { headers: t.headers, items: t.clientes },
                        scopedSlots: t._u([
                          {
                            key: "item",
                            fn: function (e) {
                              return [
                                r("tr", [
                                  r("td", [t._v(t._s(e.item.nombre_cliente))]),
                                  r("td", [t._v(t._s(e.item.email_cliente))]),
                                  r("td", [
                                    t._v(t._s(e.item.direccion_cliente)),
                                  ]),
                                  r("td", [t._v(t._s(e.item.dni))]),
                                  r(
                                    "td",
                                    {
                                      attrs: {
                                        id: "visible" + e.item.id_cliente,
                                      },
                                    },
                                    [t._v(" " + t._s(e.item.visible) + " ")]
                                  ),
                                  r(
                                    "td",
                                    [
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "orange",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.ClienteToUpdate(
                                                e.item.id_cliente
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-pencil ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "red",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProductoToDelete(
                                                e.item.id_cliente
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-delete ")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "msx-width": "600px" },
                  model: {
                    value: t.updating,
                    callback: function (e) {
                      t.updating = e;
                    },
                    expression: "updating",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r(
                        "v-form",
                        {
                          ref: "updateProveedor",
                          on: {
                            submit: function (e) {
                              return e.preventDefault(), t.updateProveedor();
                            },
                          },
                        },
                        [
                          r("v-card-title", [t._v("Editar Cliente")]),
                          r(
                            "v-card-text",
                            [
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Nombre",
                                  rules: [
                                    function (t) {
                                      return !!t || "Nombre es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.clientToUpdate.nombre_cliente,
                                  callback: function (e) {
                                    t.$set(
                                      t.clientToUpdate,
                                      "nombre_cliente",
                                      e
                                    );
                                  },
                                  expression: "clientToUpdate.nombre_cliente",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "prepend-icon": "mdi-pencil",
                                  label: "DNI",
                                  rules: [
                                    function (t) {
                                      return !!t || "DNI es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.clientToUpdate.dni,
                                  callback: function (e) {
                                    t.$set(t.clientToUpdate, "dni", e);
                                  },
                                  expression: "clientToUpdate.dni",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Correo",
                                  rules: [
                                    function (t) {
                                      return !!t || "Correo es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.clientToUpdate.email_cliente,
                                  callback: function (e) {
                                    t.$set(
                                      t.clientToUpdate,
                                      "email_cliente",
                                      e
                                    );
                                  },
                                  expression: "clientToUpdate.email_cliente",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Direccion",
                                  rules: [
                                    function (t) {
                                      return !!t || "Direccion es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.clientToUpdate.direccion_cliente,
                                  callback: function (e) {
                                    t.$set(
                                      t.clientToUpdate,
                                      "direccion_cliente",
                                      e
                                    );
                                  },
                                  expression:
                                    "clientToUpdate.direccion_cliente",
                                },
                              }),
                              r(
                                "v-btn",
                                {
                                  staticClass: "success ma-2",
                                  attrs: { block: "", type: "submit" },
                                },
                                [t._v("Actualizar datos")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "450" },
                  model: {
                    value: t.advertencia2,
                    callback: function (e) {
                      t.advertencia2 = e;
                    },
                    expression: "advertencia2",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r("v-card-title", { staticClass: "headline" }, [
                        t._v(" CUENTA PROVEEDOR "),
                      ]),
                      r("v-card-text", [
                        t._v(" ¿Desea ACTIVAR O DESACTIVAR CUENTA ? "),
                      ]),
                      r(
                        "v-card-actions",
                        [
                          r("v-spacer"),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", text: "" },
                              on: {
                                click: function (e) {
                                  return t.Activar(t.prueba);
                                },
                              },
                            },
                            [t._v(" ACTIVAR ")]
                          ),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "red", text: "" },
                              on: {
                                click: function (e) {
                                  return t.Cancel(t.prueba);
                                },
                              },
                            },
                            [t._v(" DESACTIVAR ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("d3b7"), r("25f0"), r("99af"), r("96cf"), r("c3e6")),
        s = r("fd2d"),
        c = r("84be"),
        l = r("5402"),
        d = r("ed7b"),
        u = {
          name: "AdmiClientes",
          components: { NavBar: i["a"], Footer: s["a"], NavBarAdmin: d["a"] },
          data: function () {
            return {
              clientes: [],
              datos: {},
              search: "",
              prueba: "",
              productos: [],
              clientToUpdate: [],
              productoToUpdate: [],
              advertencia2: !1,
              updating: !1,
              advertencia: !1,
              dialogDelete: !1,
              productoToDelete: {},
              alert: { show: !1 },
              headers: [
                {
                  text: "Nombre",
                  value: "nombre",
                  sortable: !1,
                  align: "start",
                },
                { text: "Correo", value: "Correo", sortable: !0 },
                { text: "Direccion", value: "Direccion" },
                { text: "DNI", value: "activo", sortable: !1 },
              ],
              add: !1,
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 21);
                          break;
                        case 5:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (e = this.user.id),
                            (t.next = 9),
                            l["a"].get("/get")
                          );
                        case 9:
                          return (
                            (r = t.sent),
                            (this.clientes = r.data.data.clientes),
                            (t.next = 13),
                            c["a"].get("/getProductos-Proveedor2/".concat(e))
                          );
                        case 13:
                          return (
                            (n = t.sent),
                            (this.productos = n.data.data.productos),
                            console.log(this.productos),
                            (t.next = 18),
                            Categorias.get("/get")
                          );
                        case 18:
                          (a = t.sent),
                            (this.categorias = a.data.data.categorias),
                            "administrador" == this.user.role ||
                              this.$router.push("/");
                        case 21:
                          t.next = 26;
                          break;
                        case 23:
                          (t.prev = 23),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 23]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            ClienteToUpdate: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), l["a"].get("/get/".concat(t));
                        case 2:
                          (n = r.sent),
                            (e.updating = !0),
                            (e.clientToUpdate = n.data.data.clientes),
                            console.log(e.clientToUpdate);
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            updateProveedor: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log(t.clientToUpdate),
                            (e.next = 3),
                            c["a"].put(
                              "/perfilUpdate/".concat(
                                t.clientToUpdate.id_proveedor
                              ),
                              t.clientToUpdate
                            )
                          );
                        case 3:
                          setTimeout(function () {
                            (t.updating = !1), window.location.reload();
                          }, 1e3);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            Cancel: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = t.toString()),
                            (a = "Inactivo"),
                            (o = "no"),
                            (r.next = 5),
                            Productos.put(
                              "/updatecancel/".concat(n, "/").concat(o)
                            )
                          );
                        case 5:
                          return (
                            r.sent,
                            (r.next = 8),
                            c["a"].put(
                              "/updatecancel/".concat(n, "/").concat(a)
                            )
                          );
                        case 8:
                          r.sent,
                            console.log("camcel"),
                            (e.advertencia2 = !1),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3);
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            Activar: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = "Activo"),
                            (a = "si"),
                            (o = t.toString()),
                            (r.next = 5),
                            Productos.put(
                              "/updatecancel/".concat(o, "/").concat(a)
                            )
                          );
                        case 5:
                          return (
                            r.sent,
                            (r.next = 8),
                            c["a"].put(
                              "/updatecancel/".concat(o, "/").concat(n)
                            )
                          );
                        case 8:
                          r.sent,
                            (e.advertencia2 = !1),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3);
                        case 11:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            readCuentaToDelete: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          (e.advertencia2 = !0), (e.prueba = t);
                        case 2:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
          },
        },
        h = u,
        p = r("2877"),
        f = Object(p["a"])(h, n, a, !1, null, null, null);
      e["default"] = f.exports;
    },
    "0be9": function (t, e, r) {
      t.exports = r.p + "img/Di4RX7pRYkYEdmeLZt8jQfeiie7qOw.19e3c72f.jpeg";
    },
    1148: function (t, e, r) {
      "use strict";
      var n = r("a691"),
        a = r("1d80");
      t.exports = function (t) {
        var e = String(a(this)),
          r = "",
          o = n(t);
        if (o < 0 || o == 1 / 0)
          throw RangeError("Wrong number of repetitions");
        for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (r += e);
        return r;
      };
    },
    "129f": function (t, e) {
      t.exports =
        Object.is ||
        function (t, e) {
          return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e;
        };
    },
    1403: function (t, e, r) {
      t.exports = r.p + "img/MIQt0Krz8R7ZsS7t0obsXY1O6n08HT.407780ec.png";
    },
    "14c3": function (t, e, r) {
      var n = r("c6b6"),
        a = r("9263");
      t.exports = function (t, e) {
        var r = t.exec;
        if ("function" === typeof r) {
          var o = r.call(t, e);
          if ("object" !== typeof o)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return o;
        }
        if ("RegExp" !== n(t))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return a.call(t, e);
      };
    },
    "1c71": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                { staticClass: "lighten-5" },
                [
                  r("h1", { staticClass: "mb-5" }, [
                    t._v("Carrito de compras"),
                  ]),
                  r(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      r(
                        "v-col",
                        { attrs: { cols: "12", sm: "6", md: "8" } },
                        [
                          r(
                            "v-card",
                            [
                              r("v-simple-table", {
                                scopedSlots: t._u([
                                  {
                                    key: "default",
                                    fn: function () {
                                      return [
                                        r("thead", [
                                          r("tr", [
                                            r(
                                              "th",
                                              { staticClass: "text-left" },
                                              [t._v("Producto")]
                                            ),
                                            r(
                                              "th",
                                              { staticClass: "text-left" },
                                              [t._v("Precio")]
                                            ),
                                            r(
                                              "th",
                                              { staticClass: "text-left" },
                                              [t._v("Cantidad")]
                                            ),
                                            r(
                                              "th",
                                              { staticClass: "text-left" },
                                              [t._v("Total")]
                                            ),
                                            r("th", {
                                              staticClass: "text-left",
                                            }),
                                          ]),
                                        ]),
                                        r(
                                          "tbody",
                                          t._l(t.carrito, function (e) {
                                            return r(
                                              "tr",
                                              { key: e.producto_id },
                                              [
                                                r("td", [t._v(t._s(e.nombre))]),
                                                r("td", [
                                                  r(
                                                    "span",
                                                    {
                                                      attrs: {
                                                        id:
                                                          "precio" +
                                                          e.producto_id,
                                                      },
                                                    },
                                                    [t._v(t._s(e.precio))]
                                                  ),
                                                ]),
                                                r(
                                                  "td",
                                                  [
                                                    r(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-2",
                                                        attrs: {
                                                          fab: "",
                                                          dark: "",
                                                          small: "",
                                                          color: "primary",
                                                        },
                                                      },
                                                      [
                                                        r(
                                                          "v-icon",
                                                          {
                                                            attrs: { dark: "" },
                                                            on: {
                                                              click: function (
                                                                r
                                                              ) {
                                                                return t.disminuir_cantidad(
                                                                  e.producto_id,
                                                                  e.carrito_id
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v(" mdi-minus ")]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                    r(
                                                      "span",
                                                      {
                                                        attrs: {
                                                          id:
                                                            "cantidad" +
                                                            e.producto_id,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(e.cantidad_id)
                                                        ),
                                                      ]
                                                    ),
                                                    r(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-2",
                                                        attrs: {
                                                          fab: "",
                                                          dark: "",
                                                          small: "",
                                                          color: "primary",
                                                        },
                                                      },
                                                      [
                                                        r(
                                                          "v-icon",
                                                          {
                                                            attrs: { dark: "" },
                                                            on: {
                                                              click: function (
                                                                r
                                                              ) {
                                                                return t.aumentar_cantidad(
                                                                  e.producto_id
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [t._v(" mdi-plus ")]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                r("td", [
                                                  r(
                                                    "span",
                                                    {
                                                      attrs: {
                                                        id:
                                                          "total" +
                                                          e.producto_id,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          e.precio *
                                                            e.cantidad_id
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]),
                                                r(
                                                  "td",
                                                  [
                                                    r(
                                                      "v-btn",
                                                      {
                                                        staticClass: "mx-2",
                                                        attrs: {
                                                          fab: "",
                                                          dark: "",
                                                          small: "",
                                                          color: "pink",
                                                        },
                                                      },
                                                      [
                                                        r(
                                                          "v-icon",
                                                          {
                                                            attrs: {
                                                              small: "",
                                                            },
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                t.dialog = !0;
                                                              },
                                                            },
                                                          },
                                                          [t._v(" mdi-delete ")]
                                                        ),
                                                        r(
                                                          "v-dialog",
                                                          {
                                                            attrs: {
                                                              "max-width":
                                                                "290",
                                                            },
                                                            model: {
                                                              value: t.dialog,
                                                              callback:
                                                                function (e) {
                                                                  t.dialog = e;
                                                                },
                                                              expression:
                                                                "dialog",
                                                            },
                                                          },
                                                          [
                                                            r(
                                                              "v-card",
                                                              [
                                                                r(
                                                                  "v-card-title",
                                                                  {
                                                                    staticClass:
                                                                      "headline",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      " Eliminar el producto "
                                                                    ),
                                                                  ]
                                                                ),
                                                                r(
                                                                  "v-card-text",
                                                                  [
                                                                    t._v(
                                                                      " ¿Desea eliminar el producto "
                                                                    ),
                                                                    r("b", [
                                                                      t._v(
                                                                        t._s(
                                                                          e.nombre
                                                                        )
                                                                      ),
                                                                    ]),
                                                                    t._v(
                                                                      " del carrito? "
                                                                    ),
                                                                  ]
                                                                ),
                                                                r(
                                                                  "v-card-actions",
                                                                  [
                                                                    r(
                                                                      "v-spacer"
                                                                    ),
                                                                    r(
                                                                      "v-btn",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "green darken-1",
                                                                          text: "",
                                                                        },
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              t.dialog =
                                                                                !1;
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          " NO "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    r(
                                                                      "v-btn",
                                                                      {
                                                                        attrs: {
                                                                          color:
                                                                            "green darken-1",
                                                                          text: "",
                                                                        },
                                                                        on: {
                                                                          click:
                                                                            function (
                                                                              r
                                                                            ) {
                                                                              t.deleteCarritoItem(
                                                                                e.carrito_id,
                                                                                e.producto_id
                                                                              ),
                                                                                (t.dialog =
                                                                                  !1);
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          " SI "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  1
                                                                ),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            );
                                          }),
                                          0
                                        ),
                                      ];
                                    },
                                    proxy: !0,
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      r("v-divider"),
                      r(
                        "v-col",
                        { attrs: { cols: "6", md: "4" } },
                        [
                          r(
                            "v-card",
                            {
                              staticClass: "pa-2",
                              attrs: { outlined: "", tile: "" },
                            },
                            [
                              r(
                                "div",
                                [
                                  r(
                                    "v-row",
                                    [
                                      r(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "8",
                                            sm: "6",
                                          },
                                        },
                                        [
                                          r(
                                            "h1",
                                            { staticClass: "mt-5 ml-5" },
                                            [t._v("Total")]
                                          ),
                                        ]
                                      ),
                                      r(
                                        "v-col",
                                        { attrs: { cols: "6", md: "4" } },
                                        [
                                          r("v-text-field", {
                                            attrs: {
                                              id: "TOTAL",
                                              disabled: "",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              r(
                                "div",
                                [
                                  r(
                                    "v-btn",
                                    {
                                      staticClass: "mt-5",
                                      attrs: { color: "warning", dark: "" },
                                      on: {
                                        click: function (e) {
                                          0 != t.carrito.length
                                            ? (t.dialog2 = !0)
                                            : (t.dialog2 = !1);
                                        },
                                      },
                                    },
                                    [
                                      t._v(" Realizar compra "),
                                      r(
                                        "v-dialog",
                                        {
                                          attrs: { "max-width": "600px" },
                                          model: {
                                            value: t.dialog2,
                                            callback: function (e) {
                                              t.dialog2 = e;
                                            },
                                            expression: "dialog2",
                                          },
                                        },
                                        [
                                          r(
                                            "v-card",
                                            [
                                              r(
                                                "v-form",
                                                {
                                                  ref: "insertar_tblpedido",
                                                  on: {
                                                    submit: function (e) {
                                                      return (
                                                        e.preventDefault(),
                                                        t.insertar_tblpedido()
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  r(
                                                    "v-container",
                                                    [
                                                      r("v-card-title", [
                                                        t._v(
                                                          "Informacion de Pago"
                                                        ),
                                                      ]),
                                                      r(
                                                        "v-card-text",
                                                        [
                                                          r(
                                                            "v-row",
                                                            [
                                                              r("v-select", {
                                                                staticClass:
                                                                  "col-12",
                                                                attrs: {
                                                                  id: "te",
                                                                  items:
                                                                    t.items,
                                                                  "item-text":
                                                                    "metodo",
                                                                  "item-value":
                                                                    "id_metodo_pago",
                                                                  label:
                                                                    "Seleccione el Método de pago*",
                                                                  required: "",
                                                                  rules: [
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        !!t ||
                                                                        "Método requerido"
                                                                      );
                                                                    },
                                                                  ],
                                                                },
                                                                model: {
                                                                  value:
                                                                    t
                                                                      .metodo_pago
                                                                      .id,
                                                                  callback:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      t.$set(
                                                                        t.metodo_pago,
                                                                        "id",
                                                                        e
                                                                      );
                                                                    },
                                                                  expression:
                                                                    "metodo_pago.id",
                                                                },
                                                              }),
                                                              r(
                                                                "v-text-field",
                                                                {
                                                                  staticClass:
                                                                    "col-12",
                                                                  attrs: {
                                                                    label:
                                                                      "Numero de tarjeta",
                                                                    rules: [
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          !!t ||
                                                                          "Numero de tarjeta es requerido"
                                                                        );
                                                                      },
                                                                    ],
                                                                    required:
                                                                      "",
                                                                  },
                                                                }
                                                              ),
                                                              r(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "col-12",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "Fecha de caducidad"
                                                                  ),
                                                                ]
                                                              ),
                                                              r("v-select", {
                                                                staticClass:
                                                                  "col-4",
                                                                attrs: {
                                                                  label: "Mes",
                                                                  items:
                                                                    t.meses,
                                                                  rules: [
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        !!t ||
                                                                        "Mes es requerido"
                                                                      );
                                                                    },
                                                                  ],
                                                                  required: "",
                                                                },
                                                              }),
                                                              r("v-select", {
                                                                staticClass:
                                                                  "col-4",
                                                                attrs: {
                                                                  label: "Año",
                                                                  items: t.año,
                                                                  rules: [
                                                                    function (
                                                                      t
                                                                    ) {
                                                                      return (
                                                                        !!t ||
                                                                        "Año es requerido"
                                                                      );
                                                                    },
                                                                  ],
                                                                  required: "",
                                                                },
                                                              }),
                                                              r(
                                                                "v-text-field",
                                                                {
                                                                  staticClass:
                                                                    "col-4",
                                                                  attrs: {
                                                                    type: "number",
                                                                    label:
                                                                      "Codigo de Seguridad",
                                                                    counter: 3,
                                                                    rules:
                                                                      t.codigorules,
                                                                    required:
                                                                      "",
                                                                  },
                                                                }
                                                              ),
                                                              r(
                                                                "v-text-field",
                                                                {
                                                                  staticClass:
                                                                    "col-6",
                                                                  attrs: {
                                                                    label:
                                                                      "Nombre",
                                                                    rules: [
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          !!t ||
                                                                          "Nombre es requerido"
                                                                        );
                                                                      },
                                                                    ],
                                                                    required:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      this.datos
                                                                        .nombre_cliente,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          this
                                                                            .datos,
                                                                          "nombre_cliente",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "this.datos.nombre_cliente",
                                                                  },
                                                                }
                                                              ),
                                                              r(
                                                                "v-text-field",
                                                                {
                                                                  staticClass:
                                                                    "col-6",
                                                                  attrs: {
                                                                    label:
                                                                      "Correo Electronico",
                                                                    rules: [
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          !!t ||
                                                                          "Correo es requerido"
                                                                        );
                                                                      },
                                                                    ],
                                                                    required:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      this.datos
                                                                        .email_cliente,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          this
                                                                            .datos,
                                                                          "email_cliente",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "this.datos.email_cliente",
                                                                  },
                                                                }
                                                              ),
                                                              r(
                                                                "v-text-field",
                                                                {
                                                                  staticClass:
                                                                    "col-6",
                                                                  attrs: {
                                                                    label:
                                                                      "Direccion ",
                                                                    rules: [
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        return (
                                                                          !!t ||
                                                                          "Direccion es requerido"
                                                                        );
                                                                      },
                                                                    ],
                                                                    required:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      this.datos
                                                                        .direccion_cliente,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          this
                                                                            .datos,
                                                                          "direccion_cliente",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "this.datos.direccion_cliente",
                                                                  },
                                                                }
                                                              ),
                                                              r(
                                                                "v-text-field",
                                                                {
                                                                  staticClass:
                                                                    "col-6",
                                                                  attrs: {
                                                                    type: "number",
                                                                    label:
                                                                      "Telefono",
                                                                    counter: 9,
                                                                    rules:
                                                                      t.telefonorules,
                                                                    required:
                                                                      "",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          r(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "center",
                                                              attrs: {
                                                                color:
                                                                  "warning",
                                                                dark: "",
                                                                type: "submit",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                " Realizar compra "
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r("Footer"),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("b680"), r("99af"), r("c740"), r("a434"), r("96cf"), r("d000")),
        s = r("77fe"),
        c = r("8e18"),
        l = r("f56b"),
        d = r("bc3a"),
        u = r.n(d),
        h = u.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/metodos" }),
        p = r("5402"),
        f = r("fd2d"),
        g = {
          name: "Carrito",
          components: { NavBar: i["a"], Footer: f["a"] },
          data: function () {
            return {
              codigorules: [
                function (t) {
                  return !!t || "Codigo es requerido";
                },
                function (t) {
                  return (
                    (t && t.length <= 3) ||
                    "Codigo debe tener menos de 4 digitos"
                  );
                },
              ],
              telefonorules: [
                function (t) {
                  return !!t || "Telefono es requerido";
                },
                function (t) {
                  return (
                    (t && t.length <= 9) ||
                    "Telefono debe tener menos de 10 digitos"
                  );
                },
              ],
              items: [],
              meses: [
                "01",
                "02",
                "03",
                "04",
                "05",
                "06",
                "07",
                "08",
                "09",
                "10",
                "11",
                "12",
              ],
              año: [
                "2021",
                "2022",
                "2023",
                "2024",
                "2025",
                "2026",
                "2026",
                "2027",
                "2028",
                "2029",
                "2030",
                "2031",
              ],
              carrito: [],
              user: { role: "", nombre: "", email: "", id: "" },
              pedido: {},
              dialog: !1,
              dialog2: !1,
              metodo_pago: {},
              datos: {},
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n, a, o, i;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            null == this.user && this.$router.push("/"),
                            (t.prev = 2),
                            (e = this.user.id),
                            (t.next = 6),
                            s["a"].get("/getCarritoId/".concat(e))
                          );
                        case 6:
                          return (
                            (r = t.sent),
                            (n = r.data.data.cliente.id_carrito),
                            (t.next = 10),
                            s["a"].get("/getCarrito_tabla/".concat(n))
                          );
                        case 10:
                          return (
                            (a = t.sent),
                            (this.carrito = a.data.data.cliente),
                            (t.next = 14),
                            h.get("/get")
                          );
                        case 14:
                          return (
                            (o = t.sent),
                            (this.items = o.data.data.metodos),
                            (t.next = 18),
                            p["a"].get("/get/".concat(this.user.id))
                          );
                        case 18:
                          (i = t.sent),
                            (this.datos = i.data.data.cliente),
                            this.carrito.length > 0 && this.getTotalofCarShop(),
                            (t.next = 26);
                          break;
                        case 23:
                          (t.prev = 23),
                            (t.t0 = t["catch"](2)),
                            console.log(t.t0);
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 23]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            obtenertotal: function () {
              for (var t = this.carrito, e = 0, r = 0; r < t.length; r++)
                e += parseFloat(
                  document.getElementById("total" + t[r].producto_id).innerHTML
                );
              document.getElementById("TOTAL").value = e;
            },
            aumentar_cantidad: function (t) {
              document.getElementById("cantidad" + t).innerHTML =
                parseInt(document.getElementById("cantidad" + t).innerHTML) + 1;
              var e = document.getElementById("total" + t);
              (e.innerHTML = (
                parseFloat(document.getElementById("precio" + t).innerHTML) *
                parseInt(document.getElementById("cantidad" + t).innerHTML)
              ).toFixed(1)),
                this.obtenertotal();
            },
            disminuir_cantidad: function (t, e) {
              if (1 == document.getElementById("cantidad" + t).innerHTML)
                this.dialog = !0;
              else {
                document.getElementById("cantidad" + t).innerHTML =
                  parseInt(document.getElementById("cantidad" + t).innerHTML) -
                  1;
                var r = document.getElementById("total" + t);
                (r.innerHTML = (
                  parseFloat(document.getElementById("precio" + t).innerHTML) *
                  parseInt(document.getElementById("cantidad" + t).innerHTML)
                ).toFixed(1)),
                  this.obtenertotal();
              }
            },
            insertar_tblpedido: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((r = t.$refs.insertar_tblpedido.validate()), !r)
                          ) {
                            e.next = 20;
                            break;
                          }
                          if (0 != t.carrito.length) {
                            e.next = 6;
                            break;
                          }
                          console.log("Carro vacio"), (e.next = 20);
                          break;
                        case 6:
                          if (void 0 == t.metodo_pago.id) {
                            e.next = 19;
                            break;
                          }
                          return (
                            (t.pedido.id_cliente = t.user.id),
                            (t.pedido.total =
                              document.getElementById("TOTAL").value),
                            (t.pedido.id_metodo = t.metodo_pago.id),
                            (n = t.carrito),
                            t.update(n),
                            (e.next = 14),
                            l["a"].post("/create/", t.pedido)
                          );
                        case 14:
                          e.sent,
                            (t.dialog2 = !1),
                            setTimeout(function () {
                              t.disminuirStock(n),
                                t.insertIntoTbl_pedido_detalle();
                            }, 2e3),
                            (e.next = 20);
                          break;
                        case 19:
                          console.log("falta escoger metodo de pago");
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            update: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          n = 0;
                        case 1:
                          if (!(n < t.length)) {
                            r.next = 7;
                            break;
                          }
                          return (
                            (r.next = 4),
                            s["a"].put(
                              "/update/"
                                .concat(e.carrito[n].producto_id, "/")
                                .concat(
                                  document.getElementById(
                                    "cantidad" + t[n].producto_id
                                  ).innerHTML
                                )
                            )
                          );
                        case 4:
                          n++, (r.next = 1);
                          break;
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            deleteCarritoItem: function (t, e) {
              var r = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function n() {
                  var a;
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            console.log(
                              "el id del carrito es: " + t + " y producto " + e
                            ),
                            (n.next = 3),
                            s["a"].delete(
                              "/deleteItemCarrito/".concat(t, "/").concat(e)
                            )
                          );
                        case 3:
                          n.sent,
                            (a = r.carrito.findIndex(function (t) {
                              return t.id_producto == e;
                            })),
                            r.carrito.splice(a, 1);
                        case 6:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            deleteAfterBuy: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, a;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.user.id),
                            (e.next = 3),
                            s["a"].get("/getCarritoId/".concat(r))
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (a = n.data.data.cliente.id_carrito),
                            (e.next = 7),
                            s["a"].delete("/deleteMid/".concat(a))
                          );
                        case 7:
                          e.sent,
                            (t.carrito = []),
                            (document.getElementById("TOTAL").value = "");
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            getTotalofCarShop: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, a, o;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.user.id),
                            (e.next = 3),
                            s["a"].get("/getCarritoId/".concat(r))
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (a = n.data.data.cliente.id_carrito),
                            (e.next = 7),
                            s["a"].get("/getTotal/".concat(a))
                          );
                        case 7:
                          (o = e.sent),
                            (document.getElementById("TOTAL").value =
                              o.data.data.carrito.sum);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            insertIntoTbl_pedido_detalle: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, a, o, i, c, d, u;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.user.id),
                            (e.next = 3),
                            s["a"].get("/getCarritoId/".concat(r))
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (a = n.data.data.cliente.id_carrito),
                            (e.next = 7),
                            s["a"].get("/getCarrito_tabla/".concat(a))
                          );
                        case 7:
                          return (
                            (o = e.sent),
                            (i = o.data.data.cliente),
                            (e.next = 11),
                            l["a"].get("/getLastIdPedido_detalle")
                          );
                        case 11:
                          (c = e.sent), (d = c.data.data.last[0].max), (u = 0);
                        case 14:
                          if (!(u < i.length)) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (e.next = 17),
                            l["a"].post(
                              "/insertPedido_detalle/".concat(d),
                              i[u]
                            )
                          );
                        case 17:
                          u++, (e.next = 14);
                          break;
                        case 20:
                          t.deleteAfterBuy();
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            disminuirStock: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          n = 0;
                        case 1:
                          if (!(n < t.length)) {
                            r.next = 7;
                            break;
                          }
                          return (
                            (r.next = 4),
                            c["a"].put(
                              "/updateStock/"
                                .concat(e.carrito[n].producto_id, "/")
                                .concat(
                                  document.getElementById(
                                    "cantidad" + t[n].producto_id
                                  ).innerHTML
                                )
                            )
                          );
                        case 4:
                          n++, (r.next = 1);
                          break;
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
          },
        },
        m = g,
        v = r("2877"),
        b = Object(v["a"])(m, n, a, !1, null, null, null);
      e["default"] = b.exports;
    },
    "1da1": function (t, e, r) {
      "use strict";
      r.d(e, "a", function () {
        return a;
      });
      r("d3b7");
      function n(t, e, r, n, a, o, i) {
        try {
          var s = t[o](i),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, a);
      }
      function a(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (a, o) {
            var i = t.apply(e, r);
            function s(t) {
              n(i, a, o, s, c, "next", t);
            }
            function c(t) {
              n(i, a, o, s, c, "throw", t);
            }
            s(void 0);
          });
        };
      }
    },
    "1dde": function (t, e, r) {
      var n = r("d039"),
        a = r("b622"),
        o = r("2d00"),
        i = a("species");
      t.exports = function (t) {
        return (
          o >= 51 ||
          !n(function () {
            var e = [],
              r = (e.constructor = {});
            return (
              (r[i] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    "20e2": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", [r("v-container", [t._v(" hola ")])], 1);
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("ed7b")),
        s = r("fd2d"),
        c = r("bc3a"),
        l = r.n(c),
        d = l.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/administrador" }),
        u = {
          name: "Profile",
          components: { NavBar: i["a"], Footer: s["a"] },
          data: function () {
            return { datos: {} };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 14);
                          break;
                        case 5:
                          if (
                            ((this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            "administrador" != this.user.role)
                          ) {
                            t.next = 13;
                            break;
                          }
                          return (
                            (t.next = 9), d.get("/get/".concat(this.user.id))
                          );
                        case 9:
                          (e = t.sent),
                            (this.datos = e.data.data.administrador),
                            (t.next = 14);
                          break;
                        case 13:
                          this.$router.push("/ProfileAdmin");
                        case 14:
                          t.next = 19;
                          break;
                        case 16:
                          (t.prev = 16),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 19:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 16]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        h = u,
        p = r("2877"),
        f = Object(p["a"])(h, n, a, !1, null, null, null);
      e["default"] = f.exports;
    },
    2532: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("5a34"),
        o = r("1d80"),
        i = r("ab13");
      n(
        { target: "String", proto: !0, forced: !i("includes") },
        {
          includes: function (t) {
            return !!~String(o(this)).indexOf(
              a(t),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    "25f0": function (t, e, r) {
      "use strict";
      var n = r("6eeb"),
        a = r("825a"),
        o = r("d039"),
        i = r("ad6d"),
        s = "toString",
        c = RegExp.prototype,
        l = c[s],
        d = o(function () {
          return "/a/b" != l.call({ source: "a", flags: "b" });
        }),
        u = l.name != s;
      (d || u) &&
        n(
          RegExp.prototype,
          s,
          function () {
            var t = a(this),
              e = String(t.source),
              r = t.flags,
              n = String(
                void 0 === r && t instanceof RegExp && !("flags" in c)
                  ? i.call(t)
                  : r
              );
            return "/" + e + "/" + n;
          },
          { unsafe: !0 }
        );
    },
    2939: function (t, e, r) {
      var n = {
        "./Di4RX7pRYkYEdmeLZt8jQfeiie7qOw.jpeg": "0be9",
        "./GjvLInNviSN66fGpelkRzCmOwfX81I.png": "962d",
        "./MIQt0Krz8R7ZsS7t0obsXY1O6n08HT.png": "1403",
        "./PDWCfGZAN0ggI0oSH7Jk3o5zXBwQpS.png": "cbb2",
        "./Qutv9uyMc4jfuXFG7R5atbl3tCLv8c.png": "99e5",
        "./VlKfmP7RhHJWYOsy5h98p5CZihp6Lw.png": "faec",
        "./j0DhRtEz59hSRGuduIo45YTsBQ9IRH.jpeg": "ed29",
        "./jj4H6MtLMCW3LGD0VwpMVITishc4du.jpeg": "9afd",
        "./usuario.jpg": "8f7d",
        "./wMvplnJFapzkoQpSP9dzQUKaYjGhPw.jpeg": "9fdb",
      };
      function a(t) {
        var e = o(t);
        return r(e);
      }
      function o(t) {
        if (!r.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      (a.keys = function () {
        return Object.keys(n);
      }),
        (a.resolve = o),
        (t.exports = a),
        (a.id = "2939");
    },
    "3ffa": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    t._l(t.productos, function (e) {
                      return r(
                        "v-card",
                        {
                          key: e.id_producto,
                          staticClass: "ma-3",
                          attrs: { "max-width": "344" },
                        },
                        [
                          r("v-img", {
                            attrs: { height: "250", src: e.img_producto },
                          }),
                          r("v-card-title", [
                            t._v("Producto : " + t._s(e.nombre) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Precio : " + t._s(e.precio) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Stock : " + t._s(e.stock) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Detalle : " + t._s(e.detalle) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Visbible? : " + t._s(e.visible) + " "),
                          ]),
                          r(
                            "v-card-actions",
                            [
                              r(
                                "v-btn",
                                {
                                  attrs: { color: "blue", small: "", dark: "" },
                                  on: {
                                    click: function (r) {
                                      return t.addToCarrito(e.id_producto);
                                    },
                                  },
                                },
                                [t._v("Seleccionar")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
              r("Footer"),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("99af"), r("c740"), r("a434"), r("84be")),
        s = r("77fe"),
        c = r("d000"),
        l = r("fd2d"),
        d = {
          name: "Provductos-Proveedor",
          components: { NavBar: c["a"], Footer: l["a"] },
          data: function () {
            return {
              productos: [],
              user: { role: "", nombre: "", email: "", id: "" },
            };
          },
          methods: {
            addToCarrito: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            s["a"].get("/getCarritoId/".concat(e.user.id))
                          );
                        case 2:
                          return (
                            (n = r.sent),
                            (a = n.data.data.cliente.id_carrito),
                            (r.next = 6),
                            s["a"].post("/insertMid/".concat(a, "/").concat(t))
                          );
                        case 6:
                          r.sent,
                            (o = e.productos.findIndex(function (e) {
                              return e.id_producto == t;
                            })),
                            e.productos.splice(o, 1);
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (t.prev = 1),
                            (e = this.$route.params.id),
                            (t.next = 5),
                            i["a"].get("/getProductos-Proveedor/".concat(e))
                          );
                        case 5:
                          (r = t.sent),
                            console.log(e),
                            (this.productos = r.data.data.productos),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t["catch"](1)),
                            console.log(t.t0);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 10]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    "408a": function (t, e, r) {
      var n = r("c6b6");
      t.exports = function (t) {
        if ("number" != typeof t && "Number" != n(t))
          throw TypeError("Incorrect invocation");
        return +t;
      };
    },
    "44e7": function (t, e, r) {
      var n = r("861d"),
        a = r("c6b6"),
        o = r("b622"),
        i = o("match");
      t.exports = function (t) {
        var e;
        return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == a(t));
      };
    },
    "45d4": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r("h1", [t._v("Indicadores")]),
                  r(
                    "v-row",
                    [
                      r(
                        "v-col",
                        [
                          r("h2", [t._v("Ventas por mes")]),
                          r(
                            "v-card",
                            [
                              r(
                                "v-simple-table",
                                [
                                  [
                                    r("thead", [
                                      r("tr", [
                                        r("th", [t._v("Mes")]),
                                        r("th", [t._v("Monto")]),
                                      ]),
                                    ]),
                                    r(
                                      "tbody",
                                      t._l(t.ventas, function (e) {
                                        return r("tr", { key: e.mes }, [
                                          r("td", [t._v(t._s(e.mes))]),
                                          r("td", [
                                            t._v(t._s(e.totalmes) + " S/."),
                                          ]),
                                        ]);
                                      }),
                                      0
                                    ),
                                  ],
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      r(
                        "v-col",
                        [
                          r("h2", [t._v("Compras de clientes potenciales")]),
                          r(
                            "v-card",
                            [
                              r(
                                "v-simple-table",
                                [
                                  [
                                    r("thead", [
                                      r("tr", [
                                        r("th", [t._v("Cliente")]),
                                        r("th", [t._v("Monto")]),
                                      ]),
                                    ]),
                                    r(
                                      "tbody",
                                      t._l(t.clientesVentas, function (e) {
                                        return r("tr", { key: e.id_client }, [
                                          r("td", [t._v(t._s(e.name_client))]),
                                          r("td", [
                                            t._v(t._s(e.sumacliente) + " S/."),
                                          ]),
                                        ]);
                                      }),
                                      0
                                    ),
                                  ],
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    "v-row",
                    [
                      r(
                        "v-col",
                        [
                          r("h2", [t._v("Unidades vendidad por Producto")]),
                          r(
                            "v-card",
                            [
                              r(
                                "v-simple-table",
                                [
                                  [
                                    r("thead", [
                                      r("tr", [
                                        r("th", [t._v("Producto")]),
                                        r("th", [t._v("Cantidad vendida")]),
                                      ]),
                                    ]),
                                    r(
                                      "tbody",
                                      t._l(t.ProductosCantidad, function (e) {
                                        return r("tr", { key: e.nombre }, [
                                          r("td", [t._v(t._s(e.nombre))]),
                                          r("td", [
                                            t._v(
                                              t._s(e.cantidad) + " unidades"
                                            ),
                                          ]),
                                        ]);
                                      }),
                                      0
                                    ),
                                  ],
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      r(
                        "v-col",
                        [
                          r("h2", [t._v("Ventas por producto")]),
                          r(
                            "v-card",
                            [
                              r(
                                "v-simple-table",
                                [
                                  [
                                    r("thead", [
                                      r("tr", [
                                        r("th", [t._v("Producto")]),
                                        r("th", [t._v("Total")]),
                                      ]),
                                    ]),
                                    r(
                                      "tbody",
                                      t._l(t.ProductosVentas, function (e) {
                                        return r("tr", { key: e.nombre }, [
                                          r("td", [t._v(t._s(e.nombre) + " ")]),
                                          r("td", [
                                            t._v(
                                              t._s(e.totalproducto) + " S/."
                                            ),
                                          ]),
                                        ]);
                                      }),
                                      0
                                    ),
                                  ],
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    "v-row",
                    [
                      r(
                        "v-col",
                        [
                          r("h2", [t._v("Stock")]),
                          r(
                            "v-card",
                            [
                              r(
                                "v-simple-table",
                                [
                                  [
                                    r("thead", [
                                      r("tr", [
                                        r("th", [t._v("Producto")]),
                                        r("th", [t._v("stock")]),
                                      ]),
                                    ]),
                                    r(
                                      "tbody",
                                      t._l(t.StockProductos, function (e) {
                                        return r("tr", { key: e.nombre }, [
                                          r("td", [t._v(t._s(e.nombre) + " ")]),
                                          r("td", [t._v(t._s(e.stock) + " ")]),
                                        ]);
                                      }),
                                      0
                                    ),
                                  ],
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("c3e6")),
        s = r("84be"),
        c = {
          name: "Indicadores",
          components: { NavBar: i["a"] },
          data: function () {
            return {
              ventas: [],
              clientesVentas: [],
              StockProductos: [],
              ProductosCantidad: [],
              ProductosVentas: [],
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n, a, o, i;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 29);
                          break;
                        case 5:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (e = this.user.id),
                            (t.next = 9),
                            s["a"].get("/getVentasPorMes/".concat(e))
                          );
                        case 9:
                          return (
                            (r = t.sent),
                            (this.ventas = r.data.data.productos),
                            (t.next = 13),
                            s["a"].get("/getClientePotenciales/".concat(e))
                          );
                        case 13:
                          return (
                            (n = t.sent),
                            (this.clientesVentas = n.data.data.productos),
                            (t.next = 17),
                            s["a"].get("/getStockProducto/".concat(e))
                          );
                        case 17:
                          return (
                            (a = t.sent),
                            (this.StockProductos = a.data.data.productos),
                            (t.next = 21),
                            s["a"].get("/getCantidadProducto/".concat(e))
                          );
                        case 21:
                          return (
                            (o = t.sent),
                            (this.ProductosCantidad = o.data.data.productos),
                            (t.next = 25),
                            s["a"].get("/getVentasProducto/".concat(e))
                          );
                        case 25:
                          (i = t.sent),
                            (this.ProductosVentas = i.data.data.productos),
                            console.log(this.clientesVentas),
                            "proveedor" == this.user.role
                              ? console.log("es proveedor")
                              : this.$router.push("/");
                        case 29:
                          t.next = 34;
                          break;
                        case 31:
                          (t.prev = 31),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 34:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 31]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        l = c,
        d = r("2877"),
        u = Object(d["a"])(l, n, a, !1, null, null, null);
      e["default"] = u.exports;
    },
    "4de4": function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("b727").filter,
        o = r("1dde"),
        i = o("filter");
      n(
        { target: "Array", proto: !0, forced: !i },
        {
          filter: function (t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    5402: function (t, e, r) {
      "use strict";
      var n = r("bc3a"),
        a = r.n(n);
      e["a"] = a.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/cliente" });
    },
    "599b": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "v-app",
            [
              r(
                "v-main",
                [
                  r("NavBar"),
                  r(
                    "v-container",
                    [
                      r(
                        "v-layout",
                        { staticClass: "mt-3" },
                        [
                          r(
                            "v-flex",
                            { staticClass: " ", attrs: { md1: "" } },
                            [
                              r("v-img", {
                                attrs: {
                                  height: "100%",
                                  width: "100%",
                                  src: "https://img.freepik.com/free-vector/finance-service-tax-with-invoice-coins_24877-53397.jpg?size=338&ext=jpg",
                                },
                              }),
                            ],
                            1
                          ),
                          r(
                            "v-flex",
                            { staticClass: "border ml-5", attrs: { md3: "" } },
                            [
                              r("h3", { staticClass: "mb-2" }, [
                                t._v("RUC : 12345678912"),
                              ]),
                              r("h3", { staticClass: "mb-2" }, [
                                t._v("Empresa : Merkaltoke"),
                              ]),
                              r("h3", { staticClass: "mb-2" }, [
                                t._v("Dirección: San Isidro 123"),
                              ]),
                            ]
                          ),
                          r("h1", {}, [t._v("Comprobante de Pago")]),
                        ],
                        1
                      ),
                      r(
                        "v-layout",
                        [
                          r("v-flex", { attrs: { "md-3": "" } }, [
                            r("h3", { staticClass: "mt-4" }, [
                              t._v("Cliente : " + t._s(this.user.nombre)),
                            ]),
                            r("h4", { staticClass: "mt-4 mb-4" }, [
                              t._v("Dni : " + t._s(this.datos.dni)),
                            ]),
                          ]),
                          r("v-flex", { attrs: { "md-3": "" } }, [
                            r("h3", { staticClass: "mt-4" }, [
                              t._v(
                                " Direccion de Envío: " +
                                  t._s(this.datos.direccion_cliente) +
                                  " "
                              ),
                            ]),
                          ]),
                          r("v-flex", { attrs: { "md-3": "" } }, [
                            r("h3", { staticClass: "mt-4" }, [
                              t._v(
                                "Fecha de transacción : " + t._s(this.fecha)
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      [
                        r("v-simple-table", {
                          attrs: { height: "300px" },
                          scopedSlots: t._u([
                            {
                              key: "default",
                              fn: function () {
                                return [
                                  r("thead", [
                                    r("tr", [
                                      r("th", { staticClass: "text-left" }, [
                                        t._v("Item"),
                                      ]),
                                      r("th", { staticClass: "text-left" }, [
                                        t._v("Producto"),
                                      ]),
                                      r("th", { staticClass: "text-left" }, [
                                        t._v("Detalle"),
                                      ]),
                                      r("th", { staticClass: "text-left" }, [
                                        t._v("Cantidad"),
                                      ]),
                                      r("th", { staticClass: "text-left" }, [
                                        t._v("Precio"),
                                      ]),
                                      r("th", { staticClass: "text-left" }, [
                                        t._v("Monto"),
                                      ]),
                                    ]),
                                  ]),
                                  r(
                                    "tbody",
                                    t._l(t.productos_del_pedido, function (e) {
                                      return r(
                                        "tr",
                                        { key: e.id_pedido_detalle },
                                        [
                                          r("td", [
                                            t._v(t._s(e.id_pedido_detalle)),
                                          ]),
                                          r("td", [t._v(t._s(e.nombre))]),
                                          r("td", [t._v(t._s(e.detalle))]),
                                          r("td", [t._v(t._s(e.cantidad))]),
                                          r("td", [t._v(t._s(e.precio))]),
                                          r("td", [
                                            t._v(t._s(e.cantidad * e.precio)),
                                          ]),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ]),
                        }),
                      ],
                    ],
                    2
                  ),
                  r("Footer"),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("fd2d")),
        s = r("d000"),
        c = r("f56b"),
        l = r("5402"),
        d = {
          components: { NavBar: s["a"], Footer: i["a"] },
          data: function () {
            return {
              user: { role: "", nombre: "", email: "" },
              productos_del_pedido: [],
              fecha: {},
              datos: {},
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            null == this.user && this.$router.push("/"),
                            (t.prev = 2),
                            (t.next = 5),
                            l["a"].get("/get/".concat(this.user.id))
                          );
                        case 5:
                          return (
                            (e = t.sent),
                            (this.datos = e.data.data.cliente),
                            (r = this.$route.params.id),
                            (t.next = 10),
                            c["a"].get("/get_pedidos_detalle/".concat(r))
                          );
                        case 10:
                          return (
                            (n = t.sent),
                            (t.next = 13),
                            c["a"].get("/pedido_fecha/".concat(r))
                          );
                        case 13:
                          (a = t.sent),
                            (this.productos_del_pedido = n.data.data.pedido),
                            (this.fecha = a.data.data.pedido.fecha),
                            (t.next = 21);
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t["catch"](2)),
                            console.log(t.t0);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 18]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    "5a34": function (t, e, r) {
      var n = r("44e7");
      t.exports = function (t) {
        if (n(t))
          throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    },
    "5ced": function (t, e, r) {},
    "5eb0": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    t._l(t.productos, function (e) {
                      return r(
                        "v-card",
                        {
                          key: e.id_producto,
                          staticClass: "ma-3",
                          attrs: { "max-width": "344" },
                        },
                        [
                          r("v-img", {
                            attrs: { height: "250", src: e.img_producto },
                          }),
                          r("v-card-title", [
                            t._v("Producto : " + t._s(e.nombre) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v(
                              "Proveedor : " + t._s(e.nombre_proveedor) + " "
                            ),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Precio : " + t._s(e.precio) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Stock : " + t._s(e.stock) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Detalle : " + t._s(e.detalle) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v("Visible : " + t._s(e.visible) + " "),
                          ]),
                          r(
                            "v-card-actions",
                            [
                              r(
                                "v-btn",
                                {
                                  attrs: { color: "blue", small: "", dark: "" },
                                  on: {
                                    click: function (r) {
                                      return t.addToCarrito(e.id_producto);
                                    },
                                  },
                                },
                                [t._v("Seleccionar")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("99af"), r("c740"), r("a434"), r("c260")),
        s = r("77fe"),
        c = r("d000"),
        l = r("fd2d"),
        d = {
          name: "Provductos-Categoria",
          components: { NavBar: c["a"], Footer: l["a"] },
          data: function () {
            return {
              productos: [],
              user: { role: "", nombre: "", email: "", id: "" },
            };
          },
          methods: {
            addToCarrito: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            s["a"].get("/getCarritoId/".concat(e.user.id))
                          );
                        case 2:
                          return (
                            (n = r.sent),
                            (a = n.data.data.cliente.id_carrito),
                            (r.next = 6),
                            s["a"].post("/insertMid/".concat(a, "/").concat(t))
                          );
                        case 6:
                          r.sent,
                            (o = e.productos.findIndex(function (e) {
                              return e.id_producto == t;
                            })),
                            e.productos.splice(o, 1);
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (t.prev = 1),
                            (e = this.$route.params.id),
                            (t.next = 5),
                            i["a"].get("/getProductos-Categoria/".concat(e))
                          );
                        case 5:
                          (r = t.sent),
                            (this.productos = r.data.data.productos),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](1)),
                            console.log(t.t0);
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 9]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    "65f0": function (t, e, r) {
      var n = r("861d"),
        a = r("e8b5"),
        o = r("b622"),
        i = o("species");
      t.exports = function (t, e) {
        var r;
        return (
          a(t) &&
            ((r = t.constructor),
            "function" != typeof r || (r !== Array && !a(r.prototype))
              ? n(r) && ((r = r[i]), null === r && (r = void 0))
              : (r = void 0)),
          new (void 0 === r ? Array : r)(0 === e ? 0 : e)
        );
      };
    },
    "6f82": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBarAdmin"),
              r(
                "v-container",
                [
                  r(
                    "v-alert",
                    {
                      attrs: { type: t.alert.type, dismissible: "" },
                      model: {
                        value: t.alert.show,
                        callback: function (e) {
                          t.$set(t.alert, "show", e);
                        },
                        expression: "alert.show",
                      },
                    },
                    [t._v(" " + t._s(t.alert.message) + " ")]
                  ),
                ],
                1
              ),
              r(
                "v-container",
                { staticClass: "mt-5" },
                [
                  r(
                    "v-card",
                    {
                      staticClass: "pb-3",
                      attrs: { elevation: "15", shaped: "", loading: "" },
                    },
                    [
                      r(
                        "v-card-title",
                        [t._v(" Gestión de Proveedores "), r("v-spacer")],
                        1
                      ),
                      r("v-data-table", {
                        attrs: { headers: t.headers, items: t.proveedores },
                        scopedSlots: t._u([
                          {
                            key: "item",
                            fn: function (e) {
                              return [
                                r("tr", [
                                  r("td", [
                                    t._v(t._s(e.item.nombre_proveedor)),
                                  ]),
                                  r("td", [t._v(t._s(e.item.email_proveedor))]),
                                  r("td", [
                                    t._v(t._s(e.item.direccion_proveedor)),
                                  ]),
                                  r("td", [t._v(t._s(e.item.activo))]),
                                  r(
                                    "td",
                                    {
                                      attrs: {
                                        id: "visible" + e.item.id_proveedor,
                                      },
                                    },
                                    [t._v(" " + t._s(e.item.visible) + " ")]
                                  ),
                                  r(
                                    "td",
                                    [
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "orange",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProveedorToUpdate(
                                                e.item.id_proveedor
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-pencil ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "red",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProductoToDelete(
                                                e.item.id_proveedor
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-delete ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "red",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readCuentaToDelete(
                                                e.item.id_proveedor
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-cancel ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                            href:
                                              "/AdmProductos/" +
                                              e.item.id_proveedor,
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-eye ")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "600px" },
                  model: {
                    value: t.updating,
                    callback: function (e) {
                      t.updating = e;
                    },
                    expression: "updating",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r(
                        "v-form",
                        {
                          ref: "updateProveedor",
                          on: {
                            submit: function (e) {
                              return e.preventDefault(), t.updateProveedor();
                            },
                          },
                        },
                        [
                          r("v-card-title", [t._v("Editar Proveedor")]),
                          r(
                            "v-card-text",
                            [
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Nombre",
                                  rules: [
                                    function (t) {
                                      return !!t || "Nombre es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.proveedorToUpdate.nombre_proveedor,
                                  callback: function (e) {
                                    t.$set(
                                      t.proveedorToUpdate,
                                      "nombre_proveedor",
                                      e
                                    );
                                  },
                                  expression:
                                    "proveedorToUpdate.nombre_proveedor",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "prepend-icon": "mdi-pencil",
                                  label: "RUC",
                                  rules: [
                                    function (t) {
                                      return !!t || "RUC es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.proveedorToUpdate.ruc,
                                  callback: function (e) {
                                    t.$set(t.proveedorToUpdate, "ruc", e);
                                  },
                                  expression: "proveedorToUpdate.ruc",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Correo",
                                  rules: [
                                    function (t) {
                                      return !!t || "Correo es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.proveedorToUpdate.email_proveedor,
                                  callback: function (e) {
                                    t.$set(
                                      t.proveedorToUpdate,
                                      "email_proveedor",
                                      e
                                    );
                                  },
                                  expression:
                                    "proveedorToUpdate.email_proveedor",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Direccion",
                                  rules: [
                                    function (t) {
                                      return !!t || "Direccion es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value:
                                    t.proveedorToUpdate.direccion_proveedor,
                                  callback: function (e) {
                                    t.$set(
                                      t.proveedorToUpdate,
                                      "direccion_proveedor",
                                      e
                                    );
                                  },
                                  expression:
                                    "proveedorToUpdate.direccion_proveedor",
                                },
                              }),
                              r(
                                "v-btn",
                                {
                                  staticClass: "success ma-2",
                                  attrs: { block: "", type: "submit" },
                                },
                                [t._v("Actualizar datos")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "450" },
                  model: {
                    value: t.advertencia2,
                    callback: function (e) {
                      t.advertencia2 = e;
                    },
                    expression: "advertencia2",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r("v-card-title", { staticClass: "headline" }, [
                        t._v(" CUENTA PROVEEDOR "),
                      ]),
                      r("v-card-text", [
                        t._v(" ¿Desea ACTIVAR O DESACTIVAR CUENTA ? "),
                      ]),
                      r(
                        "v-card-actions",
                        [
                          r("v-spacer"),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", text: "" },
                              on: {
                                click: function (e) {
                                  return t.Activar(t.prueba);
                                },
                              },
                            },
                            [t._v(" ACTIVAR ")]
                          ),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "red", text: "" },
                              on: {
                                click: function (e) {
                                  return t.Cancel(t.prueba);
                                },
                              },
                            },
                            [t._v(" DESACTIVAR ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("d3b7"), r("25f0"), r("99af"), r("96cf"), r("fd2d")),
        s = r("84be"),
        c = r("8e18"),
        l = r("ed7b"),
        d = {
          name: "AdminProveedores",
          components: { NavBarAdmin: l["a"], Footer: i["a"] },
          data: function () {
            return {
              proveedores: [],
              datos: {},
              search: "",
              prueba: "",
              productos: [],
              proveedorToUpdate: [],
              productoToUpdate: [],
              advertencia2: !1,
              updating: !1,
              advertencia: !1,
              dialogDelete: !1,
              productoToDelete: {},
              alert: { show: !1 },
              headers: [
                {
                  text: "Proveedor",
                  align: "start",
                  sortable: !1,
                  value: "nombre",
                },
                { text: "Correo", value: "Correo", sortable: !0 },
                { text: "Direccion", value: "Direccion" },
                { text: "Activo", value: "activo", sortable: !1 },
              ],
              add: !1,
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 17);
                          break;
                        case 5:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (e = this.user.id),
                            (t.next = 9),
                            s["a"].get("/get")
                          );
                        case 9:
                          return (
                            (r = t.sent),
                            (this.proveedores = r.data.data.proveedores),
                            (t.next = 13),
                            s["a"].get("/getProductos-Proveedor2/".concat(e))
                          );
                        case 13:
                          (n = t.sent),
                            (this.productos = n.data.data.productos),
                            console.log(this.productos),
                            "administrador" == this.user.role ||
                              this.$router.push("/");
                        case 17:
                          t.next = 22;
                          break;
                        case 19:
                          (t.prev = 19),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 19]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            readProveedorToUpdate: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), s["a"].get("/get/".concat(t));
                        case 2:
                          (n = r.sent),
                            (e.updating = !0),
                            (e.proveedorToUpdate = n.data.data.proveedores),
                            console.log(e.proveedorToUpdate);
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            updateProveedor: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log(t.proveedorToUpdate),
                            (e.next = 3),
                            s["a"].put(
                              "/perfilUpdate/".concat(
                                t.proveedorToUpdate.id_proveedor
                              ),
                              t.proveedorToUpdate
                            )
                          );
                        case 3:
                          setTimeout(function () {
                            (t.updating = !1), window.location.reload();
                          }, 1e3);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            Cancel: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = t.toString()),
                            (a = "Inactivo"),
                            (o = "no"),
                            (r.next = 5),
                            c["a"].put(
                              "/updatecancel/".concat(n, "/").concat(o)
                            )
                          );
                        case 5:
                          return (
                            r.sent,
                            (r.next = 8),
                            s["a"].put(
                              "/updatecancel/".concat(n, "/").concat(a)
                            )
                          );
                        case 8:
                          r.sent,
                            console.log("camcel"),
                            (e.advertencia2 = !1),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3);
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            Activar: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = "Activo"),
                            (a = "si"),
                            (o = t.toString()),
                            (r.next = 5),
                            c["a"].put(
                              "/updatecancel/".concat(o, "/").concat(a)
                            )
                          );
                        case 5:
                          return (
                            r.sent,
                            (r.next = 8),
                            s["a"].put(
                              "/updatecancel/".concat(o, "/").concat(n)
                            )
                          );
                        case 8:
                          r.sent,
                            (e.advertencia2 = !1),
                            setTimeout(function () {
                              window.location.reload();
                            }, 1e3);
                        case 11:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            readCuentaToDelete: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          (e.advertencia2 = !0), (e.prueba = t);
                        case 2:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
          },
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    "77fe": function (t, e, r) {
      "use strict";
      var n = r("bc3a"),
        a = r.n(n);
      e["a"] = a.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/carrito" });
    },
    "78bb": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r(
                    "v-alert",
                    {
                      attrs: { type: t.alert.type, dismissible: "" },
                      model: {
                        value: t.alert.show,
                        callback: function (e) {
                          t.$set(t.alert, "show", e);
                        },
                        expression: "alert.show",
                      },
                    },
                    [t._v(" " + t._s(t.alert.message) + " ")]
                  ),
                ],
                1
              ),
              r(
                "v-container",
                [
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      r(
                        "v-col",
                        [
                          r(
                            "v-card",
                            {
                              staticClass: "mt-5 mb-5",
                              staticStyle: { margin: "auto" },
                              attrs: { elevation: "15", shaped: "" },
                            },
                            [
                              r(
                                "v-card-title",
                                [
                                  t._v(" Gestión de Pedidos "),
                                  r("v-spacer"),
                                  r("v-text-field", {
                                    attrs: {
                                      "append-icon": "mdi-magnify",
                                      label: "Search",
                                      "single-line": "",
                                    },
                                    model: {
                                      value: t.search,
                                      callback: function (e) {
                                        t.search = e;
                                      },
                                      expression: "search",
                                    },
                                  }),
                                ],
                                1
                              ),
                              r("v-data-table", {
                                attrs: {
                                  headers: t.headers,
                                  items: t.pedidos,
                                  search: t.search,
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "item",
                                    fn: function (e) {
                                      return [
                                        r("tr", [
                                          r("td", [
                                            t._v(t._s(e.item.id_pedido)),
                                          ]),
                                          r("td", [
                                            t._v(t._s(e.item.nombre_proveedor)),
                                          ]),
                                          r("td", [t._v(t._s(e.item.fecha))]),
                                          r("td", [
                                            t._v(t._s(e.item.nombre_cliente)),
                                          ]),
                                          r("td", [
                                            t._v(
                                              t._s(e.item.direccion_cliente)
                                            ),
                                          ]),
                                          r("td", [t._v(t._s(e.item.estado))]),
                                          r(
                                            "td",
                                            [
                                              r(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "green",
                                                    "x-small": "",
                                                    small: "",
                                                    dark: "",
                                                    fab: "",
                                                    href:
                                                      "/Productos-Pedido/" +
                                                      e.item.id_pedido,
                                                  },
                                                },
                                                [
                                                  r(
                                                    "v-icon",
                                                    { attrs: { small: "" } },
                                                    [t._v(" mdi-eye ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                              r(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "orange",
                                                    "x-small": "",
                                                    small: "",
                                                    dark: "",
                                                    fab: "",
                                                  },
                                                  on: {
                                                    click: function (r) {
                                                      return t.readEstadoToUpdate(
                                                        e.item.id_pedido
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  r(
                                                    "v-icon",
                                                    { attrs: { small: "" } },
                                                    [t._v(" mdi-check ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                      ];
                                    },
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                          r(
                            "v-card",
                            {
                              staticClass: "mt-5 mb-5",
                              staticStyle: { margin: "auto" },
                              attrs: { elevation: "15", shaped: "" },
                            },
                            [
                              r(
                                "v-card-title",
                                [
                                  t._v(" Gestión de Devolucion de Pedidos "),
                                  r("v-spacer"),
                                  r("v-text-field", {
                                    attrs: {
                                      "append-icon": "mdi-magnify",
                                      label: "Search",
                                      "single-line": "",
                                    },
                                    model: {
                                      value: t.search2,
                                      callback: function (e) {
                                        t.search2 = e;
                                      },
                                      expression: "search2",
                                    },
                                  }),
                                ],
                                1
                              ),
                              r("v-data-table", {
                                attrs: {
                                  headers: t.headers3,
                                  items: t.Devoluciones,
                                  search: t.search2,
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "item",
                                    fn: function (e) {
                                      return [
                                        r("tr", [
                                          r("td", [
                                            t._v(t._s(e.item.id_pedido)),
                                          ]),
                                          r("td", [t._v(t._s(e.item.motivo))]),
                                          r("td", [
                                            t._v(t._s(e.item.detalle_motivo)),
                                          ]),
                                          r("td", [t._v(t._s(e.item.fecha))]),
                                          r("td", [t._v(t._s(e.item.procede))]),
                                          r(
                                            "td",
                                            [
                                              r(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "orange",
                                                    "x-small": "",
                                                    small: "",
                                                    dark: "",
                                                    fab: "",
                                                  },
                                                  on: {
                                                    click: function (r) {
                                                      return t.readDevToUpdate(
                                                        e.item.id_pedido
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  r(
                                                    "v-icon",
                                                    { attrs: { small: "" } },
                                                    [t._v(" mdi-check ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ]),
                                      ];
                                    },
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "600px" },
                  model: {
                    value: t.updating,
                    callback: function (e) {
                      t.updating = e;
                    },
                    expression: "updating",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r(
                        "v-form",
                        {
                          ref: "updateEstado",
                          on: {
                            submit: function (e) {
                              return e.preventDefault(), t.updateEstado();
                            },
                          },
                        },
                        [
                          r("v-card-title", [t._v("Editar Estado")]),
                          r(
                            "v-card-text",
                            [
                              r("v-select", {
                                attrs: {
                                  items: t.estados,
                                  "prepend-icon": "mdi-pencil",
                                  "item-text": "estado",
                                  "item-value": "id_estado",
                                  label: "Estado",
                                  rules: [
                                    function (t) {
                                      return !!t || "Estado es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.estadoToUpdate.id_estado,
                                  callback: function (e) {
                                    t.$set(t.estadoToUpdate, "id_estado", e);
                                  },
                                  expression: "estadoToUpdate.id_estado",
                                },
                              }),
                              r(
                                "v-btn",
                                {
                                  staticClass: "success ma-2",
                                  attrs: { block: "", type: "submit" },
                                },
                                [t._v("Actualizar estado")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "600px" },
                  model: {
                    value: t.updatingDev,
                    callback: function (e) {
                      t.updatingDev = e;
                    },
                    expression: "updatingDev",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r(
                        "v-form",
                        {
                          ref: "updateDevolucion",
                          on: {
                            submit: function (e) {
                              return e.preventDefault(), t.updateDevolucion();
                            },
                          },
                        },
                        [
                          r("v-card-title", [t._v("Editar Estado de Procede")]),
                          r(
                            "v-card-text",
                            [
                              r("v-select", {
                                attrs: {
                                  items: t.procede,
                                  "prepend-icon": "mdi-pencil",
                                  "item-text": "procede",
                                  "item-value": "procede",
                                  label: "¿Procede?",
                                  rules: [
                                    function (t) {
                                      return (
                                        !!t || "Estado de procede es requerido"
                                      );
                                    },
                                  ],
                                },
                                model: {
                                  value: t.DevolucionToUpdate.procede,
                                  callback: function (e) {
                                    t.$set(t.DevolucionToUpdate, "procede", e);
                                  },
                                  expression: "DevolucionToUpdate.procede",
                                },
                              }),
                              r(
                                "v-btn",
                                {
                                  staticClass: "success ma-2",
                                  attrs: { block: "", type: "submit" },
                                },
                                [t._v("Actualizar datos")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("99af"), r("c740"), r("96cf"), r("c3e6")),
        s = r("fd2d"),
        c = r("84be"),
        l = r("f56b"),
        d = r("bc3a"),
        u = r.n(d),
        h = u.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/estados" });
      const p = (function () {
        return "undefined" === typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      })();
      function f(t, e, r) {
        const n = r || ((t) => Array.prototype.slice.call(t));
        let a = !1,
          o = [];
        return function (...r) {
          (o = n(r)),
            a ||
              ((a = !0),
              p.call(window, () => {
                (a = !1), t.apply(e, o);
              }));
        };
      }
      function g(t, e) {
        let r;
        return function () {
          return e ? (clearTimeout(r), (r = setTimeout(t, e))) : t(), e;
        };
      }
      const m = (t) =>
          "start" === t ? "left" : "end" === t ? "right" : "center",
        v = (t, e, r) => ("start" === t ? e : "end" === t ? r : (e + r) / 2);
      const b = (function () {
        let t = 0;
        return function () {
          return t++;
        };
      })();
      function x(t) {
        return null === t || "undefined" === typeof t;
      }
      function _(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
      }
      function y(t) {
        return (
          null !== t && "[object Object]" === Object.prototype.toString.call(t)
        );
      }
      const w = (t) =>
        ("number" === typeof t || t instanceof Number) && isFinite(+t);
      function k(t, e) {
        return w(t) ? t : e;
      }
      function M(t, e) {
        return "undefined" === typeof t ? e : t;
      }
      const C = (t, e) =>
          "string" === typeof t && t.endsWith("%")
            ? parseFloat(t) / 100
            : t / e,
        P = (t, e) =>
          "string" === typeof t && t.endsWith("%")
            ? (parseFloat(t) / 100) * e
            : +t;
      function S(t, e, r) {
        if (t && "function" === typeof t.call) return t.apply(r, e);
      }
      function T(t, e, r, n) {
        let a, o, i;
        if (_(t))
          if (((o = t.length), n))
            for (a = o - 1; a >= 0; a--) e.call(r, t[a], a);
          else for (a = 0; a < o; a++) e.call(r, t[a], a);
        else if (y(t))
          for (i = Object.keys(t), o = i.length, a = 0; a < o; a++)
            e.call(r, t[i[a]], i[a]);
      }
      function D(t, e) {
        let r, n, a, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (r = 0, n = t.length; r < n; ++r)
          if (
            ((a = t[r]),
            (o = e[r]),
            a.datasetIndex !== o.datasetIndex || a.index !== o.index)
          )
            return !1;
        return !0;
      }
      function R(t) {
        if (_(t)) return t.map(R);
        if (y(t)) {
          const e = Object.create(null),
            r = Object.keys(t),
            n = r.length;
          let a = 0;
          for (; a < n; ++a) e[r[a]] = R(t[r[a]]);
          return e;
        }
        return t;
      }
      function O(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
      }
      function A(t, e, r, n) {
        if (!O(t)) return;
        const a = e[t],
          o = r[t];
        y(a) && y(o) ? E(a, o, n) : (e[t] = R(o));
      }
      function E(t, e, r) {
        const n = _(e) ? e : [e],
          a = n.length;
        if (!y(t)) return t;
        r = r || {};
        const o = r.merger || A;
        for (let i = 0; i < a; ++i) {
          if (((e = n[i]), !y(e))) continue;
          const a = Object.keys(e);
          for (let n = 0, i = a.length; n < i; ++n) o(a[n], t, e, r);
        }
        return t;
      }
      function I(t, e) {
        return E(t, e, { merger: L });
      }
      function L(t, e, r) {
        if (!O(t)) return;
        const n = e[t],
          a = r[t];
        y(n) && y(a)
          ? I(n, a)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = R(a));
      }
      const F = "",
        N = ".";
      function j(t, e) {
        const r = t.indexOf(N, e);
        return -1 === r ? t.length : r;
      }
      function U(t, e) {
        if (e === F) return t;
        let r = 0,
          n = j(e, r);
        while (t && n > r)
          (t = t[e.substr(r, n - r)]), (r = n + 1), (n = j(e, r));
        return t;
      }
      function z(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const B = (t) => "undefined" !== typeof t,
        V = (t) => "function" === typeof t,
        $ = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const r of t) if (!e.has(r)) return !1;
          return !0;
        },
        W = Math.PI,
        H = 2 * W,
        q = H + W,
        Y = Number.POSITIVE_INFINITY,
        X = W / 180,
        Q = W / 2,
        G = W / 4,
        J = (2 * W) / 3,
        K = Math.log10,
        Z = Math.sign;
      function tt(t) {
        const e = Math.pow(10, Math.floor(K(t))),
          r = t / e,
          n = r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10;
        return n * e;
      }
      function et(t) {
        const e = [],
          r = Math.sqrt(t);
        let n;
        for (n = 1; n < r; n++) t % n === 0 && (e.push(n), e.push(t / n));
        return r === (0 | r) && e.push(r), e.sort((t, e) => t - e).pop(), e;
      }
      function rt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function nt(t, e, r) {
        return Math.abs(t - e) < r;
      }
      function at(t, e) {
        const r = Math.round(t);
        return r - e <= t && r + e >= t;
      }
      function ot(t, e, r) {
        let n, a, o;
        for (n = 0, a = t.length; n < a; n++)
          (o = t[n][r]),
            isNaN(o) ||
              ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
      }
      function it(t) {
        return t * (W / 180);
      }
      function st(t) {
        return t * (180 / W);
      }
      function ct(t) {
        if (!w(t)) return;
        let e = 1,
          r = 0;
        while (Math.round(t * e) / e !== t) (e *= 10), r++;
        return r;
      }
      function lt(t, e) {
        const r = e.x - t.x,
          n = e.y - t.y,
          a = Math.sqrt(r * r + n * n);
        let o = Math.atan2(n, r);
        return o < -0.5 * W && (o += H), { angle: o, distance: a };
      }
      function dt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function ut(t, e) {
        return ((t - e + q) % H) - W;
      }
      function ht(t) {
        return ((t % H) + H) % H;
      }
      function pt(t, e, r, n) {
        const a = ht(t),
          o = ht(e),
          i = ht(r),
          s = ht(o - a),
          c = ht(i - a),
          l = ht(a - o),
          d = ht(a - i);
        return a === o || a === i || (n && o === i) || (s > c && l < d);
      }
      function ft(t, e, r) {
        return Math.max(e, Math.min(r, t));
      }
      function gt(t) {
        return ft(t, -32768, 32767);
      }
      const mt = (t) => 0 === t || 1 === t,
        vt = (t, e, r) =>
          -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * H) / r),
        bt = (t, e, r) =>
          Math.pow(2, -10 * t) * Math.sin(((t - e) * H) / r) + 1,
        xt = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * Q),
          easeOutSine: (t) => Math.sin(t * Q),
          easeInOutSine: (t) => -0.5 * (Math.cos(W * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            mt(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (mt(t) ? t : vt(t, 0.075, 0.3)),
          easeOutElastic: (t) => (mt(t) ? t : bt(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125,
              r = 0.45;
            return mt(t)
              ? t
              : t < 0.5
              ? 0.5 * vt(2 * t, e, r)
              : 0.5 + 0.5 * bt(2 * t - 1, e, r);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: (t) => 1 - xt.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              r = 2.75;
            return t < 1 / r
              ? e * t * t
              : t < 2 / r
              ? e * (t -= 1.5 / r) * t + 0.75
              : t < 2.5 / r
              ? e * (t -= 2.25 / r) * t + 0.9375
              : e * (t -= 2.625 / r) * t + 0.984375;
          },
          easeInOutBounce: (t) =>
            t < 0.5
              ? 0.5 * xt.easeInBounce(2 * t)
              : 0.5 * xt.easeOutBounce(2 * t - 1) + 0.5,
        },
        _t = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        yt = "0123456789ABCDEF",
        wt = (t) => yt[15 & t],
        kt = (t) => yt[(240 & t) >> 4] + yt[15 & t],
        Mt = (t) => (240 & t) >> 4 === (15 & t);
      function Ct(t) {
        return Mt(t.r) && Mt(t.g) && Mt(t.b) && Mt(t.a);
      }
      function Pt(t) {
        var e,
          r = t.length;
        return (
          "#" === t[0] &&
            (4 === r || 5 === r
              ? (e = {
                  r: 255 & (17 * _t[t[1]]),
                  g: 255 & (17 * _t[t[2]]),
                  b: 255 & (17 * _t[t[3]]),
                  a: 5 === r ? 17 * _t[t[4]] : 255,
                })
              : (7 !== r && 9 !== r) ||
                (e = {
                  r: (_t[t[1]] << 4) | _t[t[2]],
                  g: (_t[t[3]] << 4) | _t[t[4]],
                  b: (_t[t[5]] << 4) | _t[t[6]],
                  a: 9 === r ? (_t[t[7]] << 4) | _t[t[8]] : 255,
                })),
          e
        );
      }
      function St(t) {
        var e = Ct(t) ? wt : kt;
        return t
          ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "")
          : t;
      }
      function Tt(t) {
        return (t + 0.5) | 0;
      }
      const Dt = (t, e, r) => Math.max(Math.min(t, r), e);
      function Rt(t) {
        return Dt(Tt(2.55 * t), 0, 255);
      }
      function Ot(t) {
        return Dt(Tt(255 * t), 0, 255);
      }
      function At(t) {
        return Dt(Tt(t / 2.55) / 100, 0, 1);
      }
      function Et(t) {
        return Dt(Tt(100 * t), 0, 100);
      }
      const It =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      function Lt(t) {
        const e = It.exec(t);
        let r,
          n,
          a,
          o = 255;
        if (e) {
          if (e[7] !== r) {
            const t = +e[7];
            o = 255 & (e[8] ? Rt(t) : 255 * t);
          }
          return (
            (r = +e[1]),
            (n = +e[3]),
            (a = +e[5]),
            (r = 255 & (e[2] ? Rt(r) : r)),
            (n = 255 & (e[4] ? Rt(n) : n)),
            (a = 255 & (e[6] ? Rt(a) : a)),
            { r: r, g: n, b: a, a: o }
          );
        }
      }
      function Ft(t) {
        return (
          t &&
          (t.a < 255
            ? `rgba(${t.r}, ${t.g}, ${t.b}, ${At(t.a)})`
            : `rgb(${t.r}, ${t.g}, ${t.b})`)
        );
      }
      const Nt =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function jt(t, e, r) {
        const n = e * Math.min(r, 1 - r),
          a = (e, a = (e + t / 30) % 12) =>
            r - n * Math.max(Math.min(a - 3, 9 - a, 1), -1);
        return [a(0), a(8), a(4)];
      }
      function Ut(t, e, r) {
        const n = (n, a = (n + t / 60) % 6) =>
          r - r * e * Math.max(Math.min(a, 4 - a, 1), 0);
        return [n(5), n(3), n(1)];
      }
      function zt(t, e, r) {
        const n = jt(t, 1, 0.5);
        let a;
        for (
          e + r > 1 && ((a = 1 / (e + r)), (e *= a), (r *= a)), a = 0;
          a < 3;
          a++
        )
          (n[a] *= 1 - e - r), (n[a] += e);
        return n;
      }
      function Bt(t) {
        const e = 255,
          r = t.r / e,
          n = t.g / e,
          a = t.b / e,
          o = Math.max(r, n, a),
          i = Math.min(r, n, a),
          s = (o + i) / 2;
        let c, l, d;
        return (
          o !== i &&
            ((d = o - i),
            (l = s > 0.5 ? d / (2 - o - i) : d / (o + i)),
            (c =
              o === r
                ? (n - a) / d + (n < a ? 6 : 0)
                : o === n
                ? (a - r) / d + 2
                : (r - n) / d + 4),
            (c = 60 * c + 0.5)),
          [0 | c, l || 0, s]
        );
      }
      function Vt(t, e, r, n) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, r, n)).map(Ot);
      }
      function $t(t, e, r) {
        return Vt(jt, t, e, r);
      }
      function Wt(t, e, r) {
        return Vt(zt, t, e, r);
      }
      function Ht(t, e, r) {
        return Vt(Ut, t, e, r);
      }
      function qt(t) {
        return ((t % 360) + 360) % 360;
      }
      function Yt(t) {
        const e = Nt.exec(t);
        let r,
          n = 255;
        if (!e) return;
        e[5] !== r && (n = e[6] ? Rt(+e[5]) : Ot(+e[5]));
        const a = qt(+e[2]),
          o = +e[3] / 100,
          i = +e[4] / 100;
        return (
          (r =
            "hwb" === e[1]
              ? Wt(a, o, i)
              : "hsv" === e[1]
              ? Ht(a, o, i)
              : $t(a, o, i)),
          { r: r[0], g: r[1], b: r[2], a: n }
        );
      }
      function Xt(t, e) {
        var r = Bt(t);
        (r[0] = qt(r[0] + e)),
          (r = $t(r)),
          (t.r = r[0]),
          (t.g = r[1]),
          (t.b = r[2]);
      }
      function Qt(t) {
        if (!t) return;
        const e = Bt(t),
          r = e[0],
          n = Et(e[1]),
          a = Et(e[2]);
        return t.a < 255
          ? `hsla(${r}, ${n}%, ${a}%, ${At(t.a)})`
          : `hsl(${r}, ${n}%, ${a}%)`;
      }
      const Gt = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        Jt = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      function Kt() {
        const t = {},
          e = Object.keys(Jt),
          r = Object.keys(Gt);
        let n, a, o, i, s;
        for (n = 0; n < e.length; n++) {
          for (i = s = e[n], a = 0; a < r.length; a++)
            (o = r[a]), (s = s.replace(o, Gt[o]));
          (o = parseInt(Jt[i], 16)),
            (t[s] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
        }
        return t;
      }
      let Zt;
      function te(t) {
        Zt || ((Zt = Kt()), (Zt.transparent = [0, 0, 0, 0]));
        const e = Zt[t.toLowerCase()];
        return (
          e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        );
      }
      function ee(t, e, r) {
        if (t) {
          let n = Bt(t);
          (n[e] = Math.max(0, Math.min(n[e] + n[e] * r, 0 === e ? 360 : 1))),
            (n = $t(n)),
            (t.r = n[0]),
            (t.g = n[1]),
            (t.b = n[2]);
        }
      }
      function re(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function ne(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = Ot(t[3])))
            : ((e = re(t, { r: 0, g: 0, b: 0, a: 1 })), (e.a = Ot(e.a))),
          e
        );
      }
      function ae(t) {
        return "r" === t.charAt(0) ? Lt(t) : Yt(t);
      }
      class oe {
        constructor(t) {
          if (t instanceof oe) return t;
          const e = typeof t;
          let r;
          "object" === e
            ? (r = ne(t))
            : "string" === e && (r = Pt(t) || te(t) || ae(t)),
            (this._rgb = r),
            (this._valid = !!r);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = re(this._rgb);
          return t && (t.a = At(t.a)), t;
        }
        set rgb(t) {
          this._rgb = ne(t);
        }
        rgbString() {
          return this._valid ? Ft(this._rgb) : this._rgb;
        }
        hexString() {
          return this._valid ? St(this._rgb) : this._rgb;
        }
        hslString() {
          return this._valid ? Qt(this._rgb) : this._rgb;
        }
        mix(t, e) {
          const r = this;
          if (t) {
            const n = r.rgb,
              a = t.rgb;
            let o;
            const i = e === o ? 0.5 : e,
              s = 2 * i - 1,
              c = n.a - a.a,
              l = ((s * c === -1 ? s : (s + c) / (1 + s * c)) + 1) / 2;
            (o = 1 - l),
              (n.r = 255 & (l * n.r + o * a.r + 0.5)),
              (n.g = 255 & (l * n.g + o * a.g + 0.5)),
              (n.b = 255 & (l * n.b + o * a.b + 0.5)),
              (n.a = i * n.a + (1 - i) * a.a),
              (r.rgb = n);
          }
          return r;
        }
        clone() {
          return new oe(this.rgb);
        }
        alpha(t) {
          return (this._rgb.a = Ot(t)), this;
        }
        clearer(t) {
          const e = this._rgb;
          return (e.a *= 1 - t), this;
        }
        greyscale() {
          const t = this._rgb,
            e = Tt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        }
        opaquer(t) {
          const e = this._rgb;
          return (e.a *= 1 + t), this;
        }
        negate() {
          const t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        }
        lighten(t) {
          return ee(this._rgb, 2, t), this;
        }
        darken(t) {
          return ee(this._rgb, 2, -t), this;
        }
        saturate(t) {
          return ee(this._rgb, 1, t), this;
        }
        desaturate(t) {
          return ee(this._rgb, 1, -t), this;
        }
        rotate(t) {
          return Xt(this._rgb, t), this;
        }
      }
      function ie(t) {
        return new oe(t);
      }
      const se = (t) =>
        t instanceof CanvasGradient || t instanceof CanvasPattern;
      function ce(t) {
        return se(t) ? t : ie(t);
      }
      function le(t) {
        return se(t) ? t : ie(t).saturate(0.5).darken(0.1).hexString();
      }
      const de = Object.create(null),
        ue = Object.create(null);
      function he(t, e) {
        if (!e) return t;
        const r = e.split(".");
        for (let n = 0, a = r.length; n < a; ++n) {
          const e = r[n];
          t = t[e] || (t[e] = Object.create(null));
        }
        return t;
      }
      function pe(t, e, r) {
        return "string" === typeof e ? E(he(t, e), r) : E(he(t, ""), e);
      }
      class fe {
        constructor(t) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) =>
              t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => le(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => le(e.borderColor)),
            (this.hoverColor = (t, e) => le(e.color)),
            (this.indexAxis = "x"),
            (this.interaction = { mode: "nearest", intersect: !0 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            this.describe(t);
        }
        set(t, e) {
          return pe(this, t, e);
        }
        get(t) {
          return he(this, t);
        }
        describe(t, e) {
          return pe(ue, t, e);
        }
        override(t, e) {
          return pe(de, t, e);
        }
        route(t, e, r, n) {
          const a = he(this, t),
            o = he(this, r),
            i = "_" + e;
          Object.defineProperties(a, {
            [i]: { value: a[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[i],
                  e = o[n];
                return y(t) ? Object.assign({}, e, t) : M(t, e);
              },
              set(t) {
                this[i] = t;
              },
            },
          });
        }
      }
      var ge = new fe({
        _scriptable: (t) => !t.startsWith("on"),
        _indexable: (t) => "events" !== t,
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
      });
      function me(t) {
        return !t || x(t.size) || x(t.family)
          ? null
          : (t.style ? t.style + " " : "") +
              (t.weight ? t.weight + " " : "") +
              t.size +
              "px " +
              t.family;
      }
      function ve(t, e, r, n, a) {
        let o = e[a];
        return (
          o || ((o = e[a] = t.measureText(a).width), r.push(a)),
          o > n && (n = o),
          n
        );
      }
      function be(t, e, r, n) {
        n = n || {};
        let a = (n.data = n.data || {}),
          o = (n.garbageCollect = n.garbageCollect || []);
        n.font !== e &&
          ((a = n.data = {}), (o = n.garbageCollect = []), (n.font = e)),
          t.save(),
          (t.font = e);
        let i = 0;
        const s = r.length;
        let c, l, d, u, h;
        for (c = 0; c < s; c++)
          if (((u = r[c]), void 0 !== u && null !== u && !0 !== _(u)))
            i = ve(t, a, o, i, u);
          else if (_(u))
            for (l = 0, d = u.length; l < d; l++)
              (h = u[l]),
                void 0 === h || null === h || _(h) || (i = ve(t, a, o, i, h));
        t.restore();
        const p = o.length / 2;
        if (p > r.length) {
          for (c = 0; c < p; c++) delete a[o[c]];
          o.splice(0, p);
        }
        return i;
      }
      function xe(t, e, r) {
        const n = t.currentDevicePixelRatio,
          a = 0 !== r ? Math.max(r / 2, 0.5) : 0;
        return Math.round((e - a) * n) / n + a;
      }
      function _e(t, e) {
        (e = e || t.getContext("2d")),
          e.save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore();
      }
      function ye(t, e, r, n) {
        let a, o, i, s, c;
        const l = e.pointStyle,
          d = e.rotation,
          u = e.radius;
        let h = (d || 0) * X;
        if (
          l &&
          "object" === typeof l &&
          ((a = l.toString()),
          "[object HTMLImageElement]" === a ||
            "[object HTMLCanvasElement]" === a)
        )
          return (
            t.save(),
            t.translate(r, n),
            t.rotate(h),
            t.drawImage(l, -l.width / 2, -l.height / 2, l.width, l.height),
            void t.restore()
          );
        if (!(isNaN(u) || u <= 0)) {
          switch ((t.beginPath(), l)) {
            default:
              t.arc(r, n, u, 0, H), t.closePath();
              break;
            case "triangle":
              t.moveTo(r + Math.sin(h) * u, n - Math.cos(h) * u),
                (h += J),
                t.lineTo(r + Math.sin(h) * u, n - Math.cos(h) * u),
                (h += J),
                t.lineTo(r + Math.sin(h) * u, n - Math.cos(h) * u),
                t.closePath();
              break;
            case "rectRounded":
              (c = 0.516 * u),
                (s = u - c),
                (o = Math.cos(h + G) * s),
                (i = Math.sin(h + G) * s),
                t.arc(r - o, n - i, c, h - W, h - Q),
                t.arc(r + i, n - o, c, h - Q, h),
                t.arc(r + o, n + i, c, h, h + Q),
                t.arc(r - i, n + o, c, h + Q, h + W),
                t.closePath();
              break;
            case "rect":
              if (!d) {
                (s = Math.SQRT1_2 * u), t.rect(r - s, n - s, 2 * s, 2 * s);
                break;
              }
              h += G;
            case "rectRot":
              (o = Math.cos(h) * u),
                (i = Math.sin(h) * u),
                t.moveTo(r - o, n - i),
                t.lineTo(r + i, n - o),
                t.lineTo(r + o, n + i),
                t.lineTo(r - i, n + o),
                t.closePath();
              break;
            case "crossRot":
              h += G;
            case "cross":
              (o = Math.cos(h) * u),
                (i = Math.sin(h) * u),
                t.moveTo(r - o, n - i),
                t.lineTo(r + o, n + i),
                t.moveTo(r + i, n - o),
                t.lineTo(r - i, n + o);
              break;
            case "star":
              (o = Math.cos(h) * u),
                (i = Math.sin(h) * u),
                t.moveTo(r - o, n - i),
                t.lineTo(r + o, n + i),
                t.moveTo(r + i, n - o),
                t.lineTo(r - i, n + o),
                (h += G),
                (o = Math.cos(h) * u),
                (i = Math.sin(h) * u),
                t.moveTo(r - o, n - i),
                t.lineTo(r + o, n + i),
                t.moveTo(r + i, n - o),
                t.lineTo(r - i, n + o);
              break;
            case "line":
              (o = Math.cos(h) * u),
                (i = Math.sin(h) * u),
                t.moveTo(r - o, n - i),
                t.lineTo(r + o, n + i);
              break;
            case "dash":
              t.moveTo(r, n),
                t.lineTo(r + Math.cos(h) * u, n + Math.sin(h) * u);
              break;
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function we(t, e, r) {
        return (
          (r = r || 0.5),
          t &&
            t.x > e.left - r &&
            t.x < e.right + r &&
            t.y > e.top - r &&
            t.y < e.bottom + r
        );
      }
      function ke(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function Me(t) {
        t.restore();
      }
      function Ce(t, e, r, n, a) {
        if (!e) return t.lineTo(r.x, r.y);
        if ("middle" === a) {
          const n = (e.x + r.x) / 2;
          t.lineTo(n, e.y), t.lineTo(n, r.y);
        } else
          ("after" === a) !== !!n ? t.lineTo(e.x, r.y) : t.lineTo(r.x, e.y);
        t.lineTo(r.x, r.y);
      }
      function Pe(t, e, r, n) {
        if (!e) return t.lineTo(r.x, r.y);
        t.bezierCurveTo(
          n ? e.cp1x : e.cp2x,
          n ? e.cp1y : e.cp2y,
          n ? r.cp2x : r.cp1x,
          n ? r.cp2y : r.cp1y,
          r.x,
          r.y
        );
      }
      function Se(t, e, r, n, a, o = {}) {
        const i = _(e) ? e : [e],
          s = o.strokeWidth > 0 && "" !== o.strokeColor;
        let c, l;
        for (
          t.save(),
            o.translation && t.translate(o.translation[0], o.translation[1]),
            x(o.rotation) || t.rotate(o.rotation),
            t.font = a.string,
            o.color && (t.fillStyle = o.color),
            o.textAlign && (t.textAlign = o.textAlign),
            o.textBaseline && (t.textBaseline = o.textBaseline),
            c = 0;
          c < i.length;
          ++c
        ) {
          if (
            ((l = i[c]),
            s &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              x(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(l, r, n, o.maxWidth)),
            t.fillText(l, r, n, o.maxWidth),
            o.strikethrough || o.underline)
          ) {
            const e = t.measureText(l),
              a = r - e.actualBoundingBoxLeft,
              i = r + e.actualBoundingBoxRight,
              s = n - e.actualBoundingBoxAscent,
              c = n + e.actualBoundingBoxDescent,
              d = o.strikethrough ? (s + c) / 2 : c;
            (t.strokeStyle = t.fillStyle),
              t.beginPath(),
              (t.lineWidth = o.decorationWidth || 2),
              t.moveTo(a, d),
              t.lineTo(i, d),
              t.stroke();
          }
          n += a.lineHeight;
        }
        t.restore();
      }
      function Te(t, e) {
        const { x: r, y: n, w: a, h: o, radius: i } = e;
        t.arc(r + i.topLeft, n + i.topLeft, i.topLeft, -Q, W, !0),
          t.lineTo(r, n + o - i.bottomLeft),
          t.arc(r + i.bottomLeft, n + o - i.bottomLeft, i.bottomLeft, W, Q, !0),
          t.lineTo(r + a - i.bottomRight, n + o),
          t.arc(
            r + a - i.bottomRight,
            n + o - i.bottomRight,
            i.bottomRight,
            Q,
            0,
            !0
          ),
          t.lineTo(r + a, n + i.topRight),
          t.arc(r + a - i.topRight, n + i.topRight, i.topRight, 0, -Q, !0),
          t.lineTo(r + i.topLeft, n);
      }
      const De = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        Re = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        );
      function Oe(t, e) {
        const r = ("" + t).match(De);
        if (!r || "normal" === r[1]) return 1.2 * e;
        switch (((t = +r[2]), r[3])) {
          case "px":
            return t;
          case "%":
            t /= 100;
            break;
        }
        return e * t;
      }
      const Ae = (t) => +t || 0;
      function Ee(t, e) {
        const r = {},
          n = y(e),
          a = n ? Object.keys(e) : e,
          o = y(t) ? (n ? (r) => M(t[r], t[e[r]]) : (e) => t[e]) : () => t;
        for (const i of a) r[i] = Ae(o(i));
        return r;
      }
      function Ie(t) {
        return Ee(t, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function Le(t) {
        return Ee(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function Fe(t) {
        const e = Ie(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function Ne(t, e) {
        (t = t || {}), (e = e || ge.font);
        let r = M(t.size, e.size);
        "string" === typeof r && (r = parseInt(r, 10));
        let n = M(t.style, e.style);
        n &&
          !("" + n).match(Re) &&
          (console.warn('Invalid font style specified: "' + n + '"'), (n = ""));
        const a = {
          family: M(t.family, e.family),
          lineHeight: Oe(M(t.lineHeight, e.lineHeight), r),
          size: r,
          style: n,
          weight: M(t.weight, e.weight),
          string: "",
        };
        return (a.string = me(a)), a;
      }
      function je(t, e, r, n) {
        let a,
          o,
          i,
          s = !0;
        for (a = 0, o = t.length; a < o; ++a)
          if (
            ((i = t[a]),
            void 0 !== i &&
              (void 0 !== e &&
                "function" === typeof i &&
                ((i = i(e)), (s = !1)),
              void 0 !== r && _(i) && ((i = i[r % i.length]), (s = !1)),
              void 0 !== i))
          )
            return n && !s && (n.cacheable = !1), i;
      }
      function Ue(t, e) {
        const { min: r, max: n } = t;
        return { min: r - Math.abs(P(e, r)), max: n + P(e, n) };
      }
      function ze(t, e, r) {
        r = r || ((r) => t[r] < e);
        let n,
          a = t.length - 1,
          o = 0;
        while (a - o > 1) (n = (o + a) >> 1), r(n) ? (o = n) : (a = n);
        return { lo: o, hi: a };
      }
      const Be = (t, e, r) => ze(t, r, (n) => t[n][e] < r),
        Ve = (t, e, r) => ze(t, r, (n) => t[n][e] >= r);
      function $e(t, e, r) {
        let n = 0,
          a = t.length;
        while (n < a && t[n] < e) n++;
        while (a > n && t[a - 1] > r) a--;
        return n > 0 || a < t.length ? t.slice(n, a) : t;
      }
      const We = ["push", "pop", "shift", "splice", "unshift"];
      function He(t, e) {
        t._chartjs
          ? t._chartjs.listeners.push(e)
          : (Object.defineProperty(t, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [e] },
            }),
            We.forEach((e) => {
              const r = "_onData" + z(e),
                n = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value(...e) {
                  const a = n.apply(this, e);
                  return (
                    t._chartjs.listeners.forEach((t) => {
                      "function" === typeof t[r] && t[r](...e);
                    }),
                    a
                  );
                },
              });
            }));
      }
      function qe(t, e) {
        const r = t._chartjs;
        if (!r) return;
        const n = r.listeners,
          a = n.indexOf(e);
        -1 !== a && n.splice(a, 1),
          n.length > 0 ||
            (We.forEach((e) => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function Ye(t) {
        const e = new Set();
        let r, n;
        for (r = 0, n = t.length; r < n; ++r) e.add(t[r]);
        if (e.size === n) return t;
        const a = [];
        return (
          e.forEach((t) => {
            a.push(t);
          }),
          a
        );
      }
      function Xe(t, e = [""], r = t, n, a = () => t[0]) {
        B(n) || (n = dr("_fallback", t));
        const o = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: t,
          _rootScopes: r,
          _fallback: n,
          _getTarget: a,
          override: (a) => Xe([a, ...t], e, r, n),
        };
        return new Proxy(o, {
          deleteProperty(e, r) {
            return delete e[r], delete e._keys, delete t[0][r], !0;
          },
          get(r, n) {
            return Ze(r, n, () => lr(n, e, t, r));
          },
          getOwnPropertyDescriptor(t, e) {
            return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
          },
          getPrototypeOf() {
            return Reflect.getPrototypeOf(t[0]);
          },
          has(t, e) {
            return ur(t).includes(e);
          },
          ownKeys(t) {
            return ur(t);
          },
          set(t, e, r) {
            const n = t._storage || (t._storage = a());
            return (n[e] = r), delete t[e], delete t._keys, !0;
          },
        });
      }
      function Qe(t, e, r, n) {
        const a = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: r,
          _stack: new Set(),
          _descriptors: Ge(t, n),
          setContext: (e) => Qe(t, e, r, n),
          override: (a) => Qe(t.override(a), e, r, n),
        };
        return new Proxy(a, {
          deleteProperty(e, r) {
            return delete e[r], delete t[r], !0;
          },
          get(t, e, r) {
            return Ze(t, e, () => tr(t, e, r));
          },
          getOwnPropertyDescriptor(e, r) {
            return e._descriptors.allKeys
              ? Reflect.has(t, r)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, r);
          },
          getPrototypeOf() {
            return Reflect.getPrototypeOf(t);
          },
          has(e, r) {
            return Reflect.has(t, r);
          },
          ownKeys() {
            return Reflect.ownKeys(t);
          },
          set(e, r, n) {
            return (t[r] = n), delete e[r], !0;
          },
        });
      }
      function Ge(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: r = e.scriptable,
          _indexable: n = e.indexable,
          _allKeys: a = e.allKeys,
        } = t;
        return {
          allKeys: a,
          scriptable: r,
          indexable: n,
          isScriptable: V(r) ? r : () => r,
          isIndexable: V(n) ? n : () => n,
        };
      }
      const Je = (t, e) => (t ? t + z(e) : e),
        Ke = (t, e) => y(e) && "adapters" !== t;
      function Ze(t, e, r) {
        let n = t[e];
        return B(n) || ((n = r()), B(n) && (t[e] = n)), n;
      }
      function tr(t, e, r) {
        const { _proxy: n, _context: a, _subProxy: o, _descriptors: i } = t;
        let s = n[e];
        return (
          V(s) && i.isScriptable(e) && (s = er(e, s, t, r)),
          _(s) && s.length && (s = rr(e, s, t, i.isIndexable)),
          Ke(e, s) && (s = Qe(s, a, o && o[e], i)),
          s
        );
      }
      function er(t, e, r, n) {
        const { _proxy: a, _context: o, _subProxy: i, _stack: s } = r;
        if (s.has(t))
          throw new Error(
            "Recursion detected: " + [...s].join("->") + "->" + t
          );
        return (
          s.add(t),
          (e = e(o, i || n)),
          s.delete(t),
          y(e) && (e = ir(a._scopes, a, t, e)),
          e
        );
      }
      function rr(t, e, r, n) {
        const { _proxy: a, _context: o, _subProxy: i, _descriptors: s } = r;
        if (B(o.index) && n(t)) e = e[o.index % e.length];
        else if (y(e[0])) {
          const r = e,
            n = a._scopes.filter((t) => t !== r);
          e = [];
          for (const c of r) {
            const r = ir(n, a, t, c);
            e.push(Qe(r, o, i && i[t], s));
          }
        }
        return e;
      }
      function nr(t, e, r) {
        return V(t) ? t(e, r) : t;
      }
      const ar = (t, e) =>
        !0 === t ? e : "string" === typeof t ? U(e, t) : void 0;
      function or(t, e, r, n) {
        for (const a of e) {
          const e = ar(r, a);
          if (e) {
            t.add(e);
            const a = nr(e._fallback, r, e);
            if (B(a) && a !== r && a !== n) return a;
          } else if (!1 === e && B(n) && r !== n) return null;
        }
        return !1;
      }
      function ir(t, e, r, n) {
        const a = e._rootScopes,
          o = nr(e._fallback, r, n),
          i = [...t, ...a],
          s = new Set();
        s.add(n);
        let c = sr(s, i, r, o || r);
        return (
          null !== c &&
          (!B(o) || o === r || ((c = sr(s, i, o, c)), null !== c)) &&
          Xe([...s], [""], a, o, () => cr(e, r, n))
        );
      }
      function sr(t, e, r, n) {
        while (r) r = or(t, e, r, n);
        return r;
      }
      function cr(t, e, r) {
        const n = t._getTarget();
        e in n || (n[e] = {});
        const a = n[e];
        return _(a) && y(r) ? r : a;
      }
      function lr(t, e, r, n) {
        let a;
        for (const o of e)
          if (((a = dr(Je(o, t), r)), B(a)))
            return Ke(t, a) ? ir(r, n, t, a) : a;
      }
      function dr(t, e) {
        for (const r of e) {
          if (!r) continue;
          const e = r[t];
          if (B(e)) return e;
        }
      }
      function ur(t) {
        let e = t._keys;
        return e || (e = t._keys = hr(t._scopes)), e;
      }
      function hr(t) {
        const e = new Set();
        for (const r of t)
          for (const t of Object.keys(r).filter((t) => !t.startsWith("_")))
            e.add(t);
        return [...e];
      }
      const pr = Number.EPSILON || 1e-14,
        fr = (t, e) => e < t.length && !t[e].skip && t[e],
        gr = (t) => ("x" === t ? "y" : "x");
      function mr(t, e, r, n) {
        const a = t.skip ? e : t,
          o = e,
          i = r.skip ? e : r,
          s = dt(o, a),
          c = dt(i, o);
        let l = s / (s + c),
          d = c / (s + c);
        (l = isNaN(l) ? 0 : l), (d = isNaN(d) ? 0 : d);
        const u = n * l,
          h = n * d;
        return {
          previous: { x: o.x - u * (i.x - a.x), y: o.y - u * (i.y - a.y) },
          next: { x: o.x + h * (i.x - a.x), y: o.y + h * (i.y - a.y) },
        };
      }
      function vr(t, e, r) {
        const n = t.length;
        let a,
          o,
          i,
          s,
          c,
          l = fr(t, 0);
        for (let d = 0; d < n - 1; ++d)
          (c = l),
            (l = fr(t, d + 1)),
            c &&
              l &&
              (nt(e[d], 0, pr)
                ? (r[d] = r[d + 1] = 0)
                : ((a = r[d] / e[d]),
                  (o = r[d + 1] / e[d]),
                  (s = Math.pow(a, 2) + Math.pow(o, 2)),
                  s <= 9 ||
                    ((i = 3 / Math.sqrt(s)),
                    (r[d] = a * i * e[d]),
                    (r[d + 1] = o * i * e[d]))));
      }
      function br(t, e, r = "x") {
        const n = gr(r),
          a = t.length;
        let o,
          i,
          s,
          c = fr(t, 0);
        for (let l = 0; l < a; ++l) {
          if (((i = s), (s = c), (c = fr(t, l + 1)), !s)) continue;
          const a = s[r],
            d = s[n];
          i &&
            ((o = (a - i[r]) / 3),
            (s["cp1" + r] = a - o),
            (s["cp1" + n] = d - o * e[l])),
            c &&
              ((o = (c[r] - a) / 3),
              (s["cp2" + r] = a + o),
              (s["cp2" + n] = d + o * e[l]));
        }
      }
      function xr(t, e = "x") {
        const r = gr(e),
          n = t.length,
          a = Array(n).fill(0),
          o = Array(n);
        let i,
          s,
          c,
          l = fr(t, 0);
        for (i = 0; i < n; ++i)
          if (((s = c), (c = l), (l = fr(t, i + 1)), c)) {
            if (l) {
              const t = l[e] - c[e];
              a[i] = 0 !== t ? (l[r] - c[r]) / t : 0;
            }
            o[i] = s
              ? l
                ? Z(a[i - 1]) !== Z(a[i])
                  ? 0
                  : (a[i - 1] + a[i]) / 2
                : a[i - 1]
              : a[i];
          }
        vr(t, a, o), br(t, o, e);
      }
      function _r(t, e, r) {
        return Math.max(Math.min(t, r), e);
      }
      function yr(t, e) {
        let r,
          n,
          a,
          o,
          i,
          s = we(t[0], e);
        for (r = 0, n = t.length; r < n; ++r)
          (i = o),
            (o = s),
            (s = r < n - 1 && we(t[r + 1], e)),
            o &&
              ((a = t[r]),
              i &&
                ((a.cp1x = _r(a.cp1x, e.left, e.right)),
                (a.cp1y = _r(a.cp1y, e.top, e.bottom))),
              s &&
                ((a.cp2x = _r(a.cp2x, e.left, e.right)),
                (a.cp2y = _r(a.cp2y, e.top, e.bottom))));
      }
      function wr(t, e, r, n, a) {
        let o, i, s, c;
        if (
          (e.spanGaps && (t = t.filter((t) => !t.skip)),
          "monotone" === e.cubicInterpolationMode)
        )
          xr(t, a);
        else {
          let r = n ? t[t.length - 1] : t[0];
          for (o = 0, i = t.length; o < i; ++o)
            (s = t[o]),
              (c = mr(
                r,
                s,
                t[Math.min(o + 1, i - (n ? 0 : 1)) % i],
                e.tension
              )),
              (s.cp1x = c.previous.x),
              (s.cp1y = c.previous.y),
              (s.cp2x = c.next.x),
              (s.cp2y = c.next.y),
              (r = s);
        }
        e.capBezierPoints && yr(t, r);
      }
      function kr(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
      }
      function Mr(t, e, r) {
        let n;
        return (
          "string" === typeof t
            ? ((n = parseInt(t, 10)),
              -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[r]))
            : (n = t),
          n
        );
      }
      const Cr = (t) => window.getComputedStyle(t, null);
      function Pr(t, e) {
        return Cr(t).getPropertyValue(e);
      }
      const Sr = ["top", "right", "bottom", "left"];
      function Tr(t, e, r) {
        const n = {};
        r = r ? "-" + r : "";
        for (let a = 0; a < 4; a++) {
          const o = Sr[a];
          n[o] = parseFloat(t[e + "-" + o + r]) || 0;
        }
        return (n.width = n.left + n.right), (n.height = n.top + n.bottom), n;
      }
      const Dr = (t, e, r) => (t > 0 || e > 0) && (!r || !r.shadowRoot);
      function Rr(t, e) {
        const r = t.native || t,
          n = r.touches,
          a = n && n.length ? n[0] : r,
          { offsetX: o, offsetY: i } = a;
        let s,
          c,
          l = !1;
        if (Dr(o, i, r.target)) (s = o), (c = i);
        else {
          const t = e.getBoundingClientRect();
          (s = a.clientX - t.left), (c = a.clientY - t.top), (l = !0);
        }
        return { x: s, y: c, box: l };
      }
      function Or(t, e) {
        const { canvas: r, currentDevicePixelRatio: n } = e,
          a = Cr(r),
          o = "border-box" === a.boxSizing,
          i = Tr(a, "padding"),
          s = Tr(a, "border", "width"),
          { x: c, y: l, box: d } = Rr(t, r),
          u = i.left + (d && s.left),
          h = i.top + (d && s.top);
        let { width: p, height: f } = e;
        return (
          o && ((p -= i.width + s.width), (f -= i.height + s.height)),
          {
            x: Math.round((((c - u) / p) * r.width) / n),
            y: Math.round((((l - h) / f) * r.height) / n),
          }
        );
      }
      function Ar(t, e, r) {
        let n, a;
        if (void 0 === e || void 0 === r) {
          const o = kr(t);
          if (o) {
            const t = o.getBoundingClientRect(),
              i = Cr(o),
              s = Tr(i, "border", "width"),
              c = Tr(i, "padding");
            (e = t.width - c.width - s.width),
              (r = t.height - c.height - s.height),
              (n = Mr(i.maxWidth, o, "clientWidth")),
              (a = Mr(i.maxHeight, o, "clientHeight"));
          } else (e = t.clientWidth), (r = t.clientHeight);
        }
        return { width: e, height: r, maxWidth: n || Y, maxHeight: a || Y };
      }
      const Er = (t) => Math.round(10 * t) / 10;
      function Ir(t, e, r, n) {
        const a = Cr(t),
          o = Tr(a, "margin"),
          i = Mr(a.maxWidth, t, "clientWidth") || Y,
          s = Mr(a.maxHeight, t, "clientHeight") || Y,
          c = Ar(t, e, r);
        let { width: l, height: d } = c;
        if ("content-box" === a.boxSizing) {
          const t = Tr(a, "border", "width"),
            e = Tr(a, "padding");
          (l -= e.width + t.width), (d -= e.height + t.height);
        }
        return (
          (l = Math.max(0, l - o.width)),
          (d = Math.max(0, n ? Math.floor(l / n) : d - o.height)),
          (l = Er(Math.min(l, i, c.maxWidth))),
          (d = Er(Math.min(d, s, c.maxHeight))),
          l && !d && (d = Er(l / 2)),
          { width: l, height: d }
        );
      }
      function Lr(t, e, r) {
        const n = e || 1,
          a = Math.floor(t.height * n),
          o = Math.floor(t.width * n);
        (t.height = a / n), (t.width = o / n);
        const i = t.canvas;
        return (
          i.style &&
            (r || (!i.style.height && !i.style.width)) &&
            ((i.style.height = t.height + "px"),
            (i.style.width = t.width + "px")),
          (t.currentDevicePixelRatio !== n ||
            i.height !== a ||
            i.width !== o) &&
            ((t.currentDevicePixelRatio = n),
            (i.height = a),
            (i.width = o),
            t.ctx.setTransform(n, 0, 0, n, 0, 0),
            !0)
        );
      }
      const Fr = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e);
        } catch (e) {}
        return t;
      })();
      function Nr(t, e) {
        const r = Pr(t, e),
          n = r && r.match(/^(\d+)(\.\d+)?px$/);
        return n ? +n[1] : void 0;
      }
      function jr(t, e, r, n) {
        return { x: t.x + r * (e.x - t.x), y: t.y + r * (e.y - t.y) };
      }
      function Ur(t, e, r, n) {
        return {
          x: t.x + r * (e.x - t.x),
          y:
            "middle" === n
              ? r < 0.5
                ? t.y
                : e.y
              : "after" === n
              ? r < 1
                ? t.y
                : e.y
              : r > 0
              ? e.y
              : t.y,
        };
      }
      function zr(t, e, r, n) {
        const a = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          i = jr(t, a, r),
          s = jr(a, o, r),
          c = jr(o, e, r),
          l = jr(i, s, r),
          d = jr(s, c, r);
        return jr(l, d, r);
      }
      const Br = new Map();
      function Vr(t, e) {
        e = e || {};
        const r = t + JSON.stringify(e);
        let n = Br.get(r);
        return n || ((n = new Intl.NumberFormat(t, e)), Br.set(r, n)), n;
      }
      function $r(t, e, r) {
        return Vr(e, r).format(t);
      }
      const Wr = function (t, e) {
          return {
            x(r) {
              return t + t + e - r;
            },
            setWidth(t) {
              e = t;
            },
            textAlign(t) {
              return "center" === t ? t : "right" === t ? "left" : "right";
            },
            xPlus(t, e) {
              return t - e;
            },
            leftForLtr(t, e) {
              return t - e;
            },
          };
        },
        Hr = function () {
          return {
            x(t) {
              return t;
            },
            setWidth(t) {},
            textAlign(t) {
              return t;
            },
            xPlus(t, e) {
              return t + e;
            },
            leftForLtr(t, e) {
              return t;
            },
          };
        };
      function qr(t, e, r) {
        return t ? Wr(e, r) : Hr();
      }
      function Yr(t, e) {
        let r, n;
        ("ltr" !== e && "rtl" !== e) ||
          ((r = t.canvas.style),
          (n = [
            r.getPropertyValue("direction"),
            r.getPropertyPriority("direction"),
          ]),
          r.setProperty("direction", e, "important"),
          (t.prevTextDirection = n));
      }
      function Xr(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      }
      function Qr(t) {
        return "angle" === t
          ? { between: pt, compare: ut, normalize: ht }
          : {
              between: (t, e, r) => t >= Math.min(e, r) && t <= Math.max(r, e),
              compare: (t, e) => t - e,
              normalize: (t) => t,
            };
      }
      function Gr({ start: t, end: e, count: r, loop: n, style: a }) {
        return {
          start: t % r,
          end: e % r,
          loop: n && (e - t + 1) % r === 0,
          style: a,
        };
      }
      function Jr(t, e, r) {
        const { property: n, start: a, end: o } = r,
          { between: i, normalize: s } = Qr(n),
          c = e.length;
        let l,
          d,
          { start: u, end: h, loop: p } = t;
        if (p) {
          for (u += c, h += c, l = 0, d = c; l < d; ++l) {
            if (!i(s(e[u % c][n]), a, o)) break;
            u--, h--;
          }
          (u %= c), (h %= c);
        }
        return h < u && (h += c), { start: u, end: h, loop: p, style: t.style };
      }
      function Kr(t, e, r) {
        if (!r) return [t];
        const { property: n, start: a, end: o } = r,
          i = e.length,
          { compare: s, between: c, normalize: l } = Qr(n),
          { start: d, end: u, loop: h, style: p } = Jr(t, e, r),
          f = [];
        let g,
          m,
          v,
          b = !1,
          x = null;
        const _ = () => c(a, v, g) && 0 !== s(a, v),
          y = () => 0 === s(o, g) || c(o, v, g),
          w = () => b || _(),
          k = () => !b || y();
        for (let M = d, C = d; M <= u; ++M)
          (m = e[M % i]),
            m.skip ||
              ((g = l(m[n])),
              g !== v &&
                ((b = c(g, a, o)),
                null === x && w() && (x = 0 === s(g, a) ? M : C),
                null !== x &&
                  k() &&
                  (f.push(
                    Gr({ start: x, end: M, loop: h, count: i, style: p })
                  ),
                  (x = null)),
                (C = M),
                (v = g)));
        return (
          null !== x &&
            f.push(Gr({ start: x, end: u, loop: h, count: i, style: p })),
          f
        );
      }
      function Zr(t, e) {
        const r = [],
          n = t.segments;
        for (let a = 0; a < n.length; a++) {
          const o = Kr(n[a], t.points, e);
          o.length && r.push(...o);
        }
        return r;
      }
      function tn(t, e, r, n) {
        let a = 0,
          o = e - 1;
        if (r && !n) while (a < e && !t[a].skip) a++;
        while (a < e && t[a].skip) a++;
        (a %= e), r && (o += a);
        while (o > a && t[o % e].skip) o--;
        return (o %= e), { start: a, end: o };
      }
      function en(t, e, r, n) {
        const a = t.length,
          o = [];
        let i,
          s = e,
          c = t[e];
        for (i = e + 1; i <= r; ++i) {
          const r = t[i % a];
          r.skip || r.stop
            ? c.skip ||
              ((n = !1),
              o.push({ start: e % a, end: (i - 1) % a, loop: n }),
              (e = s = r.stop ? i : null))
            : ((s = i), c.skip && (e = i)),
            (c = r);
        }
        return null !== s && o.push({ start: e % a, end: s % a, loop: n }), o;
      }
      function rn(t, e) {
        const r = t.points,
          n = t.options.spanGaps,
          a = r.length;
        if (!a) return [];
        const o = !!t._loop,
          { start: i, end: s } = tn(r, a, o, n);
        if (!0 === n) return nn([{ start: i, end: s, loop: o }], r, e);
        const c = s < i ? s + a : s,
          l = !!t._fullLoop && 0 === i && s === a - 1;
        return nn(en(r, i, c, l), r, e);
      }
      function nn(t, e, r) {
        return r && r.setContext && e ? an(t, e, r) : t;
      }
      function an(t, e, r) {
        const n = e.length,
          a = [];
        let o = t[0].start,
          i = o;
        for (const s of t) {
          let t,
            c,
            l = e[o % n];
          for (i = o + 1; i <= s.end; i++) {
            const d = e[i % n];
            (c = on(r.setContext({ type: "segment", p0: l, p1: d }))),
              sn(c, t) &&
                (a.push({ start: o, end: i - 1, loop: s.loop, style: t }),
                (t = c),
                (o = i - 1)),
              (l = d),
              (t = c);
          }
          o < i - 1 &&
            (a.push({ start: o, end: i - 1, loop: s.loop, style: c }),
            (o = i - 1));
        }
        return a;
      }
      function on(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function sn(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e);
      }
      /*!
       * Chart.js v3.3.2
       * https://www.chartjs.org
       * (c) 2021 Chart.js Contributors
       * Released under the MIT License
       */ class cn {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(t, e, r, n) {
          const a = e.listeners[n],
            o = e.duration;
          a.forEach((n) =>
            n({
              chart: t,
              initial: e.initial,
              numSteps: o,
              currentStep: Math.min(r - e.start, o),
            })
          );
        }
        _refresh() {
          const t = this;
          t._request ||
            ((t._running = !0),
            (t._request = p.call(window, () => {
              t._update(), (t._request = null), t._running && t._refresh();
            })));
        }
        _update(t = Date.now()) {
          const e = this;
          let r = 0;
          e._charts.forEach((n, a) => {
            if (!n.running || !n.items.length) return;
            const o = n.items;
            let i,
              s = o.length - 1,
              c = !1;
            for (; s >= 0; --s)
              (i = o[s]),
                i._active
                  ? (i._total > n.duration && (n.duration = i._total),
                    i.tick(t),
                    (c = !0))
                  : ((o[s] = o[o.length - 1]), o.pop());
            c && (a.draw(), e._notify(a, n, t, "progress")),
              o.length ||
                ((n.running = !1),
                e._notify(a, n, t, "complete"),
                (n.initial = !1)),
              (r += o.length);
          }),
            (e._lastDate = t),
            0 === r && (e._running = !1);
        }
        _getAnims(t) {
          const e = this._charts;
          let r = e.get(t);
          return (
            r ||
              ((r = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, r)),
            r
          );
        }
        listen(t, e, r) {
          this._getAnims(t).listeners[e].push(r);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce(
              (t, e) => Math.max(t, e._duration),
              0
            )),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const r = e.items;
          let n = r.length - 1;
          for (; n >= 0; --n) r[n].cancel();
          (e.items = []), this._notify(t, e, Date.now(), "complete");
        }
        remove(t) {
          return this._charts.delete(t);
        }
      }
      var ln = new cn();
      const dn = "transparent",
        un = {
          boolean(t, e, r) {
            return r > 0.5 ? e : t;
          },
          color(t, e, r) {
            const n = ce(t || dn),
              a = n.valid && ce(e || dn);
            return a && a.valid ? a.mix(n, r).hexString() : e;
          },
          number(t, e, r) {
            return t + (e - t) * r;
          },
        };
      class hn {
        constructor(t, e, r, n) {
          const a = e[r];
          n = je([t.to, n, a, t.from]);
          const o = je([t.from, a, n]);
          (this._active = !0),
            (this._fn = t.fn || un[t.type || typeof o]),
            (this._easing = xt[t.easing] || xt.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = r),
            (this._from = o),
            (this._to = n),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(t, e, r) {
          const n = this;
          if (n._active) {
            n._notify(!1);
            const a = n._target[n._prop],
              o = r - n._start,
              i = n._duration - o;
            (n._start = r),
              (n._duration = Math.floor(Math.max(i, t.duration))),
              (n._total += o),
              (n._loop = !!t.loop),
              (n._to = je([t.to, e, a, t.from])),
              (n._from = je([t.from, a, e]));
          }
        }
        cancel() {
          const t = this;
          t._active && (t.tick(Date.now()), (t._active = !1), t._notify(!1));
        }
        tick(t) {
          const e = this,
            r = t - e._start,
            n = e._duration,
            a = e._prop,
            o = e._from,
            i = e._loop,
            s = e._to;
          let c;
          if (((e._active = o !== s && (i || r < n)), !e._active))
            return (e._target[a] = s), void e._notify(!0);
          r < 0
            ? (e._target[a] = o)
            : ((c = (r / n) % 2),
              (c = i && c > 1 ? 2 - c : c),
              (c = e._easing(Math.min(1, Math.max(0, c)))),
              (e._target[a] = e._fn(o, s, c)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, r) => {
            t.push({ res: e, rej: r });
          });
        }
        _notify(t) {
          const e = t ? "res" : "rej",
            r = this._promises || [];
          for (let n = 0; n < r.length; n++) r[n][e]();
        }
      }
      const pn = ["x", "y", "borderWidth", "radius", "tension"],
        fn = ["color", "borderColor", "backgroundColor"];
      ge.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      const gn = Object.keys(ge.animation);
      ge.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (t) =>
          "onProgress" !== t && "onComplete" !== t && "fn" !== t,
      }),
        ge.set("animations", {
          colors: { type: "color", properties: fn },
          numbers: { type: "number", properties: pn },
        }),
        ge.describe("animations", { _fallback: "animation" }),
        ge.set("transitions", {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: "transparent" },
              visible: { type: "boolean", duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: "transparent" },
              visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t },
            },
          },
        });
      class mn {
        constructor(t, e) {
          (this._chart = t), (this._properties = new Map()), this.configure(e);
        }
        configure(t) {
          if (!y(t)) return;
          const e = this._properties;
          Object.getOwnPropertyNames(t).forEach((r) => {
            const n = t[r];
            if (!y(n)) return;
            const a = {};
            for (const t of gn) a[t] = n[t];
            ((_(n.properties) && n.properties) || [r]).forEach((t) => {
              (t !== r && e.has(t)) || e.set(t, a);
            });
          });
        }
        _animateOptions(t, e) {
          const r = e.options,
            n = bn(t, r);
          if (!n) return [];
          const a = this._createAnimations(n, r);
          return (
            r.$shared &&
              vn(t.options.$animations, r).then(
                () => {
                  t.options = r;
                },
                () => {}
              ),
            a
          );
        }
        _createAnimations(t, e) {
          const r = this._properties,
            n = [],
            a = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            i = Date.now();
          let s;
          for (s = o.length - 1; s >= 0; --s) {
            const c = o[s];
            if ("$" === c.charAt(0)) continue;
            if ("options" === c) {
              n.push(...this._animateOptions(t, e));
              continue;
            }
            const l = e[c];
            let d = a[c];
            const u = r.get(c);
            if (d) {
              if (u && d.active()) {
                d.update(u, l, i);
                continue;
              }
              d.cancel();
            }
            u && u.duration
              ? ((a[c] = d = new hn(u, t, c, l)), n.push(d))
              : (t[c] = l);
          }
          return n;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const r = this._createAnimations(t, e);
          return r.length ? (ln.add(this._chart, r), !0) : void 0;
        }
      }
      function vn(t, e) {
        const r = [],
          n = Object.keys(e);
        for (let a = 0; a < n.length; a++) {
          const e = t[n[a]];
          e && e.active() && r.push(e.wait());
        }
        return Promise.all(r);
      }
      function bn(t, e) {
        if (!e) return;
        let r = t.options;
        if (r)
          return (
            r.$shared &&
              (t.options = r =
                Object.assign({}, r, { $shared: !1, $animations: {} })),
            r
          );
        t.options = e;
      }
      function xn(t, e) {
        const r = (t && t.options) || {},
          n = r.reverse,
          a = void 0 === r.min ? e : 0,
          o = void 0 === r.max ? e : 0;
        return { start: n ? o : a, end: n ? a : o };
      }
      function _n(t, e, r) {
        if (!1 === r) return !1;
        const n = xn(t, r),
          a = xn(e, r);
        return { top: a.end, right: n.end, bottom: a.start, left: n.start };
      }
      function yn(t) {
        let e, r, n, a;
        return (
          y(t)
            ? ((e = t.top), (r = t.right), (n = t.bottom), (a = t.left))
            : (e = r = n = a = t),
          { top: e, right: r, bottom: n, left: a }
        );
      }
      function wn(t, e) {
        const r = [],
          n = t._getSortedDatasetMetas(e);
        let a, o;
        for (a = 0, o = n.length; a < o; ++a) r.push(n[a].index);
        return r;
      }
      function kn(t, e, r, n) {
        const a = t.keys,
          o = "single" === n.mode;
        let i, s, c, l;
        if (null !== e) {
          for (i = 0, s = a.length; i < s; ++i) {
            if (((c = +a[i]), c === r)) {
              if (n.all) continue;
              break;
            }
            (l = t.values[c]),
              w(l) && (o || 0 === e || Z(e) === Z(l)) && (e += l);
          }
          return e;
        }
      }
      function Mn(t) {
        const e = Object.keys(t),
          r = new Array(e.length);
        let n, a, o;
        for (n = 0, a = e.length; n < a; ++n)
          (o = e[n]), (r[n] = { x: o, y: t[o] });
        return r;
      }
      function Cn(t, e) {
        const r = t && t.options.stacked;
        return r || (void 0 === r && void 0 !== e.stack);
      }
      function Pn(t, e, r) {
        return `${t.id}.${e.id}.${r.stack || r.type}`;
      }
      function Sn(t) {
        const {
          min: e,
          max: r,
          minDefined: n,
          maxDefined: a,
        } = t.getUserBounds();
        return {
          min: n ? e : Number.NEGATIVE_INFINITY,
          max: a ? r : Number.POSITIVE_INFINITY,
        };
      }
      function Tn(t, e, r) {
        const n = t[e] || (t[e] = {});
        return n[r] || (n[r] = {});
      }
      function Dn(t, e, r) {
        for (const n of e.getMatchingVisibleMetas("bar").reverse()) {
          const e = t[n.index];
          if ((r && e > 0) || (!r && e < 0)) return n.index;
        }
        return null;
      }
      function Rn(t, e) {
        const { chart: r, _cachedMeta: n } = t,
          a = r._stacks || (r._stacks = {}),
          { iScale: o, vScale: i, index: s } = n,
          c = o.axis,
          l = i.axis,
          d = Pn(o, i, n),
          u = e.length;
        let h;
        for (let p = 0; p < u; ++p) {
          const t = e[p],
            { [c]: r, [l]: n } = t,
            o = t._stacks || (t._stacks = {});
          (h = o[l] = Tn(a, d, r)),
            (h[s] = n),
            (h._top = Dn(h, i, !0)),
            (h._bottom = Dn(h, i, !1));
        }
      }
      function On(t, e) {
        const r = t.scales;
        return Object.keys(r)
          .filter((t) => r[t].axis === e)
          .shift();
      }
      function An(t, e) {
        return Object.assign(Object.create(t), {
          active: !1,
          dataset: void 0,
          datasetIndex: e,
          index: e,
          mode: "default",
          type: "dataset",
        });
      }
      function En(t, e, r) {
        return Object.assign(Object.create(t), {
          active: !1,
          dataIndex: e,
          parsed: void 0,
          raw: void 0,
          element: r,
          index: e,
          mode: "default",
          type: "data",
        });
      }
      function In(t, e) {
        const r = t.vScale && t.vScale.axis;
        if (r) {
          e = e || t._parsed;
          for (const n of e) {
            const e = n._stacks;
            if (!e || void 0 === e[r] || void 0 === e[r][t.index]) return;
            delete e[r][t.index];
          }
        }
      }
      const Ln = (t) => "reset" === t || "none" === t,
        Fn = (t, e) => (e ? t : Object.assign({}, t));
      class Nn {
        constructor(t, e) {
          (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.$context = void 0),
            (this._syncList = []),
            this.initialize();
        }
        initialize() {
          const t = this,
            e = t._cachedMeta;
          t.configure(),
            t.linkScales(),
            (e._stacked = Cn(e.vScale, e)),
            t.addElements();
        }
        updateIndex(t) {
          this.index !== t && In(this._cachedMeta), (this.index = t);
        }
        linkScales() {
          const t = this,
            e = t.chart,
            r = t._cachedMeta,
            n = t.getDataset(),
            a = (t, e, r, n) => ("x" === t ? e : "r" === t ? n : r),
            o = (r.xAxisID = M(n.xAxisID, On(e, "x"))),
            i = (r.yAxisID = M(n.yAxisID, On(e, "y"))),
            s = (r.rAxisID = M(n.rAxisID, On(e, "r"))),
            c = r.indexAxis,
            l = (r.iAxisID = a(c, o, i, s)),
            d = (r.vAxisID = a(c, i, o, s));
          (r.xScale = t.getScaleForId(o)),
            (r.yScale = t.getScaleForId(i)),
            (r.rScale = t.getScaleForId(s)),
            (r.iScale = t.getScaleForId(l)),
            (r.vScale = t.getScaleForId(d));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update("reset");
        }
        _destroy() {
          const t = this._cachedMeta;
          this._data && qe(this._data, this), t._stacked && In(t);
        }
        _dataCheck() {
          const t = this,
            e = t.getDataset(),
            r = e.data || (e.data = []),
            n = t._data;
          if (y(r)) t._data = Mn(r);
          else if (n !== r) {
            if (n) {
              qe(n, t);
              const e = t._cachedMeta;
              In(e), (e._parsed = []);
            }
            r && Object.isExtensible(r) && He(r, t),
              (t._syncList = []),
              (t._data = r);
          }
        }
        addElements() {
          const t = this,
            e = t._cachedMeta;
          t._dataCheck(),
            t.datasetElementType && (e.dataset = new t.datasetElementType());
        }
        buildOrUpdateElements(t) {
          const e = this,
            r = e._cachedMeta,
            n = e.getDataset();
          let a = !1;
          e._dataCheck();
          const o = r._stacked;
          (r._stacked = Cn(r.vScale, r)),
            r.stack !== n.stack && ((a = !0), In(r), (r.stack = n.stack)),
            e._resyncElements(t),
            (a || o !== r._stacked) && Rn(e, r._parsed);
        }
        configure() {
          const t = this,
            e = t.chart.config,
            r = e.datasetScopeKeys(t._type),
            n = e.getOptionScopes(t.getDataset(), r, !0);
          (t.options = e.createResolver(n, t.getContext())),
            (t._parsing = t.options.parsing);
        }
        parse(t, e) {
          const r = this,
            { _cachedMeta: n, _data: a } = r,
            { iScale: o, _stacked: i } = n,
            s = o.axis;
          let c,
            l,
            d,
            u = (0 === t && e === a.length) || n._sorted,
            h = t > 0 && n._parsed[t - 1];
          if (!1 === r._parsing) (n._parsed = a), (n._sorted = !0), (d = a);
          else {
            d = _(a[t])
              ? r.parseArrayData(n, a, t, e)
              : y(a[t])
              ? r.parseObjectData(n, a, t, e)
              : r.parsePrimitiveData(n, a, t, e);
            const o = () => null === l[s] || (h && l[s] < h[s]);
            for (c = 0; c < e; ++c)
              (n._parsed[c + t] = l = d[c]), u && (o() && (u = !1), (h = l));
            n._sorted = u;
          }
          i && Rn(r, d);
        }
        parsePrimitiveData(t, e, r, n) {
          const { iScale: a, vScale: o } = t,
            i = a.axis,
            s = o.axis,
            c = a.getLabels(),
            l = a === o,
            d = new Array(n);
          let u, h, p;
          for (u = 0, h = n; u < h; ++u)
            (p = u + r),
              (d[u] = { [i]: l || a.parse(c[p], p), [s]: o.parse(e[p], p) });
          return d;
        }
        parseArrayData(t, e, r, n) {
          const { xScale: a, yScale: o } = t,
            i = new Array(n);
          let s, c, l, d;
          for (s = 0, c = n; s < c; ++s)
            (l = s + r),
              (d = e[l]),
              (i[s] = { x: a.parse(d[0], l), y: o.parse(d[1], l) });
          return i;
        }
        parseObjectData(t, e, r, n) {
          const { xScale: a, yScale: o } = t,
            { xAxisKey: i = "x", yAxisKey: s = "y" } = this._parsing,
            c = new Array(n);
          let l, d, u, h;
          for (l = 0, d = n; l < d; ++l)
            (u = l + r),
              (h = e[u]),
              (c[l] = { x: a.parse(U(h, i), u), y: o.parse(U(h, s), u) });
          return c;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, r) {
          const n = this.chart,
            a = this._cachedMeta,
            o = e[t.axis],
            i = { keys: wn(n, !0), values: e._stacks[t.axis] };
          return kn(i, o, a.index, { mode: r });
        }
        updateRangeFromParsed(t, e, r, n) {
          const a = r[e.axis];
          let o = null === a ? NaN : a;
          const i = n && r._stacks[e.axis];
          n &&
            i &&
            ((n.values = i),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o)),
            (o = kn(n, a, this._cachedMeta.index, { all: !0 }))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o));
        }
        getMinMax(t, e) {
          const r = this,
            n = r._cachedMeta,
            a = n._parsed,
            o = n._sorted && t === n.iScale,
            i = a.length,
            s = r._getOtherScale(t),
            c = e && n._stacked && { keys: wn(r.chart, !0), values: null },
            l = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            },
            { min: d, max: u } = Sn(s);
          let h, p, f, g;
          function m() {
            return (
              (f = a[h]),
              (p = f[t.axis]),
              (g = f[s.axis]),
              !w(p) || d > g || u < g
            );
          }
          for (h = 0; h < i; ++h)
            if (!m() && (r.updateRangeFromParsed(l, t, f, c), o)) break;
          if (o)
            for (h = i - 1; h >= 0; --h)
              if (!m()) {
                r.updateRangeFromParsed(l, t, f, c);
                break;
              }
          return l;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            r = [];
          let n, a, o;
          for (n = 0, a = e.length; n < a; ++n)
            (o = e[n][t.axis]), w(o) && r.push(o);
          return r;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this,
            r = e._cachedMeta,
            n = r.iScale,
            a = r.vScale,
            o = e.getParsed(t);
          return {
            label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
            value: a ? "" + a.getLabelForValue(o[a.axis]) : "",
          };
        }
        _update(t) {
          const e = this,
            r = e._cachedMeta;
          e.configure(),
            (e._cachedDataOpts = {}),
            e.update(t || "default"),
            (r._clip = yn(
              M(e.options.clip, _n(r.xScale, r.yScale, e.getMaxOverflow()))
            ));
        }
        update(t) {}
        draw() {
          const t = this,
            e = t._ctx,
            r = t.chart,
            n = t._cachedMeta,
            a = n.data || [],
            o = r.chartArea,
            i = [],
            s = t._drawStart || 0,
            c = t._drawCount || a.length - s;
          let l;
          for (n.dataset && n.dataset.draw(e, o, s, c), l = s; l < s + c; ++l) {
            const t = a[l];
            t.active ? i.push(t) : t.draw(e, o);
          }
          for (l = 0; l < i.length; ++l) i[l].draw(e, o);
        }
        getStyle(t, e) {
          const r = e ? "active" : "default";
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(r)
            : this.resolveDataElementOptions(t || 0, r);
        }
        getContext(t, e, r) {
          const n = this,
            a = n.getDataset();
          let o;
          if (t >= 0 && t < n._cachedMeta.data.length) {
            const e = n._cachedMeta.data[t];
            (o = e.$context || (e.$context = En(n.getContext(), t, e))),
              (o.parsed = n.getParsed(t)),
              (o.raw = a.data[t]),
              (o.index = o.dataIndex = t);
          } else
            (o =
              n.$context || (n.$context = An(n.chart.getContext(), n.index))),
              (o.dataset = a),
              (o.index = o.datasetIndex = n.index);
          return (o.active = !!e), (o.mode = r), o;
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = "default", r) {
          const n = this,
            a = "active" === e,
            o = n._cachedDataOpts,
            i = t + "-" + e,
            s = o[i],
            c = n.enableOptionSharing && B(r);
          if (s) return Fn(s, c);
          const l = n.chart.config,
            d = l.datasetElementScopeKeys(n._type, t),
            u = a ? [t + "Hover", "hover", t, ""] : [t, ""],
            h = l.getOptionScopes(n.getDataset(), d),
            p = Object.keys(ge.elements[t]),
            f = () => n.getContext(r, a),
            g = l.resolveNamedOptions(h, p, f, u);
          return (
            g.$shared && ((g.$shared = c), (o[i] = Object.freeze(Fn(g, c)))), g
          );
        }
        _resolveAnimations(t, e, r) {
          const n = this,
            a = n.chart,
            o = n._cachedDataOpts,
            i = "animation-" + e,
            s = o[i];
          if (s) return s;
          let c;
          if (!1 !== a.options.animation) {
            const a = n.chart.config,
              o = a.datasetAnimationScopeKeys(n._type, e),
              i = a.getOptionScopes(n.getDataset(), o);
            c = a.createResolver(i, n.getContext(t, r, e));
          }
          const l = new mn(a, c && c.animations);
          return c && c._cacheable && (o[i] = Object.freeze(l)), l;
        }
        getSharedOptions(t) {
          if (t.$shared)
            return (
              this._sharedOptions ||
              (this._sharedOptions = Object.assign({}, t))
            );
        }
        includeOptions(t, e) {
          return !e || Ln(t) || this.chart._animationsDisabled;
        }
        updateElement(t, e, r, n) {
          Ln(n)
            ? Object.assign(t, r)
            : this._resolveAnimations(e, n).update(t, r);
        }
        updateSharedOptions(t, e, r) {
          t && !Ln(e) && this._resolveAnimations(void 0, e).update(t, r);
        }
        _setStyle(t, e, r, n) {
          t.active = n;
          const a = this.getStyle(e, n);
          this._resolveAnimations(e, r, n).update(t, {
            options: (!n && this.getSharedOptions(a)) || a,
          });
        }
        removeHoverStyle(t, e, r) {
          this._setStyle(t, r, "active", !1);
        }
        setHoverStyle(t, e, r) {
          this._setStyle(t, r, "active", !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !0);
        }
        _resyncElements(t) {
          const e = this,
            r = e._data,
            n = e._cachedMeta.data;
          for (const [s, c, l] of e._syncList) e[s](c, l);
          e._syncList = [];
          const a = n.length,
            o = r.length,
            i = Math.min(o, a);
          i && e.parse(0, i),
            o > a
              ? e._insertElements(a, o - a, t)
              : o < a && e._removeElements(o, a - o);
        }
        _insertElements(t, e, r = !0) {
          const n = this,
            a = n._cachedMeta,
            o = a.data,
            i = t + e;
          let s;
          const c = (t) => {
            for (t.length += e, s = t.length - 1; s >= i; s--) t[s] = t[s - e];
          };
          for (c(o), s = t; s < i; ++s) o[s] = new n.dataElementType();
          n._parsing && c(a._parsed),
            n.parse(t, e),
            r && n.updateElements(o, t, e, "reset");
        }
        updateElements(t, e, r, n) {}
        _removeElements(t, e) {
          const r = this,
            n = r._cachedMeta;
          if (r._parsing) {
            const r = n._parsed.splice(t, e);
            n._stacked && In(n, r);
          }
          n.data.splice(t, e);
        }
        _onDataPush() {
          const t = arguments.length;
          this._syncList.push([
            "_insertElements",
            this.getDataset().data.length - t,
            t,
          ]);
        }
        _onDataPop() {
          this._syncList.push([
            "_removeElements",
            this._cachedMeta.data.length - 1,
            1,
          ]);
        }
        _onDataShift() {
          this._syncList.push(["_removeElements", 0, 1]);
        }
        _onDataSplice(t, e) {
          this._syncList.push(["_removeElements", t, e]),
            this._syncList.push(["_insertElements", t, arguments.length - 2]);
        }
        _onDataUnshift() {
          this._syncList.push(["_insertElements", 0, arguments.length]);
        }
      }
      function jn(t) {
        if (!t._cache.$bar) {
          const e = t.getMatchingVisibleMetas("bar");
          let r = [];
          for (let n = 0, a = e.length; n < a; n++)
            r = r.concat(e[n].controller.getAllParsedValues(t));
          t._cache.$bar = Ye(r.sort((t, e) => t - e));
        }
        return t._cache.$bar;
      }
      function Un(t) {
        const e = jn(t);
        let r,
          n,
          a,
          o,
          i = t._length;
        const s = () => {
          32767 !== a &&
            -32768 !== a &&
            (B(o) && (i = Math.min(i, Math.abs(a - o) || i)), (o = a));
        };
        for (r = 0, n = e.length; r < n; ++r)
          (a = t.getPixelForValue(e[r])), s();
        for (o = void 0, r = 0, n = t.ticks.length; r < n; ++r)
          (a = t.getPixelForTick(r)), s();
        return i;
      }
      function zn(t, e, r, n) {
        const a = r.barThickness;
        let o, i;
        return (
          x(a)
            ? ((o = e.min * r.categoryPercentage), (i = r.barPercentage))
            : ((o = a * n), (i = 1)),
          { chunk: o / n, ratio: i, start: e.pixels[t] - o / 2 }
        );
      }
      function Bn(t, e, r, n) {
        const a = e.pixels,
          o = a[t];
        let i = t > 0 ? a[t - 1] : null,
          s = t < a.length - 1 ? a[t + 1] : null;
        const c = r.categoryPercentage;
        null === i && (i = o - (null === s ? e.end - e.start : s - o)),
          null === s && (s = o + o - i);
        const l = o - ((o - Math.min(i, s)) / 2) * c,
          d = (Math.abs(s - i) / 2) * c;
        return { chunk: d / n, ratio: r.barPercentage, start: l };
      }
      function Vn(t, e, r, n) {
        const a = r.parse(t[0], n),
          o = r.parse(t[1], n),
          i = Math.min(a, o),
          s = Math.max(a, o);
        let c = i,
          l = s;
        Math.abs(i) > Math.abs(s) && ((c = s), (l = i)),
          (e[r.axis] = l),
          (e._custom = {
            barStart: c,
            barEnd: l,
            start: a,
            end: o,
            min: i,
            max: s,
          });
      }
      function $n(t, e, r, n) {
        return _(t) ? Vn(t, e, r, n) : (e[r.axis] = r.parse(t, n)), e;
      }
      function Wn(t, e, r, n) {
        const a = t.iScale,
          o = t.vScale,
          i = a.getLabels(),
          s = a === o,
          c = [];
        let l, d, u, h;
        for (l = r, d = r + n; l < d; ++l)
          (h = e[l]),
            (u = {}),
            (u[a.axis] = s || a.parse(i[l], l)),
            c.push($n(h, u, o, l));
        return c;
      }
      function Hn(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      (Nn.defaults = {}),
        (Nn.prototype.datasetElementType = null),
        (Nn.prototype.dataElementType = null);
      class qn extends Nn {
        parsePrimitiveData(t, e, r, n) {
          return Wn(t, e, r, n);
        }
        parseArrayData(t, e, r, n) {
          return Wn(t, e, r, n);
        }
        parseObjectData(t, e, r, n) {
          const { iScale: a, vScale: o } = t,
            { xAxisKey: i = "x", yAxisKey: s = "y" } = this._parsing,
            c = "x" === a.axis ? i : s,
            l = "x" === o.axis ? i : s,
            d = [];
          let u, h, p, f;
          for (u = r, h = r + n; u < h; ++u)
            (f = e[u]),
              (p = {}),
              (p[a.axis] = a.parse(U(f, c), u)),
              d.push($n(U(f, l), p, o, u));
          return d;
        }
        updateRangeFromParsed(t, e, r, n) {
          super.updateRangeFromParsed(t, e, r, n);
          const a = r._custom;
          a &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, a.min)),
            (t.max = Math.max(t.max, a.max)));
        }
        getLabelAndValue(t) {
          const e = this,
            r = e._cachedMeta,
            { iScale: n, vScale: a } = r,
            o = e.getParsed(t),
            i = o._custom,
            s = Hn(i)
              ? "[" + i.start + ", " + i.end + "]"
              : "" + a.getLabelForValue(o[a.axis]);
          return { label: "" + n.getLabelForValue(o[n.axis]), value: s };
        }
        initialize() {
          const t = this;
          (t.enableOptionSharing = !0), super.initialize();
          const e = t._cachedMeta;
          e.stack = t.getDataset().stack;
        }
        update(t) {
          const e = this,
            r = e._cachedMeta;
          e.updateElements(r.data, 0, r.data.length, t);
        }
        updateElements(t, e, r, n) {
          const a = this,
            o = "reset" === n,
            i = a._cachedMeta.vScale,
            s = i.getBasePixel(),
            c = i.isHorizontal(),
            l = a._getRuler(),
            d = a.resolveDataElementOptions(e, n),
            u = a.getSharedOptions(d),
            h = a.includeOptions(n, u);
          a.updateSharedOptions(u, n, d);
          for (let p = e; p < e + r; p++) {
            const e = a.getParsed(p),
              r =
                o || x(e[i.axis])
                  ? { base: s, head: s }
                  : a._calculateBarValuePixels(p),
              d = a._calculateBarIndexPixels(p, l),
              f = (e._stacks || {})[i.axis],
              g = {
                horizontal: c,
                base: r.base,
                enableBorderRadius:
                  !f ||
                  Hn(e._custom) ||
                  a.index === f._top ||
                  a.index === f._bottom,
                x: c ? r.head : d.center,
                y: c ? d.center : r.head,
                height: c ? d.size : void 0,
                width: c ? void 0 : d.size,
              };
            h && (g.options = u || a.resolveDataElementOptions(p, n)),
              a.updateElement(t[p], p, g, n);
          }
        }
        _getStacks(t, e) {
          const r = this,
            n = r._cachedMeta,
            a = n.iScale,
            o = a.getMatchingVisibleMetas(r._type),
            i = a.options.stacked,
            s = o.length,
            c = [];
          let l, d;
          for (l = 0; l < s; ++l) {
            if (((d = o[l]), "undefined" !== typeof e)) {
              const t =
                d.controller.getParsed(e)[d.controller._cachedMeta.vScale.axis];
              if (x(t) || isNaN(t)) continue;
            }
            if (
              ((!1 === i ||
                -1 === c.indexOf(d.stack) ||
                (void 0 === i && void 0 === d.stack)) &&
                c.push(d.stack),
              d.index === t)
            )
              break;
          }
          return c.length || c.push(void 0), c;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, r) {
          const n = this._getStacks(t, r),
            a = void 0 !== e ? n.indexOf(e) : -1;
          return -1 === a ? n.length - 1 : a;
        }
        _getRuler() {
          const t = this,
            e = t.options,
            r = t._cachedMeta,
            n = r.iScale,
            a = [];
          let o, i;
          for (o = 0, i = r.data.length; o < i; ++o)
            a.push(n.getPixelForValue(t.getParsed(o)[n.axis], o));
          const s = e.barThickness,
            c = s || Un(n);
          return {
            min: c,
            pixels: a,
            start: n._startPixel,
            end: n._endPixel,
            stackCount: t._getStackCount(),
            scale: n,
            grouped: e.grouped,
            ratio: s ? 1 : e.categoryPercentage * e.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const e = this,
            { vScale: r, _stacked: n } = e._cachedMeta,
            { base: a, minBarLength: o } = e.options,
            i = e.getParsed(t),
            s = i._custom,
            c = Hn(s);
          let l,
            d,
            u = i[r.axis],
            h = 0,
            p = n ? e.applyStack(r, i, n) : u;
          p !== u && ((h = p - u), (p = u)),
            c &&
              ((u = s.barStart),
              (p = s.barEnd - s.barStart),
              0 !== u && Z(u) !== Z(s.barEnd) && (h = 0),
              (h += u));
          const f = x(a) || c ? h : a;
          let g = r.getPixelForValue(f);
          (l = this.chart.getDataVisibility(t) ? r.getPixelForValue(h + p) : g),
            (d = l - g),
            void 0 !== o &&
              Math.abs(d) < o &&
              ((d = d < 0 ? -o : o), 0 === u && (g -= d / 2), (l = g + d));
          const m = a || 0;
          if (g === r.getPixelForValue(m)) {
            const t = r.getLineWidthForValue(m) / 2;
            d > 0 ? ((g += t), (d -= t)) : d < 0 && ((g -= t), (d += t));
          }
          return { size: d, base: g, head: l, center: l + d / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const r = this,
            n = e.scale,
            a = r.options,
            o = a.skipNull,
            i = M(a.maxBarThickness, 1 / 0);
          let s, c;
          if (e.grouped) {
            const n = o ? r._getStackCount(t) : e.stackCount,
              l = "flex" === a.barThickness ? Bn(t, e, a, n) : zn(t, e, a, n),
              d = r._getStackIndex(
                r.index,
                r._cachedMeta.stack,
                o ? t : void 0
              );
            (s = l.start + l.chunk * d + l.chunk / 2),
              (c = Math.min(i, l.chunk * l.ratio));
          } else
            (s = n.getPixelForValue(r.getParsed(t)[n.axis], t)),
              (c = Math.min(i, e.min * e.ratio));
          return { base: s - c / 2, head: s + c / 2, center: s, size: c };
        }
        draw() {
          const t = this,
            e = t.chart,
            r = t._cachedMeta,
            n = r.vScale,
            a = r.data,
            o = a.length;
          let i = 0;
          for (ke(e.ctx, e.chartArea); i < o; ++i)
            null !== t.getParsed(i)[n.axis] && a[i].draw(t._ctx);
          Me(e.ctx);
        }
      }
      (qn.id = "bar"),
        (qn.defaults = {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        }),
        (qn.overrides = {
          interaction: { mode: "index" },
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        });
      class Yn extends Nn {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parseObjectData(t, e, r, n) {
          const { xScale: a, yScale: o } = t,
            { xAxisKey: i = "x", yAxisKey: s = "y" } = this._parsing,
            c = [];
          let l, d, u;
          for (l = r, d = r + n; l < d; ++l)
            (u = e[l]),
              c.push({
                x: a.parse(U(u, i), l),
                y: o.parse(U(u, s), l),
                _custom: u && u.r && +u.r,
              });
          return c;
        }
        getMaxOverflow() {
          const { data: t, _parsed: e } = this._cachedMeta;
          let r = 0;
          for (let n = t.length - 1; n >= 0; --n)
            r = Math.max(r, t[n].size() / 2, e[n]._custom);
          return r > 0 && r;
        }
        getLabelAndValue(t) {
          const e = this,
            r = e._cachedMeta,
            { xScale: n, yScale: a } = r,
            o = e.getParsed(t),
            i = n.getLabelForValue(o.x),
            s = a.getLabelForValue(o.y),
            c = o._custom;
          return {
            label: r.label,
            value: "(" + i + ", " + s + (c ? ", " + c : "") + ")",
          };
        }
        update(t) {
          const e = this,
            r = e._cachedMeta.data;
          e.updateElements(r, 0, r.length, t);
        }
        updateElements(t, e, r, n) {
          const a = this,
            o = "reset" === n,
            { iScale: i, vScale: s } = a._cachedMeta,
            c = a.resolveDataElementOptions(e, n),
            l = a.getSharedOptions(c),
            d = a.includeOptions(n, l),
            u = i.axis,
            h = s.axis;
          for (let p = e; p < e + r; p++) {
            const e = t[p],
              r = !o && a.getParsed(p),
              c = {},
              l = (c[u] = o
                ? i.getPixelForDecimal(0.5)
                : i.getPixelForValue(r[u])),
              f = (c[h] = o ? s.getBasePixel() : s.getPixelForValue(r[h]));
            (c.skip = isNaN(l) || isNaN(f)),
              d &&
                ((c.options = a.resolveDataElementOptions(p, n)),
                o && (c.options.radius = 0)),
              a.updateElement(e, p, c, n);
          }
          a.updateSharedOptions(l, n, c);
        }
        resolveDataElementOptions(t, e) {
          const r = this.getParsed(t);
          let n = super.resolveDataElementOptions(t, e);
          n.$shared && (n = Object.assign({}, n, { $shared: !1 }));
          const a = n.radius;
          return (
            "active" !== e && (n.radius = 0),
            (n.radius += M(r && r._custom, a)),
            n
          );
        }
      }
      function Xn(t, e, r) {
        let n = 1,
          a = 1,
          o = 0,
          i = 0;
        if (e < H) {
          const s = t,
            c = s + e,
            l = Math.cos(s),
            d = Math.sin(s),
            u = Math.cos(c),
            h = Math.sin(c),
            p = (t, e, n) =>
              pt(t, s, c, !0) ? 1 : Math.max(e, e * r, n, n * r),
            f = (t, e, n) =>
              pt(t, s, c, !0) ? -1 : Math.min(e, e * r, n, n * r),
            g = p(0, l, u),
            m = p(Q, d, h),
            v = f(W, l, u),
            b = f(W + Q, d, h);
          (n = (g - v) / 2),
            (a = (m - b) / 2),
            (o = -(g + v) / 2),
            (i = -(m + b) / 2);
        }
        return { ratioX: n, ratioY: a, offsetX: o, offsetY: i };
      }
      (Yn.id = "bubble"),
        (Yn.defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "borderWidth", "radius"],
            },
          },
        }),
        (Yn.overrides = {
          scales: { x: { type: "linear" }, y: { type: "linear" } },
          plugins: {
            tooltip: {
              callbacks: {
                title() {
                  return "";
                },
              },
            },
          },
        });
      class Qn extends Nn {
        constructor(t, e) {
          super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
        }
        linkScales() {}
        parse(t, e) {
          const r = this.getDataset().data,
            n = this._cachedMeta;
          let a, o;
          for (a = t, o = t + e; a < o; ++a) n._parsed[a] = +r[a];
        }
        _getRotation() {
          return it(this.options.rotation - 90);
        }
        _getCircumference() {
          return it(this.options.circumference);
        }
        _getRotationExtents() {
          let t = H,
            e = -H;
          const r = this;
          for (let n = 0; n < r.chart.data.datasets.length; ++n)
            if (r.chart.isDatasetVisible(n)) {
              const a = r.chart.getDatasetMeta(n).controller,
                o = a._getRotation(),
                i = a._getCircumference();
              (t = Math.min(t, o)), (e = Math.max(e, o + i));
            }
          return { rotation: t, circumference: e - t };
        }
        update(t) {
          const e = this,
            r = e.chart,
            { chartArea: n } = r,
            a = e._cachedMeta,
            o = a.data,
            i = e.getMaxBorderWidth() + e.getMaxOffset(o),
            s = Math.max((Math.min(n.width, n.height) - i) / 2, 0),
            c = Math.min(C(e.options.cutout, s), 1),
            l = e._getRingWeight(e.index),
            { circumference: d, rotation: u } = e._getRotationExtents(),
            { ratioX: h, ratioY: p, offsetX: f, offsetY: g } = Xn(u, d, c),
            m = (n.width - i) / h,
            v = (n.height - i) / p,
            b = Math.max(Math.min(m, v) / 2, 0),
            x = P(e.options.radius, b),
            _ = Math.max(x * c, 0),
            y = (x - _) / e._getVisibleDatasetWeightTotal();
          (e.offsetX = f * x),
            (e.offsetY = g * x),
            (a.total = e.calculateTotal()),
            (e.outerRadius = x - y * e._getRingWeightOffset(e.index)),
            (e.innerRadius = Math.max(e.outerRadius - y * l, 0)),
            e.updateElements(o, 0, o.length, t);
        }
        _circumference(t, e) {
          const r = this,
            n = r.options,
            a = r._cachedMeta,
            o = r._getCircumference();
          return (e && n.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === a._parsed[t]
            ? 0
            : r.calculateCircumference((a._parsed[t] * o) / H);
        }
        updateElements(t, e, r, n) {
          const a = this,
            o = "reset" === n,
            i = a.chart,
            s = i.chartArea,
            c = i.options,
            l = c.animation,
            d = (s.left + s.right) / 2,
            u = (s.top + s.bottom) / 2,
            h = o && l.animateScale,
            p = h ? 0 : a.innerRadius,
            f = h ? 0 : a.outerRadius,
            g = a.resolveDataElementOptions(e, n),
            m = a.getSharedOptions(g),
            v = a.includeOptions(n, m);
          let b,
            x = a._getRotation();
          for (b = 0; b < e; ++b) x += a._circumference(b, o);
          for (b = e; b < e + r; ++b) {
            const e = a._circumference(b, o),
              r = t[b],
              i = {
                x: d + a.offsetX,
                y: u + a.offsetY,
                startAngle: x,
                endAngle: x + e,
                circumference: e,
                outerRadius: f,
                innerRadius: p,
              };
            v && (i.options = m || a.resolveDataElementOptions(b, n)),
              (x += e),
              a.updateElement(r, b, i, n);
          }
          a.updateSharedOptions(m, n, g);
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data;
          let r,
            n = 0;
          for (r = 0; r < e.length; r++) {
            const e = t._parsed[r];
            null !== e &&
              !isNaN(e) &&
              this.chart.getDataVisibility(r) &&
              (n += Math.abs(e));
          }
          return n;
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? H * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
          const e = this,
            r = e._cachedMeta,
            n = e.chart,
            a = n.data.labels || [],
            o = $r(r._parsed[t], n.options.locale);
          return { label: a[t] || "", value: o };
        }
        getMaxBorderWidth(t) {
          const e = this;
          let r = 0;
          const n = e.chart;
          let a, o, i, s, c;
          if (!t)
            for (a = 0, o = n.data.datasets.length; a < o; ++a)
              if (n.isDatasetVisible(a)) {
                (i = n.getDatasetMeta(a)),
                  (t = i.data),
                  (s = i.controller),
                  s !== e && s.configure();
                break;
              }
          if (!t) return 0;
          for (a = 0, o = t.length; a < o; ++a)
            (c = s.resolveDataElementOptions(a)),
              "inner" !== c.borderAlign &&
                (r = Math.max(r, c.borderWidth || 0, c.hoverBorderWidth || 0));
          return r;
        }
        getMaxOffset(t) {
          let e = 0;
          for (let r = 0, n = t.length; r < n; ++r) {
            const t = this.resolveDataElementOptions(r);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
          }
          return e;
        }
        _getRingWeightOffset(t) {
          let e = 0;
          for (let r = 0; r < t; ++r)
            this.chart.isDatasetVisible(r) && (e += this._getRingWeight(r));
          return e;
        }
        _getRingWeight(t) {
          return Math.max(M(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return (
            this._getRingWeightOffset(this.chart.data.datasets.length) || 1
          );
        }
      }
      (Qn.id = "doughnut"),
        (Qn.defaults = {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
              ],
            },
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          indexAxis: "r",
        }),
        (Qn.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map((e, r) => {
                        const n = t.getDatasetMeta(0),
                          a = n.controller.getStyle(r);
                        return {
                          text: e,
                          fillStyle: a.backgroundColor,
                          strokeStyle: a.borderColor,
                          lineWidth: a.borderWidth,
                          hidden: !t.getDataVisibility(r),
                          index: r,
                        };
                      })
                    : [];
                },
              },
              onClick(t, e, r) {
                r.chart.toggleDataVisibility(e.index), r.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title() {
                  return "";
                },
                label(t) {
                  let e = t.label;
                  const r = ": " + t.formattedValue;
                  return _(e) ? ((e = e.slice()), (e[0] += r)) : (e += r), e;
                },
              },
            },
          },
        });
      class Gn extends Nn {
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        update(t) {
          const e = this,
            r = e._cachedMeta,
            { dataset: n, data: a = [], _dataset: o } = r,
            i = e.chart._animationsDisabled;
          let { start: s, count: c } = Jn(r, a, i);
          (e._drawStart = s),
            (e._drawCount = c),
            Kn(r) && ((s = 0), (c = a.length)),
            (n._decimated = !!o._decimated),
            (n.points = a);
          const l = e.resolveDatasetElementOptions(t);
          e.options.showLine || (l.borderWidth = 0),
            (l.segment = e.options.segment),
            e.updateElement(n, void 0, { animated: !i, options: l }, t),
            e.updateElements(a, s, c, t);
        }
        updateElements(t, e, r, n) {
          const a = this,
            o = "reset" === n,
            { iScale: i, vScale: s, _stacked: c } = a._cachedMeta,
            l = a.resolveDataElementOptions(e, n),
            d = a.getSharedOptions(l),
            u = a.includeOptions(n, d),
            h = i.axis,
            p = s.axis,
            f = a.options.spanGaps,
            g = rt(f) ? f : Number.POSITIVE_INFINITY,
            m = a.chart._animationsDisabled || o || "none" === n;
          let v = e > 0 && a.getParsed(e - 1);
          for (let b = e; b < e + r; ++b) {
            const e = t[b],
              r = a.getParsed(b),
              l = m ? e : {},
              f = x(r[p]),
              _ = (l[h] = i.getPixelForValue(r[h], b)),
              y = (l[p] =
                o || f
                  ? s.getBasePixel()
                  : s.getPixelForValue(c ? a.applyStack(s, r, c) : r[p], b));
            (l.skip = isNaN(_) || isNaN(y) || f),
              (l.stop = b > 0 && r[h] - v[h] > g),
              (l.parsed = r),
              u && (l.options = d || a.resolveDataElementOptions(b, n)),
              m || a.updateElement(e, b, l, n),
              (v = r);
          }
          a.updateSharedOptions(d, n, l);
        }
        getMaxOverflow() {
          const t = this,
            e = t._cachedMeta,
            r = e.dataset,
            n = (r.options && r.options.borderWidth) || 0,
            a = e.data || [];
          if (!a.length) return n;
          const o = a[0].size(t.resolveDataElementOptions(0)),
            i = a[a.length - 1].size(t.resolveDataElementOptions(a.length - 1));
          return Math.max(n, o, i) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      }
      function Jn(t, e, r) {
        const n = e.length;
        let a = 0,
          o = n;
        if (t._sorted) {
          const { iScale: i, _parsed: s } = t,
            c = i.axis,
            {
              min: l,
              max: d,
              minDefined: u,
              maxDefined: h,
            } = i.getUserBounds();
          u &&
            (a = ft(
              Math.min(
                Be(s, i.axis, l).lo,
                r ? n : Be(e, c, i.getPixelForValue(l)).lo
              ),
              0,
              n - 1
            )),
            (o = h
              ? ft(
                  Math.max(
                    Be(s, i.axis, d).hi + 1,
                    r ? 0 : Be(e, c, i.getPixelForValue(d)).hi + 1
                  ),
                  a,
                  n
                ) - a
              : n - a);
        }
        return { start: a, count: o };
      }
      function Kn(t) {
        const { xScale: e, yScale: r, _scaleRanges: n } = t,
          a = { xmin: e.min, xmax: e.max, ymin: r.min, ymax: r.max };
        if (!n) return (t._scaleRanges = a), !0;
        const o =
          n.xmin !== e.min ||
          n.xmax !== e.max ||
          n.ymin !== r.min ||
          n.ymax !== r.max;
        return Object.assign(n, a), o;
      }
      (Gn.id = "line"),
        (Gn.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        }),
        (Gn.overrides = {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        });
      class Zn extends Nn {
        constructor(t, e) {
          super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
        }
        getLabelAndValue(t) {
          const e = this,
            r = e._cachedMeta,
            n = e.chart,
            a = n.data.labels || [],
            o = $r(r._parsed[t].r, n.options.locale);
          return { label: a[t] || "", value: o };
        }
        update(t) {
          const e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
        _updateRadius() {
          const t = this,
            e = t.chart,
            r = e.chartArea,
            n = e.options,
            a = Math.min(r.right - r.left, r.bottom - r.top),
            o = Math.max(a / 2, 0),
            i = Math.max(
              n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1,
              0
            ),
            s = (o - i) / e.getVisibleDatasetCount();
          (t.outerRadius = o - s * t.index),
            (t.innerRadius = t.outerRadius - s);
        }
        updateElements(t, e, r, n) {
          const a = this,
            o = "reset" === n,
            i = a.chart,
            s = a.getDataset(),
            c = i.options,
            l = c.animation,
            d = a._cachedMeta.rScale,
            u = d.xCenter,
            h = d.yCenter,
            p = d.getIndexAngle(0) - 0.5 * W;
          let f,
            g = p;
          const m = 360 / a.countVisibleElements();
          for (f = 0; f < e; ++f) g += a._computeAngle(f, n, m);
          for (f = e; f < e + r; f++) {
            const e = t[f];
            let r = g,
              c = g + a._computeAngle(f, n, m),
              v = i.getDataVisibility(f)
                ? d.getDistanceFromCenterForValue(s.data[f])
                : 0;
            (g = c),
              o && (l.animateScale && (v = 0), l.animateRotate && (r = c = p));
            const b = {
              x: u,
              y: h,
              innerRadius: 0,
              outerRadius: v,
              startAngle: r,
              endAngle: c,
              options: a.resolveDataElementOptions(f, n),
            };
            a.updateElement(e, f, b, n);
          }
        }
        countVisibleElements() {
          const t = this.getDataset(),
            e = this._cachedMeta;
          let r = 0;
          return (
            e.data.forEach((e, n) => {
              !isNaN(t.data[n]) && this.chart.getDataVisibility(n) && r++;
            }),
            r
          );
        }
        _computeAngle(t, e, r) {
          return this.chart.getDataVisibility(t)
            ? it(this.resolveDataElementOptions(t, e).angle || r)
            : 0;
        }
      }
      (Zn.id = "polarArea"),
        (Zn.defaults = {
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
            },
          },
          indexAxis: "r",
          startAngle: 0,
        }),
        (Zn.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  return e.labels.length && e.datasets.length
                    ? e.labels.map((e, r) => {
                        const n = t.getDatasetMeta(0),
                          a = n.controller.getStyle(r);
                        return {
                          text: e,
                          fillStyle: a.backgroundColor,
                          strokeStyle: a.borderColor,
                          lineWidth: a.borderWidth,
                          hidden: !t.getDataVisibility(r),
                          index: r,
                        };
                      })
                    : [];
                },
              },
              onClick(t, e, r) {
                r.chart.toggleDataVisibility(e.index), r.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title() {
                  return "";
                },
                label(t) {
                  return (
                    t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                  );
                },
              },
            },
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      class ta extends Qn {}
      (ta.id = "pie"),
        (ta.defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: "100%",
        });
      class ea extends Nn {
        getLabelAndValue(t) {
          const e = this,
            r = e._cachedMeta.vScale,
            n = e.getParsed(t);
          return {
            label: r.getLabels()[t],
            value: "" + r.getLabelForValue(n[r.axis]),
          };
        }
        update(t) {
          const e = this,
            r = e._cachedMeta,
            n = r.dataset,
            a = r.data || [],
            o = r.iScale.getLabels();
          if (((n.points = a), "resize" !== t)) {
            const r = e.resolveDatasetElementOptions(t);
            e.options.showLine || (r.borderWidth = 0);
            const i = {
              _loop: !0,
              _fullLoop: o.length === a.length,
              options: r,
            };
            e.updateElement(n, void 0, i, t);
          }
          e.updateElements(a, 0, a.length, t);
        }
        updateElements(t, e, r, n) {
          const a = this,
            o = a.getDataset(),
            i = a._cachedMeta.rScale,
            s = "reset" === n;
          for (let c = e; c < e + r; c++) {
            const e = t[c],
              r = a.resolveDataElementOptions(c, n),
              l = i.getPointPositionForValue(c, o.data[c]),
              d = s ? i.xCenter : l.x,
              u = s ? i.yCenter : l.y,
              h = {
                x: d,
                y: u,
                angle: l.angle,
                skip: isNaN(d) || isNaN(u),
                options: r,
              };
            a.updateElement(e, c, h, n);
          }
        }
      }
      (ea.id = "radar"),
        (ea.defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          indexAxis: "r",
          showLine: !0,
          elements: { line: { fill: "start" } },
        }),
        (ea.overrides = {
          aspectRatio: 1,
          scales: { r: { type: "radialLinear" } },
        });
      class ra extends Gn {}
      (ra.id = "scatter"),
        (ra.defaults = { showLine: !1, fill: !1 }),
        (ra.overrides = {
          interaction: { mode: "point" },
          plugins: {
            tooltip: {
              callbacks: {
                title() {
                  return "";
                },
                label(t) {
                  return "(" + t.label + ", " + t.formattedValue + ")";
                },
              },
            },
          },
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        });
      function na() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided."
        );
      }
      class aa {
        constructor(t) {
          this.options = t || {};
        }
        formats() {
          return na();
        }
        parse(t, e) {
          return na();
        }
        format(t, e) {
          return na();
        }
        add(t, e, r) {
          return na();
        }
        diff(t, e, r) {
          return na();
        }
        startOf(t, e, r) {
          return na();
        }
        endOf(t, e) {
          return na();
        }
      }
      aa.override = function (t) {
        Object.assign(aa.prototype, t);
      };
      var oa = { _date: aa };
      function ia(t, e) {
        return "native" in t ? { x: t.x, y: t.y } : Or(t, e);
      }
      function sa(t, e) {
        const r = t.getSortedVisibleDatasetMetas();
        let n, a, o;
        for (let i = 0, s = r.length; i < s; ++i) {
          ({ index: n, data: a } = r[i]);
          for (let t = 0, r = a.length; t < r; ++t)
            (o = a[t]), o.skip || e(o, n, t);
        }
      }
      function ca(t, e, r, n) {
        const { controller: a, data: o, _sorted: i } = t,
          s = a._cachedMeta.iScale;
        if (s && e === s.axis && i && o.length) {
          const t = s._reversePixels ? Ve : Be;
          if (!n) return t(o, e, r);
          if (a._sharedOptions) {
            const n = o[0],
              a = "function" === typeof n.getRange && n.getRange(e);
            if (a) {
              const n = t(o, e, r - a),
                i = t(o, e, r + a);
              return { lo: n.lo, hi: i.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function la(t, e, r, n, a) {
        const o = t.getSortedVisibleDatasetMetas(),
          i = r[e];
        for (let s = 0, c = o.length; s < c; ++s) {
          const { index: t, data: r } = o[s],
            { lo: c, hi: l } = ca(o[s], e, i, a);
          for (let e = c; e <= l; ++e) {
            const a = r[e];
            a.skip || n(a, t, e);
          }
        }
      }
      function da(t) {
        const e = -1 !== t.indexOf("x"),
          r = -1 !== t.indexOf("y");
        return function (t, n) {
          const a = e ? Math.abs(t.x - n.x) : 0,
            o = r ? Math.abs(t.y - n.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
        };
      }
      function ua(t, e, r, n) {
        const a = [];
        if (!we(e, t.chartArea, t._minPadding)) return a;
        const o = function (t, r, o) {
          t.inRange(e.x, e.y, n) &&
            a.push({ element: t, datasetIndex: r, index: o });
        };
        return la(t, r, e, o, !0), a;
      }
      function ha(t, e, r, n, a) {
        const o = da(r);
        let i = Number.POSITIVE_INFINITY,
          s = [];
        if (!we(e, t.chartArea, t._minPadding)) return s;
        const c = function (r, c, l) {
          if (n && !r.inRange(e.x, e.y, a)) return;
          const d = r.getCenterPoint(a);
          if (!we(d, t.chartArea, t._minPadding)) return;
          const u = o(e, d);
          u < i
            ? ((s = [{ element: r, datasetIndex: c, index: l }]), (i = u))
            : u === i && s.push({ element: r, datasetIndex: c, index: l });
        };
        return la(t, r, e, c), s;
      }
      function pa(t, e, r, n) {
        const a = ia(e, t),
          o = [],
          i = r.axis,
          s = "x" === i ? "inXRange" : "inYRange";
        let c = !1;
        return (
          sa(t, (t, e, r) => {
            t[s](a[i], n) && o.push({ element: t, datasetIndex: e, index: r }),
              t.inRange(a.x, a.y, n) && (c = !0);
          }),
          r.intersect && !c ? [] : o
        );
      }
      var fa = {
        modes: {
          index(t, e, r, n) {
            const a = ia(e, t),
              o = r.axis || "x",
              i = r.intersect ? ua(t, a, o, n) : ha(t, a, o, !1, n),
              s = [];
            return i.length
              ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                  const e = i[0].index,
                    r = t.data[e];
                  r &&
                    !r.skip &&
                    s.push({ element: r, datasetIndex: t.index, index: e });
                }),
                s)
              : [];
          },
          dataset(t, e, r, n) {
            const a = ia(e, t),
              o = r.axis || "xy";
            let i = r.intersect ? ua(t, a, o, n) : ha(t, a, o, !1, n);
            if (i.length > 0) {
              const e = i[0].datasetIndex,
                r = t.getDatasetMeta(e).data;
              i = [];
              for (let t = 0; t < r.length; ++t)
                i.push({ element: r[t], datasetIndex: e, index: t });
            }
            return i;
          },
          point(t, e, r, n) {
            const a = ia(e, t),
              o = r.axis || "xy";
            return ua(t, a, o, n);
          },
          nearest(t, e, r, n) {
            const a = ia(e, t),
              o = r.axis || "xy";
            return ha(t, a, o, r.intersect, n);
          },
          x(t, e, r, n) {
            return (r.axis = "x"), pa(t, e, r, n);
          },
          y(t, e, r, n) {
            return (r.axis = "y"), pa(t, e, r, n);
          },
        },
      };
      const ga = ["left", "top", "right", "bottom"];
      function ma(t, e) {
        return t.filter((t) => t.pos === e);
      }
      function va(t, e) {
        return t.filter((t) => -1 === ga.indexOf(t.pos) && t.box.axis === e);
      }
      function ba(t, e) {
        return t.sort((t, r) => {
          const n = e ? r : t,
            a = e ? t : r;
          return n.weight === a.weight
            ? n.index - a.index
            : n.weight - a.weight;
        });
      }
      function xa(t) {
        const e = [];
        let r, n, a;
        for (r = 0, n = (t || []).length; r < n; ++r)
          (a = t[r]),
            e.push({
              index: r,
              box: a,
              pos: a.position,
              horizontal: a.isHorizontal(),
              weight: a.weight,
            });
        return e;
      }
      function _a(t, e) {
        let r, n, a;
        for (r = 0, n = t.length; r < n; ++r)
          (a = t[r]),
            a.horizontal
              ? ((a.width = a.box.fullSize && e.availableWidth),
                (a.height = e.hBoxMaxHeight))
              : ((a.width = e.vBoxMaxWidth),
                (a.height = a.box.fullSize && e.availableHeight));
      }
      function ya(t) {
        const e = xa(t),
          r = ba(
            e.filter((t) => t.box.fullSize),
            !0
          ),
          n = ba(ma(e, "left"), !0),
          a = ba(ma(e, "right")),
          o = ba(ma(e, "top"), !0),
          i = ba(ma(e, "bottom")),
          s = va(e, "x"),
          c = va(e, "y");
        return {
          fullSize: r,
          leftAndTop: n.concat(o),
          rightAndBottom: a.concat(c).concat(i).concat(s),
          chartArea: ma(e, "chartArea"),
          vertical: n.concat(a).concat(c),
          horizontal: o.concat(i).concat(s),
        };
      }
      function wa(t, e, r, n) {
        return Math.max(t[r], e[r]) + Math.max(t[n], e[n]);
      }
      function ka(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function Ma(t, e, r) {
        const n = r.box,
          a = t.maxPadding;
        y(r.pos) ||
          (r.size && (t[r.pos] -= r.size),
          (r.size = r.horizontal ? n.height : n.width),
          (t[r.pos] += r.size)),
          n.getPadding && ka(a, n.getPadding());
        const o = Math.max(0, e.outerWidth - wa(a, t, "left", "right")),
          i = Math.max(0, e.outerHeight - wa(a, t, "top", "bottom")),
          s = o !== t.w,
          c = i !== t.h;
        return (
          (t.w = o),
          (t.h = i),
          r.horizontal ? { same: s, other: c } : { same: c, other: s }
        );
      }
      function Ca(t) {
        const e = t.maxPadding;
        function r(r) {
          const n = Math.max(e[r] - t[r], 0);
          return (t[r] += n), n;
        }
        (t.y += r("top")), (t.x += r("left")), r("right"), r("bottom");
      }
      function Pa(t, e) {
        const r = e.maxPadding;
        function n(t) {
          const n = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach((t) => {
              n[t] = Math.max(e[t], r[t]);
            }),
            n
          );
        }
        return n(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function Sa(t, e, r) {
        const n = [];
        let a, o, i, s, c, l;
        for (a = 0, o = t.length, c = 0; a < o; ++a) {
          (i = t[a]),
            (s = i.box),
            s.update(i.width || e.w, i.height || e.h, Pa(i.horizontal, e));
          const { same: o, other: d } = Ma(e, r, i);
          (c |= o && n.length), (l = l || d), s.fullSize || n.push(i);
        }
        return (c && Sa(n, e, r)) || l;
      }
      function Ta(t, e, r) {
        const n = r.padding;
        let a,
          o,
          i,
          s,
          c = e.x,
          l = e.y;
        for (a = 0, o = t.length; a < o; ++a)
          (i = t[a]),
            (s = i.box),
            i.horizontal
              ? ((s.left = s.fullSize ? n.left : e.left),
                (s.right = s.fullSize ? r.outerWidth - n.right : e.left + e.w),
                (s.top = l),
                (s.bottom = l + s.height),
                (s.width = s.right - s.left),
                (l = s.bottom))
              : ((s.left = c),
                (s.right = c + s.width),
                (s.top = s.fullSize ? n.top : e.top),
                (s.bottom = s.fullSize ? r.outerHeight - n.right : e.top + e.h),
                (s.height = s.bottom - s.top),
                (c = s.right));
        (e.x = c), (e.y = l);
      }
      ge.set("layout", { padding: { top: 0, right: 0, bottom: 0, left: 0 } });
      var Da = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        removeBox(t, e) {
          const r = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== r && t.boxes.splice(r, 1);
        },
        configure(t, e, r) {
          (e.fullSize = r.fullSize),
            (e.position = r.position),
            (e.weight = r.weight);
        },
        update(t, e, r, n) {
          if (!t) return;
          const a = Fe(t.options.layout.padding),
            o = Math.max(e - a.width, 0),
            i = Math.max(r - a.height, 0),
            s = ya(t.boxes),
            c = s.vertical,
            l = s.horizontal;
          T(t.boxes, (t) => {
            "function" === typeof t.beforeLayout && t.beforeLayout();
          });
          const d =
              c.reduce(
                (t, e) =>
                  e.box.options && !1 === e.box.options.display ? t : t + 1,
                0
              ) || 1,
            u = Object.freeze({
              outerWidth: e,
              outerHeight: r,
              padding: a,
              availableWidth: o,
              availableHeight: i,
              vBoxMaxWidth: o / 2 / d,
              hBoxMaxHeight: i / 2,
            }),
            h = Object.assign({}, a);
          ka(h, Fe(n));
          const p = Object.assign(
            { maxPadding: h, w: o, h: i, x: a.left, y: a.top },
            a
          );
          _a(c.concat(l), u),
            Sa(s.fullSize, p, u),
            Sa(c, p, u),
            Sa(l, p, u) && Sa(c, p, u),
            Ca(p),
            Ta(s.leftAndTop, p, u),
            (p.x += p.w),
            (p.y += p.h),
            Ta(s.rightAndBottom, p, u),
            (t.chartArea = {
              left: p.left,
              top: p.top,
              right: p.left + p.w,
              bottom: p.top + p.h,
              height: p.h,
              width: p.w,
            }),
            T(s.chartArea, (e) => {
              const r = e.box;
              Object.assign(r, t.chartArea), r.update(p.w, p.h);
            });
        },
      };
      class Ra {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, r) {}
        removeEventListener(t, e, r) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, r, n) {
          return (
            (e = Math.max(0, e || t.width)),
            (r = r || t.height),
            { width: e, height: Math.max(0, n ? Math.floor(e / n) : r) }
          );
        }
        isAttached(t) {
          return !0;
        }
      }
      class Oa extends Ra {
        acquireContext(t) {
          return (t && t.getContext && t.getContext("2d")) || null;
        }
      }
      const Aa = "$chartjs",
        Ea = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Ia = (t) => null === t || "" === t;
      function La(t, e) {
        const r = t.style,
          n = t.getAttribute("height"),
          a = t.getAttribute("width");
        if (
          ((t[Aa] = {
            initial: {
              height: n,
              width: a,
              style: { display: r.display, height: r.height, width: r.width },
            },
          }),
          (r.display = r.display || "block"),
          (r.boxSizing = r.boxSizing || "border-box"),
          Ia(a))
        ) {
          const e = Nr(t, "width");
          void 0 !== e && (t.width = e);
        }
        if (Ia(n))
          if ("" === t.style.height) t.height = t.width / (e || 2);
          else {
            const e = Nr(t, "height");
            void 0 !== e && (t.height = e);
          }
        return t;
      }
      const Fa = !!Fr && { passive: !0 };
      function Na(t, e, r) {
        t.addEventListener(e, r, Fa);
      }
      function ja(t, e, r) {
        t.canvas.removeEventListener(e, r, Fa);
      }
      function Ua(t, e) {
        const r = Ea[t.type] || t.type,
          { x: n, y: a } = Or(t, e);
        return {
          type: r,
          chart: e,
          native: t,
          x: void 0 !== n ? n : null,
          y: void 0 !== a ? a : null,
        };
      }
      function za(t, e, r) {
        const n = t.canvas,
          a = n && kr(n),
          o = a || n,
          i = new MutationObserver((t) => {
            const e = kr(o);
            t.forEach((t) => {
              for (let n = 0; n < t.addedNodes.length; n++) {
                const a = t.addedNodes[n];
                (a !== o && a !== e) || r(t.target);
              }
            });
          });
        return i.observe(document, { childList: !0, subtree: !0 }), i;
      }
      function Ba(t, e, r) {
        const n = t.canvas,
          a = n && kr(n);
        if (!a) return;
        const o = new MutationObserver((t) => {
          t.forEach((t) => {
            for (let e = 0; e < t.removedNodes.length; e++)
              if (t.removedNodes[e] === n) {
                r();
                break;
              }
          });
        });
        return o.observe(a, { childList: !0 }), o;
      }
      const Va = new Map();
      let $a = 0;
      function Wa() {
        const t = window.devicePixelRatio;
        t !== $a &&
          (($a = t),
          Va.forEach((e, r) => {
            r.currentDevicePixelRatio !== t && e();
          }));
      }
      function Ha(t, e) {
        Va.size || window.addEventListener("resize", Wa), Va.set(t, e);
      }
      function qa(t) {
        Va.delete(t), Va.size || window.removeEventListener("resize", Wa);
      }
      function Ya(t, e, r) {
        const n = t.canvas,
          a = n && kr(n);
        if (!a) return;
        const o = f((t, e) => {
            const n = a.clientWidth;
            r(t, e), n < a.clientWidth && r();
          }, window),
          i = new ResizeObserver((t) => {
            const e = t[0],
              r = e.contentRect.width,
              n = e.contentRect.height;
            (0 === r && 0 === n) || o(r, n);
          });
        return i.observe(a), Ha(t, o), i;
      }
      function Xa(t, e, r) {
        r && r.disconnect(), "resize" === e && qa(t);
      }
      function Qa(t, e, r) {
        const n = t.canvas,
          a = f(
            (e) => {
              null !== t.ctx && r(Ua(e, t));
            },
            t,
            (t) => {
              const e = t[0];
              return [e, e.offsetX, e.offsetY];
            }
          );
        return Na(n, e, a), a;
      }
      class Ga extends Ra {
        acquireContext(t, e) {
          const r = t && t.getContext && t.getContext("2d");
          return r && r.canvas === t ? (La(t, e), r) : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e[Aa]) return !1;
          const r = e[Aa].initial;
          ["height", "width"].forEach((t) => {
            const n = r[t];
            x(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
          });
          const n = r.style || {};
          return (
            Object.keys(n).forEach((t) => {
              e.style[t] = n[t];
            }),
            (e.width = e.width),
            delete e[Aa],
            !0
          );
        }
        addEventListener(t, e, r) {
          this.removeEventListener(t, e);
          const n = t.$proxies || (t.$proxies = {}),
            a = { attach: za, detach: Ba, resize: Ya },
            o = a[e] || Qa;
          n[e] = o(t, e, r);
        }
        removeEventListener(t, e) {
          const r = t.$proxies || (t.$proxies = {}),
            n = r[e];
          if (!n) return;
          const a = { attach: Xa, detach: Xa, resize: Xa },
            o = a[e] || ja;
          o(t, e, n), (r[e] = void 0);
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, r, n) {
          return Ir(t, e, r, n);
        }
        isAttached(t) {
          const e = kr(t);
          return !(!e || !kr(e));
        }
      }
      class Ja {
        constructor() {
          (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
        }
        tooltipPosition(t) {
          const { x: e, y: r } = this.getProps(["x", "y"], t);
          return { x: e, y: r };
        }
        hasValue() {
          return rt(this.x) && rt(this.y);
        }
        getProps(t, e) {
          const r = this,
            n = this.$animations;
          if (!e || !n) return r;
          const a = {};
          return (
            t.forEach((t) => {
              a[t] = n[t] && n[t].active() ? n[t]._to : r[t];
            }),
            a
          );
        }
      }
      (Ja.defaults = {}), (Ja.defaultRoutes = void 0);
      const Ka = {
        values(t) {
          return _(t) ? t : "" + t;
        },
        numeric(t, e, r) {
          if (0 === t) return "0";
          const n = this.chart.options.locale;
          let a,
            o = t;
          if (r.length > 1) {
            const e = Math.max(
              Math.abs(r[0].value),
              Math.abs(r[r.length - 1].value)
            );
            (e < 1e-4 || e > 1e15) && (a = "scientific"), (o = Za(t, r));
          }
          const i = K(Math.abs(o)),
            s = Math.max(Math.min(-1 * Math.floor(i), 20), 0),
            c = {
              notation: a,
              minimumFractionDigits: s,
              maximumFractionDigits: s,
            };
          return Object.assign(c, this.options.ticks.format), $r(t, n, c);
        },
        logarithmic(t, e, r) {
          if (0 === t) return "0";
          const n = t / Math.pow(10, Math.floor(K(t)));
          return 1 === n || 2 === n || 5 === n
            ? Ka.numeric.call(this, t, e, r)
            : "";
        },
      };
      function Za(t, e) {
        let r =
          e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
        return (
          Math.abs(r) >= 1 && t !== Math.floor(t) && (r = t - Math.floor(t)), r
        );
      }
      var to = { formatters: Ka };
      function eo(t, e) {
        const r = t.options.ticks,
          n = r.maxTicksLimit || ro(t),
          a = r.major.enabled ? ao(e) : [],
          o = a.length,
          i = a[0],
          s = a[o - 1],
          c = [];
        if (o > n) return oo(e, c, a, o / n), c;
        const l = no(a, e, n);
        if (o > 0) {
          let t, r;
          const n = o > 1 ? Math.round((s - i) / (o - 1)) : null;
          for (io(e, c, l, x(n) ? 0 : i - n, i), t = 0, r = o - 1; t < r; t++)
            io(e, c, l, a[t], a[t + 1]);
          return io(e, c, l, s, x(n) ? e.length : s + n), c;
        }
        return io(e, c, l), c;
      }
      function ro(t) {
        const e = t.options.offset,
          r = t._tickSize(),
          n = t._length / r + (e ? 0 : 1),
          a = t._maxLength / r;
        return Math.floor(Math.min(n, a));
      }
      function no(t, e, r) {
        const n = so(t),
          a = e.length / r;
        if (!n) return Math.max(a, 1);
        const o = et(n);
        for (let i = 0, s = o.length - 1; i < s; i++) {
          const t = o[i];
          if (t > a) return t;
        }
        return Math.max(a, 1);
      }
      function ao(t) {
        const e = [];
        let r, n;
        for (r = 0, n = t.length; r < n; r++) t[r].major && e.push(r);
        return e;
      }
      function oo(t, e, r, n) {
        let a,
          o = 0,
          i = r[0];
        for (n = Math.ceil(n), a = 0; a < t.length; a++)
          a === i && (e.push(t[a]), o++, (i = r[o * n]));
      }
      function io(t, e, r, n, a) {
        const o = M(n, 0),
          i = Math.min(M(a, t.length), t.length);
        let s,
          c,
          l,
          d = 0;
        (r = Math.ceil(r)),
          a && ((s = a - n), (r = s / Math.floor(s / r))),
          (l = o);
        while (l < 0) d++, (l = Math.round(o + d * r));
        for (c = Math.max(o, 0); c < i; c++)
          c === l && (e.push(t[c]), d++, (l = Math.round(o + d * r)));
      }
      function so(t) {
        const e = t.length;
        let r, n;
        if (e < 2) return !1;
        for (n = t[0], r = 1; r < e; ++r) if (t[r] - t[r - 1] !== n) return !1;
        return n;
      }
      ge.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: (t, e) => e.lineWidth,
          tickColor: (t, e) => e.color,
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: "",
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: to.formatters.values,
          minor: {},
          major: {},
          align: "center",
          crossAlign: "near",
          showLabelBackdrop: !1,
          backdropColor: "rgba(255, 255, 255, 0.75)",
          backdropPadding: 2,
        },
      }),
        ge.route("scale.ticks", "color", "", "color"),
        ge.route("scale.grid", "color", "", "borderColor"),
        ge.route("scale.grid", "borderColor", "", "borderColor"),
        ge.route("scale.title", "color", "", "color"),
        ge.describe("scale", {
          _fallback: !1,
          _scriptable: (t) =>
            !t.startsWith("before") &&
            !t.startsWith("after") &&
            "callback" !== t &&
            "parser" !== t,
          _indexable: (t) => "borderDash" !== t && "tickBorderDash" !== t,
        }),
        ge.describe("scales", { _fallback: "scale" });
      const co = (t) => ("left" === t ? "right" : "right" === t ? "left" : t),
        lo = (t, e, r) => ("top" === e || "left" === e ? t[e] + r : t[e] - r);
      function uo(t, e) {
        const r = [],
          n = t.length / e,
          a = t.length;
        let o = 0;
        for (; o < a; o += n) r.push(t[Math.floor(o)]);
        return r;
      }
      function ho(t, e, r) {
        const n = t.ticks.length,
          a = Math.min(e, n - 1),
          o = t._startPixel,
          i = t._endPixel,
          s = 1e-6;
        let c,
          l = t.getPixelForTick(a);
        if (
          !(
            r &&
            ((c =
              1 === n
                ? Math.max(l - o, i - l)
                : 0 === e
                ? (t.getPixelForTick(1) - l) / 2
                : (l - t.getPixelForTick(a - 1)) / 2),
            (l += a < e ? c : -c),
            l < o - s || l > i + s)
          )
        )
          return l;
      }
      function po(t, e) {
        T(t, (t) => {
          const r = t.gc,
            n = r.length / 2;
          let a;
          if (n > e) {
            for (a = 0; a < n; ++a) delete t.data[r[a]];
            r.splice(0, n);
          }
        });
      }
      function fo(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function go(t, e) {
        if (!t.display) return 0;
        const r = Ne(t.font, e),
          n = Fe(t.padding),
          a = _(t.text) ? t.text.length : 1;
        return a * r.lineHeight + n.height;
      }
      function mo(t, e) {
        return Object.assign(Object.create(t), { scale: e, type: "scale" });
      }
      function vo(t, e, r) {
        return Object.assign(Object.create(t), {
          tick: r,
          index: e,
          type: "tick",
        });
      }
      function bo(t, e, r) {
        let n = m(t);
        return (
          ((r && "right" !== e) || (!r && "right" === e)) && (n = co(n)), n
        );
      }
      function xo(t, e, r, n) {
        const { top: a, left: o, bottom: i, right: s } = t;
        let c,
          l,
          d,
          u = 0;
        return (
          t.isHorizontal()
            ? ((l = v(n, o, s)), (d = lo(t, r, e)), (c = s - o))
            : ((l = lo(t, r, e)),
              (d = v(n, i, a)),
              (u = "left" === r ? -Q : Q)),
          { titleX: l, titleY: d, maxWidth: c, rotation: u }
        );
      }
      class _o extends Ja {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(t) {
          const e = this;
          (e.options = t.setContext(e.getContext())),
            (e.axis = t.axis),
            (e._userMin = e.parse(t.min)),
            (e._userMax = e.parse(t.max)),
            (e._suggestedMin = e.parse(t.suggestedMin)),
            (e._suggestedMax = e.parse(t.suggestedMax));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: r,
            _suggestedMax: n,
          } = this;
          return (
            (t = k(t, Number.POSITIVE_INFINITY)),
            (e = k(e, Number.NEGATIVE_INFINITY)),
            (r = k(r, Number.POSITIVE_INFINITY)),
            (n = k(n, Number.NEGATIVE_INFINITY)),
            { min: k(t, r), max: k(e, n), minDefined: w(t), maxDefined: w(e) }
          );
        }
        getMinMax(t) {
          const e = this;
          let r,
            {
              min: n,
              max: a,
              minDefined: o,
              maxDefined: i,
            } = e.getUserBounds();
          if (o && i) return { min: n, max: a };
          const s = e.getMatchingVisibleMetas();
          for (let c = 0, l = s.length; c < l; ++c)
            (r = s[c].controller.getMinMax(e, t)),
              o || (n = Math.min(n, r.min)),
              i || (a = Math.max(a, r.max));
          return { min: k(n, k(a, n)), max: k(a, k(n, a)) };
        }
        getPadding() {
          const t = this;
          return {
            left: t.paddingLeft || 0,
            top: t.paddingTop || 0,
            right: t.paddingRight || 0,
            bottom: t.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          S(this.options.beforeUpdate, [this]);
        }
        update(t, e, r) {
          const n = this,
            a = n.options.ticks,
            o = a.sampleSize;
          n.beforeUpdate(),
            (n.maxWidth = t),
            (n.maxHeight = e),
            (n._margins = r =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
            (n.ticks = null),
            (n._labelSizes = null),
            (n._gridLineItems = null),
            (n._labelItems = null),
            n.beforeSetDimensions(),
            n.setDimensions(),
            n.afterSetDimensions(),
            (n._maxLength = n.isHorizontal()
              ? n.width + r.left + r.right
              : n.height + r.top + r.bottom),
            n._dataLimitsCached ||
              (n.beforeDataLimits(),
              n.determineDataLimits(),
              n.afterDataLimits(),
              (n._range = Ue(n, n.options.grace)),
              (n._dataLimitsCached = !0)),
            n.beforeBuildTicks(),
            (n.ticks = n.buildTicks() || []),
            n.afterBuildTicks();
          const i = o < n.ticks.length;
          n._convertTicksToLabels(i ? uo(n.ticks, o) : n.ticks),
            n.configure(),
            n.beforeCalculateLabelRotation(),
            n.calculateLabelRotation(),
            n.afterCalculateLabelRotation(),
            a.display &&
              (a.autoSkip || "auto" === a.source) &&
              ((n.ticks = eo(n, n.ticks)), (n._labelSizes = null)),
            i && n._convertTicksToLabels(n.ticks),
            n.beforeFit(),
            n.fit(),
            n.afterFit(),
            n.afterUpdate();
        }
        configure() {
          const t = this;
          let e,
            r,
            n = t.options.reverse;
          t.isHorizontal()
            ? ((e = t.left), (r = t.right))
            : ((e = t.top), (r = t.bottom), (n = !n)),
            (t._startPixel = e),
            (t._endPixel = r),
            (t._reversePixels = n),
            (t._length = r - e),
            (t._alignToPixels = t.options.alignToPixels);
        }
        afterUpdate() {
          S(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          S(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          const t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0);
        }
        afterSetDimensions() {
          S(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          const e = this;
          e.chart.notifyPlugins(t, e.getContext()), S(e.options[t], [e]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          S(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this,
            r = e.options.ticks;
          let n, a, o;
          for (n = 0, a = t.length; n < a; n++)
            (o = t[n]), (o.label = S(r.callback, [o.value, n, t], e));
          for (n = 0; n < a; n++) x(t[n].label) && (t.splice(n, 1), a--, n--);
        }
        afterTickToLabelConversion() {
          S(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          S(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this,
            e = t.options,
            r = e.ticks,
            n = t.ticks.length,
            a = r.minRotation || 0,
            o = r.maxRotation;
          let i,
            s,
            c,
            l = a;
          if (
            !t._isVisible() ||
            !r.display ||
            a >= o ||
            n <= 1 ||
            !t.isHorizontal()
          )
            return void (t.labelRotation = a);
          const d = t._getLabelSizes(),
            u = d.widest.width,
            h = d.highest.height,
            p = ft(t.chart.width - u, 0, t.maxWidth);
          (i = e.offset ? t.maxWidth / n : p / (n - 1)),
            u + 6 > i &&
              ((i = p / (n - (e.offset ? 0.5 : 1))),
              (s =
                t.maxHeight -
                fo(e.grid) -
                r.padding -
                go(e.title, t.chart.options.font)),
              (c = Math.sqrt(u * u + h * h)),
              (l = st(
                Math.min(
                  Math.asin(Math.min((d.highest.height + 6) / i, 1)),
                  Math.asin(Math.min(s / c, 1)) - Math.asin(h / c)
                )
              )),
              (l = Math.max(a, Math.min(o, l)))),
            (t.labelRotation = l);
        }
        afterCalculateLabelRotation() {
          S(this.options.afterCalculateLabelRotation, [this]);
        }
        beforeFit() {
          S(this.options.beforeFit, [this]);
        }
        fit() {
          const t = this,
            e = { width: 0, height: 0 },
            {
              chart: r,
              options: { ticks: n, title: a, grid: o },
            } = t,
            i = t._isVisible(),
            s = t.isHorizontal();
          if (i) {
            const i = go(a, r.options.font);
            if (
              (s
                ? ((e.width = t.maxWidth), (e.height = fo(o) + i))
                : ((e.height = t.maxHeight), (e.width = fo(o) + i)),
              n.display && t.ticks.length)
            ) {
              const {
                  first: r,
                  last: a,
                  widest: o,
                  highest: i,
                } = t._getLabelSizes(),
                c = 2 * n.padding,
                l = it(t.labelRotation),
                d = Math.cos(l),
                u = Math.sin(l);
              if (s) {
                const r = n.mirror ? 0 : u * o.width + d * i.height;
                e.height = Math.min(t.maxHeight, e.height + r + c);
              } else {
                const r = n.mirror ? 0 : d * o.width + u * i.height;
                e.width = Math.min(t.maxWidth, e.width + r + c);
              }
              t._calculatePadding(r, a, u, d);
            }
          }
          t._handleMargins(),
            s
              ? ((t.width = t._length =
                  r.width - t._margins.left - t._margins.right),
                (t.height = e.height))
              : ((t.width = e.width),
                (t.height = t._length =
                  r.height - t._margins.top - t._margins.bottom));
        }
        _calculatePadding(t, e, r, n) {
          const a = this,
            {
              ticks: { align: o, padding: i },
              position: s,
            } = a.options,
            c = 0 !== a.labelRotation,
            l = "top" !== s && "x" === a.axis;
          if (a.isHorizontal()) {
            const s = a.getPixelForTick(0) - a.left,
              d = a.right - a.getPixelForTick(a.ticks.length - 1);
            let u = 0,
              h = 0;
            c
              ? l
                ? ((u = n * t.width), (h = r * e.height))
                : ((u = r * t.height), (h = n * e.width))
              : "start" === o
              ? (h = e.width)
              : "end" === o
              ? (u = t.width)
              : ((u = t.width / 2), (h = e.width / 2)),
              (a.paddingLeft = Math.max(
                ((u - s + i) * a.width) / (a.width - s),
                0
              )),
              (a.paddingRight = Math.max(
                ((h - d + i) * a.width) / (a.width - d),
                0
              ));
          } else {
            let r = e.height / 2,
              n = t.height / 2;
            "start" === o
              ? ((r = 0), (n = t.height))
              : "end" === o && ((r = e.height), (n = 0)),
              (a.paddingTop = r + i),
              (a.paddingBottom = n + i);
          }
        }
        _handleMargins() {
          const t = this;
          t._margins &&
            ((t._margins.left = Math.max(t.paddingLeft, t._margins.left)),
            (t._margins.top = Math.max(t.paddingTop, t._margins.top)),
            (t._margins.right = Math.max(t.paddingRight, t._margins.right)),
            (t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom)));
        }
        afterFit() {
          S(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return "top" === e || "bottom" === e || "x" === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          const e = this;
          e.beforeTickToLabelConversion(),
            e.generateTickLabels(t),
            e.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          const t = this;
          let e = t._labelSizes;
          if (!e) {
            const r = t.options.ticks.sampleSize;
            let n = t.ticks;
            r < n.length && (n = uo(n, r)),
              (t._labelSizes = e = t._computeLabelSizes(n, n.length));
          }
          return e;
        }
        _computeLabelSizes(t, e) {
          const { ctx: r, _longestTextCache: n } = this,
            a = [],
            o = [];
          let i,
            s,
            c,
            l,
            d,
            u,
            h,
            p,
            f,
            g,
            m,
            v = 0,
            b = 0;
          for (i = 0; i < e; ++i) {
            if (
              ((l = t[i].label),
              (d = this._resolveTickFontOptions(i)),
              (r.font = u = d.string),
              (h = n[u] = n[u] || { data: {}, gc: [] }),
              (p = d.lineHeight),
              (f = g = 0),
              x(l) || _(l))
            ) {
              if (_(l))
                for (s = 0, c = l.length; s < c; ++s)
                  (m = l[s]),
                    x(m) || _(m) || ((f = ve(r, h.data, h.gc, f, m)), (g += p));
            } else (f = ve(r, h.data, h.gc, f, l)), (g = p);
            a.push(f), o.push(g), (v = Math.max(f, v)), (b = Math.max(g, b));
          }
          po(n, e);
          const y = a.indexOf(v),
            w = o.indexOf(b),
            k = (t) => ({ width: a[t] || 0, height: o[t] || 0 });
          return {
            first: k(0),
            last: k(e - 1),
            widest: k(y),
            highest: k(w),
            widths: a,
            heights: o,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          const e = this;
          e._reversePixels && (t = 1 - t);
          const r = e._startPixel + t * e._length;
          return gt(e._alignToPixels ? xe(e.chart, r, 0) : r);
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this,
            r = e.ticks || [];
          if (t >= 0 && t < r.length) {
            const n = r[t];
            return n.$context || (n.$context = vo(e.getContext(), t, n));
          }
          return e.$context || (e.$context = mo(e.chart.getContext(), e));
        }
        _tickSize() {
          const t = this,
            e = t.options.ticks,
            r = it(t.labelRotation),
            n = Math.abs(Math.cos(r)),
            a = Math.abs(Math.sin(r)),
            o = t._getLabelSizes(),
            i = e.autoSkipPadding || 0,
            s = o ? o.widest.width + i : 0,
            c = o ? o.highest.height + i : 0;
          return t.isHorizontal()
            ? c * n > s * a
              ? s / n
              : c / a
            : c * a < s * n
            ? c / n
            : s / a;
        }
        _isVisible() {
          const t = this.options.display;
          return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this,
            r = e.axis,
            n = e.chart,
            a = e.options,
            { grid: o, position: i } = a,
            s = o.offset,
            c = e.isHorizontal(),
            l = e.ticks,
            d = l.length + (s ? 1 : 0),
            u = fo(o),
            h = [],
            p = o.setContext(e.getContext()),
            f = p.drawBorder ? p.borderWidth : 0,
            g = f / 2,
            m = function (t) {
              return xe(n, t, f);
            };
          let v, b, x, _, w, k, M, C, P, S, T, D;
          if ("top" === i)
            (v = m(e.bottom)),
              (k = e.bottom - u),
              (C = v - g),
              (S = m(t.top) + g),
              (D = t.bottom);
          else if ("bottom" === i)
            (v = m(e.top)),
              (S = t.top),
              (D = m(t.bottom) - g),
              (k = v + g),
              (C = e.top + u);
          else if ("left" === i)
            (v = m(e.right)),
              (w = e.right - u),
              (M = v - g),
              (P = m(t.left) + g),
              (T = t.right);
          else if ("right" === i)
            (v = m(e.left)),
              (P = t.left),
              (T = m(t.right) - g),
              (w = v + g),
              (M = e.left + u);
          else if ("x" === r) {
            if ("center" === i) v = m((t.top + t.bottom) / 2 + 0.5);
            else if (y(i)) {
              const t = Object.keys(i)[0],
                r = i[t];
              v = m(e.chart.scales[t].getPixelForValue(r));
            }
            (S = t.top), (D = t.bottom), (k = v + g), (C = k + u);
          } else if ("y" === r) {
            if ("center" === i) v = m((t.left + t.right) / 2);
            else if (y(i)) {
              const t = Object.keys(i)[0],
                r = i[t];
              v = m(e.chart.scales[t].getPixelForValue(r));
            }
            (w = v - g), (M = w - u), (P = t.left), (T = t.right);
          }
          for (b = 0; b < d; ++b) {
            const t = o.setContext(e.getContext(b)),
              r = t.lineWidth,
              a = t.color,
              i = o.borderDash || [],
              l = t.borderDashOffset,
              d = t.tickWidth,
              u = t.tickColor,
              p = t.tickBorderDash || [],
              f = t.tickBorderDashOffset;
            (x = ho(e, b, s)),
              void 0 !== x &&
                ((_ = xe(n, x, r)),
                c ? (w = M = P = T = _) : (k = C = S = D = _),
                h.push({
                  tx1: w,
                  ty1: k,
                  tx2: M,
                  ty2: C,
                  x1: P,
                  y1: S,
                  x2: T,
                  y2: D,
                  width: r,
                  color: a,
                  borderDash: i,
                  borderDashOffset: l,
                  tickWidth: d,
                  tickColor: u,
                  tickBorderDash: p,
                  tickBorderDashOffset: f,
                }));
          }
          return (e._ticksLength = d), (e._borderValue = v), h;
        }
        _computeLabelItems(t) {
          const e = this,
            r = e.axis,
            n = e.options,
            { position: a, ticks: o } = n,
            i = e.isHorizontal(),
            s = e.ticks,
            { align: c, crossAlign: l, padding: d, mirror: u } = o,
            h = fo(n.grid),
            p = h + d,
            f = u ? -d : p,
            g = -it(e.labelRotation),
            m = [];
          let v,
            b,
            x,
            w,
            k,
            M,
            C,
            P,
            S,
            T,
            D,
            R,
            O = "middle";
          if ("top" === a)
            (M = e.bottom - f), (C = e._getXAxisLabelAlignment());
          else if ("bottom" === a)
            (M = e.top + f), (C = e._getXAxisLabelAlignment());
          else if ("left" === a) {
            const t = e._getYAxisLabelAlignment(h);
            (C = t.textAlign), (k = t.x);
          } else if ("right" === a) {
            const t = e._getYAxisLabelAlignment(h);
            (C = t.textAlign), (k = t.x);
          } else if ("x" === r) {
            if ("center" === a) M = (t.top + t.bottom) / 2 + p;
            else if (y(a)) {
              const t = Object.keys(a)[0],
                r = a[t];
              M = e.chart.scales[t].getPixelForValue(r) + p;
            }
            C = e._getXAxisLabelAlignment();
          } else if ("y" === r) {
            if ("center" === a) k = (t.left + t.right) / 2 - p;
            else if (y(a)) {
              const t = Object.keys(a)[0],
                r = a[t];
              k = e.chart.scales[t].getPixelForValue(r);
            }
            C = e._getYAxisLabelAlignment(h).textAlign;
          }
          "y" === r &&
            ("start" === c ? (O = "top") : "end" === c && (O = "bottom"));
          const A = e._getLabelSizes();
          for (v = 0, b = s.length; v < b; ++v) {
            (x = s[v]), (w = x.label);
            const t = o.setContext(e.getContext(v));
            (P = e.getPixelForTick(v) + o.labelOffset),
              (S = e._resolveTickFontOptions(v)),
              (T = S.lineHeight),
              (D = _(w) ? w.length : 1);
            const r = D / 2,
              n = t.color,
              c = t.textStrokeColor,
              d = t.textStrokeWidth;
            let h;
            if (
              (i
                ? ((k = P),
                  (R =
                    "top" === a
                      ? "near" === l || 0 !== g
                        ? -D * T + T / 2
                        : "center" === l
                        ? -A.highest.height / 2 - r * T + T
                        : -A.highest.height + T / 2
                      : "near" === l || 0 !== g
                      ? T / 2
                      : "center" === l
                      ? A.highest.height / 2 - r * T
                      : A.highest.height - D * T),
                  u && (R *= -1))
                : ((M = P), (R = ((1 - D) * T) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = Fe(t.backdropPadding),
                r = A.heights[v],
                n = A.widths[v];
              let a = M + R - e.top,
                o = k - e.left;
              switch (O) {
                case "middle":
                  a -= r / 2;
                  break;
                case "bottom":
                  a -= r;
                  break;
              }
              switch (C) {
                case "center":
                  o -= n / 2;
                  break;
                case "right":
                  o -= n;
                  break;
              }
              h = {
                left: o,
                top: a,
                width: n + e.width,
                height: r + e.height,
                color: t.backdropColor,
              };
            }
            m.push({
              rotation: g,
              label: w,
              font: S,
              color: n,
              strokeColor: c,
              strokeWidth: d,
              textOffset: R,
              textAlign: C,
              textBaseline: O,
              translation: [k, M],
              backdrop: h,
            });
          }
          return m;
        }
        _getXAxisLabelAlignment() {
          const t = this,
            { position: e, ticks: r } = t.options,
            n = -it(t.labelRotation);
          if (n) return "top" === e ? "left" : "right";
          let a = "center";
          return (
            "start" === r.align
              ? (a = "left")
              : "end" === r.align && (a = "right"),
            a
          );
        }
        _getYAxisLabelAlignment(t) {
          const e = this,
            {
              position: r,
              ticks: { crossAlign: n, mirror: a, padding: o },
            } = e.options,
            i = e._getLabelSizes(),
            s = t + o,
            c = i.widest.width;
          let l, d;
          return (
            "left" === r
              ? a
                ? ((l = "left"), (d = e.right + o))
                : ((d = e.right - s),
                  "near" === n
                    ? (l = "right")
                    : "center" === n
                    ? ((l = "center"), (d -= c / 2))
                    : ((l = "left"), (d = e.left)))
              : "right" === r
              ? a
                ? ((l = "right"), (d = e.left + o))
                : ((d = e.left + s),
                  "near" === n
                    ? (l = "left")
                    : "center" === n
                    ? ((l = "center"), (d += c / 2))
                    : ((l = "right"), (d = e.right)))
              : (l = "right"),
            { textAlign: l, x: d }
          );
        }
        _computeLabelArea() {
          const t = this;
          if (t.options.ticks.mirror) return;
          const e = t.chart,
            r = t.options.position;
          return "left" === r || "right" === r
            ? { top: 0, left: t.left, bottom: e.height, right: t.right }
            : "top" === r || "bottom" === r
            ? { top: t.top, left: 0, bottom: t.bottom, right: e.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: r,
            top: n,
            width: a,
            height: o,
          } = this;
          e &&
            (t.save(), (t.fillStyle = e), t.fillRect(r, n, a, o), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this,
            r = e.options.grid;
          if (!e._isVisible() || !r.display) return 0;
          const n = e.ticks,
            a = n.findIndex((e) => e.value === t);
          if (a >= 0) {
            const t = r.setContext(e.getContext(a));
            return t.lineWidth;
          }
          return 0;
        }
        drawGrid(t) {
          const e = this,
            r = e.options.grid,
            n = e.ctx,
            a =
              e._gridLineItems ||
              (e._gridLineItems = e._computeGridLineItems(t));
          let o, i;
          const s = (t, e, r) => {
            r.width &&
              r.color &&
              (n.save(),
              (n.lineWidth = r.width),
              (n.strokeStyle = r.color),
              n.setLineDash(r.borderDash || []),
              (n.lineDashOffset = r.borderDashOffset),
              n.beginPath(),
              n.moveTo(t.x, t.y),
              n.lineTo(e.x, e.y),
              n.stroke(),
              n.restore());
          };
          if (r.display)
            for (o = 0, i = a.length; o < i; ++o) {
              const t = a[o];
              r.drawOnChartArea &&
                s({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                r.drawTicks &&
                  s(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          const t = this,
            {
              chart: e,
              ctx: r,
              options: { grid: n },
            } = t,
            a = n.setContext(t.getContext()),
            o = n.drawBorder ? a.borderWidth : 0;
          if (!o) return;
          const i = n.setContext(t.getContext(0)).lineWidth,
            s = t._borderValue;
          let c, l, d, u;
          t.isHorizontal()
            ? ((c = xe(e, t.left, o) - o / 2),
              (l = xe(e, t.right, i) + i / 2),
              (d = u = s))
            : ((d = xe(e, t.top, o) - o / 2),
              (u = xe(e, t.bottom, i) + i / 2),
              (c = l = s)),
            r.save(),
            (r.lineWidth = a.borderWidth),
            (r.strokeStyle = a.borderColor),
            r.beginPath(),
            r.moveTo(c, d),
            r.lineTo(l, u),
            r.stroke(),
            r.restore();
        }
        drawLabels(t) {
          const e = this,
            r = e.options.ticks;
          if (!r.display) return;
          const n = e.ctx,
            a = e._computeLabelArea();
          a && ke(n, a);
          const o = e._labelItems || (e._labelItems = e._computeLabelItems(t));
          let i, s;
          for (i = 0, s = o.length; i < s; ++i) {
            const t = o[i],
              e = t.font,
              r = t.label;
            t.backdrop &&
              ((n.fillStyle = t.backdrop.color),
              n.fillRect(
                t.backdrop.left,
                t.backdrop.top,
                t.backdrop.width,
                t.backdrop.height
              ));
            let a = t.textOffset;
            Se(n, r, 0, a, e, t);
          }
          a && Me(n);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: r, reverse: n },
          } = this;
          if (!r.display) return;
          const a = Ne(r.font),
            o = Fe(r.padding),
            i = r.align;
          let s = a.lineHeight / 2;
          "bottom" === e
            ? ((s += o.bottom),
              _(r.text) && (s += a.lineHeight * (r.text.length - 1)))
            : (s += o.top);
          const {
            titleX: c,
            titleY: l,
            maxWidth: d,
            rotation: u,
          } = xo(this, s, e, i);
          Se(t, r.text, 0, 0, a, {
            color: r.color,
            maxWidth: d,
            rotation: u,
            textAlign: bo(i, e, n),
            textBaseline: "middle",
            translation: [c, l],
          });
        }
        draw(t) {
          const e = this;
          e._isVisible() &&
            (e.drawBackground(),
            e.drawGrid(t),
            e.drawBorder(),
            e.drawTitle(),
            e.drawLabels(t));
        }
        _layers() {
          const t = this,
            e = t.options,
            r = (e.ticks && e.ticks.z) || 0,
            n = (e.grid && e.grid.z) || 0;
          return t._isVisible() && t.draw === _o.prototype.draw
            ? [
                {
                  z: n,
                  draw(e) {
                    t.drawBackground(), t.drawGrid(e), t.drawTitle();
                  },
                },
                {
                  z: n + 1,
                  draw() {
                    t.drawBorder();
                  },
                },
                {
                  z: r,
                  draw(e) {
                    t.drawLabels(e);
                  },
                },
              ]
            : [
                {
                  z: r,
                  draw(e) {
                    t.draw(e);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this,
            r = e.chart.getSortedVisibleDatasetMetas(),
            n = e.axis + "AxisID",
            a = [];
          let o, i;
          for (o = 0, i = r.length; o < i; ++o) {
            const i = r[o];
            i[n] !== e.id || (t && i.type !== t) || a.push(i);
          }
          return a;
        }
        _resolveTickFontOptions(t) {
          const e = this.options.ticks.setContext(this.getContext(t));
          return Ne(e.font);
        }
        _maxDigits() {
          const t = this,
            e = t._resolveTickFontOptions(0).lineHeight;
          return (t.isHorizontal() ? t.width : t.height) / e;
        }
      }
      class yo {
        constructor(t, e, r) {
          (this.type = t),
            (this.scope = e),
            (this.override = r),
            (this.items = Object.create(null));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            t.prototype
          );
        }
        register(t) {
          const e = this,
            r = Object.getPrototypeOf(t);
          let n;
          Mo(r) && (n = e.register(r));
          const a = e.items,
            o = t.id,
            i = e.scope + "." + o;
          if (!o) throw new Error("class does not have id: " + t);
          return (
            o in a ||
              ((a[o] = t),
              wo(t, i, n),
              e.override && ge.override(t.id, t.overrides)),
            i
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            r = t.id,
            n = this.scope;
          r in e && delete e[r],
            n && r in ge[n] && (delete ge[n][r], this.override && delete de[r]);
        }
      }
      function wo(t, e, r) {
        const n = E(Object.create(null), [
          r ? ge.get(r) : {},
          ge.get(e),
          t.defaults,
        ]);
        ge.set(e, n),
          t.defaultRoutes && ko(e, t.defaultRoutes),
          t.descriptors && ge.describe(e, t.descriptors);
      }
      function ko(t, e) {
        Object.keys(e).forEach((r) => {
          const n = r.split("."),
            a = n.pop(),
            o = [t].concat(n).join("."),
            i = e[r].split("."),
            s = i.pop(),
            c = i.join(".");
          ge.route(o, a, c, s);
        });
      }
      function Mo(t) {
        return "id" in t && "defaults" in t;
      }
      class Co {
        constructor() {
          (this.controllers = new yo(Nn, "datasets", !0)),
            (this.elements = new yo(Ja, "elements")),
            (this.plugins = new yo(Object, "plugins")),
            (this.scales = new yo(_o, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...t) {
          this._each("register", t);
        }
        remove(...t) {
          this._each("unregister", t);
        }
        addControllers(...t) {
          this._each("register", t, this.controllers);
        }
        addElements(...t) {
          this._each("register", t, this.elements);
        }
        addPlugins(...t) {
          this._each("register", t, this.plugins);
        }
        addScales(...t) {
          this._each("register", t, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
          return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
          return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
          return this._get(t, this.scales, "scale");
        }
        removeControllers(...t) {
          this._each("unregister", t, this.controllers);
        }
        removeElements(...t) {
          this._each("unregister", t, this.elements);
        }
        removePlugins(...t) {
          this._each("unregister", t, this.plugins);
        }
        removeScales(...t) {
          this._each("unregister", t, this.scales);
        }
        _each(t, e, r) {
          const n = this;
          [...e].forEach((e) => {
            const a = r || n._getRegistryForType(e);
            r || a.isForType(e) || (a === n.plugins && e.id)
              ? n._exec(t, a, e)
              : T(e, (e) => {
                  const a = r || n._getRegistryForType(e);
                  n._exec(t, a, e);
                });
          });
        }
        _exec(t, e, r) {
          const n = z(t);
          S(r["before" + n], [], r), e[t](r), S(r["after" + n], [], r);
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const r = this._typedRegistries[e];
            if (r.isForType(t)) return r;
          }
          return this.plugins;
        }
        _get(t, e, r) {
          const n = e.get(t);
          if (void 0 === n)
            throw new Error('"' + t + '" is not a registered ' + r + ".");
          return n;
        }
      }
      var Po = new Co();
      class So {
        constructor() {
          this._init = [];
        }
        notify(t, e, r, n) {
          const a = this;
          "beforeInit" === e &&
            ((a._init = a._createDescriptors(t, !0)),
            a._notify(a._init, t, "install"));
          const o = n ? a._descriptors(t).filter(n) : a._descriptors(t),
            i = a._notify(o, t, e, r);
          return (
            "destroy" === e &&
              (a._notify(o, t, "stop"), a._notify(a._init, t, "uninstall")),
            i
          );
        }
        _notify(t, e, r, n) {
          n = n || {};
          for (const a of t) {
            const t = a.plugin,
              o = t[r],
              i = [e, n, a.options];
            if (!1 === S(o, i, t) && n.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          x(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
          const r = t && t.config,
            n = M(r.options && r.options.plugins, {}),
            a = To(r);
          return !1 !== n || e ? Ro(t, a, n, e) : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            r = this._cache,
            n = (t, e) =>
              t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
          this._notify(n(e, r), t, "stop"), this._notify(n(r, e), t, "start");
        }
      }
      function To(t) {
        const e = [],
          r = Object.keys(Po.plugins.items);
        for (let a = 0; a < r.length; a++) e.push(Po.getPlugin(r[a]));
        const n = t.plugins || [];
        for (let a = 0; a < n.length; a++) {
          const t = n[a];
          -1 === e.indexOf(t) && e.push(t);
        }
        return e;
      }
      function Do(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function Ro(t, e, r, n) {
        const a = [],
          o = t.getContext();
        for (let i = 0; i < e.length; i++) {
          const s = e[i],
            c = s.id,
            l = Do(r[c], n);
          null !== l && a.push({ plugin: s, options: Oo(t.config, s, l, o) });
        }
        return a;
      }
      function Oo(t, e, r, n) {
        const a = t.pluginScopeKeys(e),
          o = t.getOptionScopes(r, a);
        return t.createResolver(o, n, [""], {
          scriptable: !1,
          indexable: !1,
          allKeys: !0,
        });
      }
      function Ao(t, e) {
        const r = ge.datasets[t] || {},
          n = (e.datasets || {})[t] || {};
        return n.indexAxis || e.indexAxis || r.indexAxis || "x";
      }
      function Eo(t, e) {
        let r = t;
        return (
          "_index_" === t
            ? (r = e)
            : "_value_" === t && (r = "x" === e ? "y" : "x"),
          r
        );
      }
      function Io(t, e) {
        return t === e ? "_index_" : "_value_";
      }
      function Lo(t) {
        return "top" === t || "bottom" === t
          ? "x"
          : "left" === t || "right" === t
          ? "y"
          : void 0;
      }
      function Fo(t, e) {
        return "x" === t || "y" === t
          ? t
          : e.axis || Lo(e.position) || t.charAt(0).toLowerCase();
      }
      function No(t, e) {
        const r = de[t.type] || { scales: {} },
          n = e.scales || {},
          a = Ao(t.type, e),
          o = Object.create(null),
          i = Object.create(null);
        return (
          Object.keys(n).forEach((t) => {
            const e = n[t],
              s = Fo(t, e),
              c = Io(s, a),
              l = r.scales || {};
            (o[s] = o[s] || t),
              (i[t] = I(Object.create(null), [{ axis: s }, e, l[s], l[c]]));
          }),
          t.data.datasets.forEach((r) => {
            const a = r.type || t.type,
              s = r.indexAxis || Ao(a, e),
              c = de[a] || {},
              l = c.scales || {};
            Object.keys(l).forEach((t) => {
              const e = Eo(t, s),
                a = r[e + "AxisID"] || o[e] || e;
              (i[a] = i[a] || Object.create(null)),
                I(i[a], [{ axis: e }, n[a], l[t]]);
            });
          }),
          Object.keys(i).forEach((t) => {
            const e = i[t];
            I(e, [ge.scales[e.type], ge.scale]);
          }),
          i
        );
      }
      function jo(t) {
        const e = t.options || (t.options = {});
        (e.plugins = M(e.plugins, {})), (e.scales = No(t, e));
      }
      function Uo(t) {
        return (
          (t = t || {}),
          (t.datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      function zo(t) {
        return (t = t || {}), (t.data = Uo(t.data)), jo(t), t;
      }
      const Bo = new Map(),
        Vo = new Set();
      function $o(t, e) {
        let r = Bo.get(t);
        return r || ((r = e()), Bo.set(t, r), Vo.add(r)), r;
      }
      const Wo = (t, e, r) => {
        const n = U(e, r);
        void 0 !== n && t.add(n);
      };
      class Ho {
        constructor(t) {
          (this._config = zo(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = Uo(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          this.clearCache(), jo(t);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
          return $o(t, () => [["datasets." + t, ""]]);
        }
        datasetAnimationScopeKeys(t, e) {
          return $o(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, "transitions." + e],
            ["datasets." + t, ""],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return $o(`${t}-${e}`, () => [
            [
              `datasets.${t}.elements.${e}`,
              "datasets." + t,
              "elements." + e,
              "",
            ],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id,
            r = this.type;
          return $o(`${r}-plugin-${e}`, () => [
            ["plugins." + e, ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const r = this._scopeCache;
          let n = r.get(t);
          return (n && !e) || ((n = new Map()), r.set(t, n)), n;
        }
        getOptionScopes(t, e, r) {
          const { options: n, type: a } = this,
            o = this._cachedScopes(t, r),
            i = o.get(e);
          if (i) return i;
          const s = new Set();
          e.forEach((e) => {
            t && (s.add(t), e.forEach((e) => Wo(s, t, e))),
              e.forEach((t) => Wo(s, n, t)),
              e.forEach((t) => Wo(s, de[a] || {}, t)),
              e.forEach((t) => Wo(s, ge, t)),
              e.forEach((t) => Wo(s, ue, t));
          });
          const c = [...s];
          return Vo.has(e) && o.set(e, c), c;
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, de[e] || {}, ge.datasets[e] || {}, { type: e }, ge, ue];
        }
        resolveNamedOptions(t, e, r, n = [""]) {
          const a = { $shared: !0 },
            { resolver: o, subPrefixes: i } = qo(this._resolverCache, t, n);
          let s = o;
          if (Yo(o, e)) {
            (a.$shared = !1), (r = V(r) ? r() : r);
            const e = this.createResolver(t, r, i);
            s = Qe(o, r, e);
          }
          for (const c of e) a[c] = s[c];
          return a;
        }
        createResolver(t, e, r = [""], n) {
          const { resolver: a } = qo(this._resolverCache, t, r);
          return y(e) ? Qe(a, e, void 0, n) : a;
        }
      }
      function qo(t, e, r) {
        let n = t.get(e);
        n || ((n = new Map()), t.set(e, n));
        const a = r.join();
        let o = n.get(a);
        if (!o) {
          const t = Xe(e, r);
          (o = {
            resolver: t,
            subPrefixes: r.filter((t) => !t.toLowerCase().includes("hover")),
          }),
            n.set(a, o);
        }
        return o;
      }
      function Yo(t, e) {
        const { isScriptable: r, isIndexable: n } = Ge(t);
        for (const a of e)
          if ((r(a) && V(t[a])) || (n(a) && _(t[a]))) return !0;
        return !1;
      }
      var Xo = "3.3.2";
      const Qo = ["top", "bottom", "left", "right", "chartArea"];
      function Go(t, e) {
        return (
          "top" === t || "bottom" === t || (-1 === Qo.indexOf(t) && "x" === e)
        );
      }
      function Jo(t, e) {
        return function (r, n) {
          return r[t] === n[t] ? r[e] - n[e] : r[t] - n[t];
        };
      }
      function Ko(t) {
        const e = t.chart,
          r = e.options.animation;
        e.notifyPlugins("afterRender"), S(r && r.onComplete, [t], e);
      }
      function Zo(t) {
        const e = t.chart,
          r = e.options.animation;
        S(r && r.onProgress, [t], e);
      }
      function ti() {
        return "undefined" !== typeof window && "undefined" !== typeof document;
      }
      function ei(t) {
        return (
          ti() && "string" === typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const ri = {},
        ni = (t) => {
          const e = ei(t);
          return Object.values(ri)
            .filter((t) => t.canvas === e)
            .pop();
        };
      class ai {
        constructor(t, e) {
          const r = this;
          this.config = e = new Ho(e);
          const n = ei(t),
            a = ni(n);
          if (a)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                a.id +
                "' must be destroyed before the canvas can be reused."
            );
          const o = e.createResolver(e.chartOptionScopes(), r.getContext());
          this.platform = r._initializePlatform(n, e);
          const i = r.platform.acquireContext(n, o.aspectRatio),
            s = i && i.canvas,
            c = s && s.height,
            l = s && s.width;
          (this.id = b()),
            (this.ctx = i),
            (this.canvas = s),
            (this.width = l),
            (this.height = c),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this.scale = void 0),
            (this._plugins = new So()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = g(
              () => this.update("resize"),
              o.resizeDelay || 0
            )),
            (ri[r.id] = r),
            i && s
              ? (ln.listen(r, "complete", Ko),
                ln.listen(r, "progress", Zo),
                r._initialize(),
                r.attached && r.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: r,
            height: n,
            _aspectRatio: a,
          } = this;
          return x(t) ? (e && a ? a : n ? r / n : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        _initialize() {
          const t = this;
          return (
            t.notifyPlugins("beforeInit"),
            t.options.responsive
              ? t.resize()
              : Lr(t, t.options.devicePixelRatio),
            t.bindEvents(),
            t.notifyPlugins("afterInit"),
            t
          );
        }
        _initializePlatform(t, e) {
          return e.platform
            ? new e.platform()
            : !ti() ||
              ("undefined" !== typeof OffscreenCanvas &&
                t instanceof OffscreenCanvas)
            ? new Oa()
            : new Ga();
        }
        clear() {
          return _e(this.canvas, this.ctx), this;
        }
        stop() {
          return ln.stop(this), this;
        }
        resize(t, e) {
          ln.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const r = this,
            n = r.options,
            a = r.canvas,
            o = n.maintainAspectRatio && r.aspectRatio,
            i = r.platform.getMaximumSize(a, t, e, o),
            s = n.devicePixelRatio || r.platform.getDevicePixelRatio();
          (r.width = i.width),
            (r.height = i.height),
            (r._aspectRatio = r.aspectRatio),
            Lr(r, s, !0) &&
              (r.notifyPlugins("resize", { size: i }),
              S(n.onResize, [r, i], r),
              r.attached && r._doResize() && r.render());
        }
        ensureScalesHaveIDs() {
          const t = this.options,
            e = t.scales || {};
          T(e, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this,
            e = t.options,
            r = e.scales,
            n = t.scales,
            a = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
          let o = [];
          r &&
            (o = o.concat(
              Object.keys(r).map((t) => {
                const e = r[t],
                  n = Fo(t, e),
                  a = "r" === n,
                  o = "x" === n;
                return {
                  options: e,
                  dposition: a ? "chartArea" : o ? "bottom" : "left",
                  dtype: a ? "radialLinear" : o ? "category" : "linear",
                };
              })
            )),
            T(o, (r) => {
              const o = r.options,
                i = o.id,
                s = Fo(i, o),
                c = M(o.type, r.dtype);
              (void 0 !== o.position &&
                Go(o.position, s) === Go(r.dposition)) ||
                (o.position = r.dposition),
                (a[i] = !0);
              let l = null;
              if (i in n && n[i].type === c) l = n[i];
              else {
                const e = Po.getScale(c);
                (l = new e({ id: i, type: c, ctx: t.ctx, chart: t })),
                  (n[l.id] = l);
              }
              l.init(o, e);
            }),
            T(a, (t, e) => {
              t || delete n[e];
            }),
            T(n, (e) => {
              Da.configure(t, e, e.options), Da.addBox(t, e);
            });
        }
        _updateMetasets() {
          const t = this,
            e = t._metasets,
            r = t.data.datasets.length,
            n = e.length;
          if ((e.sort((t, e) => t.index - e.index), n > r)) {
            for (let e = r; e < n; ++e) t._destroyDatasetMeta(e);
            e.splice(r, n - r);
          }
          t._sortedMetasets = e.slice(0).sort(Jo("order", "index"));
        }
        _removeUnreferencedMetasets() {
          const t = this,
            {
              _metasets: e,
              data: { datasets: r },
            } = t;
          e.length > r.length && delete t._stacks,
            e.forEach((e, n) => {
              0 === r.filter((t) => t === e._dataset).length &&
                t._destroyDatasetMeta(n);
            });
        }
        buildOrUpdateControllers() {
          const t = this,
            e = [],
            r = t.data.datasets;
          let n, a;
          for (
            t._removeUnreferencedMetasets(), n = 0, a = r.length;
            n < a;
            n++
          ) {
            const a = r[n];
            let o = t.getDatasetMeta(n);
            const i = a.type || t.config.type;
            if (
              (o.type &&
                o.type !== i &&
                (t._destroyDatasetMeta(n), (o = t.getDatasetMeta(n))),
              (o.type = i),
              (o.indexAxis = a.indexAxis || Ao(i, t.options)),
              (o.order = a.order || 0),
              (o.index = n),
              (o.label = "" + a.label),
              (o.visible = t.isDatasetVisible(n)),
              o.controller)
            )
              o.controller.updateIndex(n), o.controller.linkScales();
            else {
              const r = Po.getController(i),
                { datasetElementType: a, dataElementType: s } = ge.datasets[i];
              Object.assign(r.prototype, {
                dataElementType: Po.getElement(s),
                datasetElementType: a && Po.getElement(a),
              }),
                (o.controller = new r(t, n)),
                e.push(o.controller);
            }
          }
          return t._updateMetasets(), e;
        }
        _resetElements() {
          const t = this;
          T(
            t.data.datasets,
            (e, r) => {
              t.getDatasetMeta(r).controller.reset();
            },
            t
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
          const e = this,
            r = e.config;
          r.update(),
            (e._options = r.createResolver(
              r.chartOptionScopes(),
              e.getContext()
            )),
            T(e.scales, (t) => {
              Da.removeBox(e, t);
            });
          const n = (e._animationsDisabled = !e.options.animation);
          e.ensureScalesHaveIDs(), e.buildOrUpdateScales();
          const a = new Set(Object.keys(e._listeners)),
            o = new Set(e.options.events);
          if (
            (($(a, o) &&
              !!this._responsiveListeners === e.options.responsive) ||
              (e.unbindEvents(), e.bindEvents()),
            e._plugins.invalidate(),
            !1 === e.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
          )
            return;
          const i = e.buildOrUpdateControllers();
          e.notifyPlugins("beforeElementsUpdate");
          let s = 0;
          for (let c = 0, l = e.data.datasets.length; c < l; c++) {
            const { controller: t } = e.getDatasetMeta(c),
              r = !n && -1 === i.indexOf(t);
            t.buildOrUpdateElements(r), (s = Math.max(+t.getMaxOverflow(), s));
          }
          (e._minPadding = s),
            e._updateLayout(s),
            n ||
              T(i, (t) => {
                t.reset();
              }),
            e._updateDatasets(t),
            e.notifyPlugins("afterUpdate", { mode: t }),
            e._layers.sort(Jo("z", "_idx")),
            e._lastEvent && e._eventHandler(e._lastEvent, !0),
            e.render();
        }
        _updateLayout(t) {
          const e = this;
          if (!1 === e.notifyPlugins("beforeLayout", { cancelable: !0 }))
            return;
          Da.update(e, e.width, e.height, t);
          const r = e.chartArea,
            n = r.width <= 0 || r.height <= 0;
          (e._layers = []),
            T(
              e.boxes,
              (t) => {
                (n && "chartArea" === t.position) ||
                  (t.configure && t.configure(),
                  e._layers.push(...t._layers()));
              },
              e
            ),
            e._layers.forEach((t, e) => {
              t._idx = e;
            }),
            e.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
          const e = this,
            r = "function" === typeof t;
          if (
            !1 !==
            e.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })
          ) {
            for (let n = 0, a = e.data.datasets.length; n < a; ++n)
              e._updateDataset(n, r ? t({ datasetIndex: n }) : t);
            e.notifyPlugins("afterDatasetsUpdate", { mode: t });
          }
        }
        _updateDataset(t, e) {
          const r = this,
            n = r.getDatasetMeta(t),
            a = { meta: n, index: t, mode: e, cancelable: !0 };
          !1 !== r.notifyPlugins("beforeDatasetUpdate", a) &&
            (n.controller._update(e),
            (a.cancelable = !1),
            r.notifyPlugins("afterDatasetUpdate", a));
        }
        render() {
          const t = this;
          !1 !== t.notifyPlugins("beforeRender", { cancelable: !0 }) &&
            (ln.has(t)
              ? t.attached && !ln.running(t) && ln.start(t)
              : (t.draw(), Ko({ chart: t })));
        }
        draw() {
          const t = this;
          let e;
          if (t._resizeBeforeDraw) {
            const { width: e, height: r } = t._resizeBeforeDraw;
            t._resize(e, r), (t._resizeBeforeDraw = null);
          }
          if ((t.clear(), t.width <= 0 || t.height <= 0)) return;
          if (!1 === t.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
          const r = t._layers;
          for (e = 0; e < r.length && r[e].z <= 0; ++e) r[e].draw(t.chartArea);
          for (t._drawDatasets(); e < r.length; ++e) r[e].draw(t.chartArea);
          t.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
          const e = this,
            r = e._sortedMetasets,
            n = [];
          let a, o;
          for (a = 0, o = r.length; a < o; ++a) {
            const e = r[a];
            (t && !e.visible) || n.push(e);
          }
          return n;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          const t = this;
          if (!1 === t.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }))
            return;
          const e = t.getSortedVisibleDatasetMetas();
          for (let r = e.length - 1; r >= 0; --r) t._drawDataset(e[r]);
          t.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
          const e = this,
            r = e.ctx,
            n = t._clip,
            a = e.chartArea,
            o = { meta: t, index: t.index, cancelable: !0 };
          !1 !== e.notifyPlugins("beforeDatasetDraw", o) &&
            (ke(r, {
              left: !1 === n.left ? 0 : a.left - n.left,
              right: !1 === n.right ? e.width : a.right + n.right,
              top: !1 === n.top ? 0 : a.top - n.top,
              bottom: !1 === n.bottom ? e.height : a.bottom + n.bottom,
            }),
            t.controller.draw(),
            Me(r),
            (o.cancelable = !1),
            e.notifyPlugins("afterDatasetDraw", o));
        }
        getElementsAtEventForMode(t, e, r, n) {
          const a = fa.modes[e];
          return "function" === typeof a ? a(this, t, r, n) : [];
        }
        getDatasetMeta(t) {
          const e = this,
            r = e.data.datasets[t],
            n = e._metasets;
          let a = n.filter((t) => t && t._dataset === r).pop();
          return (
            a ||
              ((a = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (r && r.order) || 0,
                index: t,
                _dataset: r,
                _parsed: [],
                _sorted: !1,
              }),
              n.push(a)),
            a
          );
        }
        getContext() {
          return (
            this.$context || (this.$context = { chart: this, type: "chart" })
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const r = this.getDatasetMeta(t);
          return "boolean" === typeof r.hidden ? !r.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          const r = this.getDatasetMeta(t);
          r.hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateDatasetVisibility(t, e) {
          const r = this,
            n = e ? "show" : "hide",
            a = r.getDatasetMeta(t),
            o = a.controller._resolveAnimations(void 0, n);
          r.setDatasetVisibility(t, e),
            o.update(a, { visible: e }),
            r.update((e) => (e.datasetIndex === t ? n : void 0));
        }
        hide(t) {
          this._updateDatasetVisibility(t, !1);
        }
        show(t) {
          this._updateDatasetVisibility(t, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this,
            r = e._metasets && e._metasets[t];
          r && r.controller && (r.controller._destroy(), delete e._metasets[t]);
        }
        destroy() {
          const t = this,
            { canvas: e, ctx: r } = t;
          let n, a;
          for (
            t.stop(), ln.remove(t), n = 0, a = t.data.datasets.length;
            n < a;
            ++n
          )
            t._destroyDatasetMeta(n);
          t.config.clearCache(),
            e &&
              (t.unbindEvents(),
              _e(e, r),
              t.platform.releaseContext(r),
              (t.canvas = null),
              (t.ctx = null)),
            t.notifyPlugins("destroy"),
            delete ri[t.id];
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive
              ? this.bindResponsiveEvents()
              : (this.attached = !0);
        }
        bindUserEvents() {
          const t = this,
            e = t._listeners,
            r = t.platform,
            n = (n, a) => {
              r.addEventListener(t, n, a), (e[n] = a);
            },
            a = function (e, r, n) {
              (e.offsetX = r), (e.offsetY = n), t._eventHandler(e);
            };
          T(t.options.events, (t) => n(t, a));
        }
        bindResponsiveEvents() {
          const t = this;
          t._responsiveListeners || (t._responsiveListeners = {});
          const e = t._responsiveListeners,
            r = t.platform,
            n = (n, a) => {
              r.addEventListener(t, n, a), (e[n] = a);
            },
            a = (n, a) => {
              e[n] && (r.removeEventListener(t, n, a), delete e[n]);
            },
            o = (e, r) => {
              t.canvas && t.resize(e, r);
            };
          let i;
          const s = () => {
            a("attach", s),
              (t.attached = !0),
              t.resize(),
              n("resize", o),
              n("detach", i);
          };
          (i = () => {
            (t.attached = !1), a("resize", o), n("attach", s);
          }),
            r.isAttached(t.canvas) ? s() : i();
        }
        unbindEvents() {
          const t = this;
          T(t._listeners, (e, r) => {
            t.platform.removeEventListener(t, r, e);
          }),
            (t._listeners = {}),
            T(t._responsiveListeners, (e, r) => {
              t.platform.removeEventListener(t, r, e);
            }),
            (t._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, r) {
          const n = r ? "set" : "remove";
          let a, o, i, s;
          for (
            "dataset" === e &&
              ((a = this.getDatasetMeta(t[0].datasetIndex)),
              a.controller["_" + n + "DatasetHoverStyle"]()),
              i = 0,
              s = t.length;
            i < s;
            ++i
          ) {
            o = t[i];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[n + "HoverStyle"](o.element, o.datasetIndex, o.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this,
            r = e._active || [],
            n = t.map(({ datasetIndex: t, index: r }) => {
              const n = e.getDatasetMeta(t);
              if (!n) throw new Error("No dataset found at index " + t);
              return { datasetIndex: t, element: n.data[r], index: r };
            }),
            a = !D(n, r);
          a && ((e._active = n), e._updateHoverStyles(n, r));
        }
        notifyPlugins(t, e, r) {
          return this._plugins.notify(this, t, e, r);
        }
        _updateHoverStyles(t, e, r) {
          const n = this,
            a = n.options.hover,
            o = (t, e) =>
              t.filter(
                (t) =>
                  !e.some(
                    (e) =>
                      t.datasetIndex === e.datasetIndex && t.index === e.index
                  )
              ),
            i = o(e, t),
            s = r ? t : o(t, e);
          i.length && n.updateHoverStyle(i, a.mode, !1),
            s.length && a.mode && n.updateHoverStyle(s, a.mode, !0);
        }
        _eventHandler(t, e) {
          const r = this,
            n = { event: t, replay: e, cancelable: !0 },
            a = (e) =>
              (e.options.events || this.options.events).includes(t.type);
          if (!1 === r.notifyPlugins("beforeEvent", n, a)) return;
          const o = r._handleEvent(t, e);
          return (
            (n.cancelable = !1),
            r.notifyPlugins("afterEvent", n, a),
            (o || n.changed) && r.render(),
            r
          );
        }
        _handleEvent(t, e) {
          const r = this,
            { _active: n = [], options: a } = r,
            o = a.hover,
            i = e;
          let s = [],
            c = !1,
            l = null;
          return (
            "mouseout" !== t.type &&
              ((s = r.getElementsAtEventForMode(t, o.mode, o, i)),
              (l = "click" === t.type ? r._lastEvent : t)),
            (r._lastEvent = null),
            we(t, r.chartArea, r._minPadding) &&
              (S(a.onHover, [t, s, r], r),
              ("mouseup" !== t.type &&
                "click" !== t.type &&
                "contextmenu" !== t.type) ||
                S(a.onClick, [t, s, r], r)),
            (c = !D(s, n)),
            (c || e) && ((r._active = s), r._updateHoverStyles(s, n, e)),
            (r._lastEvent = l),
            c
          );
        }
      }
      const oi = () => T(ai.instances, (t) => t._plugins.invalidate()),
        ii = !0;
      function si(t, e, r) {
        const {
          startAngle: n,
          pixelMargin: a,
          x: o,
          y: i,
          outerRadius: s,
          innerRadius: c,
        } = e;
        let l = a / s;
        t.beginPath(),
          t.arc(o, i, s, n - l, r + l),
          c > a
            ? ((l = a / c), t.arc(o, i, c, r + l, n - l, !0))
            : t.arc(o, i, a, r + Q, n - Q),
          t.closePath(),
          t.clip();
      }
      function ci(t) {
        return Ee(t, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
      }
      function li(t, e, r, n) {
        const a = ci(t.options.borderRadius),
          o = (r - e) / 2,
          i = Math.min(o, (n * e) / 2),
          s = (t) => {
            const e = ((r - Math.min(o, t)) * n) / 2;
            return ft(t, 0, Math.min(o, e));
          };
        return {
          outerStart: s(a.outerStart),
          outerEnd: s(a.outerEnd),
          innerStart: ft(a.innerStart, 0, i),
          innerEnd: ft(a.innerEnd, 0, i),
        };
      }
      function di(t, e, r, n) {
        return { x: r + t * Math.cos(e), y: n + t * Math.sin(e) };
      }
      function ui(t, e, r, n) {
        const { x: a, y: o, startAngle: i, pixelMargin: s, innerRadius: c } = e,
          l = Math.max(e.outerRadius + r - s, 0),
          d = c > 0 ? c + r + s : 0,
          u = n - i,
          h = Math.max(0.001, u * l - r / W) / l,
          p = (u - h) / 2,
          f = i + p,
          g = n - p,
          {
            outerStart: m,
            outerEnd: v,
            innerStart: b,
            innerEnd: x,
          } = li(e, d, l, g - f),
          _ = l - m,
          y = l - v,
          w = f + m / _,
          k = g - v / y,
          M = d + b,
          C = d + x,
          P = f + b / M,
          S = g - x / C;
        if ((t.beginPath(), t.arc(a, o, l, w, k), v > 0)) {
          const e = di(y, k, a, o);
          t.arc(e.x, e.y, v, k, g + Q);
        }
        const T = di(C, g, a, o);
        if ((t.lineTo(T.x, T.y), x > 0)) {
          const e = di(C, S, a, o);
          t.arc(e.x, e.y, x, g + Q, S + Math.PI);
        }
        if ((t.arc(a, o, d, g - x / d, f + b / d, !0), b > 0)) {
          const e = di(M, P, a, o);
          t.arc(e.x, e.y, b, P + Math.PI, f - Q);
        }
        const D = di(_, f, a, o);
        if ((t.lineTo(D.x, D.y), m > 0)) {
          const e = di(_, w, a, o);
          t.arc(e.x, e.y, m, f - Q, w);
        }
        t.closePath();
      }
      function hi(t, e, r) {
        const { fullCircles: n, startAngle: a, circumference: o } = e;
        let i = e.endAngle;
        if (n) {
          ui(t, e, r, a + H);
          for (let e = 0; e < n; ++e) t.fill();
          isNaN(o) || ((i = a + (o % H)), o % H === 0 && (i += H));
        }
        return ui(t, e, r, i), t.fill(), i;
      }
      function pi(t, e, r) {
        const { x: n, y: a, startAngle: o, pixelMargin: i, fullCircles: s } = e,
          c = Math.max(e.outerRadius - i, 0),
          l = e.innerRadius + i;
        let d;
        for (
          r && si(t, e, o + H),
            t.beginPath(),
            t.arc(n, a, l, o + H, o, !0),
            d = 0;
          d < s;
          ++d
        )
          t.stroke();
        for (t.beginPath(), t.arc(n, a, c, o, o + H), d = 0; d < s; ++d)
          t.stroke();
      }
      function fi(t, e, r, n) {
        const { options: a } = e,
          o = "inner" === a.borderAlign;
        a.borderWidth &&
          (o
            ? ((t.lineWidth = 2 * a.borderWidth), (t.lineJoin = "round"))
            : ((t.lineWidth = a.borderWidth), (t.lineJoin = "bevel")),
          e.fullCircles && pi(t, e, o),
          o && si(t, e, n),
          ui(t, e, r, n),
          t.stroke());
      }
      Object.defineProperties(ai, {
        defaults: { enumerable: ii, value: ge },
        instances: { enumerable: ii, value: ri },
        overrides: { enumerable: ii, value: de },
        registry: { enumerable: ii, value: Po },
        version: { enumerable: ii, value: Xo },
        getChart: { enumerable: ii, value: ni },
        register: {
          enumerable: ii,
          value: (...t) => {
            Po.add(...t), oi();
          },
        },
        unregister: {
          enumerable: ii,
          value: (...t) => {
            Po.remove(...t), oi();
          },
        },
      });
      class gi extends Ja {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, r) {
          const n = this.getProps(["x", "y"], r),
            { angle: a, distance: o } = lt(n, { x: t, y: e }),
            {
              startAngle: i,
              endAngle: s,
              innerRadius: c,
              outerRadius: l,
              circumference: d,
            } = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              r
            ),
            u = d >= H || pt(a, i, s),
            h = o >= c && o <= l;
          return u && h;
        }
        getCenterPoint(t) {
          const {
              x: e,
              y: r,
              startAngle: n,
              endAngle: a,
              innerRadius: o,
              outerRadius: i,
            } = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              t
            ),
            s = (n + a) / 2,
            c = (o + i) / 2;
          return { x: e + Math.cos(s) * c, y: r + Math.sin(s) * c };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(t) {
          const e = this,
            { options: r, circumference: n } = e,
            a = (r.offset || 0) / 2;
          if (
            ((e.pixelMargin = "inner" === r.borderAlign ? 0.33 : 0),
            (e.fullCircles = n > H ? Math.floor(n / H) : 0),
            0 === n || e.innerRadius < 0 || e.outerRadius < 0)
          )
            return;
          t.save();
          let o = 0;
          if (a) {
            o = a / 2;
            const r = (e.startAngle + e.endAngle) / 2;
            t.translate(Math.cos(r) * o, Math.sin(r) * o),
              e.circumference >= W && (o = a);
          }
          (t.fillStyle = r.backgroundColor), (t.strokeStyle = r.borderColor);
          const i = hi(t, e, o);
          fi(t, e, o, i), t.restore();
        }
      }
      function mi(t, e, r = e) {
        (t.lineCap = M(r.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(M(r.borderDash, e.borderDash)),
          (t.lineDashOffset = M(r.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = M(r.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = M(r.borderWidth, e.borderWidth)),
          (t.strokeStyle = M(r.borderColor, e.borderColor));
      }
      function vi(t, e, r) {
        t.lineTo(r.x, r.y);
      }
      function bi(t) {
        return t.stepped
          ? Ce
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? Pe
          : vi;
      }
      function xi(t, e, r = {}) {
        const n = t.length,
          { start: a = 0, end: o = n - 1 } = r,
          { start: i, end: s } = e,
          c = Math.max(a, i),
          l = Math.min(o, s),
          d = (a < i && o < i) || (a > s && o > s);
        return {
          count: n,
          start: c,
          loop: e.loop,
          ilen: l < c && !d ? n + l - c : l - c,
        };
      }
      function _i(t, e, r, n) {
        const { points: a, options: o } = e,
          { count: i, start: s, loop: c, ilen: l } = xi(a, r, n),
          d = bi(o);
        let u,
          h,
          p,
          { move: f = !0, reverse: g } = n || {};
        for (u = 0; u <= l; ++u)
          (h = a[(s + (g ? l - u : u)) % i]),
            h.skip ||
              (f ? (t.moveTo(h.x, h.y), (f = !1)) : d(t, p, h, g, o.stepped),
              (p = h));
        return (
          c && ((h = a[(s + (g ? l : 0)) % i]), d(t, p, h, g, o.stepped)), !!c
        );
      }
      function yi(t, e, r, n) {
        const a = e.points,
          { count: o, start: i, ilen: s } = xi(a, r, n),
          { move: c = !0, reverse: l } = n || {};
        let d,
          u,
          h,
          p,
          f,
          g,
          m = 0,
          v = 0;
        const b = (t) => (i + (l ? s - t : t)) % o,
          x = () => {
            p !== f && (t.lineTo(m, f), t.lineTo(m, p), t.lineTo(m, g));
          };
        for (c && ((u = a[b(0)]), t.moveTo(u.x, u.y)), d = 0; d <= s; ++d) {
          if (((u = a[b(d)]), u.skip)) continue;
          const e = u.x,
            r = u.y,
            n = 0 | e;
          n === h
            ? (r < p ? (p = r) : r > f && (f = r), (m = (v * m + e) / ++v))
            : (x(), t.lineTo(e, r), (h = n), (v = 0), (p = f = r)),
            (g = r);
        }
        x();
      }
      function wi(t) {
        const e = t.options,
          r = e.borderDash && e.borderDash.length,
          n =
            !t._decimated &&
            !t._loop &&
            !e.tension &&
            "monotone" !== e.cubicInterpolationMode &&
            !e.stepped &&
            !r;
        return n ? yi : _i;
      }
      function ki(t) {
        return t.stepped
          ? Ur
          : t.tension || "monotone" === t.cubicInterpolationMode
          ? zr
          : jr;
      }
      function Mi(t, e, r, n) {
        let a = e._path;
        a || ((a = e._path = new Path2D()), e.path(a, r, n) && a.closePath()),
          mi(t, e.options),
          t.stroke(a);
      }
      function Ci(t, e, r, n) {
        const { segments: a, options: o } = e,
          i = wi(e);
        for (const s of a)
          mi(t, o, s.style),
            t.beginPath(),
            i(t, e, s, { start: r, end: r + n - 1 }) && t.closePath(),
            t.stroke();
      }
      (gi.id = "arc"),
        (gi.defaults = {
          borderAlign: "center",
          borderColor: "#fff",
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          angle: void 0,
        }),
        (gi.defaultRoutes = { backgroundColor: "backgroundColor" });
      const Pi = "function" === typeof Path2D;
      function Si(t, e, r, n) {
        Pi && 1 === e.segments.length ? Mi(t, e, r, n) : Ci(t, e, r, n);
      }
      class Ti extends Ja {
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
          const r = this,
            n = r.options;
          if (
            (n.tension || "monotone" === n.cubicInterpolationMode) &&
            !n.stepped &&
            !r._pointsUpdated
          ) {
            const a = n.spanGaps ? r._loop : r._fullLoop;
            wr(r._points, n, t, a, e), (r._pointsUpdated = !0);
          }
        }
        set points(t) {
          const e = this;
          (e._points = t),
            delete e._segments,
            delete e._path,
            (e._pointsUpdated = !1);
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments || (this._segments = rn(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            r = t.length;
          return r && e[t[r - 1].end];
        }
        interpolate(t, e) {
          const r = this,
            n = r.options,
            a = t[e],
            o = r.points,
            i = Zr(r, { property: e, start: a, end: a });
          if (!i.length) return;
          const s = [],
            c = ki(n);
          let l, d;
          for (l = 0, d = i.length; l < d; ++l) {
            const { start: r, end: d } = i[l],
              u = o[r],
              h = o[d];
            if (u === h) {
              s.push(u);
              continue;
            }
            const p = Math.abs((a - u[e]) / (h[e] - u[e])),
              f = c(u, h, p, n.stepped);
            (f[e] = t[e]), s.push(f);
          }
          return 1 === s.length ? s[0] : s;
        }
        pathSegment(t, e, r) {
          const n = wi(this);
          return n(t, this, e, r);
        }
        path(t, e, r) {
          const n = this,
            a = n.segments,
            o = wi(n);
          let i = n._loop;
          (e = e || 0), (r = r || n.points.length - e);
          for (const s of a) i &= o(t, n, s, { start: e, end: e + r - 1 });
          return !!i;
        }
        draw(t, e, r, n) {
          const a = this,
            o = a.options || {},
            i = a.points || [];
          i.length &&
            o.borderWidth &&
            (t.save(),
            Si(t, a, r, n),
            t.restore(),
            a.animated && ((a._pointsUpdated = !1), (a._path = void 0)));
        }
      }
      function Di(t, e, r, n) {
        const a = t.options,
          { [r]: o } = t.getProps([r], n);
        return Math.abs(e - o) < a.radius + a.hitRadius;
      }
      (Ti.id = "line"),
        (Ti.defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (Ti.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        }),
        (Ti.descriptors = {
          _scriptable: !0,
          _indexable: (t) => "borderDash" !== t && "fill" !== t,
        });
      class Ri extends Ja {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, r) {
          const n = this.options,
            { x: a, y: o } = this.getProps(["x", "y"], r);
          return (
            Math.pow(t - a, 2) + Math.pow(e - o, 2) <
            Math.pow(n.hitRadius + n.radius, 2)
          );
        }
        inXRange(t, e) {
          return Di(this, t, "x", e);
        }
        inYRange(t, e) {
          return Di(this, t, "y", e);
        }
        getCenterPoint(t) {
          const { x: e, y: r } = this.getProps(["x", "y"], t);
          return { x: e, y: r };
        }
        size(t) {
          t = t || this.options || {};
          let e = t.radius || 0;
          e = Math.max(e, (e && t.hoverRadius) || 0);
          const r = (e && t.borderWidth) || 0;
          return 2 * (e + r);
        }
        draw(t) {
          const e = this,
            r = e.options;
          e.skip ||
            r.radius < 0.1 ||
            ((t.strokeStyle = r.borderColor),
            (t.lineWidth = r.borderWidth),
            (t.fillStyle = r.backgroundColor),
            ye(t, r, e.x, e.y));
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius;
        }
      }
      function Oi(t, e) {
        const {
          x: r,
          y: n,
          base: a,
          width: o,
          height: i,
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let s, c, l, d, u;
        return (
          t.horizontal
            ? ((u = i / 2),
              (s = Math.min(r, a)),
              (c = Math.max(r, a)),
              (l = n - u),
              (d = n + u))
            : ((u = o / 2),
              (s = r - u),
              (c = r + u),
              (l = Math.min(n, a)),
              (d = Math.max(n, a))),
          { left: s, top: l, right: c, bottom: d }
        );
      }
      function Ai(t) {
        let e = t.options.borderSkipped;
        const r = {};
        return e
          ? ((e = t.horizontal
              ? Ei(e, "left", "right", t.base > t.x)
              : Ei(e, "bottom", "top", t.base < t.y)),
            (r[e] = !0),
            r)
          : r;
      }
      function Ei(t, e, r, n) {
        return (
          n ? ((t = Ii(t, e, r)), (t = Li(t, r, e))) : (t = Li(t, e, r)), t
        );
      }
      function Ii(t, e, r) {
        return t === e ? r : t === r ? e : t;
      }
      function Li(t, e, r) {
        return "start" === t ? e : "end" === t ? r : t;
      }
      function Fi(t, e, r, n) {
        return t ? 0 : Math.max(Math.min(e, n), r);
      }
      function Ni(t, e, r) {
        const n = t.options.borderWidth,
          a = Ai(t),
          o = Ie(n);
        return {
          t: Fi(a.top, o.top, 0, r),
          r: Fi(a.right, o.right, 0, e),
          b: Fi(a.bottom, o.bottom, 0, r),
          l: Fi(a.left, o.left, 0, e),
        };
      }
      function ji(t, e, r) {
        const { enableBorderRadius: n } = t.getProps(["enableBorderRadius"]),
          a = t.options.borderRadius,
          o = Le(a),
          i = Math.min(e, r),
          s = Ai(t),
          c = n || y(a);
        return {
          topLeft: Fi(!c || s.top || s.left, o.topLeft, 0, i),
          topRight: Fi(!c || s.top || s.right, o.topRight, 0, i),
          bottomLeft: Fi(!c || s.bottom || s.left, o.bottomLeft, 0, i),
          bottomRight: Fi(!c || s.bottom || s.right, o.bottomRight, 0, i),
        };
      }
      function Ui(t) {
        const e = Oi(t),
          r = e.right - e.left,
          n = e.bottom - e.top,
          a = Ni(t, r / 2, n / 2),
          o = ji(t, r / 2, n / 2);
        return {
          outer: { x: e.left, y: e.top, w: r, h: n, radius: o },
          inner: {
            x: e.left + a.l,
            y: e.top + a.t,
            w: r - a.l - a.r,
            h: n - a.t - a.b,
            radius: {
              topLeft: Math.max(0, o.topLeft - Math.max(a.t, a.l)),
              topRight: Math.max(0, o.topRight - Math.max(a.t, a.r)),
              bottomLeft: Math.max(0, o.bottomLeft - Math.max(a.b, a.l)),
              bottomRight: Math.max(0, o.bottomRight - Math.max(a.b, a.r)),
            },
          },
        };
      }
      function zi(t, e, r, n) {
        const a = null === e,
          o = null === r,
          i = a && o,
          s = t && !i && Oi(t, n);
        return (
          s &&
          (a || (e >= s.left && e <= s.right)) &&
          (o || (r >= s.top && r <= s.bottom))
        );
      }
      function Bi(t) {
        return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
      }
      function Vi(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      (Ri.id = "point"),
        (Ri.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        }),
        (Ri.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      class $i extends Ja {
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const e = this.options,
            { inner: r, outer: n } = Ui(this),
            a = Bi(n.radius) ? Te : Vi;
          t.save(),
            (n.w === r.w && n.h === r.h) ||
              (t.beginPath(),
              a(t, n),
              t.clip(),
              a(t, r),
              (t.fillStyle = e.borderColor),
              t.fill("evenodd")),
            t.beginPath(),
            a(t, r),
            (t.fillStyle = e.backgroundColor),
            t.fill(),
            t.restore();
        }
        inRange(t, e, r) {
          return zi(this, t, e, r);
        }
        inXRange(t, e) {
          return zi(this, t, null, e);
        }
        inYRange(t, e) {
          return zi(this, null, t, e);
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: r,
            base: n,
            horizontal: a,
          } = this.getProps(["x", "y", "base", "horizontal"], t);
          return { x: a ? (e + n) / 2 : e, y: a ? r : (r + n) / 2 };
        }
        getRange(t) {
          return "x" === t ? this.width / 2 : this.height / 2;
        }
      }
      ($i.id = "bar"),
        ($i.defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          enableBorderRadius: !0,
          pointStyle: void 0,
        }),
        ($i.defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        });
      const Wi = {
        average(t) {
          if (!t.length) return !1;
          let e,
            r,
            n = 0,
            a = 0,
            o = 0;
          for (e = 0, r = t.length; e < r; ++e) {
            const r = t[e].element;
            if (r && r.hasValue()) {
              const t = r.tooltipPosition();
              (n += t.x), (a += t.y), ++o;
            }
          }
          return { x: n / o, y: a / o };
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let r,
            n,
            a,
            o = e.x,
            i = e.y,
            s = Number.POSITIVE_INFINITY;
          for (r = 0, n = t.length; r < n; ++r) {
            const n = t[r].element;
            if (n && n.hasValue()) {
              const t = n.getCenterPoint(),
                r = dt(e, t);
              r < s && ((s = r), (a = n));
            }
          }
          if (a) {
            const t = a.tooltipPosition();
            (o = t.x), (i = t.y);
          }
          return { x: o, y: i };
        },
      };
      function Hi(t, e) {
        return e && (_(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function qi(t) {
        return ("string" === typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function Yi(t, e) {
        const { element: r, datasetIndex: n, index: a } = e,
          o = t.getDatasetMeta(n).controller,
          { label: i, value: s } = o.getLabelAndValue(a);
        return {
          chart: t,
          label: i,
          parsed: o.getParsed(a),
          raw: t.data.datasets[n].data[a],
          formattedValue: s,
          dataset: o.getDataset(),
          dataIndex: a,
          datasetIndex: n,
          element: r,
        };
      }
      function Xi(t, e) {
        const r = t._chart.ctx,
          { body: n, footer: a, title: o } = t,
          { boxWidth: i, boxHeight: s } = e,
          c = Ne(e.bodyFont),
          l = Ne(e.titleFont),
          d = Ne(e.footerFont),
          u = o.length,
          h = a.length,
          p = n.length,
          f = Fe(e.padding);
        let g = f.height,
          m = 0,
          v = n.reduce(
            (t, e) => t + e.before.length + e.lines.length + e.after.length,
            0
          );
        if (
          ((v += t.beforeBody.length + t.afterBody.length),
          u &&
            (g +=
              u * l.lineHeight +
              (u - 1) * e.titleSpacing +
              e.titleMarginBottom),
          v)
        ) {
          const t = e.displayColors ? Math.max(s, c.lineHeight) : c.lineHeight;
          g += p * t + (v - p) * c.lineHeight + (v - 1) * e.bodySpacing;
        }
        h &&
          (g +=
            e.footerMarginTop + h * d.lineHeight + (h - 1) * e.footerSpacing);
        let b = 0;
        const x = function (t) {
          m = Math.max(m, r.measureText(t).width + b);
        };
        return (
          r.save(),
          (r.font = l.string),
          T(t.title, x),
          (r.font = c.string),
          T(t.beforeBody.concat(t.afterBody), x),
          (b = e.displayColors ? i + 2 : 0),
          T(n, (t) => {
            T(t.before, x), T(t.lines, x), T(t.after, x);
          }),
          (b = 0),
          (r.font = d.string),
          T(t.footer, x),
          r.restore(),
          (m += f.width),
          { width: m, height: g }
        );
      }
      function Qi(t, e) {
        const { y: r, height: n } = e;
        return r < n / 2 ? "top" : r > t.height - n / 2 ? "bottom" : "center";
      }
      function Gi(t, e, r, n) {
        const { x: a, width: o } = n,
          i = r.caretSize + r.caretPadding;
        return (
          ("left" === t && a + o + i > e.width) ||
          ("right" === t && a - o - i < 0) ||
          void 0
        );
      }
      function Ji(t, e, r, n) {
        const { x: a, width: o } = r,
          {
            width: i,
            chartArea: { left: s, right: c },
          } = t;
        let l = "center";
        return (
          "center" === n
            ? (l = a <= (s + c) / 2 ? "left" : "right")
            : a <= o / 2
            ? (l = "left")
            : a >= i - o / 2 && (l = "right"),
          Gi(l, t, e, r) && (l = "center"),
          l
        );
      }
      function Ki(t, e, r) {
        const n = e.yAlign || Qi(t, r);
        return { xAlign: e.xAlign || Ji(t, e, r, n), yAlign: n };
      }
      function Zi(t, e) {
        let { x: r, width: n } = t;
        return "right" === e ? (r -= n) : "center" === e && (r -= n / 2), r;
      }
      function ts(t, e, r) {
        let { y: n, height: a } = t;
        return (
          "top" === e ? (n += r) : (n -= "bottom" === e ? a + r : a / 2), n
        );
      }
      function es(t, e, r, n) {
        const { caretSize: a, caretPadding: o, cornerRadius: i } = t,
          { xAlign: s, yAlign: c } = r,
          l = a + o,
          d = i + o;
        let u = Zi(e, s);
        const h = ts(e, c, l);
        return (
          "center" === c
            ? "left" === s
              ? (u += l)
              : "right" === s && (u -= l)
            : "left" === s
            ? (u -= d)
            : "right" === s && (u += d),
          { x: ft(u, 0, n.width - e.width), y: ft(h, 0, n.height - e.height) }
        );
      }
      function rs(t, e, r) {
        const n = Fe(r.padding);
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - n.right
          : t.x + n.left;
      }
      function ns(t) {
        return Hi([], qi(t));
      }
      function as(t, e, r) {
        return Object.assign(Object.create(t), {
          tooltip: e,
          tooltipItems: r,
          type: "tooltip",
        });
      }
      function os(t, e) {
        const r =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return r ? t.override(r) : t;
      }
      class is extends Ja {
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._chart = t._chart),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
        }
        initialize(t) {
          (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
        }
        _resolveAnimations() {
          const t = this,
            e = t._cachedAnimations;
          if (e) return e;
          const r = t._chart,
            n = t.options.setContext(t.getContext()),
            a = n.enabled && r.options.animation && n.animations,
            o = new mn(t._chart, a);
          return a._cacheable && (t._cachedAnimations = Object.freeze(o)), o;
        }
        getContext() {
          const t = this;
          return (
            t.$context ||
            (t.$context = as(t._chart.getContext(), t, t._tooltipItems))
          );
        }
        getTitle(t, e) {
          const r = this,
            { callbacks: n } = e,
            a = n.beforeTitle.apply(r, [t]),
            o = n.title.apply(r, [t]),
            i = n.afterTitle.apply(r, [t]);
          let s = [];
          return (s = Hi(s, qi(a))), (s = Hi(s, qi(o))), (s = Hi(s, qi(i))), s;
        }
        getBeforeBody(t, e) {
          return ns(e.callbacks.beforeBody.apply(this, [t]));
        }
        getBody(t, e) {
          const r = this,
            { callbacks: n } = e,
            a = [];
          return (
            T(t, (t) => {
              const e = { before: [], lines: [], after: [] },
                o = os(n, t);
              Hi(e.before, qi(o.beforeLabel.call(r, t))),
                Hi(e.lines, o.label.call(r, t)),
                Hi(e.after, qi(o.afterLabel.call(r, t))),
                a.push(e);
            }),
            a
          );
        }
        getAfterBody(t, e) {
          return ns(e.callbacks.afterBody.apply(this, [t]));
        }
        getFooter(t, e) {
          const r = this,
            { callbacks: n } = e,
            a = n.beforeFooter.apply(r, [t]),
            o = n.footer.apply(r, [t]),
            i = n.afterFooter.apply(r, [t]);
          let s = [];
          return (s = Hi(s, qi(a))), (s = Hi(s, qi(o))), (s = Hi(s, qi(i))), s;
        }
        _createItems(t) {
          const e = this,
            r = e._active,
            n = e._chart.data,
            a = [],
            o = [],
            i = [];
          let s,
            c,
            l = [];
          for (s = 0, c = r.length; s < c; ++s) l.push(Yi(e._chart, r[s]));
          return (
            t.filter && (l = l.filter((e, r, a) => t.filter(e, r, a, n))),
            t.itemSort && (l = l.sort((e, r) => t.itemSort(e, r, n))),
            T(l, (r) => {
              const n = os(t.callbacks, r);
              a.push(n.labelColor.call(e, r)),
                o.push(n.labelPointStyle.call(e, r)),
                i.push(n.labelTextColor.call(e, r));
            }),
            (e.labelColors = a),
            (e.labelPointStyles = o),
            (e.labelTextColors = i),
            (e.dataPoints = l),
            l
          );
        }
        update(t, e) {
          const r = this,
            n = r.options.setContext(r.getContext()),
            a = r._active;
          let o,
            i = [];
          if (a.length) {
            const t = Wi[n.position].call(r, a, r._eventPosition);
            (i = r._createItems(n)),
              (r.title = r.getTitle(i, n)),
              (r.beforeBody = r.getBeforeBody(i, n)),
              (r.body = r.getBody(i, n)),
              (r.afterBody = r.getAfterBody(i, n)),
              (r.footer = r.getFooter(i, n));
            const e = (r._size = Xi(r, n)),
              s = Object.assign({}, t, e),
              c = Ki(r._chart, n, s),
              l = es(n, s, c, r._chart);
            (r.xAlign = c.xAlign),
              (r.yAlign = c.yAlign),
              (o = {
                opacity: 1,
                x: l.x,
                y: l.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              });
          } else 0 !== r.opacity && (o = { opacity: 0 });
          (r._tooltipItems = i),
            (r.$context = void 0),
            o && r._resolveAnimations().update(r, o),
            t &&
              n.external &&
              n.external.call(r, { chart: r._chart, tooltip: r, replay: e });
        }
        drawCaret(t, e, r, n) {
          const a = this.getCaretPosition(t, r, n);
          e.lineTo(a.x1, a.y1), e.lineTo(a.x2, a.y2), e.lineTo(a.x3, a.y3);
        }
        getCaretPosition(t, e, r) {
          const { xAlign: n, yAlign: a } = this,
            { cornerRadius: o, caretSize: i } = r,
            { x: s, y: c } = t,
            { width: l, height: d } = e;
          let u, h, p, f, g, m;
          return (
            "center" === a
              ? ((g = c + d / 2),
                "left" === n
                  ? ((u = s), (h = u - i), (f = g + i), (m = g - i))
                  : ((u = s + l), (h = u + i), (f = g - i), (m = g + i)),
                (p = u))
              : ((h =
                  "left" === n
                    ? s + o + i
                    : "right" === n
                    ? s + l - o - i
                    : this.caretX),
                "top" === a
                  ? ((f = c), (g = f - i), (u = h - i), (p = h + i))
                  : ((f = c + d), (g = f + i), (u = h + i), (p = h - i)),
                (m = f)),
            { x1: u, x2: h, x3: p, y1: f, y2: g, y3: m }
          );
        }
        drawTitle(t, e, r) {
          const n = this,
            a = n.title,
            o = a.length;
          let i, s, c;
          if (o) {
            const l = qr(r.rtl, n.x, n.width);
            for (
              t.x = rs(n, r.titleAlign, r),
                e.textAlign = l.textAlign(r.titleAlign),
                e.textBaseline = "middle",
                i = Ne(r.titleFont),
                s = r.titleSpacing,
                e.fillStyle = r.titleColor,
                e.font = i.string,
                c = 0;
              c < o;
              ++c
            )
              e.fillText(a[c], l.x(t.x), t.y + i.lineHeight / 2),
                (t.y += i.lineHeight + s),
                c + 1 === o && (t.y += r.titleMarginBottom - s);
          }
        }
        _drawColorBox(t, e, r, n, a) {
          const o = this,
            i = o.labelColors[r],
            s = o.labelPointStyles[r],
            { boxHeight: c, boxWidth: l } = a,
            d = Ne(a.bodyFont),
            u = rs(o, "left", a),
            h = n.x(u),
            p = c < d.lineHeight ? (d.lineHeight - c) / 2 : 0,
            f = e.y + p;
          if (a.usePointStyle) {
            const e = {
                radius: Math.min(l, c) / 2,
                pointStyle: s.pointStyle,
                rotation: s.rotation,
                borderWidth: 1,
              },
              r = n.leftForLtr(h, l) + l / 2,
              o = f + c / 2;
            (t.strokeStyle = a.multiKeyBackground),
              (t.fillStyle = a.multiKeyBackground),
              ye(t, e, r, o),
              (t.strokeStyle = i.borderColor),
              (t.fillStyle = i.backgroundColor),
              ye(t, e, r, o);
          } else {
            (t.lineWidth = i.borderWidth || 1),
              (t.strokeStyle = i.borderColor),
              t.setLineDash(i.borderDash || []),
              (t.lineDashOffset = i.borderDashOffset || 0);
            const e = n.leftForLtr(h, l),
              r = n.leftForLtr(n.xPlus(h, 1), l - 2),
              o = Le(i.borderRadius);
            Object.values(o).some((t) => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = a.multiKeyBackground),
                Te(t, { x: e, y: f, w: l, h: c, radius: o }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = i.backgroundColor),
                t.beginPath(),
                Te(t, { x: r, y: f + 1, w: l - 2, h: c - 2, radius: o }),
                t.fill())
              : ((t.fillStyle = a.multiKeyBackground),
                t.fillRect(e, f, l, c),
                t.strokeRect(e, f, l, c),
                (t.fillStyle = i.backgroundColor),
                t.fillRect(r, f + 1, l - 2, c - 2));
          }
          t.fillStyle = o.labelTextColors[r];
        }
        drawBody(t, e, r) {
          const n = this,
            { body: a } = n,
            {
              bodySpacing: o,
              bodyAlign: i,
              displayColors: s,
              boxHeight: c,
              boxWidth: l,
            } = r,
            d = Ne(r.bodyFont);
          let u = d.lineHeight,
            h = 0;
          const p = qr(r.rtl, n.x, n.width),
            f = function (r) {
              e.fillText(r, p.x(t.x + h), t.y + u / 2), (t.y += u + o);
            },
            g = p.textAlign(i);
          let m, v, b, x, _, y, w;
          for (
            e.textAlign = i,
              e.textBaseline = "middle",
              e.font = d.string,
              t.x = rs(n, g, r),
              e.fillStyle = r.bodyColor,
              T(n.beforeBody, f),
              h = s && "right" !== g ? ("center" === i ? l / 2 + 1 : l + 2) : 0,
              x = 0,
              y = a.length;
            x < y;
            ++x
          ) {
            for (
              m = a[x],
                v = n.labelTextColors[x],
                e.fillStyle = v,
                T(m.before, f),
                b = m.lines,
                s &&
                  b.length &&
                  (n._drawColorBox(e, t, x, p, r),
                  (u = Math.max(d.lineHeight, c))),
                _ = 0,
                w = b.length;
              _ < w;
              ++_
            )
              f(b[_]), (u = d.lineHeight);
            T(m.after, f);
          }
          (h = 0), (u = d.lineHeight), T(n.afterBody, f), (t.y -= o);
        }
        drawFooter(t, e, r) {
          const n = this,
            a = n.footer,
            o = a.length;
          let i, s;
          if (o) {
            const c = qr(r.rtl, n.x, n.width);
            for (
              t.x = rs(n, r.footerAlign, r),
                t.y += r.footerMarginTop,
                e.textAlign = c.textAlign(r.footerAlign),
                e.textBaseline = "middle",
                i = Ne(r.footerFont),
                e.fillStyle = r.footerColor,
                e.font = i.string,
                s = 0;
              s < o;
              ++s
            )
              e.fillText(a[s], c.x(t.x), t.y + i.lineHeight / 2),
                (t.y += i.lineHeight + r.footerSpacing);
          }
        }
        drawBackground(t, e, r, n) {
          const { xAlign: a, yAlign: o } = this,
            { x: i, y: s } = t,
            { width: c, height: l } = r,
            d = n.cornerRadius;
          (e.fillStyle = n.backgroundColor),
            (e.strokeStyle = n.borderColor),
            (e.lineWidth = n.borderWidth),
            e.beginPath(),
            e.moveTo(i + d, s),
            "top" === o && this.drawCaret(t, e, r, n),
            e.lineTo(i + c - d, s),
            e.quadraticCurveTo(i + c, s, i + c, s + d),
            "center" === o && "right" === a && this.drawCaret(t, e, r, n),
            e.lineTo(i + c, s + l - d),
            e.quadraticCurveTo(i + c, s + l, i + c - d, s + l),
            "bottom" === o && this.drawCaret(t, e, r, n),
            e.lineTo(i + d, s + l),
            e.quadraticCurveTo(i, s + l, i, s + l - d),
            "center" === o && "left" === a && this.drawCaret(t, e, r, n),
            e.lineTo(i, s + d),
            e.quadraticCurveTo(i, s, i + d, s),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
          const e = this,
            r = e._chart,
            n = e.$animations,
            a = n && n.x,
            o = n && n.y;
          if (a || o) {
            const n = Wi[t.position].call(e, e._active, e._eventPosition);
            if (!n) return;
            const i = (e._size = Xi(e, t)),
              s = Object.assign({}, n, e._size),
              c = Ki(r, t, s),
              l = es(t, s, c, r);
            (a._to === l.x && o._to === l.y) ||
              ((e.xAlign = c.xAlign),
              (e.yAlign = c.yAlign),
              (e.width = i.width),
              (e.height = i.height),
              (e.caretX = n.x),
              (e.caretY = n.y),
              e._resolveAnimations().update(e, l));
          }
        }
        draw(t) {
          const e = this,
            r = e.options.setContext(e.getContext());
          let n = e.opacity;
          if (!n) return;
          e._updateAnimationTarget(r);
          const a = { width: e.width, height: e.height },
            o = { x: e.x, y: e.y };
          n = Math.abs(n) < 0.001 ? 0 : n;
          const i = Fe(r.padding),
            s =
              e.title.length ||
              e.beforeBody.length ||
              e.body.length ||
              e.afterBody.length ||
              e.footer.length;
          r.enabled &&
            s &&
            (t.save(),
            (t.globalAlpha = n),
            e.drawBackground(o, t, a, r),
            Yr(t, r.textDirection),
            (o.y += i.top),
            e.drawTitle(o, t, r),
            e.drawBody(o, t, r),
            e.drawFooter(o, t, r),
            Xr(t, r.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const r = this,
            n = r._active,
            a = t.map(({ datasetIndex: t, index: e }) => {
              const n = r._chart.getDatasetMeta(t);
              if (!n) throw new Error("Cannot find a dataset at index " + t);
              return { datasetIndex: t, element: n.data[e], index: e };
            }),
            o = !D(n, a),
            i = r._positionChanged(a, e);
          (o || i) && ((r._active = a), (r._eventPosition = e), r.update(!0));
        }
        handleEvent(t, e) {
          const r = this,
            n = r.options,
            a = r._active || [];
          let o = !1,
            i = [];
          "mouseout" !== t.type &&
            ((i = r._chart.getElementsAtEventForMode(t, n.mode, n, e)),
            n.reverse && i.reverse());
          const s = r._positionChanged(i, t);
          return (
            (o = e || !D(i, a) || s),
            o &&
              ((r._active = i),
              (n.enabled || n.external) &&
                ((r._eventPosition = { x: t.x, y: t.y }), r.update(!0, e))),
            o
          );
        }
        _positionChanged(t, e) {
          const { caretX: r, caretY: n, options: a } = this,
            o = Wi[a.position].call(this, t, e);
          return !1 !== o && (r !== o.x || n !== o.y);
        }
      }
      is.positioners = Wi;
      const ss = (t, e, r) =>
        "string" === typeof e ? t.push(e) - 1 : isNaN(e) ? null : r;
      function cs(t, e, r) {
        const n = t.indexOf(e);
        if (-1 === n) return ss(t, e, r);
        const a = t.lastIndexOf(e);
        return n !== a ? r : n;
      }
      const ls = (t, e) => (null === t ? null : ft(Math.round(t), 0, e));
      class ds extends _o {
        constructor(t) {
          super(t), (this._startValue = void 0), (this._valueRange = 0);
        }
        parse(t, e) {
          if (x(t)) return null;
          const r = this.getLabels();
          return (
            (e = isFinite(e) && r[e] === t ? e : cs(r, t, M(e, t))),
            ls(e, r.length - 1)
          );
        }
        determineDataLimits() {
          const t = this,
            { minDefined: e, maxDefined: r } = t.getUserBounds();
          let { min: n, max: a } = t.getMinMax(!0);
          "ticks" === t.options.bounds &&
            (e || (n = 0), r || (a = t.getLabels().length - 1)),
            (t.min = n),
            (t.max = a);
        }
        buildTicks() {
          const t = this,
            e = t.min,
            r = t.max,
            n = t.options.offset,
            a = [];
          let o = t.getLabels();
          (o = 0 === e && r === o.length - 1 ? o : o.slice(e, r + 1)),
            (t._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
            (t._startValue = t.min - (n ? 0.5 : 0));
          for (let i = e; i <= r; i++) a.push({ value: i });
          return a;
        }
        getLabelForValue(t) {
          const e = this,
            r = e.getLabels();
          return t >= 0 && t < r.length ? r[t] : t;
        }
        configure() {
          const t = this;
          super.configure(),
            t.isHorizontal() || (t._reversePixels = !t._reversePixels);
        }
        getPixelForValue(t) {
          const e = this;
          return (
            "number" !== typeof t && (t = e.parse(t)),
            null === t
              ? NaN
              : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
          );
        }
        getPixelForTick(t) {
          const e = this,
            r = e.ticks;
          return t < 0 || t > r.length - 1
            ? null
            : e.getPixelForValue(r[t].value);
        }
        getValueForPixel(t) {
          const e = this;
          return Math.round(
            e._startValue + e.getDecimalForPixel(t) * e._valueRange
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      function us(t, e) {
        const r = [],
          n = 1e-14,
          {
            bounds: a,
            step: o,
            min: i,
            max: s,
            precision: c,
            count: l,
            maxTicks: d,
            maxDigits: u,
            includeBounds: h,
          } = t,
          p = o || 1,
          f = d - 1,
          { min: g, max: m } = e,
          v = !x(i),
          b = !x(s),
          _ = !x(l),
          y = (m - g) / (u + 1);
        let w,
          k,
          M,
          C,
          P = tt((m - g) / f / p) * p;
        if (P < n && !v && !b) return [{ value: g }, { value: m }];
        (C = Math.ceil(m / P) - Math.floor(g / P)),
          C > f && (P = tt((C * P) / f / p) * p),
          x(c) || ((w = Math.pow(10, c)), (P = Math.ceil(P * w) / w)),
          "ticks" === a
            ? ((k = Math.floor(g / P) * P), (M = Math.ceil(m / P) * P))
            : ((k = g), (M = m)),
          v && b && o && at((s - i) / o, P / 1e3)
            ? ((C = Math.min((s - i) / P, d)),
              (P = (s - i) / C),
              (k = i),
              (M = s))
            : _
            ? ((k = v ? i : k), (M = b ? s : M), (C = l - 1), (P = (M - k) / C))
            : ((C = (M - k) / P),
              (C = nt(C, Math.round(C), P / 1e3)
                ? Math.round(C)
                : Math.ceil(C)));
        const S = Math.max(ct(P), ct(k));
        (w = Math.pow(10, x(c) ? S : c)),
          (k = Math.round(k * w) / w),
          (M = Math.round(M * w) / w);
        let T = 0;
        for (
          v &&
          (h && k !== i
            ? (r.push({ value: i }),
              k < i && T++,
              nt(Math.round((k + T * P) * w) / w, i, hs(i, y, t)) && T++)
            : k < i && T++);
          T < C;
          ++T
        )
          r.push({ value: Math.round((k + T * P) * w) / w });
        return (
          b && h && M !== s
            ? nt(r[r.length - 1].value, s, hs(s, y, t))
              ? (r[r.length - 1].value = s)
              : r.push({ value: s })
            : (b && M !== s) || r.push({ value: M }),
          r
        );
      }
      function hs(t, e, { horizontal: r, minRotation: n }) {
        const a = it(n),
          o = (r ? Math.sin(a) : Math.cos(a)) || 0.001,
          i = 0.75 * e * ("" + t).length;
        return Math.min(e / o, i);
      }
      (ds.id = "category"),
        (ds.defaults = { ticks: { callback: ds.prototype.getLabelForValue } });
      class ps extends _o {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          return x(t) ||
            (("number" === typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const t = this,
            { beginAtZero: e } = t.options,
            { minDefined: r, maxDefined: n } = t.getUserBounds();
          let { min: a, max: o } = t;
          const i = (t) => (a = r ? a : t),
            s = (t) => (o = n ? o : t);
          if (e) {
            const t = Z(a),
              e = Z(o);
            t < 0 && e < 0 ? s(0) : t > 0 && e > 0 && i(0);
          }
          a === o && (s(o + 1), e || i(a - 1)), (t.min = a), (t.max = o);
        }
        getTickLimit() {
          const t = this,
            e = t.options.ticks;
          let r,
            { maxTicksLimit: n, stepSize: a } = e;
          return (
            a
              ? (r = Math.ceil(t.max / a) - Math.floor(t.min / a) + 1)
              : ((r = t.computeTickLimit()), (n = n || 11)),
            n && (r = Math.min(n, r)),
            r
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this,
            e = t.options,
            r = e.ticks;
          let n = t.getTickLimit();
          n = Math.max(2, n);
          const a = {
              maxTicks: n,
              bounds: e.bounds,
              min: e.min,
              max: e.max,
              precision: r.precision,
              step: r.stepSize,
              count: r.count,
              maxDigits: t._maxDigits(),
              horizontal: t.isHorizontal(),
              minRotation: r.minRotation || 0,
              includeBounds: !1 !== r.includeBounds,
            },
            o = t._range || t,
            i = us(a, o);
          return (
            "ticks" === e.bounds && ot(i, t, "value"),
            e.reverse
              ? (i.reverse(), (t.start = t.max), (t.end = t.min))
              : ((t.start = t.min), (t.end = t.max)),
            i
          );
        }
        configure() {
          const t = this,
            e = t.ticks;
          let r = t.min,
            n = t.max;
          if ((super.configure(), t.options.offset && e.length)) {
            const t = (n - r) / Math.max(e.length - 1, 1) / 2;
            (r -= t), (n += t);
          }
          (t._startValue = r), (t._endValue = n), (t._valueRange = n - r);
        }
        getLabelForValue(t) {
          return $r(t, this.chart.options.locale);
        }
      }
      class fs extends ps {
        determineDataLimits() {
          const t = this,
            { min: e, max: r } = t.getMinMax(!0);
          (t.min = w(e) ? e : 0),
            (t.max = w(r) ? r : 1),
            t.handleTickRangeOptions();
        }
        computeTickLimit() {
          const t = this,
            e = t.isHorizontal(),
            r = e ? t.width : t.height,
            n = it(t.options.ticks.minRotation),
            a = (e ? Math.sin(n) : Math.cos(n)) || 0.001,
            o = t._resolveTickFontOptions(0);
          return Math.ceil(r / Math.min(40, o.lineHeight / a));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal(
                (t - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(t) {
          return (
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
      }
      function gs(t) {
        const e = t / Math.pow(10, Math.floor(K(t)));
        return 1 === e;
      }
      function ms(t, e) {
        const r = Math.floor(K(e.max)),
          n = Math.ceil(e.max / Math.pow(10, r)),
          a = [];
        let o = k(t.min, Math.pow(10, Math.floor(K(e.min)))),
          i = Math.floor(K(o)),
          s = Math.floor(o / Math.pow(10, i)),
          c = i < 0 ? Math.pow(10, Math.abs(i)) : 1;
        do {
          a.push({ value: o, major: gs(o) }),
            ++s,
            10 === s && ((s = 1), ++i, (c = i >= 0 ? 1 : c)),
            (o = Math.round(s * Math.pow(10, i) * c) / c);
        } while (i < r || (i === r && s < n));
        const l = k(t.max, o);
        return a.push({ value: l, major: gs(o) }), a;
      }
      (fs.id = "linear"),
        (fs.defaults = { ticks: { callback: to.formatters.numeric } });
      class vs extends _o {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          const r = ps.prototype.parse.apply(this, [t, e]);
          if (0 !== r) return w(r) && r > 0 ? r : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const t = this,
            { min: e, max: r } = t.getMinMax(!0);
          (t.min = w(e) ? Math.max(0, e) : null),
            (t.max = w(r) ? Math.max(0, r) : null),
            t.options.beginAtZero && (t._zero = !0),
            t.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const t = this,
            { minDefined: e, maxDefined: r } = t.getUserBounds();
          let n = t.min,
            a = t.max;
          const o = (t) => (n = e ? n : t),
            i = (t) => (a = r ? a : t),
            s = (t, e) => Math.pow(10, Math.floor(K(t)) + e);
          n === a && (n <= 0 ? (o(1), i(10)) : (o(s(n, -1)), i(s(a, 1)))),
            n <= 0 && o(s(a, -1)),
            a <= 0 && i(s(n, 1)),
            t._zero &&
              t.min !== t._suggestedMin &&
              n === s(t.min, 0) &&
              o(s(n, -1)),
            (t.min = n),
            (t.max = a);
        }
        buildTicks() {
          const t = this,
            e = t.options,
            r = { min: t._userMin, max: t._userMax },
            n = ms(r, t);
          return (
            "ticks" === e.bounds && ot(n, t, "value"),
            e.reverse
              ? (n.reverse(), (t.start = t.max), (t.end = t.min))
              : ((t.start = t.min), (t.end = t.max)),
            n
          );
        }
        getLabelForValue(t) {
          return void 0 === t ? "0" : $r(t, this.chart.options.locale);
        }
        configure() {
          const t = this,
            e = t.min;
          super.configure(),
            (t._startValue = K(e)),
            (t._valueRange = K(t.max) - K(e));
        }
        getPixelForValue(t) {
          const e = this;
          return (
            (void 0 !== t && 0 !== t) || (t = e.min),
            null === t || isNaN(t)
              ? NaN
              : e.getPixelForDecimal(
                  t === e.min ? 0 : (K(t) - e._startValue) / e._valueRange
                )
          );
        }
        getValueForPixel(t) {
          const e = this,
            r = e.getDecimalForPixel(t);
          return Math.pow(10, e._startValue + r * e._valueRange);
        }
      }
      function bs(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = Fe(e.backdropPadding);
          return M(e.font && e.font.size, ge.font.size) + t.height;
        }
        return 0;
      }
      function xs(t, e, r) {
        return _(r)
          ? { w: be(t, t.font, r), h: r.length * e }
          : { w: t.measureText(r).width, h: e };
      }
      function _s(t, e, r, n, a) {
        return t === n || t === a
          ? { start: e - r / 2, end: e + r / 2 }
          : t < n || t > a
          ? { start: e - r, end: e }
          : { start: e, end: e + r };
      }
      function ys(t) {
        const e = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
          r = {};
        let n, a, o;
        const i = [],
          s = [],
          c = t.getLabels().length;
        for (n = 0; n < c; n++) {
          const c = t.options.pointLabels.setContext(t.getContext(n));
          (s[n] = c.padding), (o = t.getPointPosition(n, t.drawingArea + s[n]));
          const l = Ne(c.font);
          (t.ctx.font = l.string),
            (a = xs(t.ctx, l.lineHeight, t._pointLabels[n])),
            (i[n] = a);
          const d = t.getIndexAngle(n),
            u = st(d),
            h = _s(u, o.x, a.w, 0, 180),
            p = _s(u, o.y, a.h, 90, 270);
          h.start < e.l && ((e.l = h.start), (r.l = d)),
            h.end > e.r && ((e.r = h.end), (r.r = d)),
            p.start < e.t && ((e.t = p.start), (r.t = d)),
            p.end > e.b && ((e.b = p.end), (r.b = d));
        }
        t._setReductions(t.drawingArea, e, r), (t._pointLabelItems = []);
        const l = t.options,
          d = bs(l),
          u = t.getDistanceFromCenterForValue(l.ticks.reverse ? t.min : t.max);
        for (n = 0; n < c; n++) {
          const e = 0 === n ? d / 2 : 0,
            r = t.getPointPosition(n, u + e + s[n]),
            a = st(t.getIndexAngle(n)),
            o = i[n];
          ks(a, o, r);
          const c = ws(a);
          let l;
          l = "left" === c ? r.x : "center" === c ? r.x - o.w / 2 : r.x - o.w;
          const h = l + o.w;
          t._pointLabelItems[n] = {
            x: r.x,
            y: r.y,
            textAlign: c,
            left: l,
            top: r.y,
            right: h,
            bottom: r.y + o.h,
          };
        }
      }
      function ws(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }
      function ks(t, e, r) {
        90 === t || 270 === t
          ? (r.y -= e.h / 2)
          : (t > 270 || t < 90) && (r.y -= e.h);
      }
      function Ms(t, e) {
        const {
          ctx: r,
          options: { pointLabels: n },
        } = t;
        for (let a = e - 1; a >= 0; a--) {
          const e = n.setContext(t.getContext(a)),
            o = Ne(e.font),
            {
              x: i,
              y: s,
              textAlign: c,
              left: l,
              top: d,
              right: u,
              bottom: h,
            } = t._pointLabelItems[a],
            { backdropColor: p } = e;
          if (!x(p)) {
            const t = Fe(e.backdropPadding);
            (r.fillStyle = p),
              r.fillRect(
                l - t.left,
                d - t.top,
                u - l + t.width,
                h - d + t.height
              );
          }
          Se(r, t._pointLabels[a], i, s + o.lineHeight / 2, o, {
            color: e.color,
            textAlign: c,
            textBaseline: "middle",
          });
        }
      }
      function Cs(t, e, r, n) {
        const { ctx: a } = t;
        if (r) a.arc(t.xCenter, t.yCenter, e, 0, H);
        else {
          let r = t.getPointPosition(0, e);
          a.moveTo(r.x, r.y);
          for (let o = 1; o < n; o++)
            (r = t.getPointPosition(o, e)), a.lineTo(r.x, r.y);
        }
      }
      function Ps(t, e, r, n) {
        const a = t.ctx,
          o = e.circular,
          { color: i, lineWidth: s } = e;
        (!o && !n) ||
          !i ||
          !s ||
          r < 0 ||
          (a.save(),
          (a.strokeStyle = i),
          (a.lineWidth = s),
          a.setLineDash(e.borderDash),
          (a.lineDashOffset = e.borderDashOffset),
          a.beginPath(),
          Cs(t, r, o, n),
          a.closePath(),
          a.stroke(),
          a.restore());
      }
      function Ss(t) {
        return rt(t) ? t : 0;
      }
      (vs.id = "logarithmic"),
        (vs.defaults = {
          ticks: {
            callback: to.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      class Ts extends ps {
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const t = this;
          (t.width = t.maxWidth),
            (t.height = t.maxHeight),
            (t.paddingTop = bs(t.options) / 2),
            (t.xCenter = Math.floor(t.width / 2)),
            (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
            (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
        }
        determineDataLimits() {
          const t = this,
            { min: e, max: r } = t.getMinMax(!1);
          (t.min = w(e) && !isNaN(e) ? e : 0),
            (t.max = w(r) && !isNaN(r) ? r : 0),
            t.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / bs(this.options));
        }
        generateTickLabels(t) {
          const e = this;
          ps.prototype.generateTickLabels.call(e, t),
            (e._pointLabels = e.getLabels().map((t, r) => {
              const n = S(e.options.pointLabels.callback, [t, r], e);
              return n || 0 === n ? n : "";
            }));
        }
        fit() {
          const t = this,
            e = t.options;
          e.display && e.pointLabels.display
            ? ys(t)
            : t.setCenterPoint(0, 0, 0, 0);
        }
        _setReductions(t, e, r) {
          const n = this;
          let a = e.l / Math.sin(r.l),
            o = Math.max(e.r - n.width, 0) / Math.sin(r.r),
            i = -e.t / Math.cos(r.t),
            s = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(r.b);
          (a = Ss(a)),
            (o = Ss(o)),
            (i = Ss(i)),
            (s = Ss(s)),
            (n.drawingArea = Math.max(
              t / 2,
              Math.min(Math.floor(t - (a + o) / 2), Math.floor(t - (i + s) / 2))
            )),
            n.setCenterPoint(a, o, i, s);
        }
        setCenterPoint(t, e, r, n) {
          const a = this,
            o = a.width - e - a.drawingArea,
            i = t + a.drawingArea,
            s = r + a.drawingArea,
            c = a.height - a.paddingTop - n - a.drawingArea;
          (a.xCenter = Math.floor((i + o) / 2 + a.left)),
            (a.yCenter = Math.floor((s + c) / 2 + a.top + a.paddingTop));
        }
        getIndexAngle(t) {
          const e = H / this.getLabels().length,
            r = this.options.startAngle || 0;
          return ht(t * e + it(r));
        }
        getDistanceFromCenterForValue(t) {
          const e = this;
          if (x(t)) return NaN;
          const r = e.drawingArea / (e.max - e.min);
          return e.options.reverse ? (e.max - t) * r : (t - e.min) * r;
        }
        getValueForDistanceFromCenter(t) {
          if (x(t)) return NaN;
          const e = this,
            r = t / (e.drawingArea / (e.max - e.min));
          return e.options.reverse ? e.max - r : e.min + r;
        }
        getPointPosition(t, e) {
          const r = this,
            n = r.getIndexAngle(t) - Q;
          return {
            x: Math.cos(n) * e + r.xCenter,
            y: Math.sin(n) * e + r.yCenter,
            angle: n,
          };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(
            t,
            this.getDistanceFromCenterForValue(e)
          );
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const {
            left: e,
            top: r,
            right: n,
            bottom: a,
          } = this._pointLabelItems[t];
          return { left: e, top: r, right: n, bottom: a };
        }
        drawBackground() {
          const t = this,
            {
              backgroundColor: e,
              grid: { circular: r },
            } = t.options;
          if (e) {
            const n = t.ctx;
            n.save(),
              n.beginPath(),
              Cs(
                t,
                t.getDistanceFromCenterForValue(t._endValue),
                r,
                t.getLabels().length
              ),
              n.closePath(),
              (n.fillStyle = e),
              n.fill(),
              n.restore();
          }
        }
        drawGrid() {
          const t = this,
            e = t.ctx,
            r = t.options,
            { angleLines: n, grid: a } = r,
            o = t.getLabels().length;
          let i, s, c;
          if (
            (r.pointLabels.display && Ms(t, o),
            a.display &&
              t.ticks.forEach((e, r) => {
                if (0 !== r) {
                  s = t.getDistanceFromCenterForValue(e.value);
                  const n = a.setContext(t.getContext(r - 1));
                  Ps(t, n, s, o);
                }
              }),
            n.display)
          ) {
            for (e.save(), i = t.getLabels().length - 1; i >= 0; i--) {
              const a = n.setContext(t.getContext(i)),
                { color: o, lineWidth: l } = a;
              l &&
                o &&
                ((e.lineWidth = l),
                (e.strokeStyle = o),
                e.setLineDash(a.borderDash),
                (e.lineDashOffset = a.borderDashOffset),
                (s = t.getDistanceFromCenterForValue(
                  r.ticks.reverse ? t.min : t.max
                )),
                (c = t.getPointPosition(i, s)),
                e.beginPath(),
                e.moveTo(t.xCenter, t.yCenter),
                e.lineTo(c.x, c.y),
                e.stroke());
            }
            e.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this,
            e = t.ctx,
            r = t.options,
            n = r.ticks;
          if (!n.display) return;
          const a = t.getIndexAngle(0);
          let o, i;
          e.save(),
            e.translate(t.xCenter, t.yCenter),
            e.rotate(a),
            (e.textAlign = "center"),
            (e.textBaseline = "middle"),
            t.ticks.forEach((a, s) => {
              if (0 === s && !r.reverse) return;
              const c = n.setContext(t.getContext(s)),
                l = Ne(c.font);
              if (
                ((o = t.getDistanceFromCenterForValue(t.ticks[s].value)),
                c.showLabelBackdrop)
              ) {
                (i = e.measureText(a.label).width),
                  (e.fillStyle = c.backdropColor);
                const t = Fe(c.backdropPadding);
                e.fillRect(
                  -i / 2 - t.left,
                  -o - l.size / 2 - t.top,
                  i + t.width,
                  l.size + t.height
                );
              }
              Se(e, a.label, 0, -o, l, { color: c.color });
            }),
            e.restore();
        }
        drawTitle() {}
      }
      (Ts.id = "radialLinear"),
        (Ts.defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: to.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback(t) {
              return t;
            },
            padding: 5,
          },
        }),
        (Ts.defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        }),
        (Ts.descriptors = { angleLines: { _fallback: "grid" } });
      const Ds = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Rs = Object.keys(Ds);
      function Os(t, e) {
        return t - e;
      }
      function As(t, e) {
        if (x(e)) return null;
        const r = t._adapter,
          { parser: n, round: a, isoWeekday: o } = t._parseOpts;
        let i = e;
        return (
          "function" === typeof n && (i = n(i)),
          w(i) || (i = "string" === typeof n ? r.parse(i, n) : r.parse(i)),
          null === i
            ? null
            : (a &&
                (i =
                  "week" !== a || (!rt(o) && !0 !== o)
                    ? r.startOf(i, a)
                    : r.startOf(i, "isoWeek", o)),
              +i)
        );
      }
      function Es(t, e, r, n) {
        const a = Rs.length;
        for (let o = Rs.indexOf(t); o < a - 1; ++o) {
          const t = Ds[Rs[o]],
            a = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((r - e) / (a * t.size)) <= n) return Rs[o];
        }
        return Rs[a - 1];
      }
      function Is(t, e, r, n, a) {
        for (let o = Rs.length - 1; o >= Rs.indexOf(r); o--) {
          const r = Rs[o];
          if (Ds[r].common && t._adapter.diff(a, n, r) >= e - 1) return r;
        }
        return Rs[r ? Rs.indexOf(r) : 0];
      }
      function Ls(t) {
        for (let e = Rs.indexOf(t) + 1, r = Rs.length; e < r; ++e)
          if (Ds[Rs[e]].common) return Rs[e];
      }
      function Fs(t, e, r) {
        if (r) {
          if (r.length) {
            const { lo: n, hi: a } = ze(r, e),
              o = r[n] >= e ? r[n] : r[a];
            t[o] = !0;
          }
        } else t[e] = !0;
      }
      function Ns(t, e, r, n) {
        const a = t._adapter,
          o = +a.startOf(e[0].value, n),
          i = e[e.length - 1].value;
        let s, c;
        for (s = o; s <= i; s = +a.add(s, 1, n))
          (c = r[s]), c >= 0 && (e[c].major = !0);
        return e;
      }
      function js(t, e, r) {
        const n = [],
          a = {},
          o = e.length;
        let i, s;
        for (i = 0; i < o; ++i)
          (s = e[i]), (a[s] = i), n.push({ value: s, major: !1 });
        return 0 !== o && r ? Ns(t, n, a, r) : n;
      }
      class Us extends _o {
        constructor(t) {
          super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = "day"),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
        }
        init(t, e) {
          const r = t.time || (t.time = {}),
            n = (this._adapter = new oa._date(t.adapters.date));
          I(r.displayFormats, n.formats()),
            (this._parseOpts = {
              parser: r.parser,
              round: r.round,
              isoWeekday: r.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
        }
        parse(t, e) {
          return void 0 === t ? null : As(this, t);
        }
        beforeLayout() {
          super.beforeLayout(),
            (this._cache = { data: [], labels: [], all: [] });
        }
        determineDataLimits() {
          const t = this,
            e = t.options,
            r = t._adapter,
            n = e.time.unit || "day";
          let {
            min: a,
            max: o,
            minDefined: i,
            maxDefined: s,
          } = t.getUserBounds();
          function c(t) {
            i || isNaN(t.min) || (a = Math.min(a, t.min)),
              s || isNaN(t.max) || (o = Math.max(o, t.max));
          }
          (i && s) ||
            (c(t._getLabelBounds()),
            ("ticks" === e.bounds && "labels" === e.ticks.source) ||
              c(t.getMinMax(!1))),
            (a = w(a) && !isNaN(a) ? a : +r.startOf(Date.now(), n)),
            (o = w(o) && !isNaN(o) ? o : +r.endOf(Date.now(), n) + 1),
            (t.min = Math.min(a, o - 1)),
            (t.max = Math.max(a + 1, o));
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps();
          let e = Number.POSITIVE_INFINITY,
            r = Number.NEGATIVE_INFINITY;
          return (
            t.length && ((e = t[0]), (r = t[t.length - 1])), { min: e, max: r }
          );
        }
        buildTicks() {
          const t = this,
            e = t.options,
            r = e.time,
            n = e.ticks,
            a = "labels" === n.source ? t.getLabelTimestamps() : t._generate();
          "ticks" === e.bounds &&
            a.length &&
            ((t.min = t._userMin || a[0]),
            (t.max = t._userMax || a[a.length - 1]));
          const o = t.min,
            i = t.max,
            s = $e(a, o, i);
          return (
            (t._unit =
              r.unit ||
              (n.autoSkip
                ? Es(r.minUnit, t.min, t.max, t._getLabelCapacity(o))
                : Is(t, s.length, r.minUnit, t.min, t.max))),
            (t._majorUnit =
              n.major.enabled && "year" !== t._unit ? Ls(t._unit) : void 0),
            t.initOffsets(a),
            e.reverse && s.reverse(),
            js(t, s, t._majorUnit)
          );
        }
        initOffsets(t) {
          const e = this;
          let r,
            n,
            a = 0,
            o = 0;
          e.options.offset &&
            t.length &&
            ((r = e.getDecimalForValue(t[0])),
            (a = 1 === t.length ? 1 - r : (e.getDecimalForValue(t[1]) - r) / 2),
            (n = e.getDecimalForValue(t[t.length - 1])),
            (o =
              1 === t.length
                ? n
                : (n - e.getDecimalForValue(t[t.length - 2])) / 2));
          const i = t.length < 3 ? 0.5 : 0.25;
          (a = ft(a, 0, i)),
            (o = ft(o, 0, i)),
            (e._offsets = { start: a, end: o, factor: 1 / (a + 1 + o) });
        }
        _generate() {
          const t = this,
            e = t._adapter,
            r = t.min,
            n = t.max,
            a = t.options,
            o = a.time,
            i = o.unit || Es(o.minUnit, r, n, t._getLabelCapacity(r)),
            s = M(o.stepSize, 1),
            c = "week" === i && o.isoWeekday,
            l = rt(c) || !0 === c,
            d = {};
          let u,
            h,
            p = r;
          if (
            (l && (p = +e.startOf(p, "isoWeek", c)),
            (p = +e.startOf(p, l ? "day" : i)),
            e.diff(n, r, i) > 1e5 * s)
          )
            throw new Error(
              r +
                " and " +
                n +
                " are too far apart with stepSize of " +
                s +
                " " +
                i
            );
          const f = "data" === a.ticks.source && t.getDataTimestamps();
          for (u = p, h = 0; u < n; u = +e.add(u, s, i), h++) Fs(d, u, f);
          return (
            (u !== n && "ticks" !== a.bounds && 1 !== h) || Fs(d, u, f),
            Object.keys(d)
              .sort((t, e) => t - e)
              .map((t) => +t)
          );
        }
        getLabelForValue(t) {
          const e = this,
            r = e._adapter,
            n = e.options.time;
          return n.tooltipFormat
            ? r.format(t, n.tooltipFormat)
            : r.format(t, n.displayFormats.datetime);
        }
        _tickFormatFunction(t, e, r, n) {
          const a = this,
            o = a.options,
            i = o.time.displayFormats,
            s = a._unit,
            c = a._majorUnit,
            l = s && i[s],
            d = c && i[c],
            u = r[e],
            h = c && d && u && u.major,
            p = a._adapter.format(t, n || (h ? d : l)),
            f = o.ticks.callback;
          return f ? S(f, [p, e, r], a) : p;
        }
        generateTickLabels(t) {
          let e, r, n;
          for (e = 0, r = t.length; e < r; ++e)
            (n = t[e]), (n.label = this._tickFormatFunction(n.value, e, t));
        }
        getDecimalForValue(t) {
          const e = this;
          return null === t ? NaN : (t - e.min) / (e.max - e.min);
        }
        getPixelForValue(t) {
          const e = this,
            r = e._offsets,
            n = e.getDecimalForValue(t);
          return e.getPixelForDecimal((r.start + n) * r.factor);
        }
        getValueForPixel(t) {
          const e = this,
            r = e._offsets,
            n = e.getDecimalForPixel(t) / r.factor - r.end;
          return e.min + n * (e.max - e.min);
        }
        _getLabelSize(t) {
          const e = this,
            r = e.options.ticks,
            n = e.ctx.measureText(t).width,
            a = it(e.isHorizontal() ? r.maxRotation : r.minRotation),
            o = Math.cos(a),
            i = Math.sin(a),
            s = e._resolveTickFontOptions(0).size;
          return { w: n * o + s * i, h: n * i + s * o };
        }
        _getLabelCapacity(t) {
          const e = this,
            r = e.options.time,
            n = r.displayFormats,
            a = n[r.unit] || n.millisecond,
            o = e._tickFormatFunction(t, 0, js(e, [t], e._majorUnit), a),
            i = e._getLabelSize(o),
            s =
              Math.floor(e.isHorizontal() ? e.width / i.w : e.height / i.h) - 1;
          return s > 0 ? s : 1;
        }
        getDataTimestamps() {
          const t = this;
          let e,
            r,
            n = t._cache.data || [];
          if (n.length) return n;
          const a = t.getMatchingVisibleMetas();
          if (t._normalized && a.length)
            return (t._cache.data = a[0].controller.getAllParsedValues(t));
          for (e = 0, r = a.length; e < r; ++e)
            n = n.concat(a[e].controller.getAllParsedValues(t));
          return (t._cache.data = t.normalize(n));
        }
        getLabelTimestamps() {
          const t = this,
            e = t._cache.labels || [];
          let r, n;
          if (e.length) return e;
          const a = t.getLabels();
          for (r = 0, n = a.length; r < n; ++r) e.push(As(t, a[r]));
          return (t._cache.labels = t._normalized ? e : t.normalize(e));
        }
        normalize(t) {
          return Ye(t.sort(Os));
        }
      }
      function zs(t, e, r) {
        let n, a, o, i;
        if (r) (n = Math.floor(e)), (a = Math.ceil(e)), (o = t[n]), (i = t[a]);
        else {
          const r = ze(t, e);
          (o = r.lo), (i = r.hi), (n = t[o]), (a = t[i]);
        }
        const s = a - n;
        return s ? o + ((i - o) * (e - n)) / s : o;
      }
      (Us.id = "time"),
        (Us.defaults = {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { source: "auto", major: { enabled: !1 } },
        });
      class Bs extends Us {
        constructor(t) {
          super(t), (this._table = []), (this._maxIndex = void 0);
        }
        initOffsets() {
          const t = this,
            e = t._getTimestampsForTable();
          (t._table = t.buildLookupTable(e)),
            (t._maxIndex = t._table.length - 1),
            super.initOffsets(e);
        }
        buildLookupTable(t) {
          const e = this,
            { min: r, max: n } = e;
          if (!t.length)
            return [
              { time: r, pos: 0 },
              { time: n, pos: 1 },
            ];
          const a = [r];
          let o, i, s;
          for (o = 0, i = t.length; o < i; ++o)
            (s = t[o]), s > r && s < n && a.push(s);
          return a.push(n), a;
        }
        _getTimestampsForTable() {
          const t = this;
          let e = t._cache.all || [];
          if (e.length) return e;
          const r = t.getDataTimestamps(),
            n = t.getLabelTimestamps();
          return (
            (e =
              r.length && n.length
                ? t.normalize(r.concat(n))
                : r.length
                ? r
                : n),
            (e = t._cache.all = e),
            e
          );
        }
        getPixelForValue(t, e) {
          const r = this,
            n = r._offsets,
            a =
              r._normalized && r._maxIndex > 0 && !x(e)
                ? e / r._maxIndex
                : r.getDecimalForValue(t);
          return r.getPixelForDecimal((n.start + a) * n.factor);
        }
        getDecimalForValue(t) {
          return zs(this._table, t) / this._maxIndex;
        }
        getValueForPixel(t) {
          const e = this,
            r = e._offsets,
            n = e.getDecimalForPixel(t) / r.factor - r.end;
          return zs(e._table, n * this._maxIndex, !0);
        }
      }
      (Bs.id = "timeseries"), (Bs.defaults = Us.defaults);
      function Vs(t, e) {
        return {
          render: function (t) {
            return t("div", { style: this.styles, class: this.cssClasses }, [
              t("canvas", {
                attrs: {
                  id: this.chartId,
                  width: this.width,
                  height: this.height,
                },
                ref: "canvas",
              }),
            ]);
          },
          props: {
            chartId: { default: t, type: String },
            width: { default: 400, type: Number },
            height: { default: 400, type: Number },
            cssClasses: { type: String, default: "" },
            styles: { type: Object },
            plugins: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { _chart: null, _plugins: this.plugins };
          },
          methods: {
            addPlugin: function (t) {
              this.$data._plugins.push(t);
            },
            generateLegend: function () {
              if (this.$data._chart) return this.$data._chart.generateLegend();
            },
            renderChart: function (t, r) {
              if (
                (this.$data._chart && this.$data._chart.destroy(),
                !this.$refs.canvas)
              )
                throw new Error(
                  "Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components"
                );
              this.$data._chart = new (void 0)(
                this.$refs.canvas.getContext("2d"),
                { type: e, data: t, options: r, plugins: this.$data._plugins }
              );
            },
          },
          beforeDestroy: function () {
            this.$data._chart && this.$data._chart.destroy();
          },
        };
      }
      var $s = Vs("bar-chart", "bar"),
        Ws =
          (Vs("horizontalbar-chart", "horizontalBar"),
          Vs("doughnut-chart", "doughnut"),
          Vs("line-chart", "line"),
          Vs("pie-chart", "pie"),
          Vs("polar-chart", "polarArea"),
          Vs("radar-chart", "radar"),
          Vs("bubble-chart", "bubble"),
          Vs("scatter-chart", "scatter"),
          {
            name: "MisPedidos",
            extends: $s,
            components: { NavBar: i["a"], Footer: s["a"] },
            data: function () {
              return {
                estadoToUpdate: [],
                DevolucionToUpdate: [],
                updating: !1,
                updatingDev: !1,
                pedidoestado: {},
                auxId: 0,
                estados: [],
                procede: ["?", "Si", "No"],
                Devoluciones: [],
                alert: { show: !1 },
                value: [423, 446, 675, 510, 590, 610, 760],
                dialog: !1,
                productos: [],
                ventas: [],
                clientesVentas: [],
                mostrarProductos: [],
                pedidos: [],
                search: "",
                search1: "",
                search2: "",
                headers: [
                  {
                    text: "Pedido",
                    align: "start",
                    sortable: !0,
                    value: "id_pedido",
                  },
                  { text: "Proveedor", value: "proveedor", sortable: !1 },
                  {
                    text: "Fecha de Transaccion",
                    value: "Fecha",
                    sortable: !1,
                  },
                  { text: "Cliente", value: "total" },
                  { text: "Direccion", value: "total" },
                  { text: "Estado", value: "estado" },
                  { text: "Operacion", value: "operacion", sortable: !1 },
                ],
                headers2: [
                  {
                    text: "Producto",
                    align: "start",
                    sortable: !0,
                    value: "nombre",
                  },
                  { text: "Cantidad", value: "cantidad", sortable: !0 },
                  { text: "Precio", value: "precio", sortable: !0 },
                ],
                headers3: [
                  {
                    text: "id_pedido",
                    align: "start",
                    sortable: !0,
                    value: "id_pedido",
                  },
                  { text: "Motivo", value: "motivo", sortable: !0 },
                  {
                    text: "Detalle motivo",
                    value: "detalle_motivo",
                    sortable: !0,
                  },
                  { text: "Fecha", value: "fecha", sortable: !0 },
                  { text: "Procede", value: "procede", sortable: !0 },
                  { text: "Operacion", value: "Operacion", sortable: !1 },
                ],
              };
            },
            created: (function () {
              var t = Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  var e, r, n, a, o, i;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((t.prev = 0),
                              null !=
                                JSON.parse(sessionStorage.getItem("session")))
                            ) {
                              t.next = 5;
                              break;
                            }
                            this.$router.push("/"), (t.next = 28);
                            break;
                          case 5:
                            return (
                              (this.user = JSON.parse(
                                sessionStorage.getItem("session")
                              )),
                              (e = this.user.id),
                              (t.next = 9),
                              c["a"].get("/getVentasPorMes/".concat(e))
                            );
                          case 9:
                            return (
                              (r = t.sent),
                              (this.ventas = r.data.data.productos),
                              (t.next = 13),
                              c["a"].get("/getClientePotenciales/".concat(e))
                            );
                          case 13:
                            return (
                              (n = t.sent),
                              (this.clientesVentas = n.data.data.productos),
                              (t.next = 17),
                              l["a"].get("/getpedido_proveedor/".concat(e))
                            );
                          case 17:
                            return (
                              (a = t.sent),
                              (this.pedidos = a.data.data.pedidos),
                              (t.next = 21),
                              h.get("/get")
                            );
                          case 21:
                            return (
                              (o = t.sent),
                              (this.estados = o.data.data.estados),
                              (t.next = 25),
                              l["a"].get(
                                "/getpedido_prov_devolucion/".concat(e)
                              )
                            );
                          case 25:
                            (i = t.sent),
                              (this.Devoluciones = i.data.data.pedidos),
                              "proveedor" == this.user.role
                                ? console.log("es proveedor")
                                : this.$router.push("/");
                          case 28:
                            t.next = 33;
                            break;
                          case 30:
                            (t.prev = 30),
                              (t.t0 = t["catch"](0)),
                              console.log(t.t0);
                          case 33:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[0, 30]]
                  );
                })
              );
              function e() {
                return t.apply(this, arguments);
              }
              return e;
            })(),
            methods: {
              VerProducto: function (t, e) {
                var r = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function n() {
                    var a;
                    return regeneratorRuntime.wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              l["a"].get(
                                "/getpedido_productos/".concat(t, "/").concat(e)
                              )
                            );
                          case 2:
                            (a = n.sent),
                              (r.dialog = !0),
                              (r.mostrarProductos = a.data.data.pedidos);
                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              readDevToUpdate: function (t) {
                var e = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2), l["a"].get("/getDev/".concat(t))
                            );
                          case 2:
                            (n = r.sent),
                              (e.updatingDev = !0),
                              (e.auxId = t),
                              (e.DevolucionToUpdate = n.data.data.pedido);
                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              updateDevolucion: function () {
                var t = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function e() {
                    var r, n, a;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = t.$refs.updateDevolucion.validate()), !r)
                              ) {
                                e.next = 19;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                l["a"].put(
                                  "/updateDev/"
                                    .concat(t.auxId, "/")
                                    .concat(t.DevolucionToUpdate.procede),
                                  t.DevolucionToUpdate
                                )
                              );
                            case 5:
                              return (
                                e.sent,
                                (n = t.Devoluciones.findIndex(function (e) {
                                  return (
                                    e.id_pedido ==
                                    t.DevolucionToUpdate.id_pedido
                                  );
                                })),
                                (e.next = 9),
                                l["a"].get(
                                  "/getestDev/".concat(
                                    t.DevolucionToUpdate.id_pedido
                                  )
                                )
                              );
                            case 9:
                              (a = e.sent),
                                (t.Devoluciones[n].procede =
                                  a.data.data.pedidoestado.procede),
                                (t.updatingDev = !1),
                                (t.alert = {
                                  show: !0,
                                  type: "success",
                                  message:
                                    "Procede de la devolución modificado con éxito",
                                }),
                                (e.next = 19);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e["catch"](2)),
                                (t.updatingDev = !1),
                                (t.alert = {
                                  show: !0,
                                  type: "error",
                                  message: e.t0,
                                });
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 15]]
                    );
                  })
                )();
              },
              readEstadoToUpdate: function (t) {
                var e = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.next = 2), l["a"].get("/get/".concat(t));
                          case 2:
                            (n = r.sent),
                              (e.updating = !0),
                              (e.estadoToUpdate = n.data.data.pedido);
                          case 5:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              updateEstado: function () {
                var t = this;
                return Object(o["a"])(
                  regeneratorRuntime.mark(function e() {
                    var r, n, a;
                    return regeneratorRuntime.wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((r = t.$refs.updateEstado.validate()), !r)) {
                                e.next = 21;
                                break;
                              }
                              return (
                                (e.prev = 2),
                                (e.next = 5),
                                l["a"].put(
                                  "/update/".concat(t.estadoToUpdate.id_pedido),
                                  t.estadoToUpdate
                                )
                              );
                            case 5:
                              return (
                                e.sent,
                                (n = t.pedidos.findIndex(function (e) {
                                  return (
                                    e.id_pedido == t.estadoToUpdate.id_pedido
                                  );
                                })),
                                (e.next = 9),
                                l["a"].get(
                                  "/getest/".concat(t.estadoToUpdate.id_pedido)
                                )
                              );
                            case 9:
                              (a = e.sent),
                                (t.pedidos[n].estado =
                                  a.data.data.pedidoestado.estado),
                                (t.updating = !1),
                                (t.alert = {
                                  show: !0,
                                  type: "success",
                                  message: "Pedido editado con éxito",
                                }),
                                (e.next = 19);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e["catch"](2)),
                                (t.updating = !1),
                                (t.alert = {
                                  show: !0,
                                  type: "error",
                                  message: e.t0,
                                });
                            case 19:
                              e.next = 22;
                              break;
                            case 21:
                              console.log("falta llenar");
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 15]]
                    );
                  })
                )();
              },
            },
          }),
        Hs = Ws,
        qs = r("2877"),
        Ys = Object(qs["a"])(Hs, n, a, !1, null, null, null);
      e["default"] = Ys.exports;
    },
    8e3: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r("h1", [t._v("Pedidos")]),
                  r(
                    "v-container",
                    [
                      r(
                        "v-alert",
                        {
                          attrs: { type: t.alert.type, dismissible: "" },
                          model: {
                            value: t.alert.show,
                            callback: function (e) {
                              t.$set(t.alert, "show", e);
                            },
                            expression: "alert.show",
                          },
                        },
                        [t._v(" " + t._s(t.alert.message) + " ")]
                      ),
                    ],
                    1
                  ),
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    t._l(t.pedidos, function (e) {
                      return r(
                        "v-card",
                        {
                          key: e.id_pedido,
                          staticClass: "mx-3 mt-5 mb-5",
                          attrs: { "max-width": "344" },
                        },
                        [
                          r("v-img", {
                            attrs: {
                              src: "https://image.freepik.com/free-vector/food-delivery-cute-man-riding-motorcycles-cartoon-art-illustration_56104-609.jpg",
                              height: "200px",
                            },
                          }),
                          r("v-card-title", [
                            t._v(" Pedido: " + t._s(e.id_pedido) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v(" Fecha: " + t._s(e.fecha) + " "),
                          ]),
                          r(
                            "v-card-actions",
                            [
                              r(
                                "v-btn",
                                {
                                  staticClass: "btn btn",
                                  attrs: {
                                    color: "success",
                                    href: "/Comprobante/" + e.id_pedido,
                                  },
                                },
                                [t._v("Comprobante")]
                              ),
                              r("v-spacer"),
                              "Por confirmar" == e.estado
                                ? r(
                                    "v-btn",
                                    {
                                      attrs: { color: "red" },
                                      on: {
                                        click: function (r) {
                                          return t.openModal(e.id_pedido);
                                        },
                                      },
                                    },
                                    [t._v(" Cancelar")]
                                  )
                                : t._e(),
                              "Entregado" === e.estado
                                ? r(
                                    "v-btn",
                                    {
                                      staticClass: "pa-2",
                                      attrs: { color: "red" },
                                      on: {
                                        click: function (r) {
                                          return t.devolverModal(e.id_pedido);
                                        },
                                      },
                                    },
                                    [t._v(" Devolver Pedido ")]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                          r("v-expand-transition", [
                            r(
                              "div",
                              [
                                r("v-divider"),
                                r("v-card-text", [
                                  r("p", [t._v("Estado: " + t._s(e.estado))]),
                                  r("p", [
                                    t._v("Metodo de Pago: " + t._s(e.metodo)),
                                  ]),
                                  r("p", [
                                    t._v("Monto total: " + t._s(e.total)),
                                  ]),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  r("h1", [t._v("Devoluciones")]),
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    t._l(t.pedidos1, function (e) {
                      return r(
                        "v-card",
                        {
                          key: e.id_pedido,
                          staticClass: "mx-3 mt-5 mb-5",
                          attrs: { "max-width": "344" },
                        },
                        [
                          r("v-card-title", [
                            t._v(" Pedido: " + t._s(e.id_pedido) + " "),
                          ]),
                          r("v-card-subtitle", [
                            t._v(" Fecha: " + t._s(e.fechapedido) + " "),
                          ]),
                          r(
                            "v-card-actions",
                            [
                              r(
                                "v-btn",
                                {
                                  staticClass: "btn btn",
                                  attrs: {
                                    color: "success",
                                    href: "/Comprobante/" + e.id_pedido,
                                  },
                                },
                                [t._v("Comprobante")]
                              ),
                              r("v-spacer"),
                            ],
                            1
                          ),
                          r("v-expand-transition", [
                            r(
                              "div",
                              [
                                r("v-divider"),
                                r("v-card-text", [
                                  r("p", [t._v("Estado: " + t._s(e.estado))]),
                                  r("p", [
                                    t._v(
                                      "Fecha Recepcion: " + t._s(e.fechadev)
                                    ),
                                  ]),
                                  r("p", [
                                    t._v("Metodo de Pago: " + t._s(e.metodo)),
                                  ]),
                                  r("p", [
                                    t._v("Monto total: " + t._s(e.total)),
                                  ]),
                                  r("p", [
                                    t._v(
                                      "Motivo devolucion: " + t._s(e.motivo)
                                    ),
                                  ]),
                                  r("p", [
                                    t._v("Detalle: " + t._s(e.detalle_motivo)),
                                  ]),
                                  r("p", [
                                    t._v("¿Procede?: "),
                                    r("b", [t._v(t._s(e.procede))]),
                                  ]),
                                  "Si" == e.procede
                                    ? r("p", [
                                        t._v("Observación: "),
                                        r("b", [
                                          t._v(
                                            "El pedido ha sido devuelto y se ha procedido a la devolucion de " +
                                              t._s(e.total) +
                                              " soles "
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                  "No" == e.procede
                                    ? r("p", [
                                        t._v("Observación: "),
                                        r("b", [
                                          t._v(
                                            "Se comunicará con usted para informarle del porqué no procedió la devolución "
                                          ),
                                        ]),
                                      ])
                                    : t._e(),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "700" },
                  model: {
                    value: t.modalDevo,
                    callback: function (e) {
                      t.modalDevo = e;
                    },
                    expression: "modalDevo",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r("v-card-title", [t._v("Devolución de Pedidos")]),
                      r(
                        "v-form",
                        {
                          ref: "CrearDevolucion",
                          on: {
                            submit: function (e) {
                              return (
                                e.preventDefault(), t.CrearDevolucion(t.aux_dev)
                              );
                            },
                          },
                        },
                        [
                          r(
                            "v-container",
                            [
                              r(
                                "v-card-text",
                                [
                                  r("v-select", {
                                    attrs: {
                                      items: t.motivos,
                                      label: "motivo",
                                    },
                                    model: {
                                      value: t.Devolucion.motivo,
                                      callback: function (e) {
                                        t.$set(t.Devolucion, "motivo", e);
                                      },
                                      expression: "Devolucion.motivo",
                                    },
                                  }),
                                  r("v-textarea", {
                                    attrs: {
                                      name: "input-7-1",
                                      label: "Introduzca detalles (opcional)",
                                      "auto-grow": "",
                                      counter: 500,
                                      value: "",
                                    },
                                    model: {
                                      value: t.Devolucion.detalle_motivo,
                                      callback: function (e) {
                                        t.$set(
                                          t.Devolucion,
                                          "detalle_motivo",
                                          e
                                        );
                                      },
                                      expression: "Devolucion.detalle_motivo",
                                    },
                                  }),
                                  r(
                                    "v-card-actions",
                                    [
                                      r(
                                        "v-btn",
                                        {
                                          staticClass: "mt-5",
                                          on: {
                                            click: function (e) {
                                              t.modalDevo = !1;
                                            },
                                          },
                                        },
                                        [t._v(" Salir ")]
                                      ),
                                      r("v-spacer"),
                                      r(
                                        "v-btn",
                                        {
                                          staticClass: "mt-5",
                                          attrs: {
                                            color: "red",
                                            type: "submit",
                                          },
                                        },
                                        [t._v(" Confirmar Devolución ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "290" },
                  model: {
                    value: t.dialog,
                    callback: function (e) {
                      t.dialog = e;
                    },
                    expression: "dialog",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r("v-card-title", { staticClass: "headline" }, [
                        t._v(" Cancelar el pedido "),
                      ]),
                      r("v-card-text", [
                        t._v(" ¿Desea cancelar el pedido "),
                        r("b", [t._v(t._s(this.aux))]),
                        t._v(" ? "),
                      ]),
                      r(
                        "v-card-actions",
                        [
                          r("v-spacer"),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "blue" },
                              on: {
                                click: function (e) {
                                  t.dialog = !1;
                                },
                              },
                            },
                            [t._v(" NO ")]
                          ),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "red" },
                              on: {
                                click: function (e) {
                                  return t.deleteProductsFromVoucher(t.aux);
                                },
                              },
                            },
                            [t._v(" SI ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("c740"), r("a434"), r("99af"), r("96cf"), r("d000")),
        s = r("f56b"),
        c = r("fd2d"),
        l = {
          name: "Pedidos",
          components: { NavBar: i["a"], Footer: c["a"] },
          data: function () {
            return {
              alert: { show: !1, message: "" },
              DevolucionLista: [],
              pedidos: [],
              pedidos1: [],
              Devolucion: {},
              DevolucionLista1: {},
              show: !1,
              dialog: !1,
              modalDevo: !1,
              aux: {},
              motivos: [
                "Mal estado",
                "Productos abiertos",
                "Productos vencidos",
              ],
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            null == this.user && this.$router.push("/"),
                            (t.next = 5),
                            s["a"].get(
                              "/get_pedidos_cliente/".concat(this.user.id)
                            )
                          );
                        case 5:
                          return (
                            (e = t.sent),
                            (this.pedidos = e.data.data.pedido),
                            (t.next = 9),
                            s["a"].get(
                              "/get_pedidos_devueltos_cliente/".concat(
                                this.user.id
                              )
                            )
                          );
                        case 9:
                          return (
                            (r = t.sent),
                            (this.pedidos1 = r.data.data.pedido),
                            (t.next = 13),
                            s["a"].get(
                              "/getpedido_dev/".concat(this.pedidos.id_pedido)
                            )
                          );
                        case 13:
                          (n = t.sent),
                            (this.DevolucionLista = n.data.data.pedidos),
                            console.log(this.pedidos),
                            (t.next = 21);
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 18]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            openModal: function (t) {
              (this.dialog = !0), (this.aux = t);
            },
            devolverModal: function (t) {
              (this.aux_dev = t), (this.modalDevo = !0);
            },
            CrearDevolucion: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((n = e.$refs.CrearDevolucion.validate()), !n)
                            ) {
                              r.next = 16;
                              break;
                            }
                            return (
                              (r.prev = 2),
                              (e.Devolucion.id_pedido = t),
                              (r.next = 6),
                              s["a"].post("/create_Devolucion", e.Devolucion)
                            );
                          case 6:
                            r.sent,
                              e.$refs.CrearDevolucion.reset(),
                              (e.modalDevo = !1),
                              (e.alert = {
                                show: !0,
                                type: "success",
                                message: "Petición de devolución creada",
                              }),
                              location.reload(),
                              (r.next = 16);
                            break;
                          case 13:
                            (r.prev = 13),
                              (r.t0 = r["catch"](2)),
                              console.log(r.t0);
                          case 16:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[2, 13]]
                  );
                })
              )();
            },
            deleteProductsFromVoucher: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a;
                  return regeneratorRuntime.wrap(
                    function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.prev = 0),
                              e.ReponerStock(t),
                              (r.next = 4),
                              s["a"].delete("/cancelar/".concat(t))
                            );
                          case 4:
                            (n = r.sent),
                              (a = e.pedidos.findIndex(function (e) {
                                return e.id_pedido == t;
                              })),
                              e.pedidos.splice(a, 1),
                              (e.dialog = !1),
                              (e.alert = {
                                show: !0,
                                type: "success",
                                message: n.data,
                              }),
                              (r.next = 14);
                            break;
                          case 11:
                            (r.prev = 11),
                              (r.t0 = r["catch"](0)),
                              (e.alert = {
                                show: !0,
                                type: "error",
                                message: res.data.message,
                              });
                          case 14:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 11]]
                  );
                })
              )();
            },
            deletePedido: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  return regeneratorRuntime.wrap(
                    function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.prev = 0),
                              (r.next = 3),
                              s["a"].delete("/delete/".concat(t))
                            );
                          case 3:
                            r.sent, (r.next = 9);
                            break;
                          case 6:
                            (r.prev = 6),
                              (r.t0 = r["catch"](0)),
                              (e.alert = {
                                show: !0,
                                type: "error",
                                message: res.data.message,
                              });
                          case 9:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 6]]
                  );
                })
              )();
            },
            ReponerStock: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n, a, o;
                  return regeneratorRuntime.wrap(
                    function (r) {
                      while (1)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.prev = 0),
                              (r.next = 3),
                              s["a"].get("/ProStock/".concat(t))
                            );
                          case 3:
                            (n = r.sent), (a = n.data.data.producto), (o = 0);
                          case 6:
                            if (!(o < a.length)) {
                              r.next = 13;
                              break;
                            }
                            return (
                              (r.next = 9),
                              s["a"].put(
                                "/update/"
                                  .concat(a[o].id_producto, "/")
                                  .concat(a[o].cantidad)
                              )
                            );
                          case 9:
                            r.sent;
                          case 10:
                            o++, (r.next = 6);
                            break;
                          case 13:
                            setTimeout(function () {
                              e.deletePedido(t);
                            }, 2e3),
                              (r.next = 19);
                            break;
                          case 16:
                            (r.prev = 16),
                              (r.t0 = r["catch"](0)),
                              console.log(r.t0);
                          case 19:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 16]]
                  );
                })
              )();
            },
          },
        },
        d = l,
        u = r("2877"),
        h = Object(u["a"])(d, n, a, !1, null, null, null);
      e["default"] = h.exports;
    },
    8418: function (t, e, r) {
      "use strict";
      var n = r("c04e"),
        a = r("9bf2"),
        o = r("5c6c");
      t.exports = function (t, e, r) {
        var i = n(e);
        i in t ? a.f(t, i, o(0, r)) : (t[i] = r);
      };
    },
    "841c": function (t, e, r) {
      "use strict";
      var n = r("d784"),
        a = r("825a"),
        o = r("1d80"),
        i = r("129f"),
        s = r("14c3");
      n("search", 1, function (t, e, r) {
        return [
          function (e) {
            var r = o(this),
              n = void 0 == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
          },
          function (t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var o = a(t),
              c = String(this),
              l = o.lastIndex;
            i(l, 0) || (o.lastIndex = 0);
            var d = s(o, c);
            return (
              i(o.lastIndex, l) || (o.lastIndex = l), null === d ? -1 : d.index
            );
          },
        ];
      });
    },
    "84be": function (t, e, r) {
      "use strict";
      var n = r("bc3a"),
        a = r.n(n);
      e["a"] = a.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/proveedores" });
    },
    "8e18": function (t, e, r) {
      "use strict";
      var n = r("bc3a"),
        a = r.n(n);
      e["a"] = a.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/productos" });
    },
    "8f7d": function (t, e, r) {
      t.exports = r.p + "img/usuario.31420b47.jpg";
    },
    9263: function (t, e, r) {
      "use strict";
      var n = r("ad6d"),
        a = r("9f7f"),
        o = r("5692"),
        i = RegExp.prototype.exec,
        s = o("native-string-replace", String.prototype.replace),
        c = i,
        l = (function () {
          var t = /a/,
            e = /b*/g;
          return (
            i.call(t, "a"),
            i.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        d = a.UNSUPPORTED_Y || a.BROKEN_CARET,
        u = void 0 !== /()??/.exec("")[1],
        h = l || u || d;
      h &&
        (c = function (t) {
          var e,
            r,
            a,
            o,
            c = this,
            h = d && c.sticky,
            p = n.call(c),
            f = c.source,
            g = 0,
            m = t;
          return (
            h &&
              ((p = p.replace("y", "")),
              -1 === p.indexOf("g") && (p += "g"),
              (m = String(t).slice(c.lastIndex)),
              c.lastIndex > 0 &&
                (!c.multiline ||
                  (c.multiline && "\n" !== t[c.lastIndex - 1])) &&
                ((f = "(?: " + f + ")"), (m = " " + m), g++),
              (r = new RegExp("^(?:" + f + ")", p))),
            u && (r = new RegExp("^" + f + "$(?!\\s)", p)),
            l && (e = c.lastIndex),
            (a = i.call(h ? r : c, m)),
            h
              ? a
                ? ((a.input = a.input.slice(g)),
                  (a[0] = a[0].slice(g)),
                  (a.index = c.lastIndex),
                  (c.lastIndex += a[0].length))
                : (c.lastIndex = 0)
              : l && a && (c.lastIndex = c.global ? a.index + a[0].length : e),
            u &&
              a &&
              a.length > 1 &&
              s.call(a[0], r, function () {
                for (o = 1; o < arguments.length - 2; o++)
                  void 0 === arguments[o] && (a[o] = void 0);
              }),
            a
          );
        }),
        (t.exports = c);
    },
    "962d": function (t, e, r) {
      t.exports = r.p + "img/GjvLInNviSN66fGpelkRzCmOwfX81I.407780ec.png";
    },
    "970f": function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r(
                    "v-alert",
                    {
                      attrs: { type: t.alert.type, dismissible: "" },
                      model: {
                        value: t.alert.show,
                        callback: function (e) {
                          t.$set(t.alert, "show", e);
                        },
                        expression: "alert.show",
                      },
                    },
                    [t._v(" " + t._s(t.alert.message) + " ")]
                  ),
                ],
                1
              ),
              r(
                "v-container",
                { staticClass: "mt-5" },
                [
                  r(
                    "v-card",
                    {
                      staticClass: "pb-3",
                      attrs: { elevation: "15", shaped: "", loading: "" },
                    },
                    [
                      r(
                        "v-card-title",
                        [
                          t._v(" Gestión de Productos "),
                          r("v-spacer"),
                          r("v-text-field", {
                            attrs: {
                              "append-icon": "mdi-magnify",
                              label: "Search",
                              "single-line": "",
                            },
                            model: {
                              value: t.search,
                              callback: function (e) {
                                t.search = e;
                              },
                              expression: "search",
                            },
                          }),
                        ],
                        1
                      ),
                      r("v-data-table", {
                        attrs: {
                          headers: t.headers,
                          items: t.productos,
                          search: t.search,
                        },
                        scopedSlots: t._u([
                          {
                            key: "item",
                            fn: function (e) {
                              return [
                                r("tr", [
                                  r("td", [t._v(t._s(e.item.nombre))]),
                                  r("td", [t._v(t._s(e.item.precio))]),
                                  r("td", [t._v(t._s(e.item.stock))]),
                                  r("td", [t._v(t._s(e.item.detalle))]),
                                  r("td", [t._v(t._s(e.item.categoria))]),
                                  r(
                                    "td",
                                    {
                                      attrs: {
                                        id: "visible" + e.item.id_producto,
                                      },
                                    },
                                    [t._v(" " + t._s(e.item.visible) + " ")]
                                  ),
                                  r(
                                    "td",
                                    [
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "orange",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProductoToUpdate(
                                                e.item.id_producto
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-pencil ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "red",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProductoToDelete(
                                                e.item.id_producto
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-delete ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.HacerVisible(
                                                e.item.id_producto
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-eye ")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              r("Footer"),
              r(
                "v-btn",
                {
                  attrs: {
                    color: "red",
                    large: "",
                    right: "",
                    fixed: "",
                    botoom: "",
                    fab: "",
                    dark: "",
                  },
                  on: {
                    click: function (e) {
                      t.add = !0;
                    },
                  },
                },
                [r("v-icon", [t._v("mdi-plus")])],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "500" },
                  model: {
                    value: t.add,
                    callback: function (e) {
                      t.add = e;
                    },
                    expression: "add",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r("v-card-title", [t._v("Crear producto")]),
                      r(
                        "v-card-text",
                        [
                          r(
                            "v-form",
                            {
                              ref: "addForm",
                              on: {
                                submit: function (e) {
                                  return e.preventDefault(), t.Save();
                                },
                              },
                            },
                            [
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-biohazard",
                                  label: "Nombre",
                                  rules: [
                                    function (t) {
                                      return !!t || "Nombre es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.producto.nombre,
                                  callback: function (e) {
                                    t.$set(t.producto, "nombre", e);
                                  },
                                  expression: "producto.nombre",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "prepend-icon": "mdi-biohazard",
                                  label: "Precio",
                                  rules: [
                                    function (t) {
                                      return !!t || "Precio es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.producto.precio,
                                  callback: function (e) {
                                    t.$set(t.producto, "precio", e);
                                  },
                                  expression: "producto.precio",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "prepend-icon": "mdi-biohazard",
                                  label: "Stock",
                                  rules: [
                                    function (t) {
                                      return !!t || "Stock es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.producto.stock,
                                  callback: function (e) {
                                    t.$set(t.producto, "stock", e);
                                  },
                                  expression: "producto.stock",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-biohazard",
                                  label: "Detalle",
                                  rules: [
                                    function (t) {
                                      return !!t || "Detalle es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.producto.detalle,
                                  callback: function (e) {
                                    t.$set(t.producto, "detalle", e);
                                  },
                                  expression: "producto.detalle",
                                },
                              }),
                              r("v-select", {
                                attrs: {
                                  items: t.categorias,
                                  "prepend-icon": "mdi-biohazard",
                                  "item-text": "categoria",
                                  "item-value": "id_categoria",
                                  label: "Categoria",
                                  rules: [
                                    function (t) {
                                      return !!t || "Categoria es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.producto.id_categoria,
                                  callback: function (e) {
                                    t.$set(t.producto, "id_categoria", e);
                                  },
                                  expression: "producto.id_categoria",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-biohazard",
                                  label: "Url img ",
                                  rules: [
                                    function (t) {
                                      return !!t || "Url img es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.producto.img_producto,
                                  callback: function (e) {
                                    t.$set(t.producto, "img_producto", e);
                                  },
                                  expression: "producto.img_producto",
                                },
                              }),
                              r(
                                "v-btn",
                                {
                                  staticClass: "success ma-2",
                                  attrs: { block: "", type: "submit" },
                                },
                                [t._v("Crear")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { "max-width": "600px" },
                  model: {
                    value: t.updating,
                    callback: function (e) {
                      t.updating = e;
                    },
                    expression: "updating",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r(
                        "v-form",
                        {
                          ref: "updateProducto",
                          on: {
                            submit: function (e) {
                              return e.preventDefault(), t.updateProducto();
                            },
                          },
                        },
                        [
                          r("v-card-title", [t._v("Editar Producto")]),
                          r(
                            "v-card-text",
                            [
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Nombre",
                                  rules: [
                                    function (t) {
                                      return !!t || "Nombre es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.productoToUpdate.nombre,
                                  callback: function (e) {
                                    t.$set(t.productoToUpdate, "nombre", e);
                                  },
                                  expression: "productoToUpdate.nombre",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "prepend-icon": "mdi-pencil",
                                  label: "Precio",
                                  rules: [
                                    function (t) {
                                      return !!t || "Precio es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.productoToUpdate.precio,
                                  callback: function (e) {
                                    t.$set(t.productoToUpdate, "precio", e);
                                  },
                                  expression: "productoToUpdate.precio",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  type: "number",
                                  "prepend-icon": "mdi-pencil",
                                  label: "Stock",
                                  rules: [
                                    function (t) {
                                      return !!t || "Stock es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.productoToUpdate.stock,
                                  callback: function (e) {
                                    t.$set(t.productoToUpdate, "stock", e);
                                  },
                                  expression: "productoToUpdate.stock",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Detalle",
                                  rules: [
                                    function (t) {
                                      return !!t || "Detalle es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.productoToUpdate.detalle,
                                  callback: function (e) {
                                    t.$set(t.productoToUpdate, "detalle", e);
                                  },
                                  expression: "productoToUpdate.detalle",
                                },
                              }),
                              r("v-select", {
                                attrs: {
                                  items: t.categorias,
                                  "prepend-icon": "mdi-pencil",
                                  "item-text": "categoria",
                                  "item-value": "id_categoria",
                                  label: "Categoria",
                                  rules: [
                                    function (t) {
                                      return !!t || "Categoria es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.productoToUpdate.id_categoria,
                                  callback: function (e) {
                                    t.$set(
                                      t.productoToUpdate,
                                      "id_categoria",
                                      e
                                    );
                                  },
                                  expression: "productoToUpdate.id_categoria",
                                },
                              }),
                              r("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-pencil",
                                  label: "Url img ",
                                  rules: [
                                    function (t) {
                                      return !!t || "Url img es requerido";
                                    },
                                  ],
                                },
                                model: {
                                  value: t.productoToUpdate.img_producto,
                                  callback: function (e) {
                                    t.$set(
                                      t.productoToUpdate,
                                      "img_producto",
                                      e
                                    );
                                  },
                                  expression: "productoToUpdate.img_producto",
                                },
                              }),
                              r(
                                "v-btn",
                                {
                                  staticClass: "success ma-2",
                                  attrs: { block: "", type: "submit" },
                                },
                                [t._v("Actualizar datos")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "450" },
                  model: {
                    value: t.advertencia,
                    callback: function (e) {
                      t.advertencia = e;
                    },
                    expression: "advertencia",
                  },
                },
                [
                  r(
                    "v-card",
                    [
                      r("v-card-title", { staticClass: "headline" }, [
                        t._v(" Eliminar el producto "),
                      ]),
                      r("v-card-text", [
                        t._v(" ¿Desea eliminar el producto ? "),
                      ]),
                      r(
                        "v-card-actions",
                        [
                          r("v-spacer"),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", text: "" },
                              on: {
                                click: function (e) {
                                  t.advertencia = !1;
                                },
                              },
                            },
                            [t._v(" NO ")]
                          ),
                          r(
                            "v-btn",
                            {
                              attrs: { color: "red", text: "" },
                              on: {
                                click: function (e) {
                                  return t.deleteProducto();
                                },
                              },
                            },
                            [t._v(" SI ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i =
          (r("d3b7"),
          r("25f0"),
          r("c740"),
          r("a434"),
          r("99af"),
          r("96cf"),
          r("c3e6")),
        s = r("fd2d"),
        c = r("8e18"),
        l = r("84be"),
        d = r("77fe"),
        u = r("c260"),
        h = {
          name: "MisProductos",
          components: { NavBar: i["a"], Footer: s["a"] },
          data: function () {
            return {
              productos: [],
              producto: {},
              categorias: [],
              search: "",
              productoToUpdate: [],
              updating: !1,
              advertencia: !1,
              dialogDelete: !1,
              productoToDelete: {},
              alert: { show: !1 },
              headers: [
                {
                  text: "Producto",
                  align: "start",
                  sortable: !1,
                  value: "nombre",
                },
                { text: "Precio", value: "precio", sortable: !0 },
                { text: "Stock", value: "stock" },
                { text: "Detalle", value: "detalle", sortable: !1 },
                { text: "Categoria", value: "categoria", sortable: !1 },
                { text: "Visible", value: "visible", sortable: !1 },
                { text: "Operacion", value: "operacion", sortable: !1 },
              ],
              add: !1,
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 17);
                          break;
                        case 5:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (e = this.user.id),
                            (t.next = 9),
                            l["a"].get("/getProductos-Proveedor2/".concat(e))
                          );
                        case 9:
                          return (
                            (r = t.sent),
                            (this.productos = r.data.data.productos),
                            console.log(this.productos),
                            (t.next = 14),
                            u["a"].get("/get")
                          );
                        case 14:
                          (n = t.sent),
                            (this.categorias = n.data.data.categorias),
                            "proveedor" == this.user.role ||
                              this.$router.push("/");
                        case 17:
                          t.next = 22;
                          break;
                        case 19:
                          (t.prev = 19),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 19]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            Save: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((r = t.$refs.addForm.validate()), !r)) {
                              e.next = 21;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              (n = t.user.id),
                              (t.producto.id_proveedor = n.toString()),
                              (e.next = 7),
                              c["a"].post("/create", t.producto)
                            );
                          case 7:
                            return (
                              e.sent,
                              (e.next = 10),
                              l["a"].get("/getProductos-Proveedor/".concat(n))
                            );
                          case 10:
                            (a = e.sent),
                              (t.productos = a.data.data.productos),
                              t.$refs.addForm.reset(),
                              (t.add = !1),
                              (t.alert = {
                                show: !0,
                                type: "success",
                                message: " Producto Creado !",
                              }),
                              (e.next = 21);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e["catch"](2)),
                              (t.add = !1),
                              (t.alert = {
                                show: !0,
                                type: "error",
                                message: e.t0,
                              });
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 17]]
                  );
                })
              )();
            },
            readProductoToUpdate: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), c["a"].get("/get/".concat(t));
                        case 2:
                          (n = r.sent),
                            (e.updating = !0),
                            (e.productoToUpdate = n.data.data.producto);
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            updateProducto: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((r = t.$refs.updateProducto.validate()), !r)) {
                              e.next = 26;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              c["a"].put(
                                "/update/".concat(
                                  t.productoToUpdate.id_producto
                                ),
                                t.productoToUpdate
                              )
                            );
                          case 5:
                            return (
                              e.sent,
                              (n = t.productos.findIndex(function (e) {
                                return (
                                  e.id_producto ==
                                  t.productoToUpdate.id_producto
                                );
                              })),
                              (t.productos[n].nombre =
                                t.productoToUpdate.nombre),
                              (t.productos[n].precio =
                                t.productoToUpdate.precio),
                              (t.productos[n].stock = t.productoToUpdate.stock),
                              (t.productos[n].detalle =
                                t.productoToUpdate.detalle),
                              (t.productos[n].img_producto =
                                t.productoToUpdate.img_producto),
                              (e.next = 14),
                              c["a"].get(
                                "/getcat/".concat(
                                  t.productoToUpdate.id_producto
                                )
                              )
                            );
                          case 14:
                            (a = e.sent),
                              (t.productos[n].categoria =
                                a.data.data.producto.categoria),
                              (t.updating = !1),
                              (t.alert = {
                                show: !0,
                                type: "success",
                                message: "Producto editado con éxito",
                              }),
                              (e.next = 24);
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e["catch"](2)),
                              (t.updating = !1),
                              (t.alert = {
                                show: !0,
                                type: "error",
                                message: e.t0,
                              });
                          case 24:
                            e.next = 27;
                            break;
                          case 26:
                            console.log("falta llenar");
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 20]]
                  );
                })
              )();
            },
            readProductoToDelete: function (t) {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function r() {
                  var n;
                  return regeneratorRuntime.wrap(function (r) {
                    while (1)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), c["a"].get("/get/".concat(t));
                        case 2:
                          (n = r.sent),
                            (e.advertencia = !0),
                            (e.productoToDelete = n.data.data.producto);
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            deleteProducto: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              d["a"].delete(
                                "/deleteProductFromAllCars/".concat(
                                  t.productoToDelete.id_producto
                                )
                              )
                            );
                          case 3:
                            return (
                              (e.next = 5),
                              c["a"].delete(
                                "/delete/".concat(
                                  t.productoToDelete.id_producto
                                )
                              )
                            );
                          case 5:
                            (r = t.productos.findIndex(function (e) {
                              return (
                                e.id_producto == t.productoToDelete.id_producto
                              );
                            })),
                              t.productos.splice(r, 1),
                              (t.advertencia = !1),
                              (t.alert = {
                                show: !0,
                                type: "success",
                                message: "Producto Eliminado",
                              }),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e["catch"](0)),
                              (t.advertencia = !1),
                              (t.alert = {
                                show: !0,
                                type: "error",
                                message: e.t0.response.data.message,
                              });
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              )();
            },
            HacerVisible: function (t) {
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n, a;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t),
                            (n = document.getElementById("visible" + t)),
                            (n.innerHTML = "si" == n.innerHTML ? "no" : "si"),
                            (a = n.innerHTML),
                            (e.next = 6),
                            c["a"].put(
                              "/updateVisible/"
                                .concat(r, "/")
                                .concat(a.toString())
                            )
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        p = h,
        f = r("2877"),
        g = Object(f["a"])(p, n, a, !1, null, null, null);
      e["default"] = g.exports;
    },
    "99af": function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("d039"),
        o = r("e8b5"),
        i = r("861d"),
        s = r("7b0b"),
        c = r("50c4"),
        l = r("8418"),
        d = r("65f0"),
        u = r("1dde"),
        h = r("b622"),
        p = r("2d00"),
        f = h("isConcatSpreadable"),
        g = 9007199254740991,
        m = "Maximum allowed index exceeded",
        v =
          p >= 51 ||
          !a(function () {
            var t = [];
            return (t[f] = !1), t.concat()[0] !== t;
          }),
        b = u("concat"),
        x = function (t) {
          if (!i(t)) return !1;
          var e = t[f];
          return void 0 !== e ? !!e : o(t);
        },
        _ = !v || !b;
      n(
        { target: "Array", proto: !0, forced: _ },
        {
          concat: function (t) {
            var e,
              r,
              n,
              a,
              o,
              i = s(this),
              u = d(i, 0),
              h = 0;
            for (e = -1, n = arguments.length; e < n; e++)
              if (((o = -1 === e ? i : arguments[e]), x(o))) {
                if (((a = c(o.length)), h + a > g)) throw TypeError(m);
                for (r = 0; r < a; r++, h++) r in o && l(u, h, o[r]);
              } else {
                if (h >= g) throw TypeError(m);
                l(u, h++, o);
              }
            return (u.length = h), u;
          },
        }
      );
    },
    "99e5": function (t, e, r) {
      t.exports = r.p + "img/Qutv9uyMc4jfuXFG7R5atbl3tCLv8c.0ef02385.png";
    },
    "9afd": function (t, e, r) {
      t.exports = r.p + "img/jj4H6MtLMCW3LGD0VwpMVITishc4du.a65c2608.jpeg";
    },
    "9f7f": function (t, e, r) {
      "use strict";
      var n = r("d039");
      function a(t, e) {
        return RegExp(t, e);
      }
      (e.UNSUPPORTED_Y = n(function () {
        var t = a("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      })),
        (e.BROKEN_CARET = n(function () {
          var t = a("^r", "gy");
          return (t.lastIndex = 2), null != t.exec("str");
        }));
    },
    "9fdb": function (t, e, r) {
      t.exports = r.p + "img/wMvplnJFapzkoQpSP9dzQUKaYjGhPw.7056f0e0.jpeg";
    },
    a434: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("23cb"),
        o = r("a691"),
        i = r("50c4"),
        s = r("7b0b"),
        c = r("65f0"),
        l = r("8418"),
        d = r("1dde"),
        u = d("splice"),
        h = Math.max,
        p = Math.min,
        f = 9007199254740991,
        g = "Maximum allowed length exceeded";
      n(
        { target: "Array", proto: !0, forced: !u },
        {
          splice: function (t, e) {
            var r,
              n,
              d,
              u,
              m,
              v,
              b = s(this),
              x = i(b.length),
              _ = a(t, x),
              y = arguments.length;
            if (
              (0 === y
                ? (r = n = 0)
                : 1 === y
                ? ((r = 0), (n = x - _))
                : ((r = y - 2), (n = p(h(o(e), 0), x - _))),
              x + r - n > f)
            )
              throw TypeError(g);
            for (d = c(b, n), u = 0; u < n; u++)
              (m = _ + u), m in b && l(d, u, b[m]);
            if (((d.length = n), r < n)) {
              for (u = _; u < x - n; u++)
                (m = u + n), (v = u + r), m in b ? (b[v] = b[m]) : delete b[v];
              for (u = x; u > x - n + r; u--) delete b[u - 1];
            } else if (r > n)
              for (u = x - n; u > _; u--)
                (m = u + n - 1),
                  (v = u + r - 1),
                  m in b ? (b[v] = b[m]) : delete b[v];
            for (u = 0; u < r; u++) b[u + _] = arguments[u + 2];
            return (b.length = x - n + r), d;
          },
        }
      );
    },
    ab13: function (t, e, r) {
      var n = r("b622"),
        a = n("match");
      t.exports = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (r) {
          try {
            return (e[a] = !1), "/./"[t](e);
          } catch (n) {}
        }
        return !1;
      };
    },
    ac1f: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("9263");
      n({ target: "RegExp", proto: !0, forced: /./.exec !== a }, { exec: a });
    },
    ad00: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      r(
                        "v-col",
                        [
                          r(
                            "v-card",
                            {
                              staticClass: "mt-5 mb-5",
                              attrs: {
                                elevation: "15",
                                shaped: "",
                                loading: "",
                              },
                            },
                            [
                              r(
                                "v-card-title",
                                { staticClass: "headline" },
                                [
                                  t._v(" Gestión de Productos del Pedido "),
                                  r("v-spacer"),
                                  r("v-text-field", {
                                    attrs: {
                                      "append-icon": "mdi-magnify",
                                      label: "Search",
                                      "single-line": "",
                                    },
                                    model: {
                                      value: t.search,
                                      callback: function (e) {
                                        t.search = e;
                                      },
                                      expression: "search",
                                    },
                                  }),
                                ],
                                1
                              ),
                              r("v-data-table", {
                                attrs: {
                                  headers: t.headers,
                                  items: t.mostrarProductos,
                                  search: t.search,
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "item",
                                    fn: function (e) {
                                      return [
                                        r("tr", [
                                          r("td", [t._v(t._s(e.item.nombre))]),
                                          r("td", [
                                            t._v(t._s(e.item.cantidad)),
                                          ]),
                                          r("td", [t._v(t._s(e.item.precio))]),
                                          r("td", [
                                            t._v(
                                              t._s(
                                                e.item.cantidad * e.item.precio
                                              )
                                            ),
                                          ]),
                                        ]),
                                      ];
                                    },
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              r("Footer"),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("99af"), r("c3e6")),
        s = r("fd2d"),
        c = r("84be"),
        l = r("f56b"),
        d = {
          name: "Productos-Pedido",
          components: { NavBar: i["a"], Footer: s["a"] },
          data: function () {
            return {
              mostrarProductos: [],
              search: "",
              headers: [
                {
                  text: "Producto",
                  align: "start",
                  sortable: !0,
                  value: "nombre",
                },
                { text: "Cantidad", value: "cantidad", sortable: !0 },
                { text: "Precio", value: "precio", sortable: !0 },
                { text: "Posible Ingreso", value: "Monto", sortable: !0 },
              ],
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            null == this.user && this.$router.push("/"),
                            (t.prev = 2),
                            (t.next = 5),
                            c["a"].get("/get/".concat(this.user.id))
                          );
                        case 5:
                          return (
                            (e = t.sent),
                            (this.datos = e.data.data.proveedores),
                            (r = this.$route.params.id),
                            (t.next = 10),
                            l["a"].get(
                              "/getpedido_productos/"
                                .concat(r, "/")
                                .concat(this.user.id)
                            )
                          );
                        case 10:
                          (n = t.sent),
                            (this.mostrarProductos = n.data.data.pedidos),
                            (t.next = 17);
                          break;
                        case 14:
                          (t.prev = 14),
                            (t.t0 = t["catch"](2)),
                            console.log(t.t0);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 14]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    ad6d: function (t, e, r) {
      "use strict";
      var n = r("825a");
      t.exports = function () {
        var t = n(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    b680: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("a691"),
        o = r("408a"),
        i = r("1148"),
        s = r("d039"),
        c = (1).toFixed,
        l = Math.floor,
        d = function (t, e, r) {
          return 0 === e
            ? r
            : e % 2 === 1
            ? d(t, e - 1, r * t)
            : d(t * t, e / 2, r);
        },
        u = function (t) {
          var e = 0,
            r = t;
          while (r >= 4096) (e += 12), (r /= 4096);
          while (r >= 2) (e += 1), (r /= 2);
          return e;
        },
        h = function (t, e, r) {
          var n = -1,
            a = r;
          while (++n < 6) (a += e * t[n]), (t[n] = a % 1e7), (a = l(a / 1e7));
        },
        p = function (t, e) {
          var r = 6,
            n = 0;
          while (--r >= 0) (n += t[r]), (t[r] = l(n / e)), (n = (n % e) * 1e7);
        },
        f = function (t) {
          var e = 6,
            r = "";
          while (--e >= 0)
            if ("" !== r || 0 === e || 0 !== t[e]) {
              var n = String(t[e]);
              r = "" === r ? n : r + i.call("0", 7 - n.length) + n;
            }
          return r;
        },
        g =
          (c &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
          !s(function () {
            c.call({});
          });
      n(
        { target: "Number", proto: !0, forced: g },
        {
          toFixed: function (t) {
            var e,
              r,
              n,
              s,
              c = o(this),
              l = a(t),
              g = [0, 0, 0, 0, 0, 0],
              m = "",
              v = "0";
            if (l < 0 || l > 20) throw RangeError("Incorrect fraction digits");
            if (c != c) return "NaN";
            if (c <= -1e21 || c >= 1e21) return String(c);
            if ((c < 0 && ((m = "-"), (c = -c)), c > 1e-21))
              if (
                ((e = u(c * d(2, 69, 1)) - 69),
                (r = e < 0 ? c * d(2, -e, 1) : c / d(2, e, 1)),
                (r *= 4503599627370496),
                (e = 52 - e),
                e > 0)
              ) {
                h(g, 0, r), (n = l);
                while (n >= 7) h(g, 1e7, 0), (n -= 7);
                h(g, d(10, n, 1), 0), (n = e - 1);
                while (n >= 23) p(g, 1 << 23), (n -= 23);
                p(g, 1 << n), h(g, 1, 1), p(g, 2), (v = f(g));
              } else h(g, 0, r), h(g, 1 << -e, 0), (v = f(g) + i.call("0", l));
            return (
              l > 0
                ? ((s = v.length),
                  (v =
                    m +
                    (s <= l
                      ? "0." + i.call("0", l - s) + v
                      : v.slice(0, s - l) + "." + v.slice(s - l))))
                : (v = m + v),
              v
            );
          },
        }
      );
    },
    b727: function (t, e, r) {
      var n = r("0366"),
        a = r("44ad"),
        o = r("7b0b"),
        i = r("50c4"),
        s = r("65f0"),
        c = [].push,
        l = function (t) {
          var e = 1 == t,
            r = 2 == t,
            l = 3 == t,
            d = 4 == t,
            u = 6 == t,
            h = 7 == t,
            p = 5 == t || u;
          return function (f, g, m, v) {
            for (
              var b,
                x,
                _ = o(f),
                y = a(_),
                w = n(g, m, 3),
                k = i(y.length),
                M = 0,
                C = v || s,
                P = e ? C(f, k) : r || h ? C(f, 0) : void 0;
              k > M;
              M++
            )
              if ((p || M in y) && ((b = y[M]), (x = w(b, M, _)), t))
                if (e) P[M] = x;
                else if (x)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return b;
                    case 6:
                      return M;
                    case 2:
                      c.call(P, b);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      c.call(P, b);
                  }
            return u ? -1 : l || d ? d : P;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
        filterOut: l(7),
      };
    },
    bb51: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r(
                "v-toolbar",
                {
                  attrs: {
                    src: "https://picsum.photos/1920/1080?random",
                    dark: "",
                    "shrink-on-scroll": "",
                  },
                },
                [r("v-toolbar-title", [t._v("Merkaltoke")]), r("v-spacer")],
                1
              ),
              r(
                "v-container",
                [
                  r(
                    "v-alert",
                    {
                      attrs: { type: t.alert.type, dismissible: "" },
                      model: {
                        value: t.alert.show,
                        callback: function (e) {
                          t.$set(t.alert, "show", e);
                        },
                        expression: "alert.show",
                      },
                    },
                    [t._v(" " + t._s(t.alert.message) + " ")]
                  ),
                ],
                1
              ),
              r(
                "v-container",
                [
                  r(
                    "v-row",
                    { attrs: { justfify: "center" } },
                    [
                      r(
                        "v-col",
                        { staticClass: "text-center" },
                        [
                          r(
                            "v-btn",
                            {
                              staticClass: "primary",
                              on: {
                                click: function (e) {
                                  t.suForm = !0;
                                },
                              },
                            },
                            [t._v(" Registrarse")]
                          ),
                        ],
                        1
                      ),
                      r(
                        "v-col",
                        { staticClass: "text-center" },
                        [
                          r(
                            "v-btn",
                            {
                              staticClass: "success",
                              on: {
                                click: function (e) {
                                  t.suForm = !1;
                                },
                              },
                            },
                            [t._v(" Ingresar")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      r(
                        "v-col",
                        { attrs: { md: "5" } },
                        [
                          t.suForm
                            ? r(
                                "v-card",
                                [
                                  r("v-card-title", [t._v("Registro")]),
                                  r(
                                    "v-card-text",
                                    [
                                      r(
                                        "v-form",
                                        {
                                          ref: "signupForm",
                                          staticClass: "ma-3",
                                          on: {
                                            submit: function (e) {
                                              return (
                                                e.preventDefault(), t.signUp()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Nombre",
                                              rules: t.nameRules,
                                              "prepend-icon": "mdi-account",
                                            },
                                            model: {
                                              value: t.user.nombre,
                                              callback: function (e) {
                                                t.$set(t.user, "nombre", e);
                                              },
                                              expression: "user.nombre",
                                            },
                                          }),
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Email",
                                              rules: t.emailRules,
                                              "prepend-icon": "mdi-email",
                                            },
                                            model: {
                                              value: t.user.email,
                                              callback: function (e) {
                                                t.$set(t.user, "email", e);
                                              },
                                              expression: "user.email",
                                            },
                                          }),
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Password",
                                              rules: t.passwordRules,
                                              "prepend-icon": "mdi-lock",
                                              type: "password",
                                            },
                                            model: {
                                              value: t.user.password,
                                              callback: function (e) {
                                                t.$set(t.user, "password", e);
                                              },
                                              expression: "user.password",
                                            },
                                          }),
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Direccion",
                                              rules: t.direccionRules,
                                              "prepend-icon": "mdi-home",
                                              type: "text",
                                            },
                                            model: {
                                              value: t.user.direccion,
                                              callback: function (e) {
                                                t.$set(t.user, "direccion", e);
                                              },
                                              expression: "user.direccion",
                                            },
                                          }),
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Dni o RUC",
                                              rules: t.dniRules,
                                              "prepend-icon":
                                                "mdi-account-box-outline",
                                              type: "number",
                                            },
                                            model: {
                                              value: t.user.dni,
                                              callback: function (e) {
                                                t.$set(t.user, "dni", e);
                                              },
                                              expression: "user.dni",
                                            },
                                          }),
                                          r(
                                            "v-radio-group",
                                            {
                                              attrs: {
                                                row: "",
                                                rules: [
                                                  function (t) {
                                                    return (
                                                      !!t || "Please chose one"
                                                    );
                                                  },
                                                ],
                                              },
                                              model: {
                                                value: t.user.role,
                                                callback: function (e) {
                                                  t.$set(t.user, "role", e);
                                                },
                                                expression: "user.role",
                                              },
                                            },
                                            [
                                              r("v-radio", {
                                                attrs: {
                                                  label: "Cliente",
                                                  value: "cliente",
                                                },
                                              }),
                                              r("v-radio", {
                                                attrs: {
                                                  label: "Proveedor",
                                                  value: "proveedor",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          r(
                                            "v-btn",
                                            {
                                              staticClass: "primary mt-3",
                                              attrs: {
                                                block: "",
                                                type: "submit",
                                              },
                                            },
                                            [t._v("Registrarse ")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : r(
                                "v-card",
                                [
                                  r("v-card-title", [t._v("Inicio de Sesión")]),
                                  r(
                                    "v-card-text",
                                    [
                                      r(
                                        "v-form",
                                        {
                                          ref: "signinForm",
                                          staticClass: "ma-3",
                                          on: {
                                            submit: function (e) {
                                              return (
                                                e.preventDefault(), t.signIn()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Email",
                                              rules: t.emailRules,
                                              "prepend-icon": "mdi-email",
                                            },
                                            model: {
                                              value: t.user.email,
                                              callback: function (e) {
                                                t.$set(t.user, "email", e);
                                              },
                                              expression: "user.email",
                                            },
                                          }),
                                          r("v-text-field", {
                                            attrs: {
                                              label: "Password",
                                              rules: t.passwordRules,
                                              "prepend-icon": "mdi-lock",
                                              type: "password",
                                            },
                                            model: {
                                              value: t.user.password,
                                              callback: function (e) {
                                                t.$set(t.user, "password", e);
                                              },
                                              expression: "user.password",
                                            },
                                          }),
                                          r(
                                            "v-radio-group",
                                            {
                                              attrs: {
                                                row: "",
                                                rules: [
                                                  function (t) {
                                                    return (
                                                      !!t || "Please chose one"
                                                    );
                                                  },
                                                ],
                                              },
                                              model: {
                                                value: t.user.role,
                                                callback: function (e) {
                                                  t.$set(t.user, "role", e);
                                                },
                                                expression: "user.role",
                                              },
                                            },
                                            [
                                              r("v-radio", {
                                                attrs: {
                                                  label: "Cliente",
                                                  value: "cliente",
                                                },
                                              }),
                                              r("v-radio", {
                                                attrs: {
                                                  label: "Proveedor",
                                                  value: "proveedor",
                                                },
                                              }),
                                              r("v-radio", {
                                                attrs: {
                                                  label: "Administrador",
                                                  value: "administrador",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                          r(
                                            "v-btn",
                                            {
                                              staticClass: "success mt-3",
                                              attrs: {
                                                block: "",
                                                type: "submit",
                                              },
                                            },
                                            [t._v("Ingresar ")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  r(
                    "div",
                    { staticClass: "text-center" },
                    [
                      r("v-img", {
                        staticClass: "mt-5 carrito",
                        staticStyle: { margin: "auto" },
                        attrs: {
                          i: "",
                          src: "https://svgsilh.com/svg/294547.svg",
                          height: "200px",
                          width: "200px",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1");
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      r("96cf");
      var s = {
          name: "Home",
          data: function () {
            return i(
              {
                alert: { show: !1, message: "" },
                nameRules: [
                  function (t) {
                    return !!t || "Name is required";
                  },
                ],
                emailRules: [
                  function (t) {
                    return !!t || "Email is required";
                  },
                  function (t) {
                    return /.+@.+\..+/.test(t) || "Email must be valid ";
                  },
                ],
                passwordRules: [
                  function (t) {
                    return !!t || "Password is required";
                  },
                ],
                dniRules: [
                  function (t) {
                    return !!t || "DNI || RUC is required";
                  },
                  function (t) {
                    return (
                      (t && 8 == t.length) ||
                      (t && 11 == t.length) ||
                      "El Dni contiene 8  y el RUC 11"
                    );
                  },
                ],
                direccionRules: [
                  function (t) {
                    return !!t || "Direccion is required";
                  },
                ],
                user: {
                  nombre: "",
                  email: "",
                  password: "",
                  role: "",
                  direccion: "",
                  dni: "",
                },
                suForm: !0,
              },
              "user",
              { role: "", nombre: "", email: "" }
            );
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          this.Auth();
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            Auth: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            (t.user_test = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                              null != t.user_test && t.$router.push("/Profile");
                          } catch (r) {
                            console.log(r);
                          }
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            signUp: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((r = t.$refs.signupForm.validate()), !r)) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              t.axios.post("/signup", t.user)
                            );
                          case 5:
                            (n = e.sent),
                              t.$refs.signupForm.reset(),
                              (t.alert = {
                                show: !0,
                                type: "success",
                                message: n.data.message,
                              }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e["catch"](2)),
                              (t.alert = {
                                show: !0,
                                type: "error",
                                message: e.t0.response.data.message,
                              });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              )();
            },
            signIn: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((r = t.$refs.signinForm.validate()), !r)) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              t.axios.post("/signin", t.user)
                            );
                          case 5:
                            (n = e.sent),
                              t.$refs.signinForm.reset(),
                              n.data.NotFound
                                ? (t.alert = {
                                    show: !0,
                                    type: "error",
                                    message: n.data.message,
                                  })
                                : (sessionStorage.setItem(
                                    "session",
                                    JSON.stringify(n.data)
                                  ),
                                  (t.user = JSON.parse(
                                    sessionStorage.getItem("session")
                                  )),
                                  "cliente" == t.user.role
                                    ? t.$router.push("/Profile")
                                    : "proveedor" == t.user.role
                                    ? t.$router.push("/ProfileProveedor")
                                    : "administrador" == t.user.role &&
                                      t.$router.push("/Admin-Proveedores")),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e["catch"](2)),
                              (t.alert = {
                                show: !0,
                                type: "error",
                                message: e.t0.response.data.message,
                              });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 10]]
                  );
                })
              )();
            },
          },
        },
        c = s,
        l = (r("cccb"), r("2877")),
        d = Object(l["a"])(c, n, a, !1, null, null, null);
      e["default"] = d.exports;
    },
    bede: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              n("NavBar"),
              n(
                "v-container",
                [
                  n("h1", [t._v("Categorías")]),
                  n(
                    "v-row",
                    { attrs: { justify: "center" } },
                    t._l(t.categorias, function (e) {
                      return n(
                        "v-card",
                        {
                          key: e.id_categoria,
                          staticClass: "ma-3",
                          attrs: { "max-width": "344" },
                        },
                        [
                          n("v-img", {
                            attrs: { height: "250", src: e.img_categoria },
                          }),
                          n("v-card-title", [
                            n("h3", [t._v(t._s(e.categoria))]),
                          ]),
                          n(
                            "v-card-actions",
                            [
                              n(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "blue",
                                    href:
                                      "/Productos-Categoria/" + e.id_categoria,
                                  },
                                },
                                [t._v("Ver")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
              n(
                "v-container",
                [
                  n("div", { staticClass: "row" }, [
                    n("div", { staticClass: "col-4" }, [
                      n("h1", [t._v("Proveedores")]),
                    ]),
                    n(
                      "div",
                      { staticClass: "col-8" },
                      [
                        n("v-text-field", {
                          attrs: {
                            "append-icon": "mdi-magnify",
                            label: "Búsqueda por el nombre del proveedor",
                            "single-line": "",
                          },
                          model: {
                            value: t.search,
                            callback: function (e) {
                              t.search = e;
                            },
                            expression: "search",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                  n("v-spacer"),
                  n(
                    "v-row",
                    { attrs: { justify: "center" } },
                    t._l(t.filteredProveedores, function (e) {
                      return n(
                        "v-card",
                        {
                          key: e.id,
                          staticClass: "ma-3",
                          attrs: { "max-width": "344" },
                        },
                        [
                          n("v-img", {
                            attrs: {
                              height: "250",
                              src: r("2939")("./" + e.img_proveedor),
                            },
                          }),
                          n("v-card-title", [
                            t._v(" " + t._s(e.nombre_proveedor) + " "),
                          ]),
                          n(
                            "v-card-actions",
                            [
                              n(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "warning",
                                    href:
                                      "/Productos-Proveedor/" + e.id_proveedor,
                                  },
                                },
                                [t._v("Ver")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  0 == this.filteredProveedores.length
                    ? n(
                        "h3",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            height: "300px",
                            "padding-top": "150px",
                          },
                        },
                        [t._v(" No se encontró al Proveedor :( ")]
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i =
          (r("96cf"),
          r("4de4"),
          r("caad"),
          r("2532"),
          r("ac1f"),
          r("841c"),
          r("d000")),
        s = r("c260"),
        c = r("84be"),
        l = r("fd2d"),
        d = {
          name: "Landing",
          components: { NavBar: i["a"], Footer: l["a"] },
          data: function () {
            return { search: "", categorias: [], proveedores: [] };
          },
          computed: {
            filteredProveedores: function () {
              var t = this;
              return this.proveedores.filter(function (e) {
                return e.nombre_proveedor
                  .toLowerCase()
                  .includes(t.search.toLowerCase());
              });
            },
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), s["a"].get("/get");
                        case 3:
                          return (
                            (e = t.sent),
                            (this.categorias = e.data.data.categorias),
                            (t.next = 7),
                            c["a"].get("/get")
                          );
                        case 7:
                          (r = t.sent),
                            (this.proveedores = r.data.data.proveedores),
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            null == this.user && this.$router.push("/"),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 13]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    c260: function (t, e, r) {
      "use strict";
      var n = r("bc3a"),
        a = r.n(n);
      e["a"] = a.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/categorias" });
    },
    c3e6: function (t, e, r) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r(
                "v-toolbar",
                { attrs: { dense: "", dark: "" } },
                [
                  r("v-toolbar-title", [t._v("Welcome ")]),
                  r("v-spacer"),
                  r("v-btn", { attrs: { text: "" } }, [t._v(" Ayuda ")]),
                  r("v-btn", { attrs: { text: "", to: "/" } }, [
                    t._v(" Salir "),
                  ]),
                ],
                1
              ),
              r(
                "v-toolbar",
                { attrs: { color: "orange" } },
                [
                  r("v-toolbar-title", [t._v("Merkaltoke")]),
                  r("v-btn", { attrs: { text: "", to: "/ProfileProveedor" } }, [
                    t._v("Mi Perfil "),
                  ]),
                  r("v-btn", { attrs: { text: "", to: "/MisProductos" } }, [
                    t._v(" Mis Productos "),
                  ]),
                  r("v-btn", { attrs: { text: "", to: "/PedidosProv" } }, [
                    t._v(" Pedidos "),
                  ]),
                  r("v-btn", { attrs: { text: "", to: "/Indicadores" } }, [
                    t._v(" Indicadores"),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = {
          name: "NavBarProveedor",
          data: function () {
            return {};
          },
        },
        i = o,
        s = r("2877"),
        c = Object(s["a"])(i, n, a, !1, null, null, null);
      e["a"] = c.exports;
    },
    c66d: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              n("NavBar"),
              n(
                "v-container",
                [
                  n(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      n(
                        "v-col",
                        [
                          n(
                            "v-card",
                            {
                              staticClass: "mt-5",
                              staticStyle: { margin: "auto" },
                              attrs: { "max-width": "450" },
                            },
                            [
                              n(
                                "v-card-title",
                                { staticClass: "text-uppercase" },
                                [t._v(" CUENTA DEL " + t._s(t.user.role))]
                              ),
                              n(
                                "v-row",
                                { attrs: { justify: "center" } },
                                [
                                  n(
                                    "v-dialog",
                                    {
                                      attrs: {
                                        persistent: "",
                                        "max-width": "600px",
                                      },
                                      scopedSlots: t._u([
                                        {
                                          key: "activator",
                                          fn: function (e) {
                                            var r = e.on,
                                              a = e.attrs;
                                            return [
                                              n(
                                                "v-btn",
                                                t._g(
                                                  t._b(
                                                    {
                                                      staticClass: "mx-2",
                                                      attrs: {
                                                        fab: "",
                                                        small: "",
                                                        color: "#FF9800",
                                                        dark: "",
                                                      },
                                                    },
                                                    "v-btn",
                                                    a,
                                                    !1
                                                  ),
                                                  r
                                                ),
                                                [
                                                  n(
                                                    "v-icon",
                                                    { attrs: { dark: "" } },
                                                    [t._v(" mdi-pencil ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ];
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: t.dialog1,
                                        callback: function (e) {
                                          t.dialog1 = e;
                                        },
                                        expression: "dialog1",
                                      },
                                    },
                                    [
                                      n(
                                        "v-form",
                                        {
                                          ref: "perfilUpdate",
                                          attrs: {
                                            enctype: "multipart/form-data",
                                          },
                                          on: {
                                            submit: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.perfilUpdate()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          n(
                                            "v-card",
                                            [
                                              n("v-card-title", [
                                                n(
                                                  "span",
                                                  { staticClass: "headline" },
                                                  [
                                                    t._v(
                                                      "Editar información cuenta"
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              n(
                                                "v-card-text",
                                                [
                                                  n(
                                                    "v-container",
                                                    [
                                                      n(
                                                        "v-row",
                                                        [
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "7",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Nombres y apellidos*",
                                                                    outlined:
                                                                      "",
                                                                    required:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    rules:
                                                                      t.nameRules,
                                                                    "prepend-icon":
                                                                      "mdi-account",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .clientToUpdate
                                                                        .nombre_cliente,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.clientToUpdate,
                                                                          "nombre_cliente",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "clientToUpdate.nombre_cliente",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "5",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "DNI*",
                                                                    outlined:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    required:
                                                                      "",
                                                                    rules:
                                                                      t.dniRules,
                                                                    type: "number",
                                                                    "prepend-icon":
                                                                      "mdi-account-box-outline",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .clientToUpdate
                                                                        .dni,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.clientToUpdate,
                                                                          "dni",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "clientToUpdate.dni",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "7",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Correo",
                                                                    outlined:
                                                                      "",
                                                                    required:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    rules:
                                                                      t.emailRules,
                                                                    "prepend-icon":
                                                                      "mdi-email",
                                                                    disabled:
                                                                      "",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .clientToUpdate
                                                                        .email_cliente,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.clientToUpdate,
                                                                          "email_cliente",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "clientToUpdate.email_cliente",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "5",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Celular*",
                                                                    outlined:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    required:
                                                                      "",
                                                                    type: "number",
                                                                    "prepend-icon":
                                                                      "mdi-phone",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .clientToUpdate
                                                                        .dni,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.clientToUpdate,
                                                                          "dni",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "clientToUpdate.dni",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Dirección*",
                                                                    outlined:
                                                                      "",
                                                                    required:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    rules:
                                                                      t.direccionRules,
                                                                    "prepend-icon":
                                                                      "mdi-home",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .clientToUpdate
                                                                        .direccion_cliente,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.clientToUpdate,
                                                                          "direccion_cliente",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "clientToUpdate.direccion_cliente",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                              n(
                                                "v-card-actions",
                                                [
                                                  n("v-spacer"),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog1 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Cerrar ")]
                                                  ),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                        type: "submit",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog1 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Guardar ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              n(
                                "v-row",
                                { attrs: { justify: "center" } },
                                [
                                  n(
                                    "v-dialog",
                                    {
                                      attrs: {
                                        persistent: "",
                                        "max-width": "600px",
                                      },
                                      scopedSlots: t._u([
                                        {
                                          key: "activator",
                                          fn: function (e) {
                                            var r = e.on,
                                              a = e.attrs;
                                            return [
                                              n(
                                                "v-btn",
                                                t._g(
                                                  t._b(
                                                    {
                                                      staticClass: "mx-2",
                                                      attrs: {
                                                        fab: "",
                                                        small: "",
                                                        color: "#FF9800",
                                                        dark: "",
                                                      },
                                                    },
                                                    "v-btn",
                                                    a,
                                                    !1
                                                  ),
                                                  r
                                                ),
                                                [
                                                  n(
                                                    "v-icon",
                                                    { attrs: { dark: "" } },
                                                    [
                                                      t._v(
                                                        " mdi-account-circle "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ];
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: t.dialog2,
                                        callback: function (e) {
                                          t.dialog2 = e;
                                        },
                                        expression: "dialog2",
                                      },
                                    },
                                    [
                                      n(
                                        "v-form",
                                        {
                                          ref: "imageUpdate",
                                          attrs: {
                                            enctype: "multipart/form-data",
                                          },
                                          on: {
                                            submit: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.imageUpdate()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          n(
                                            "v-card",
                                            [
                                              n("v-card-title", [
                                                n(
                                                  "span",
                                                  { staticClass: "headline" },
                                                  [t._v("Editar imagen")]
                                                ),
                                              ]),
                                              n(
                                                "v-card-text",
                                                [
                                                  n(
                                                    "v-container",
                                                    [
                                                      n(
                                                        "v-row",
                                                        [
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-file-input",
                                                                {
                                                                  attrs: {
                                                                    accept:
                                                                      "image/*",
                                                                    label:
                                                                      "Imagen",
                                                                    "prepend-icon":
                                                                      "mdi-camera",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .clientToUpdate
                                                                        .imagen,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.clientToUpdate,
                                                                          "imagen",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "clientToUpdate.imagen",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  n("small", [
                                                    t._v("*Máximo 5MB"),
                                                  ]),
                                                ],
                                                1
                                              ),
                                              n(
                                                "v-card-actions",
                                                [
                                                  n("v-spacer"),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog2 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Cerrar ")]
                                                  ),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                        type: "submit",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog2 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Guardar ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              n("v-card-text", [
                                n("h2", [t._v("! Bienvenido !")]),
                                n(
                                  "div",
                                  { staticClass: "container" },
                                  [
                                    n("v-img", {
                                      attrs: {
                                        height: "320",
                                        width: "400",
                                        src: r("2939")(
                                          "./" + this.datos.img_cliente
                                        ),
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n("h3", { staticClass: "mt-2" }, [
                                  t._v(
                                    "Nombre: " + t._s(this.datos.nombre_cliente)
                                  ),
                                ]),
                                n("h4", { staticClass: "mt-2" }, [
                                  t._v(
                                    " Correo Electronico: " +
                                      t._s(this.datos.email_cliente) +
                                      " "
                                  ),
                                ]),
                                n("h4", { staticClass: "mt-2" }, [
                                  t._v(
                                    " Direccion: " +
                                      t._s(this.datos.direccion_cliente) +
                                      " "
                                  ),
                                ]),
                                n("h4", { staticClass: "mt-2" }, [
                                  t._v("Dni: " + t._s(this.datos.dni)),
                                ]),
                              ]),
                            ],
                            1
                          ),
                          n("v-card"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("d000")),
        s = r("fd2d"),
        c = r("5402"),
        l = {
          name: "Profile",
          components: { NavBar: i["a"], Footer: s["a"] },
          data: function () {
            return {
              datos: {},
              dialog1: !1,
              dialog2: !1,
              nameRules: [
                function (t) {
                  return !!t || "Name is required";
                },
              ],
              emailRules: [
                function (t) {
                  return !!t || "Email is required";
                },
                function (t) {
                  return /.+@.+\..+/.test(t) || "Email must be valid ";
                },
              ],
              passwordRules: [
                function (t) {
                  return !!t || "Password is required";
                },
              ],
              dniRules: [
                function (t) {
                  return !!t || "DNI || RUC is required";
                },
                function (t) {
                  return (
                    (t && 8 == t.length) ||
                    (t && 11 == t.length) ||
                    "El Dni contiene 8  y el RUC 11"
                  );
                },
              ],
              direccionRules: [
                function (t) {
                  return !!t || "Direccion is required";
                },
              ],
              clientToUpdate: {},
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 16);
                          break;
                        case 5:
                          if (
                            ((this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            "cliente" != this.user.role)
                          ) {
                            t.next = 15;
                            break;
                          }
                          return (
                            (t.next = 9),
                            c["a"].get("/get/".concat(this.user.id))
                          );
                        case 9:
                          (e = t.sent),
                            (this.datos = e.data.data.cliente),
                            console.log(this.datos.img_cliente),
                            (this.clientToUpdate = e.data.data.cliente),
                            (t.next = 16);
                          break;
                        case 15:
                          this.$router.push("/ProfileProveedor");
                        case 16:
                          t.next = 21;
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 18]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            perfilUpdate: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.$refs.perfilUpdate.validate(),
                            console.log(t.clientToUpdate),
                            (e.next = 4),
                            c["a"].put(
                              "/perfilUpdate/".concat(
                                t.clientToUpdate.id_cliente
                              ),
                              t.clientToUpdate
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            imageUpdate: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = new FormData()),
                            r.append("file", t.clientToUpdate.imagen),
                            r.append("id", t.clientToUpdate.id_cliente),
                            t.$refs.imageUpdate.validate(),
                            console.log(t.clientToUpdate.imagen),
                            (e.next = 7),
                            c["a"].put(
                              "/imageUpdate/".concat(
                                t.clientToUpdate.id_cliente
                              ),
                              r
                            )
                          );
                        case 7:
                          location.reload();
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        d = l,
        u = r("2877"),
        h = Object(u["a"])(d, n, a, !1, null, null, null);
      e["default"] = h.exports;
    },
    c740: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("b727").findIndex,
        o = r("44d2"),
        i = "findIndex",
        s = !0;
      i in [] &&
        Array(1)[i](function () {
          s = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: s },
          {
            findIndex: function (t) {
              return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        o(i);
    },
    caad: function (t, e, r) {
      "use strict";
      var n = r("23e7"),
        a = r("4d64").includes,
        o = r("44d2");
      n(
        { target: "Array", proto: !0 },
        {
          includes: function (t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        o("includes");
    },
    cb58: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBarAdmin"),
              r(
                "v-container",
                { staticClass: "mt-5" },
                [
                  r(
                    "v-card",
                    {
                      staticClass: "pb-3",
                      attrs: { elevation: "15", shaped: "", loading: "" },
                    },
                    [
                      r(
                        "v-card-title",
                        [
                          t._v(
                            " Gestión de Productos del Proveedor " +
                              t._s(t.user.nombre_proveedor) +
                              " "
                          ),
                          r("v-spacer"),
                        ],
                        1
                      ),
                      r("v-data-table", {
                        attrs: { headers: t.headers, items: t.productos },
                        scopedSlots: t._u([
                          {
                            key: "item",
                            fn: function (e) {
                              return [
                                r("tr", [
                                  r("td", [t._v(t._s(e.item.nombre))]),
                                  r("td", [t._v(t._s(e.item.precio))]),
                                  r("td", [t._v(t._s(e.item.stock))]),
                                  r("td", [t._v(t._s(e.item.detalle))]),
                                  r("td", [t._v(t._s(e.item.categoria))]),
                                  r(
                                    "td",
                                    {
                                      attrs: {
                                        id: "visible" + e.item.id_producto,
                                      },
                                    },
                                    [t._v(" " + t._s(e.item.visible) + " ")]
                                  ),
                                  r(
                                    "td",
                                    [
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "orange",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProductoToUpdate(
                                                e.item.id_producto
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-pencil ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "red",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.readProductoToDelete(
                                                e.item.id_producto
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-delete ")]
                                          ),
                                        ],
                                        1
                                      ),
                                      r(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green",
                                            "x-small": "",
                                            small: "",
                                            dark: "",
                                            fab: "",
                                          },
                                          on: {
                                            click: function (r) {
                                              return t.HacerVisible(
                                                e.item.id_producto
                                              );
                                            },
                                          },
                                        },
                                        [
                                          r(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [t._v(" mdi-eye ")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                              ];
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("84be")),
        s = r("ed7b"),
        c = {
          name: "Provductos-Proveedor",
          components: { NavBarAdmin: s["a"] },
          data: function () {
            return {
              productos: [],
              user: {},
              search: "",
              prueba: "",
              headers: [
                {
                  text: "Producto",
                  align: "start",
                  sortable: !1,
                  value: "nombre",
                },
                { text: "Precio", value: "precio", sortable: !0 },
                { text: "Stock", value: "stock" },
                { text: "Detalle", value: "detalle", sortable: !1 },
                { text: "Categoria", value: "categoria", sortable: !1 },
                { text: "Visible", value: "visible", sortable: !1 },
                { text: "Operacion", value: "operacion", sortable: !1 },
              ],
              add: !1,
            };
          },
          methods: {},
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            (t.prev = 1),
                            (e = this.$route.params.id),
                            (t.next = 5),
                            i["a"].get("/get/".concat(e))
                          );
                        case 5:
                          return (
                            (r = t.sent),
                            (this.user = r.data.data.proveedores),
                            console.log(this.user),
                            console.log(e),
                            (t.next = 11),
                            i["a"].get("/getProductos-Proveedor/".concat(e))
                          );
                        case 11:
                          (n = t.sent),
                            (this.productos = n.data.data.productos),
                            (t.next = 18);
                          break;
                        case 15:
                          (t.prev = 15),
                            (t.t0 = t["catch"](1)),
                            console.log(t.t0);
                        case 18:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 15]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        l = c,
        d = r("2877"),
        u = Object(d["a"])(l, n, a, !1, null, null, null);
      e["default"] = u.exports;
    },
    cbb2: function (t, e, r) {
      t.exports = r.p + "img/PDWCfGZAN0ggI0oSH7Jk3o5zXBwQpS.2442b45e.png";
    },
    cccb: function (t, e, r) {
      "use strict";
      r("5ced");
    },
    d000: function (t, e, r) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r(
                "v-toolbar",
                { attrs: { dense: "", dark: "" } },
                [
                  r("v-toolbar-title", [t._v("Welcome ")]),
                  r("v-spacer"),
                  r("v-btn", { attrs: { text: "" } }, [t._v(" Ayuda ")]),
                  r("v-btn", { attrs: { text: "", to: "/" } }, [
                    t._v(" Salir "),
                  ]),
                ],
                1
              ),
              r(
                "v-toolbar",
                { attrs: { color: "orange" } },
                [
                  r("v-toolbar-title", [t._v("Merkaltoke")]),
                  r("v-btn", { attrs: { text: "", to: "/Profile" } }, [
                    t._v(" Perfil "),
                  ]),
                  r("v-btn", { attrs: { text: "", to: "/Landing" } }, [
                    t._v(" Categorías y Proveedores "),
                  ]),
                  r("v-btn", { attrs: { text: "", to: "/Carrito" } }, [
                    t._v(" Carrito "),
                  ]),
                  r("v-btn", { attrs: { text: "", to: "/Pedidos" } }, [
                    t._v(" Pedidos "),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = {
          name: "NavBar",
          data: function () {
            return {};
          },
        },
        i = o,
        s = r("2877"),
        c = Object(s["a"])(i, n, a, !1, null, null, null);
      e["a"] = c.exports;
    },
    d784: function (t, e, r) {
      "use strict";
      r("ac1f");
      var n = r("6eeb"),
        a = r("9263"),
        o = r("d039"),
        i = r("b622"),
        s = r("9112"),
        c = i("species"),
        l = RegExp.prototype,
        d = !o(function () {
          var t = /./;
          return (
            (t.exec = function () {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }),
        u = (function () {
          return "$0" === "a".replace(/./, "$0");
        })(),
        h = i("replace"),
        p = (function () {
          return !!/./[h] && "" === /./[h]("a", "$0");
        })(),
        f = !o(function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments);
          };
          var r = "ab".split(t);
          return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
        });
      t.exports = function (t, e, r, h) {
        var g = i(t),
          m = !o(function () {
            var e = {};
            return (
              (e[g] = function () {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          v =
            m &&
            !o(function () {
              var e = !1,
                r = /a/;
              return (
                "split" === t &&
                  ((r = {}),
                  (r.constructor = {}),
                  (r.constructor[c] = function () {
                    return r;
                  }),
                  (r.flags = ""),
                  (r[g] = /./[g])),
                (r.exec = function () {
                  return (e = !0), null;
                }),
                r[g](""),
                !e
              );
            });
        if (
          !m ||
          !v ||
          ("replace" === t && (!d || !u || p)) ||
          ("split" === t && !f)
        ) {
          var b = /./[g],
            x = r(
              g,
              ""[t],
              function (t, e, r, n, o) {
                var i = e.exec;
                return i === a || i === l.exec
                  ? m && !o
                    ? { done: !0, value: b.call(e, r, n) }
                    : { done: !0, value: t.call(r, e, n) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: u,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p,
              }
            ),
            _ = x[0],
            y = x[1];
          n(String.prototype, t, _),
            n(
              l,
              g,
              2 == e
                ? function (t, e) {
                    return y.call(t, this, e);
                  }
                : function (t) {
                    return y.call(t, this);
                  }
            );
        }
        h && s(l[g], "sham", !0);
      };
    },
    d8c1: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              n("NavBar"),
              n(
                "v-container",
                [
                  n(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      n(
                        "v-col",
                        [
                          n(
                            "v-card",
                            {
                              staticClass: "mt-5",
                              staticStyle: { margin: "auto" },
                              attrs: { "max-width": "450" },
                            },
                            [
                              n(
                                "v-card-title",
                                { staticClass: "text-uppercase" },
                                [t._v(" CUENTA DEL " + t._s(t.user.role))]
                              ),
                              n(
                                "v-row",
                                { attrs: { justify: "center" } },
                                [
                                  n(
                                    "v-dialog",
                                    {
                                      attrs: {
                                        persistent: "",
                                        "max-width": "600px",
                                      },
                                      scopedSlots: t._u([
                                        {
                                          key: "activator",
                                          fn: function (e) {
                                            var r = e.on,
                                              a = e.attrs;
                                            return [
                                              n(
                                                "v-btn",
                                                t._g(
                                                  t._b(
                                                    {
                                                      staticClass: "mx-2",
                                                      attrs: {
                                                        fab: "",
                                                        small: "",
                                                        color: "#FF9800",
                                                        dark: "",
                                                      },
                                                    },
                                                    "v-btn",
                                                    a,
                                                    !1
                                                  ),
                                                  r
                                                ),
                                                [
                                                  n(
                                                    "v-icon",
                                                    { attrs: { dark: "" } },
                                                    [t._v(" mdi-pencil ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ];
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: t.dialog1,
                                        callback: function (e) {
                                          t.dialog1 = e;
                                        },
                                        expression: "dialog1",
                                      },
                                    },
                                    [
                                      n(
                                        "v-form",
                                        {
                                          ref: "perfilUpdate",
                                          attrs: {
                                            enctype: "multipart/form-data",
                                          },
                                          on: {
                                            submit: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.perfilUpdate()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          n(
                                            "v-card",
                                            [
                                              n("v-card-title", [
                                                n(
                                                  "span",
                                                  { staticClass: "headline" },
                                                  [
                                                    t._v(
                                                      "Editar información cuenta"
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              n(
                                                "v-card-text",
                                                [
                                                  n(
                                                    "v-container",
                                                    [
                                                      n(
                                                        "v-row",
                                                        [
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Nombre de empresa*",
                                                                    required:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    rules:
                                                                      t.nameRules,
                                                                    "prepend-icon":
                                                                      "mdi-account",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .proveedorToUpdate
                                                                        .nombre_proveedor,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.proveedorToUpdate,
                                                                          "nombre_proveedor",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "proveedorToUpdate.nombre_proveedor",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                                md: "6",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "RUC*",
                                                                    hint: "Requerido",
                                                                    required:
                                                                      "",
                                                                    rules:
                                                                      t.rucRules,
                                                                    type: "number",
                                                                    "prepend-icon":
                                                                      "mdi-account-box-outline",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .proveedorToUpdate
                                                                        .ruc,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.proveedorToUpdate,
                                                                          "ruc",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "proveedorToUpdate.ruc",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Correo*",
                                                                    required:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    rules:
                                                                      t.emailRules,
                                                                    "prepend-icon":
                                                                      "mdi-email",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .proveedorToUpdate
                                                                        .email_proveedor,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.proveedorToUpdate,
                                                                          "email_proveedor",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "proveedorToUpdate.email_proveedor",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Dirección*",
                                                                    required:
                                                                      "",
                                                                    hint: "Requerido",
                                                                    rules:
                                                                      t.direccionRules,
                                                                    "prepend-icon":
                                                                      "mdi-home",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .proveedorToUpdate
                                                                        .direccion_proveedor,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.proveedorToUpdate,
                                                                          "direccion_proveedor",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "proveedorToUpdate.direccion_proveedor",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                              n(
                                                "v-card-actions",
                                                [
                                                  n("v-spacer"),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog1 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Cerrar ")]
                                                  ),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                        type: "submit",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog1 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Guardar ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              n(
                                "v-row",
                                { attrs: { justify: "center" } },
                                [
                                  n(
                                    "v-dialog",
                                    {
                                      attrs: {
                                        persistent: "",
                                        "max-width": "600px",
                                      },
                                      scopedSlots: t._u([
                                        {
                                          key: "activator",
                                          fn: function (e) {
                                            var r = e.on,
                                              a = e.attrs;
                                            return [
                                              n(
                                                "v-btn",
                                                t._g(
                                                  t._b(
                                                    {
                                                      staticClass: "mx-2",
                                                      attrs: {
                                                        fab: "",
                                                        small: "",
                                                        color: "#FF9800",
                                                        dark: "",
                                                      },
                                                    },
                                                    "v-btn",
                                                    a,
                                                    !1
                                                  ),
                                                  r
                                                ),
                                                [
                                                  n(
                                                    "v-icon",
                                                    { attrs: { dark: "" } },
                                                    [
                                                      t._v(
                                                        " mdi-account-circle "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ];
                                          },
                                        },
                                      ]),
                                      model: {
                                        value: t.dialog2,
                                        callback: function (e) {
                                          t.dialog2 = e;
                                        },
                                        expression: "dialog2",
                                      },
                                    },
                                    [
                                      n(
                                        "v-form",
                                        {
                                          ref: "imageUpdate",
                                          attrs: {
                                            enctype: "multipart/form-data",
                                          },
                                          on: {
                                            submit: function (e) {
                                              return (
                                                e.preventDefault(),
                                                t.imageUpdate()
                                              );
                                            },
                                          },
                                        },
                                        [
                                          n(
                                            "v-card",
                                            [
                                              n("v-card-title", [
                                                n(
                                                  "span",
                                                  { staticClass: "headline" },
                                                  [t._v("Editar imagen")]
                                                ),
                                              ]),
                                              n(
                                                "v-card-text",
                                                [
                                                  n(
                                                    "v-container",
                                                    [
                                                      n(
                                                        "v-row",
                                                        [
                                                          n(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12",
                                                                sm: "6",
                                                              },
                                                            },
                                                            [
                                                              n(
                                                                "v-file-input",
                                                                {
                                                                  attrs: {
                                                                    accept:
                                                                      "image/*",
                                                                    label:
                                                                      "Imagen",
                                                                    "prepend-icon":
                                                                      "mdi-camera",
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      t
                                                                        .proveedorToUpdate
                                                                        .imagen,
                                                                    callback:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.$set(
                                                                          t.proveedorToUpdate,
                                                                          "imagen",
                                                                          e
                                                                        );
                                                                      },
                                                                    expression:
                                                                      "proveedorToUpdate.imagen",
                                                                  },
                                                                }
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  n("small", [
                                                    t._v("*Máximo 5MB"),
                                                  ]),
                                                ],
                                                1
                                              ),
                                              n(
                                                "v-card-actions",
                                                [
                                                  n("v-spacer"),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog2 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Cerrar ")]
                                                  ),
                                                  n(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                        type: "submit",
                                                      },
                                                      on: {
                                                        click: function (e) {
                                                          t.dialog2 = !1;
                                                        },
                                                      },
                                                    },
                                                    [t._v(" Guardar ")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              n(
                                "v-card-text",
                                [
                                  n("h2", [t._v("! Bienvenido !")]),
                                  n(
                                    "div",
                                    { staticClass: "container" },
                                    [
                                      n("v-img", {
                                        attrs: {
                                          height: "320",
                                          width: "400",
                                          src: r("2939")(
                                            "./" + this.datos.img_proveedor
                                          ),
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  n("h3", { staticClass: "mt-2" }, [
                                    t._v(
                                      "Nombre: " +
                                        t._s(this.datos.nombre_proveedor)
                                    ),
                                  ]),
                                  n("h4", { staticClass: "mt-2" }, [
                                    t._v(
                                      " Correo Electronico: " +
                                        t._s(this.datos.email_proveedor) +
                                        " "
                                    ),
                                  ]),
                                  n("h4", { staticClass: "mt-2" }, [
                                    t._v(
                                      " Direccion: " +
                                        t._s(this.datos.direccion_proveedor) +
                                        " "
                                    ),
                                  ]),
                                  n("h4", { staticClass: "mt-2" }, [
                                    t._v("RUC: " + t._s(this.datos.ruc)),
                                  ]),
                                  n("h4", { staticClass: "mt-2" }, [
                                    t._v("Activo: " + t._s(this.datos.activo)),
                                  ]),
                                  n(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "red",
                                        "x-small": "",
                                        small: "",
                                        dark: "",
                                        fab: "",
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.readCuentaToDelete();
                                        },
                                      },
                                    },
                                    [
                                      n("v-icon", { attrs: { small: "" } }, [
                                        t._v(" mdi-cancel "),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          n("v-card"),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-dialog",
                {
                  attrs: { persistent: "", "max-width": "450" },
                  model: {
                    value: t.advertencia,
                    callback: function (e) {
                      t.advertencia = e;
                    },
                    expression: "advertencia",
                  },
                },
                [
                  n(
                    "v-card",
                    [
                      n("v-card-title", { staticClass: "headline" }, [
                        t._v(" Eliminar la cuenta "),
                      ]),
                      n("v-card-text", [
                        t._v(" ¿Desea eliminar su suscripcion ? "),
                      ]),
                      n(
                        "v-card-actions",
                        [
                          n("v-spacer"),
                          n(
                            "v-btn",
                            {
                              attrs: { color: "green darken-1", text: "" },
                              on: {
                                click: function (e) {
                                  t.advertencia = !1;
                                },
                              },
                            },
                            [t._v(" No ")]
                          ),
                          n(
                            "v-btn",
                            {
                              attrs: { color: "red", text: "" },
                              on: {
                                click: function (e) {
                                  return t.Cancel();
                                },
                              },
                            },
                            [t._v(" Si ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("d3b7"), r("25f0"), r("99af"), r("96cf"), r("c3e6")),
        s = r("fd2d"),
        c = r("84be"),
        l = r("8e18"),
        d = {
          name: "Profile",
          components: { NavBar: i["a"], Footer: s["a"] },
          data: function () {
            return {
              productos: [],
              datos: {},
              proveedorToUpdate: {},
              activo: "",
              visible: "",
              dialog1: !1,
              dialog2: !1,
              advertencia: !1,
              nameRules: [
                function (t) {
                  return !!t || "Name is required";
                },
              ],
              emailRules: [
                function (t) {
                  return !!t || "Email is required";
                },
                function (t) {
                  return /.+@.+\..+/.test(t) || "Email must be valid ";
                },
              ],
              passwordRules: [
                function (t) {
                  return !!t || "Password is required";
                },
              ],
              rucRules: [
                function (t) {
                  return !!t || "DNI || RUC is required";
                },
                function (t) {
                  return (
                    (t && 8 == t.length) ||
                    (t && 11 == t.length) ||
                    "El Dni contiene 8  y el RUC 11"
                  );
                },
              ],
              direccionRules: [
                function (t) {
                  return !!t || "Direccion is required";
                },
              ],
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            null !=
                              JSON.parse(sessionStorage.getItem("session")))
                          ) {
                            t.next = 5;
                            break;
                          }
                          this.$router.push("/"), (t.next = 17);
                          break;
                        case 5:
                          if (
                            ((this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            this.user.id,
                            "proveedor" != this.user.role)
                          ) {
                            t.next = 16;
                            break;
                          }
                          return (
                            console.log("es proveedor"),
                            (t.next = 11),
                            c["a"].get("/get/".concat(this.user.id))
                          );
                        case 11:
                          (e = t.sent),
                            (this.datos = e.data.data.proveedores),
                            (this.proveedorToUpdate = e.data.data.proveedores),
                            (t.next = 17);
                          break;
                        case 16:
                          this.$router.push("/");
                        case 17:
                          t.next = 22;
                          break;
                        case 19:
                          (t.prev = 19),
                            (t.t0 = t["catch"](0)),
                            console.log(t.t0);
                        case 22:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 19]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          methods: {
            perfilUpdate: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.$refs.perfilUpdate.validate(),
                            console.log(t.proveedorToUpdate),
                            (e.next = 4),
                            c["a"].put(
                              "/perfilUpdate/".concat(
                                t.proveedorToUpdate.id_proveedor
                              ),
                              t.proveedorToUpdate
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            imageUpdate: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = new FormData()),
                            r.append("file", t.proveedorToUpdate.imagen),
                            r.append("id", t.proveedorToUpdate.id_proveedor),
                            t.$refs.imageUpdate.validate(),
                            (e.next = 6),
                            c["a"].put(
                              "/imageUpdate/".concat(
                                t.proveedorToUpdate.id_proveedor
                              ),
                              r
                            )
                          );
                        case 6:
                          location.reload();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            Cancel: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.user.id),
                            r.toString(),
                            "Inactivo",
                            (n = "no"),
                            (e.next = 6),
                            l["a"].put(
                              "/updatecancel/".concat(r, "/").concat(n)
                            )
                          );
                        case 6:
                          return (
                            e.sent,
                            (e.next = 9),
                            c["a"].put(
                              "/updatecancel/".concat(r, "/", "Inactivo")
                            )
                          );
                        case 9:
                          e.sent,
                            setTimeout(function () {
                              sessionStorage.removeItem("session"),
                                window.location.reload();
                            }, 1e3),
                            console.log(t.productos),
                            (t.advertencia = !1);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            readCuentaToDelete: function () {
              var t = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.advertencia = !0;
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        },
        u = d,
        h = r("2877"),
        p = Object(h["a"])(u, n, a, !1, null, null, null);
      e["default"] = p.exports;
    },
    e8b5: function (t, e, r) {
      var n = r("c6b6");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == n(t);
        };
    },
    ed29: function (t, e, r) {
      t.exports = r.p + "img/j0DhRtEz59hSRGuduIo45YTsBQ9IRH.a65c2608.jpeg";
    },
    ed7b: function (t, e, r) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r(
                "v-toolbar",
                { attrs: { dense: "", dark: "" } },
                [
                  r("v-toolbar-title", [t._v("Welcome ")]),
                  r("v-spacer"),
                  r("v-btn", { attrs: { text: "", to: "/" } }, [
                    t._v(" Salir "),
                  ]),
                ],
                1
              ),
              r(
                "v-toolbar",
                { attrs: { color: "orange" } },
                [
                  r("v-toolbar-title", [t._v("Merkaltoke")]),
                  r("v-btn", { attrs: { text: "", to: "/Usuarios" } }, [
                    t._v(" Usuarios"),
                  ]),
                  r(
                    "v-btn",
                    { attrs: { text: "", to: "/Admin-Proveedores" } },
                    [t._v(" Proveedores ")]
                  ),
                  r("v-btn", { attrs: { text: "", to: "/Pedidos" } }, [
                    t._v(" Pedidos "),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = {
          name: "NavBarAdmin",
          data: function () {
            return {};
          },
        },
        i = o,
        s = r("2877"),
        c = Object(s["a"])(i, n, a, !1, null, null, null);
      e["a"] = c.exports;
    },
    f1d5: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            [
              r("NavBar"),
              r(
                "v-container",
                [
                  r(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      r(
                        "v-col",
                        [
                          r(
                            "v-card",
                            {
                              staticClass: "mt-5 mb-5",
                              attrs: {
                                elevation: "15",
                                shaped: "",
                                loading: "",
                              },
                            },
                            [
                              r(
                                "v-card-title",
                                { staticClass: "headline" },
                                [t._v(" Detalles del Pedido "), r("v-spacer")],
                                1
                              ),
                              r("v-data-table", {
                                attrs: {
                                  headers: t.headers,
                                  items: t.mostrarProductos,
                                },
                                scopedSlots: t._u([
                                  {
                                    key: "item",
                                    fn: function (e) {
                                      return [
                                        r("tr", [
                                          r("td", [t._v(t._s(e.item.nombre))]),
                                          r("td", [
                                            t._v(t._s(e.item.cantidad)),
                                          ]),
                                          r("td", [t._v(t._s(e.item.precio))]),
                                          r("td", [
                                            t._v(
                                              t._s(
                                                e.item.cantidad * e.item.precio
                                              )
                                            ),
                                          ]),
                                        ]),
                                      ];
                                    },
                                  },
                                ]),
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = r("1da1"),
        i = (r("96cf"), r("99af"), r("84be")),
        s = r("f56b"),
        c = {
          name: "Productos-Pedido",
          components: {},
          data: function () {
            return {
              mostrarProductos: [],
              search: "",
              headers: [
                {
                  text: "Producto",
                  align: "start",
                  sortable: !0,
                  value: "nombre",
                },
                { text: "Cantidad", value: "cantidad", sortable: !0 },
                { text: "Precio", value: "precio", sortable: !0 },
                { text: "Posible Ingreso", value: "Monto", sortable: !0 },
              ],
            };
          },
          created: (function () {
            var t = Object(o["a"])(
              regeneratorRuntime.mark(function t() {
                var e, r, n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.user = JSON.parse(
                              sessionStorage.getItem("session")
                            )),
                            null == this.user && this.$router.push("/"),
                            (t.prev = 2),
                            (t.next = 5),
                            i["a"].get("/get/".concat(this.user.id))
                          );
                        case 5:
                          return (
                            (e = t.sent),
                            (this.datos = e.data.data.proveedores),
                            (r = this.$route.params.id),
                            (t.next = 10),
                            s["a"].get(
                              "/getpedido_productos/"
                                .concat(r, "/")
                                .concat(this.user.id)
                            )
                          );
                        case 10:
                          (n = t.sent),
                            (this.mostrarProductos = n.data.data.pedidos),
                            (t.next = 17);
                          break;
                        case 14:
                          (t.prev = 14),
                            (t.t0 = t["catch"](2)),
                            console.log(t.t0);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[2, 14]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        l = c,
        d = r("2877"),
        u = Object(d["a"])(l, n, a, !1, null, null, null);
      e["default"] = u.exports;
    },
    f56b: function (t, e, r) {
      "use strict";
      var n = r("bc3a"),
        a = r.n(n);
      e["a"] = a.a.create({ baseURL: "https://dbmerkaltoke.herokuapp.com/pedidos" });
    },
    faec: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAYAAAAeYmHpAAAMa0lEQVRogdVbCXRU1Rn+3uyZyTYJkIQASQgJKpAImACtgEBBcUOwKKAgIFIVjx5QKGhtixZERcQF64Z1oYqgRYqCWglSRFmDQigkIUQgQBbIPpNJZuv53/wPH8NMMssL4HfOO/PmLff+37v33X99gum6x9GOUAPoDeBKAD0B9ADQAUAUAAMAG4AGAGcAHAFQCOAQgAIAzvYSS9MObXYCcAeA3wEYCiA2hDZqAWwF8A2ANQAqlRRQqZEWANwKYAaA6wFofVzjAnAaQDWPrhWAkUc9DkASAJWP++wAvgLwFoANANzhChvuSJOQdwJYAKCP17kKAHm87eZp29JKWzp+DXIADAcwDEAiP8CbeTsA4BkAH/NDDAnhjHQ/AH8HkCs7Vg/gXwD+AWBbmKNCs2cwgGkAxgGIlp3bBeBBAHtDadjXdGoLegDLePQkwlUA5gHoykL+V4Fp6OZ2pnG787gfcL+7WA59sA0HSzoNwHcAZvO9DgBLAXQH8DyPdHugntvvzv05uP/ZLE9ae5GmlTgfwDX8n0a6L4C5ABrbiaw3Grm/vtw/WB6a5iMCbSRQ0mMBfMnqx83T6resTy8FCrj/51keM4CNAMYrRZoaWsvGBE2r6QAeZVVyKWHn93w6y0Wr/0eBEG+LNKmOVWxZNQG4HcC7l5isN97lmWhlOVex3H7RGukMVj86NgknAPj3RacUGD4HMJHl1LHcGf7u9Ec6AsAnAGL4/8zLmLAEku8+3ie5P2UeF0CtSx3s6/gLbFYSXgSwpF3FVQ4/shEzCEACm7i0AJ8HXyPdH8As3ie1MF8pkf527/DYG4ZmPWZJTthqsarLLFb1SUvH+M3aHl1nvL9gjFGhbubL1Nks5nMevM1Qegg72P51sKl5QAlJLNHRw+DCBzhUlQyjFjDzzKu1eX57xJciVjfBdLR8lwLd9WabQsuW2yC5re490ncyYcJypQin9UkdgZLqzSirT0ZSFBBjAFxuzxajB6L1QPGZNOwo2z59TM4ABbokPf4S75PJeqf8pJw0GfjSsJNT/5QCnePzJXfFFRSdWQ2tRkCk7sILJAudHoRarXlly5GPVz52k0GBrp9iHoQFzE+EnPStPC3AT6lBgY7x2Kd7ZqLkbAdEBeAXxBqA/WUpaw+WT1Kg6waerQRye2+RTshJz5Bd/KoCnYrYW2MdAZUAuANwuugaQcD2k3W3tH1xQFghc4IkdXaONIV4buD9tRyuUQZ1TUkw+pjW/hAVgfIz9UF5Ta2glu0NcESnk5z0HbIoyvuKESZoVU5xwQoULheg1TQpKIHERyvZ5RLpkfxbzo67cjDoimBtkS0jrYCuabShc7TxsIISEJ9yOU8VG+lD+OAWJQJvctzSLW6duGoHMtp2lzi978nuskZBEajjLbxPMQE1kc6ShWnzFOzM0+C3+z+EOeJ7VDVCXND8QaUCKuqBJNP6l1d9u0lhMSTSxDOLSGfLTuYr3JmI9QvH3o3UDsdR0QA4vIKYNA50jM6ldzywePKg6e0ggjyAmK3ycsGK2qFDTPrzR6WfPXFjGtLjPxAJNtmBE9WerdkOON1AZvxbJocla9HKvOp2EKFI9tpmqDjSSDjVXrGuyLQkc1SLLcFkbZhy17g+ceideP/Ye4esuHXa4BXo2+W+WZP6R5ka6meuffSmbkk9U2ICaDJYNDI/QldyOCh7MIrt7Cylerl//G90bhduX7ajZAJKzg6CTtXxiqwua6L0qlf/t/fINvm1fa7JHFxaY5tTUVJ5G5qdFeget3POwPTVEPDpG59831qCIBjs54TE10SaBLiWQ6k+netgMG3cAMPmwspZh47XPICiynTotRC9KprWjc1AhAboYm6BG7VsgZlRVqNFixOiEaNRAVa7Z9pndCzpd0XCisI9RS8qQPocT3laJ2xb+8kHRw+b/9qW11FlyYRWDXQweVZsepuIDBGmdexknQ4Op2gdideZ9B53/5zzoQdcOqCsNj3/WM0ypJinIN4w0XSsIhz9beFfldz2jgqjQbw+b0zG/MUb83C6PhMRWkCv9mhEuXp2swFCIx9t8Gx0rYALr6OHQbrd6QJKa65GufWbpX8YYQ5DRBP/ujQcRYQsHhYS3ttZOh7ldUC3eCAx8jvoNA/j55pmGDShpI6AMxZn4vArTOWNTbvxQylwvDp5/eHKMWFEYyV+VpUs9xsXDulai+0q6HUUETk4KbfrSNidbrjRixPx6UFvTfbsnjERuh/njJqO5NhjOFmHCIPeOzMaDCR+FTTSx/lPZ9IuoaqtPfvLroZRj+zMDusy44wpOGvdB21ogyyiUxS2bj2MN+ONJujUN6FLbMq6gyf6mQK41QcimR/hBElVzH/ozcoMpcV1z06JQJMzCXYHzWZ3ndWeELYFT+9yxyhsKq7MwLFqPaIMwLHaUF3OTFnkpJhI/yQ72S+UFr/54VA2dOo4qNU0qzWCIDgu8KoEwaOySB3RPm1kmZEqq2/2nPO2zV1uJJp0bug1AlocgEbdKf/1GUkhiCjn9ZOKlbYUNGg1HeIPe8/aeuFEjWfF9gUiSLZ1TsqPaYNSi2BpARpsGDwi836kxH3SY3jGKWR1PoJT9f6dEr2GIisRo5dtym1DHF+QeBHP/SpOhUg+9DAE5vmehwSzqYc4Uv4I11iBAalbN07MyRGcrlPiaJuNBfm7Ct9Aoy0mVqcr2zV7VC9clVCC6ibPPd6g9eFULRr0xm5BikeNDeN9Kt5xSivNf/g3UeZbB4wP9xwdiIRo35fX2YCMhOKTi8YOn/rx7k1HNxy8Djo1rsnpunDqmNwcnG4Yueed7bnz1u174dCz43ojOfqszwdIa4TTjf5mw9VBikd8EnmfqpXORU7WcHCfMCVY0iiuulI0JjxT8/wlzKAByms7vbvtyPRFN2b9FalxZ2DSWa5PMX+2YkfpZNH8vDLh2MS+XWzr95+agXqbVmzrQsqiNZdfUd8xSOkkPg7meY50pSznMz7Y2q8ZE3KfojAPaq0QVOJE/MVpJtItzpgnFm54q7HZkTp6ZM8ypJtfWr52pwM/V98LhxNz7x6wpNmFwvmPr38FLc5o8Z5f4EKzwyhO+3jDiYcGpv8lCNGIx+95/0vJJpG3/jaXLZE5+hClngJt+aMNO19DbtefUNfyXkltU8y1nWN051YGMiVNOvE9nf3cV6tE1WM2lFmSE9aisMqIeCOe//zA0yiv7wCzweN0SKElQUCNzU46Vj3qtj6rhnaPm7X4vbxg6loelFUlvS0dlOeyBF7Je3NmoHuwTsjo63qrspPNPR0t9syF7+/+TFyQJCuU9lu48pG8K7sTiOQEAKkutQDoNL/Ex+naSAP+ODZrcEZq3M+PvPBFWTCy8OAd5bLMAxwhEhuXm0x0YDHv04VPBtPD0CFZqk3fFriW/HPbocPVVqeoYuQgMjTxadOpPaNPx2ij6UzvsXdCQA0IGnW9RHjAiP7BmHhPMg/CM/K1prWspZ2VekDFNNoe3Z6rXZ0/F9H6GkQZomDSacToZshwex6OzdGM2iYrqhrM4xfdNnfjFzuXBtCiPGtJaduB8qyld5kknXgAwE6+4R2u4mmzqOZPo3rlvdFku7ZYoybz2CKohBq14O0zBgMBDgr8u9zxJo3K6K5qKEiOidgWQAOS3Fq2Qei9Pu/p+yuTpATew7y/jKuJfi1YKpP3ZQCPeMvt7x2ZL5vWcwBM/ZUQvoflBcvvs4rCH+kmLkKt4/9vy2pQLleQfCtZC9Vx+ZfPnFhrq2ExE2/h1M9q1uOXI27mwjk1yzuutRh+WyqA0jyTeUGgIpF1l+FUn8pyGVnOyW2lpwLRe2vYNLXxav8OLxa+qvcvJkiW51geDY/wJMm+Dpc0+EnewP6owKvjdlm5xsUG9fs9VwRL7/CNgRAOhjTYFyWjZQ//p/19/LQjLxLpSO5vn6wKag/Xim0OtJFgI3dHOEuwnA0ZDT/tEqqp8frkQElE8+wq4f403P9ylqckmL5CCVc2c0V9rqwyrxPXXp9gtTEklAiMFwRuZyW3u1SqGeF+B7AcfkI2rTQc5idKKq4OXuDj/T7NyfA8no6FstSKL5j4g7W+sq91vIOABfy1zupL9bXOee2wcTCT6zr8rewn2W1tZMMhgt9T8oaS/dxj53DWm1zpG3Z5SHt8dih9gTeKs6ChfIFXx8HKry/nL/D8gSwkynlTMI8qHiiSSaNKCxMVl5FupUgIjT5lWsgKpPJlCma0z7eWAP4PvVC3XdeOW1UAAAAASUVORK5CYII=";
    },
    fd2d: function (t, e, r) {
      "use strict";
      var n = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "v-card",
            { attrs: { height: "" } },
            [
              r(
                "v-footer",
                t._b(
                  { attrs: { padless: t.padless } },
                  "v-footer",
                  t.localAttrs,
                  !1
                ),
                [
                  r(
                    "v-card",
                    {
                      staticClass: "orange text-center",
                      attrs: { flat: "", tile: "", width: "100%" },
                    },
                    [
                      r(
                        "v-card-text",
                        t._l(t.icons, function (e) {
                          return r(
                            "v-btn",
                            {
                              key: e,
                              staticClass: "mx-4",
                              attrs: { icon: "" },
                            },
                            [
                              r("v-icon", { attrs: { size: "24px" } }, [
                                t._v(" " + t._s(e) + " "),
                              ]),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                      r("v-divider"),
                      r("v-card-text", { staticClass: "dark--text" }, [
                        r("strong", [t._v("Copyright © ")]),
                        t._v(t._s(new Date().getFullYear()) + " — "),
                        r("strong", [t._v("MerkAltoke")]),
                        t._v(" — "),
                        r("strong", [t._v("Todos los derechos reservados")]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        o = {
          data: function () {
            return {
              icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
              items: ["fixed"],
              padless: !1,
              variant: "fixed",
            };
          },
          computed: {
            localAttrs: function () {
              var t = {};
              return (
                "default" === this.variant
                  ? ((t.absolute = !1), (t.fixed = !1))
                  : (t[this.variant] = !0),
                t
              );
            },
          },
        },
        i = o,
        s = r("2877"),
        c = Object(s["a"])(i, n, a, !1, null, null, null);
      e["a"] = c.exports;
    },
  },
]);
//# sourceMappingURL=about.79122384.js.map
