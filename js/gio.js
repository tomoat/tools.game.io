!function t(e, r, n) {
    function i(s, a) {
        if (!r[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!a && u)
                    return u(s, !0);
                if (o)
                    return o(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var c = r[s] = {
                exports: {}
            };
            e[s][0].call(c.exports, function(t) {
                var r = e[s][1][t];
                return i(r ? r : t)
            }, c, c.exports, t, e, r, n)
        }
        return r[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)
        i(n[s]);
    return i
}({
    1: [function(t, e, r) {
        function n(t) {
            N.push(t),
            C || (C = !0,
            I(o))
        }
        function i(t) {
            return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t
        }
        function o() {
            C = !1;
            var t = N;
            N = [],
            t.sort(function(t, e) {
                return t.uid_ - e.uid_
            });
            var e = !1;
            t.forEach(function(t) {
                var r = t.takeRecords();
                s(t),
                r.length && (t.callback_(r, t),
                e = !0)
            }),
            e && o()
        }
        function s(t) {
            t.nodes_.forEach(function(e) {
                var r = _.get(e);
                r && r.forEach(function(e) {
                    e.observer === t && e.removeTransientObservers()
                })
            })
        }
        function a(t, e) {
            for (var r = t; r; r = r.parentNode) {
                var n = _.get(r);
                if (n)
                    for (var i = 0; i < n.length; i++) {
                        var o = n[i]
                          , s = o.options;
                        if (r === t || s.subtree) {
                            var a = e(s);
                            a && o.enqueue(a)
                        }
                    }
            }
        }
        function u(t) {
            this.callback_ = t,
            this.nodes_ = [],
            this.records_ = [],
            this.uid_ = ++x
        }
        function c(t, e) {
            this.type = t,
            this.target = e,
            this.addedNodes = [],
            this.removedNodes = [],
            this.previousSibling = null,
            this.nextSibling = null,
            this.attributeName = null,
            this.attributeNamespace = null,
            this.oldValue = null
        }
        function d(t) {
            var e = new c(t.type,t.target);
            return e.addedNodes = t.addedNodes.slice(),
            e.removedNodes = t.removedNodes.slice(),
            e.previousSibling = t.previousSibling,
            e.nextSibling = t.nextSibling,
            e.attributeName = t.attributeName,
            e.attributeNamespace = t.attributeNamespace,
            e.oldValue = t.oldValue,
            e
        }
        function h(t, e) {
            return E = new c(t,e)
        }
        function l(t) {
            return T ? T : (T = d(E),
            T.oldValue = t,
            T)
        }
        function p() {
            E = T = void 0
        }
        function f(t) {
            return t === T || t === E
        }
        function g(t, e) {
            return t === e ? t : T && f(t) ? T : null
        }
        function v(t, e, r) {
            this.observer = t,
            this.target = e,
            this.options = r,
            this.transientObservedNodes = []
        }
        var m = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
          , w = window.WeakMap;
        if ("undefined" == typeof w) {
            var b = Object.defineProperty
              , y = Date.now() % 1e9;
            w = function() {
                this.name = "__st" + (1e9 * Math.random() >>> 0) + (y++ + "__")
            }
            ,
            w.prototype = {
                set: function(t, e) {
                    var r = t[this.name];
                    return r && r[0] === t ? r[1] = e : b(t, this.name, {
                        value: [t, e],
                        writable: !0
                    }),
                    this
                },
                get: function(t) {
                    var e;
                    return (e = t[this.name]) && e[0] === t ? e[1] : void 0
                },
                "delete": function(t) {
                    var e = t[this.name];
                    if (!e)
                        return !1;
                    var r = e[0] === t;
                    return e[0] = e[1] = void 0,
                    r
                },
                has: function(t) {
                    var e = t[this.name];
                    return e ? e[0] === t : !1
                }
            }
        }
        var _ = new w
          , I = window.msSetImmediate;
        if (!I) {
            var S = []
              , O = String(Math.random());
            window.addEventListener("message", function(t) {
                if (t.data === O) {
                    var e = S;
                    S = [],
                    e.forEach(function(t) {
                        t()
                    })
                }
            }),
            I = function(t) {
                S.push(t),
                window.postMessage(O, "*")
            }
        }
        var C = !1
          , N = []
          , x = 0;
        u.prototype = {
            observe: function(t, e) {
                if (t = i(t),
                !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData)
                    throw new SyntaxError;
                var r = _.get(t);
                r || _.set(t, r = []);
                for (var n, o = 0; o < r.length; o++)
                    if (r[o].observer === this) {
                        n = r[o],
                        n.removeListeners(),
                        n.options = e;
                        break
                    }
                n || (n = new v(this,t,e),
                r.push(n),
                this.nodes_.push(t)),
                n.addListeners()
            },
            disconnect: function() {
                this.nodes_.forEach(function(t) {
                    for (var e = _.get(t), r = 0; r < e.length; r++) {
                        var n = e[r];
                        if (n.observer === this) {
                            n.removeListeners(),
                            e.splice(r, 1);
                            break
                        }
                    }
                }, this),
                this.records_ = []
            },
            takeRecords: function() {
                var t = this.records_;
                return this.records_ = [],
                t
            }
        };
        var E, T;
        v.prototype = {
            enqueue: function(t) {
                var e = this.observer.records_
                  , r = e.length;
                if (e.length > 0) {
                    var i = e[r - 1]
                      , o = g(i, t);
                    if (o)
                        return void (e[r - 1] = o)
                } else
                    n(this.observer);
                e[r] = t
            },
            addListeners: function() {
                this.addListeners_(this.target)
            },
            addListeners_: function(t) {
                var e = this.options;
                e.attributes && t.addEventListener("DOMAttrModified", this, !0),
                e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0),
                e.childList && t.addEventListener("DOMNodeInserted", this, !0),
                (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0)
            },
            removeListeners: function() {
                this.removeListeners_(this.target)
            },
            removeListeners_: function(t) {
                var e = this.options;
                e.attributes && t.removeEventListener("DOMAttrModified", this, !0),
                e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0),
                e.childList && t.removeEventListener("DOMNodeInserted", this, !0),
                (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0)
            },
            addTransientObserver: function(t) {
                if (t !== this.target) {
                    this.addListeners_(t),
                    this.transientObservedNodes.push(t);
                    var e = _.get(t);
                    e || _.set(t, e = []),
                    e.push(this)
                }
            },
            removeTransientObservers: function() {
                var t = this.transientObservedNodes;
                this.transientObservedNodes = [],
                t.forEach(function(t) {
                    this.removeListeners_(t);
                    for (var e = _.get(t), r = 0; r < e.length; r++)
                        if (e[r] === this) {
                            e.splice(r, 1);
                            break
                        }
                }, this)
            },
            handleEvent: function(t) {
                switch (t.stopImmediatePropagation(),
                t.type) {
                case "DOMAttrModified":
                    var e = t.attrName
                      , r = t.relatedNode.namespaceURI
                      , n = t.target
                      , i = new h("attributes",n);
                    i.attributeName = e,
                    i.attributeNamespace = r;
                    var o = null;
                    ("undefined" == typeof MutationEvent || t.attrChange !== MutationEvent.ADDITION) && (o = t.prevValue),
                    a(n, function(t) {
                        return !t.attributes || t.attributeFilter && t.attributeFilter.length && -1 === t.attributeFilter.indexOf(e) && -1 === t.attributeFilter.indexOf(r) ? void 0 : t.attributeOldValue ? l(o) : i
                    });
                    break;
                case "DOMCharacterDataModified":
                    var n = t.target
                      , i = h("characterData", n)
                      , o = t.prevValue;
                    a(n, function(t) {
                        return t.characterData ? t.characterDataOldValue ? l(o) : i : void 0
                    });
                    break;
                case "DOMNodeRemoved":
                    this.addTransientObserver(t.target);
                case "DOMNodeInserted":
                    var s, u, n = t.relatedNode, c = t.target;
                    "DOMNodeInserted" === t.type ? (s = [c],
                    u = []) : (s = [],
                    u = [c]);
                    var d = c.previousSibling
                      , f = c.nextSibling
                      , i = h("childList", n);
                    i.addedNodes = s,
                    i.removedNodes = u,
                    i.previousSibling = d,
                    i.nextSibling = f,
                    a(n, function(t) {
                        return t.childList ? i : void 0
                    })
                }
                p()
            }
        },
        m || (m = u),
        e.exports = m
    }
    , {}],
    2: [function(t, e, r) {
        var n, i, o, s, a, u, c, d, h = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, l = [].slice;
        d = t("../core/tools/utils"),
        n = t("../core/dimensions/app_dimension"),
        s = t("../core/dimensions/page_dimension"),
        o = t("../core/dimensions/evar_dimension"),
        a = t("../core/dimensions/people_dimension"),
        u = t("../core/dimensions/system_dimension"),
        c = t("../core/dimensions/visitor_dimension"),
        i = function() {
            function t() {
                this.callback = h(this.callback, this),
                this.setGioIdByTouchSuccessCallback = h(this.setGioIdByTouchSuccessCallback, this),
                this.setGioIdByTouch = h(this.setGioIdByTouch, this),
                this.addRealTimeMessageCallBack = h(this.addRealTimeMessageCallBack, this),
                this.defaultSamplingFunc = h(this.defaultSamplingFunc, this),
                this.options = d.assignObj({}, this.defaultOptions),
                this.started = !1,
                this._setup(),
                this.identityWindow(),
                this.initialCSFields(),
                this.initialPSFields(),
                this.commond_stack = []
            }
            var e;
            return t.prototype.version = "2.3.5",
            t.prototype.circleHost = ("https:" === document.location.protocol ? "https://" : "http://") + "www.growingio.com",
            t.prototype.endpoint = "/events",
            e = ["page", "vst", "clck", "imp", "chng", "sbmt", "cstm", "pvar", "evar", "ppl", "reengage", "vstr"],
            t.prototype.defaultOptions = {
                imp: !1,
                manualImp: !1,
                hashtag: !1,
                touch: !1,
                bot: !0,
                ignoreClck: !1,
                dataCollect: void 0,
                enableDataCollect: void 0,
                textEncryptFunc: void 0,
                pathCaseSensitive: !0,
                scheme: "https://",
                host: "api.growingio.com",
                impCtrlDua: 6e4,
                circleIframe: !0,
                impAttrSeparator: ",",
                dynamicPlatform: !1
            },
            t.prototype._setup = function() {
                return this.app = {},
                this.people = {},
                this.page = {},
                this.evar = {},
                this.visitor = {},
                this.system = {}
            }
            ,
            t.prototype.pushToStack = function() {
                var t;
                return (t = this.commond_stack).push.apply(t, arguments)
            }
            ,
            t.prototype.setTrackerScheme = function(t) {
                var e;
                return t && d.isString(t) && ("http" === (e = t.toLocaleLowerCase()) || "https" === e) ? this.options.scheme = t + "://" : void 0
            }
            ,
            t.prototype.setZone = function(t) {
                return t && "string" == typeof t && t.trim().length > 0 ? this.options.zone = t : void 0
            }
            ,
            t.prototype.setTrackerHost = function(t) {
                return t ? this.options.host = t : void 0
            }
            ,
            t.prototype.setAccountId = function(t) {
                return this.options.accountId = t
            }
            ,
            t.prototype.setImp = function(t) {
                return this.options.imp = t
            }
            ,
            t.prototype.setSampling = function(t, e) {
                return null == t && (t = 4),
                null == e && (e = this.defaultSamplingFunc),
                this.options.sampling = !0,
                this.options.sampling_ratio = t,
                this.options.sampling_func = e
            }
            ,
            t.prototype.setImpCtrlDua = function(t) {
                return "number" == typeof t ? this.options.impCtrlDua = t : void 0
            }
            ,
            t.prototype.pathCaseSensitive = function(t) {
                return this.options.pathCaseSensitive = !!t
            }
            ,
            t.prototype.trackBot = function(t) {
                return this.options.bot = t
            }
            ,
            t.prototype.setTextEncryptFunc = function(t) {
                return this.options.textEncryptFunc = t
            }
            ,
            t.prototype.enableHT = function(t) {
                return this.options.hashtag = t
            }
            ,
            t.prototype.enableTouch = function(t) {
                return this.options.touch = t
            }
            ,
            t.prototype.setIgnoreClck = function(t) {
                return this.options.ignoreClck = t
            }
            ,
            t.prototype.dataCollect = function(t) {
                return this.options.dataCollect = t
            }
            ,
            t.prototype.enableDataCollect = function(t) {
                var e;
                return this.prevVal = this.options.enableDataCollect,
                this.options.enableDataCollect = t,
                window.vds.enableDataCollect = t,
                t === !0 && this.prevVal === !1 ? (e = this.observer.pageService,
                this.messages = [],
                this.messages.push(e._buildVisitMessage()),
                this.messages.push(e._buildPageMessage()),
                this.sender.send(this.messages, "pv")) : void 0
            }
            ,
            t.prototype.setManualImp = function(t) {
                return this.options.manualImp = t
            }
            ,
            t.prototype.setCircleIframe = function(t) {
                return this.options.circleIframe = t
            }
            ,
            t.prototype.setImpAttrSeparator = function(t) {
                return ("" === t || ":" === t) && (console.warn("无效的impAttrSeparator配置【" + t + "】，将使用默认值【,】"),
                t = ","),
                this.options.impAttrSeparator = t
            }
            ,
            t.prototype.setDynamicPlatform = function(t) {
                return t === !0 ? this.options.dynamicPlatform = !0 : void 0
            }
            ,
            t.prototype.defaultSamplingFunc = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.setCS1 = function(t, e) {
                return t && e ? this.setUserId(t + ":" + e) : void 0
            }
            ,
            t.prototype.setUserId = function(t) {
                return !t || t.length > 1e3 ? void 0 : this.people ? this.people.setId("" + t) : void 0
            }
            ,
            t.prototype.clearUserId = function() {
                return this.people ? this.people.clearId() : void 0
            }
            ,
            t.prototype.initialCSFields = function(t) {
                var e, r, n;
                for (n = [],
                e = r = 20; r >= 2; e = --r)
                    n.push(this["setCS" + e] = function(t) {
                        return function(e) {
                            return function(e, r) {
                                var n;
                                return t.app.set((n = {},
                                n["" + e] = r,
                                n))
                            }
                        }
                    }(this)(e));
                return n
            }
            ,
            t.prototype.initialPSFields = function() {
                var t, e, r;
                for (r = [],
                t = e = 20; e >= 1; t = --e)
                    r.push(this["setPS" + t] = function(t) {
                        return function(e) {
                            return function(r) {
                                return t.page.setPS("PS" + e, r)
                            }
                        }
                    }(this)(t));
                return r
            }
            ,
            t.prototype.setPageGroup = function(t) {
                return this.page.setName(t)
            }
            ,
            t.prototype.track = function(t) {
                var e, r, n, i;
                return e = this.observer.gruser,
                r = this.observer.pageService,
                i = this.observer.sendPageCallback,
                e.hasSid() || r.sendPV({
                    sendVisit: !0,
                    addPreProps: !0,
                    useNewTime: !0
                }, i),
                (n = this.system).track.apply(n, arguments)
            }
            ,
            t.prototype.setAppId = function(t) {
                return t ? this.options.appId = t : void 0
            }
            ,
            t.prototype.getVisitUserId = function() {
                return this.user.vid()
            }
            ,
            t.prototype.addRealTimeMessageCallBack = function(t, r) {
                return d.isFunction(t) && (r = t,
                t = e),
                this.sender.addRealTimeMessageCallBack(t, r)
            }
            ,
            t.prototype.config = function(t) {
                var e, r, n, i;
                e = {
                    imp: "setImp",
                    hashtag: "enableHT",
                    touch: "enableTouch",
                    bot: "trackBot",
                    dataCollect: "dataCollect",
                    enableDataCollect: "enableDataCollect",
                    pathCaseSensitive: "pathCaseSensitive",
                    scheme: "setTrackerScheme",
                    host: "setTrackerHost",
                    sampling: "setSampling",
                    zone: "setZone",
                    origin: "setOrigin",
                    impCtrlDua: "setImpCtrlDua",
                    textEncryptFunc: "setTextEncryptFunc",
                    ignoreClck: "setIgnoreClck",
                    manualImp: "setManualImp",
                    circleIframe: "setCircleIframe",
                    impAttrSeparator: "setImpAttrSeparator",
                    dynamicPlatform: "setDynamicPlatform"
                };
                for (r in t)
                    i = t[r],
                    r in e && (r = e[r]),
                    "object" == typeof i ? this.apply.apply(this, [r].concat(l.call(i))) : this.apply(r, i);
                n = [];
                for (r in this.options)
                    n.push(window.vds[r] = this.options[r]);
                return n
            }
            ,
            t.prototype.trackPV = function(t, e) {
                var r, n;
                return t && null != (r = this.observer) && r.pageService.replaceProps(t),
                null != (n = this.observer) ? n.pageService.sendPV(null, e) : void 0
            }
            ,
            t.prototype.sendPage = function() {
                var t, e, r;
                return t = {
                    sendVisit: !1,
                    addPreProps: !0,
                    useNewTime: !0
                },
                null != (e = this.observer) ? e.pageService.sendPV(t, null != (r = this.observer) ? r.sendPageCallback : void 0) : void 0
            }
            ,
            t.prototype.init = function(t, e, r) {
                var n, i, o, s;
                if (t && d.isString(t) && 0 !== t.trim().length) {
                    for (d.isString(t) && this.setAccountId(t),
                    d.isString(e) && null !== e.trim() ? this.setAppId(e) : d.isObject(e) && (r = e),
                    window.vds = {
                        origin: this.circleHost,
                        version: this.version
                    },
                    this.config(r),
                    o = ["app", "people", "page", "evar", "visitor", "system"],
                    n = 0,
                    i = o.length; i > n; n++)
                        s = o[n],
                        this[s] = this.initDimensions(s);
                    return this.afterInitialize(),
                    this.ready = !0
                }
            }
            ,
            t.prototype.afterInitialize = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.apply = function() {
                var t, e, r, n, i;
                if (n = arguments[0],
                t = 2 <= arguments.length ? l.call(arguments, 1) : [],
                d.isString(n))
                    try {
                        if (-1 === n.indexOf(".")) {
                            if (null != this[n])
                                return this[n].apply(this, t)
                        } else if (r = n.split("."),
                        i = this[r[0]],
                        i && null != i[r[1]])
                            return i[r[1]].apply(i, t)
                    } catch (o) {
                        return e = o,
                        console && console.error(e)
                    }
            }
            ,
            t.prototype.setOrigin = function(t) {
                return t ? this.options.origin = t : void 0
            }
            ,
            t.prototype.set = function(t, e) {
                return this.options[t] = e
            }
            ,
            t.prototype.setGioIdByTouch = function() {
                var t;
                return !(null != (t = this.user) ? t.cookie.getItem("grwng_uid") : void 0) && this.options.scheme && this.options.host ? d.sendRequest(this.options.scheme + this.options.host + "/touch", this.setGioIdByTouchSuccessCallback) : void 0
            }
            ,
            t.prototype.setGioIdByTouchSuccessCallback = function(t) {
                var e, r;
                return 200 === t.status && null != t.response ? (r = JSON.parse(t.response),
                r.grwng_uid && this.user.setGioId(r.grwng_uid),
                null != (e = this.observer) ? e.pageService.sendPV({
                    gioId: !0,
                    useNewTime: !1
                }) : void 0) : void 0
            }
            ,
            t.prototype.send = function() {
                var t, e, r, n, i;
                if (!this.started)
                    try {
                        if (this.ready)
                            return this.connect()
                    } catch (o) {
                        return e = o,
                        console && console.error(e.message)
                    } finally {
                        for (this.started = !0,
                        i = this.commond_stack,
                        r = 0,
                        n = i.length; n > r; r++)
                            t = i[r],
                            this.apply.apply(this, t)
                    }
            }
            ,
            t.prototype.initSystemConfig = function(t) {
                var e, r, n, i;
                for (i = [],
                r = 0,
                n = t.length; n > r; r++)
                    e = t[r],
                    i.push(this.apply.apply(this, e));
                return i
            }
            ,
            t.prototype.identityWindow = function() {
                return d.identityWindow()
            }
            ,
            t.prototype.beforeConnect = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.connect = function() {
                var t;
                if (t = window.navigator.userAgent.toLowerCase(),
                t.match(/(bot|crawler|spider|scrapy|jiankongbao|slurp|transcoder|networkbench|oneapm)/i)) {
                    if (!this.options.bot)
                        return;
                    window.vds.imp = !1,
                    this.options.isBot = !0
                }
                return this.beforeConnect(),
                this.sender.connect({
                    isBot: !!this.options.isBot
                })
            }
            ,
            t.prototype.callback = function() {
                return this.observer.observe()
            }
            ,
            t.prototype.initDimensions = function(t) {
                switch (t) {
                case "people":
                    return new a(this,this.observer,this.sender,this.user);
                case "visitor":
                    return new c(this,this.observer,this.sender,this.user);
                case "app":
                    return new n(this,this.observer,this.sender,this.user);
                case "page":
                    return new s(this,this.observer,this.sender,this.user);
                case "evar":
                    return new o(this,this.observer,this.sender,this.user);
                case "system":
                    return new u(this,this.observer,this.sender,this.user)
                }
                return dim
            }
            ,
            t
        }(),
        e.exports = i
    }
    , {
        "../core/dimensions/app_dimension": 3,
        "../core/dimensions/evar_dimension": 5,
        "../core/dimensions/page_dimension": 6,
        "../core/dimensions/people_dimension": 7,
        "../core/dimensions/system_dimension": 8,
        "../core/dimensions/visitor_dimension": 9,
        "../core/tools/utils": 19
    }],
    3: [function(t, e, r) {
        var n, i, o = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, s = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                a.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, a = {}.hasOwnProperty;
        i = t("./base_dimension"),
        n = function(t) {
            function e() {
                this.defer_condition = o(this.defer_condition, this),
                this.set = o(this.set, this),
                e.__super__.constructor.apply(this, arguments)
            }
            return s(e, t),
            e.prototype.set = function(t) {
                var e, r, n;
                if (!t)
                    return this.clearCache();
                if (2 === arguments.length && this.utils.isString(arguments[0]) && 0 !== arguments[0].trim().length)
                    e = {},
                    e[arguments[0]] = arguments[1],
                    t = e;
                else if (1 !== arguments.length || !this.utils.isObject(arguments[0]) || this.utils.isEmptyObject(arguments[0]))
                    return;
                this.app_cache = this.app_cache ? this.app_cache : t;
                for (r in t)
                    null != (n = this.app_cache) && (n[r] = t[r]);
                return this.lastSetTimeout && clearTimeout(this.lastSetTimeout),
                this.lastSetTimeout = setTimeout(function(t) {
                    return function() {
                        return t.observer.setDeferWithPage({
                            "var": t.app_cache
                        }, t.defer_condition)
                    }
                }(this), 0)
            }
            ,
            e.prototype.defer_condition = function() {
                return !!this.observer.pageLoaded && this.launcher.started
            }
            ,
            e.prototype.clearCache = function() {
                return delete this.app_cache
            }
            ,
            e
        }(i),
        e.exports = n
    }
    , {
        "./base_dimension": 4
    }],
    4: [function(t, e, r) {
        var n, i;
        i = t("../tools/utils"),
        n = function() {
            function t(t, e, r, n) {
                this.launcher = t,
                this.observer = e,
                this.sender = r,
                this.gruser = n,
                this.send = this.sender.send,
                this.utils = i
            }
            return t.prototype.set = function() {
                throw new Error("this a abstruct function")
            }
            ,
            t.prototype.pageChange = function() {
                return this.reset()
            }
            ,
            t.prototype.reset = function() {}
            ,
            t.prototype.buildMessage = function() {}
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "../tools/utils": 19
    }],
    5: [function(t, e, r) {
        var n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, a = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                u.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, u = {}.hasOwnProperty, c = [].slice;
        n = t("./base_dimension"),
        o = t("../tools/utils"),
        i = function(t) {
            function e() {
                this._buildEvarMessage = s(this._buildEvarMessage, this),
                this.set = s(this.set, this),
                e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t),
            e.prototype.set = function(t) {
                var e, r;
                if (!this.launcher.started)
                    return this.launcher.pushToStack(["evar.set"].concat(c.call(arguments)));
                if (1 === arguments.length && this.utils.isObject(arguments[0]) && !this.utils.isEmptyObject(arguments[0]))
                    ;
                else {
                    if (2 !== arguments.length || !this.utils.isString(arguments[0]) || !this.utils.isString(arguments[1]) || 0 === !arguments[0].trim().length)
                        return;
                    e = {},
                    e[arguments[0]] = arguments[1],
                    t = e
                }
                return r = this._buildEvarMessage(t),
                this.send([r], "evar")
            }
            ,
            e.prototype._buildEvarMessage = function(t) {
                var e, r, n, i;
                return r = {
                    appId: window.vds.appId,
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    t: "evar",
                    tm: +Date.now(),
                    ptm: this.observer.pageLoaded,
                    p: this.utils.path()
                },
                i = o.vaildVar(t),
                i && (r["var"] = i),
                e = this.gruser.getCs1(),
                e && (r.cs1 = e),
                r.d = window.location.host || window.vds.accountId,
                n = this.utils.query(),
                n.length > 0 && (r.q = n),
                r
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../tools/utils": 19,
        "./base_dimension": 4
    }],
    6: [function(t, e, r) {
        var n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, a = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                u.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, u = {}.hasOwnProperty, c = [].slice;
        n = t("./base_dimension"),
        o = t("../tools/utils"),
        i = function(t) {
            function e() {
                this.setPS = s(this.setPS, this),
                this.setName = s(this.setName, this),
                this.set = s(this.set, this),
                e.__super__.constructor.apply(this, arguments),
                this.properties = {},
                this.pageService = this.observer.pageService,
                this.currentUrl = ""
            }
            return a(e, t),
            e.prototype.set = function(t) {
                var e, r, n;
                if (!this.launcher.started)
                    return this.launcher.pushToStack(["page.set"].concat(c.call(arguments)));
                if (1 === arguments.length && this.utils.isObject(arguments[0]) && !this.utils.isEmptyObject(arguments[0]))
                    ;
                else {
                    if (2 !== arguments.length || !this.utils.isString(arguments[0]) || !this.utils.isString(arguments[1]) || 0 === !arguments[0].trim().length)
                        return;
                    e = {},
                    e[arguments[0]] = arguments[1],
                    t = e
                }
                window.location.href !== this.currentUrl && (this.currentUrl = window.location.href,
                this.properties = {});
                for (r in t)
                    n = t[r],
                    this.properties[r] = n;
                return this.lastSetTimeout && clearTimeout(this.lastSetTimeout),
                this.sendPvar()
            }
            ,
            e.prototype.sendPvar = function() {
                return this.utils.isEmptyObject(this.properties) ? void 0 : this.lastSetTimeout = setTimeout(function(t) {
                    return function() {
                        var e;
                        return e = t._buildMessage(t.properties),
                        t.send([e], "pvar")
                    }
                }(this), 0)
            }
            ,
            e.prototype.setName = function(t) {
                return this.name = t,
                this.name && this.utils.isString(this.name) && 0 !== this.name.trim().length ? this.observer.setPageGroup(this.name) : void 0
            }
            ,
            e.prototype.setPS = function(t, e) {
                var r;
                if (this.name && this.utils.isString(t) && 0 !== t.length)
                    return this.pageService.reduceProps((r = {},
                    r["" + t] = e,
                    r))
            }
            ,
            e.prototype._buildMessage = function(t) {
                var e, r, n, i;
                return r = {
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    t: "pvar",
                    tm: +Date.now(),
                    ptm: this.observer.pageLoaded,
                    p: this.utils.path()
                },
                i = o.vaildVar(t),
                i && (r["var"] = i),
                e = this.gruser.getCs1(),
                e && (r.cs1 = e),
                window.vds.appId && (r.appId = window.vds.appId),
                r.d = window.location.host || window.vds.accountId,
                n = this.utils.query(),
                n.length > 0 && (r.q = n),
                r
            }
            ,
            e.prototype.reset = function() {
                return this.clearCache
            }
            ,
            e.prototype.clearCache = function() {
                return this.properties = {}
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../tools/utils": 19,
        "./base_dimension": 4
    }],
    7: [function(t, e, r) {
        var n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, a = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                u.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, u = {}.hasOwnProperty, c = [].slice;
        n = t("./base_dimension"),
        o = t("../tools/utils"),
        i = function(t) {
            function e() {
                this.clearId = s(this.clearId, this),
                this.getId = s(this.getId, this),
                this.setId = s(this.setId, this),
                this._buildPeopleMessage = s(this._buildPeopleMessage, this),
                this.set = s(this.set, this),
                e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t),
            e.prototype.set = function(t) {
                var e, r;
                if (!this.launcher.started)
                    return this.launcher.pushToStack(["people.set"].concat(c.call(arguments)));
                if (arguments.length > 1 && this.utils.isString(arguments[0]) && 0 !== arguments[0].trim().length)
                    e = {},
                    e[arguments[0].trim()] = arguments[1],
                    t = e;
                else if (!this.utils.isObject(arguments[0]) || this.utils.isEmptyObject(arguments[0]))
                    return;
                return this.gruser.isHybrid || this.getId() ? (delete this.people_cache,
                r = this._buildPeopleMessage(t),
                this.send([r], "ppl")) : void (this.people_cache = t)
            }
            ,
            e.prototype._buildPeopleMessage = function(t) {
                var e, r, n, i;
                return r = {
                    appId: window.vds.appId,
                    u: this.gruser.vid(),
                    t: "ppl",
                    tm: +Date.now(),
                    ptm: this.observer.pageLoaded,
                    p: this.utils.path(),
                    cs1: this.getId()
                },
                i = o.vaildVar(t),
                i && (r["var"] = i),
                e = this.gruser.getCs1(),
                e && (r.cs1 = e),
                r.d = window.location.host || window.vds.accountId,
                n = this.utils.query(),
                n.length > 0 && (r.q = n),
                r
            }
            ,
            e.prototype.setId = function(t) {
                var e, r, n, i, o, s, a;
                if (!this.launcher.started)
                    return this.launcher.pushToStack(["people.setId"].concat(c.call(arguments)));
                if (t && window.vds.accountId && this.getId() !== t)
                    return this.people_cache && this.set(this.people_cache),
                    i = this.gruser.lastSessionId,
                    r = this.gruser.sid(),
                    e = a = !0,
                    o = this.gruser.last_sent_sid_with_cs1(),
                    n = this.gruser.last_sent_cs1(),
                    this.getId() && this.getId() !== t && (r = this.gruser.guid(),
                    a = !1),
                    r === i && o === r && this.gruser.last_sent_cs1() !== t && (r = this.gruser.guid()),
                    this.getId() || (a = !1),
                    this.gruser.updateCS1(t, r),
                    s = o && o === r || !o && !n,
                    this.gruser.updateSessionId(r, s),
                    setTimeout(function(t) {
                        return function() {
                            return t.observer.pageService.sendPV({
                                sendVisit: !s,
                                addPreProps: e,
                                useNewTime: a
                            }, t.observer.sendPageCallback),
                            t.launcher.page.sendPvar()
                        }
                    }(this), 10)
            }
            ,
            e.prototype.getId = function() {
                return this.gruser.getCs1()
            }
            ,
            e.prototype.clearId = function() {
                return this.gruser.clearCs1()
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../tools/utils": 19,
        "./base_dimension": 4
    }],
    8: [function(t, e, r) {
        var n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, a = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                u.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, u = {}.hasOwnProperty, c = [].slice;
        n = t("./base_dimension"),
        o = t("../tools/utils"),
        i = function(t) {
            function e() {
                this._buildTrackMessage = s(this._buildTrackMessage, this),
                this.track = s(this.track, this),
                e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t),
            e.prototype.track = function(t) {
                var e, r, n, i, o, s, a, u;
                if (t) {
                    if (!this.launcher.started)
                        return this.launcher.pushToStack(["track"].concat(c.call(arguments)));
                    for (n = i = 0,
                    o = arguments.length; o > i; n = ++i)
                        e = arguments[n],
                        this.utils.isFunction(e) ? r = e : this.utils.isObject(e) ? a = e : 0 === n ? t = e : s = e;
                    return u = this._buildTrackMessage(t, a, s),
                    u && this.send([u], "cstm"),
                    r ? r() : void 0
                }
            }
            ,
            e.prototype._buildTrackMessage = function(t, e, r) {
                var n, i, s, a, u;
                return null == e && (e = {}),
                o.isVaildIdentifier(t) ? (i = {
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    t: "cstm",
                    tm: +Date.now(),
                    ptm: this.observer.pageLoaded,
                    p: this.observer.currentPath,
                    n: t
                },
                window.vds.appId && (i.appId = window.vds.appId),
                a = o.vaildEventNumber(r),
                a && (i.num = a),
                u = o.vaildVar(e),
                u && (i["var"] = u),
                n = this.gruser.getCs1(),
                n && (i.cs1 = n),
                i.d = window.location.host || window.vds.accountId,
                s = this.utils.query(),
                s.length > 0 && (i.q = s),
                i) : null
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../tools/utils": 19,
        "./base_dimension": 4
    }],
    9: [function(t, e, r) {
        var n, i, o, s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, a = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                u.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, u = {}.hasOwnProperty, c = [].slice;
        n = t("./base_dimension"),
        o = t("../tools/utils"),
        i = function(t) {
            function e() {
                this._buildVisitorMessage = s(this._buildVisitorMessage, this),
                this.set = s(this.set, this),
                e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t),
            e.prototype.set = function(t) {
                var e, r;
                if (!this.launcher.started)
                    return this.launcher.pushToStack(["visitor.set"].concat(c.call(arguments)));
                if (arguments.length > 1 && this.utils.isString(arguments[0]) && 0 !== arguments[0].trim().length)
                    e = {},
                    e[arguments[0].trim()] = arguments[1],
                    t = e;
                else if (!this.utils.isObject(arguments[0]) || this.utils.isEmptyObject(arguments[0]))
                    return;
                return this.gruser.setVisitor(t),
                r = this._buildVisitorMessage(t),
                this.send([r], "cstm")
            }
            ,
            e.prototype._buildVisitorMessage = function(t) {
                var e, r, n;
                return r = {
                    appId: window.vds.appId,
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    t: "vstr",
                    tm: +Date.now()
                },
                n = o.vaildVar(t),
                n && (r["var"] = n),
                e = this.gruser.getCs1(),
                e && (r.cs1 = e),
                r.d = window.location.host || window.vds.accountId,
                r
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../tools/utils": 19,
        "./base_dimension": 4
    }],
    10: [function(t, e, r) {
        var n, i, o, s, a, u;
        u = t("../tools/utils"),
        i = t("./tagging_node_info"),
        s = ["I", "SPAN", "EM", "svg"],
        o = ["TR", "LI", "DL"],
        a = ["A", "BUTTON"],
        n = function() {
            function t() {}
            return t.prototype.path = function(t, e) {
                var r, n, o, s, c, d, h, l, p, f, g, v, m, w, b, y, _, I, S;
                if (null == e && (e = !1),
                s = "",
                g = !1,
                n = {},
                p = !1,
                l = !1,
                _ = void 0,
                c = 0,
                y = [],
                o = [],
                t === document)
                    return {
                        isIgnore: !0
                    };
                if (!t.tagName)
                    return {
                        isIgnore: !0
                    };
                for (r = new i(t); "body" !== r.name && "html" !== r.name && (n = {
                    x: r.path(),
                    h: r.href,
                    v: this.containerElemContent(r.node)
                },
                y.push(n.x),
                m = r.path(),
                r.isIgnore && (g = !0),
                !p && r.hasObj() && (p = !0,
                h = r.grObj),
                l || (r.hasIdx() ? (l = !0,
                d = r.grIdx) : (S = r.path(),
                (-1 !== S.indexOf("/dl") || -1 !== S.indexOf("/tr") || -1 !== S.indexOf("/li")) && (l = !0,
                d = this.index(r.node)))),
                b = r.node.parentNode,
                e && "" !== s && (-1 !== u.indexOf(a, r.node.tagName) || r.isContainer()) && (p ? n.obj = h : u.hasAttr(r.node.parentNode, "data-growing-info") && (n.obj = r.node.parentNode.getAttribute("data-growing-info")),
                n.x = c,
                o.push(n)),
                s = m + s,
                c++,
                b && b.tagName); )
                    r = new i(b),
                    1 === c && (_ = r.node);
                for (y.reverse(),
                f = 0,
                v = o.length; v > f; f++)
                    w = o[f],
                    w.x = y.slice(0, c - w.x).join(""),
                    l && (w.idx = d),
                    p && (w.obj = h);
                return I = {
                    xpath: s,
                    containerMessage: o,
                    isIgnore: g
                },
                p && (I.obj = h),
                l && (I.idx = d),
                _ && (I.pnode = _),
                I
            }
            ,
            t.prototype.index = function(t) {
                var e, r, n, i, s, a, c;
                for (s = t; s && "BODY" !== s.tagName && -1 === u.indexOf(o, s.tagName); )
                    s = s.parentNode;
                if (s)
                    for (a = s.parentNode,
                    r = 1,
                    c = a.childNodes,
                    e = 0,
                    n = c.length; n > e; e++)
                        if (i = c[e],
                        i.tagName === s.tagName) {
                            if (u.hasAttr(i, "data-growing-idx") && (r = parseInt(i.getAttribute("data-growing-idx"))),
                            i === s)
                                return r;
                            r += 1
                        }
            }
            ,
            t.prototype.isLeaf = function(t) {
                var e, r, n, i;
                if (t.hasChildNodes() && "svg" !== t.tagName)
                    for (i = t.childNodes,
                    r = 0,
                    n = i.length; n > r; r++)
                        if (e = i[r],
                        1 === e.nodeType)
                            return !1;
                return !0
            }
            ,
            t.prototype.isParentOfLeaf = function(t) {
                var e, r, n, i;
                if (!t.childNodes)
                    return !1;
                if ("svg" === t.tagName)
                    return !1;
                for (i = t.childNodes,
                r = 0,
                n = i.length; n > r; r++)
                    if (e = i[r],
                    !this.isLeaf(e))
                        return !1;
                return !0
            }
            ,
            t.prototype.depthInside = function(t, e, r) {
                var n, i, o, s;
                if (null == r && (r = 1),
                t.hasChildNodes() && "svg" !== t.tagName) {
                    if (r > e)
                        return !1;
                    for (s = t.childNodes,
                    n = 0,
                    i = s.length; i > n; n++)
                        if (o = s[n],
                        1 === o.nodeType && !this.depthInside(o, e, r + 1))
                            return !1
                }
                return e >= r
            }
            ,
            t.prototype.onlyContainsChildren = function(t, e) {
                var r, n, i, o;
                if (0 === !t.children.length)
                    return !1;
                for (o = t.children,
                n = 0,
                i = o.length; i > n; n++)
                    if (r = o[n],
                    -1 === u.indexOf(e, r.tagName))
                        return !1;
                return !0
            }
            ,
            t.prototype.containerElemContent = function(t) {
                var e;
                if (u.hasAttr(t, "data-growing-title") && t.getAttribute("data-growing-title").length > 0)
                    return t.getAttribute("data-growing-title");
                if (u.hasAttr(t, "title") && t.title.length > 0)
                    return u.processText(t.getAttribute("title"));
                if ("BUTTON" === t.tagName) {
                    if (t.name.length > 0)
                        return t.name;
                    if (this.onlyContainsChildren(t, s) && null != t.textContent && (e = t.textContent.replace(/[\n \t]+/g, " ").trim(),
                    e.length > 0 && e.length < 50))
                        return u.processText(e)
                } else if ("A" === t.tagName) {
                    if (this.onlyContainsChildren(t, s) && null != t.textContent) {
                        if (e = t.textContent.replace(/[\n \t]+/g, " ").trim(),
                        e.length > 0)
                            return u.processText(e.length <= 50 ? e : e.slice(0, 50))
                    } else if (u.hasAttr(t, "href") && t.getAttribute("href").length > 0)
                        return t.getAttribute("href")
                } else if ("LABEL" === t.tagName && null != t.textContent && (e = t.textContent.replace(/[\n \t]+/g, " ").trim(),
                e.length > 0 && e.length < 50))
                    return u.processText(e)
            }
            ,
            t.prototype.isDOM = function(t) {
                return "HTMLElement"in window ? t && t instanceof HTMLElement : !(!t || "object" != typeof t || 1 !== t.nodeType || !t.nodeName)
            }
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "../tools/utils": 19,
        "./tagging_node_info": 12
    }],
    11: [function(t, e, r) {
        var n, i, o, s;
        i = t("../vendor/cookie"),
        o = t("../tools/guid"),
        s = t("../tools/utils"),
        n = function() {
            function t() {
                this.userId = null,
                this.sessionId = "",
                this.lastSessionId = "",
                this.cookie = i,
                this.guid = o,
                this.utils = s,
                this.visitorVar = null,
                this.cookieDomain()
            }
            return t.prototype.isHybrid = !1,
            t.prototype.cookieDomain = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.vid = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.hasSid = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.sid = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.getCs1 = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.setVisitor = function(t) {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.updateCS1 = function(t, e) {
                throw null == e && (e = this.sessionId),
                new Error("this a inteface function")
            }
            ,
            t.prototype.clearCs1 = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.updateSessionId = function(t, e) {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.updateSessionIdSendStatus = function(t, e) {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.isSendNewVisit = function() {
                throw new Error("this a inteface function")
            }
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "../tools/guid": 16,
        "../tools/utils": 19,
        "../vendor/cookie": 20
    }],
    12: [function(t, e, r) {
        var n, i, o, s;
        s = t("../tools/utils"),
        o = s.detectIE() || 0 / 0,
        i = /(^| )(clear|clearfix|active|hover|enabled|hidden|display|focus|disabled|ng-|growing-)[^\. ]*/g,
        n = function() {
            function t(t) {
                var e, r, n;
                this.node = t,
                this.name = t.tagName.toLowerCase(),
                s.hasAttr(t, "id") && null === t.getAttribute("id").match(/^[0-9]/) && (this.id = t.getAttribute("id")),
                this.isIgnore = s.hasAttr(t, "growing-ignore") || s.hasAttr(t, "data-growing-ignore"),
                s.hasAttr(t, "href") && (e = t.getAttribute("href"),
                e && 0 !== e.indexOf("javascript") && (this.href = s.normalizePath(e.slice(0, 320)))),
                s.hasAttr(t, "data-growing-info") && (this.grObj = t.getAttribute("data-growing-info")),
                s.hasAttr(t, "data-growing-idx") && (this.grIdx = parseInt(t.getAttribute("data-growing-idx"))),
                "input" === this.name && s.hasAttr(t, "name") && t.getAttribute("name") ? this.klass = [t.getAttribute("name")] : (r = null != (n = s.getKlassName(t, o)) ? n.replace(i, "").trim() : void 0,
                (null != r ? r.length : void 0) > 0 && (this.klass = r.split(/\s+/).sort()))
            }
            return t.prototype.path = function() {
                var t, e, r, n, i;
                if (n = "/" + this.name,
                this.id && (n += "#" + this.id),
                this.klass)
                    for (i = this.klass,
                    t = 0,
                    r = i.length; r > t; t++)
                        e = i[t],
                        e && (n += "." + e);
                return n
            }
            ,
            t.prototype.hasObj = function() {
                return null != this.grObj
            }
            ,
            t.prototype.hasIdx = function() {
                return null != this.grIdx
            }
            ,
            t.prototype.isContainer = function() {
                return s.hasAttr(this.node, "data-growing-container")
            }
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "../tools/utils": 19
    }],
    13: [function(t, e, r) {
        var n, i, o, s, a, u, c, d, h = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, l = [].indexOf || function(t) {
            for (var e = 0, r = this.length; r > e; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
        ;
        d = t("../tools/utils"),
        u = d.detectIE() || 0 / 0,
        c = d.detectIOS() || 0 / 0,
        t("../vendor/intersection-observer"),
        t("../vendor/mutation-observer"),
        i = window.IntersectionObserver,
        s = window.MutationObserver,
        9 >= u && t("json2"),
        o = t("./messaging_observer"),
        a = t("../page_service"),
        n = function() {
            function t(t, e, r, n) {
                this.sender = t,
                this.gruser = e,
                this.launcher = r,
                this.TreeMirror = n,
                this.sendManualImp = h(this.sendManualImp, this),
                this.setPSForActionMessage = h(this.setPSForActionMessage, this),
                this.pageChanged = h(this.pageChanged, this),
                this.sendPageCallback = h(this.sendPageCallback, this),
                this.content = {},
                this.pageService = new a(this.sender,this.gruser,this.launcher)
            }
            var e, r, n, u, p, f, g, v, m, w, b, y, _, I, S, O, C;
            return n = null,
            I = 3,
            p = [],
            u = {},
            C = {
                tspan: 1,
                text: 1,
                g: 1,
                rect: 1,
                path: 1,
                defs: 1,
                clipPath: 1,
                desc: 1,
                title: 1
            },
            g = {},
            O = null,
            f = null,
            S = null,
            r = !0,
            e = ["TEXTAREA", "HTML", "BODY"],
            y = ["button", "submit"],
            _ = ["A", "BUTTON", "INPUT", "IMG"],
            m = ["I", "SPAN", "EM", "svg"],
            b = ["A", "BUTTON"],
            w = b,
            v = ["radio", "checkbox"],
            t.prototype.sendPageCallback = function(t) {
                return this.pageLoaded = t.pageLoaded,
                this.prevPageAttrs = d.assignObj({}, t.preProperties),
                this.lastActionTime = +Date.now()
            }
            ,
            t.prototype.setPageGroup = function(t) {
                return this.pageService.setPageGroup(t, function(e) {
                    return function(r) {
                        var n;
                        return e.sendPageCallback(r),
                        null != (n = e.messagingObserver) ? n.sendPageLoad({
                            pg: t
                        }) : void 0
                    }
                }(this))
            }
            ,
            t.prototype.setDeferWithPage = function(t, e) {
                return e ? this.pageService.setDeferSendWithPage(t, e, this.sendPageCallback) : void 0
            }
            ,
            t.prototype.initImpObserver = function() {
                var t, e, r;
                return r = this,
                this.intersectionObserver = new i(function(t) {
                    return t.length ? t.map(function(t) {
                        var e;
                        return t.intersectionRatio > 0 ? (e = d.getManualImpInfo(t.target),
                        r.sendManualImp(e),
                        r.intersectionObserver.unobserve(t.target)) : void 0
                    }) : void 0
                }
                ),
                this.mutationObserver = new s(function(t) {
                    var e;
                    return e = t[0],
                    t.map("attributes" === e.type ? function(t) {
                        var e;
                        return e = t.target,
                        e.dataset.gioImpTrack ? r.intersectionObserver.observe(e) : void 0
                    }
                    : function(t) {
                        var e, n, i;
                        return n = t.target,
                        (null != (i = n.dataset) ? i.gioImpTrack : void 0) && r.intersectionObserver.observe(n),
                        e = t.addedNodes,
                        e.length > 0 ? Array.from(e).reduce(function(t, e) {
                            return t.push(e),
                            1 === e.nodeType && (t = t.concat(Array.from(e.querySelectorAll("*")))),
                            t
                        }, []).map(function(t) {
                            return t.dataset && t.dataset.gioImpTrack ? r.intersectionObserver.observe(t) : void 0
                        }) : void 0
                    }
                    )
                }
                ),
                t = {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["data-gio-imp-track", /^data-gio-track-.+/]
                },
                this.mutationObserver.observe(document.body, t),
                e = document.querySelectorAll("[data-gio-imp-track]"),
                Array.from(e).map(function(t) {
                    var e;
                    return e = t.setAttribute,
                    t.setAttribute = function(t, r) {
                        var n;
                        return n = this.getAttribute("data-gio-imp-track"),
                        n && e.call(this, "data-gio-imp-track", n),
                        e.call(this, t, r)
                    }
                    ,
                    r.intersectionObserver.observe(t)
                })
            }
            ,
            t.prototype.registerDomObserver = function() {
                var t;
                if (window.vds.imp)
                    return null != n && n.disconnect(),
                    t = {
                        initialize: function(t) {
                            return function(e) {
                                var r, n, i, o, s, a;
                                for (a = {
                                    u: t.gruser.vid(),
                                    s: t.gruser.sid(),
                                    t: "imp",
                                    tm: +Date.now(),
                                    ptm: t.pageLoaded,
                                    d: window.location.host || window.vds.accountId,
                                    p: t.currentPath
                                },
                                t.currentQuery.length > 0 && (a.q = t.currentQuery),
                                n = t.gruser.getCs1(),
                                n && (a.cs1 = n),
                                t.setPSForActionMessage(a),
                                i = [],
                                o = 0,
                                s = e.length; s > o; o++)
                                    r = e[o],
                                    "use" !== r.tagName && (i = i.concat(t.getLeafNodes(r, e.length)));
                                return a.e = i,
                                i.length > 0 ? t.sender.send([a]) : void 0
                            }
                        }(this),
                        applyChanged: function(t) {
                            return function(e, r, i, o) {
                                var s, a, u, c, d, h;
                                if (r.length > 0 && !document.body.className.match(/\bvds-entrytext\b/)) {
                                    for (t.gruser.hasSid() || t.pageService.sendPV({
                                        sendVisit: !1,
                                        addPreProps: !0,
                                        useNewTime: !1
                                    }, t.sendPageCallback),
                                    d = {
                                        u: t.gruser.vid(),
                                        s: t.gruser.sid(),
                                        t: n.snapshoting ? "snap" : "imp",
                                        tm: +Date.now(),
                                        ptm: t.pageLoaded,
                                        d: window.location.host || window.vds.accountId,
                                        p: t.currentPath
                                    },
                                    s = t.gruser.getCs1(),
                                    s && (d.cs1 = s),
                                    t.currentQuery.length > 0 && (d.q = t.currentQuery),
                                    t.setPSForActionMessage(d),
                                    a = [],
                                    u = 0,
                                    c = r.length; c > u; u++)
                                        h = r[u],
                                        "use" !== h.tagName && (a = a.concat(t.getLeafNodes(h, h.length)));
                                    if (d.e = a,
                                    a.length > 0)
                                        return t.sendPolicy(d)
                                }
                            }
                        }(this)
                    },
                    this.TreeMirror ? this.client = n = new this.TreeMirror.Client(document.body,t) : void 0
            }
            ,
            t.prototype.sendPolicy = function(t) {
                return p.push(t),
                0 > I ? this.sendQueue() : (this.queueTimeout && clearTimeout(this.queueTimeout),
                this.queueTimeout = setTimeout(function(t) {
                    return function() {
                        return t.sendQueue()
                    }
                }(this), 3e3),
                this.checkingBlance())
            }
            ,
            t.prototype.deregisterDomObserver = function() {
                return null != n ? n.disconnect() : void 0
            }
            ,
            t.prototype.idle = function() {
                return this.lastSentTime = this.lastSentTime || +Date.now(),
                this.lastSentTime && (+Date.now() - this.lastSentTime) / p.length > 300
            }
            ,
            t.prototype.checkingBlance = function() {
                return this.idle() ? I -= 1 : void 0
            }
            ,
            t.prototype.sendQueue = function() {
                return p.length > 0 && +Date.now() - this.lastActionTime < 12e4 && this.sender.send(p),
                this.queueTimeout = null,
                this.lastSentTime = +Date.now(),
                p = [],
                I = 3
            }
            ,
            t.prototype.getLeafNodes = function(t, e) {
                var r, n, i, o, s, a, u, c, h, l, p, f, g, v, m, b, y;
                if (u = [],
                f = !0,
                t.leaf)
                    1 === t.nodeType && ((null != (g = t.attributes) ? g.href : void 0) || null != t.text || null != t.obj) && (p = this.nodeMessage(t, !0),
                    e > 1 && (p.idx = t.idx),
                    u.push(p));
                else if (t.isContainer && (p = this.nodeMessage(t, !0),
                u.push(p)),
                0 === t.childNodes.length && -1 === d.indexOf(_, t.tagName))
                    ;
                else {
                    for (v = t.childNodes,
                    o = 0,
                    c = v.length; c > o; o++)
                        n = v[o],
                        n.leaf || (f = !1),
                        "use" !== n.tagName && (u = u.concat(this.getLeafNodes(n, t.childNodes.length)));
                    if ((-1 !== d.indexOf(w, t.tagName) || f && ((null != (m = t.attributes) ? m.any : void 0) || t.text)) && (t.text || (i = t.dom,
                    t.text = i ? this.info.containerElemContent(i) : d.parentOfLeafText(t)),
                    p = this.nodeMessage(t, !1),
                    u.push(p)),
                    "SPAN" === t.tagName)
                        for (b = t.childNodes,
                        s = 0,
                        h = b.length; h > s; s++)
                            if (n = b[s],
                            "svg" === n.tagName)
                                for (y = n.childNodes,
                                a = 0,
                                l = y.length; l > a; a++)
                                    r = y[a],
                                    1 === r.nodeType && "use" === r.tagName && d.hasAttr(r, "xlink:href") && (t.text = r.getAttribute("xlink:href"),
                                    p = this.nodeMessage(t, !1),
                                    u.push(p))
                }
                return u
            }
            ,
            t.prototype.nodeMessage = function(t, e) {
                var r, i, o, s;
                return i = {
                    x: t.path
                },
                i.v = d.processText(t.text),
                "A" === t.tagName && 0 === (null != (o = t.text) ? o.length : void 0) && (i.v = void 0),
                (null != (s = t.text) ? s.length : void 0) > 50 && (i.v = "A" === t.tagName ? d.processText(t.text.slice(0, 50)) : void 0),
                (r = t.attributes) && r.href && 0 !== r.href.indexOf("javascript") && (i.h = d.normalizePath(r.href.slice(0, 320)),
                delete t.attributes.href),
                t.idx && (i.idx = t.idx),
                t.obj && (i.obj = t.obj),
                this.appendMessageAttrs(n, i, t)
            }
            ,
            t.prototype.appendMessageAttrs = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.appendEventAttrs = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.registerEventListener = function() {
                var t, n, i, o, s, a, u, c, h, l;
                a = {
                    click: "clck",
                    change: "chng",
                    submit: "sbmt",
                    snapshot: "snap"
                },
                t = "__mutation_summary_node_map_id__",
                n = function(t, e, r) {
                    return t.addEventListener ? t.addEventListener(e, r, !0) : t.attachEvent ? t.attachEvent("on" + e, r) : t["on" + e] = r
                }
                ,
                h = function(t) {
                    return t.which > 1 || (S = +Date.now(),
                    f === S) ? void 0 : (f = S,
                    g = {
                        time: S,
                        target: t.target || t.srcElement,
                        x: u("x", t),
                        y: u("y", t)
                    },
                    O = setTimeout(function() {
                        return t = {
                            target: g.target,
                            type: "click"
                        },
                        s(t)
                    }, 100))
                }
                ,
                c = function(t) {
                    var e;
                    return e = {
                        adx: Math.abs(u("x", t) - g.x),
                        ady: Math.abs(u("y", t) - g.y)
                    },
                    e.adx > 10 || e.ady > 10 ? clearTimeout(O) : void 0
                }
                ,
                l = function(t) {
                    var e;
                    return e = +Date.now() - g.time,
                    e > 1e3 ? clearTimeout(O) : void 0
                }
                ,
                u = function(t, e) {
                    var n;
                    return n = r ? e.touches[0] : e,
                    n["page" + t.toUpperCase()]
                }
                ,
                i = function() {
                    var t, e, i, o, s, a, u, d, p, f, g, v, m, w;
                    w = navigator.userAgent,
                    o = /chrome/i.exec(w),
                    i = /android/i.exec(w),
                    r = "ontouchstart"in window && !(o && !i),
                    v = r ? ["touchstart"] : ["mousedown"],
                    m = r ? ["touchend", "touchcancel"] : ["mouseup", "mouseleave"],
                    f = r ? ["touchmove"] : ["mousemove"];
                    for (e = 0,
                    u = v.length; u > e; e++)
                        t = v[e],
                        n(document, t, h);
                    for (s = 0,
                    d = f.length; d > s; s++)
                        t = f[s],
                        n(document, t, c);
                    for (g = [],
                    a = 0,
                    p = m.length; p > a; a++)
                        t = m[a],
                        g.push(n(document, t, l));
                    return g
                }
                ,
                s = function(t) {
                    return function(r) {
                        var n, i, o, s, u, c, h;
                        if (!document.body.className.match(/\bvds-entrytext\b/)) {
                            if (window.vds.ignoreClck && "click" === r.type)
                                return;
                            for (t.lastActionTime = +Date.now(),
                            h = r.target || r.srcElement; h && 1 === C[h.tagName] && h.parentNode; )
                                h = h.parentNode;
                            if (n = t.info.path(h, !0),
                            n.isIgnore)
                                return;
                            if (window.vds.impCtrlDua && (window.grImpCtrl = Date.now()),
                            c = h.tagName,
                            "click" === r.type) {
                                if (-1 !== d.indexOf(e, c))
                                    return;
                                if ("INPUT" === c && -1 === d.indexOf(y, h.type))
                                    return;
                                if ("svg" !== c && -1 === d.indexOf(_, c) && !t.info.depthInside(h, 4))
                                    return
                            }
                            return t.gruser.hasSid() ? "click" === r.type && t.pageService.sendPVOnSidChanged(t.sendPageCallback) : t.pageService.sendPV({
                                sendVisit: !0,
                                addPreProps: !0,
                                useNewTime: !0
                            }, t.sendPageCallback),
                            s = {},
                            s.u = t.gruser.vid(),
                            s.s = t.gruser.sid(),
                            s.t = a[r.type],
                            s.tm = +Date.now(),
                            s.ptm = t.pageLoaded,
                            s.d = window.location.host || window.vds.accountId,
                            s.p = t.currentPath,
                            t.currentQuery.length > 0 && (s.q = t.currentQuery),
                            i = t.gruser.getCs1(),
                            i && (s.cs1 = i),
                            t.setPSForActionMessage(s),
                            u = "snapshot" === r.type,
                            u && (r.type = "click"),
                            o = t.compute(u ? "click" : r.type, h),
                            t.appendElemAttrs(o, u, h, n),
                            o.x = n.xpath,
                            n.obj && (o.obj = n.obj),
                            n.idx ? o.idx = n.idx : (-1 !== o.x.indexOf("/dl") || -1 !== o.x.indexOf("/tr") || -1 !== o.x.indexOf("/li")) && (o.idx = t.info.index(h)),
                            s.e = 0 === n.containerMessage.length ? [o] : -1 !== d.indexOf(w, n.pnode.tagName) && t.info.onlyContainsChildren(n.pnode, m) ? n.containerMessage : [o].concat(n.containerMessage),
                            u ? t.snapshotCallback(r, s) : t.sender.send([s])
                        }
                    }
                }(this);
                for (o in a)
                    n(document, o, s);
                return n(document, "scroll", function(t) {
                    return window.vds.impCtrlDua ? window.grImpCtrl = Date.now() : void 0
                }),
                window.vds.touch ? i() : void 0
            }
            ,
            t.prototype.snapshotCallback = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.appendElemAttrs = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.compute = function(t, e) {
                var r, n, i, o, s, a, u, c, h, l, p, f, g, m, b, _, I, S, O, C, N;
                if (n = {},
                C = e.tagName,
                "IMG" === C ? (null != (_ = e.src) ? _.length : void 0) > 0 && -1 === e.src.indexOf("data:image") && (n.h = e.src) : d.hasAttr(e, "href") && (i = e.getAttribute("href"),
                i && 0 !== i.indexOf("javascript") && (n.h = d.normalizePath(i.slice(0, 320)))),
                d.hasAttr(e, "data-growing-title") && e.getAttribute("data-growing-title").length > 0)
                    n.v = e.getAttribute("data-growing-title");
                else if (d.hasAttr(e, "title") && e.getAttribute("title").length > 0)
                    n.v = d.processText(e.getAttribute("title"));
                else if ("click" === t)
                    if (this.info.isLeaf(e))
                        if ("IMG" === C)
                            e.alt ? n.v = e.alt : n.h && (a = n.h.split("?")[0],
                            s = a.split("/"),
                            s.length > 0 && (n.v = s[s.length - 1]));
                        else if ("INPUT" === C && -1 !== d.indexOf(y, e.type))
                            n.v = d.processText(e.value);
                        else if ("svg" === C)
                            for (I = e.childNodes,
                            o = 0,
                            m = I.length; m > o; o++)
                                r = I[o],
                                1 === r.nodeType && "use" === r.tagName && d.hasAttr(r, "xlink:href") && (n.v = r.getAttribute("xlink:href"));
                        else
                            N = "",
                            null != e.textContent ? N = e.textContent.replace(/[\n \t]+/g, " ").trim() : null != e.innerText && (N = e.innerText.replace(/[\n \t]+/g, " ").trim()),
                            N.length > 0 && (N.length < 50 ? n.v = d.processText(N) : "A" === C && (n.v = d.processText(N.slice(0, 50))));
                    else
                        -1 !== d.indexOf(w, C) ? n.v = this.info.containerElemContent(e) : this.info.isParentOfLeaf(e) && (n.v = d.parentOfLeafText(e));
                else if ("change" === t)
                    "TEXTAREA" !== C && ("INPUT" === C ? -1 !== d.indexOf(v, e.type) ? (n.v = d.processText(e.value),
                    h = e.parentNode,
                    "LABEL" === h.tagName ? c = h : "BODY" !== h.tagName && (h = h.parentNode,
                    "LABEL" === h.tagName ? c = h : e.id && (g = h.getElementsByTagName("label"),
                    function() {
                        var t, r, n;
                        for (n = [],
                        t = 0,
                        r = g.length; r > t; t++)
                            f = g[t],
                            n.push(f["for"] === e.id);
                        return n
                    }() && (c = f))),
                    null != c && (l = this.info.containerElemContent(c),
                    (null != l ? l.length : void 0) > 0 && (n.obj = l + " (" + e.checked + ")"))) : "password" !== e.type && (d.hasAttr(e, "growing-track") || d.hasAttr(e, "data-growing-track")) && (n.v = d.processText(e.value)) : "SELECT" === C && (n.v = d.processText(e.value),
                    -1 !== e.selectedIndex && null != (null != (S = e.options[e.selectedIndex]) ? S.label : void 0) && (n.obj = e.options[e.selectedIndex].label)));
                else if ("submit" === t)
                    for (O = e.getElementsByTagName("input"),
                    p = 0,
                    b = O.length; b > p; p++)
                        u = O[p],
                        ("search" === u.type || "text" === u.type && ("q" === u.id || -1 !== u.id.indexOf("search") || -1 !== u.className.indexOf("search") || "q" === u.name || -1 !== u.name.indexOf("search"))) && (n.x = this.info.path(u).xpath,
                        n.v = d.processText(u.value.trim()));
                return n
            }
            ,
            t.prototype.registerCircleHandler = function() {
                var t;
                try {
                    if (!this.messagingObserver)
                        return this.messagingObserver = new o,
                        this.messagingObserver.sendPageLoad(this.prevPageAttrs)
                } catch (e) {
                    t = e
                }
            }
            ,
            t.prototype.registerHistoryHandler = function() {
                var t, e;
                return t = window.history.pushState,
                e = window.history.replaceState,
                null != t && (window.history.pushState = function(e) {
                    return function() {
                        return e.prevUrl = window.location.toString(),
                        t.apply(window.history, arguments),
                        setTimeout(function() {
                            return e.pageChanged()
                        }, 0)
                    }
                }(this)),
                null != e && (window.history.replaceState = function(t) {
                    return function() {
                        return t.prevUrl = window.location.toString(),
                        e.apply(window.history, arguments),
                        setTimeout(function() {
                            return t.pageChanged()
                        }, 0)
                    }
                }(this)),
                null != t && (this.prevUrl = d.getDocumentReferrer(),
                "function" == typeof Object.defineProperty && Object.defineProperty(document, "gioreferrer", {
                    get: function(t) {
                        return function() {
                            return t.prevUrl
                        }
                    }(this),
                    configurable: !0
                }),
                d.bind(window, "popstate", this.pageChanged, !0)),
                window.vds.hashtag ? d.bind(window, "hashchange", this.pageChanged, !0) : void 0
            }
            ,
            t.prototype.pageChanged = function() {
                var t, e, r;
                return t = d.path(),
                e = d.query(),
                this.currentPath !== t || this.currentQuery !== e ? (window.vds.hashtag && (this.prevUrl = window.location.protocol + "//" + window.location.host + this.currentPath,
                this.currentQuery && this.currentQuery.trim().length > 0 && (this.prevUrl += "?" + this.currentQuery)),
                this.currentPath = t,
                this.currentQuery = e,
                this.pageService.sendPV({
                    sendVisit: !0,
                    useNewTime: !0
                }, this.sendPageCallback),
                null != (r = this.messagingObserver) ? r.sendPageLoad(this.prevPageAttrs) : void 0) : void 0
            }
            ,
            t.prototype.domLoadedHandler = function(t) {
                var e;
                if (!this.domLoadedHandler.done) {
                    if (this.domLoadedHandler.done = !0,
                    this.registerEventListener(),
                    null != this.TreeMirror) {
                        this.initServerImpSetting(),
                        window.vds.impCtrlDua && (window.grImpCtrl = Date.now());
                        try {
                            d.detectIE() && null != (null != (e = window.angular) ? e.version : void 0) ? (window.angular.version.major > 1 || 1 === window.angular.version.major && window.angular.version.minor > 4 || 1 === window.angular.version.major && 4 === window.angular.version.minor && window.angular.version.dot > 0) && (vds.imp && setTimeout(function(t) {
                                return function() {
                                    return t.registerDomObserver()
                                }
                            }(this), 1500),
                            vds.manualImp && setTimeout(function(t) {
                                return function() {
                                    return t.initImpObserver()
                                }
                            }(this), 1500)) : (vds.imp && setTimeout(function(t) {
                                return function() {
                                    return t.registerDomObserver()
                                }
                            }(this), 1500),
                            vds.manualImp && setTimeout(function(t) {
                                return function() {
                                    return t.initImpObserver()
                                }
                            }(this), 1500))
                        } catch (r) {
                            t = r,
                            vds.imp && setTimeout(function(t) {
                                return function() {
                                    return t.registerDomObserver()
                                }
                            }(this), 1500),
                            vds.manualImp && setTimeout(function(t) {
                                return function() {
                                    return t.initImpObserver()
                                }
                            }(this), 1500)
                        }
                    }
                    return window.history.pushState && this.registerHistoryHandler(),
                    this.sendRegisterCircleOption()
                }
            }
            ,
            t.prototype.initServerImpSetting = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.blind = function() {
                throw new Error("this a inteface function")
            }
            ,
            t.prototype.bindEvent = function() {
                return d.bind(window, "message", function(t) {
                    return function(e) {
                        var r, n, i, o;
                        try {
                            switch (r = e.data,
                            i = r.mode || r.circleMode,
                            "update-global-env" === i && (window.grCircleEnv = r.add_on_grSource),
                            i) {
                            case "gr-register-SDK-circle":
                                return t.registerCircleHandler(),
                                d.spreadToInnerIframes(r);
                            case "gr-register-SDK-option":
                                if (t.canPostRegisterMessage() && "grcw" === window.grSource.name && (o = window.grSource.id,
                                l.call(r.tArr, o) < 0))
                                    return r.tArr.push(window.grSource.id),
                                    parent.postMessage(r, "*");
                                break;
                            case "page-load":
                                if (window.self === window.top && null != r.add_on_grSource)
                                    return t.loadPluginOuter(r)
                            }
                        } catch (s) {
                            n = s
                        }
                    }
                }(this))
            }
            ,
            t.prototype.loadPluginOuter = function(t) {
                var e, r, n, i, o, s;
                for (this.pluginLoaded = !1,
                o = document.getElementsByTagName("script"),
                r = 0,
                n = o.length; n > r; r++)
                    if (e = o[r],
                    s = e.getAttribute("src"),
                    null != s && -1 !== s.indexOf("/outer-circle-plugin.js")) {
                        this.pluginLoaded = !0;
                        break
                    }
                return this.pluginLoaded ? void 0 : (i = t.add_on_grSource.add_on_origin,
                window.grCircleEnv = t.add_on_grSource)
            }
            ,
            t.prototype.sendRegisterCircleOption = function() {
                var t;
                if (this.canPostRegisterMessage())
                    return t = {
                        circleMode: "gr-register-SDK-option",
                        url: window.location.toString(),
                        ai: window.vds.accountId,
                        sna: window.grSource.name,
                        sid: window.grSource.id,
                        tna: "",
                        fsna: "sdk",
                        tArr: [window.grSource.id]
                    },
                    parent.postMessage(t, "*")
            }
            ,
            t.prototype.canPostRegisterMessage = function() {
                return "grcw-outer-iframe" === window.grSource.name ? !1 : d.isSpreadPostMessage() ? !0 : vds.circleIframe ? parent && "function" == typeof parent.postMessage && window.self !== window.top && window.self !== window.parent : !1
            }
            ,
            t.prototype.observe = function() {
                var t, e, r;
                if (this.bindEvent(),
                this.currentPath = d.path(),
                this.blind())
                    return void this.sendRegisterCircleOption();
                if (this.currentQuery = d.query(),
                this.pageService.sendPV({}, this.sendPageCallback),
                document.addEventListener)
                    "interactive" === document.readyState || "complete" === document.readyState ? this.domLoadedHandler() : d.bind(document, "DOMContentLoaded", function(t) {
                        return function() {
                            return t.domLoadedHandler()
                        }
                    }(this));
                else if (document.attachEvent) {
                    d.bind(document, "onreadystatechange", function(t) {
                        return function() {
                            return t.domLoadedHandler()
                        }
                    }(this)),
                    r = !1;
                    try {
                        r = null === window.frameElement
                    } catch (n) {
                        e = n
                    }
                    document.documentElement.doScroll && r && (t = function(r) {
                        return function() {
                            try {
                                document.documentElement.doScroll("left")
                            } catch (n) {
                                return e = n,
                                void setTimeout(t, 1)
                            }
                            return r.domLoadedHandler()
                        }
                    }(this))()
                }
                return d.bind(window, "load", function(t) {
                    return function() {
                        return t.domLoadedHandler()
                    }
                }(this)),
                d.bind(window, "beforeunload", function(t) {
                    return function(e) {
                        var r, n;
                        if (t.queueTimeout && t.sendQueue(),
                        n = +Date.now(),
                        window.grWaitTime)
                            for (r = n + 50; r > n; )
                                n = +Date.now()
                    }
                }(this)),
                c && d.bind(window, "pagehide", function(t) {
                    return function(e) {
                        var r, n;
                        if (t.queueTimeout && t.sendQueue(),
                        n = +Date.now(),
                        window.grWaitTime)
                            for (r = n + 50; r > n; )
                                n = +Date.now()
                    }
                }(this)),
                d.bind(window, "unload", function(t) {
                    return function(t) {
                        var e;
                        if (window.grWaitTime)
                            for (; e < window.grWaitTime; )
                                e = +Date.now()
                    }
                }(this))
            }
            ,
            t.prototype.setPSForActionMessage = function(t) {
                return this.prevPageAttrs.pg ? t.pg = this.prevPageAttrs.pg : void 0
            }
            ,
            t.prototype.sendManualImp = function(t) {
                var e, r, n, i;
                return r = {
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    t: "cstm",
                    tm: +Date.now(),
                    ptm: this.pageLoaded,
                    d: window.location.host || window.vds.accountId,
                    p: this.currentPath
                },
                this.currentQuery.length > 0 && (r.q = this.currentQuery),
                r.n = t.n,
                n = d.vaildEventNumber(t.num),
                n && (r.num = n),
                i = d.vaildVar(t["var"]),
                i && (r["var"] = i),
                e = this.gruser.getCs1(),
                e && (r.cs1 = e),
                this.setPSForActionMessage(r),
                this.sender.send([r], "cstm")
            }
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "../page_service": 15,
        "../tools/utils": 19,
        "../vendor/intersection-observer": 21,
        "../vendor/mutation-observer": 25,
        "./messaging_observer": 14,
        json2: 23
    }],
    14: [function(t, e, r) {
        var n, i, o, s, a = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, u = [].indexOf || function(t) {
            for (var e = 0, r = this.length; r > e; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
        ;
        s = t("../tools/utils"),
        o = ["load-plugin", "circle-mode", "browse-mode"],
        i = ["load-plugin", "register-iframe", "circle-mode", "browse-mode", "page-load", "circle-load"],
        n = function() {
            function t() {
                this.registerInnerIframe = a(this.registerInnerIframe, this),
                this.sendPageLoad = a(this.sendPageLoad, this),
                this.isSdkEvent = a(this.isSdkEvent, this),
                this.allowOrigin = window.vds.origin,
                this.bindEvents()
            }
            return t.prototype.bindEvents = function() {
                return s.bind(window, "message", function(t) {
                    return function(e) {
                        var r, n, i, a;
                        if (r = e.data,
                        r.ai === window.vds.accountId && (n = r.mode || r.circleMode,
                        t.isSdkEvent(n) && (!r.fsna || "sdk" === r.fsna))) {
                            if ("grcw-inner-iframe" === r.sna && s.isSpreadPostMessage())
                                return void parent.postMessage(e.data, "*");
                            if (i = r.mode,
                            u.call(o, i) >= 0)
                                s.spreadToInnerIframes(r);
                            else if (r.tna !== window.grSource.name && r.tna && r.tid && s.isSpreadPostMessage())
                                return void s.spreadToInnerIframes(r);
                            if (a = r.mode,
                            u.call(o, a) >= 0 || r.tna === window.grSource.name || e.origin === window.vds.origin || -1 !== s.indexOf(["www.growingio.com", "growingio.com"], e.origin.split("://")[1]))
                                switch (e.origin !== window.vds.origin && (window.vds.origin = e.origin),
                                r.mode) {
                                case "load-plugin":
                                    return t.loadPluginInner();
                                case "circle-mode":
                                    return t.startCircle();
                                case "browse-mode":
                                    return t.stopCircle()
                                }
                        }
                    }
                }(this))
            }
            ,
            t.prototype.isSdkEvent = function(t) {
                return u.call(i, t) >= 0
            }
            ,
            t.prototype.sendPageLoad = function(t) {
                var e, r, n, i, o;
                null == t && (t = null),
                i = (null != (n = window.vds) ? n.pathCaseSensitive : void 0) ? window.location.toString() : window.location.toString().toLowerCase();
                for (e in vds)
                    o = vds[e],
                    "function" == typeof o && (vds[e] = s.functionSerialization(o));
                return r = {
                    circleMode: "page-load",
                    url: i,
                    ai: window.vds.accountId,
                    ht: window.vds.hashtag,
                    sna: window.grSource.name,
                    sid: window.grSource.id,
                    tna: "",
                    fsna: "sdk",
                    add_on_grSource: {
                        grSource: window.grSource,
                        vds: window.vds,
                        add_on_origin: this.allowOrigin
                    }
                },
                (null != t ? t.pg : void 0) && (r.pa = t),
                parent.postMessage(r, "*")
            }
            ,
            t.prototype.registerInnerIframe = function(t) {
                var e;
                return null == t && (t = null),
                "grcw" !== window.grSource.name ? (e = {
                    circleMode: "register-iframe",
                    url: window.location.toString(),
                    ai: window.vds.accountId,
                    ht: window.vds.hashtag,
                    sna: window.grSource.name,
                    sid: window.grSource.id,
                    tna: "",
                    fsna: "sdk"
                },
                (null != t ? t.pg : void 0) && (e.pa = t),
                parent.postMessage(e, "*")) : void 0
            }
            ,
            t.prototype.loadPluginInner = function() {
                var t, e, r, n, i, o, a;
                for (this.pluginLoaded = !1,
                t = s.getCirclePluginFileName(window._gr_support_circle_pop_out),
                i = document.getElementsByTagName("script"),
                o = [],
                r = 0,
                n = i.length; n > r; r++) {
                    if (e = i[r],
                    a = e.getAttribute("src"),
                    null != a && -1 !== a.indexOf("/" + t + ".js")) {
                        this.pluginLoaded = !0;
                        break
                    }
                    o.push(void 0)
                }
                return o
            }
            ,
            t.prototype.startCircle = function() {
                var t, e, r, n, i, o;
                if (t = s.getCirclePluginFileName(window._gr_support_circle_pop_out),
                !this.pluginLoaded)
                    for (i = document.getElementsByTagName("script"),
                    r = 0,
                    n = i.length; n > r; r++)
                        if (e = i[r],
                        o = e.getAttribute("src"),
                        null != o && -1 !== o.indexOf("/" + t + ".js")) {
                            this.pluginLoaded = !0;
                            break
                        }
                return this.pluginLoaded ? this.publishCircle() : void 0
            }
            ,
            t.prototype.stopCircle = function() {
                return "undefined" != typeof CircleEvents && null !== CircleEvents ? CircleEvents.publish("circle:stop") : void 0
            }
            ,
            t.prototype.publishCircle = function() {
                return "undefined" != typeof CircleEvents && null !== CircleEvents ? (this.registerInnerIframe(),
                CircleEvents.publish("circle:start")) : setTimeout(function(t) {
                    return function() {
                        return t.publishCircle()
                    }
                }(this), 2e3)
            }
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "../tools/utils": 19
    }],
    15: [function(t, e, r) {
        var n, i, o;
        o = t("./tools/utils"),
        i = t("./tools/platform"),
        n = function() {
            function t(t, e, r) {
                this.sender = t,
                this.gruser = e,
                this.launcher = r,
                this.properties = {},
                this.preProperties = {},
                this.defaultOptions = {
                    sendVisit: !0,
                    addPreProps: !1,
                    useNewTime: !0,
                    gioId: !1
                }
            }
            return t.prototype.replaceProps = function(t) {
                return t ? this.properties = t : void 0
            }
            ,
            t.prototype.reduceProps = function(t) {
                var e, r;
                if (t) {
                    r = [];
                    for (e in t)
                        r.push(this.properties[e] = t[e]);
                    return r
                }
            }
            ,
            t.prototype.sendPV = function(t, e) {
                var r, n;
                if (null == e && (e = function() {
                    return {}
                }
                ),
                null != this.sender.sendVisitTimeout && this.sender.sendVisitTimeout > 0)
                    return void setTimeout(function(r) {
                        return function() {
                            return r.sendPV(t, e)
                        }
                    }(this), this.sender.sendVisitTimeout);
                if (this.messages = [],
                this.options = this.defaultOptions,
                t)
                    for (n in t)
                        this.options[n] = t[n];
                if (this.options.addPreProps || this.options.gioId)
                    for (n in this.preProperties)
                        null == (r = this.properties)[n] && (r[n] = this.preProperties[n]);
                return (this.options.gioId || this.options.sendVisit && this.gruser.isSendNewVisit()) && this.messages.push(this._buildVisitMessage()),
                this.options.useNewTime && (this.pageLoaded = +Date.now()),
                null == this.pageLoaded && (this.pageLoaded = +Date.now()),
                this.options.gioId || this.messages.push(this._buildPageMessage()),
                this.sender.send(this.messages, "pv"),
                this.preProperties = this.properties,
                this.properties = {},
                this.options.gioId && (this.options.gioId = !1),
                e(this)
            }
            ,
            t.prototype.setPageGroup = function(t, e) {
                return t ? (this.reduceProps({
                    pg: t
                }),
                this.pageLoaded && +Date.now() - this.pageLoaded < 4e3 && this.launcher.started ? setTimeout(function(t) {
                    return function() {
                        return t.sendPV({
                            sendVisit: !1,
                            addPreProps: !0,
                            useNewTime: !1
                        }, e)
                    }
                }(this), 10) : void 0) : void 0
            }
            ,
            t.prototype.setDeferSendWithPage = function(t, e, r) {
                return e || t ? (this.reduceProps(t),
                e(this) ? this.sendPV({
                    addPreProps: !0,
                    useNewTime: !1
                }, r) : void 0) : void 0
            }
            ,
            t.prototype._buildPageMessage = function() {
                var t, e, r;
                if (r = {
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    tl: document.title.slice(0, 255),
                    t: "page",
                    tm: this.pageLoaded,
                    pt: window.location.protocol.substring(0, window.location.protocol.length - 1),
                    d: window.location.host || window.vds.accountId,
                    p: o.path(),
                    rf: o.getDocumentReferrer()
                },
                o.query().length > 0 && (r.q = o.query()),
                t = this.gruser.getCs1(),
                t && (r.cs1 = t),
                window.gio && (r.appId = window.vds.appId),
                this.properties)
                    for (e in this.properties)
                        r[e] = this.properties[e];
                return r
            }
            ,
            t.prototype._getPlatform = function() {
                var t;
                return t = "Web",
                this.launcher.options.dynamicPlatform && (t = i.detect()),
                t
            }
            ,
            t.prototype._buildVisitMessage = function() {
                var t, e, r;
                return e = {
                    ai: window.vds.accountId,
                    av: window.vds.version,
                    b: this._getPlatform(),
                    u: this.gruser.vid(),
                    s: this.gruser.sid(),
                    t: "vst",
                    tm: +Date.now(),
                    pt: window.location.protocol.substring(0, window.location.protocol.length - 1),
                    sh: window.screen.height,
                    sw: window.screen.width,
                    d: window.location.host || window.vds.accountId,
                    p: o.path(),
                    rf: o.getDocumentReferrer(),
                    l: null != (r = navigator.language || navigator.browserLanguage) ? r.toLowerCase() : void 0
                },
                o.query().length > 0 && (e.q = o.query()),
                t = this.gruser.getCs1(),
                t && (e.cs1 = t),
                window.gio && (e.appId = window.vds.appId),
                e
            }
            ,
            t.prototype.sendPVOnSidChanged = function(t) {
                var e, r, n;
                return e = this.gruser.currentSessionId(),
                n = e[0],
                r = e[1],
                this.gruser.lastSessionId !== n ? (n || (n = this.gruser.guid(),
                this.gruser.resetUserId()),
                this.gruser.updateSessionId(n, !1),
                this.sendPV({
                    sendVisit: !0,
                    useNewTime: !0
                }, t)) : void 0
            }
            ,
            t
        }(),
        e.exports = n
    }
    , {
        "./tools/platform": 18,
        "./tools/utils": 19
    }],
    16: [function(t, e, r) {
        var n;
        n = function() {
            var t;
            return t = (new Date).getTime(),
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var r, n;
                return r = (t + 16 * Math.random()) % 16 | 0,
                t = Math.floor(t / 16),
                n = "x" === e ? r : 3 & r | 8,
                n.toString(16)
            })
        }
        ,
        e.exports = n
    }
    , {}],
    17: [function(t, e, r) {
        var n, i;
        i = t("cookie"),
        n = function() {
            function t() {}
            return t.get = function(t) {
                var e;
                try {
                    return window.localStorage ? this._readFromLocalStorage(t) : this._readFromCookie(t)
                } catch (r) {
                    return e = r,
                    null
                }
            }
            ,
            t.set = function(t, e, r) {
                var n;
                null == r && (r = 864e5);
                try {
                    return window.localStorage ? this._setInLocalStorage(t, e, r) : this._setInCookie(t, e, r)
                } catch (i) {
                    return n = i,
                    null
                }
            }
            ,
            t._readFromCookie = function(t) {
                return i.getItem(t)
            }
            ,
            t._setInCookie = function(t, e, r) {
                return i.setItem(t, e, r)
            }
            ,
            t._readFromLocalStorage = function(t) {
                var e, r;
                return r = window.localStorage.getItem(t),
                r ? (e = JSON.parse(r),
                e.expiredAt && +e.expiredAt >= +Date.now() ? e.value : null) : null
            }
            ,
            t._setInLocalStorage = function(t, e, r) {
                return window.localStorage.setItem(t, JSON.stringify({
                    expiredAt: +Date.now() + r,
                    value: e
                }))
            }
            ,
            t.removeInCookie = function(t) {
                return i.removeItem(t)
            }
            ,
            t.removeInLocalStorage = function(t) {
                return window.localStorage.removeItem(t)
            }
            ,
            t.removeItem = function(t) {
                var e;
                try {
                    return window.localStorage && this.removeInLocalStorage(t),
                    this.removeInCookie(t)
                } catch (r) {
                    return e = r,
                    null
                }
            }
            ,
            t
        }(),
        window.GrLocalStore = n,
        e.exports = n
    }
    , {
        cookie: 20
    }],
    18: [function(t, e, r) {
        var n, i, o, s, a, u, c, d, h, l, p, f, g, v;
        v = (null != (f = window.navigator) && null != (g = f.userAgent) ? g.toLowerCase() : void 0) || "",
        n = {
            web: "Web",
            minp: "MinP",
            alip: "alip",
            baidup: "baidup",
            qq: "qq",
            bytedance: "bytedance",
            android: "Android",
            ios: "iOS"
        },
        o = function(t, e) {
            var r, n, i, o, s;
            if (!t)
                return void 0;
            if (-1 === t.indexOf(e))
                return void 0;
            for (s = t.split("&"),
            r = 0,
            i = s.length; i > r; r++)
                if (o = s[r],
                n = o.split("="),
                n[0] === e)
                    return n[1];
            return void 0
        }
        ,
        i = function() {
            var t, e;
            try {
                return e = window.location.search,
                "?" === e.charAt(0) && (e = e.slice(1)),
                t = o(e, "gio_platform"),
                t ? n[t.toLowerCase()] : void 0
            } catch (r) {
                return void 0
            }
        }
        ,
        h = function() {
            return !!window.WeixinJSBridge || /micromessenger\/[0-9]/.test(v)
        }
        ,
        l = function() {
            return h() && ("miniprogram" === window.__wxjs_environment || /miniprogram/.test(v)) ? !0 : !1
        }
        ,
        s = function() {
            return -1 !== v.indexOf("aliapp") && /miniprogram/.test(v) ? !0 : !1
        }
        ,
        p = function() {
            return /qq\/[0-9]/.test(v) && /miniprogram/.test(v) ? !0 : !1
        }
        ,
        u = function() {
            return /toutiaomicroapp/.test(v)
        }
        ,
        a = function() {
            return /swan\/[0-9]/.test(v)
        }
        ,
        c = function() {
            return !!window._vds_bridge || !!window.GrowingWebViewJavascriptBridge && /android/.test(v)
        }
        ,
        d = function() {
            return !!window._vds_ios || !!window.GrowingWebViewJavascriptBridge && /(ipad|iphone|ipod)/.test(v)
        }
        ,
        e.exports = {
            detect: function() {
                var t;
                try {
                    return t = i(),
                    t ? t : l() ? "MinP" : s() ? "alip" : p() ? "qq" : u() ? "bytedance" : a() ? "baidup" : c() ? "Android" : d() ? "iOS" : "Web"
                } catch (e) {
                    return "Web"
                }
            }
        }
    }
    , {}],
    19: [function(t, e, r) {
        var n, i, o, s, a;
        o = t("./guid"),
        n = t("./local_store"),
        i = t("../vendor/cookie"),
        s = function(t) {
            return function(t) {
                return t.replace(/-(\w)/g, function(t, e) {
                    return e.toUpperCase()
                })
            }
        }(this),
        a = {
            bind: function(t, e, r, n) {
                return null == n && (n = !1),
                null != document.addEventListener ? t.addEventListener(e, r, n) : null != document.attachEvent ? t.attachEvent("on" + e, function() {
                    var e;
                    return e = window.event,
                    e.currentTarget = t,
                    e.target = e.srcElement,
                    r.call(t, e)
                }) : t["on" + e] = r
            },
            getCirclePluginFileName: function(t) {
                return null != t ? "inner-circle-plugin" : "circle-plugin"
            },
            hasAttr: function(t, e) {
                return t.hasAttribute ? t.hasAttribute(e) : !!t[e]
            },
            path: function() {
                var t, e, r;
                return e = this.normalizePath(window.location.pathname),
                window.vds.hashtag && (t = window.location.hash,
                e += -1 !== t.indexOf("?") ? t.split("?")[0] : t),
                (null != (r = window.vds) ? r.pathCaseSensitive : void 0) ? e : e.toLowerCase()
            },
            isObject: function(t) {
                return t && "object" == typeof t && t.constructor === Object
            },
            isArray: function(t) {
                return t && "object" == typeof t && t.constructor === Array
            },
            isString: function(t) {
                return t && "string" == typeof t && t.constructor === String
            },
            isFunction: function(t) {
                return t && "function" == typeof t
            },
            isEmptyObject: function(t) {
                var e, r;
                for (e in t)
                    return r = t[e],
                    !1;
                return !0
            },
            isUndefined: function(t) {
                return "undefined" == typeof t
            },
            getKlassName: function(t, e) {
                return null == e && (e = this.detectIE() || 0 / 0),
                8 > e ? t.className : t.getAttribute("class")
            },
            normalizePath: function(t) {
                var e;
                return e = t.length,
                e > 1 && "/" === t.charAt(e - 1) ? t.slice(0, e - 1) : t
            },
            identityWindow: function() {
                var t, e;
                return t = o(),
                e = this.getWindowSourceName(),
                e && "grcw" === e || (window.top === window.self ? e = "grcw-outer-iframe" : (this.printWarning("检测到疑似window复写或者嵌套iframe。 window.name值: " + e),
                e = "grcw-inner-iframe")),
                window.grSource = {
                    name: e,
                    id: t
                }
            },
            printWarning: function(t) {
                return console && console.log("%c [gio warning]", "color:red", t)
            },
            getWindowSourceName: function() {
                var t, e;
                return e = null != window.name ? window.name : window.self.name,
                e && window.nameStorage && (t = e.split(/[:?]/),
                3 === t.length && "nameStorage" === t[0] && (e = t[1])),
                e
            },
            query: function() {
                var t, e, r;
                return e = window.location.search,
                t = window.location.hash,
                window.vds.hashtag && -1 !== t.indexOf("?") && (e = e + "&" + t.substring(t.indexOf("?") + 1)),
                e.length > 1 && ["?", "&"].indexOf(e.charAt(0)) > -1 && (e = e.slice(1)),
                (null != (r = window.vds) ? r.pathCaseSensitive : void 0) ? e : e.toLowerCase()
            },
            functionSerialization: function(t) {
                return "function" == typeof t && (t = t.toString()),
                t
            },
            functionDeserialization: function(t) {
                var e, r, n;
                return "string" == typeof t && (n = /function[^\(]*\(([^\)]*)\)[^\{]*{([^\}]*)\}/,
                r = t.match(n)) ? (e = r[1].split(",").map(arg(function() {
                    return arg.replace(/\s+/, "")
                })),
                new Function(e,r[2])) : t
            },
            parentOfLeafText: function(t) {
                var e, r, n, i, o, s;
                if (n = "",
                !t.childNodes)
                    return "";
                for (s = t.childNodes,
                i = 0,
                o = s.length; o > i; i++)
                    e = s[i],
                    3 === e.nodeType && (null != e.textContent ? r = e.textContent.trim() : null != e.data && (r = e.data.trim()),
                    r.length > 0 && (n += r + " "));
                return n = n.replace(/[\n \t]+/g, " ").trim(),
                n.length > 0 && n.length < 50 ? a.processText(n) : void 0
            },
            indexOf: function(t, e) {
                var r, n, i;
                if (null != Array.prototype.indexOf)
                    return t.indexOf(e);
                for (n = t.length,
                r = -1; ++r < n; )
                    if (i = t[r],
                    i === e)
                        return r;
                return -1
            },
            detectIOS: function() {
                return !!window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
            },
            detectIE: function() {
                var t, e, r, n, i;
                return i = window.navigator.userAgent,
                window.ActiveXObject && (e = i.indexOf("MSIE "),
                e > 0) ? parseInt(i.substring(e + 5, i.indexOf(".", e)), 10) : (n = i.indexOf("Trident/"),
                n > 0 ? (r = i.indexOf("rv:"),
                parseInt(i.substring(r + 3, i.indexOf(".", r)), 10)) : (t = i.indexOf("Edge/"),
                t > 0 ? parseInt(i.substring(t + 5, i.indexOf(".", t)), 10) : !1))
            },
            hashCode: function(t) {
                var e, r, n;
                if (null == t && (t = ""),
                r = 0,
                null == t || "boolean" == typeof t || 0 === t.length)
                    return r;
                for (n = 0; n < t.length; )
                    e = t.charCodeAt(n),
                    r = (r << 5) - r + e,
                    r &= r,
                    n++;
                return r
            },
            sendRequest: function(t, e, r) {
                var n;
                if (window.XMLHttpRequest) {
                    if (n = new XMLHttpRequest,
                    "withCredentials"in n)
                        return n.open("GET", t, !0),
                        n.withCredentials = !0,
                        n.onreadystatechange = function() {
                            return 4 === n.readyState ? "function" == typeof e ? e(n) : void 0 : "function" == typeof r ? r(n) : void 0
                        }
                        ,
                        n.send();
                    if ("undefined" != typeof XDomainRequest)
                        return n = new XDomainRequest,
                        "http:" === document.location.protocol && (t = t.replace("https://", "http://")),
                        n.open("GET", t),
                        n.onload = function(t) {
                            return function() {
                                return "function" == typeof e ? e(n) : void 0
                            }
                        }(this),
                        n.onerror = function(t) {
                            return function(t) {
                                return "function" == typeof r ? r(n) : void 0
                            }
                        }(this),
                        n.onprogress = function() {
                            return {}
                        }
                        ,
                        n.ontimeout = function() {
                            return {}
                        }
                }
            },
            spreadToInnerIframes: function(t) {
                var e, r, n, i, o;
                for (r = document.getElementsByTagName("iframe"),
                o = [],
                n = 0,
                i = r.length; i > n; n++)
                    e = r[n],
                    o.push(this.spread(t, e));
                return o
            },
            spread: function(t, e) {
                var r;
                return r = null != e ? e.contentWindow : void 0,
                r ? r.postMessage(t, "*") : void 0
            },
            assignObj: function(t, e) {
                var r, n;
                for (r in e)
                    n = e[r],
                    t[r] = n;
                return t
            },
            getDocumentReferrer: function(t) {
                var e, r;
                return r = t ? t : document.gioreferrer || document.referrer,
                (null != (e = window.vds) ? e.pathCaseSensitive : void 0) ? r : r.toLowerCase()
            },
            isVaildIdentifier: function(t) {
                var e;
                return null != t && "string" == typeof t && t.constructor === String && 0 < t.length && t.length <= 50 && (e = /^[a-zA-Z_][a-zA-Z0-9_:]*$/,
                e.test(t)) ? !0 : !1
            },
            vaildEventNumber: function(t) {
                return null == t || "number" != typeof t || isNaN(t) ? null : t % 1 !== 0 ? parseFloat(t.toFixed(2)) : t
            },
            getOwnPropertyNames: function(t) {
                var e, r, n, i;
                if (Object.getOwnPropertyNames)
                    return Object.getOwnPropertyNames(t);
                for (e = [],
                r = 0,
                i = t.length; i > r; r++)
                    n = t[r],
                    e.push(n);
                return e
            },
            vaildVar: function(t) {
                var e, r, n, i;
                if (n = null,
                null != t)
                    for (r in t)
                        if (i = t[r],
                        null == n && (n = {}),
                        e = r.length <= 50 ? r : r.slice(0, 50),
                        null != i && "string" == typeof i && i.constructor === String && (i = i.length <= 1e3 ? i : i.slice(0, 1e3)),
                        n[e] = i,
                        this.getOwnPropertyNames(n).length >= 100)
                            return n;
                return n
            },
            isSpreadPostMessage: function() {
                var t, e;
                if (e = null,
                parent !== window)
                    try {
                        e = parent.location.href
                    } catch (r) {
                        t = r,
                        e = document.referrer
                    }
                else
                    parent === self && (e = location.href);
                return /.*growingio.*\/projects\/.*\/circle\/.*/.test(e)
            },
            processText: function(t) {
                return null == window.vds.textEncryptFunc ? t : null != t ? window.vds.textEncryptFunc.call(this, t) : void 0
            },
            parseImpAttrs: function(t, e) {
                var r;
                if (null == e && (e = ","),
                !t)
                    return null;
                if (/^{.*}$/.test(t))
                    try {
                        return JSON.parse(t)
                    } catch (n) {
                        return console.warn("不符合规范的imp自定义变量对象"),
                        null
                    }
                return r = t.split(e).reduce(function(t, e) {
                    var r, n;
                    return r = e.split(":"),
                    2 === r.length && (n = r[0].trim(),
                    t[n] = r[1]),
                    t
                }, {}),
                0 === Object.keys(r).length && t && console.warn("imp自定义变量对象解析失败，请检查当前分隔符【" + e + "】是否合适。"),
                r
            },
            getManualImpInfo: function(t) {
                return function(t) {
                    var e, r, n, i, o, u, c, d, h, l, p, f;
                    if (r = null != (p = window.vds) ? p.impAttrSeparator : void 0,
                    !t.hasAttribute("data-gio-imp-track") || !t.getAttribute("data-gio-imp-track"))
                        return null;
                    u = t.getAttribute("data-gio-imp-track");
                    try {
                        if (o = {
                            n: u
                        },
                        f = a.parseImpAttrs(t.dataset.gioImpAttrs, r))
                            return o["var"] = f,
                            o;
                        for (n = t.attributes,
                        c = 0,
                        h = n.length; h > c; c++)
                            e = n[c],
                            l = e.name.match(/^data-gio-track-(.+)/),
                            l && (o["var"] || (o["var"] = {}),
                            d = l[1],
                            d = -1 !== d.indexOf("-") ? s(d) : d,
                            o["var"][d] = t.getAttribute(e.name));
                        return o
                    } catch (g) {
                        return i = g,
                        console.warn("半自动imp打点格式不正确")
                    }
                }
            }(this)
        },
        e.exports = a
    }
    , {
        "../vendor/cookie": 20,
        "./guid": 16,
        "./local_store": 17
    }],
    20: [function(t, e, r) {
        var n = t("./js.cookie.min.mjs")
          , i = /^(\.ac\.|\.br\.|\.co\.|\.com\.|\.edu\.|\.gov\.|\.org\.|\.net\.)/
          , o = function() {
            return ["", "localhost", "127.0.0.1"].indexOf(window.location.hostname) > -1 || ["http:", "https:"].indexOf(window.location.protocol) < 0
        }
          , s = function() {
            return navigator.userAgent.indexOf("Electron") > -1
        }
          , a = function(t) {
            var e = !1;
            navigator.cookieEnabled && (e = !0);
            try {
                n.set("gioCookie", "yes", {
                    expires: 1,
                    domain: t,
                    path: "/"
                }),
                e = !!n.get("gioCookie", {
                    domain: t
                }),
                n.remove("gioCookie", {
                    domain: t
                })
            } catch (r) {
                e = !1
            }
            return e
        }
          , u = function() {
            var t = window.location.hostname
              , e = [];
            try {
                var r = t.split(".")
                  , n = r[r.length - 1];
                if ("localhost" !== t && (Number.isNaN(Number(n)) || Number(n) < 0 || Number(n) > 255)) {
                    var o = "." + r.slice(-2).join(".");
                    i.test(o) || e.push(o),
                    e.push(r.slice(-3).join("."))
                }
                e.push(t)
            } catch (s) {
                e = [t]
            }
            var u = "";
            return e.some(function(t) {
                return a(t) ? (u = t,
                !0) : !1
            }),
            u
        }
          , c = s() || o() ? "" : u()
          , d = n.withAttributes({
            path: "/",
            domain: c
        })
          , h = {
            getItem: n.get,
            setItem: function(t, e, r) {
                d.set(t, e, {
                    expires: new Date(+Date.now() + r)
                })
            },
            removeItem: d.remove,
            hasItem: !!d.get,
            getKeys: function() {
                return Object.keys(d.get())
            }
        }
          , l = function() {
            function t() {
                var t = this;
                this.getItem = function(e) {
                    return t.data[e]
                }
                ,
                this.setItem = function(e, r) {
                    t.data[e] = r,
                    !t.keys.indexOf(e) > -1 && t.keys.push(e),
                    t.length = t.keys.length
                }
                ,
                this.removeItem = function(e) {
                    t.data[e] = void 0,
                    t.keys = t.keys.filter(function(t) {
                        return t !== e
                    }),
                    t.length = t.keys.length
                }
                ,
                this.getKeys = function(e) {
                    return Number.isInteger(e) && e >= 0 ? t.keys[e] : void 0
                }
                ,
                this.clear = function() {
                    t.keys = [],
                    t.data = {},
                    t.length = t.keys.length
                }
                ,
                this.keys = [],
                this.data = {},
                this.length = this.keys.length
            }
            return t
        }()
          , p = function(t) {
            try {
                var e = window[t]
                  , r = "__storage_test__";
                return e.setItem(r, r),
                e.removeItem(r),
                !0
            } catch (n) {
                return !1
            }
        }
          , f = "cookie";
        f = o() || s() || !c ? p("localStorage") ? "local" : "memory" : "cookie";
        var g = new l
          , v = "local" === f ? window.localStorage : g
          , m = {
            getItem: function(t) {
                var e = v.getItem(t) || "";
                try {
                    var r = JSON.parse(e);
                    return r.expiredAt > Date.now() ? r.value : null
                } catch (n) {
                    return null
                }
            },
            setItem: function(t, e, r) {
                var n = r ? new Date(+Date.now() + r).getTime() : new Date(9999,12).getTime();
                v.setItem(t, JSON.stringify({
                    value: e,
                    expiredAt: n
                }))
            },
            removeItem: function(t) {
                v.removeItem(t)
            },
            hasItem: function(t) {
                return t && -1 !== this.getKeys().indexOf(t)
            },
            getKeys: function() {
                for (var t = [], e = 0; e < v.length; e++)
                    t.push("local" === f ? v.key(e) : v.getKeys(e));
                return t
            }
        }
          , w = {
            getItem: function(t) {
                return ["local", "memory"].indexOf(f) > -1 ? m.getItem(t) : h.getItem(t)
            },
            hasItem: function(t) {
                return ["local", "memory"].indexOf(f) > -1 ? m.hasItem(t) : h.hasItem(t)
            },
            getKeys: function() {
                return ["local", "memory"].indexOf(f) > -1 ? m.getKeys() : h.getKeys()
            },
            setItem: function(t, e, r) {
                ["local", "memory"].indexOf(f) > -1 ? m.setItem(t, e, r) : h.setItem(t, e, r)
            },
            removeItem: function(t, e) {
                ["local", "memory"].indexOf(f) > -1 ? m.removeItem(t) : h.removeItem(t, e)
            }
        };
        e.exports = w
    }
    , {
        "./js.cookie.min.mjs": 22
    }],
    21: [function(t, e, r) {
        !function() {
            "use strict";
            function t(t) {
                this.time = t.time,
                this.target = t.target,
                this.rootBounds = t.rootBounds,
                this.boundingClientRect = t.boundingClientRect,
                this.intersectionRect = t.intersectionRect || u(),
                this.isIntersecting = !!t.intersectionRect;
                var e = this.boundingClientRect
                  , r = e.width * e.height
                  , n = this.intersectionRect
                  , i = n.width * n.height;
                this.intersectionRatio = r ? Number((i / r).toFixed(4)) : this.isIntersecting ? 1 : 0
            }
            function e(t, e) {
                var r = e || {};
                if ("function" != typeof t)
                    throw new Error("callback must be a function");
                if (r.root && 1 != r.root.nodeType)
                    throw new Error("root must be an Element");
                this._checkForIntersections = n(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT),
                this._callback = t,
                this._observationTargets = [],
                this._queuedEntries = [],
                this._rootMarginValues = this._parseRootMargin(r.rootMargin),
                this.thresholds = this._initThresholds(r.threshold),
                this.root = r.root || null,
                this.rootMargin = this._rootMarginValues.map(function(t) {
                    return t.value + t.unit
                }).join(" ")
            }
            function r() {
                return window.performance && performance.now && performance.now()
            }
            function n(t, e) {
                var r = null;
                return function() {
                    r || (r = setTimeout(function() {
                        t(),
                        r = null
                    }, e))
                }
            }
            function i(t, e, r, n) {
                "function" == typeof t.addEventListener ? t.addEventListener(e, r, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, r)
            }
            function o(t, e, r, n) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(e, r, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, r)
            }
            function s(t, e) {
                var r = Math.max(t.top, e.top)
                  , n = Math.min(t.bottom, e.bottom)
                  , i = Math.max(t.left, e.left)
                  , o = Math.min(t.right, e.right)
                  , s = o - i
                  , a = n - r;
                return s >= 0 && a >= 0 && {
                    top: r,
                    bottom: n,
                    left: i,
                    right: o,
                    width: s,
                    height: a
                }
            }
            function a(t) {
                var e;
                try {
                    e = t.getBoundingClientRect()
                } catch (r) {}
                return e ? (e.width && e.height || (e = {
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    left: e.left,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }),
                e) : u()
            }
            function u() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }
            function c(t, e) {
                for (var r = e; r; ) {
                    if (r == t)
                        return !0;
                    r = d(r)
                }
                return !1
            }
            function d(t) {
                var e = t.parentNode;
                return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
            }
            if ("object" == typeof window) {
                if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                    return void ("isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function() {
                            return this.intersectionRatio > 0
                        }
                    }));
                var h = window.document
                  , l = [];
                e.prototype.THROTTLE_TIMEOUT = 100,
                e.prototype.POLL_INTERVAL = null,
                e.prototype.USE_MUTATION_OBSERVER = !0,
                e.prototype.observe = function(t) {
                    var e = this._observationTargets.some(function(e) {
                        return e.element == t
                    });
                    if (!e) {
                        if (!t || 1 != t.nodeType)
                            throw new Error("target must be an Element");
                        this._registerInstance(),
                        this._observationTargets.push({
                            element: t,
                            entry: null
                        }),
                        this._monitorIntersections(),
                        this._checkForIntersections()
                    }
                }
                ,
                e.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter(function(e) {
                        return e.element != t
                    }),
                    this._observationTargets.length || (this._unmonitorIntersections(),
                    this._unregisterInstance())
                }
                ,
                e.prototype.disconnect = function() {
                    this._observationTargets = [],
                    this._unmonitorIntersections(),
                    this._unregisterInstance()
                }
                ,
                e.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                    t
                }
                ,
                e.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]),
                    e.sort().filter(function(t, e, r) {
                        if ("number" != typeof t || isNaN(t) || 0 > t || t > 1)
                            throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== r[e - 1]
                    })
                }
                ,
                e.prototype._parseRootMargin = function(t) {
                    var e = t || "0px"
                      , r = e.split(/\s+/).map(function(t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e)
                            throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return r[1] = r[1] || r[0],
                    r[2] = r[2] || r[0],
                    r[3] = r[3] || r[1],
                    r
                }
                ,
                e.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0,
                    this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(window, "resize", this._checkForIntersections, !0),
                    i(h, "scroll", this._checkForIntersections, !0),
                    this.USE_MUTATION_OBSERVER && "MutationObserver"in window && (this._domObserver = new MutationObserver(this._checkForIntersections),
                    this._domObserver.observe(h, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }
                ,
                e.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1,
                    clearInterval(this._monitoringInterval),
                    this._monitoringInterval = null,
                    o(window, "resize", this._checkForIntersections, !0),
                    o(h, "scroll", this._checkForIntersections, !0),
                    this._domObserver && (this._domObserver.disconnect(),
                    this._domObserver = null))
                }
                ,
                e.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom()
                      , n = e ? this._getRootRect() : u();
                    this._observationTargets.forEach(function(i) {
                        var o = i.element
                          , s = a(o)
                          , u = this._rootContainsTarget(o)
                          , c = i.entry
                          , d = e && u && this._computeTargetAndRootIntersection(o, n)
                          , h = i.entry = new t({
                            time: r(),
                            target: o,
                            boundingClientRect: s,
                            rootBounds: n,
                            intersectionRect: d
                        });
                        c ? e && u ? this._hasCrossedThreshold(c, h) && this._queuedEntries.push(h) : c && c.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                    }, this),
                    this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }
                ,
                e.prototype._computeTargetAndRootIntersection = function(t, e) {
                    if ("none" != window.getComputedStyle(t).display) {
                        for (var r = a(t), n = r, i = d(t), o = !1; !o; ) {
                            var u = null
                              , c = 1 == i.nodeType ? window.getComputedStyle(i) : {};
                            if ("none" == c.display)
                                return;
                            if (i == this.root || i == h ? (o = !0,
                            u = e) : i != h.body && i != h.documentElement && "visible" != c.overflow && (u = a(i)),
                            u && (n = s(u, n),
                            !n))
                                break;
                            i = d(i)
                        }
                        return n
                    }
                }
                ,
                e.prototype._getRootRect = function() {
                    var t;
                    if (this.root)
                        t = a(this.root);
                    else {
                        var e = h.documentElement
                          , r = h.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: e.clientWidth || r.clientWidth,
                            width: e.clientWidth || r.clientWidth,
                            bottom: e.clientHeight || r.clientHeight,
                            height: e.clientHeight || r.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }
                ,
                e.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map(function(e, r) {
                        return "px" == e.unit ? e.value : e.value * (r % 2 ? t.width : t.height) / 100
                    })
                      , r = {
                        top: t.top - e[0],
                        right: t.right + e[1],
                        bottom: t.bottom + e[2],
                        left: t.left - e[3]
                    };
                    return r.width = r.right - r.left,
                    r.height = r.bottom - r.top,
                    r
                }
                ,
                e.prototype._hasCrossedThreshold = function(t, e) {
                    var r = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                      , n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (r !== n)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var o = this.thresholds[i];
                            if (o == r || o == n || r > o != n > o)
                                return !0
                        }
                }
                ,
                e.prototype._rootIsInDom = function() {
                    return !this.root || c(h, this.root)
                }
                ,
                e.prototype._rootContainsTarget = function(t) {
                    return c(this.root || h, t)
                }
                ,
                e.prototype._registerInstance = function() {
                    l.indexOf(this) < 0 && l.push(this)
                }
                ,
                e.prototype._unregisterInstance = function() {
                    var t = l.indexOf(this);
                    -1 != t && l.splice(t, 1)
                }
                ,
                window.IntersectionObserver = e,
                window.IntersectionObserverEntry = t
            }
        }()
    }
    , {}],
    22: [function(t, e, r) {
        function n(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                    t[n] = r[n]
            }
            return t
        }
        var i = function o(t, e) {
            function r(r, i, o) {
                if ("undefined" != typeof document) {
                    "number" == typeof (o = n({}, e, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                    o.expires && (o.expires = o.expires.toUTCString()),
                    r = encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                    var s = "";
                    for (var a in o)
                        o[a] && (s += "; " + a,
                        !0 !== o[a] && (s += "=" + o[a].split(";")[0]));
                    return document.cookie = r + "=" + t.write(i, r) + s
                }
            }
            return Object.create({
                set: r,
                get: function(e) {
                    if ("undefined" != typeof document && (!arguments.length || e)) {
                        for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < r.length; i++) {
                            var o = r[i].split("=")
                              , s = o.slice(1).join("=");
                            try {
                                var a = decodeURIComponent(o[0]);
                                if (n[a] = t.read(s, a),
                                e === a)
                                    break
                            } catch (e) {}
                        }
                        return e ? n[e] : n
                    }
                },
                remove: function(t, e) {
                    r(t, "", n({}, e, {
                        expires: -1
                    }))
                },
                withAttributes: function(t) {
                    return o(this.converter, n({}, this.attributes, t))
                },
                withConverter: function(t) {
                    return o(n({}, this.converter, t), this.attributes)
                }
            }, {
                attributes: {
                    value: Object.freeze(e)
                },
                converter: {
                    value: Object.freeze(t)
                }
            })
        }({
            read: function(t) {
                return '"' === t[0] && (t = t.slice(1, -1)),
                t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function(t) {
                return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        }, {
            path: "/"
        });
        e.exports = i
    }
    , {}],
    23: [function(require, module, exports) {
        "object" != typeof JSON && (JSON = {}),
        function() {
            "use strict";
            function f(t) {
                return 10 > t ? "0" + t : t
            }
            function this_value() {
                return this.valueOf()
            }
            function quote(t) {
                return rx_escapable.lastIndex = 0,
                rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t) {
                    var e = meta[t];
                    return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + t + '"'
            }
            function str(t, e) {
                var r, n, i, o, s, a = gap, u = e[t];
                switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)),
                "function" == typeof rep && (u = rep.call(e, t, u)),
                typeof u) {
                case "string":
                    return quote(u);
                case "number":
                    return isFinite(u) ? String(u) : "null";
                case "boolean":
                case "null":
                    return String(u);
                case "object":
                    if (!u)
                        return "null";
                    if (gap += indent,
                    s = [],
                    "[object Array]" === Object.prototype.toString.apply(u)) {
                        for (o = u.length,
                        r = 0; o > r; r += 1)
                            s[r] = str(r, u) || "null";
                        return i = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]",
                        gap = a,
                        i
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length,
                        r = 0; o > r; r += 1)
                            "string" == typeof rep[r] && (n = rep[r],
                            i = str(n, u),
                            i && s.push(quote(n) + (gap ? ": " : ":") + i));
                    else
                        for (n in u)
                            Object.prototype.hasOwnProperty.call(u, n) && (i = str(n, u),
                            i && s.push(quote(n) + (gap ? ": " : ":") + i));
                    return i = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}",
                    gap = a,
                    i
                }
            }
            var rx_one = /^[\],:{}\s]*$/
              , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
              , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
              , rx_four = /(?:^|:|,)(?:\s*\[)+/g
              , rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
              , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }
            ,
            Boolean.prototype.toJSON = this_value,
            Number.prototype.toJSON = this_value,
            String.prototype.toJSON = this_value);
            var gap, indent, meta, rep;
            "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            JSON.stringify = function(t, e, r) {
                var n;
                if (gap = "",
                indent = "",
                "number" == typeof r)
                    for (n = 0; r > n; n += 1)
                        indent += " ";
                else
                    "string" == typeof r && (indent = r);
                if (rep = e,
                e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                    throw new Error("JSON.stringify");
                return str("", {
                    "": t
                })
            }
            ),
            "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(t, e) {
                    var r, n, i = t[e];
                    if (i && "object" == typeof i)
                        for (r in i)
                            Object.prototype.hasOwnProperty.call(i, r) && (n = walk(i, r),
                            void 0 !== n ? i[r] = n : delete i[r]);
                    return reviver.call(t, e, i)
                }
                var j;
                if (text = String(text),
                rx_dangerous.lastIndex = 0,
                rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })),
                rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                    return j = eval("(" + text + ")"),
                    "function" == typeof reviver ? walk({
                        "": j
                    }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
            )
        }()
    }
    , {}],
    24: [function(t, e, r) {
        var n = function() {
            var t = String.fromCharCode
              , e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$"
              , r = {
                compressToUTF16: function(e) {
                    return null == e ? "" : r._compress(e, 15, function(e) {
                        return t(e + 32)
                    }) + " "
                },
                compressToUint8Array: function(t) {
                    for (var e = r.compress(t), n = new Uint8Array(2 * e.length), i = 0, o = e.length; o > i; i++) {
                        var s = e.charCodeAt(i);
                        n[2 * i] = s >>> 8,
                        n[2 * i + 1] = s % 256
                    }
                    return n
                },
                compressToEncodedURIComponent: function(t) {
                    return null == t ? "" : r._compress(t, 6, function(t) {
                        return e.charAt(t)
                    })
                },
                compress: function(e) {
                    return r._compress(e, 16, function(e) {
                        return t(e)
                    })
                },
                _compress: function(t, e, r) {
                    if (null == t)
                        return "";
                    var n, i, o, s = {}, a = {}, u = "", c = "", d = "", h = 2, l = 3, p = 2, f = [], g = 0, v = 0;
                    for (o = 0; o < t.length; o += 1)
                        if (u = t.charAt(o),
                        Object.prototype.hasOwnProperty.call(s, u) || (s[u] = l++,
                        a[u] = !0),
                        c = d + u,
                        Object.prototype.hasOwnProperty.call(s, c))
                            d = c;
                        else {
                            if (Object.prototype.hasOwnProperty.call(a, d)) {
                                if (d.charCodeAt(0) < 256) {
                                    for (n = 0; p > n; n++)
                                        g <<= 1,
                                        v == e - 1 ? (v = 0,
                                        f.push(r(g)),
                                        g = 0) : v++;
                                    for (i = d.charCodeAt(0),
                                    n = 0; 8 > n; n++)
                                        g = g << 1 | 1 & i,
                                        v == e - 1 ? (v = 0,
                                        f.push(r(g)),
                                        g = 0) : v++,
                                        i >>= 1
                                } else {
                                    for (i = 1,
                                    n = 0; p > n; n++)
                                        g = g << 1 | i,
                                        v == e - 1 ? (v = 0,
                                        f.push(r(g)),
                                        g = 0) : v++,
                                        i = 0;
                                    for (i = d.charCodeAt(0),
                                    n = 0; 16 > n; n++)
                                        g = g << 1 | 1 & i,
                                        v == e - 1 ? (v = 0,
                                        f.push(r(g)),
                                        g = 0) : v++,
                                        i >>= 1
                                }
                                h--,
                                0 == h && (h = Math.pow(2, p),
                                p++),
                                delete a[d]
                            } else
                                for (i = s[d],
                                n = 0; p > n; n++)
                                    g = g << 1 | 1 & i,
                                    v == e - 1 ? (v = 0,
                                    f.push(r(g)),
                                    g = 0) : v++,
                                    i >>= 1;
                            h--,
                            0 == h && (h = Math.pow(2, p),
                            p++),
                            s[c] = l++,
                            d = String(u)
                        }
                    if ("" !== d) {
                        if (Object.prototype.hasOwnProperty.call(a, d)) {
                            if (d.charCodeAt(0) < 256) {
                                for (n = 0; p > n; n++)
                                    g <<= 1,
                                    v == e - 1 ? (v = 0,
                                    f.push(r(g)),
                                    g = 0) : v++;
                                for (i = d.charCodeAt(0),
                                n = 0; 8 > n; n++)
                                    g = g << 1 | 1 & i,
                                    v == e - 1 ? (v = 0,
                                    f.push(r(g)),
                                    g = 0) : v++,
                                    i >>= 1
                            } else {
                                for (i = 1,
                                n = 0; p > n; n++)
                                    g = g << 1 | i,
                                    v == e - 1 ? (v = 0,
                                    f.push(r(g)),
                                    g = 0) : v++,
                                    i = 0;
                                for (i = d.charCodeAt(0),
                                n = 0; 16 > n; n++)
                                    g = g << 1 | 1 & i,
                                    v == e - 1 ? (v = 0,
                                    f.push(r(g)),
                                    g = 0) : v++,
                                    i >>= 1
                            }
                            h--,
                            0 == h && (h = Math.pow(2, p),
                            p++),
                            delete a[d]
                        } else
                            for (i = s[d],
                            n = 0; p > n; n++)
                                g = g << 1 | 1 & i,
                                v == e - 1 ? (v = 0,
                                f.push(r(g)),
                                g = 0) : v++,
                                i >>= 1;
                        h--,
                        0 == h && (h = Math.pow(2, p),
                        p++)
                    }
                    for (i = 2,
                    n = 0; p > n; n++)
                        g = g << 1 | 1 & i,
                        v == e - 1 ? (v = 0,
                        f.push(r(g)),
                        g = 0) : v++,
                        i >>= 1;
                    for (; ; ) {
                        if (g <<= 1,
                        v == e - 1) {
                            f.push(r(g));
                            break
                        }
                        v++
                    }
                    return f.join("")
                }
            };
            return r
        }();
        e.exports = n
    }
    , {}],
    25: [function(t, e, r) {
        window.MutationObserver = window.MutationObserver || function(t) {
            "use strict";
            function e(t) {
                this._watched = [],
                this._listener = t
            }
            function r(t) {
                !function r() {
                    var n = t.takeRecords();
                    n.length && t._listener(n, t),
                    t._timeout = setTimeout(r, e._period)
                }()
            }
            function n(e) {
                var r = {
                    type: null,
                    target: null,
                    addedNodes: [],
                    removedNodes: [],
                    previousSibling: null,
                    nextSibling: null,
                    attributeName: null,
                    attributeNamespace: null,
                    oldValue: null
                };
                for (var n in e)
                    g(r, n) && e[n] !== t && (r[n] = e[n]);
                return r
            }
            function i(t, e) {
                var r = c(t, e);
                return function(i) {
                    var o, s = i.length;
                    e.charData && 3 === t.nodeType && t.nodeValue !== r.charData && i.push(new n({
                        type: "characterData",
                        target: t,
                        oldValue: r.charData
                    })),
                    e.attr && r.attr && a(i, t, r.attr, e.afilter),
                    (e.kids || e.descendents) && (o = u(i, t, r, e)),
                    (o || i.length !== s) && (r = c(t, e))
                }
            }
            function o(t, e) {
                return e.value
            }
            function s(t, e) {
                return "style" !== e.name ? e.value : t.style.cssText
            }
            function a(t, e, r, i) {
                for (var o, s, a = {}, u = e.attributes, c = u.length; c--; )
                    o = u[c],
                    s = o.name,
                    (!i || g(i, s)) && (w(e, o) !== r[s] && t.push(n({
                        type: "attributes",
                        target: e,
                        attributeName: s,
                        oldValue: r[s],
                        attributeNamespace: o.namespaceURI
                    })),
                    a[s] = !0);
                for (s in r)
                    a[s] || t.push(n({
                        target: e,
                        type: "attributes",
                        attributeName: s,
                        oldValue: r[s]
                    }))
            }
            function u(e, r, i, o) {
                function s(t, r, i, s, c) {
                    for (var d, h, l, p = t.length - 1, f = -~((p - c) / 2); l = t.pop(); )
                        d = i[l.i],
                        h = s[l.j],
                        o.kids && f && Math.abs(l.i - l.j) >= p && (e.push(n({
                            type: "childList",
                            target: r,
                            addedNodes: [d],
                            removedNodes: [d],
                            nextSibling: d.nextSibling,
                            previousSibling: d.previousSibling
                        })),
                        f--),
                        o.attr && h.attr && a(e, d, h.attr, o.afilter),
                        o.charData && 3 === d.nodeType && d.nodeValue !== h.charData && e.push(n({
                            type: "characterData",
                            target: d,
                            oldValue: h.charData
                        })),
                        o.descendents && u(d, h)
                }
                function u(r, i) {
                    for (var l, p, g, v, m, w, b, y = r.childNodes, _ = i.kids, I = y.length, S = _ ? _.length : 0, O = 0, C = 0, N = 0; I > C || S > N; )
                        w = y[C],
                        m = _[N],
                        b = m && m.node,
                        w === b ? (o.attr && m.attr && a(e, w, m.attr, o.afilter),
                        o.charData && m.charData !== t && w.nodeValue !== m.charData && e.push(n({
                            type: "characterData",
                            target: w,
                            oldValue: m.charData
                        })),
                        p && s(p, r, y, _, O),
                        o.descendents && (w.childNodes.length || m.kids && m.kids.length) && u(w, m),
                        C++,
                        N++) : (c = !0,
                        l || (l = {},
                        p = []),
                        w && (l[g = h(w)] || (l[g] = !0,
                        -1 === (v = d(_, w, N)) ? o.kids && (e.push(n({
                            type: "childList",
                            target: r,
                            addedNodes: [w],
                            nextSibling: w.nextSibling,
                            previousSibling: w.previousSibling
                        })),
                        O++) : p.push({
                            i: C,
                            j: v
                        })),
                        C++),
                        b && b !== y[C] && (l[g = h(b)] || (l[g] = !0,
                        -1 === (v = f(y, b, C)) ? o.kids && (e.push(n({
                            type: "childList",
                            target: i.node,
                            removedNodes: [b],
                            nextSibling: _[N + 1],
                            previousSibling: _[N - 1]
                        })),
                        O--) : p.push({
                            i: v,
                            j: N
                        })),
                        N++));
                    p && s(p, r, y, _, O)
                }
                var c;
                return u(r, i),
                c
            }
            function c(t, e) {
                var r = !0;
                return function n(t) {
                    var i = {
                        node: t
                    };
                    return !e.charData || 3 !== t.nodeType && 8 !== t.nodeType ? (e.attr && r && 1 === t.nodeType && (i.attr = p(t.attributes, function(r, n) {
                        return (!e.afilter || e.afilter[n.name]) && (r[n.name] = w(t, n)),
                        r
                    }, {})),
                    r && (e.kids || e.charData || e.attr && e.descendents) && (i.kids = l(t.childNodes, n)),
                    r = e.descendents) : i.charData = t.nodeValue,
                    i
                }(t)
            }
            function d(t, e, r) {
                return f(t, e, r, v("node"))
            }
            function h(t) {
                try {
                    return t.id || (t[y] = t[y] || b++)
                } catch (e) {
                    try {
                        return t.nodeValue
                    } catch (r) {
                        return b++
                    }
                }
            }
            function l(t, e) {
                for (var r = [], n = 0; n < t.length; n++)
                    r[n] = e(t[n], n, t);
                return r
            }
            function p(t, e, r) {
                for (var n = 0; n < t.length; n++)
                    r = e(r, t[n], n, t);
                return r
            }
            function f(t, e, r, n) {
                for (; r < t.length; r++)
                    if ((n ? t[r][n] : t[r]) === e)
                        return r;
                return -1
            }
            function g(e, r) {
                return e[r] !== t
            }
            function v(t) {
                return t
            }
            e._period = 30,
            e.prototype = {
                observe: function(t, e) {
                    for (var n = {
                        attr: !!(e.attributes || e.attributeFilter || e.attributeOldValue),
                        kids: !!e.childList,
                        descendents: !!e.subtree,
                        charData: !(!e.characterData && !e.characterDataOldValue)
                    }, o = this._watched, s = 0; s < o.length; s++)
                        o[s].tar === t && o.splice(s, 1);
                    e.attributeFilter && (n.afilter = p(e.attributeFilter, function(t, e) {
                        return t[e] = !0,
                        t
                    }, {})),
                    o.push({
                        tar: t,
                        fn: i(t, n)
                    }),
                    this._timeout || r(this)
                },
                takeRecords: function() {
                    for (var t = [], e = this._watched, r = 0; r < e.length; r++)
                        e[r].fn(t);
                    return t
                },
                disconnect: function() {
                    this._watched = [],
                    clearTimeout(this._timeout),
                    this._timeout = null
                }
            };
            var m = document.createElement("i");
            m.style.top = 0,
            m = "null" != m.attributes.style.value;
            var w = m ? o : s
              , b = 1
              , y = "mo_id";
            return e
        }(void 0)
    }
    , {}],
    26: [function(t, e, r) {
        function n(t) {
            return '"' + t.replace(/"/, '\\"') + '"'
        }
        function i(t) {
            if ("string" != typeof t)
                throw Error("Invalid request opion. attribute must be a non-zero length string.");
            if (t = t.trim(),
            !t)
                throw Error("Invalid request opion. attribute must be a non-zero length string.");
            if (!t.match(y))
                throw Error("Invalid request option. invalid attribute name: " + t);
            return t
        }
        function o(t) {
            if (!t.trim().length)
                throw Error("Invalid request option: elementAttributes must contain at least one attribute.");
            for (var e = {}, r = {}, n = t.split(/\s+/), o = 0; o < n.length; o++) {
                var s = n[o];
                if (s) {
                    var s = i(s)
                      , a = s.toLowerCase();
                    if (e[a])
                        throw Error("Invalid request option: observing multiple case variations of the same attribute is not supported.");
                    r[s] = !0,
                    e[a] = !0
                }
            }
            return Object.keys(r)
        }
        function s(t) {
            var e = {};
            return t.forEach(function(t) {
                t.qualifiers.forEach(function(t) {
                    e[t.attrName] = !0
                })
            }),
            Object.keys(e)
        }
        var a = this.__extends || function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]);
            r.prototype = e.prototype,
            t.prototype = new r
        }
          , u = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        if (!u)
            throw console && console.error("DOM Mutation Observers are required."),
            console && console.error("https://developer.mozilla.org/en-US/docs/DOM/MutationObserver"),
            Error("DOM Mutation Observers are required");
        var c, d = function() {
            function t() {
                this.nodes = [],
                this.values = []
            }
            return t.prototype.isIndex = function(t) {
                return +t === t >>> 0
            }
            ,
            t.prototype.nodeId = function(e) {
                var r = e[t.ID_PROP];
                return r || (r = e[t.ID_PROP] = t.nextId_++),
                r
            }
            ,
            t.prototype.set = function(t, e) {
                var r = this.nodeId(t);
                this.nodes[r] = t,
                this.values[r] = e
            }
            ,
            t.prototype.get = function(t) {
                var e = this.nodeId(t);
                return this.values[e]
            }
            ,
            t.prototype.has = function(t) {
                return this.nodeId(t)in this.nodes
            }
            ,
            t.prototype.remove = function(t) {
                var e = this.nodeId(t);
                this.nodes[e] = void 0,
                this.values[e] = void 0
            }
            ,
            t.prototype.keys = function() {
                var t = [];
                for (var e in this.nodes)
                    this.isIndex(e) && t.push(this.nodes[e]);
                return t
            }
            ,
            t.ID_PROP = "__mutation_summary_node_map_id__",
            t.nextId_ = 1,
            t
        }();
        !function(t) {
            t[t.STAYED_OUT = 0] = "STAYED_OUT",
            t[t.ENTERED = 1] = "ENTERED",
            t[t.STAYED_IN = 2] = "STAYED_IN",
            t[t.REPARENTED = 3] = "REPARENTED",
            t[t.REORDERED = 4] = "REORDERED",
            t[t.EXITED = 5] = "EXITED"
        }(c || (c = {}));
        var h = function() {
            function t(t, e, r, n, i, o, s, a) {
                void 0 === e && (e = !1),
                void 0 === r && (r = !1),
                void 0 === n && (n = !1),
                void 0 === i && (i = null),
                void 0 === o && (o = !1),
                void 0 === s && (s = null),
                void 0 === a && (a = null),
                this.node = t,
                this.childList = e,
                this.attributes = r,
                this.characterData = n,
                this.oldParentNode = i,
                this.added = o,
                this.attributeOldValues = s,
                this.characterDataOldValue = a,
                this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement,
                this.isCaseInsensitive && (this.isCaseInsensitive = "undefined" != typeof HTMLDocument ? this.node.ownerDocument instanceof HTMLDocument : this.node.ownerDocument instanceof Document)
            }
            return t.prototype.getAttributeOldValue = function(t) {
                return this.attributeOldValues ? (this.isCaseInsensitive && (t = t.toLowerCase()),
                this.attributeOldValues[t]) : void 0
            }
            ,
            t.prototype.getAttributeNamesMutated = function() {
                var t = [];
                if (!this.attributeOldValues)
                    return t;
                for (var e in this.attributeOldValues)
                    t.push(e);
                return t
            }
            ,
            t.prototype.attributeMutated = function(t, e) {
                this.attributes = !0,
                this.attributeOldValues = this.attributeOldValues || {},
                t in this.attributeOldValues || (this.attributeOldValues[t] = e)
            }
            ,
            t.prototype.characterDataMutated = function(t) {
                this.characterData || (this.characterData = !0,
                this.characterDataOldValue = t)
            }
            ,
            t.prototype.removedFromParent = function(t) {
                this.childList = !0,
                this.added || this.oldParentNode ? this.added = !1 : this.oldParentNode = t
            }
            ,
            t.prototype.insertedIntoParent = function() {
                this.childList = !0,
                this.added = !0
            }
            ,
            t.prototype.getOldParent = function() {
                if (this.childList) {
                    if (this.oldParentNode)
                        return this.oldParentNode;
                    if (this.added)
                        return null
                }
                return this.node.parentNode
            }
            ,
            t
        }()
          , l = function() {
            function t() {
                this.added = new d,
                this.removed = new d,
                this.maybeMoved = new d,
                this.oldPrevious = new d,
                this.moved = void 0
            }
            return t
        }()
          , p = function(t) {
            function e(e, r) {
                t.call(this),
                this.rootNode = e,
                this.reachableCache = void 0,
                this.wasReachableCache = void 0,
                this.anyParentsChanged = !1,
                this.anyAttributesChanged = !1,
                this.anyCharacterDataChanged = !1;
                for (var n = 0; n < r.length; n++) {
                    var i = r[n];
                    switch (i.type) {
                    case "childList":
                        this.anyParentsChanged = !0;
                        for (var o = 0; o < i.removedNodes.length; o++) {
                            var s = i.removedNodes[o];
                            this.getChange(s).removedFromParent(i.target)
                        }
                        for (var o = 0; o < i.addedNodes.length; o++) {
                            var s = i.addedNodes[o];
                            this.getChange(s).insertedIntoParent()
                        }
                        break;
                    case "attributes":
                        this.anyAttributesChanged = !0;
                        var a = this.getChange(i.target);
                        a.attributeMutated(i.attributeName, i.oldValue);
                        break;
                    case "characterData":
                        this.anyCharacterDataChanged = !0;
                        var a = this.getChange(i.target);
                        a.characterDataMutated(i.oldValue)
                    }
                }
            }
            return a(e, t),
            e.prototype.getChange = function(t) {
                var e = this.get(t);
                return e || (e = new h(t),
                this.set(t, e)),
                e
            }
            ,
            e.prototype.getOldParent = function(t) {
                var e = this.get(t);
                return e ? e.getOldParent() : t.parentNode
            }
            ,
            e.prototype.getIsReachable = function(t) {
                if (t === this.rootNode)
                    return !0;
                if (!t)
                    return !1;
                this.reachableCache = this.reachableCache || new d;
                var e = this.reachableCache.get(t);
                return void 0 === e && (e = this.getIsReachable(t.parentNode),
                this.reachableCache.set(t, e)),
                e
            }
            ,
            e.prototype.getWasReachable = function(t) {
                if (t === this.rootNode)
                    return !0;
                if (!t)
                    return !1;
                this.wasReachableCache = this.wasReachableCache || new d;
                var e = this.wasReachableCache.get(t);
                return void 0 === e && (e = this.getWasReachable(this.getOldParent(t)),
                this.wasReachableCache.set(t, e)),
                e
            }
            ,
            e.prototype.reachabilityChange = function(t) {
                return this.getIsReachable(t) ? this.getWasReachable(t) ? c.STAYED_IN : c.ENTERED : this.getWasReachable(t) ? c.EXITED : c.STAYED_OUT
            }
            ,
            e
        }(d)
          , f = function() {
            function t(t, e, r, n, i) {
                this.rootNode = t,
                this.mutations = e,
                this.selectors = r,
                this.calcReordered = n,
                this.calcOldPreviousSibling = i,
                this.treeChanges = new p(t,e),
                this.entered = [],
                this.exited = [],
                this.stayedIn = new d,
                this.visited = new d,
                this.childListChangeMap = void 0,
                this.characterDataOnly = void 0,
                this.matchCache = void 0,
                this.processMutations()
            }
            return t.prototype.processMutations = function() {
                if (this.treeChanges.anyParentsChanged || this.treeChanges.anyAttributesChanged)
                    for (var t = this.treeChanges.keys(), e = 0; e < t.length; e++)
                        this.visitNode(t[e], void 0)
            }
            ,
            t.prototype.visitNode = function(t, e) {
                if (!this.visited.has(t)) {
                    this.visited.set(t, !0);
                    var r = this.treeChanges.get(t)
                      , n = e;
                    if ((r && r.childList || void 0 == n) && (n = this.treeChanges.reachabilityChange(t)),
                    n !== c.STAYED_OUT) {
                        if (this.matchabilityChange(t),
                        n === c.ENTERED)
                            this.entered.push(t);
                        else if (n === c.EXITED)
                            this.exited.push(t),
                            this.ensureHasOldPreviousSiblingIfNeeded(t);
                        else if (n === c.STAYED_IN) {
                            var i = c.STAYED_IN;
                            r && r.childList && (r.oldParentNode !== t.parentNode ? (i = c.REPARENTED,
                            this.ensureHasOldPreviousSiblingIfNeeded(t)) : this.calcReordered && this.wasReordered(t) && (i = c.REORDERED)),
                            this.stayedIn.set(t, i)
                        }
                        if (n !== c.STAYED_IN)
                            for (var o = t.firstChild; o; o = o.nextSibling)
                                this.visitNode(o, n)
                    }
                }
            }
            ,
            t.prototype.ensureHasOldPreviousSiblingIfNeeded = function(t) {
                if (this.calcOldPreviousSibling) {
                    this.processChildlistChanges();
                    var e = t.parentNode
                      , r = this.treeChanges.get(t);
                    r && r.oldParentNode && (e = r.oldParentNode);
                    var n = this.childListChangeMap.get(e);
                    n || (n = new l,
                    this.childListChangeMap.set(e, n)),
                    n.oldPrevious.has(t) || n.oldPrevious.set(t, t.previousSibling)
                }
            }
            ,
            t.prototype.getChanged = function(t, e, r) {
                this.selectors = e,
                this.characterDataOnly = r;
                for (var n = 0; n < this.entered.length; n++) {
                    var i = this.entered[n]
                      , o = this.matchabilityChange(i);
                    (o === c.ENTERED || o === c.STAYED_IN) && t.added.push(i)
                }
                for (var s = this.stayedIn.keys(), n = 0; n < s.length; n++) {
                    var i = s[n]
                      , o = this.matchabilityChange(i);
                    if (o === c.ENTERED)
                        t.added.push(i);
                    else if (o === c.EXITED)
                        t.removed.push(i);
                    else if (o === c.STAYED_IN && (t.reparented || t.reordered)) {
                        var a = this.stayedIn.get(i);
                        t.reparented && a === c.REPARENTED ? t.reparented.push(i) : t.reordered && a === c.REORDERED && t.reordered.push(i)
                    }
                }
                for (var n = 0; n < this.exited.length; n++) {
                    var i = this.exited[n]
                      , o = this.matchabilityChange(i);
                    (o === c.EXITED || o === c.STAYED_IN) && t.removed.push(i)
                }
            }
            ,
            t.prototype.getOldParentNode = function(t) {
                var e = this.treeChanges.get(t);
                if (e && e.childList)
                    return e.oldParentNode ? e.oldParentNode : null;
                var r = this.treeChanges.reachabilityChange(t);
                if (r === c.STAYED_OUT || r === c.ENTERED)
                    throw Error("getOldParentNode requested on invalid node.");
                return t.parentNode
            }
            ,
            t.prototype.getOldPreviousSibling = function(t) {
                var e = t.parentNode
                  , r = this.treeChanges.get(t);
                r && r.oldParentNode && (e = r.oldParentNode);
                var n = this.childListChangeMap.get(e);
                if (!n)
                    throw Error("getOldPreviousSibling requested on invalid node.");
                return n.oldPrevious.get(t)
            }
            ,
            t.prototype.getOldAttribute = function(t, e) {
                var r = this.treeChanges.get(t);
                if (!r || !r.attributes)
                    throw Error("getOldAttribute requested on invalid node.");
                var n = r.getAttributeOldValue(e);
                if (void 0 === n)
                    throw Error("getOldAttribute requested for unchanged attribute name.");

                return n
            }
            ,
            t.prototype.attributeChangedNodes = function(t) {
                if (!this.treeChanges.anyAttributesChanged)
                    return {};
                var e, r;
                if (t) {
                    e = {},
                    r = {};
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        e[i] = !0,
                        r[i.toLowerCase()] = i
                    }
                }
                for (var o = {}, s = this.treeChanges.keys(), n = 0; n < s.length; n++) {
                    var a = s[n]
                      , u = this.treeChanges.get(a);
                    if (u.attributes && c.STAYED_IN === this.treeChanges.reachabilityChange(a) && c.STAYED_IN === this.matchabilityChange(a))
                        for (var d = a, h = u.getAttributeNamesMutated(), l = 0; l < h.length; l++) {
                            var i = h[l];
                            if (!e || e[i] || u.isCaseInsensitive && r[i]) {
                                var p = u.getAttributeOldValue(i);
                                p !== d.getAttribute(i) && (r && u.isCaseInsensitive && (i = r[i]),
                                o[i] = o[i] || [],
                                o[i].push(d))
                            }
                        }
                }
                return o
            }
            ,
            t.prototype.getOldCharacterData = function(t) {
                var e = this.treeChanges.get(t);
                if (!e || !e.characterData)
                    throw Error("getOldCharacterData requested on invalid node.");
                return e.characterDataOldValue
            }
            ,
            t.prototype.getCharacterDataChanged = function() {
                if (!this.treeChanges.anyCharacterDataChanged)
                    return [];
                for (var t = this.treeChanges.keys(), e = [], r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (c.STAYED_IN === this.treeChanges.reachabilityChange(n)) {
                        var i = this.treeChanges.get(n);
                        i.characterData && n.textContent != i.characterDataOldValue && e.push(n)
                    }
                }
                return e
            }
            ,
            t.prototype.computeMatchabilityChange = function(t, e) {
                this.matchCache || (this.matchCache = []),
                this.matchCache[t.uid] || (this.matchCache[t.uid] = new d);
                var r = this.matchCache[t.uid]
                  , n = r.get(e);
                return void 0 === n && (n = t.matchabilityChange(e, this.treeChanges.get(e)),
                r.set(e, n)),
                n
            }
            ,
            t.prototype.matchabilityChange = function(t) {
                var e = this;
                if (this.characterDataOnly)
                    switch (t.nodeType) {
                    case Node.COMMENT_NODE:
                    case Node.TEXT_NODE:
                        return c.STAYED_IN;
                    default:
                        return c.STAYED_OUT
                    }
                if (!this.selectors)
                    return c.STAYED_IN;
                if (t.nodeType !== Node.ELEMENT_NODE)
                    return c.STAYED_OUT;
                for (var r = t, n = this.selectors.map(function(t) {
                    return e.computeMatchabilityChange(t, r)
                }), i = c.STAYED_OUT, o = 0; i !== c.STAYED_IN && o < n.length; ) {
                    switch (n[o]) {
                    case c.STAYED_IN:
                        i = c.STAYED_IN;
                        break;
                    case c.ENTERED:
                        i = i === c.EXITED ? c.STAYED_IN : c.ENTERED;
                        break;
                    case c.EXITED:
                        i = i === c.ENTERED ? c.STAYED_IN : c.EXITED
                    }
                    o++
                }
                return i
            }
            ,
            t.prototype.getChildlistChange = function(t) {
                var e = this.childListChangeMap.get(t);
                return e || (e = new l,
                this.childListChangeMap.set(t, e)),
                e
            }
            ,
            t.prototype.processChildlistChanges = function() {
                function t(t, e) {
                    !t || n.oldPrevious.has(t) || n.added.has(t) || n.maybeMoved.has(t) || e && (n.added.has(e) || n.maybeMoved.has(e)) || n.oldPrevious.set(t, e)
                }
                if (!this.childListChangeMap) {
                    this.childListChangeMap = new d;
                    for (var e = 0; e < this.mutations.length; e++) {
                        var r = this.mutations[e];
                        if ("childList" == r.type && (this.treeChanges.reachabilityChange(r.target) === c.STAYED_IN || this.calcOldPreviousSibling)) {
                            for (var n = this.getChildlistChange(r.target), i = r.previousSibling, o = 0; o < r.removedNodes.length; o++) {
                                var s = r.removedNodes[o];
                                t(s, i),
                                n.added.has(s) ? n.added.remove(s) : (n.removed.set(s, !0),
                                n.maybeMoved.remove(s)),
                                i = s
                            }
                            t(r.nextSibling, i);
                            for (var o = 0; o < r.addedNodes.length; o++) {
                                var s = r.addedNodes[o];
                                n.removed.has(s) ? (n.removed.remove(s),
                                n.maybeMoved.set(s, !0)) : n.added.set(s, !0)
                            }
                        }
                    }
                }
            }
            ,
            t.prototype.wasReordered = function(t) {
                function e(t) {
                    if (!t)
                        return !1;
                    if (!s.maybeMoved.has(t))
                        return !1;
                    var e = s.moved.get(t);
                    return void 0 !== e ? e : (a.has(t) ? e = !0 : (a.set(t, !0),
                    e = n(t) !== r(t)),
                    a.has(t) ? (a.remove(t),
                    s.moved.set(t, e)) : e = s.moved.get(t),
                    e)
                }
                function r(t) {
                    var n = u.get(t);
                    if (void 0 !== n)
                        return n;
                    for (n = s.oldPrevious.get(t); n && (s.removed.has(n) || e(n)); )
                        n = r(n);
                    return void 0 === n && (n = t.previousSibling),
                    u.set(t, n),
                    n
                }
                function n(t) {
                    if (c.has(t))
                        return c.get(t);
                    for (var r = t.previousSibling; r && (s.added.has(r) || e(r)); )
                        r = r.previousSibling;
                    return c.set(t, r),
                    r
                }
                if (!this.treeChanges.anyParentsChanged)
                    return !1;
                this.processChildlistChanges();
                var i = t.parentNode
                  , o = this.treeChanges.get(t);
                o && o.oldParentNode && (i = o.oldParentNode);
                var s = this.childListChangeMap.get(i);
                if (!s)
                    return !1;
                if (s.moved)
                    return s.moved.get(t);
                s.moved = new d;
                var a = new d
                  , u = new d
                  , c = new d;
                return s.maybeMoved.keys().forEach(e),
                s.moved.get(t)
            }
            ,
            t
        }()
          , g = function() {
            function t(t, e) {
                var r = this;
                if (this.projection = t,
                this.added = [],
                this.removed = [],
                this.reparented = e.all || e.element || e.characterData ? [] : void 0,
                this.reordered = e.all ? [] : void 0,
                t.getChanged(this, e.elementFilter, e.characterData),
                e.all || e.attribute || e.attributeList) {
                    var n = e.attribute ? [e.attribute] : e.attributeList
                      , i = t.attributeChangedNodes(n);
                    e.attribute ? this.valueChanged = i[e.attribute] || [] : (this.attributeChanged = i,
                    e.attributeList && e.attributeList.forEach(function(t) {
                        r.attributeChanged.hasOwnProperty(t) || (r.attributeChanged[t] = [])
                    }))
                }
                if (e.all || e.characterData) {
                    var o = t.getCharacterDataChanged();
                    e.characterData ? this.valueChanged = o : this.characterDataChanged = o
                }
                this.reordered && (this.getOldPreviousSibling = t.getOldPreviousSibling.bind(t))
            }
            return t.prototype.getOldParentNode = function(t) {
                return this.projection.getOldParentNode(t)
            }
            ,
            t.prototype.getOldAttribute = function(t, e) {
                return this.projection.getOldAttribute(t, e)
            }
            ,
            t.prototype.getOldCharacterData = function(t) {
                return this.projection.getOldCharacterData(t)
            }
            ,
            t.prototype.getOldPreviousSibling = function(t) {
                return this.projection.getOldPreviousSibling(t)
            }
            ,
            t
        }()
          , v = /[a-zA-Z_]+/
          , m = /[a-zA-Z0-9_\-]+/
          , w = function() {
            function t() {}
            return t.prototype.matches = function(t) {
                if (null === t)
                    return !1;
                if (void 0 === this.attrValue)
                    return !0;
                if (!this.contains)
                    return this.attrValue == t;
                for (var e = t.split(" "), r = 0; r < e.length; r++)
                    if (this.attrValue === e[r])
                        return !0;
                return !1
            }
            ,
            t.prototype.toString = function() {
                return "class" === this.attrName && this.contains ? "." + this.attrValue : "id" !== this.attrName || this.contains ? this.contains ? "[" + this.attrName + "~=" + n(this.attrValue) + "]" : "attrValue"in this ? "[" + this.attrName + "=" + n(this.attrValue) + "]" : "[" + this.attrName + "]" : "#" + this.attrValue
            }
            ,
            t
        }()
          , b = function() {
            function t() {
                this.uid = t.nextUid++,
                this.qualifiers = []
            }
            return Object.defineProperty(t.prototype, "caseInsensitiveTagName", {
                get: function() {
                    return this.tagName.toUpperCase()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "selectorString", {
                get: function() {
                    return this.tagName + this.qualifiers.join("")
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.isMatching = function(e) {
                var r = e[t.matchesSelector];
                if (r)
                    return e[t.matchesSelector](this.selectorString);
                var n = e
                  , i = n.parentNode || n.document
                  , o = -1;
                if (null === i || "undefined" == typeof i)
                    return !1;
                for (var s = i.querySelectorAll(selector); s[++o] && s[o] != n; )
                    ;
                return !!s[o]
            }
            ,
            t.prototype.wasMatching = function(t, e, r) {
                if (!e || !e.attributes)
                    return r;
                var n = e.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                if ("*" !== n && n !== t.tagName)
                    return !1;
                for (var i = [], o = !1, s = 0; s < this.qualifiers.length; s++) {
                    var a = this.qualifiers[s]
                      , u = e.getAttributeOldValue(a.attrName);
                    i.push(u),
                    o = o || void 0 !== u
                }
                if (!o)
                    return r;
                for (var s = 0; s < this.qualifiers.length; s++) {
                    var a = this.qualifiers[s]
                      , u = i[s];
                    if (void 0 === u && (u = t.getAttribute(a.attrName)),
                    !a.matches(u))
                        return !1
                }
                return !0
            }
            ,
            t.prototype.matchabilityChange = function(t, e) {
                var r = this.isMatching(t);
                return r ? this.wasMatching(t, e, r) ? c.STAYED_IN : c.ENTERED : this.wasMatching(t, e, r) ? c.EXITED : c.STAYED_OUT
            }
            ,
            t.parseSelectors = function(e) {
                function r() {
                    i && (o && (i.qualifiers.push(o),
                    o = void 0),
                    a.push(i)),
                    i = new t
                }
                function n() {
                    o && i.qualifiers.push(o),
                    o = new w
                }
                for (var i, o, s, a = [], u = /\s/, c = "Invalid or unsupported selector syntax.", d = 1, h = 2, l = 3, p = 4, f = 5, g = 6, b = 7, y = 8, _ = 9, I = 10, S = 11, O = 12, C = 13, N = 14, x = d, E = 0; E < e.length; ) {
                    var T = e[E++];
                    switch (x) {
                    case d:
                        if (T.match(v)) {
                            r(),
                            i.tagName = T,
                            x = h;
                            break
                        }
                        if ("*" == T) {
                            r(),
                            i.tagName = "*",
                            x = l;
                            break
                        }
                        if ("." == T) {
                            r(),
                            n(),
                            i.tagName = "*",
                            o.attrName = "class",
                            o.contains = !0,
                            x = p;
                            break
                        }
                        if ("#" == T) {
                            r(),
                            n(),
                            i.tagName = "*",
                            o.attrName = "id",
                            x = p;
                            break
                        }
                        if ("[" == T) {
                            r(),
                            n(),
                            i.tagName = "*",
                            o.attrName = "",
                            x = g;
                            break
                        }
                        if (T.match(u))
                            break;
                        throw Error(c);
                    case h:
                        if (T.match(m)) {
                            i.tagName += T;
                            break
                        }
                        if ("." == T) {
                            n(),
                            o.attrName = "class",
                            o.contains = !0,
                            x = p;
                            break
                        }
                        if ("#" == T) {
                            n(),
                            o.attrName = "id",
                            x = p;
                            break
                        }
                        if ("[" == T) {
                            n(),
                            o.attrName = "",
                            x = g;
                            break
                        }
                        if (T.match(u)) {
                            x = N;
                            break
                        }
                        if ("," == T) {
                            x = d;
                            break
                        }
                        throw Error(c);
                    case l:
                        if ("." == T) {
                            n(),
                            o.attrName = "class",
                            o.contains = !0,
                            x = p;
                            break
                        }
                        if ("#" == T) {
                            n(),
                            o.attrName = "id",
                            x = p;
                            break
                        }
                        if ("[" == T) {
                            n(),
                            o.attrName = "",
                            x = g;
                            break
                        }
                        if (T.match(u)) {
                            x = N;
                            break
                        }
                        if ("," == T) {
                            x = d;
                            break
                        }
                        throw Error(c);
                    case p:
                        if (T.match(v)) {
                            o.attrValue = T,
                            x = f;
                            break
                        }
                        throw Error(c);
                    case f:
                        if (T.match(m)) {
                            o.attrValue += T;
                            break
                        }
                        if ("." == T) {
                            n(),
                            o.attrName = "class",
                            o.contains = !0,
                            x = p;
                            break
                        }
                        if ("#" == T) {
                            n(),
                            o.attrName = "id",
                            x = p;
                            break
                        }
                        if ("[" == T) {
                            n(),
                            x = g;
                            break
                        }
                        if (T.match(u)) {
                            x = N;
                            break
                        }
                        if ("," == T) {
                            x = d;
                            break
                        }
                        throw Error(c);
                    case g:
                        if (T.match(v)) {
                            o.attrName = T,
                            x = b;
                            break
                        }
                        if (T.match(u))
                            break;
                        throw Error(c);
                    case b:
                        if (T.match(m)) {
                            o.attrName += T;
                            break
                        }
                        if (T.match(u)) {
                            x = y;
                            break
                        }
                        if ("~" == T) {
                            o.contains = !0,
                            x = _;
                            break
                        }
                        if ("=" == T) {
                            o.attrValue = "",
                            x = S;
                            break
                        }
                        if ("]" == T) {
                            x = l;
                            break
                        }
                        throw Error(c);
                    case y:
                        if ("~" == T) {
                            o.contains = !0,
                            x = _;
                            break
                        }
                        if ("=" == T) {
                            o.attrValue = "",
                            x = S;
                            break
                        }
                        if ("]" == T) {
                            x = l;
                            break
                        }
                        if (T.match(u))
                            break;
                        throw Error(c);
                    case _:
                        if ("=" == T) {
                            o.attrValue = "",
                            x = S;
                            break
                        }
                        throw Error(c);
                    case I:
                        if ("]" == T) {
                            x = l;
                            break
                        }
                        if (T.match(u))
                            break;
                        throw Error(c);
                    case S:
                        if (T.match(u))
                            break;
                        if ('"' == T || "'" == T) {
                            s = T,
                            x = C;
                            break
                        }
                        o.attrValue += T,
                        x = O;
                        break;
                    case O:
                        if (T.match(u)) {
                            x = I;
                            break
                        }
                        if ("]" == T) {
                            x = l;
                            break
                        }
                        if ("'" == T || '"' == T)
                            throw Error(c);
                        o.attrValue += T;
                        break;
                    case C:
                        if (T == s) {
                            x = I;
                            break
                        }
                        o.attrValue += T;
                        break;
                    case N:
                        if (T.match(u))
                            break;
                        if ("," == T) {
                            x = d;
                            break
                        }
                        throw Error(c)
                    }
                }
                switch (x) {
                case d:
                case h:
                case l:
                case f:
                case N:
                    r();
                    break;
                default:
                    throw Error(c)
                }
                if (!a.length)
                    throw Error(c);
                return a
            }
            ,
            t.nextUid = 1,
            t.matchesSelector = function() {
                var t = document.createElement("div");
                return "function" == typeof t.webkitMatchesSelector ? "webkitMatchesSelector" : "function" == typeof t.mozMatchesSelector ? "mozMatchesSelector" : "function" == typeof t.msMatchesSelector ? "msMatchesSelector" : "matchesSelector"
            }(),
            t
        }()
          , y = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/
          , _ = function() {
            function t(e) {
                var r = this;
                this.connected = !1,
                this.options = t.validateOptions(e),
                this.observerOptions = t.createObserverOptions(this.options.queries),
                this.root = this.options.rootNode,
                this.callback = this.options.callback,
                this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function(t) {
                    return t.elementFilter ? t.elementFilter : []
                })),
                this.elementFilter.length || (this.elementFilter = void 0),
                this.calcReordered = this.options.queries.some(function(t) {
                    return t.all
                }),
                this.queryValidators = [],
                t.createQueryValidator && (this.queryValidators = this.options.queries.map(function(e) {
                    return t.createQueryValidator(r.root, e)
                })),
                this.observer = new u(function(t) {
                    r.observerCallback(t)
                }
                ),
                this.reconnect()
            }
            return t.createObserverOptions = function(t) {
                function e(t) {
                    if (!n.attributes || r) {
                        if (n.attributes = !0,
                        n.attributeOldValue = !0,
                        !t)
                            return void (r = void 0);
                        r = r || {},
                        t.forEach(function(t) {
                            r[t] = !0,
                            r[t.toLowerCase()] = !0
                        })
                    }
                }
                var r, n = {
                    childList: !0,
                    subtree: !0
                };
                return t.forEach(function(t) {
                    if (t.characterData)
                        return n.characterData = !0,
                        void (n.characterDataOldValue = !0);
                    if (t.all)
                        return e(),
                        n.characterData = !0,
                        void (n.characterDataOldValue = !0);
                    if (t.attribute)
                        return void e([t.attribute.trim()]);
                    var r = s(t.elementFilter).concat(t.attributeList || []);
                    r.length && e(r)
                }),
                r && (n.attributeFilter = Object.keys(r)),
                n
            }
            ,
            t.validateOptions = function(e) {
                for (var r in e)
                    if (!(r in t.optionKeys))
                        throw Error("Invalid option: " + r);
                if ("function" != typeof e.callback)
                    throw Error("Invalid options: callback is required and must be a function");
                if (!e.queries || !e.queries.length)
                    throw Error("Invalid options: queries must contain at least one query request object.");
                for (var n = {
                    callback: e.callback,
                    rootNode: e.rootNode || document,
                    observeOwnChanges: !!e.observeOwnChanges,
                    oldPreviousSibling: !!e.oldPreviousSibling,
                    queries: []
                }, s = 0; s < e.queries.length; s++) {
                    var a = e.queries[s];
                    if (a.all) {
                        if (Object.keys(a).length > 1)
                            throw Error("Invalid request option. all has no options.");
                        n.queries.push({
                            all: !0
                        })
                    } else if ("attribute"in a) {
                        var u = {
                            attribute: i(a.attribute)
                        };
                        if (u.elementFilter = b.parseSelectors("*[" + u.attribute + "]"),
                        Object.keys(a).length > 1)
                            throw Error("Invalid request option. attribute has no options.");
                        n.queries.push(u)
                    } else if ("element"in a) {
                        var c = 0
                          , d = Object.keys(a);
                        d.forEach(function(t) {
                            a.hasOwnProperty(t) && c++
                        });
                        var u = {
                            element: a.element,
                            elementFilter: b.parseSelectors(a.element)
                        };
                        if (a.hasOwnProperty("elementAttributes") && (u.attributeList = o(a.elementAttributes),
                        c--),
                        c > 1)
                            throw Error("Invalid request option. element only allows elementAttributes option.");
                        n.queries.push(u)
                    } else {
                        if (!a.characterData)
                            throw Error("Invalid request option. Unknown query request.");
                        if (Object.keys(a).length > 1)
                            throw Error("Invalid request option. characterData has no options.");
                        n.queries.push({
                            characterData: !0
                        })
                    }
                }
                return n
            }
            ,
            t.prototype.createSummaries = function(t) {
                if (!t || !t.length)
                    return [];
                for (var e = new f(this.root,t,this.elementFilter,this.calcReordered,this.options.oldPreviousSibling), r = [], n = 0; n < this.options.queries.length; n++)
                    r.push(new g(e,this.options.queries[n]));
                return r
            }
            ,
            t.prototype.checkpointQueryValidators = function() {
                this.queryValidators.forEach(function(t) {
                    t && t.recordPreviousState()
                })
            }
            ,
            t.prototype.runQueryValidators = function(t) {
                this.queryValidators.forEach(function(e, r) {
                    e && e.validate(t[r])
                })
            }
            ,
            t.prototype.changesToReport = function(t) {
                return t.some(function(t) {
                    var e = ["added", "removed", "reordered", "reparented", "valueChanged", "characterDataChanged"];
                    if (e.some(function(e) {
                        return t[e] && t[e].length
                    }))
                        return !0;
                    if (t.attributeChanged) {
                        var r = Object.keys(t.attributeChanged)
                          , n = r.some(function(e) {
                            return !!t.attributeChanged[e].length
                        });
                        if (n)
                            return !0
                    }
                    return !1
                })
            }
            ,
            t.prototype.observerCallback = function(t) {
                this.options.observeOwnChanges || this.observer.disconnect();
                var e = this.createSummaries(t);
                this.runQueryValidators(e),
                this.options.observeOwnChanges && this.checkpointQueryValidators(),
                this.changesToReport(e) && this.callback(e),
                !this.options.observeOwnChanges && this.connected && (this.checkpointQueryValidators(),
                this.observer.observe(this.root, this.observerOptions))
            }
            ,
            t.prototype.reconnect = function() {
                if (this.connected)
                    throw Error("Already connected");
                this.observer.observe(this.root, this.observerOptions),
                this.connected = !0,
                this.checkpointQueryValidators()
            }
            ,
            t.prototype.takeSummaries = function() {
                if (!this.connected)
                    throw Error("Not connected");
                var t = this.createSummaries(this.observer.takeRecords());
                return this.changesToReport(t) ? t : void 0
            }
            ,
            t.prototype.disconnect = function() {
                var t = this.takeSummaries();
                return this.observer.disconnect(),
                this.connected = !1,
                t
            }
            ,
            t.NodeMap = d,
            t.parseElementFilter = b.parseSelectors,
            t.optionKeys = {
                callback: !0,
                queries: !0,
                rootNode: !0,
                oldPreviousSibling: !0,
                observeOwnChanges: !0
            },
            t
        }();
        e.exports = _
    }
    , {}],
    27: [function(t, e, r) {
        Date.now || (Date.now = function() {
            return +new Date
        }
        ),
        String.prototype.trim || (String.prototype.trim = function() {
            var t, e, r;
            return e = /^\s+/,
            r = /\s+$/,
            t = function() {
                return this.replace(e, "").replace(r, "")
            }
        }()),
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ),
        Array.from || (Array.from = function() {
            var t = Object.prototype.toString
              , e = function(e) {
                return "function" == typeof e || "[object Function]" === t.call(e)
            }
              , r = function(t) {
                var e = Number(t);
                return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
            }
              , n = Math.pow(2, 53) - 1
              , i = function(t) {
                var e = r(t);
                return Math.min(Math.max(e, 0), n)
            };
            return function(t) {
                var r = this
                  , n = Object(t);
                if (null == t)
                    throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var o, s = arguments.length > 1 ? arguments[1] : void 0;
                if ("undefined" != typeof s) {
                    if (!e(s))
                        throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (o = arguments[2])
                }
                for (var a, u = i(n.length), c = e(r) ? Object(new r(u)) : new Array(u), d = 0; u > d; )
                    a = n[d],
                    c[d] = s ? "undefined" == typeof o ? s(a, d) : s.call(o, a, d) : a,
                    d += 1;
                return c.length = u,
                c
            }
        }()),
        "function" != typeof Object.assign && (Object.assign = function(t) {
            "use strict";
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            t = Object(t);
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                if (null != r)
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
        }
        ),
        Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get && !function() {
            var t = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
            Object.defineProperty(Element.prototype, "textContent", {
                get: function() {
                    return t.get.call(this)
                }
            })
        }()
    }
    , {}],
    28: [function(t, e, r) {
        MutationSummary = t("./mutation-summary"),
        Utils = t("../tools/utils.coffee");
        var n = {
            SCRIPT: 1,
            STYLE: 1,
            NOSCRIPT: 1,
            IFRAME: 1,
            BR: 1,
            FONT: 1,
            tspan: 1,
            text: 1,
            g: 1,
            rect: 1,
            path: 1,
            defs: 1,
            clipPath: 1,
            desc: 1,
            title: 1
        }
          , i = ["TR", "LI", "DL"]
          , o = /^(clear|clearfix|active|hover|enabled|hidden|display|focus|disabled|ng-|growing-)/
          , s = ["button", "submit"]
          , a = ["I", "SPAN", "EM", "svg"]
          , u = ["A", "BUTTON"]
          , c = function() {
            function t(t, e, r) {
                if (t) {
                    var n = this;
                    if (this.target = t,
                    this.mirror = e,
                    !window.vds.impCtrlDua || window.vds.impCtrlDua && Date.now() - window.grImpCtrl <= window.vds.impCtrlDua) {
                        for (var i = [], o = t.firstChild; o; o = o.nextSibling) {
                            var s = this.serializeNode(o);
                            null !== s && i.push(s)
                        }
                        setTimeout(function() {
                            n.mirror.initialize(i)
                        }, 0)
                    }
                    var a = [{
                        element: "*"
                    }, {
                        element: "*",
                        elementAttributes: "data-growing-title src data-gio-imp-track"
                    }];
                    r && (a = a.concat(r)),
                    this.mutationSummary = new MutationSummary({
                        rootNode: t,
                        callback: function(t) {
                            n.applyChanged(t)
                        },
                        queries: a
                    })
                }
            }
            return t.prototype.disconnect = function() {
                this.mutationSummary && (this.mutationSummary.disconnect(),
                this.mutationSummary = void 0)
            }
            ,
            t.prototype.serializeNode = function(t, e, r, c) {
                if (null === t)
                    return null;
                if (1 === n[t.tagName])
                    return null;
                if (void 0 === e) {
                    e = "/";
                    for (var d = t.parentElement; d && "BODY" !== d.tagName && "HTML" !== d.tagName; ) {
                        var h = "/" + d.tagName.toLowerCase()
                          , l = d.getAttribute("id");
                        if (l && null === l.match(/^[0-9]/) && (h += "#" + l),
                        d.hasAttribute("class"))
                            for (var p = d.getAttribute("class").trim().split(/\s+/).sort(), f = 0; f < p.length; f++)
                                p[f].length > 0 && null === o.exec(p[f]) && (h += "." + p[f]);
                        e = h + e,
                        d = d.parentElement
                    }
                }
                var g = {
                    nodeType: t.nodeType
                };
                switch (1 === g.nodeType && -1 !== u.indexOf(t.tagName) && (g.dom = t),
                g.nodeType) {
                case 10:
                    var v = t;
                    g.name = v.name,
                    g.publicId = v.publicId,
                    g.systemId = v.systemId;
                    break;
                case 8:
                    return null;
                case 3:
                    if ("/" === e || 0 === t.textContent.trim().length)
                        return null;
                    g.textContent = t.textContent.replace(/[\n \t]+/g, " ").trim(),
                    g.textContent.length > 0 && (g.leaf = !0,
                    g.text = g.textContent,
                    g.path = e.slice(0, -1));
                    break;
                case 1:
                    if (!t.style)
                        return null;
                    var m = t.style.display;
                    if ("block" !== m && "inline" !== m && ("none" === m || "none" === window.getComputedStyle(t).display) && "A" !== t.tagName && null === t.querySelector("a"))
                        return null;
                    var w = t;
                    if (g.tagName = w.tagName,
                    g.attributes = {
                        any: w.hasAttributes()
                    },
                    this.appendDataAttrs(g, w),
                    e += w.tagName.toLowerCase(),
                    w.hasAttribute("id") && null === w.getAttribute("id").match(/^[0-9]/) && (e += "#" + w.getAttribute("id")),
                    "INPUT" == w.tagName && w.hasAttribute("name"))
                        e += "." + w.getAttribute("name");
                    else if (w.hasAttribute("class")) {
                        p = w.getAttribute("class").trim().split(/\s+/).sort();
                        for (var f = 0; f < p.length; f++)
                            p[f].length > 0 && null === o.exec(p[f]) && (e += "." + p[f])
                    }
                    w.hasAttribute("href") && (g.attributes.href = w.getAttribute("href"));
                    var b, y = !0;
                    if (e += "/",
                    w.childNodes.length > 0) {
                        if (g.childNodes = [],
                        w.hasAttribute("growing-ignore") || w.hasAttribute("data-growing-ignore"))
                            return null;
                        w.hasAttribute("data-growing-container") && (g.isContainer = !0);
                        var _, I, S = 0, O = -1 !== u.indexOf(w.tagName);
                        if (O)
                            for (var C = w.firstChild; C; C = C.nextSibling)
                                if (1 === C.nodeType && -1 === a.indexOf(C.tagName)) {
                                    O = !1;
                                    break
                                }
                        for (var N = w.firstChild; N; N = N.nextSibling) {
                            if (_ = w.hasAttribute("data-growing-info") ? w.getAttribute("data-growing-info") : null,
                            I = w.hasAttribute("data-growing-idx") ? parseInt(w.getAttribute("data-growing-idx")) : -1,
                            1 === N.nodeType) {
                                if (1 === n[N.tagName]) {
                                    y = !1;
                                    continue
                                }
                                if (N.hasAttribute("growing-ignore") || N.hasAttribute("data-growing-ignore"))
                                    continue;
                                if (O && -1 !== a.indexOf(N.tagName) && (y = !1,
                                !N.children || 0 === N.children.length))
                                    continue;
                                -1 !== i.indexOf(N.tagName) && (S += 1,
                                I = S),
                                N.hasAttribute("data-growing-idx") && (S = parseInt(N.getAttribute("data-growing-idx")),
                                I = S),
                                N.hasAttribute("data-growing-info") && (_ = N.getAttribute("data-growing-info"))
                            }
                            var x = this.serializeNode(N, e, S > 0 && I > 0 ? S : r, _ || c);
                            if (null === x)
                                3 != N.nodeType && (y = !1);
                            else if ("undefined" != typeof x.childNodes) {
                                y = !1,
                                b = !0;
                                for (var E = 0; E < x.childNodes.length; E++)
                                    if (x.childNodes[E].tagName) {
                                        b = !1;
                                        break
                                    }
                                S > 0 && I > 0 ? x.idx = S : r && (x.idx = r),
                                _ ? x.obj = _ : c && (x.obj = c),
                                g.childNodes.push(x)
                            } else {
                                if ((0 === w.offsetWidth || 0 === w.offsetHeight) && "A" !== w.tagName && "BUTTON" !== w.tagName)
                                    return null;
                                x.leaf && (r && (x.idx = r),
                                c && (x.obj = c),
                                g.childNodes.push(x))
                            }
                        }
                    } else
                        g.childNodes = [];
                    if (y)
                        if (g.leaf = !0,
                        "IMG" === w.tagName && (delete g.attributes.href,
                        w.src && -1 === w.src.indexOf("data:image") && (g.attributes.href = w.src)),
                        w.hasAttribute("data-growing-title") && w.getAttribute("data-growing-title").length > 0)
                            g.text = w.getAttribute("data-growing-title");
                        else if (w.hasAttribute("title") && w.getAttribute("title").length > 0)
                            g.text = w.getAttribute("title");
                        else if ("IMG" === w.tagName) {
                            if (w.alt)
                                g.text = w.alt;
                            else if (g.attributes.href) {
                                var T = g.attributes.href.split("?")[0];
                                if (T) {
                                    var k = T.split("/");
                                    k.length > 0 && (g.text = k[k.length - 1])
                                }
                            }
                        } else if ("INPUT" === w.tagName && -1 !== s.indexOf(w.type))
                            g.text = w.value;
                        else if ("svg" === w.tagName) {
                            for (var A = w.firstChild; A; A = A.nextSibling)
                                if ("use" === A.tagName && A.getAttribute("xlink:href")) {
                                    g.text = A.getAttribute("xlink:href");
                                    break
                                }
                        } else {
                            var D = w.textContent.trim();
                            if (0 === D.length && "I" !== w.tagName && "A" !== w.tagName && "use" !== w.tagName)
                                return null;
                            g.text = D
                        }
                    else {
                        if (w.hasAttribute("data-growing-title") && w.getAttribute("data-growing-title").length > 0)
                            g.text = w.getAttribute("data-growing-title");
                        else if (w.hasAttribute("title") && w.getAttribute("title").length > 0)
                            g.text = w.getAttribute("title");
                        else if ("svg" === w.tagName)
                            for (var A = w.firstChild; A; A = A.nextSibling)
                                if ("use" === A.tagName && A.getAttribute("xlink:href")) {
                                    g.text = A.getAttribute("xlink:href");
                                    break
                                }
                        w.hasAttribute("data-growing-idx") && (g.idx = parseInt(w.getAttribute("data-growing-idx"))),
                        w.hasAttribute("data-growing-info") && (g.obj = w.getAttribute("data-growing-info"))
                    }
                    g.path = e.slice(0, -1)
                }
                return g
            }
            ,
            t.prototype.appendDataAttrs = function(t, e) {}
            ,
            t.prototype.serializeAddedAndMoved = function(t, e, r) {
                var o = this
                  , s = t.concat(e).concat(r);
                if (0 === s.length)
                    return [];
                var a = new MutationSummary.NodeMap
                  , u = {};
                s.forEach(function(t) {
                    t && (u[a.nodeId(t)] = !0)
                });
                var c = [];
                s.forEach(function(t) {
                    if (t && 1 !== n[t.tagName]) {
                        var e = t.parentNode;
                        if (e && !u[a.nodeId(e)] && "undefined" != typeof e.getAttribute) {
                            var r = e.getAttribute("id")
                              , i = e.getAttribute("class")
                              , o = t.getAttribute("class");
                            if (!r || -1 === r.toLowerCase().indexOf("clock") && -1 === r.toLowerCase().indexOf("countdown") && -1 === r.toLowerCase().indexOf("time"))
                                if (!i || -1 === i.toLowerCase().indexOf("clock") && -1 === i.toLowerCase().indexOf("countdown") && -1 === i.toLowerCase().indexOf("time"))
                                    if (e.getAttribute("data-countdown"))
                                        ;
                                    else if (o && -1 !== o.indexOf("daterangepicker"))
                                        ;
                                    else if (t.hasAttribute("growing-ignore") || t.hasAttribute("data-growing-ignore"))
                                        ;
                                    else {
                                        for (; e && e !== document && "#document-fragment" !== e.nodeName && "BODY" !== e.tagName && !e.hasAttribute("growing-ignore") && !e.hasAttribute("data-growing-ignore"); )
                                            e = e.parentNode;
                                        (null === e || "BODY" === e.tagName || "#document-fragment" === e.nodeName) && c.push(t)
                                    }
                                else
                                    ;
                            else
                                ;
                        }
                    }
                });
                var d = [];
                return c.forEach(function(t) {
                    for (var e = void 0, r = t; r && "BODY" !== r.tagName && -1 === i.indexOf(r.tagName); )
                        r = r.parentNode;
                    if (r && "BODY" !== r.tagName) {
                        var n = r.parentNode;
                        if (null == n)
                            return;
                        for (var s = 1, a = n.childNodes[s - 1]; s <= n.childNodes.length; s++)
                            if (a.tagName === r.tagName && a === r) {
                                e = s;
                                break
                            }
                    }
                    var u = o.serializeNode(t, void 0, e);
                    null !== u && d.push(u)
                }),
                delete u,
                delete c,
                d
            }
            ,
            t.prototype.serializeValueChanges = function(t) {
                var e = this
                  , r = []
                  , n = new MutationSummary.NodeMap;
                return t.forEach(function(t) {
                    var r = n.get(t);
                    r || (r = e.serializeNode(t),
                    n.set(t, r))
                }),
                n.keys().forEach(function(t) {
                    var e = n.get(t);
                    e && r.push(e)
                }),
                r
            }
            ,
            t.prototype.applyChanged = function(t) {
                var e = this
                  , r = t[0]
                  , n = r.added
                  , i = t[1];
                (!window.vds.impCtrlDua || window.vds.impCtrlDua && Date.now() - window.grImpCtrl <= window.vds.impCtrlDua) && setTimeout(function() {
                    var t = e.serializeAddedAndMoved(n, [], [])
                      , r = t.imp || []
                      , o = t.cstm || []
                      , s = [].concat(i.attributeChanged["data-growing-title"], i.attributeChanged.src, i.attributeChanged["data-gio-imp-track"]);
                    if (s && s.length > 0) {
                        var a = e.serializeValueChanges(s);
                        if (a && a.length > 0)
                            for (var u = 0; u < a.length; u++) {
                                var c = a[u];
                                r = r.concat(c.autoData),
                                o = o.concat(c.maunalData)
                            }
                    }
                    e.mirror.applyChanged([], {
                        imp: r,
                        cstm: o
                    })
                }, 10)
            }
            ,
            t
        }();
        r.Client = c
    }
    , {
        "../tools/utils.coffee": 19,
        "./mutation-summary": 26
    }],
    29: [function(t, e, r) {
        function n(t) {
            t = t.toLowerCase();
            var e = t.match(/cpu.*os (.*?) like mac os/i);
            return !e || e.length < 2 ? 0 : +e[1].split("_").slice(0, 2).join(".")
        }
        var i = {
            support: function() {
                var t = !!window.navigator.sendBeacon
                  , e = window.navigator.userAgent;
                if (e.match(/(iPad|iPhone|iPod)/g)) {
                    var r = n(e);
                    return t && r > 11.1
                }
                return t
            },
            send: function(t, e) {
                return window.navigator.sendBeacon(t + "?stm=" + +Date.now(), e)
            }
        };
        e.exports = i
    }
    , {}],
    30: [function(t, e, r) {
        var n, i, o, s, a = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                u.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, u = {}.hasOwnProperty;
        n = t("../../core/info/dom_info"),
        i = t("./gr_user_info"),
        o = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return a(e, t),
            e.prototype.user = function() {
                return new i
            }
            ,
            e
        }(n),
        s = new o,
        e.exports = s
    }
    , {
        "../../core/info/dom_info": 10,
        "./gr_user_info": 31
    }],
    31: [function(t, e, r) {
        var n, i, o = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                s.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, s = {}.hasOwnProperty;
        n = t("../../core/info/gr_user_info"),
        i = function(t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }
            return o(e, t),
            e.prototype.duration10year = 31536e7,
            e.prototype.duration30min = 18e5,
            e.prototype.duration15min = 9e5,
            e.prototype.duration1min = 6e4,
            e.prototype.cookieDomain = function() {
                var t, e;
                if (!this.grCookieDomains)
                    try {
                        t = window.location.hostname.split("."),
                        this.grCookieDomains = 0 <= (e = t[t.length - 1]) && 255 >= e || 1 === t.length ? [window.location.hostname] : ["." + t.slice(-2).join("."), "." + t.slice(-3).join(".")]
                    } catch (r) {
                        this.grCookieDomains = [window.location.hostname]
                    }
                return this.grCookieDomains
            }
            ,
            e.prototype.vid = function() {
                return this.userId ? this.userId : (this.userId = this.cookie.getItem("gr_user_id"),
                this.userId ? this.cookie.setItem("gr_user_id", this.userId, this.duration10year) : (this.userId = this.guid(),
                this.cookie.setItem("gr_user_id", this.userId, this.duration10year)),
                this.userId)
            }
            ,
            e.prototype.hasSid = function() {
                var t, e, r, n;
                return e = +Date.now(),
                this.sessionId && this.lastUpdated && e - this.lastUpdated < this.duration15min ? !0 : (r = this.currentSessionId(),
                t = r[0],
                n = r[1],
                t && (!this.lastSessionId || t === this.lastSessionId))
            }
            ,
            e.prototype.sid = function() {
                var t, e, r;
                return e = this.currentSessionId(),
                this.sessionId = e[0],
                r = e[1],
                t = +Date.now(),
                this.sessionId && this.lastUpdated && t - this.lastUpdated < this.duration1min ? this.sessionId : (this.sessionId || (this.sessionId = this.guid(),
                r = !1),
                this.updateSessionId(this.sessionId, r),
                this.updateCS1(this.getCs1(), this.sessionId),
                this.sessionId)
            }
            ,
            e.prototype.setVisitor = function(t) {
                return this.visitorVar = t
            }
            ,
            e.prototype.getCs1 = function() {
                return this.cookie.getItem(window.vds.accountId + "_gr_cs1")
            }
            ,
            e.prototype.last_sent_sid_with_cs1 = function() {
                return this.cookie.getItem(window.vds.accountId + "_gr_last_sent_sid_with_cs1")
            }
            ,
            e.prototype.last_sent_cs1 = function() {
                return this.cookie.getItem(window.vds.accountId + "_gr_last_sent_cs1")
            }
            ,
            e.prototype.updateCS1 = function(t, e) {
                var r;
                return null == e && (e = this.sessionId),
                r = window.vds.accountId,
                t ? (this.clearCs1(),
                this.cookie.setItem(r + "_gr_last_sent_sid_with_cs1", e, this.duration30min),
                this.cookie.setItem(r + "_gr_last_sent_cs1", t, this.duration10year),
                this.cookie.setItem(r + "_gr_cs1", t, this.duration10year)) : void 0
            }
            ,
            e.prototype.clearCs1 = function() {
                var t;
                return t = window.vds.accountId,
                this.cookie.removeItem(t + "_gr_cs1")
            }
            ,
            e.prototype.currentSessionId = function(t) {
                var e, r, n, i;
                return null == t && (t = window.vds.accountId),
                i = this.cookie.getItem(t + "_gr_session_id") || "",
                r = "" + this.cookie.getItem(t + "_gr_session_id_sent_vst"),
                n = r === i,
                i && i.indexOf("_") >= 0 && (e = i.split("_"),
                i = e[0],
                n = e[1],
                n = "true" === n,
                this.updateSessionId(i, n)),
                i && "null" === i && (i = "",
                n = !1),
                [i, n]
            }
            ,
            e.prototype.updateSessionId = function(t, e, r) {
                var n, i, o, s, a;
                for (this.lastSessionId !== t && this.visitorVar && (a = !0),
                t || (t = this.guid()),
                r || (r = window.vds.accountId),
                this.lastUpdated = +Date.now(),
                this.lastSessionId = t,
                this.cookie.setItem(r + "_gr_session_id", t, this.duration30min),
                o = this.cookie.getKeys(),
                n = 0,
                s = o.length; s > n; n++)
                    i = o[n],
                    /.+_gr_session_id_.{36}/.test(i) && this.cookie.removeItem(i);
                return this.updateSessionIdSendStatus(e, t, r),
                a && this.currentSessionId()[0] ? window.gio("visitor.set", this.visitorVar) : void 0
            }
            ,
            e.prototype.updateSessionIdSendStatus = function(t, e, r) {
                return null == r && (r = window.vds.accountId),
                t ? this.cookie.setItem(r + "_gr_session_id_sent_vst", e, this.duration30min) : this.cookie.removeItem(r + "_gr_session_id_sent_vst")
            }
            ,
            e.prototype.isSendNewVisit = function() {
                var t;
                return t = !1,
                this.hasSid() ? this.getSidSendSuccess() || (t = !0) : t = !0,
                t
            }
            ,
            e.prototype.getSidSendSuccess = function(t) {
                var e, r, n;
                return null == t && (t = window.vds.accountId),
                e = this.currentSessionId(t),
                n = e[0],
                r = e[1],
                r === !0
            }
            ,
            e.prototype.setGioId = function(t) {
                return t ? this.cookie.setItem("grwng_uid", t, this.duration10year) : void 0
            }
            ,
            e.prototype.resetUserId = function() {
                return this.userId ? this.cookie.setItem("gr_user_id", this.userId, this.duration10year) : void 0
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../../core/info/gr_user_info": 11
    }],
    32: [function(t, e, r) {
        var n, i, o, s, a, u, c, d, h = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, l = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                p.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, p = {}.hasOwnProperty;
        i = t("./observer/dom_observer"),
        s = t("./sender"),
        n = t("../core/base_launcher"),
        u = t("./info/dom_info"),
        d = t("../core/tools/utils"),
        a = d.detectIE() || 0 / 0,
        c = void 0,
        9 > a || (window.MutationObserver = t("mutation-observer"),
        c = t("tree-mirror")),
        o = function(t) {
            function e() {
                this.defaultSamplingFunc = h(this.defaultSamplingFunc, this),
                this.user = u.user(),
                e.__super__.constructor.call(this),
                this.sender = new s(this.user,this.callback),
                this.observer = new i(this.sender,this.user,this,c)
            }
            return l(e, t),
            e.prototype.afterInitialize = function() {}
            ,
            e.prototype.setListener = function(t) {
                return "function" == typeof t ? this.sender.setListener(t) : void 0
            }
            ,
            e.prototype.defaultSamplingFunc = function() {
                var t, e, r;
                return r = this.user.vid(),
                e = window.vds.sampling_ratio,
                t = parseInt(r.slice(-2), 16) % e,
                0 === t
            }
            ,
            e.prototype.beforeConnect = function() {
                return this.sender.setUrlMap(this.options)
            }
            ,
            e
        }(n),
        e.exports = o
    }
    , {
        "../core/base_launcher": 2,
        "../core/tools/utils": 19,
        "./info/dom_info": 30,
        "./observer/dom_observer": 34,
        "./sender": 36,
        "mutation-observer": 1,
        "tree-mirror": 28
    }],
    33: [function(t, e, r) {
        var n, i, o, s, a, u, c, d, h, l = [].slice;
        if (t("../core/vendor/shim"),
        h = t("../core/tools/utils"),
        n = t("./launcher"),
        s = new n,
        window._gr_support_circle_pop_out = !0,
        !window._disable_js_vds && ("boolean" != typeof window.webViewRequestSend || window.webViewRequestSend || !window._vds_ios && !window._vds_bridge) && (window._vds_hybrid || window._gr_ignore_local_rule || -1 === h.indexOf(["", "localhost", "127.0.0.1"], window.location.hostname))) {
            if (null != window.grSdkInstalled)
                return void h.printWarning("重复加载GrowingIO SDK");
            for (window.grSdkInstalled = !0,
            c = [],
            window.gio && window.gio.web ? c = c.concat(window.gio.web) : ((null != (d = window.gio) ? d.q : void 0) && (c = c.concat(window.gio.q)),
            window._vds && (c = c.concat(window._vds))),
            o = 0,
            a = c.length; a > o; o++)
                u = c[o],
                null != s && s.apply.apply(s, u);
            i = function() {
                var t;
                return t = 1 <= arguments.length ? l.call(arguments, 0) : [],
                s.apply.apply(s, t)
            }
            ,
            i.push = function() {
                return arguments.length > 1 ? s.apply.apply(s, arguments) : s.apply.apply(s, arguments[0])
            }
            ,
            i.track = function() {
                var t;
                return (t = s.system).track.apply(t, arguments)
            }
            ,
            i.platform = "web",
            window.gioGlobalArray = window.gioGlobalArray || [],
            window.gioGlobalArray.push(i),
            window.gio = function() {
                var t, e, r, n, i, o;
                for ((window._vds_bridge || window._vds_ios) && 1 === window.gioGlobalArray.length && window.gio && window.gio.hybrid && window.gio.hybrid.push(arguments),
                n = window.gioGlobalArray,
                o = [],
                e = 0,
                r = n.length; r > e; e++)
                    t = n[e],
                    o.push("init" === (i = arguments[0]) || "send" === i ? "web" === t.platform ? t.apply(null, arguments) : void 0 : t.apply(null, arguments));
                return o
            }
            ,
            (window._vds_bridge || window._vds_ios) && 1 === window.gioGlobalArray.length && (window.gio.hybrid = c),
            window.gio.web = void 0,
            window._vds = {
                push: function() {
                    var t, e, r, n, i;
                    for (n = window.gioGlobalArray,
                    i = [],
                    e = 0,
                    r = n.length; r > e; e++)
                        t = n[e],
                        i.push(t.push.apply(t, arguments));

                    return i
                },
                track: function() {
                    var t, e, r, n, i;
                    for (n = window.gioGlobalArray,
                    i = [],
                    e = 0,
                    r = n.length; r > e; e++)
                        t = n[e],
                        i.push(t.track.apply(t, arguments));
                    return i
                }
            }
        }
    }
    , {
        "../core/tools/utils": 19,
        "../core/vendor/shim": 27,
        "./launcher": 32
    }],
    34: [function(t, e, r) {
        var n, i, o, s, a, u = function(t, e) {
            function r() {
                this.constructor = t
            }
            for (var n in e)
                c.call(e, n) && (t[n] = e[n]);
            return r.prototype = e.prototype,
            t.prototype = new r,
            t.__super__ = e.prototype,
            t
        }, c = {}.hasOwnProperty;
        n = t("../../core/observer/dom_observer"),
        s = t("../info/dom_info"),
        o = t("./server_imp_setting"),
        a = t("../../core/tools/utils.coffee"),
        i = function(t) {
            function e(t, r, n, i) {
                this.sender = t,
                this.gruser = r,
                this.launcher = n,
                this.TreeMirror = i,
                this.info = s,
                e.__super__.constructor.call(this, this.sender, this.gruser, this.launcher, this.TreeMirror)
            }
            return u(e, t),
            e.prototype.snapshotCallback = function(t, e) {}
            ,
            e.prototype.appendMessageAttrs = function(t, e) {
                return e
            }
            ,
            e.prototype.appendElemAttrs = function(t) {
                return t
            }
            ,
            e.prototype.initServerImpSetting = function() {
                return o.initialize()
            }
            ,
            e.prototype.blind = function() {
                var t;
                return t = !1,
                window.vds.sampling && (a.functionDeserialization(window.vds.sampling_func).call(this) || (t = !0)),
                window.grBlind = t,
                t
            }
            ,
            e
        }(n),
        e.exports = i
    }
    , {
        "../../core/observer/dom_observer": 13,
        "../../core/tools/utils.coffee": 19,
        "../info/dom_info": 30,
        "./server_imp_setting": 35
    }],
    35: [function(t, e, r) {
        var n, i, o, s;
        o = t("cookie"),
        s = t("../../core/tools/utils"),
        n = t("../../core/tools/local_store"),
        i = function() {
            function t() {}
            return t.initialize = function() {
                return t._checkingImpSetting()
            }
            ,
            t.impSetting = function() {
                return n.get("gr_imp_" + s.hashCode(window.vds.accountId))
            }
            ,
            t._checkingImpSetting = function() {
                return "undefined" == typeof this.impSetting() || null === this.impSetting() ? t._fetchServerSetting() : "false" === this.impSetting() || this.impSetting() === !1 ? window.vds.imp = !1 : void 0
            }
            ,
            t._fetchServerSetting = function() {
                var t, e, r;
                return r = (null != (t = window.vds) ? t.zone : void 0) ? "-" + window.vds.zone : "",
                e = ("https:" === document.location.protocol ? "https://" : "http://") + "tags" + r + (".growingio.com/products/" + window.vds.accountId + "/web/" + window.location.hostname + "/settings/general"),
                s.sendRequest(e, function(t) {
                    return function(t) {
                        var e, r;
                        if (null != t ? t.responseText : void 0)
                            try {
                                r = JSON.parse(t.responseText).imp
                            } catch (i) {
                                e = i,
                                r = !0
                            }
                        else
                            r = !0;
                        return n.set("gr_imp_" + s.hashCode(window.vds.accountId), r),
                        window.vds.imp &= r,
                        window.vds.imp ? void 0 : window._vds.push(["deregisterDomObserver"])
                    }
                }(this))
            }
            ,
            t
        }(),
        e.exports = i
    }
    , {
        "../../core/tools/local_store": 17,
        "../../core/tools/utils": 19,
        cookie: 20
    }],
    36: [function(t, e, r) {
        var n, i, o, s, a, u, c, d, h, l, p = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }, f = [].indexOf || function(t) {
            for (var e = 0, r = this.length; r > e; e++)
                if (e in this && this[e] === t)
                    return e;
            return -1
        }
        ;
        c = t("lzstring"),
        l = t("../core/tools/utils"),
        o = t("./beacon.js"),
        a = l.detectIE() || 0 / 0,
        d = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./),
        s = d ? parseInt(d[2], 10) : !1,
        u = !1,
        s && 22 > s ? n = !1 : (n = !0,
        h = navigator.userAgent,
        "ArrayBufferView"in window || (-1 !== h.indexOf("Android") ? n = !1 : -1 !== h.indexOf("CPU OS ") ? -1 !== h.indexOf("CPU OS 6_") ? n = !1 : -1 !== h.indexOf("CPU OS 5_") ? n = !1 : -1 !== h.indexOf("CPU OS 4_") ? n = !1 : -1 !== h.indexOf("CPU OS 3_") && (n = !1) : -1 !== h.indexOf("CPU iPhone OS ") ? -1 !== h.indexOf("iPhone OS 6_") ? n = !1 : -1 !== h.indexOf("iPhone OS 5_") ? n = !1 : -1 !== h.indexOf("iPhone OS 4_") && (n = !1) : -1 !== h.indexOf("Intel Mac OS X") && (-1 !== h.indexOf("Mac OS X 10_6") ? n = !1 : -1 !== h.indexOf("Mac OS X 10_7") && (n = !1)))),
        i = function() {
            function t(t, e) {
                this.user = t,
                this.callback = e,
                this.setListener = p(this.setListener, this),
                this.dispathMessage2Listener = p(this.dispathMessage2Listener, this),
                this.dispatchEvents = p(this.dispatchEvents, this),
                this.imgSendClear = p(this.imgSendClear, this),
                this.addRealTimeMessageCallBack = p(this.addRealTimeMessageCallBack, this),
                this.send = p(this.send, this),
                this.listeners = [],
                this.typeListAccepted = ["page", "vst", "clck", "imp", "chng", "sbmt", "cstm", "pvar", "evar", "ppl", "reengage", "vstr"],
                this.typeListReceivedValid = [],
                this.setRealTimeMessageCallBack = null
            }
            var e, r;
            return r = [],
            e = [],
            t.prototype.sendVisitTimeout = 0,
            t.prototype.setUrlMap = function(t) {
                return this.urlMap = this.getUrlMap(t)
            }
            ,
            t.prototype.getUrlMap = function(t) {
                var e, r;
                return r = t.zone && "api.growingio.com" === t.host ? t.scheme + ("api-" + t.zone + ".growingio.com") : t.scheme + t.host,
                e = r + "/v2/" + t.accountId + "/web",
                {
                    pv: e + "/pv",
                    action: e + "/action",
                    cstm: r + "/custom/" + t.accountId + "/web/cstm",
                    pvar: r + "/custom/" + t.accountId + "/web/cstm",
                    ppl: r + "/custom/" + t.accountId + "/web/cstm",
                    evar: r + "/custom/" + t.accountId + "/web/cstm"
                }
            }
            ,
            t.prototype.connect = function(t) {
                return u = t.isBot,
                "function" == typeof this.callback ? this.callback(this.user, this.send) : void 0
            }
            ,
            t.prototype.send = function(t, e) {
                var r, n, i, o, s, d, h, l, p, g;
                if (null == e && (e = "action"),
                r = !0,
                h = "boolean" == typeof window.vds.enableDataCollect,
                l = "boolean" == typeof window.vds.dataCollect,
                h ? r = window.vds.enableDataCollect : l && (r = !window.vds.dataCollect),
                r && !window.grBlind && ("boolean" != typeof window.webViewRequestSend || window.webViewRequestSend || !window._vds_ios && !window._vds_bridge))
                    try {
                        if (g = "pv" === e && 2 === t.length ? t[0].s : "",
                        n = "undefined" == typeof Uint8Array || null === Uint8Array || u ? window.XMLHttpRequest && 7 !== a && !u ? c.compressToUTF16(JSON.stringify(t)) : c.compressToEncodedURIComponent(JSON.stringify(t)) : c.compressToUint8Array(JSON.stringify(t)),
                        this.sendRemote(n, e, g),
                        this.typeListReceivedValid.length >= 0 && this.setRealTimeMessageCallBack)
                            for (o = 0,
                            s = t.length; s > o; o++)
                                d = t[o],
                                p = d.t,
                                f.call(this.typeListReceivedValid, p) >= 0 && this.setRealTimeMessageCallBack(d);
                        if (this.listeners.length > 0)
                            return setTimeout(function(e) {
                                return function() {
                                    return e.dispatchEvents(t)
                                }
                            }(this), 500)
                    } catch (v) {
                        return i = v,
                        console && console.warn(i)
                    }
            }
            ,
            t.prototype.addRealTimeMessageCallBack = function(t, e) {
                var r, n, i, o, s;
                try {
                    if (Array.isArray(t))
                        for (i = 0,
                        o = t.length; o > i; i++)
                            n = t[i],
                            f.call(this.typeListAccepted, n) >= 0 && this.typeListReceivedValid.push(n);
                    else {
                        if (s = t.toString(),
                        !(f.call(this.typeListAccepted, s) >= 0))
                            throw Error("The second parameter requires an array.");
                        this.typeListReceivedValid.push(t.toString())
                    }
                    if ("function" != typeof e)
                        throw Error("The third parameter requires an function.");
                    return this.setRealTimeMessageCallBack = e
                } catch (a) {
                    return r = a,
                    console && console.warn(r)
                }
            }
            ,
            t.prototype.sendRemote = function(t, i, s) {
                var c, d, h, l;
                return this.urlMap || (this.urlMap = this.getUrlMap(window.vds)),
                l = this.urlMap[i],
                window.grWaitTime = +Date.now() + 300,
                o.support() && (d = o.send(l, t)) ? void (s && "" !== s && this.user.updateSessionIdSendStatus(!0, s)) : ("" !== s && (this.sendVisitTimeout += 300),
                window.XMLHttpRequest && 7 !== a && !u ? (c = new XMLHttpRequest,
                "withCredentials"in c ? (c.open("POST", l + "?stm=" + +Date.now(), !0),
                c.withCredentials = !0,
                c.onreadystatechange = function(t) {
                    return function() {
                        return 4 === c.readyState && ("" !== s && (t.sendVisitTimeout -= 300),
                        t.removeAjax(c),
                        window.grWaitTime = +Date.now() + 10,
                        s && "" !== s && 200 === c.status) ? t.user.updateSessionIdSendStatus(!0, s) : void 0
                    }
                }(this),
                c.send("undefined" != typeof ArrayBuffer && null !== ArrayBuffer ? n ? t : t.buffer : t),
                e.push(c)) : "undefined" != typeof XDomainRequest && (c = new XDomainRequest,
                "http:" === document.location.protocol && (l = l.replace("https://", "http://")),
                c.open("POST", l + "?stm=" + +Date.now()),
                c.onload = function(t) {
                    return function() {
                        return t.removeXDR(c, s),
                        s && "" !== s ? t.user.updateSessionIdSendStatus(!0, s) : void 0
                    }
                }(this),
                c.onerror = function(t) {
                    return function(e) {
                        return t.removeXDR(c, s)
                    }
                }(this),
                c.onprogress = function() {
                    return {}
                }
                ,
                c.ontimeout = function() {
                    return {}
                }
                ,
                c.send(t),
                r.push(c))) : ("http:" === document.location.protocol && (l = l.replace("https://", "http://")),
                h = l + "?data=" + t + "&stm=" + +Date.now(),
                h.length <= 2036 && this.imgSend(h, s)),
                window.trackHostUrl = l)
            }
            ,
            t.prototype.removeAjax = function(t) {
                var r;
                return r = e.indexOf(t),
                -1 !== r ? e.splice(r, 1) : void 0
            }
            ,
            t.prototype.removeXDR = function(t, e) {
                var n;
                return n = l.indexOf(r, t),
                -1 !== n && r.splice(n, 1),
                window.grWaitTime = +Date.now() + 10,
                "" !== e ? this.sendVisitTimeout -= 300 : void 0
            }
            ,
            t.prototype.imgSend = function(t, e) {
                var n;
                return n = document.createElement("img"),
                n.width = 1,
                n.height = 1,
                n.onload = function(t) {
                    return function() {
                        return t.imgSendClear(n, e),
                        e && "" !== e ? t.user.updateSessionIdSendStatus(!0, e) : void 0
                    }
                }(this),
                n.onerror = n.onabort = function(t) {
                    return function() {
                        return t.imgSendClear(n, e)
                    }
                }(this),
                n.src = t,
                r.push(n)
            }
            ,
            t.prototype.imgSendClear = function(t, e) {
                return t.onload = null,
                t.onerror = null,
                t.onabort = null,
                this.removeXDR(t, e)
            }
            ,
            t.prototype.dispatchEvents = function(t) {
                var e, r;
                for (e = 0,
                r = []; e < t.length; )
                    this.dispathMessage2Listener(t[e]),
                    r.push(e++);
                return r
            }
            ,
            t.prototype.dispathMessage2Listener = function(t) {
                var e, r;
                for (e = 0,
                r = []; e < this.listeners.length; )
                    this.listeners[e](t),
                    r.push(e += 1);
                return r
            }
            ,
            t.prototype.setListener = function(t) {
                return this.listeners.push(t)
            }
            ,
            t
        }(),
        e.exports = i
    }
    , {
        "../core/tools/utils": 19,
        "./beacon.js": 29,
        lzstring: 24
    }]
}, {}, [33]);
