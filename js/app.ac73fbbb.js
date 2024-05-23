(function (e) {
    function t(t) {
        for (var r, a, c = t[0], i = t[1], u = t[2], f = 0, l = []; f < c.length; f++)
            a = c[f],
                Object.prototype.hasOwnProperty.call(o, a) && o[a] && l.push(o[a][0]),
                o[a] = 0;
        for (r in i)
            Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
        d && d(t);
        while (l.length)
            l.shift()();
        return s.push.apply(s, u || []),
            n()
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1)
            }
            r && (s.splice(t--, 1),
                e = i(i.s = n[0]))
        }
        return e
    }
    var r = {}
        , a = {
            app: 0
        }
        , o = {
            app: 0
        }
        , s = [];
    function c(e) {
        return i.p + "js/" + ({}[e] || e) + "." + {
            "chunk-767d20f8": "870a9f93"
        }[e] + ".js"
    }
    function i(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
            n.l = !0,
            n.exports
    }
    i.e = function (e) {
        var t = []
            , n = {
                "chunk-767d20f8": 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function (t, n) {
            for (var r = "./css/" + ({}[e] || e) + "." + {
                "chunk-767d20f8": "3f546845"
            }[e] + ".css", o = i.p + r, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                var u = s[c]
                    , f = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (f === r || f === o))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
                u = l[c],
                    f = u.getAttribute("data-href");
                if (f === r || f === o)
                    return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
                d.type = "text/css",
                d.onload = t,
                d.onerror = function (t) {
                    var r = t && t.target && t.target.src || o
                        , s = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                    s.code = "CSS_CHUNK_LOAD_FAILED",
                        s.request = r,
                        delete a[e],
                        d.parentNode.removeChild(d),
                        n(s)
                }
                ,
                d.href = o;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(d)
        }
        )).then((function () {
            a[e] = 0
        }
        )));
        var r = o[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var s = new Promise((function (t, n) {
                    r = o[e] = [t, n]
                }
                ));
                t.push(r[2] = s);
                var u, f = document.createElement("script");
                f.charset = "utf-8",
                    f.timeout = 120,
                    i.nc && f.setAttribute("nonce", i.nc),
                    f.src = c(e);
                var l = new Error;
                u = function (t) {
                    f.onerror = f.onload = null,
                        clearTimeout(d);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                                , a = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")",
                                l.name = "ChunkLoadError",
                                l.type = r,
                                l.request = a,
                                n[1](l)
                        }
                        o[e] = void 0
                    }
                }
                    ;
                var d = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: f
                    })
                }
                ), 12e4);
                f.onerror = f.onload = u,
                    document.head.appendChild(f)
            }
        return Promise.all(t)
    }
        ,
        i.m = e,
        i.c = r,
        i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        i.t = function (e, t) {
            if (1 & t && (e = i(e)),
                8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var r in e)
                    i.d(n, r, function (t) {
                        return e[t]
                    }
                        .bind(null, r));
            return n
        }
        ,
        i.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return i.d(t, "a", t),
                t
        }
        ,
        i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        i.p = "/",
        i.oe = function (e) {
            throw console.error(e),
            e
        }
        ;
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
        , f = u.push.bind(u);
    u.push = t,
        u = u.slice();
    for (var l = 0; l < u.length; l++)
        t(u[l]);
    var d = f;
    s.push([0, "chunk-vendors"]),
        n()
}
)({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "139c": function (e, t, n) { },
    3089: function (e, t) {
        e.exports = vant
    },
    "368d": function (e, t, n) {
        "use strict";
        n("7490")
    },
    4058: function (e, t, n) { },
    4360: function (e, t, n) {
        "use strict";
        var r = n("2909")
            , a = (n("d3b7"),
                n("159b"),
                n("4e82"),
                n("5880"))
            , o = n.n(a)
            , s = n("fa7d")
            , c = Object(s["d"])("channel") || 0;
        function i() {
            for (var e = [], t = 0; t < 14; t++)
                e.push({
                    day: 14 - t,
                    checked: ""
                });
            return e
        }
        var u = [{
            name: "沙地",
            base: 13,
            max: 200
        }, {
            name: "枯木",
            base: 17,
            max: 28
        }, {
            name: "基地",
            base: 22,
            max: 2
        }, {
            name: "绿塔/电厂",
            base: 33,
            max: 14
        }, {
            name: "炼油厂",
            base: 54,
            max: 14
        }, {
            name: "蓝塔",
            base: 55,
            max: 1
        }, {
            name: "中塔",
            base: 87,
            max: 1
        }, {
            name: "金矿",
            base: 88,
            max: 1
        }, {
            name: "高塔",
            base: 109,
            max: 1
        }, {
            name: "银行",
            base: 230,
            max: 1
        }];
        function f(e) {
            var t = {};
            return e.forEach((function (e) {
                t[e] = {
                    name: "公会".concat(e),
                    alias: "",
                    score1: "",
                    score2: ""
                }
            }
            )),
                t
        }
        var l = {
            rateType: 2,
            totalCount: 4,
            guilds: f(["A", "B", "C", "D"]),
            leftRounds: 14,
            leftLands: [],
            bankHistory: i(),
            result: [],
            resultText: "",
            actions: [],
            userInfo: null
        }
            , d = Object(s["c"])("global-store");
        d && Object.assign(l, d),
            t["a"] = new o.a.Store({
                state: l,
                getters: {
                    basePoints: function () {
                        return u
                    },
                    pointRate: function (e) {
                        var t = 0 == e.rateType ? 6 : 4
                            , n = Math.min(t, e.totalCount)
                            , r = n / t;
                        return [12, 16, 24][e.rateType] * r
                    },
                    buyLink: function () {
                        return 2 == c ? "https://www.flyunfu.com/links/D6B8CD6E" : 3 == c ? "https://www.flyunfu.com/details/D88025AD" : "https://www.flyunfu.com/details/FB605207"
                    }
                },
                mutations: {
                    UPDATEGUILDS: function (e, t) {
                        var n = {};
                        t.forEach((function (t) {
                            e.guilds[t] ? n[t] = e.guilds[t] : n[t] = {
                                name: "公会".concat(t),
                                alias: "",
                                score1: "",
                                score2: ""
                            }
                        }
                        )),
                            e.guilds = n
                    },
                    UPDATEACTIONS: function (e, t) {
                        var n = Object(r["a"])(t);
                        n.sort((function (e, t) {
                            return e.round === t.round ? t.to.charCodeAt() === e.to.charCodeAt() ? t.from.charCodeAt() - e.from.charCodeAt() : t.to.charCodeAt() - e.to.charCodeAt() : t.round - e.round
                        }
                        )),
                            e.actions = n
                    }
                },
                actions: {},
                modules: {}
            })
    },
    4678: function (e, t, n) {
        var r = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function a(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return r[e]
        }
        a.keys = function () {
            return Object.keys(r)
        }
            ,
            a.resolve = o,
            e.exports = a,
            a.id = "4678"
    },
    50381: function (e, t, n) { },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"),
            n("e6cf"),
            n("cca6"),
            n("a79d");
        var r = n("8bbf")
            , a = n.n(r)
            , o = function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("div", {
                    attrs: {
                        id: "nav"
                    }
                }, [n("router-link", {
                    attrs: {
                        to: "/"
                    }
                }, [e._v("公会总安排")]), n("router-link", {
                    attrs: {
                        to: "/calc"
                    }
                }, [e._v("随意算算分")])], 1), n("router-view"), n("div", {
                    staticClass: "author",
                    on: {
                        click: e.copyAuthor
                    }
                }, [e._m(0), e._m(1)]), e._m(2)], 1)
            }
            , s = [function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", [e._v("直接请教作者，请加微信号："), n("span", {
                    staticClass: "color-red"
                }, [e._v("Darsbo")]), n("br"), e._v("(这段话点一下就能复制微信号哈~)")])
            }
                , function () {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("div", {
                        staticClass: "color-red",
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [e._v("作者有个并列教学群，入群请加作者微信。"), n("br"), e._v("群内免费教学哦")])
                }
                , function () {
                    var e = this
                        , t = e.$createElement
                        , n = e._self._c || t;
                    return n("div", {
                        staticClass: "beian"
                    }, [n("a", {
                        attrs: {
                            href: "https://beian.miit.gov.cn",
                            target: "_blank"
                        }
                    }, [e._v("沪ICP备2022000672号-1")])])
                }
            ]
            , c = n("fa7d")
            , i = {
                name: "App",
                data: function () {
                    return {}
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    }
                },
                watch: {
                    state: {
                        handler: function (e) {
                            Object(c["i"])("global-store", Object.assign({}, e, {
                                userInfo: null
                            }))
                        },
                        deep: !0
                    }
                },
                mounted: function () { },
                methods: {
                    copyText: function (e) {
                        var t = document.createElement("input");
                        t.style.fontSize = "12pt",
                            t.style.border = "0",
                            t.style.padding = "0",
                            t.style.margin = "0",
                            t.style.position = "absolute",
                            t.style["right"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        t.style.top = n + "px",
                            t.setAttribute("readonly", ""),
                            t.value = e,
                            document.body.appendChild(t),
                            t.select(),
                            t.setSelectionRange(0, t.value.length);
                        var r = document.execCommand("copy");
                        r ? this.$toast("复制成功!") : this.$toast("复制失败!"),
                            document.body.removeChild(t)
                    },
                    copyAuthor: function () {
                        this.copyText("Darsbo")
                    }
                }
            }
            , u = i
            , f = (n("fe81"),
                n("368d"),
                n("2877"))
            , l = Object(f["a"])(u, o, s, !1, null, "5126c706", null)
            , d = l.exports
            , h = (n("d3b7"),
                n("3ca3"),
                n("ddb0"),
                n("6389"))
            , m = n.n(h)
            , b = function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "page-calc"
                }, [n("div", {
                    staticClass: "form"
                }, [n("van-radio-group", {
                    staticStyle: {
                        margin: "20px"
                    },
                    attrs: {
                        direction: "horizontal"
                    },
                    model: {
                        value: e.form.rateType,
                        callback: function (t) {
                            e.$set(e.form, "rateType", t)
                        },
                        expression: "form.rateType"
                    }
                }, [n("van-radio", {
                    attrs: {
                        name: 0
                    }
                }, [e._v("黄金局")]), n("van-radio", {
                    attrs: {
                        name: 1
                    }
                }, [e._v("钻石局")]), n("van-radio", {
                    attrs: {
                        name: 2
                    }
                }, [e._v("王者局")])], 1), n("van-cell-group", {
                    attrs: {
                        title: "你想要调整多少分？必须是" + e.pointRate + "倍数"
                    }
                }, [n("van-field", {
                    attrs: {
                        type: "digit"
                    },
                    model: {
                        value: e.form.diff,
                        callback: function (t) {
                            e.$set(e.form, "diff", t)
                        },
                        expression: "form.diff"
                    }
                })], 1), n("div", {
                    staticClass: "van-cell-group__title"
                }, [e._v("此分数折算成点数为(除以" + e._s(e.pointRate) + ")：" + e._s(e.base))]), n("van-checkbox-group", {
                    model: {
                        value: e.form.checked,
                        callback: function (t) {
                            e.$set(e.form, "checked", t)
                        },
                        expression: "form.checked"
                    }
                }, [n("van-cell-group", {
                    attrs: {
                        title: "你想要用啥地皮来调整？"
                    }
                }, e._l(e.originPoints, (function (t) {
                    return n("van-cell", {
                        key: t.name
                    }, [n("van-checkbox", {
                        attrs: {
                            slot: "title",
                            shape: "square",
                            name: t.base
                        },
                        slot: "title"
                    }, [e._v(e._s(t.name) + "（" + e._s(t.base * e.pointRate) + "）"), n("span", [e._v(e._s(t.base))])]), n("div", {
                        staticClass: "flex-center justify-end"
                    }, [n("span", [e._v("max：")]), n("van-stepper", {
                        attrs: {
                            min: -100
                        },
                        model: {
                            value: t.max,
                            callback: function (n) {
                                e.$set(t, "max", n)
                            },
                            expression: "item.max"
                        }
                    })], 1)], 1)
                }
                )), 1)], 1), n("van-button", {
                    staticClass: "beginCalc",
                    attrs: {
                        type: "primary",
                        disabled: !e.base || !e.form.checked.length,
                        block: ""
                    },
                    on: {
                        click: e.beginCalc
                    }
                }, [e._v("开始计算吧")]), n("van-radio-group", {
                    staticStyle: {
                        margin: "20px"
                    },
                    attrs: {
                        direction: "horizontal"
                    },
                    model: {
                        value: e.showMode,
                        callback: function (t) {
                            e.showMode = t
                        },
                        expression: "showMode"
                    }
                }, [n("van-radio", {
                    attrs: {
                        name: 1
                    }
                }, [e._v("数字模式")]), n("van-radio", {
                    attrs: {
                        name: 2
                    }
                }, [e._v("文字模式")]), n("van-radio", {
                    attrs: {
                        name: 3
                    }
                }, [e._v("both")])], 1), e.errorText ? n("div", {
                    staticClass: "errorText"
                }, [e._v(e._s(e.errorText))]) : e._e(), n("van-cell-group", {
                    attrs: {
                        title: "总共需要以下" + e.resultList.length + "种地皮的调整"
                    }
                }, e._l(e.resultList, (function (t, r) {
                    return n("van-cell", {
                        key: r,
                        staticClass: "result-cell"
                    }, [n("div", {
                        class: "result-title " + (t.totalScore > 0 ? "red" : "green")
                    }, [e._v(e._s(t.totalScore > 0 ? "增加" : "减少"))]), n("div", [1 == e.showMode || 3 == e.showMode ? n("div", [e._v(" " + e._s(t.math) + " ")]) : e._e(), 2 == e.showMode || 3 == e.showMode ? n("div", {
                        domProps: {
                            innerHTML: e._s(t.text)
                        }
                    }) : e._e()])])
                }
                )), 1), n("div", {
                    staticClass: "van-cell-group__title"
                }, [e._v("为了可配平，枯木和沙地的数量可能超过上限。")]), e._m(0), e.calcString ? n("div", {
                    staticClass: "calcString"
                }, [e._v(e._s(e.calcString))]) : e._e()], 1)])
            }
            , p = [function () {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "tips-info"
                }, [n("span", {
                    staticClass: "color-red"
                }, [e._v("注意，这里的是总次数，不是地皮数。")]), n("br"), e._v(" 次数可以转化为不同天数的不同地皮数。"), n("br"), e._v(" 比如30次，可以是10轮3块地，也可以是6轮5块地，也可以是8轮3块地加6轮1块地 ")])
            }
            ]
            , v = n("b85c")
            , j = n("1da1")
            , g = (n("96cf"),
                n("a9e3"),
                n("159b"),
                n("4e82"),
                n("e9c4"),
                n("7db0"),
                n("4de4"),
                n("d81d"),
                n("b0c0"),
                n("99af"),
                n("76b5"))
            , y = [{
                name: "沙地",
                base: 13,
                max: 200
            }, {
                name: "枯木",
                base: 17,
                max: 28
            }, {
                name: "基地",
                base: 22,
                max: 2
            }, {
                name: "绿塔/电厂",
                base: 33,
                max: 14
            }, {
                name: "炼油厂",
                base: 54,
                max: 14
            }, {
                name: "蓝塔",
                base: 55,
                max: 1
            }, {
                name: "中塔",
                base: 87,
                max: 1
            }, {
                name: "金矿",
                base: 88,
                max: 1
            }, {
                name: "高塔",
                base: 109,
                max: 1
            }, {
                name: "银行",
                base: 230,
                max: 1
            }]
            , k = {
                name: "Home",
                components: {},
                data: function () {
                    return {
                        originPoints: [],
                        originMap: {},
                        form: {
                            rateType: 2,
                            diff: "5520",
                            checked: [13, 17]
                        },
                        sortableList: [],
                        resultList: [],
                        showMode: 3,
                        calcString: "",
                        errorText: ""
                    }
                },
                watch: {
                    form: {
                        handler: function (e) {
                            Object(c["i"])("form", e)
                        },
                        deep: !0
                    },
                    originPoints: {
                        handler: function (e) {
                            Object(c["i"])("originPoints", e)
                        },
                        deep: !0
                    }
                },
                mounted: function () {
                    this.init()
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    pointRate: function () {
                        var e = 0 == this.form.rateType ? 6 : 4
                            , t = Math.min(e, this.state.totalCount)
                            , n = t / e;
                        return [12, 16, 24][this.form.rateType] * n
                    },
                    base: function () {
                        return Object(c["g"])(this.form.diff) && Number(this.form.diff) % this.pointRate == 0 ? Number(this.form.diff) / this.pointRate : 0
                    }
                },
                methods: {
                    init: function () {
                        var e = Object(c["c"])("originPoints") || y
                            , t = {};
                        e.forEach((function (e) {
                            t[e.base] = e
                        }
                        )),
                            this.originMap = t,
                            this.originPoints = e;
                        var n = Object(c["c"])("form");
                        n && Object.assign(this.form, n)
                    },
                    beginCalc: function () {
                        var e = this;
                        return Object(j["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, a, o, s, c, i, u, f, l, d, h, m;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                                g["a"].checkPermission();
                                        case 2:
                                            n = t.sent,
                                                n || e.$dialog.alert({
                                                    title: "您尚未购买服务",
                                                    message: "【随意算算分】目前还是让你免费用的，只不过会弹窗烦你。购买后就没弹窗咯~"
                                                }).then((function () { }
                                                )).catch((function () { }
                                                )),
                                                r = e.form.checked,
                                                r = r.sort((function (e, t) {
                                                    return t - e
                                                }
                                                )),
                                                a = e.base,
                                                o = e.originMap,
                                                s = [],
                                                c = a,
                                                i = Object(v["a"])(r),
                                                t.prev = 10,
                                                i.s();
                                        case 12:
                                            if ((u = i.n()).done) {
                                                t.next = 22;
                                                break
                                            }
                                            if (f = u.value,
                                                l = e.getMethodsByScore(f, c, o[f].max),
                                                console.log(l),
                                                l.times && s.push({
                                                    base: f,
                                                    times: l.times
                                                }),
                                                c = l.residue,
                                                0 != c) {
                                                t.next = 20;
                                                break
                                            }
                                            return t.abrupt("break", 22);
                                        case 20:
                                            t.next = 12;
                                            break;
                                        case 22:
                                            t.next = 27;
                                            break;
                                        case 24:
                                            t.prev = 24,
                                                t.t0 = t["catch"](10),
                                                i.e(t.t0);
                                        case 27:
                                            return t.prev = 27,
                                                i.f(),
                                                t.finish(27);
                                        case 30:
                                            if (console.log(JSON.stringify(s)),
                                                console.log(c),
                                                !c) {
                                                t.next = 45;
                                                break
                                            }
                                            if (d = e.handleLeftScore(c),
                                                console.log(d),
                                                d) {
                                                t.next = 40;
                                                break
                                            }
                                            return e.errorText = "根据已有条件算不出来结果，请增加种类上限或者降低需求",
                                                e.calcString = "",
                                                e.resultList = [],
                                                t.abrupt("return");
                                        case 40:
                                            e.errorText = "",
                                                h = s.find((function (e) {
                                                    return 17 == e.base
                                                }
                                                )),
                                                h ? h.times = h.times + d[17] : s.push({
                                                    base: 17,
                                                    times: d[17]
                                                }),
                                                m = s.find((function (e) {
                                                    return 13 == e.base
                                                }
                                                )),
                                                m ? m.times = m.times + d[13] : s.push({
                                                    base: 13,
                                                    times: d[13]
                                                });
                                        case 45:
                                            s = s.filter((function (e) {
                                                return 0 !== e.times
                                            }
                                            )),
                                                e.resultToList(s),
                                                s.length || e.$toast("没算出结果~~~");
                                        case 48:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                            ), t, null, [[10, 24, 27, 30]])
                        }
                        )))()
                    },
                    getMethodsByScore: function (e, t, n) {
                        var r = Math.floor(t / e)
                            , a = t % e;
                        r > n && (r = n,
                            a = t - e * n);
                        var o = {
                            times: r,
                            residue: a
                        };
                        return o
                    },
                    handleLeftScore: function (e) {
                        for (var t = !1, n = 100, r = {
                            13: 0,
                            17: 0
                        }, a = 0; a < n; a++) {
                            for (var o = 0; o < n; o++) {
                                if (13 * a - 17 * o == e) {
                                    r[13] = a,
                                        r[17] = -o,
                                        t = !0;
                                    break
                                }
                                if (17 * o - 13 * a == e) {
                                    r[17] = o,
                                        r[13] = -a,
                                        t = !0;
                                    break
                                }
                            }
                            if (t)
                                break
                        }
                        return t ? r : null
                    },
                    resultToList: function (e) {
                        var t = this.originMap
                            , n = this.pointRate
                            , r = ""
                            , a = e.map((function (e) {
                                var a = e.base * n
                                    , o = t[e.base].name
                                    , s = a * e.times;
                                return r += "".concat(s > 0 ? "+" : "-", " ").concat(Math.abs(s), " "),
                                {
                                    name: o,
                                    base: e.base,
                                    score: a,
                                    times: e.times,
                                    totalScore: s,
                                    math: "".concat(a, " * ").concat(e.times, " = ").concat(s),
                                    text: '<span class="highlight2">'.concat(o, '</span> * <span class="highlight">').concat(e.times, "</span>")
                                }
                            }
                            ))
                            , o = a.reduce((function (e, t) {
                                return e + t.totalScore
                            }
                            ), 0);
                        r += "= ".concat(o),
                            console.log(a),
                            console.log(r),
                            this.calcString = r,
                            this.resultList = a
                    },
                    copyText: function (e) {
                        var t = document.createElement("input");
                        t.style.fontSize = "12pt",
                            t.style.border = "0",
                            t.style.padding = "0",
                            t.style.margin = "0",
                            t.style.position = "absolute",
                            t.style["right"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        t.style.top = n + "px",
                            t.setAttribute("readonly", ""),
                            t.value = e,
                            document.body.appendChild(t),
                            t.select(),
                            t.setSelectionRange(0, t.value.length);
                        var r = document.execCommand("copy");
                        r ? this.$toast("复制成功!") : this.$toast("复制失败!"),
                            document.body.removeChild(t)
                    },
                    copyAuthor: function () {
                        this.copyText("Darsbo")
                    }
                }
            }
            , x = k
            , w = (n("d268"),
                Object(f["a"])(x, b, p, !1, null, "41b16018", null))
            , _ = w.exports;
        a.a.use(m.a);
        var C = [{
            path: "/",
            name: "War",
            component: function () {
                return n.e("chunk-767d20f8").then(n.bind(null, "5bcc"))
            }
        }, {
            path: "/calc",
            name: "Calc",
            component: _
        }]
            , O = new m.a({
                routes: C,
                scrollBehavior: function () {
                    return {
                        y: 0
                    }
                }
            })
            , S = O
            , A = n("4360");
        n("139c");
        a.a.config.productionTip = !1,
            new a.a({
                router: S,
                store: A["a"],
                render: function (e) {
                    return e(d)
                }
            }).$mount("#app")
    },
    5880: function (e, t) {
        e.exports = Vuex
    },
    6389: function (e, t) {
        e.exports = VueRouter
    },
    7490: function (e, t, n) { },
    "76b5": function (e, t, n) {
        "use strict";
        var r = n("1da1")
            , a = n("d4ec")
            , o = n("bee2")
            , s = n("ade3")
            , c = (n("d3b7"),
                n("96cf"),
                n("c1df"))
            , i = n.n(c)
            , u = n("3089")
            , f = n("fa7d")
            , l = n("bc3a")
            , d = l["a"].create({
                // baseURL: "/",
                timeout: 3e4
            });
        d.interceptors.request.use((function (e) {
            return "get" === e.method && (e.params = e.data || e.params || {}),
                e
        }
        ), (function (e) {
            Promise.reject(e)
        }
        )),
            d.interceptors.response.use((function (e) {
                return e.data && 200 != e.data.code ? (Object(u["Toast"])(e.data.message),
                    Promise.reject(e.data)) : e.data
            }
            ), (function (e) {
                return Promise.reject(e)
            }
            ));
        var h = d
            , m = (n("25f0"),
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
            , b = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        function p(e) {
            var t, n, r, a, o, s;
            r = e.length,
                n = 0,
                t = "";
            while (n < r) {
                if (a = 255 & e.charCodeAt(n++),
                    n == r) {
                    t += m.charAt(a >> 2),
                        t += m.charAt((3 & a) << 4),
                        t += "==";
                    break
                }
                if (o = e.charCodeAt(n++),
                    n == r) {
                    t += m.charAt(a >> 2),
                        t += m.charAt((3 & a) << 4 | (240 & o) >> 4),
                        t += m.charAt((15 & o) << 2),
                        t += "=";
                    break
                }
                s = e.charCodeAt(n++),
                    t += m.charAt(a >> 2),
                    t += m.charAt((3 & a) << 4 | (240 & o) >> 4),
                    t += m.charAt((15 & o) << 2 | (192 & s) >> 6),
                    t += m.charAt(63 & s)
            }
            return t
        }
        function v(e) {
            var t, n, r, a, o, s, c;
            s = e.length,
                o = 0,
                c = "";
            while (o < s) {
                do {
                    t = b[255 & e.charCodeAt(o++)]
                } while (o < s && -1 == t);
                if (-1 == t)
                    break;
                do {
                    n = b[255 & e.charCodeAt(o++)]
                } while (o < s && -1 == n);
                if (-1 == n)
                    break;
                c += String.fromCharCode(t << 2 | (48 & n) >> 4);
                do {
                    if (r = 255 & e.charCodeAt(o++),
                        61 == r)
                        return c;
                    r = b[r]
                } while (o < s && -1 == r);
                if (-1 == r)
                    break;
                c += String.fromCharCode((15 & n) << 4 | (60 & r) >> 2);
                do {
                    if (a = 255 & e.charCodeAt(o++),
                        61 == a)
                        return c;
                    a = b[a]
                } while (o < s && -1 == a);
                if (-1 == a)
                    break;
                c += String.fromCharCode((3 & r) << 6 | a)
            }
            return c
        }
        function j(e) {
            for (var t = "", n = 0; n < e.length; n++)
                e.charCodeAt(n).toString(16) < 10 || "a" == e.charCodeAt(n).toString(16) || "b" == e.charCodeAt(n).toString(16) || "c" == e.charCodeAt(n).toString(16) || "d" == e.charCodeAt(n).toString(16) || "e" == e.charCodeAt(n).toString(16) || "f" == e.charCodeAt(n).toString(16) ? t += "0" + e.charCodeAt(n).toString(16) : t += e.charCodeAt(n).toString(16);
            return t
        }
        var g = {
            base64encode: p,
            base64decode: v,
            stringToHex: j
        }
            , y = n("4360")
            , k = Object(f["d"])("channel") || 0
            , x = function () {
                function e() {
                    Object(a["a"])(this, e),
                        Object(s["a"])(this, "uid", ""),
                        Object(s["a"])(this, "token", ""),
                        Object(s["a"])(this, "exp", ""),
                        Object(s["a"])(this, "checkedIsToday", !1),
                        Object(s["a"])(this, "userInfo", null),
                        this.uid = Object(f["c"])("calc-uid") || null,
                        this.token = Object(f["c"])("calc-token") || null,
                        this.uid || this.initUid()
                }
                return Object(o["a"])(e, [{
                    key: "initUid",
                    value: function () {
                        var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            t = Object(f["j"])(),
                                                this.uid = t,
                                                Object(f["i"])("calc-uid", t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "getUserInfo",
                    value: function () {
                        var e = this;
                        return new Promise((function (t, n) {
                            h({
                                url: "api/userInfo",
                                method: "get",
                                data: {
                                    uid: e.uid,
                                    channel: k
                                }
                            }).then((function (n) {
                                var r = n.data
                                    , a = e.setUserInfo(r);
                                t(a)
                            }
                            )).catch((function () {
                                n()
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "useCoupon",
                    value: function () {
                        var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                            var n = this;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new Promise((function (e, r) {
                                                h({
                                                    url: "api/use",
                                                    method: "post",
                                                    data: {
                                                        uid: n.uid,
                                                        coupon: t
                                                    }
                                                }).then((function (t) {
                                                    var r = t.data
                                                        , a = n.setUserInfo(r);
                                                    e(a)
                                                }
                                                )).catch((function () {
                                                    r()
                                                }
                                                ))
                                            }
                                            )));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "savePlan",
                    value: function () {
                        var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                            var n = this;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new Promise((function (e, r) {
                                                var a;
                                                h({
                                                    url: "api/savePlan",
                                                    method: "post",
                                                    data: {
                                                        uid: n.uid,
                                                        coupon: null === (a = n.userInfo) || void 0 === a ? void 0 : a.remark,
                                                        content: t
                                                    }
                                                }).then((function () {
                                                    e()
                                                }
                                                )).catch((function () {
                                                    r()
                                                }
                                                ))
                                            }
                                            )));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "readPlan",
                    value: function () {
                        var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                            var n = this;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new Promise((function (e, r) {
                                                h({
                                                    url: "api/getPlan",
                                                    method: "get",
                                                    data: t || {
                                                        uid: n.uid
                                                    }
                                                }).then((function (t) {
                                                    var n = t.data;
                                                    e(n)
                                                }
                                                )).catch((function () {
                                                    r()
                                                }
                                                ))
                                            }
                                            )));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "setUserInfo",
                    value: function (e) {
                        var t = JSON.parse(g.base64decode(e));
                        const now = new Date().toLocaleString()
                        const userData = { "id": 10783, "uid": "07320FC1-6A51-485D-B214-28D13C45", "status": 1, "channel": 0, "viewCount": 1, "calcCount": 0, "useCount": 0, "remark": null, "expTime": "2100-12-30 00:00:00", "createTime": "2023-04-01 13:06:11", "updateTime": "2023-06-07 16:56:18" }
                        // console.log(g.base64encode(JSON.stringify(userData)))
                        return this.userInfo = t,
                            y["a"].state.userInfo = t,
                            t
                    }
                }, {
                    key: "checkPermission",
                    value: function () {
                        var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
                            var t = this;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", new Promise(function () {
                                                var e = Object(r["a"])(regeneratorRuntime.mark((function e(n) {
                                                    var r, a, o, s, c, u;
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1)
                                                            switch (e.prev = e.next) {
                                                                case 0:
                                                                    e.next = 3;
                                                                    break;
                                                                case 3:
                                                                    if (t.userInfo) {
                                                                        e.next = 6;
                                                                        break
                                                                    }
                                                                    return n(!1),
                                                                        e.abrupt("return");
                                                                case 6:
                                                                    if (r = t.userInfo,
                                                                        a = r.status,
                                                                        o = r.expTime,
                                                                        s = r.updateTime,
                                                                        1 === a && o && !i()().isAfter(i()(o))) {
                                                                        e.next = 10;
                                                                        break
                                                                    }
                                                                    return n(!1),
                                                                        e.abrupt("return");
                                                                case 10:
                                                                    if (c = i()().isSame(i()(s), "day"),
                                                                        c || t.checkedIsToday) {
                                                                        e.next = 20;
                                                                        break
                                                                    }
                                                                    return t.checkedIsToday = !0,
                                                                        e.next = 15,
                                                                        t.getUserInfo();
                                                                case 15:
                                                                    return e.next = 17,
                                                                        t.checkPermission();
                                                                case 17:
                                                                    return u = e.sent,
                                                                        n(u),
                                                                        e.abrupt("return");
                                                                case 20:
                                                                    n(!0);
                                                                case 21:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                    }
                                                    ), e)
                                                }
                                                )));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t
                    }()
                }, {
                    key: "showBuyDialog",
                    value: function () {
                        var e = this;
                        u["Dialog"].confirm({
                            title: "您尚未购买服务",
                            message: "购买后才能使用哦！只要5块钱，就能用10天，赶紧去买个吧~\r\n如果已经购买，请到页面上方【使用卡券】",
                            confirmButtonText: "去购买"
                        }).then((function () {
                            window.location.href = e.$store.getters["buyLink"]
                        }
                        )).catch((function () { }
                        ))
                    }
                }]),
                    e
            }()
            , w = new x;
        t["a"] = w
    },
    "8bbf": function (e, t) {
        e.exports = Vue
    },
    d268: function (e, t, n) {
        "use strict";
        n("50381")
    },
    fa7d: function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return r
        }
        )),
            n.d(t, "h", (function () {
                return a
            }
            )),
            n.d(t, "i", (function () {
                return o
            }
            )),
            n.d(t, "c", (function () {
                return s
            }
            )),
            n.d(t, "a", (function () {
                return i
            }
            )),
            n.d(t, "b", (function () {
                return u
            }
            )),
            n.d(t, "e", (function () {
                return f
            }
            )),
            n.d(t, "f", (function () {
                return l
            }
            )),
            n.d(t, "j", (function () {
                return d
            }
            )),
            n.d(t, "d", (function () {
                return m
            }
            ));
        n("ac1f"),
            n("00b4"),
            n("e9c4"),
            n("99af"),
            n("b0c0"),
            n("1276"),
            n("a15b"),
            n("5319");
        function r(e) {
            var t = /^\d+$/;
            return t.test(e)
        }
        function a(e) {
            var t = /[0-9A-F]{8}(-[0-9A-F]{4}){3}-[0-9A-F]{8}/;
            return t.test(e)
        }
        function o(e, t) {
            window.localStorage.setItem(e, JSON.stringify(t))
        }
        function s(e) {
            return window.localStorage.getItem(e) ? JSON.parse(window.localStorage.getItem(e)) : null
        }
        var c = ["日", "六", "五", "四", "三", "二", "一"];
        function i() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 14, t = [], n = 0; n < e; n++) {
                var r = e - n
                    , a = "";
                a = r > 14 ? "*星期".concat(c[Math.ceil((r - 14) / 3) - 1], "R").concat(3 - (r - 14 - 1) % 3) : "星期".concat(c[Math.ceil(r / 2) - 1], "R").concat(r % 2 + 1),
                    t.push({
                        name: "".concat(r, " (").concat(a, ")"),
                        value: r,
                        title: a
                    })
            }
            return t
        }
        function u(e) {
            var t = "";
            return t = e > 14 ? "*星期".concat(c[Math.ceil((e - 14) / 3) - 1], "R").concat(3 - (e - 14 - 1) % 3) : "星期".concat(c[Math.ceil(e / 2) - 1], "R").concat(e % 2 + 1),
                t
        }
        function f(e) {
            var t = "";
            return t = e > 14 ? "".concat(c[Math.ceil((e - 14) / 3) - 1], "R").concat(3 - (e - 14 - 1) % 3) : "".concat(c[Math.ceil(e / 2) - 1], "R").concat(e % 2 + 1),
                t
        }
        function l(e, t) {
            var n, r;
            return e ? (null === (n = t[e]) || void 0 === n ? void 0 : n.alias) || (null === (r = t[e]) || void 0 === r ? void 0 : r.name) || e : ""
        }
        function d(e, t) {
            var n, r, a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
            if (t = t || a.length,
                e)
                for (n = 0; n < e; n++)
                    o[n] = a[0 | Math.random() * t];
            else
                for (o[8] = o[13] = o[18] = o[23] = "-",
                    o[14] = "4",
                    n = 0; n < 32; n++)
                    o[n] || (r = 0 | 16 * Math.random(),
                        o[n] = a[19 == n ? 3 & r | 8 : r]);
            return o.join("")
        }
        function h(e) {
            e = null == e ? window.location.href : e;
            var t = e.substring(e.lastIndexOf("?") + 1)
                , n = {}
                , r = /([^?&=]+)=([^?&=]*)/g;
            return t.replace(r, (function (e, t, r) {
                var a = decodeURIComponent(t)
                    , o = decodeURIComponent(r);
                return o = String(o),
                    n[a] = o,
                    e
            }
            )),
                n
        }
        function m(e) {
            return h()[e] || null
        }
    },
    fe81: function (e, t, n) {
        "use strict";
        n("4058")
    }
});
