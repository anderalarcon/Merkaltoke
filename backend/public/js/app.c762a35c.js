(function (e) {
  function n(n) {
    for (
      var o, r, i = n[0], c = n[1], d = n[2], l = 0, f = [];
      l < i.length;
      l++
    )
      (r = i[l]),
        Object.prototype.hasOwnProperty.call(u, r) && u[r] && f.push(u[r][0]),
        (u[r] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    p && p(n);
    while (f.length) f.shift()();
    return a.push.apply(a, d || []), t();
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== u[i] && (o = !1);
      }
      o && (a.splice(n--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var o = {},
    r = { app: 0 },
    u = { app: 0 },
    a = [];
  function i(e) {
    return (
      c.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "79122384" }[e] +
      ".js"
    );
  }
  function c(n) {
    if (o[n]) return o[n].exports;
    var t = (o[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.e = function (e) {
    var n = [],
      t = { about: 1 };
    r[e]
      ? n.push(r[e])
      : 0 !== r[e] &&
        t[e] &&
        n.push(
          (r[e] = new Promise(function (n, t) {
            for (
              var o =
                  "css/" +
                  ({ about: "about" }[e] || e) +
                  "." +
                  { about: "fbc25b2a" }[e] +
                  ".css",
                u = c.p + o,
                a = document.getElementsByTagName("link"),
                i = 0;
              i < a.length;
              i++
            ) {
              var d = a[i],
                l = d.getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (l === o || l === u)) return n();
            }
            var f = document.getElementsByTagName("style");
            for (i = 0; i < f.length; i++) {
              (d = f[i]), (l = d.getAttribute("data-href"));
              if (l === o || l === u) return n();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = n),
              (p.onerror = function (n) {
                var o = (n && n.target && n.target.src) || u,
                  a = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + o + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = o),
                  delete r[e],
                  p.parentNode.removeChild(p),
                  t(a);
              }),
              (p.href = u);
            var s = document.getElementsByTagName("head")[0];
            s.appendChild(p);
          }).then(function () {
            r[e] = 0;
          }))
        );
    var o = u[e];
    if (0 !== o)
      if (o) n.push(o[2]);
      else {
        var a = new Promise(function (n, t) {
          o = u[e] = [n, t];
        });
        n.push((o[2] = a));
        var d,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          c.nc && l.setAttribute("nonce", c.nc),
          (l.src = i(e));
        var f = new Error();
        d = function (n) {
          (l.onerror = l.onload = null), clearTimeout(p);
          var t = u[e];
          if (0 !== t) {
            if (t) {
              var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src;
              (f.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = o),
                (f.request = r),
                t[1](f);
            }
            u[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          d({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = d), document.head.appendChild(l);
      }
    return Promise.all(n);
  }),
    (c.m = e),
    (c.c = o),
    (c.d = function (e, n, t) {
      c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, n) {
      if ((1 & n && (e = c(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          c.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (c.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (c.p = "/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = d.push.bind(d);
  (d.push = n), (d = d.slice());
  for (var f = 0; f < d.length; f++) n(d[f]);
  var p = l;
  a.push([0, "chunk-vendors"]), t();
})({
  0: function (e, n, t) {
    e.exports = t("56d7");
  },
  "56d7": function (e, n, t) {
    "use strict";
    t.r(n);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var o = t("2b0e"),
      r = function () {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("v-app", [t("v-main", [t("router-view")], 1)], 1);
      },
      u = [],
      a = {
        name: "App",
        data: function () {
          return {};
        },
      },
      i = a,
      c = t("2877"),
      d = Object(c["a"])(i, r, u, !1, null, null, null),
      l = d.exports,
      f = (t("d3b7"), t("3ca3"), t("ddb0"), t("8c4f"));
    o["default"].use(f["a"]);
    var p = [
        {
          path: "/",
          name: "Home",
          component: function () {
            return t.e("about").then(t.bind(null, "bb51"));
          },
        },
        {
          path: "/Profile",
          name: "Profile",
          component: function () {
            return t.e("about").then(t.bind(null, "c66d"));
          },
        },
        ,
        {
          path: "/Landing",
          name: "Landing",
          component: function () {
            return t.e("about").then(t.bind(null, "bede"));
          },
        },
        {
          path: "/Carrito",
          name: "Carrito",
          component: function () {
            return t.e("about").then(t.bind(null, "1c71"));
          },
        },
        {
          path: "/Pedidos",
          name: "Pedidos",
          component: function () {
            return t.e("about").then(t.bind(null, "8000"));
          },
        },
        {
          path: "/Productos-Categoria/:id",
          name: "Productos-Categoria",
          component: function () {
            return t.e("about").then(t.bind(null, "5eb0"));
          },
        },
        {
          path: "/Productos-Proveedor/:id",
          name: "Productos-Proveedor",
          component: function () {
            return t.e("about").then(t.bind(null, "3ffa"));
          },
        },
        {
          path: "/Comprobante/:id",
          name: "Comprobante",
          component: function () {
            return t.e("about").then(t.bind(null, "599b"));
          },
        },
        {
          path: "/ProfileProveedor/",
          name: "ProfileProveedor",
          component: function () {
            return t.e("about").then(t.bind(null, "d8c1"));
          },
        },
        {
          path: "/ProfileAdmin/",
          name: "ProfileAdmin",
          component: function () {
            return t.e("about").then(t.bind(null, "20e2"));
          },
        },
        {
          path: "/MisProductos/",
          name: "MisProductos",
          component: function () {
            return t.e("about").then(t.bind(null, "970f"));
          },
        },
        {
          path: "/PedidosProv/",
          name: "PedidosProv",
          component: function () {
            return t.e("about").then(t.bind(null, "78bb"));
          },
        },
        {
          path: "/Indicadores/",
          name: "Indicadores",
          component: function () {
            return t.e("about").then(t.bind(null, "45d4"));
          },
        },
        {
          path: "/AdmProductos/:id",
          name: "AdmProductos",
          component: function () {
            return t.e("about").then(t.bind(null, "cb58"));
          },
        },
        {
          path: "/Productos-Pedido/:id",
          name: "Productos-Pedido",
          component: function () {
            return t.e("about").then(t.bind(null, "ad00"));
          },
        },
        {
          path: "/Usuarios",
          name: "Usuarios",
          component: function () {
            return t.e("about").then(t.bind(null, "04fd"));
          },
        },
        {
          path: "/Admin-Proveedores/",
          name: "Admin-Proveedores",
          component: function () {
            return t.e("about").then(t.bind(null, "6f82"));
          },
        },
        {
          path: "/AdminDetalles/",
          name: "AdminDetalles",
          component: function () {
            return t.e("about").then(t.bind(null, "f1d5"));
          },
        },
      ],
      s = new f["a"]({ mode: "history", base: "/", routes: p }),
      b = s,
      m = t("bc3a"),
      h = t.n(m),
      v = t("2106"),
      P = t.n(v),
      g = t("ce5b"),
      y = t.n(g);
    t("bf40");
    o["default"].use(y.a);
    var w = new y.a({});
    t("e792");
    o["default"].use(P.a, h.a),
      (h.a.defaults.baseURL = "https://dbmerkaltoke.herokuapp.com/"),
      (o["default"].config.productionTip = !1),
      new o["default"]({
        router: b,
        vuetify: w,
        render: function (e) {
          return e(l);
        },
      }).$mount("#app");
  },
});
//# sourceMappingURL=app.c762a35c.js.map
