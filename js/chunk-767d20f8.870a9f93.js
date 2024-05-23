(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-767d20f8"], {
    "004e": function (t, e, n) {
        "use strict";
        n("6c3e")
    },
    "0383": function (t, e, n) {
        "use strict";
        n("c884")
    },
    "07ac": function (t, e, n) {
        var s = n("23e7")
            , o = n("6f53").values;
        s({
            target: "Object",
            stat: !0
        }, {
            values: function (t) {
                return o(t)
            }
        })
    },
    "2ae2": function (t, e, n) { },
    "2c16": function (t, e, n) {
        "use strict";
        n("e423")
    },
    "4ad1": function (t, e, n) {
        "use strict";
        n("2ae2")
    },
    "4fad": function (t, e, n) {
        var s = n("23e7")
            , o = n("6f53").entries;
        s({
            target: "Object",
            stat: !0
        }, {
            entries: function (t) {
                return o(t)
            }
        })
    },
    "4fadd": function (t, e, n) {
        var s = n("d039")
            , o = n("861d")
            , i = n("c6b6")
            , a = n("d86b")
            , r = Object.isExtensible
            , c = s((function () {
                r(1)
            }
            ));
        t.exports = c || a ? function (t) {
            return !!o(t) && ((!a || "ArrayBuffer" != i(t)) && (!r || r(t)))
        }
            : r
    },
    "5bcc": function (t, e, n) {
        "use strict";
        n.r(e);
        var s = function () {
            var t = this
                , e = t.$createElement
                , n = t._self._c || e;
            return n("div", {
                staticClass: "page-war"
            }, [n("van-notice-bar", {
                attrs: {
                    color: "#ff0000",
                    wrapable: "",
                    scrollable: !1,
                    text: "如果您想支持我，请加我微信【skyi2500】，给我发红包即可。"
                }
            }), t._m(0), n("div", {
                staticClass: "flex-space-between",
                staticStyle: {
                    margin: "10px 15px 0",
                    "font-size": "12px"
                }
            }, [n("a", {
                staticClass: "color-red",
                attrs: {
                    href: "https://note.youdao.com/s/Fx1lnxmQ",
                    target: "_blank"
                }
            }, [t._v("点击查看最新的智能版图文教学")]), n("a", {
                staticStyle: {
                    color: "#07c160"
                },
                attrs: {
                    href: t.buyLink,
                    target: "_blank"
                }
            }, [t._v("点击去购买")])]), n("Buy"), n("div", {
                staticClass: "tips-info"
            }, [t._v("所有的输入信息都是即时储存的，切页面或者退出，下次进来还会有数据，不会丢失")]), n("van-radio-group", {
                staticStyle: {
                    margin: "20px"
                },
                attrs: {
                    direction: "horizontal"
                },
                on: {
                    change: t.handleUpdateGuilds
                },
                model: {
                    value: t.state.rateType,
                    callback: function (e) {
                        t.$set(t.state, "rateType", e)
                    },
                    expression: "state.rateType"
                }
            }, [n("van-radio", {
                attrs: {
                    name: 0
                }
            }, [t._v("黄金局")]), n("van-radio", {
                attrs: {
                    name: 1
                }
            }, [t._v("钻石局")]), n("van-radio", {
                attrs: {
                    name: 2
                }
            }, [t._v("王者局")])], 1), n("TotalCountSelecter"), n("div", {
                staticClass: "tips-info"
            }, [t._v("从积分面板那边看，有几家，就选几")]), n("div", {
                staticClass: "tips-info color-red"
            }, [t._v(" 现在，检查下场上单个沙地的分数，是不是"), n("strong", [t._v(t._s(t.getScoreByType(13)))]), t._v("。如果不是，说明你上面弄错了 ")]), n("div", {
                staticClass: "block-title flex-space-between"
            }, [t._v("第一步，请输入公会名和位置关系"), n("span", {
                staticClass: "color-red",
                staticStyle: {
                    "font-size": "12px"
                },
                on: {
                    click: t.showThreeInfo
                }
            }, [t._v("查看三并说明")])]), 0 === t.state.rateType ? n("div", {
                staticClass: "tips-info color-red"
            }, [t._v("请按逆时针顺序输入公会名")]) : n("div", {
                staticClass: "tips-info color-red"
            }, [t._v("注意公会地图位置的上下左右关系")]), n("div", {
                staticClass: "tips-info"
            }, [t._v("如果不输入名称，则不会参与计算。可用于任意数量公会并列")]), n("InputName"), n("RoundSelecter"), n("Scores"), n("div", {
                staticClass: "block-title"
            }, [t._v("第四步，确定银行安排")]), n("BankHistory"), n("EmptyLands"), n("div", {
                staticClass: "block-title"
            }, [t._v("上面的都填好了，就开始计算吧")]), n("van-button", {
                staticClass: "beginCalc",
                attrs: {
                    type: "primary",
                    block: ""
                },
                on: {
                    click: t.beginCalc
                }
            }, [t._v("开始计算吧")]), t.state.resultText ? n("div", {
                class: "resultText " + ("success" == t.state.resultText ? "success" : "")
            }, [t._v(" " + t._s("success" == t.state.resultText ? "已满足平局前提" : t.state.resultText) + " ")]) : t._e(), n("ScoreResult", t._g(t._b({
                on: {
                    refresh: t.beginCalc,
                    view: t.viewByGroup
                }
            }, "ScoreResult", t.$attrs, !1), t.$listeners)), n("div", {
                staticClass: "buttons-bottom",
                staticStyle: {
                    margin: "10px 20px"
                }
            }, [n("van-button", {
                staticClass: "copyMethod",
                attrs: {
                    type: "info",
                    size: "small",
                    plain: ""
                },
                on: {
                    click: function (e) {
                        return t.copyMethod()
                    }
                }
            }, [t._v("复制方案")]), n("van-button", {
                staticClass: "copyMethod",
                attrs: {
                    type: "primary",
                    size: "small",
                    plain: ""
                },
                on: {
                    click: t.loadMethod
                }
            }, [t._v("加载方案")]), n("van-button", {
                staticClass: "copyMethod",
                attrs: {
                    type: "warning",
                    size: "small",
                    plain: ""
                },
                on: {
                    click: t.clearStore
                }
            }, [t._v("删除方案")])], 1), n("div", {
                staticClass: "buttons-bottom",
                staticStyle: {
                    margin: "10px 20px"
                }
            }, [n("van-button", {
                staticClass: "copyMethod",
                attrs: {
                    type: "info",
                    size: "small",
                    plain: ""
                },
                on: {
                    click: t.saveToServer
                }
            }, [t._v("储存方案到服务器")]), n("van-button", {
                staticClass: "copyMethod",
                attrs: {
                    type: "primary",
                    size: "small",
                    plain: ""
                },
                on: {
                    click: t.showLoadPlan
                }
            }, [t._v("从服务器加载方案")])], 1), n("van-action-sheet", {
                attrs: {
                    actions: t.showLoadMethod.loadActions,
                    "cancel-text": "取消",
                    "close-on-click-action": ""
                },
                on: {
                    select: t.onSelectLoadPlan
                },
                model: {
                    value: t.showLoadMethod.showLoadAction,
                    callback: function (e) {
                        t.$set(t.showLoadMethod, "showLoadAction", e)
                    },
                    expression: "showLoadMethod.showLoadAction"
                }
            }), n("van-dialog", {
                attrs: {
                    title: "输入卡密",
                    "show-cancel-button": "",
                    beforeClose: t.handleConfirmGetPlanByCoupon
                },
                model: {
                    value: t.showLoadMethod.showInputCoupon,
                    callback: function (e) {
                        t.$set(t.showLoadMethod, "showInputCoupon", e)
                    },
                    expression: "showLoadMethod.showInputCoupon"
                }
            }, [n("van-field", {
                attrs: {
                    border: !0,
                    rows: "3",
                    type: "textarea",
                    placeholder: "请输入购买时候获得的卡密"
                },
                model: {
                    value: t.showLoadMethod.inputCouponValue,
                    callback: function (e) {
                        t.$set(t.showLoadMethod, "inputCouponValue", e)
                    },
                    expression: "showLoadMethod.inputCouponValue"
                }
            })], 1), n("van-dialog", {
                attrs: {
                    title: "加载方案",
                    "show-cancel-button": ""
                },
                on: {
                    confirm: function (e) {
                        return t.handleConfirmLoad()
                    }
                },
                model: {
                    value: t.showLoadMethod.show,
                    callback: function (e) {
                        t.$set(t.showLoadMethod, "show", e)
                    },
                    expression: "showLoadMethod.show"
                }
            }, [n("van-field", {
                attrs: {
                    border: !0,
                    rows: "4",
                    type: "textarea",
                    placeholder: "将复制出来的方案贴在这里即可"
                },
                model: {
                    value: t.showLoadMethod.value,
                    callback: function (e) {
                        t.$set(t.showLoadMethod, "value", e)
                    },
                    expression: "showLoadMethod.value"
                }
            })], 1), n("GroupActionView", {
                model: {
                    value: t.showGroupResult.show,
                    callback: function (e) {
                        t.$set(t.showGroupResult, "show", e)
                    },
                    expression: "showGroupResult.show"
                }
            })], 1)
        }
            , o = [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "help-info"
                }, [n("h4", [t._v("想要并列，需要以下条件")]), n("ul", [n("li", [t._v("各家谈好，管理统一控制出兵，不乱打。")]), n("li", [t._v("银行分配先谈好，正常1222分配。一般双金矿的银行占一天，第一天占。都是单矿的，协商分配。")]), n("li", [n("span", {
                    staticClass: "color-red"
                }, [t._v("全场，每家预留1个沙地即可（枯木也可以）")]), t._v("。其实理论上最终全场只要能有1个保留下来即可四家平局，每家都留是为了容错防意外的。")]), n("li", {
                    staticClass: "highlight"
                }, [t._v("最新的智能快捷算分，可实现5分钟内算分出结果，绝对是全网最方便、最快捷、最简单的了。还在纠结要不要花5块钱体验一下的用户，请先看看此 "), n("a", {
                    staticClass: "color-red",
                    attrs: {
                        href: "https://note.youdao.com/s/Fx1lnxmQ",
                        target: "_blank"
                    }
                }, [t._v("使用教程")])])])])
            }
            ];
        function i(t) {
            if (Array.isArray(t))
                return t
        }
        n("a4d3"),
            n("e01a"),
            n("d3b7"),
            n("d28b"),
            n("3ca3"),
            n("ddb0");
        function a(t, e) {
            var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var s, o, i = [], a = !0, r = !1;
                try {
                    for (n = n.call(t); !(a = (s = n.next()).done); a = !0)
                        if (i.push(s.value),
                            e && i.length === e)
                            break
                } catch (c) {
                    r = !0,
                        o = c
                } finally {
                    try {
                        a || null == n["return"] || n["return"]()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return i
            }
        }
        var r = n("06c5");
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function l(t, e) {
            return i(t) || a(t, e) || Object(r["a"])(t, e) || c()
        }
        var u = n("1da1")
            , d = (n("96cf"),
                n("159b"),
                n("07ac"),
                n("4fad"),
                n("a9e3"),
                n("7db0"),
                n("4de4"),
                n("99af"),
                n("a630"),
                n("6062"),
                n("a15b"),
                n("d81d"),
                n("e9c4"),
                n("b0c0"),
                n("ac1f"),
                n("5319"),
                n("fa7d"))
            , f = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", [0 === t.state.rateType ? t._l(t.guilds, (function (e, s) {
                    return n("div", {
                        key: e.name,
                        staticClass: "inputName-line"
                    }, [n("span", {
                        staticClass: "inputName-title"
                    }, [t._v(t._s(s))]), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.alias,
                            expression: "item.alias"
                        }],
                        staticClass: "inputName",
                        attrs: {
                            type: "text",
                            placeholder: e.name,
                            maxlength: "6"
                        },
                        domProps: {
                            value: e.alias
                        },
                        on: {
                            input: function (n) {
                                n.target.composing || t.$set(e, "alias", n.target.value)
                            }
                        }
                    })])
                }
                )) : [n("div", {
                    staticClass: "row1 flex-center justify-center"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.guilds["A"].alias,
                        expression: "guilds['A'].alias"
                    }],
                    staticClass: "inputName",
                    attrs: {
                        type: "text",
                        placeholder: t.guilds["A"].name,
                        maxlength: "6"
                    },
                    domProps: {
                        value: t.guilds["A"].alias
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.guilds["A"], "alias", e.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "row2 flex-center justify-center"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.guilds["B"].alias,
                        expression: "guilds['B'].alias"
                    }],
                    staticClass: "inputName",
                    attrs: {
                        type: "text",
                        placeholder: t.guilds["B"].name,
                        maxlength: "6"
                    },
                    domProps: {
                        value: t.guilds["B"].alias
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.guilds["B"], "alias", e.target.value)
                        }
                    }
                }), n("div", {
                    staticClass: "empty-center"
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.guilds["D"].alias,
                        expression: "guilds['D'].alias"
                    }],
                    staticClass: "inputName",
                    attrs: {
                        type: "text",
                        placeholder: t.guilds["D"].name,
                        maxlength: "6"
                    },
                    domProps: {
                        value: t.guilds["D"].alias
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.guilds["D"], "alias", e.target.value)
                        }
                    }
                })]), n("div", {
                    staticClass: "row3 flex-center justify-center"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.guilds["C"].alias,
                        expression: "guilds['C'].alias"
                    }],
                    staticClass: "inputName",
                    attrs: {
                        type: "text",
                        placeholder: t.guilds["C"].name,
                        maxlength: "6"
                    },
                    domProps: {
                        value: t.guilds["C"].alias
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || t.$set(t.guilds["C"], "alias", e.target.value)
                        }
                    }
                })])]], 2)
            }
            , h = []
            , p = {
                name: "InputName",
                components: {},
                data: function () {
                    return {}
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    }
                },
                mounted: function () { },
                methods: {}
            }
            , v = p
            , m = (n("a11e"),
                n("2877"))
            , g = Object(m["a"])(v, f, h, !1, null, "58858217", null)
            , b = g.exports
            , k = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", [n("van-field", {
                    attrs: {
                        readonly: "",
                        clickable: "",
                        label: "场上公会数量：",
                        value: t.state.totalCount,
                        placeholder: "请选择",
                        "right-icon": "arrow",
                        "label-width": "8em"
                    },
                    on: {
                        click: function (e) {
                            t.showPicker = !0
                        }
                    }
                }), n("van-popup", {
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.showPicker,
                        callback: function (e) {
                            t.showPicker = e
                        },
                        expression: "showPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "default-index": t.state.totalCount - 1,
                        "show-toolbar": "",
                        columns: t.columns,
                        "value-key": "name"
                    },
                    on: {
                        cancel: function (e) {
                            t.showPicker = !1
                        },
                        confirm: t.onConfirm
                    }
                })], 1)], 1)
            }
            , y = []
            , C = {
                name: "TotalCountSelecter",
                components: {},
                data: function () {
                    return {
                        showPicker: !1
                    }
                },
                watch: {
                    "$store.state.rateType": {
                        handler: function () {
                            this.state.totalCount > this.maxCount && (this.state.totalCount = this.maxCount)
                        },
                        deep: !0
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    maxCount: function () {
                        return 0 == this.state.rateType ? 6 : 4
                    },
                    columns: function () {
                        for (var t = this.maxCount, e = [], n = 1; n <= t; n++)
                            e.push({
                                name: "场上总共有".concat(n, "家"),
                                value: n
                            });
                        return e
                    }
                },
                mounted: function () { },
                methods: {
                    onConfirm: function (t) {
                        this.state.totalCount = t.value,
                            this.showPicker = !1
                    }
                }
            }
            , _ = C
            , w = Object(m["a"])(_, k, y, !1, null, "a08a0584", null)
            , x = w.exports
            , P = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "block-title"
                }, [t._v("第二步，设置剩余的轮数")]), n("van-field", {
                    attrs: {
                        readonly: "",
                        clickable: "",
                        label: "剩余轮数：",
                        value: t.roundName,
                        placeholder: "请选择",
                        "right-icon": "arrow"
                    },
                    on: {
                        click: function (e) {
                            t.showPicker = !0
                        }
                    }
                }), n("van-popup", {
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.showPicker,
                        callback: function (e) {
                            t.showPicker = e
                        },
                        expression: "showPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "default-index": t.defaultIndex,
                        "show-toolbar": "",
                        columns: t.columns,
                        "value-key": "name"
                    },
                    on: {
                        cancel: function (e) {
                            t.showPicker = !1
                        },
                        confirm: t.onConfirm
                    }
                })], 1)], 1)
            }
            , T = []
            , $ = (n("c740"),
            {
                name: "RoundSelecter",
                components: {},
                data: function () {
                    return {
                        showPicker: !1,
                        columns: Object(d["a"])(17),
                        defaultIndex: 2
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    roundName: function () {
                        return "".concat(this.state.leftRounds, "（").concat(Object(d["b"])(this.state.leftRounds), "）")
                    }
                },
                mounted: function () {
                    var t = this;
                    this.defaultIndex = this.columns.findIndex((function (e) {
                        return e.value == t.state.leftRounds
                    }
                    ))
                },
                methods: {
                    onConfirm: function (t) {
                        this.state.leftRounds = t.value,
                            this.showPicker = !1
                    }
                }
            })
            , S = $
            , O = Object(m["a"])(S, P, T, !1, null, "00837a74", null)
            , N = O.exports
            , j = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "scores"
                }, [n("div", {
                    staticClass: "block-title flex-space-between",
                    staticStyle: {
                        "margin-bottom": "0"
                    }
                }, [n("span", [t._v("第三步，输入最近两轮的分数")]), n("van-button", {
                    attrs: {
                        icon: "exchange",
                        type: "primary",
                        size: "mini",
                        color: "red"
                    },
                    on: {
                        click: t.switchScore
                    }
                })], 1), n("div", {
                    staticClass: "tips-info"
                }, [t._v("注意：右边的分比左面的分高，不要输反了")]), n("van-cell-group", [n("div", {
                    staticClass: "groupTitle flex-space-between",
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [n("span", {
                    staticStyle: {
                        width: "100px"
                    }
                }, [t._v("公会")]), n("div", {
                    staticClass: "inputs flex-center"
                }, [n("span", {
                    staticClass: "inputScore"
                }, [t._v(t._s(t.getRoundName(t.state.leftRounds + 2)) + "轮")]), n("span", {
                    staticClass: "inputScore"
                }, [t._v(t._s(t.getRoundName(t.state.leftRounds + 1)) + "轮")])])]), t._l(t.guilds, (function (e, s) {
                    return n("van-cell", {
                        key: s,
                        attrs: {
                            title: e.alias || e.name
                        }
                    }, [n("div", {
                        staticClass: "inputs flex-center"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.score1,
                            expression: "item.score1"
                        }],
                        staticClass: "inputScore",
                        class: {
                            "has-err": t.isErr(e.score1)
                        },
                        attrs: {
                            type: "number",
                            placeholder: "请输入",
                            maxlength: "7"
                        },
                        domProps: {
                            value: e.score1
                        },
                        on: {
                            blur: t.checkValue,
                            input: function (n) {
                                n.target.composing || t.$set(e, "score1", n.target.value)
                            }
                        }
                    }), n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.score2,
                            expression: "item.score2"
                        }],
                        staticClass: "inputScore",
                        class: {
                            "has-err": t.isErr(e.score2)
                        },
                        attrs: {
                            type: "number",
                            placeholder: "请输入",
                            maxlength: "7"
                        },
                        domProps: {
                            value: e.score2
                        },
                        on: {
                            blur: t.checkValue,
                            input: function (n) {
                                n.target.composing || t.$set(e, "score2", n.target.value)
                            }
                        }
                    })])])
                }
                ))], 2)], 1)
            }
            , L = []
            , R = {
                name: "Scores",
                components: {},
                data: function () {
                    return {}
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    }
                },
                mounted: function () { },
                methods: {
                    checkValue: function (t) {
                        console.log(t),
                            Object(d["g"])(t.target.value) || (t.target.value = "")
                    },
                    getRoundName: function (t) {
                        return Object(d["b"])(t)
                    },
                    isErr: function (t) {
                        if (!Object(d["g"])(t))
                            return !1;
                        if (t = Number(t),
                            !(t < 1e3)) {
                            var e = this.$store.getters["pointRate"]
                                , n = (t - 1e3) % e;
                            return 0 !== n
                        }
                    },
                    switchScore: function () {
                        var t = this;
                        this.$dialog.confirm({
                            title: "注意",
                            message: "此操作将后一轮的分复制到前一轮，同时清空后一轮的分，确定要这么干？"
                        }).then((function () {
                            Object.values(t.guilds).forEach((function (t) {
                                t.score1 = t.score2,
                                    t.score2 = ""
                            }
                            ))
                        }
                        )).catch((function () { }
                        ))
                    }
                }
            }
            , I = R
            , A = (n("ebb7"),
                Object(m["a"])(I, j, L, !1, null, "717871ea", null))
            , E = A.exports
            , M = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("van-cell-group", {
                    staticClass: "bankHistoryContainer"
                }, [n("div", {
                    staticClass: "wrapper"
                }, [n("div", {
                    staticClass: "day-header"
                }, [n("div", {
                    staticClass: "titles"
                }, [n("div", {
                    staticClass: "title"
                })]), n("div", {
                    staticClass: "week"
                }, [t._v("星期一")]), n("div", {
                    staticClass: "week"
                }, [t._v("星期二")]), n("div", {
                    staticClass: "week"
                }, [t._v("星期三")]), n("div", {
                    staticClass: "week"
                }, [t._v("星期四")]), n("div", {
                    staticClass: "week"
                }, [t._v("星期五")]), n("div", {
                    staticClass: "week"
                }, [t._v("星期六")]), n("div", {
                    staticClass: "week"
                }, [t._v("星期日")])]), n("div", {
                    staticClass: "day-header"
                }, [n("div", {
                    staticClass: "titles"
                }, [n("div", {
                    staticClass: "title"
                }), t._l(t.guilds, (function (e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "title"
                    }, [t._v(t._s(e.alias || e.name))])
                }
                ))], 2), t._l(t.bankHistory, (function (e) {
                    return n("div", {
                        key: e.day,
                        staticClass: "days"
                    }, [n("div", {
                        staticClass: "day",
                        class: {
                            "color-red": e.day <= t.state.leftRounds + 1 && !e.checked
                        },
                        on: {
                            click: function (t) {
                                e.checked = ""
                            }
                        }
                    }, [t._v(t._s(e.day))]), n("van-radio-group", {
                        model: {
                            value: e.checked,
                            callback: function (n) {
                                t.$set(e, "checked", n)
                            },
                            expression: "day.checked"
                        }
                    }, t._l(t.guilds, (function (t, e) {
                        return n("van-radio", {
                            key: e,
                            staticClass: "radio",
                            attrs: {
                                name: e,
                                shape: "square"
                            }
                        })
                    }
                    )), 1)], 1)
                }
                ))], 2)])])
            }
            , q = []
            , B = {
                name: "BankHistory",
                components: {},
                data: function () {
                    return {}
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    },
                    bankHistory: function () {
                        return this.$store.state.bankHistory
                    }
                },
                mounted: function () { },
                methods: {}
            }
            , z = B
            , D = (n("ed45"),
                Object(m["a"])(z, M, q, !1, null, "12376a9c", null))
            , G = D.exports
            , Q = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "block-title flex-space-between"
                }, [n("span", [t._v("第五步，填写空地")]), t.showTips ? n("div", {
                    staticClass: "tips-button",
                    on: {
                        click: function (e) {
                            t.showTips = !t.showTips
                        }
                    }
                }, [t._v(" 收起说明 "), n("van-icon", {
                    attrs: {
                        name: "arrow-up"
                    }
                })], 1) : n("div", {
                    staticClass: "tips-button",
                    on: {
                        click: function (e) {
                            t.showTips = !t.showTips
                        }
                    }
                }, [t._v(" 显示说明 "), n("van-icon", {
                    attrs: {
                        name: "arrow-down"
                    }
                })], 1)]), t.showTips ? n("div", {
                    staticClass: "tips-info"
                }, [t._v(" 所有当前未占领的，都可以当成空地（比如高塔也算） "), n("br"), t._v("可以"), n("span", {
                    staticClass: "color-red"
                }, [t._v("先假设所有的预留空地都尽量早占领")]), t._v("。 "), n("br"), t._v("如果无法平局，后面会提示的。 "), n("br"), t._v("比如，假设现在是第一周星期天晚上22：00后，（第三轮刚结算完），那么剩余的轮数是14，下一轮是星期一的第一轮。 "), n("br"), t._v("假如现在全场有两个沙地，则点击+空地，添加这两个沙地，占领时机为星期一的第一轮。然后去计算是否可平局。 "), n("br"), t._v("如果无法平局，可根据提示，将预留的地皮延后占领。比如，假设提示延后2次，那么你可以将1块沙地延后2轮，或者将2块沙地延后1轮，效果是一样的。 ")]) : t._e(), n("van-cell-group", [n("van-button", {
                    staticClass: "add-btn",
                    attrs: {
                        icon: "plus",
                        type: "primary",
                        plain: "",
                        size: "small"
                    },
                    on: {
                        click: t.handleShowPicker
                    }
                }, [t._v("空地")]), t._l(t.leftLands, (function (e, s) {
                    return n("van-cell", {
                        key: s,
                        staticClass: "empty-land-cell",
                        attrs: {
                            title: t.guildToName(e.guild)
                        }
                    }, [n("div", [t._v(t._s(e.typeName) + " * " + t._s(e.count) + "，" + t._s(t.roundToString(e.round)) + " 占领 "), n("van-icon", {
                        attrs: {
                            name: "edit",
                            color: "#1989fa"
                        },
                        on: {
                            click: function (n) {
                                return t.handleEdit(e, s)
                            }
                        }
                    })], 1), n("van-icon", {
                        staticClass: "delete",
                        attrs: {
                            slot: "right-icon",
                            name: "delete",
                            color: "red"
                        },
                        on: {
                            click: function (e) {
                                return t.handleDelete(s)
                            }
                        },
                        slot: "right-icon"
                    })], 1)
                }
                ))], 2), n("van-popup", {
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.showPicker,
                        callback: function (e) {
                            t.showPicker = e
                        },
                        expression: "showPicker"
                    }
                }, [n("van-nav-bar", {
                    attrs: {
                        title: 1 == t.action ? "添加空地" : "修改空地",
                        "left-text": "取消",
                        "right-text": "确定"
                    },
                    on: {
                        "click-left": function (e) {
                            t.showPicker = !1
                        },
                        "click-right": t.handleComfirmForm
                    }
                }), n("van-form", {
                    staticStyle: {
                        "margin-bottom": "30px"
                    }
                }, [n("van-field", {
                    attrs: {
                        readonly: "",
                        clickable: "",
                        name: "guild",
                        value: t.guildToName(t.form.guild),
                        label: "所属公会",
                        placeholder: "选择公会"
                    },
                    on: {
                        click: function (e) {
                            t.guildPicker = !0
                        }
                    }
                }), n("van-field", {
                    attrs: {
                        readonly: "",
                        clickable: "",
                        name: "type",
                        value: t.form.typeName,
                        label: "地皮类型",
                        placeholder: "选择地皮"
                    },
                    on: {
                        click: function (e) {
                            t.typePicker = !0
                        }
                    }
                }), n("van-field", {
                    attrs: {
                        name: "count",
                        label: "数量"
                    }
                }, [n("van-stepper", {
                    attrs: {
                        slot: "input"
                    },
                    slot: "input",
                    model: {
                        value: t.form.count,
                        callback: function (e) {
                            t.$set(t.form, "count", e)
                        },
                        expression: "form.count"
                    }
                })], 1), n("van-field", {
                    attrs: {
                        name: "count",
                        readonly: "",
                        clickable: "",
                        label: "预计啥时候占",
                        value: t.roundToString(t.form.round),
                        placeholder: "请选择"
                    },
                    on: {
                        click: function (e) {
                            t.roundPicker = !0
                        }
                    }
                })], 1)], 1), n("van-popup", {
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.guildPicker,
                        callback: function (e) {
                            t.guildPicker = e
                        },
                        expression: "guildPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "show-toolbar": "",
                        columns: t.guildsPicker,
                        "value-key": "name"
                    },
                    on: {
                        cancel: function (e) {
                            t.guildPicker = !1
                        },
                        confirm: t.confirmGuild
                    }
                })], 1), n("van-popup", {
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.typePicker,
                        callback: function (e) {
                            t.typePicker = e
                        },
                        expression: "typePicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "show-toolbar": "",
                        columns: t.basePoints,
                        "value-key": "title"
                    },
                    on: {
                        cancel: function (e) {
                            t.typePicker = !1
                        },
                        confirm: t.confirmType
                    }
                })], 1), n("van-popup", {
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.roundPicker,
                        callback: function (e) {
                            t.roundPicker = e
                        },
                        expression: "roundPicker"
                    }
                }, [n("van-picker", {
                    attrs: {
                        "show-toolbar": "",
                        columns: t.roundList,
                        "value-key": "name"
                    },
                    on: {
                        cancel: function (e) {
                            t.roundPicker = !1
                        },
                        confirm: t.confirmRound
                    }
                })], 1)], 1)
            }
            , F = []
            , U = (n("a434"),
            {
                guild: "",
                type: "",
                typeName: "",
                count: 1,
                round: ""
            })
            , V = {
                name: "EmptyLands",
                components: {},
                data: function () {
                    return {
                        showPicker: !1,
                        form: Object.assign({}, U),
                        action: 1,
                        editIndex: 0,
                        guildPicker: !1,
                        typePicker: !1,
                        roundPicker: !1,
                        roundList: Object(d["a"])(17),
                        showTips: !0
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    },
                    guildsPicker: function () {
                        var t = [];
                        for (var e in this.guilds)
                            t.push({
                                name: this.guildToName(e),
                                value: e
                            });
                        return t
                    },
                    basePoints: function () {
                        var t = this;
                        return this.$store.getters["basePoints"].filter((function (t) {
                            return 230 !== t.base
                        }
                        )).map((function (e) {
                            return e.title = "".concat(e.name, "(").concat(t.$store.getters["pointRate"] * e.base, ")"),
                                e
                        }
                        ))
                    },
                    leftLands: function () {
                        return this.$store.state.leftLands
                    }
                },
                mounted: function () { },
                methods: {
                    guildToName: function (t) {
                        return Object(d["f"])(t, this.guilds)
                    },
                    roundToString: function (t) {
                        return t && Object(d["b"])(t) || ""
                    },
                    handleShowPicker: function () {
                        this.form = Object.assign({}, U),
                            this.action = 1,
                            this.showPicker = !0
                    },
                    handleComfirmForm: function () {
                        var t = this.form;
                        t.guild ? t.type ? t.round ? (console.log(t),
                            1 == this.action ? this.leftLands.push(t) : this.leftLands[this.editIndex] = t,
                            this.showPicker = !1) : this.$toast("必须选一个轮") : this.$toast("请选择地皮") : this.$toast("请选择公会")
                    },
                    handleDelete: function (t) {
                        this.leftLands.splice(t, 1)
                    },
                    handleEdit: function (t, e) {
                        this.form = Object.assign({}, t),
                            this.action = 2,
                            this.editIndex = e,
                            this.showPicker = !0
                    },
                    confirmGuild: function (t) {
                        this.form.guild = t.value,
                            this.guildPicker = !1
                    },
                    confirmType: function (t) {
                        this.form.type = t.base,
                            this.form.typeName = t.name,
                            this.typePicker = !1
                    },
                    confirmRound: function (t) {
                        this.form.round = t.value,
                            this.roundPicker = !1
                    }
                }
            }
            , H = V
            , J = (n("2c16"),
                Object(m["a"])(H, Q, F, !1, null, "ac2df036", null))
            , W = J.exports
            , Z = function () {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return t.result.length ? s("div", [s("div", {
                    staticClass: "block-title"
                }, [t._v("如果上面告诉你已满足平局前提，就可以往下看了")]), s("van-radio-group", {
                    staticStyle: {
                        margin: "30px 20px 10px"
                    },
                    attrs: {
                        direction: "horizontal"
                    },
                    model: {
                        value: t.filterType,
                        callback: function (e) {
                            t.filterType = e
                        },
                        expression: "filterType"
                    }
                }, [s("van-radio", {
                    attrs: {
                        name: "score"
                    }
                }, [t._v("总分")]), s("van-radio", {
                    attrs: {
                        name: "diff"
                    }
                }, [t._v("增长分")]), s("van-radio", {
                    attrs: {
                        name: "offset"
                    }
                }, [t._v("调整目标")])], 1), "score" == t.filterType && t.average ? s("div", {
                    staticClass: "van-cell-group__title"
                }, [t._v("目前" + t._s(t.calcCount) + "家的最后一天平均分是：" + t._s(t.average))]) : t._e(), "diff" == t.filterType ? s("div", {
                    staticClass: "van-cell-group__title"
                }, [t._v("注意：增长分是没有算银行的哦")]) : t._e(), "offset" == t.filterType ? s("div", {
                    staticClass: "van-cell-group__title"
                }, [t._v("调整目标主要看最后一轮的，别的没意义")]) : t._e(), s("van-cell-group", {
                    staticClass: "scoreResultContainer"
                }, [s("div", {
                    staticClass: "dayCol names"
                }, [s("div", {
                    staticClass: "score round"
                }, [t._v("周")]), s("div", {
                    staticClass: "score round"
                }, [t._v("-")]), t._l(t.result[0].names, (function (e, n) {
                    return s("div", {
                        key: n,
                        staticClass: "score"
                    }, [t._v(t._s(e))])
                }
                ))], 2), s("div", {
                    staticClass: "wrapper"
                }, t._l(t.result, (function (e) {
                    return s("div", {
                        key: e.round,
                        staticClass: "dayCol"
                    }, [s("div", {
                        staticClass: "score round"
                    }, [t._v(t._s(t.getWeekName(e.round)))]), s("div", {
                        staticClass: "score round"
                    }, [t._v(t._s(e.round))]), "score" == t.filterType || "diff" == t.filterType ? t._l(e[t.filterType], (function (e, n) {
                        return s("div", {
                            key: n,
                            staticClass: "score"
                        }, [t._v(t._s(e))])
                    }
                    )) : "offset" == t.filterType ? t._l(e.score, (function (n, o) {
                        return s("div", {
                            key: o,
                            staticClass: "score"
                        }, [t._v(t._s(n ? t.totalScore(e.score).average - n : 0))])
                    }
                    )) : t._e()], 2)
                }
                )), 0)]), s("Actions", t._g(t._b({
                    ref: "actionComp"
                }, "Actions", t.$attrs, !1), t.$listeners)), t.actions.length && !t.resultList.length ? [s("div", {
                    staticClass: "resultText"
                }, [t._v("恭喜，计算平局成功~")]), t._m(0)] : [s("div", {
                    staticClass: "block-title"
                }, [t._v("最终，还需要如下的调整（是最终，不是每天）")]), "success" != t.state.resultText ? s("div", {
                    staticClass: "warning"
                }, [t._v("注意：没满足并列前提，现在还不能算分的！")]) : t._e(), s("van-cell-group", t._l(t.resultList, (function (e, n) {
                    return s("van-cell", {
                        key: n,
                        staticClass: "result-cell",
                        attrs: {
                            value: e
                        }
                    }, [s("div", [s("span", {
                        staticClass: "highlight2"
                    }, [t._v(t._s(t.guildToName(e.to)))]), t._v(" 占 "), s("span", {
                        staticClass: "highlight2"
                    }, [t._v(t._s(t.guildToName(e.from)))]), t._v(" 的 "), s("span", {
                        staticClass: "highlight"
                    }, [t._v(t._s(e.score))])]), s("div", {
                        staticClass: "right-icon",
                        attrs: {
                            slot: "right-icon"
                        },
                        slot: "right-icon"
                    }, [s("span", {
                        staticClass: "quick-icon",
                        on: {
                            click: function (n) {
                                return t.showQuickCalcPanel(e)
                            }
                        }
                    }, [t._v("智能计算")]), s("van-icon", {
                        attrs: {
                            name: "add-o",
                            size: "20"
                        },
                        on: {
                            click: function (n) {
                                return t.addAction(e)
                            }
                        }
                    }), s("van-icon", {
                        staticStyle: {
                            "margin-left": "16px"
                        },
                        attrs: {
                            name: "play-circle-o",
                            size: "20"
                        },
                        on: {
                            click: function (n) {
                                return t.gotoCalc(e)
                            }
                        }
                    })], 1)])
                }
                )), 1), s("div", {
                    staticClass: "lab-function"
                }, [s("div", {
                    staticClass: "tips-info color-red"
                }, [t._v("试验性功能：快捷计算")]), s("div", {
                    staticClass: "tips-info"
                }, [t._v("点击后，会默认用沙地和枯木去做计算，直接写好一套可并列的动作。但是呢，如果分差太大，第一天的沙地会非常多，无法实现。如果分差太大，建议先手动添加一些高分值的地皮，分差小于 "), s("span", {
                    staticClass: "color-red"
                }, [t._v(t._s(t.quickCalcLimit))]), t._v(" 后再来点这个【快捷计算】")]), s("van-button", {
                    attrs: {
                        type: "info",
                        block: ""
                    },
                    on: {
                        click: t.handleQuickCalcAll
                    }
                }, [t._v("快捷计算")])], 1), t._m(1)], s("van-dialog", {
                    model: {
                        value: t.showZan,
                        callback: function (e) {
                            t.showZan = e
                        },
                        expression: "showZan"
                    }
                }, [s("p", {
                    staticStyle: {
                        margin: "10px 20px"
                    }
                }, [t._v("如果这个工具有给你节省了至少1小时，是不是该给作者打个赏什么的呢~")]), s("img", {
                    staticStyle: {
                        display: "block",
                        width: "100%",
                        "max-width": "400px"
                    },
                    attrs: {
                        src: n("97a5")
                    }
                })]), s("van-popup", {
                    style: {
                        height: "450px"
                    },
                    attrs: {
                        position: "bottom"
                    },
                    model: {
                        value: t.quickCalcPicker.show,
                        callback: function (e) {
                            t.$set(t.quickCalcPicker, "show", e)
                        },
                        expression: "quickCalcPicker.show"
                    }
                }, [s("van-nav-bar", {
                    attrs: {
                        title: "智能快捷计算",
                        "left-text": "取消",
                        "right-text": "添加到总安排"
                    },
                    on: {
                        "click-left": function (e) {
                            t.quickCalcPicker.show = !1
                        },
                        "click-right": t.handleQuickCalcConfirm
                    }
                }), s("van-form", {
                    staticStyle: {
                        "margin-bottom": "30px"
                    }
                }, [s("van-cell", {
                    attrs: {
                        title: "目标",
                        "title-class": "popup-title-style",
                        "value-class": "popup-value-style"
                    }
                }, [s("div", [s("span", {
                    staticClass: "highlight2"
                }, [t._v(t._s(t.guildToName(t.quickCalcPicker.item.to)))]), t._v(" 占 "), s("span", {
                    staticClass: "highlight2"
                }, [t._v(t._s(t.guildToName(t.quickCalcPicker.item.from)))]), t._v(" 的 "), s("span", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.quickCalcPicker.item.score))])])]), s("van-cell", {
                    attrs: {
                        title: "选用地形",
                        label: "会用沙地+选中地形计算",
                        "title-class": "popup-title-style",
                        "value-class": "popup-value-style"
                    }
                }, [s("van-radio-group", {
                    attrs: {
                        direction: "horizontal"
                    },
                    on: {
                        change: t.handleRefreshQuickCalc
                    },
                    model: {
                        value: t.quickCalcPicker.selected,
                        callback: function (e) {
                            t.$set(t.quickCalcPicker, "selected", e)
                        },
                        expression: "quickCalcPicker.selected"
                    }
                }, t._l(t.basePoints, (function (e) {
                    return s("van-radio", {
                        key: e.base,
                        staticStyle: {
                            margin: "0 10px 10px 0"
                        },
                        attrs: {
                            name: e.base
                        }
                    }, [t._v(t._s(e.title))])
                }
                )), 1)], 1), s("van-cell", {
                    attrs: {
                        title: "是否反向",
                        "title-class": "popup-title-style",
                        "value-class": "popup-value-style"
                    }
                }, [s("div", {
                    staticClass: "flex-center"
                }, [s("van-switch", {
                    attrs: {
                        size: "24px"
                    },
                    on: {
                        change: t.handleRefreshQuickCalc
                    },
                    model: {
                        value: t.quickCalcPicker.isReverse,
                        callback: function (e) {
                            t.$set(t.quickCalcPicker, "isReverse", e)
                        },
                        expression: "quickCalcPicker.isReverse"
                    }
                }), s("span", {
                    staticStyle: {
                        "margin-left": "10px"
                    }
                }, [s("span", {
                    staticClass: "highlight2"
                }, [t._v(t._s(t.guildToName(t.quickCalcPicker.isReverse ? t.quickCalcPicker.item.from : t.quickCalcPicker.item.to)))]), t._v(" 占 "), s("span", {
                    staticClass: "highlight2"
                }, [t._v(t._s(t.guildToName(t.quickCalcPicker.isReverse ? t.quickCalcPicker.item.to : t.quickCalcPicker.item.from)))]), t._v(" 的 "), s("span", {
                    staticClass: "highlight"
                }, [t._v(t._s(t.getLandNameByType(t.quickCalcPicker.selected)))])])], 1)]), s("van-cell", {
                    staticStyle: {
                        "padding-top": "0"
                    },
                    attrs: {
                        title: "预览动作",
                        "title-class": "popup-title-style",
                        "title-style": {
                            paddingTop: "10px"
                        },
                        "value-class": "popup-value-style"
                    }
                }, t._l(t.quickCalcPicker.tempActions, (function (e) {
                    return s("van-cell", {
                        key: e,
                        staticClass: "empty-land-cell",
                        staticStyle: {
                            padding: "10px 0"
                        },
                        attrs: {
                            "value-class": "popup-value-style"
                        }
                    }, [s("div", [t._v(t._s(t.roundToString(e.round)) + " "), s("span", {
                        staticClass: "highlight2"
                    }, [t._v(t._s(t.guildToName(e.to)))]), t._v(" 占 "), s("span", {
                        staticClass: "highlight2"
                    }, [t._v(t._s(t.guildToName(e.from)))]), t._v(" 的 "), s("span", {
                        staticClass: "highlight"
                    }, [t._v(t._s(e.count) + " 个 " + t._s(e.typeName))])])])
                }
                )), 1)], 1)], 1)], 2) : t._e()
            }
            , K = [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "tips-info"
                }, [t._v("查看上面的总分，这是未来每一轮的分数预测，可以核实执行是否正确。"), n("span", {
                    staticClass: "color-red"
                }, [t._v("为防止缓存丢失，请及时储存方案到服务器")])])
            }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", {
                        staticClass: "tips-info"
                    }, [t._v(" 占领细则？用上面的分到【随意算算分】去算。"), n("br"), t._v(" 直接点上面播放按钮，能快捷跳过去，并帮你写好数值。"), n("br"), t._v(" 点上面的加号可以添加调整动作。"), n("br"), t._v(" 如推荐的占领分数比较混乱，请参照最后一轮的调整目标。 ")])
                }
            ]
            , Y = n("2909")
            , X = (n("4e82"),
                function () {
                    var t = this
                        , e = t.$createElement
                        , n = t._self._c || e;
                    return n("div", [n("div", {
                        staticClass: "block-title flex-space-between"
                    }, [n("span", [t._v("在这里，可以添加占领动作")]), t.showTips ? n("div", {
                        staticClass: "tips-button",
                        on: {
                            click: function (e) {
                                t.showTips = !t.showTips
                            }
                        }
                    }, [t._v(" 收起说明 "), n("van-icon", {
                        attrs: {
                            name: "arrow-up"
                        }
                    })], 1) : n("div", {
                        staticClass: "tips-button",
                        on: {
                            click: function (e) {
                                t.showTips = !t.showTips
                            }
                        }
                    }, [t._v(" 显示说明 "), n("van-icon", {
                        attrs: {
                            name: "arrow-down"
                        }
                    })], 1)]), t.showTips ? n("div", {
                        staticClass: "tips-info"
                    }, [t._v(" 根据相邻两家的交界情况，来添加占领动作。 "), n("br"), t._v("增加完调整动作后，点击【刷新分】，或者之前的【开始计算】，可以重新计算分数列表。 "), n("br"), t._v("最终目的是让最后一轮的分等于平均分，或者最后一轮的调整目标变成0。 ")]) : t._e(), n("van-cell-group", [n("van-button", {
                        staticClass: "add-btn",
                        attrs: {
                            icon: "plus",
                            type: "primary",
                            plain: "",
                            size: "small"
                        },
                        on: {
                            click: t.handleShowPicker
                        }
                    }, [t._v("动作")]), n("van-button", {
                        staticClass: "add-btn",
                        attrs: {
                            type: "info",
                            plain: "",
                            size: "small"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("refresh")
                            }
                        }
                    }, [t._v("刷新分")]), n("van-button", {
                        staticClass: "add-btn",
                        attrs: {
                            type: "warning",
                            plain: "",
                            size: "small"
                        },
                        on: {
                            click: function (e) {
                                return t.$emit("view")
                            }
                        }
                    }, [t._v("按工会查看")]), t._l(t.actions, (function (e, s) {
                        return n("van-cell", {
                            key: e,
                            staticClass: "empty-land-cell"
                        }, [n("div", [t._v(t._s(t.roundToString(e.round)) + " "), n("span", {
                            staticClass: "highlight2"
                        }, [t._v(t._s(t.guildToName(e.to)))]), t._v(" 占 "), n("span", {
                            staticClass: "highlight2"
                        }, [t._v(t._s(t.guildToName(e.from)))]), t._v(" 的 "), n("span", {
                            staticClass: "highlight"
                        }, [t._v(t._s(e.count) + " 个 " + t._s(e.typeName))]), t._v(" "), n("van-icon", {
                            attrs: {
                                name: "edit",
                                color: "#1989fa"
                            },
                            on: {
                                click: function (n) {
                                    return t.handleEdit(e, s)
                                }
                            }
                        })], 1), n("van-icon", {
                            staticClass: "delete",
                            attrs: {
                                slot: "right-icon",
                                name: "delete",
                                color: "red"
                            },
                            on: {
                                click: function (e) {
                                    return t.handleDelete(s)
                                }
                            },
                            slot: "right-icon"
                        })], 1)
                    }
                    ))], 2), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.showPicker,
                            callback: function (e) {
                                t.showPicker = e
                            },
                            expression: "showPicker"
                        }
                    }, [n("van-nav-bar", {
                        attrs: {
                            title: 2 == t.action ? "修改动作" : "添加动作",
                            "left-text": "取消",
                            "right-text": "确定"
                        },
                        on: {
                            "click-left": function (e) {
                                t.showPicker = !1
                            },
                            "click-right": t.handleComfirmForm
                        }
                    }), n("van-form", {
                        staticStyle: {
                            "margin-bottom": "30px"
                        }
                    }, [n("van-cell", [n("div", [t._v("此次调整产生的最终影响：" + t._s(t.calcEffect || "设置动作后显示"))]), 3 == t.action ? n("div", [t._v("最终目标：" + t._s(t.target)), t.calcEffect ? n("span", [t._v("，剩余：" + t._s(t.target - t.calcEffect))]) : t._e()]) : t._e()]), n("van-field", {
                        attrs: {
                            readonly: "",
                            clickable: "",
                            name: "to",
                            value: t.guildToName(t.form.to),
                            label: "加分公会",
                            placeholder: "选择公会"
                        },
                        on: {
                            click: function (e) {
                                return t.showGuildPicker("to")
                            }
                        }
                    }), n("van-field", {
                        attrs: {
                            readonly: "",
                            clickable: "",
                            name: "from",
                            value: t.guildToName(t.form.from),
                            label: "被占公会",
                            placeholder: "选择公会"
                        },
                        on: {
                            click: function (e) {
                                return t.showGuildPicker("from")
                            }
                        }
                    }), n("van-field", {
                        attrs: {
                            readonly: "",
                            clickable: "",
                            name: "type",
                            value: t.form.typeName,
                            label: "地皮类型",
                            placeholder: "选择地皮"
                        },
                        on: {
                            click: function (e) {
                                t.typePicker = !0
                            }
                        }
                    }), n("van-field", {
                        attrs: {
                            name: "count",
                            label: "数量"
                        }
                    }, [n("van-stepper", {
                        attrs: {
                            slot: "input"
                        },
                        slot: "input",
                        model: {
                            value: t.form.count,
                            callback: function (e) {
                                t.$set(t.form, "count", e)
                            },
                            expression: "form.count"
                        }
                    })], 1), n("van-field", {
                        attrs: {
                            name: "count",
                            readonly: "",
                            clickable: "",
                            label: "预计啥时候占",
                            value: t.roundToString(t.form.round),
                            placeholder: "请选择"
                        },
                        on: {
                            click: function (e) {
                                t.roundPicker = !0
                            }
                        }
                    })], 1)], 1), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.guildPicker,
                            callback: function (e) {
                                t.guildPicker = e
                            },
                            expression: "guildPicker"
                        }
                    }, [n("van-picker", {
                        attrs: {
                            "show-toolbar": "",
                            columns: t.guildsPicker,
                            "value-key": "name"
                        },
                        on: {
                            cancel: function (e) {
                                t.guildPicker = !1
                            },
                            confirm: t.confirmGuild
                        }
                    })], 1), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.typePicker,
                            callback: function (e) {
                                t.typePicker = e
                            },
                            expression: "typePicker"
                        }
                    }, [n("van-picker", {
                        attrs: {
                            "show-toolbar": "",
                            columns: t.basePoints,
                            "value-key": "title"
                        },
                        on: {
                            cancel: function (e) {
                                t.typePicker = !1
                            },
                            confirm: t.confirmType
                        }
                    })], 1), n("van-popup", {
                        attrs: {
                            position: "bottom"
                        },
                        model: {
                            value: t.roundPicker,
                            callback: function (e) {
                                t.roundPicker = e
                            },
                            expression: "roundPicker"
                        }
                    }, [n("van-picker", {
                        attrs: {
                            "show-toolbar": "",
                            columns: t.roundList,
                            "value-key": "name"
                        },
                        on: {
                            cancel: function (e) {
                                t.roundPicker = !1
                            },
                            confirm: t.confirmRound
                        }
                    })], 1)], 1)
                }
            )
            , tt = []
            , et = {
                from: "",
                to: "",
                type: "",
                typeName: "",
                count: 1,
                round: ""
            }
            , nt = {
                name: "Actions",
                components: {},
                data: function () {
                    return {
                        showPicker: !1,
                        form: Object.assign({}, et),
                        action: 1,
                        target: 0,
                        editIndex: 0,
                        guildPicker: !1,
                        guildPickerType: "from",
                        typePicker: !1,
                        roundPicker: !1,
                        roundList: Object(d["a"])(14),
                        showTips: !0
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    },
                    guildsPicker: function () {
                        var t = [];
                        for (var e in this.guilds)
                            t.push({
                                name: this.guildToName(e),
                                value: e
                            });
                        return t
                    },
                    basePoints: function () {
                        var t = this;
                        return this.$store.getters["basePoints"].filter((function (t) {
                            return 230 !== t.base
                        }
                        )).map((function (e) {
                            return e.title = "".concat(e.name, "(").concat(t.$store.getters["pointRate"] * e.base, ")"),
                                e
                        }
                        ))
                    },
                    actions: function () {
                        return this.$store.state.actions
                    },
                    calcEffect: function () {
                        return this.form.round && this.form.count && this.form.type ? this.form.round * this.form.count * this.form.type * this.$store.getters["pointRate"] : ""
                    }
                },
                mounted: function () { },
                methods: {
                    guildToName: function (t) {
                        return Object(d["f"])(t, this.guilds)
                    },
                    handleShowPicker: function () {
                        this.form = Object.assign({}, this.form),
                            this.action = 1,
                            this.showPicker = !0
                    },
                    handleComfirmForm: function () {
                        var t = this.form;
                        if (t.from && t.to)
                            if (t.type)
                                if (t.round)
                                    if (t.from != t.to) {
                                        var e = [].concat(this.actions);
                                        console.log(t),
                                            2 == this.action ? e[this.editIndex] = Object.assign({}, t) : e.push(Object.assign({}, t)),
                                            this.$store.commit("UPDATEACTIONS", e),
                                            this.showPicker = !1
                                    } else
                                        this.$toast("不能占自己");
                                else
                                    this.$toast("必须选一个轮");
                            else
                                this.$toast("请选择地皮");
                        else
                            this.$toast("请选择公会")
                    },
                    handleDelete: function (t) {
                        this.actions.splice(t, 1)
                    },
                    handleEdit: function (t, e) {
                        this.form = Object.assign({}, t),
                            this.action = 2,
                            this.editIndex = e,
                            this.showPicker = !0
                    },
                    showGuildPicker: function (t) {
                        3 != this.action && (this.guildPickerType = t,
                            this.guildPicker = !0)
                    },
                    roundToString: function (t) {
                        return t && Object(d["b"])(t) || ""
                    },
                    confirmGuild: function (t) {
                        this.form[this.guildPickerType] = t.value,
                            this.guildPicker = !1
                    },
                    confirmType: function (t) {
                        this.form.type = t.base,
                            this.form.typeName = t.name,
                            this.typePicker = !1
                    },
                    confirmRound: function (t) {
                        this.form.round = t.value,
                            this.roundPicker = !1
                    }
                }
            }
            , st = nt
            , ot = (n("4ad1"),
                Object(m["a"])(st, X, tt, !1, null, "35faeefc", null))
            , it = ot.exports
            , at = {
                name: "ScoreResult",
                components: {
                    Actions: it
                },
                props: {},
                watch: {
                    result: {
                        handler: function () {
                            this.calcMethods()
                        },
                        deep: !0
                    }
                },
                data: function () {
                    return {
                        filterType: "offset",
                        average: "",
                        resultList: [],
                        showZan: !1,
                        quickCalcPicker: {
                            show: !1,
                            item: {},
                            selected: 17,
                            isReverse: !1,
                            tempActions: []
                        }
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    },
                    result: function () {
                        return this.$store.state.result
                    },
                    calcCount: function () {
                        var t = 0;
                        return Object.values(this.guilds).forEach((function (e) {
                            e.alias && t++
                        }
                        )),
                            t
                    },
                    actions: function () {
                        return this.$store.state.actions
                    },
                    basePoints: function () {
                        var t = this;
                        return this.$store.getters["basePoints"].filter((function (t) {
                            return 230 !== t.base && 13 !== t.base
                        }
                        )).map((function (e) {
                            return e.title = "".concat(e.name, "(").concat(t.$store.getters["pointRate"] * e.base, ")"),
                                e
                        }
                        ))
                    },
                    quickCalcLimit: function () {
                        return 60 * this.$store.getters["pointRate"] * (this.state.leftRounds > 14 ? 14 : this.state.leftRounds)
                    },
                    canQuickCalcAll: function () {
                        var t = this;
                        if (!this.resultList.length)
                            return !1;
                        var e = !0;
                        return console.log("limit"),
                            console.log(this.quickCalcLimit),
                            this.resultList.forEach((function (n) {
                                n.score > t.quickCalcLimit && (e = !1)
                            }
                            )),
                            e
                    }
                },
                mounted: function () {
                    this.calcMethods()
                },
                methods: {
                    getWeekName: function (t) {
                        return Object(d["e"])(t)
                    },
                    totalScore: function (t) {
                        for (var e = this.guilds, n = this.calcCount, s = 0, o = 0, i = Object.entries(t); o < i.length; o++) {
                            var a = l(i[o], 2)
                                , r = a[0]
                                , c = a[1];
                            e[r] && e[r].alias && (s += c)
                        }
                        return {
                            total: s,
                            average: Math.floor(s / n)
                        }
                    },
                    calcMethods: function () {
                        if (this.result.length) {
                            var t = this.result[this.result.length - 1].score
                                , e = this.totalScore(t)
                                , n = e.average;
                            console.log("平均分是：".concat(n)),
                                this.average = n;
                            var s = Object.assign({}, t)
                                , o = [];
                            this.calcActions(n, s, o),
                                this.calcActions(n, s, o);
                            var i = [];
                            o.forEach((function (t) {
                                var e = i.findIndex((function (e) {
                                    return e.from === t.from && e.to === t.to
                                }
                                ));
                                -1 === e ? i.push(t) : i[e].score += t.score
                            }
                            )),
                                console.log(s),
                                console.log(i),
                                this.resultList = i
                        }
                    },
                    calcActions: function (t, e, n) {
                        var s = this
                            , o = this.guilds
                            , i = Object.entries(e).sort((function (t, e) {
                                return t[1] - e[1]
                            }
                            )).filter((function (t) {
                                var e;
                                return !(null === (e = o[t[0]]) || void 0 === e || !e.alias)
                            }
                            ))
                            , a = i.filter((function (e) {
                                return e[1] < t
                            }
                            )).length;
                        if (3 === a) {
                            var r = i[i.length - 1][0]
                                , c = i.findIndex((function (t) {
                                    return t[0] === s.getOpposite(r)
                                }
                                ));
                            i.splice(0, 0, i[c]),
                                i.splice(c + 1, 1)
                        }
                        for (var l = 0; l < i.length; l++) {
                            var u = i[l][0]
                                , d = e[u];
                            if (d < t) {
                                var f = t - d
                                    , h = this.getPre(u)
                                    , p = e[h]
                                    , v = p - t
                                    , m = this.getAfter(u)
                                    , g = e[m]
                                    , b = g - t;
                                if (v >= f)
                                    e[u] += f,
                                        e[h] -= f,
                                        n.push({
                                            to: u,
                                            from: h,
                                            score: f
                                        });
                                else if (b >= f)
                                    e[u] += f,
                                        e[m] -= f,
                                        n.push({
                                            to: u,
                                            from: m,
                                            score: f
                                        });
                                else if (v > 0 && v >= b) {
                                    e[u] += v,
                                        e[h] -= v,
                                        n.push({
                                            to: u,
                                            from: h,
                                            score: v
                                        });
                                    var k = f - v;
                                    e[u] += k,
                                        e[m] -= k,
                                        n.push({
                                            to: u,
                                            from: m,
                                            score: k
                                        })
                                } else if (b > 0 && b >= v) {
                                    e[u] += b,
                                        e[m] -= b,
                                        n.push({
                                            to: u,
                                            from: m,
                                            score: b
                                        });
                                    var y = f - b;
                                    e[u] += y,
                                        e[h] -= y,
                                        n.push({
                                            to: u,
                                            from: h,
                                            score: y
                                        })
                                } else {
                                    var C = this.$store.getters["pointRate"]
                                        , _ = Math.floor(f / 2 / C) * C;
                                    e[u] += _,
                                        e[h] -= _,
                                        n.push({
                                            to: u,
                                            from: h,
                                            score: _
                                        });
                                    var w = f - _;
                                    e[u] += w,
                                        e[m] -= w,
                                        n.push({
                                            to: u,
                                            from: m,
                                            score: w
                                        })
                                }
                            }
                        }
                    },
                    getPre: function (t) {
                        var e = Object.entries(this.guilds).filter((function (t) {
                            return !!t[1].alias
                        }
                        )).map((function (t) {
                            return t[0]
                        }
                        ))
                            , n = e.length
                            , s = e.findIndex((function (e) {
                                return e == t
                            }
                            ))
                            , o = s - 1;
                        return o < 0 && (o += n),
                            e[o]
                    },
                    getAfter: function (t) {
                        var e = Object.entries(this.guilds).filter((function (t) {
                            return !!t[1].alias
                        }
                        )).map((function (t) {
                            return t[0]
                        }
                        ))
                            , n = e.length
                            , s = e.findIndex((function (e) {
                                return e == t
                            }
                            ))
                            , o = s + 1;
                        return o >= n && (o -= n),
                            e[o]
                    },
                    getOpposite: function (t) {
                        var e = ["A", "B", "C", "D"]
                            , n = e.findIndex((function (e) {
                                return e == t
                            }
                            ))
                            , s = n < 2 ? n + 2 : n - 2;
                        return e[s]
                    },
                    guildToName: function (t) {
                        return Object(d["f"])(t, this.guilds)
                    },
                    gotoCalc: function (t) {
                        var e = Object(d["c"])("form");
                        e ? (e.diff = t.score,
                            e.rateType = this.state.rateType) : e = {
                                diff: t.score,
                                rateType: this.state.rateType
                            },
                            Object(d["i"])("form", e),
                            this.$router.push({
                                path: "/calc"
                            })
                    },
                    addAction: function (t) {
                        this.$refs["actionComp"].target = t.score,
                            this.$refs["actionComp"].form.from = t.from,
                            this.$refs["actionComp"].form.to = t.to,
                            this.$refs["actionComp"].action = 3,
                            this.$refs["actionComp"].showPicker = !0
                    },
                    showSuccessTips: function () {
                        this.showZan = !0
                    },
                    getLandNameByType: function (t) {
                        var e;
                        return null === (e = this.$store.getters["basePoints"].find((function (e) {
                            return e.base === t
                        }
                        ))) || void 0 === e ? void 0 : e.name
                    },
                    roundToString: function (t) {
                        return t && Object(d["b"])(t) || ""
                    },
                    handleQuickCalcAll: function () {
                        var t = this
                            , e = [];
                        this.resultList.forEach((function (n) {
                            e.push.apply(e, Object(Y["a"])(t.handleQuickCalcSingle(n)))
                        }
                        )),
                            this.$store.commit("UPDATEACTIONS", [].concat(this.actions).concat(e)),
                            this.$emit("refresh")
                    },
                    handleQuickCalcSingle: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 17
                            , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                            , s = t.score / this.$store.getters["pointRate"];
                        if (s % 1 !== 0 || !t.score)
                            return [];
                        console.log("points~~"),
                            console.log(s);
                        var o = Math.min(this.state.leftRounds, 14)
                            , i = [];
                        if (s % 13 === 0) {
                            var a = s / 13;
                            if (a <= 3 * o)
                                return this.handleTimesToActions({
                                    from: t.from,
                                    to: t.to
                                }, 13, a, o)
                        }
                        for (var r = n ? t.to : t.from, c = n ? t.from : t.to, l = o; l >= 0; l--) {
                            var u = n ? s + l * e : s - l * e;
                            if (u % 13 === 0) {
                                console.log("leftPoints~~"),
                                    console.log(u),
                                    0 !== l && i.push({
                                        from: r,
                                        to: c,
                                        type: e,
                                        typeName: this.getLandNameByType(e),
                                        count: 1,
                                        round: l
                                    }),
                                    0 !== u && i.push.apply(i, Object(Y["a"])(this.handleTimesToActions({
                                        from: u > 0 ? t.from : t.to,
                                        to: u > 0 ? t.to : t.from
                                    }, 13, u / 13, o))),
                                    console.log("break!");
                                break
                            }
                        }
                        if (!i.length) {
                            console.log("add limit");
                            for (var d = 0; d < 13; d++) {
                                var f = n ? s + d * e : s - d * e;
                                if (f % 13 === 0) {
                                    0 !== d && i.push.apply(i, Object(Y["a"])(this.handleTimesToActions({
                                        from: r,
                                        to: c
                                    }, e, d, o))),
                                        0 !== f && i.push.apply(i, Object(Y["a"])(this.handleTimesToActions({
                                            from: f > 0 ? t.from : t.to,
                                            to: f > 0 ? t.to : t.from
                                        }, 13, f / 13, o)));
                                    break
                                }
                            }
                        }
                        return i
                    },
                    handleTimesToActions: function (t, e, n, s) {
                        var o = Math.floor(Math.abs(n) / s)
                            , i = Math.abs(n) % s
                            , a = [];
                        return o && a.push({
                            from: t.from,
                            to: t.to,
                            type: e,
                            typeName: this.getLandNameByType(e),
                            count: o,
                            round: s
                        }),
                            0 !== i && a.push({
                                from: t.from,
                                to: t.to,
                                type: e,
                                typeName: this.getLandNameByType(e),
                                count: 1,
                                round: i
                            }),
                            a
                    },
                    showQuickCalcPanel: function (t) {
                        this.quickCalcPicker.item = Object.assign({}, t),
                            this.quickCalcPicker.selected = 17,
                            this.quickCalcPicker.isReverse = !1,
                            this.quickCalcPicker.tempActions = [],
                            this.handleRefreshQuickCalc(),
                            this.quickCalcPicker.show = !0
                    },
                    handleRefreshQuickCalc: function () {
                        var t = this.handleQuickCalcSingle(this.quickCalcPicker.item, this.quickCalcPicker.selected, this.quickCalcPicker.isReverse);
                        t.sort((function (t, e) {
                            return t.round === e.round ? e.to.charCodeAt() === t.to.charCodeAt() ? e.from.charCodeAt() - t.from.charCodeAt() : e.to.charCodeAt() - t.to.charCodeAt() : e.round - t.round
                        }
                        )),
                            this.quickCalcPicker.tempActions = t
                    },
                    handleQuickCalcConfirm: function () {
                        this.$store.commit("UPDATEACTIONS", [].concat(this.actions).concat(this.quickCalcPicker.tempActions)),
                            this.$emit("refresh"),
                            this.quickCalcPicker.show = !1
                    }
                }
            }
            , rt = at
            , ct = (n("ed70"),
                Object(m["a"])(rt, Z, K, !1, null, "e9eed4c6", null))
            , lt = ct.exports
            , ut = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "buy-block"
                }, [n("div", {
                    staticClass: "buy-tips color-red",
                    staticStyle: {
                        "font-size": "14px",
                        "font-weight": "bold"
                    }
                }, [t._v("该算分小工具已经免费使用了！")]), t._m(0), t.userInfo ? n("div", {
                    staticClass: "block-item-container",
                    class: "status-type-" + t.userStatus
                }, [n("div", {
                    staticClass: "block-item flex-center"
                }, [n("div", {
                    staticClass: "key"
                }, [t._v("当前状态："), n("span", {
                    staticClass: "value"
                }, [t._v(t._s(t.statusStr))])]), n("div", {
                    staticClass: "subValue"
                }, [t._v(t._s(t.uidShort))])]), t.expTime ? n("div", {
                    staticClass: "block-item"
                }, [n("div", {
                    staticClass: "key"
                }, [t._v("过期时间："), n("span", {
                    staticClass: "value"
                }, [t._v(t._s(t.expTime))])])]) : t._e()]) : t._e(), t.userInfo && 1 !== t.userStatus ? n("div", {
                    staticClass: "buy-bottom flex-space-between"
                }, [n("van-button", {
                    staticClass: "buy-left",
                    attrs: {
                        type: "info",
                        block: ""
                    },
                    on: {
                        click: t.handleUse
                    }
                }, [t._v("使用卡券")]), n("van-button", {
                    staticClass: "buy-right",
                    attrs: {
                        type: "primary",
                        block: ""
                    },
                    on: {
                        click: t.handleBuy
                    }
                }, [t._v("点击购买")])], 1) : t._e(), n("van-dialog", {
                    attrs: {
                        title: "使用卡券",
                        "show-cancel-button": "",
                        beforeClose: t.handleConfirmCoupon
                    },
                    model: {
                        value: t.showInputCoupon.show,
                        callback: function (e) {
                            t.$set(t.showInputCoupon, "show", e)
                        },
                        expression: "showInputCoupon.show"
                    }
                }, [n("van-field", {
                    staticClass: "has-border",
                    attrs: {
                        border: !0,
                        rows: "3",
                        type: "textarea",
                        placeholder: "请将卡密粘贴到这里，然后提交。如果因为缓存丢失需要重新激活卡券，可以通过FLY开头的订单号去商城查询卡密。"
                    },
                    model: {
                        value: t.showInputCoupon.value,
                        callback: function (e) {
                            t.$set(t.showInputCoupon, "value", e)
                        },
                        expression: "showInputCoupon.value"
                    }
                })], 1)], 1)
            }
            , dt = [function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "buy-tips"
                }, [t._v(" 使用此工具需要购买卡券。"), n("br"), t._v(" 购买后，一个卡券从激活使用后，有效期30天，）"), n("br"), t._v(" 有任何问题，请加微信: skyi2500 ")])
            }
            ]
            , ft = (n("1276"),
                n("76b5"))
            , ht = {
                0: "尚未购买",
                1: "有效",
                2: "已过期"
            }
            , pt = {
                name: "Buy",
                components: {},
                data: function () {
                    return {
                        showInputCoupon: {
                            show: !1,
                            value: ""
                        }
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    userInfo: function () {
                        return this.$store.state.userInfo
                    },
                    userStatus: function () {
                        return this.userInfo ? this.userInfo.status : 0
                    },
                    statusStr: function () {
                        return this.userInfo ? ht[this.userInfo.status] || "未知" : ht[0]
                    },
                    expTime: function () {
                        return this.userInfo ? this.userInfo.expTime : ""
                    },
                    uidShort: function () {
                        if (this.userInfo)
                            return this.userInfo.uid.split("-")[0]
                    }
                },
                mounted: function () {
                    this.userInfo || this.getUserInfo()
                },
                methods: {
                    getUserInfo: function () {
                        ft["a"].getUserInfo()
                    },
                    handleUse: function () {
                        this.showInputCoupon.value = "",
                            this.showInputCoupon.show = !0
                    },
                    handleBuy: function () {
                        window.location.href = this.$store.getters["buyLink"]
                    },
                    handleConfirmCoupon: function (t, e) {
                        var n = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function s() {
                            var o;
                            return regeneratorRuntime.wrap((function (s) {
                                while (1)
                                    switch (s.prev = s.next) {
                                        case 0:
                                            if ("confirm" === t) {
                                                s.next = 3;
                                                break
                                            }
                                            return e(),
                                                s.abrupt("return");
                                        case 3:
                                            if (o = n.showInputCoupon.value,
                                                o) {
                                                s.next = 8;
                                                break
                                            }
                                            return n.$toast("请先把卡密贴过来哦"),
                                                e(!1),
                                                s.abrupt("return");
                                        case 8:
                                            if (o = o.replace(/\s*/g, ""),
                                                Object(d["h"])(o)) {
                                                s.next = 13;
                                                break
                                            }
                                            return n.$toast("卡密格式不正确"),
                                                e(!1),
                                                s.abrupt("return");
                                        case 13:
                                            ft["a"].useCoupon(o).then((function (t) {
                                                e(),
                                                    n.$dialog.alert({
                                                        title: "卡券核销成功",
                                                        message: "有效期至：".concat(t.expTime, "，\n\r还可激活").concat(t.validCount, "次。")
                                                    }).then((function () { }
                                                    )).catch((function () { }
                                                    ))
                                            }
                                            )).catch((function () {
                                                e(!1)
                                            }
                                            ));
                                        case 14:
                                        case "end":
                                            return s.stop()
                                    }
                            }
                            ), s)
                        }
                        )))()
                    }
                }
            }
            , vt = pt
            , mt = (n("0383"),
                Object(m["a"])(vt, ut, dt, !1, null, "47c9975d", null))
            , gt = mt.exports
            , bt = function () {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("van-popup", {
                    style: {
                        height: "80%"
                    },
                    attrs: {
                        closeable: "",
                        position: "bottom"
                    },
                    on: {
                        open: t.initData,
                        close: t.handleClose
                    },
                    model: {
                        value: t.value,
                        callback: function (e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }, [n("van-tabs", {
                    staticClass: "groupResult"
                }, t._l(t.groupResult, (function (e, s) {
                    return n("van-tab", {
                        key: s,
                        attrs: {
                            title: t.guildToName(s)
                        }
                    }, [n("div", {
                        staticClass: "groupList"
                    }, t._l(e, (function (s, o) {
                        return n("div", {
                            key: s,
                            staticClass: "land-cell",
                            class: {
                                gulp: 0 === o || o > 0 && e[o - 1].round !== s.round
                            }
                        }, [n("div", {
                            staticClass: "left"
                        }, [0 === o || o > 0 && e[o - 1].round !== s.round ? n("span", [t._v(t._s(t.roundToString(s.round)))]) : t._e()]), n("div", {
                            staticClass: "right"
                        }, [n("span", {}, [t._v(t._s(t.guildToName(s.to)))]), s.from ? n("span", [t._v(" 占 "), n("span", {
                            staticClass: "highlight2"
                        }, [t._v(t._s(t.guildToName(s.from)))]), t._v(" 的")]) : n("span", {
                            staticClass: "green-color"
                        }, [t._v(" 新占领")]), n("span", {
                            staticClass: "highlight"
                        }, [t._v(" " + t._s(s.count) + " 个 " + t._s(t.getLandNameByType(s.type)))])])])
                    }
                    )), 0)])
                }
                )), 1)], 1)
            }
            , kt = []
            , yt = (n("b64b"),
            {
                name: "GroupActionView",
                components: {},
                props: {
                    value: {
                        type: Boolean,
                        default: !1
                    }
                },
                model: {
                    prop: "value",
                    event: "change"
                },
                data: function () {
                    return {
                        groupResult: {}
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    },
                    basePoints: function () {
                        var t = this;
                        return this.$store.getters["basePoints"].filter((function (t) {
                            return 230 !== t.base
                        }
                        )).map((function (e) {
                            return e.title = "".concat(e.name, "(").concat(t.$store.getters["pointRate"] * e.base, ")"),
                                e
                        }
                        ))
                    },
                    actions: function () {
                        return this.$store.state.actions
                    }
                },
                mounted: function () { },
                methods: {
                    handleClose: function () {
                        this.$emit("change", !1)
                    },
                    initData: function () {
                        var t = this.state
                            , e = t.guilds
                            , n = t.leftRounds
                            , s = t.bankHistory
                            , o = t.leftLands
                            , i = t.actions
                            , a = {};
                        Object.keys(e).forEach((function (t) {
                            a[t] = []
                        }
                        ));
                        for (var r = function (t) {
                            var e, r, c = n - t, l = null === (e = s.find((function (t) {
                                return t.day == c
                            }
                            ))) || void 0 === e ? void 0 : e.checked, u = null === (r = s.find((function (t) {
                                return t.day == c + 1
                            }
                            ))) || void 0 === r ? void 0 : r.checked;
                            l && l !== u && a[l].push({
                                from: u || null,
                                to: l,
                                type: 230,
                                count: 1,
                                round: c
                            }),
                                o.forEach((function (t) {
                                    t.round === c && a[t.guild].push({
                                        from: null,
                                        to: t.guild,
                                        type: t.type,
                                        count: t.count,
                                        round: c
                                    })
                                }
                                )),
                                i.forEach((function (t) {
                                    t.round === c && a[t.to].push({
                                        from: t.from,
                                        to: t.to,
                                        type: t.type,
                                        count: t.count,
                                        round: c
                                    })
                                }
                                ))
                        }, c = 0; c < n; c++)
                            r(c);
                        console.log(a),
                            this.groupResult = a
                    },
                    guildToName: function (t) {
                        return Object(d["f"])(t, this.guilds)
                    },
                    roundToString: function (t) {
                        return t && Object(d["b"])(t) || ""
                    },
                    getLandNameByType: function (t) {
                        var e;
                        return null === (e = this.$store.getters["basePoints"].find((function (e) {
                            return e.base === t
                        }
                        ))) || void 0 === e ? void 0 : e.name
                    }
                }
            })
            , Ct = yt
            , _t = (n("d2d2"),
                Object(m["a"])(Ct, bt, kt, !1, null, "170e9796", null))
            , wt = _t.exports
            , xt = {
                name: "War",
                components: {
                    InputName: b,
                    TotalCountSelecter: x,
                    RoundSelecter: N,
                    Scores: E,
                    BankHistory: G,
                    EmptyLands: W,
                    ScoreResult: lt,
                    Buy: gt,
                    GroupActionView: wt
                },
                data: function () {
                    return {
                        showLoadMethod: {
                            show: !1,
                            value: "",
                            showLoadAction: !1,
                            loadActions: [{
                                name: "直接加载方案",
                                subname: "直接从服务器加载本账号存储的方案",
                                value: 1
                            }, {
                                name: "通过卡密查找方案",
                                subname: "输入激活时购买的卡密，可加载方案",
                                value: 2
                            }],
                            showInputCoupon: !1,
                            inputCouponValue: ""
                        },
                        buyLink: this.$store.getters["buyLink"],
                        showGroupResult: {
                            show: !1
                        }
                    }
                },
                computed: {
                    state: function () {
                        return this.$store.state
                    },
                    guilds: function () {
                        return this.$store.state.guilds
                    },
                    actions: function () {
                        return this.$store.state.actions
                    },
                    calcCount: function () {
                        var t = 0;
                        return Object.values(this.guilds).forEach((function (e) {
                            e.alias && t++
                        }
                        )),
                            t
                    }
                },
                mounted: function () { },
                methods: {
                    handleUpdateGuilds: function (t) {
                        0 === t ? this.$store.commit("UPDATEGUILDS", ["A", "B", "C", "D", "E", "F"]) : this.$store.commit("UPDATEGUILDS", ["A", "B", "C", "D"])
                    },
                    guildToName: function (t) {
                        return Object(d["f"])(t, this.guilds)
                    },
                    getScoreByType: function (t) {
                        return this.$store.getters["pointRate"] * t
                    },
                    beginCalc: function () {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function e() {
                            var n, s, o, i, a, r, c, u, d, f, h, p, v, m, g, b, k, y;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                ft["a"].checkPermission();
                                        case 2:
                                            if (n = e.sent,
                                                n) {
                                                e.next = 6;
                                                break
                                            }
                                            return ft["a"].showBuyDialog(),
                                                e.abrupt("return");
                                        case 6:
                                            for (s = t.state,
                                                o = s.guilds,
                                                i = s.leftRounds,
                                                a = s.leftLands,
                                                r = s.bankHistory,
                                                c = {},
                                                t.$store.getters["basePoints"].forEach((function (e) {
                                                    c[e.base] = t.$store.getters["pointRate"] * e.base
                                                }
                                                )),
                                                u = [],
                                                d = {
                                                    diff: {},
                                                    score: {}
                                                },
                                                f = 0,
                                                h = Object.entries(o); f < h.length; f++)
                                                p = l(h[f], 2),
                                                    v = p[0],
                                                    m = p[1],
                                                    d.diff[v] = Number(m.score2) - Number(m.score1),
                                                    d.score[v] = Number(o[v].score2),
                                                    i < 14 && (b = null === (g = r.find((function (t) {
                                                        return t.day == i + 1
                                                    }
                                                    ))) || void 0 === g ? void 0 : g.checked,
                                                        b && b == v && (d.diff[v] -= c["230"]));
                                            for (k = function (e) {
                                                for (var n, s = i - e, f = null === (n = r.find((function (t) {
                                                    return t.day == s
                                                }
                                                ))) || void 0 === n ? void 0 : n.checked, h = {
                                                    round: s,
                                                    names: {},
                                                    diff: {},
                                                    score: {}
                                                }, p = function () {
                                                    var e = l(m[v], 2)
                                                        , n = e[0]
                                                        , o = e[1]
                                                        , i = a.filter((function (t) {
                                                            return t.guild == n && t.round == s
                                                        }
                                                        ));
                                                    i && i.length && i.forEach((function (t) {
                                                        d.diff[n] += c[t.type] * t.count
                                                    }
                                                    )),
                                                        n == f && (d.score[n] += c["230"]);
                                                    var r = t.actions.filter((function (t) {
                                                        return t.from == n && t.round == s
                                                    }
                                                    ));
                                                    r && r.length && r.forEach((function (t) {
                                                        d.diff[n] -= c[t.type] * t.count
                                                    }
                                                    ));
                                                    var u = t.actions.filter((function (t) {
                                                        return t.to == n && t.round == s
                                                    }
                                                    ));
                                                    u && u.length && u.forEach((function (t) {
                                                        d.diff[n] += c[t.type] * t.count
                                                    }
                                                    )),
                                                        d.score[n] += d.diff[n],
                                                        h.diff[n] = d.diff[n],
                                                        h.score[n] = d.score[n],
                                                        h.names[n] = t.guildToName(n),
                                                        o.alias || (h.diff[n] = 0,
                                                            h.score[n] = 0)
                                                }, v = 0, m = Object.entries(o); v < m.length; v++)
                                                    p();
                                                u.push(h)
                                            }
                                                ,
                                                y = 0; y < i; y++)
                                                k(y);
                                            console.log(u),
                                                t.state.result = u,
                                                t.calcIsAverage(u[u.length - 1].score);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    calcIsAverage: function (t) {
                        for (var e = this.guilds, n = this.calcCount, s = this.$store.getters["pointRate"] * n, o = 0, i = 0, a = Object.entries(t); i < a.length; i++) {
                            var r = l(a[i], 2)
                                , c = r[0]
                                , u = r[1];
                            e[c] && e[c].alias && (o += u)
                        }
                        if (console.log(o),
                            o - 1e3 * n <= 0)
                            return this.state.resultText = "先把数据填一填呀",
                                void (this.state.result = []);
                        var d = (o - 1e3 * n) % s;
                        0 == d ? (console.log("能平衡"),
                            this.state.resultText = "success") : (console.log("不能平衡：" + d),
                                this.state.resultText = this.getResidueMethod(d))
                    },
                    getResidueMethod: function (t) {
                        var e = this.state.leftLands
                            , n = this.calcCount
                            , s = t / this.$store.getters["pointRate"]
                            , o = [];
                        e.forEach((function (t) {
                            var e = t.type % n;
                            if (console.log("landResidue"),
                                console.log(e),
                                e % s == 0) {
                                var i = e / s;
                                o.push("您需要将 ".concat(t.typeName, " 延后 ").concat(i, " 次占领"))
                            } else if (s % e == 0) {
                                var a = s / e;
                                o.push("您需要将 ".concat(t.typeName, " 延后 ").concat(a, " 次占领"))
                            }
                        }
                        ));
                        var i = Array.from(new Set(o));
                        console.log(i);
                        var a = "";
                        return a = i.length ? i.join(" 或者\r\n ") : "您需要将沙地或者枯木延后".concat(s, "次占领\r\n如果没有任何空地，那肯定无法").concat(n, "家并列了"),
                            a
                    },
                    showThreeInfo: function () {
                        this.$dialog.alert({
                            title: "三并说明",
                            message: "要计算三家并列，第四家的名字不要填，然后只需要将第四家的地都当成空地处理即可。如果要将第四家推平，则根据最终分差，在快推到基地前，尽量缩小你们三家的分差。在马上到基地的时候，再细算分，将未占领的地当成空地填写，调整占领时机使得满足并列前提，剩余的操作跟常规四并一样。"
                        }).then((function () { }
                        )).catch((function () { }
                        ))
                    },
                    copyText: function (t) {
                        var e = document.createElement("input");
                        e.style.fontSize = "12pt",
                            e.style.border = "0",
                            e.style.padding = "0",
                            e.style.margin = "0",
                            e.style.position = "absolute",
                            e.style["right"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        e.style.top = n + "px",
                            e.setAttribute("readonly", ""),
                            e.value = t,
                            document.body.appendChild(e),
                            e.select(),
                            e.setSelectionRange(0, e.value.length);
                        var s = document.execCommand("copy");
                        s ? this.$toast("复制成功!") : this.$toast("复制失败!"),
                            document.body.removeChild(e)
                    },
                    copyMethod: function (t) {
                        var e = this.getStorage("global-store") || "";
                        if (e) {
                            var n = JSON.parse(e);
                            delete n.result,
                                delete n.resultText;
                            var s = {
                                ac: n.actions.map((function (t) {
                                    return {
                                        c: t.count,
                                        f: t.from,
                                        r: t.round,
                                        t: t.to,
                                        ty: t.type
                                    }
                                }
                                )),
                                bh: n.bankHistory.map((function (t) {
                                    return {
                                        d: t.day,
                                        c: t.checked
                                    }
                                }
                                )),
                                gs: n.guilds,
                                ll: n.leftLands.map((function (t) {
                                    return {
                                        c: t.count,
                                        g: t.guild,
                                        r: t.round,
                                        ty: t.type
                                    }
                                }
                                )),
                                lr: n.leftRounds,
                                tc: n.totalCount,
                                rty: n.rateType,
                                v: 2
                            };
                            if (console.log(s),
                                t)
                                return JSON.stringify(s);
                            this.copyText(JSON.stringify(s))
                        }
                    },
                    loadMethod: function () {
                        this.showLoadMethod.value = "",
                            this.showLoadMethod.show = !0
                    },
                    showLoadPlan: function () {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                ft["a"].checkPermission();
                                        case 2:
                                            if (n = e.sent,
                                                n) {
                                                e.next = 6;
                                                break
                                            }
                                            return ft["a"].showBuyDialog(),
                                                e.abrupt("return");
                                        case 6:
                                            t.showLoadMethod.showLoadAction = !0;
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    onSelectLoadPlan: function (t) {
                        switch (t.value) {
                            case 1:
                                this.getPlanFromServer();
                                break;
                            case 2:
                                this.showLoadMethod.inputCouponValue = "",
                                    this.showLoadMethod.showInputCoupon = !0;
                                break
                        }
                    },
                    handleConfirmLoad: function (t) {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function n() {
                            var s, o, i;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1)
                                    switch (n.prev = n.next) {
                                        case 0:
                                            if (s = e.showLoadMethod.value,
                                                s) {
                                                n.next = 4;
                                                break
                                            }
                                            return e.$toast("你要把方案的那一堆代码贴过来呀~"),
                                                n.abrupt("return");
                                        case 4:
                                            if (n.prev = 4,
                                                o = JSON.parse(s),
                                                !o.guilds && !o.gs) {
                                                n.next = 18;
                                                break
                                            }
                                            if (2 === o.v && (o = {
                                                actions: o.ac.map((function (t) {
                                                    return {
                                                        from: t.f,
                                                        to: t.t,
                                                        type: t.ty,
                                                        typeName: e.getLandNameByType(t.ty),
                                                        count: t.c,
                                                        round: t.r
                                                    }
                                                }
                                                )),
                                                bankHistory: o.bh.map((function (t) {
                                                    return {
                                                        day: t.d,
                                                        checked: t.c
                                                    }
                                                }
                                                )),
                                                guilds: o.gs,
                                                leftLands: o.ll.map((function (t) {
                                                    return {
                                                        count: t.c,
                                                        guild: t.g,
                                                        round: t.r,
                                                        roundName: Object(d["b"])(t.r),
                                                        type: t.ty,
                                                        typeName: e.getLandNameByType(t.ty)
                                                    }
                                                }
                                                )),
                                                leftRounds: o.lr,
                                                totalCount: o.tc || 0 == o.rty ? 6 : 4,
                                                rateType: o.rty
                                            }),
                                                !t) {
                                                n.next = 13;
                                                break
                                            }
                                            return console.log(o),
                                                i = Object.values(o.guilds).filter((function (t) {
                                                    return t.alias
                                                }
                                                )).map((function (t) {
                                                    return t.alias
                                                }
                                                )).join(","),
                                                n.next = 13,
                                                e.$dialog.confirm({
                                                    title: "确定加载此方案？",
                                                    message: "公会：【".concat(i || "-", "】\r\n下一轮：").concat(Object(d["b"])(o.leftRounds)),
                                                    messageAlign: "left"
                                                });
                                        case 13:
                                            Object(d["i"])("global-store", o),
                                                e.$toast("即将重新加载咯~"),
                                                window.location.reload(),
                                                n.next = 19;
                                            break;
                                        case 18:
                                            e.$toast("你确定你这贴的内容是对的？");
                                        case 19:
                                            n.next = 24;
                                            break;
                                        case 21:
                                            n.prev = 21,
                                                n.t0 = n["catch"](4),
                                                "cancel" !== n.t0 && e.$toast("你确定你这贴的内容是对的？");
                                        case 24:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                            ), n, null, [[4, 21]])
                        }
                        )))()
                    },
                    getLandNameByType: function (t) {
                        var e;
                        return null === (e = this.$store.getters["basePoints"].find((function (e) {
                            return e.base === t
                        }
                        ))) || void 0 === e ? void 0 : e.name
                    },
                    viewByGroup: function () {
                        this.showGroupResult.show = !0
                    },
                    getStorage: function (t) {
                        return window.localStorage.getItem(t) ? window.localStorage.getItem(t) : null
                    },
                    clearStore: function () {
                        this.$dialog.confirm({
                            title: "提示",
                            message: "确定清空当前的计算方案？"
                        }).then((function () {
                            window.localStorage.removeItem("global-store"),
                                window.localStorage.removeItem("form"),
                                window.localStorage.removeItem("originPoints"),
                                window.location.reload()
                        }
                        )).catch((function () { }
                        ))
                    },
                    saveToServer: function () {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function e() {
                            var n, s;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                ft["a"].checkPermission();
                                        case 2:
                                            if (n = e.sent,
                                                n) {
                                                e.next = 6;
                                                break
                                            }
                                            return ft["a"].showBuyDialog(),
                                                e.abrupt("return");
                                        case 6:
                                            return s = t.copyMethod(!0),
                                                e.next = 9,
                                                ft["a"].savePlan(s);
                                        case 9:
                                            t.$toast("储存到服务器成功！");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    getPlanFromServer: function () {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                ft["a"].readPlan();
                                        case 2:
                                            n = e.sent,
                                                t.showLoadMethod.value = n,
                                                t.handleConfirmLoad(!0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    handleConfirmGetPlanByCoupon: function (t, e) {
                        var n = this;
                        if ("confirm" === t) {
                            var s = this.showLoadMethod.inputCouponValue;
                            if (!s)
                                return this.$toast("请先把卡密贴过来哦"),
                                    void e(!1);
                            if (s = s.replace(/\s*/g, ""),
                                !Object(d["h"])(s))
                                return this.$toast("卡密格式不正确"),
                                    void e(!1);
                            ft["a"].readPlan({
                                coupon: s
                            }).then((function (t) {
                                e(),
                                    n.showLoadMethod.value = t,
                                    n.handleConfirmLoad(!0)
                            }
                            )).catch((function () {
                                e(!1)
                            }
                            ))
                        } else
                            e()
                    }
                }
            }
            , Pt = xt
            , Tt = (n("004e"),
                Object(m["a"])(Pt, s, o, !1, null, "04e51e8a", null));
        e["default"] = Tt.exports
    },
    6062: function (t, e, n) {
        "use strict";
        var s = n("6d61")
            , o = n("6566");
        s("Set", (function (t) {
            return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), o)
    },
    6566: function (t, e, n) {
        "use strict";
        var s = n("9bf2").f
            , o = n("7c73")
            , i = n("e2cc")
            , a = n("0366")
            , r = n("19aa")
            , c = n("2266")
            , l = n("7dd0")
            , u = n("2626")
            , d = n("83ab")
            , f = n("f183").fastKey
            , h = n("69f3")
            , p = h.set
            , v = h.getterFor;
        t.exports = {
            getConstructor: function (t, e, n, l) {
                var u = t((function (t, s) {
                    r(t, h),
                        p(t, {
                            type: e,
                            index: o(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }),
                        d || (t.size = 0),
                        void 0 != s && c(s, t[l], {
                            that: t,
                            AS_ENTRIES: n
                        })
                }
                ))
                    , h = u.prototype
                    , m = v(e)
                    , g = function (t, e, n) {
                        var s, o, i = m(t), a = b(t, e);
                        return a ? a.value = n : (i.last = a = {
                            index: o = f(e, !0),
                            key: e,
                            value: n,
                            previous: s = i.last,
                            next: void 0,
                            removed: !1
                        },
                            i.first || (i.first = a),
                            s && (s.next = a),
                            d ? i.size++ : t.size++,
                            "F" !== o && (i.index[o] = a)),
                            t
                    }
                    , b = function (t, e) {
                        var n, s = m(t), o = f(e);
                        if ("F" !== o)
                            return s.index[o];
                        for (n = s.first; n; n = n.next)
                            if (n.key == e)
                                return n
                    };
                return i(h, {
                    clear: function () {
                        var t = this
                            , e = m(t)
                            , n = e.index
                            , s = e.first;
                        while (s)
                            s.removed = !0,
                                s.previous && (s.previous = s.previous.next = void 0),
                                delete n[s.index],
                                s = s.next;
                        e.first = e.last = void 0,
                            d ? e.size = 0 : t.size = 0
                    },
                    delete: function (t) {
                        var e = this
                            , n = m(e)
                            , s = b(e, t);
                        if (s) {
                            var o = s.next
                                , i = s.previous;
                            delete n.index[s.index],
                                s.removed = !0,
                                i && (i.next = o),
                                o && (o.previous = i),
                                n.first == s && (n.first = o),
                                n.last == s && (n.last = i),
                                d ? n.size-- : e.size--
                        }
                        return !!s
                    },
                    forEach: function (t) {
                        var e, n = m(this), s = a(t, arguments.length > 1 ? arguments[1] : void 0);
                        while (e = e ? e.next : n.first) {
                            s(e.value, e.key, this);
                            while (e && e.removed)
                                e = e.previous
                        }
                    },
                    has: function (t) {
                        return !!b(this, t)
                    }
                }),
                    i(h, n ? {
                        get: function (t) {
                            var e = b(this, t);
                            return e && e.value
                        },
                        set: function (t, e) {
                            return g(this, 0 === t ? 0 : t, e)
                        }
                    } : {
                        add: function (t) {
                            return g(this, t = 0 === t ? 0 : t, t)
                        }
                    }),
                    d && s(h, "size", {
                        get: function () {
                            return m(this).size
                        }
                    }),
                    u
            },
            setStrong: function (t, e, n) {
                var s = e + " Iterator"
                    , o = v(e)
                    , i = v(s);
                l(t, e, (function (t, e) {
                    p(this, {
                        type: s,
                        target: t,
                        state: o(t),
                        kind: e,
                        last: void 0
                    })
                }
                ), (function () {
                    var t = i(this)
                        , e = t.kind
                        , n = t.last;
                    while (n && n.removed)
                        n = n.previous;
                    return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                        value: n.key,
                        done: !1
                    } : "values" == e ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (t.target = void 0,
                    {
                        value: void 0,
                        done: !0
                    })
                }
                ), n ? "entries" : "values", !n, !0),
                    u(e)
            }
        }
    },
    "6c3e": function (t, e, n) { },
    "6d61": function (t, e, n) {
        "use strict";
        var s = n("23e7")
            , o = n("da84")
            , i = n("e330")
            , a = n("94ca")
            , r = n("6eeb")
            , c = n("f183")
            , l = n("2266")
            , u = n("19aa")
            , d = n("1626")
            , f = n("861d")
            , h = n("d039")
            , p = n("1c7e")
            , v = n("d44e")
            , m = n("7156");
        t.exports = function (t, e, n) {
            var g = -1 !== t.indexOf("Map")
                , b = -1 !== t.indexOf("Weak")
                , k = g ? "set" : "add"
                , y = o[t]
                , C = y && y.prototype
                , _ = y
                , w = {}
                , x = function (t) {
                    var e = i(C[t]);
                    r(C, t, "add" == t ? function (t) {
                        return e(this, 0 === t ? 0 : t),
                            this
                    }
                        : "delete" == t ? function (t) {
                            return !(b && !f(t)) && e(this, 0 === t ? 0 : t)
                        }
                            : "get" == t ? function (t) {
                                return b && !f(t) ? void 0 : e(this, 0 === t ? 0 : t)
                            }
                                : "has" == t ? function (t) {
                                    return !(b && !f(t)) && e(this, 0 === t ? 0 : t)
                                }
                                    : function (t, n) {
                                        return e(this, 0 === t ? 0 : t, n),
                                            this
                                    }
                    )
                }
                , P = a(t, !d(y) || !(b || C.forEach && !h((function () {
                    (new y).entries().next()
                }
                ))));
            if (P)
                _ = n.getConstructor(e, t, g, k),
                    c.enable();
            else if (a(t, !0)) {
                var T = new _
                    , $ = T[k](b ? {} : -0, 1) != T
                    , S = h((function () {
                        T.has(1)
                    }
                    ))
                    , O = p((function (t) {
                        new y(t)
                    }
                    ))
                    , N = !b && h((function () {
                        var t = new y
                            , e = 5;
                        while (e--)
                            t[k](e, e);
                        return !t.has(-0)
                    }
                    ));
                O || (_ = e((function (t, e) {
                    u(t, C);
                    var n = m(new y, t, _);
                    return void 0 != e && l(e, n[k], {
                        that: n,
                        AS_ENTRIES: g
                    }),
                        n
                }
                )),
                    _.prototype = C,
                    C.constructor = _),
                    (S || N) && (x("delete"),
                        x("has"),
                        g && x("get")),
                    (N || $) && x(k),
                    b && C.clear && delete C.clear
            }
            return w[t] = _,
                s({
                    global: !0,
                    forced: _ != y
                }, w),
                v(_, t),
                b || n.setStrong(_, t, g),
                _
        }
    },
    "6f53": function (t, e, n) {
        var s = n("83ab")
            , o = n("e330")
            , i = n("df75")
            , a = n("fc6a")
            , r = n("d1e7").f
            , c = o(r)
            , l = o([].push)
            , u = function (t) {
                return function (e) {
                    var n, o = a(e), r = i(o), u = r.length, d = 0, f = [];
                    while (u > d)
                        n = r[d++],
                            s && !c(o, n) || l(f, t ? [n, o[n]] : o[n]);
                    return f
                }
            };
        t.exports = {
            entries: u(!0),
            values: u(!1)
        }
    },
    "83c7": function (t, e, n) { },
    "97a5": function (t, e, n) {
        t.exports = n.p + "img/zan.48f1d9f2.jpg"
    },
    a11e: function (t, e, n) {
        "use strict";
        n("c9e2")
    },
    a434: function (t, e, n) {
        "use strict";
        var s = n("23e7")
            , o = n("da84")
            , i = n("23cb")
            , a = n("5926")
            , r = n("07fa")
            , c = n("7b0b")
            , l = n("65f0")
            , u = n("8418")
            , d = n("1dde")
            , f = d("splice")
            , h = o.TypeError
            , p = Math.max
            , v = Math.min
            , m = 9007199254740991
            , g = "Maximum allowed length exceeded";
        s({
            target: "Array",
            proto: !0,
            forced: !f
        }, {
            splice: function (t, e) {
                var n, s, o, d, f, b, k = c(this), y = r(k), C = i(t, y), _ = arguments.length;
                if (0 === _ ? n = s = 0 : 1 === _ ? (n = 0,
                    s = y - C) : (n = _ - 2,
                        s = v(p(a(e), 0), y - C)),
                    y + n - s > m)
                    throw h(g);
                for (o = l(k, s),
                    d = 0; d < s; d++)
                    f = C + d,
                        f in k && u(o, d, k[f]);
                if (o.length = s,
                    n < s) {
                    for (d = C; d < y - s; d++)
                        f = d + s,
                            b = d + n,
                            f in k ? k[b] = k[f] : delete k[b];
                    for (d = y; d > y - s + n; d--)
                        delete k[d - 1]
                } else if (n > s)
                    for (d = y - s; d > C; d--)
                        f = d + s - 1,
                            b = d + n - 1,
                            f in k ? k[b] = k[f] : delete k[b];
                for (d = 0; d < n; d++)
                    k[d + C] = arguments[d + 2];
                return k.length = y - s + n,
                    o
            }
        })
    },
    b64b: function (t, e, n) {
        var s = n("23e7")
            , o = n("7b0b")
            , i = n("df75")
            , a = n("d039")
            , r = a((function () {
                i(1)
            }
            ));
        s({
            target: "Object",
            stat: !0,
            forced: r
        }, {
            keys: function (t) {
                return i(o(t))
            }
        })
    },
    bb2f: function (t, e, n) {
        var s = n("d039");
        t.exports = !s((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }
        ))
    },
    c740: function (t, e, n) {
        "use strict";
        var s = n("23e7")
            , o = n("b727").findIndex
            , i = n("44d2")
            , a = "findIndex"
            , r = !0;
        a in [] && Array(1)[a]((function () {
            r = !1
        }
        )),
            s({
                target: "Array",
                proto: !0,
                forced: r
            }, {
                findIndex: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }),
            i(a)
    },
    c884: function (t, e, n) { },
    c9e2: function (t, e, n) { },
    d2d2: function (t, e, n) {
        "use strict";
        n("d9fc")
    },
    d86b: function (t, e, n) {
        var s = n("d039");
        t.exports = s((function () {
            if ("function" == typeof ArrayBuffer) {
                var t = new ArrayBuffer(8);
                Object.isExtensible(t) && Object.defineProperty(t, "a", {
                    value: 8
                })
            }
        }
        ))
    },
    d9fc: function (t, e, n) { },
    e423: function (t, e, n) { },
    e963: function (t, e, n) { },
    ea6a: function (t, e, n) { },
    ebb7: function (t, e, n) {
        "use strict";
        n("83c7")
    },
    ed45: function (t, e, n) {
        "use strict";
        n("e963")
    },
    ed70: function (t, e, n) {
        "use strict";
        n("ea6a")
    },
    f183: function (t, e, n) {
        var s = n("23e7")
            , o = n("e330")
            , i = n("d012")
            , a = n("861d")
            , r = n("1a2d")
            , c = n("9bf2").f
            , l = n("241c")
            , u = n("057f")
            , d = n("4fadd")
            , f = n("90e3")
            , h = n("bb2f")
            , p = !1
            , v = f("meta")
            , m = 0
            , g = function (t) {
                c(t, v, {
                    value: {
                        objectID: "O" + m++,
                        weakData: {}
                    }
                })
            }
            , b = function (t, e) {
                if (!a(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!r(t, v)) {
                    if (!d(t))
                        return "F";
                    if (!e)
                        return "E";
                    g(t)
                }
                return t[v].objectID
            }
            , k = function (t, e) {
                if (!r(t, v)) {
                    if (!d(t))
                        return !0;
                    if (!e)
                        return !1;
                    g(t)
                }
                return t[v].weakData
            }
            , y = function (t) {
                return h && p && d(t) && !r(t, v) && g(t),
                    t
            }
            , C = function () {
                _.enable = function () { }
                    ,
                    p = !0;
                var t = l.f
                    , e = o([].splice)
                    , n = {};
                n[v] = 1,
                    t(n).length && (l.f = function (n) {
                        for (var s = t(n), o = 0, i = s.length; o < i; o++)
                            if (s[o] === v) {
                                e(s, o, 1);
                                break
                            }
                        return s
                    }
                        ,
                        s({
                            target: "Object",
                            stat: !0,
                            forced: !0
                        }, {
                            getOwnPropertyNames: u.f
                        }))
            }
            , _ = t.exports = {
                enable: C,
                fastKey: b,
                getWeakData: k,
                onFreeze: y
            };
        i[v] = !0
    }
}]);
