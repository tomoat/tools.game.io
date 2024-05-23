!function() {
    "use strict";
    var t = function(t, n, e) {
        t.attachEvent ? t.attachEvent("on" + n, function(n) {
            e.call(t, n)
        }) : t.addEventListener && t.addEventListener(n, e, !1)
    };
    function r(n, t) {
        return "[object " + t + "]" === {}.toString.call(n)
    }
    var n, e, i, o = Object.assign || function(n) {
        if (r(n, "Object"))
            for (var t = 1, e = arguments.length; t < e; t++) {
                var i = arguments[t];
                if (null != i)
                    for (var o in i = Object(i))
                        Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
            }
        return n
    }
    , a = ((-1 !== (n = window.navigator.userAgent).indexOf("Android 2.") || -1 !== n.indexOf("Android 4.0")) && -1 !== n.indexOf("Mobile Safari") && -1 === n.indexOf("Chrome") && -1 === n.indexOf("Windows Phone") || window.history && 0 in window.history,
    (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && (window.history && "pushState"in window.history));
    function h(n) {
        try {
            var t = {
                shouldTrackUrlChange: this.shouldTrackUrlChange
            };
            this.opts = o(t, n),
            this.path = this.getPath(),
            this.bindEvents()
        } catch (n) {
            console && console.log("UrlChangeTracker error: ", n)
        }
    }
    h.prototype = {
        getPath: function() {
            try {
                return window.location.pathname + window.location.search + window.location.hash
            } catch (n) {
                return ""
            }
        },
        bindEvents: function() {
            var n = this;
            a ? (this.proxy(history, "pushState", function() {
                n.handleUrlChange(!0)
            }),
            this.proxy(history, "replaceState", function() {
                n.handleUrlChange(!1)
            }),
            t(window, "popstate", function() {
                n.handleUrlChange(!0)
            })) : t(window, "hashchange", function() {
                n.ensureSlash() && n.handleUrlChange(!0)
            })
        },
        ensureSlash: function() {
            var n = function() {
                var n = window.location.href
                  , t = n.indexOf("#");
                if (t < 0)
                    return "";
                var e = (n = n.slice(t + 1)).indexOf("?");
                return n = e < 0 ? -1 < (t = n.indexOf("#")) ? decodeURI(n.slice(0, t)) + n.slice(t) : decodeURI(n) : decodeURI(n.slice(0, e)) + n.slice(e)
            }();
            return "/" === n.charAt(0) || "!" === n.charAt(0)
        },
        handleUrlChange: function(e) {
            var i = this;
            setTimeout(function() {
                var n = i.path
                  , t = i.getPath();
                i.opts.shouldTrackUrlChange(t, n) && n !== t && (i.path = t,
                e && i.sendPageview(t, n))
            }, 0)
        },
        sendPageview: function(n, t) {
            window._hmt = window._hmt || [],
            window._hmt.push(["_trackPageDuration"]),
            window._hmt.push(["_setReferrerOverride", t]),
            window._hmt.push(["_trackPageview", n])
        },
        shouldTrackUrlChange: function(n, t) {
            return !(!n || !t)
        },
        proxy: function(n, t, e) {
            var i = n[t];
            n[t] = function() {
                i.apply(n, arguments),
                r(e, "Function") && e(Array.prototype.slice.call(arguments))
            }
        }
    },
    e = "UrlChangeTracker",
    i = h,
    window._hmt = window._hmt || [],
    window._hmt.push(["_providePlugin", e, i])
}();
