function Nm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function ru(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var md = { exports: {} },
  Oi = {},
  vd = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dl = Symbol.for("react.element"),
  Lm = Symbol.for("react.portal"),
  Tm = Symbol.for("react.fragment"),
  Om = Symbol.for("react.strict_mode"),
  Mm = Symbol.for("react.profiler"),
  Dm = Symbol.for("react.provider"),
  $m = Symbol.for("react.context"),
  Am = Symbol.for("react.forward_ref"),
  zm = Symbol.for("react.suspense"),
  Im = Symbol.for("react.memo"),
  Fm = Symbol.for("react.lazy"),
  wc = Symbol.iterator;
function Um(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wc && e[wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gd = Object.assign,
  wd = {};
function uo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wd),
    (this.updater = n || yd);
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sd() {}
Sd.prototype = uo.prototype;
function ou(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wd),
    (this.updater = n || yd);
}
var lu = (ou.prototype = new Sd());
lu.constructor = ou;
gd(lu, uo.prototype);
lu.isPureReactComponent = !0;
var Sc = Array.isArray,
  xd = Object.prototype.hasOwnProperty,
  iu = { current: null },
  Ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      xd.call(t, r) && !Ed.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: dl,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: iu.current,
  };
}
function Bm(e, t) {
  return {
    $$typeof: dl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dl;
}
function bm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xc = /\/+/g;
function Es(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bm("" + e.key)
    : t.toString(36);
}
function Bl(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case dl:
          case Lm:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Es(i, 0) : r),
      Sc(o)
        ? ((n = ""),
          e != null && (n = e.replace(xc, "$&/") + "/"),
          Bl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (su(o) &&
            (o = Bm(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(xc, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Sc(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + Es(l, s);
      i += Bl(l, t, n, a, o);
    }
  else if (((a = Um(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Es(l, s++)), (i += Bl(l, t, n, a, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function El(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bl(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Vm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var lt = { current: null },
  bl = { transition: null },
  Wm = {
    ReactCurrentDispatcher: lt,
    ReactCurrentBatchConfig: bl,
    ReactCurrentOwner: iu,
  };
le.Children = {
  map: El,
  forEach: function (e, t, n) {
    El(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      El(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      El(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!su(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
le.Component = uo;
le.Fragment = Tm;
le.Profiler = Mm;
le.PureComponent = ou;
le.StrictMode = Om;
le.Suspense = zm;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wm;
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = gd({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = iu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      xd.call(t, a) &&
        !Ed.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: dl, type: e.type, key: o, ref: l, props: r, _owner: i };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: $m,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dm, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = Cd;
le.createFactory = function (e) {
  var t = Cd.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: Am, render: e };
};
le.isValidElement = su;
le.lazy = function (e) {
  return { $$typeof: Fm, _payload: { _status: -1, _result: e }, _init: Vm };
};
le.memo = function (e, t) {
  return { $$typeof: Im, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = bl.transition;
  bl.transition = {};
  try {
    e();
  } finally {
    bl.transition = t;
  }
};
le.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
le.useCallback = function (e, t) {
  return lt.current.useCallback(e, t);
};
le.useContext = function (e) {
  return lt.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return lt.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return lt.current.useEffect(e, t);
};
le.useId = function () {
  return lt.current.useId();
};
le.useImperativeHandle = function (e, t, n) {
  return lt.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function (e, t) {
  return lt.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return lt.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return lt.current.useMemo(e, t);
};
le.useReducer = function (e, t, n) {
  return lt.current.useReducer(e, t, n);
};
le.useRef = function (e) {
  return lt.current.useRef(e);
};
le.useState = function (e) {
  return lt.current.useState(e);
};
le.useSyncExternalStore = function (e, t, n) {
  return lt.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function () {
  return lt.current.useTransition();
};
le.version = "18.2.0";
vd.exports = le;
var x = vd.exports;
const Je = ru(x),
  Hm = Nm({ __proto__: null, default: Je }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km = x,
  Qm = Symbol.for("react.element"),
  Ym = Symbol.for("react.fragment"),
  Xm = Object.prototype.hasOwnProperty,
  Gm = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function kd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Xm.call(t, r) && !Zm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Qm,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Gm.current,
  };
}
Oi.Fragment = Ym;
Oi.jsx = kd;
Oi.jsxs = kd;
md.exports = Oi;
var S = md.exports,
  ta = {},
  Rd = { exports: {} },
  xt = {},
  _d = { exports: {} },
  Pd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, b) {
    var F = D.length;
    D.push(b);
    e: for (; 0 < F; ) {
      var J = (F - 1) >>> 1,
        se = D[J];
      if (0 < o(se, b)) (D[J] = b), (D[F] = se), (F = J);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var b = D[0],
      F = D.pop();
    if (F !== b) {
      D[0] = F;
      e: for (var J = 0, se = D.length, K = se >>> 1; J < K; ) {
        var X = 2 * (J + 1) - 1,
          Ve = D[X],
          je = X + 1,
          me = D[je];
        if (0 > o(Ve, F))
          je < se && 0 > o(me, Ve)
            ? ((D[J] = me), (D[je] = F), (J = je))
            : ((D[J] = Ve), (D[X] = F), (J = X));
        else if (je < se && 0 > o(me, F)) (D[J] = me), (D[je] = F), (J = je);
        else break e;
      }
    }
    return b;
  }
  function o(D, b) {
    var F = D.sortIndex - b.sortIndex;
    return F !== 0 ? F : D.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    h = null,
    m = 3,
    y = !1,
    w = !1,
    g = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= D)
        r(u), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(u);
    }
  }
  function p(D) {
    if (((g = !1), v(D), !w))
      if (n(a) !== null) (w = !0), fe(k);
      else {
        var b = n(u);
        b !== null && Y(p, b.startTime - D);
      }
  }
  function k(D, b) {
    (w = !1), g && ((g = !1), d(T), (T = -1)), (y = !0);
    var F = m;
    try {
      for (
        v(b), h = n(a);
        h !== null && (!(h.expirationTime > b) || (D && !Q()));

      ) {
        var J = h.callback;
        if (typeof J == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var se = J(h.expirationTime <= b);
          (b = e.unstable_now()),
            typeof se == "function" ? (h.callback = se) : h === n(a) && r(a),
            v(b);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var K = !0;
      else {
        var X = n(u);
        X !== null && Y(p, X.startTime - b), (K = !1);
      }
      return K;
    } finally {
      (h = null), (m = F), (y = !1);
    }
  }
  var L = !1,
    _ = null,
    T = -1,
    $ = 5,
    U = -1;
  function Q() {
    return !(e.unstable_now() - U < $);
  }
  function Z() {
    if (_ !== null) {
      var D = e.unstable_now();
      U = D;
      var b = !0;
      try {
        b = _(!0, D);
      } finally {
        b ? ue() : ((L = !1), (_ = null));
      }
    } else L = !1;
  }
  var ue;
  if (typeof f == "function")
    ue = function () {
      f(Z);
    };
  else if (typeof MessageChannel < "u") {
    var ne = new MessageChannel(),
      q = ne.port2;
    (ne.port1.onmessage = Z),
      (ue = function () {
        q.postMessage(null);
      });
  } else
    ue = function () {
      C(Z, 0);
    };
  function fe(D) {
    (_ = D), L || ((L = !0), ue());
  }
  function Y(D, b) {
    T = C(function () {
      D(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), fe(k));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : ($ = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = m;
      }
      var F = m;
      m = b;
      try {
        return D();
      } finally {
        m = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, b) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var F = m;
      m = D;
      try {
        return b();
      } finally {
        m = F;
      }
    }),
    (e.unstable_scheduleCallback = function (D, b, F) {
      var J = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? J + F : J))
          : (F = J),
        D)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = F + se),
        (D = {
          id: c++,
          callback: b,
          priorityLevel: D,
          startTime: F,
          expirationTime: se,
          sortIndex: -1,
        }),
        F > J
          ? ((D.sortIndex = F),
            t(u, D),
            n(a) === null &&
              D === n(u) &&
              (g ? (d(T), (T = -1)) : (g = !0), Y(p, F - J)))
          : ((D.sortIndex = se), t(a, D), w || y || ((w = !0), fe(k))),
        D
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (D) {
      var b = m;
      return function () {
        var F = m;
        m = b;
        try {
          return D.apply(this, arguments);
        } finally {
          m = F;
        }
      };
    });
})(Pd);
_d.exports = Pd;
var qm = _d.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = x,
  St = qm;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Nd = new Set(),
  Ho = {};
function Cr(e, t) {
  Jr(e, t), Jr(e + "Capture", t);
}
function Jr(e, t) {
  for (Ho[e] = t, e = 0; e < t.length; e++) Nd.add(t[e]);
}
var vn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  na = Object.prototype.hasOwnProperty,
  Jm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ec = {},
  Cc = {};
function ev(e) {
  return na.call(Cc, e)
    ? !0
    : na.call(Ec, e)
      ? !1
      : Jm.test(e)
        ? (Cc[e] = !0)
        : ((Ec[e] = !0), !1);
}
function tv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function nv(e, t, n, r) {
  if (t === null || typeof t > "u" || tv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function it(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new it(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ke[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ke[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ke[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ke[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ke[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ke[e] = new it(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ke[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var au = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(au, uu);
    Ke[t] = new it(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(au, uu);
    Ke[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(au, uu);
  Ke[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ke[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new it(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ke[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var o = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (nv(t, n, o, r) && (n = null),
    r || o === null
      ? ev(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cl = Symbol.for("react.element"),
  Or = Symbol.for("react.portal"),
  Mr = Symbol.for("react.fragment"),
  fu = Symbol.for("react.strict_mode"),
  ra = Symbol.for("react.profiler"),
  Ld = Symbol.for("react.provider"),
  Td = Symbol.for("react.context"),
  du = Symbol.for("react.forward_ref"),
  oa = Symbol.for("react.suspense"),
  la = Symbol.for("react.suspense_list"),
  pu = Symbol.for("react.memo"),
  On = Symbol.for("react.lazy"),
  Od = Symbol.for("react.offscreen"),
  kc = Symbol.iterator;
function go(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kc && e[kc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Re = Object.assign,
  Cs;
function Lo(e) {
  if (Cs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cs = (t && t[1]) || "";
    }
  return (
    `
` +
    Cs +
    e
  );
}
var ks = !1;
function Rs(e, t) {
  if (!e || ks) return "";
  ks = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (ks = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Lo(e) : "";
}
function rv(e) {
  switch (e.tag) {
    case 5:
      return Lo(e.type);
    case 16:
      return Lo("Lazy");
    case 13:
      return Lo("Suspense");
    case 19:
      return Lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rs(e.type, !1)), e;
    case 11:
      return (e = Rs(e.type.render, !1)), e;
    case 1:
      return (e = Rs(e.type, !0)), e;
    default:
      return "";
  }
}
function ia(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mr:
      return "Fragment";
    case Or:
      return "Portal";
    case ra:
      return "Profiler";
    case fu:
      return "StrictMode";
    case oa:
      return "Suspense";
    case la:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Td:
        return (e.displayName || "Context") + ".Consumer";
      case Ld:
        return (e._context.displayName || "Context") + ".Provider";
      case du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pu:
        return (
          (t = e.displayName || null), t !== null ? t : ia(e.type) || "Memo"
        );
      case On:
        (t = e._payload), (e = e._init);
        try {
          return ia(e(t));
        } catch {}
    }
  return null;
}
function ov(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ia(t);
    case 8:
      return t === fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Kn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Md(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lv(e) {
  var t = Md(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kl(e) {
  e._valueTracker || (e._valueTracker = lv(e));
}
function Dd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Md(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sa(e, t) {
  var n = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $d(e, t) {
  (t = t.checked), t != null && cu(e, "checked", t, !1);
}
function aa(e, t) {
  $d(e, t);
  var n = Kn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ua(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ua(e, t.type, Kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _c(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ua(e, t, n) {
  (t !== "number" || Jl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var To = Array.isArray;
function Hr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ca(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (To(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kn(n) };
}
function Ad(e, t) {
  var n = Kn(t.value),
    r = Kn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Rl,
  Id = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Rl = Rl || document.createElement("div"),
          Rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Rl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ko(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Do = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Do).forEach(function (e) {
  iv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Do[t] = Do[e]);
  });
});
function Fd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Do.hasOwnProperty(e) && Do[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ud(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Fd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var sv = Re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function da(e, t) {
  if (t) {
    if (sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function pa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ha = null;
function hu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ma = null,
  Kr = null,
  Qr = null;
function Nc(e) {
  if ((e = ml(e))) {
    if (typeof ma != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = zi(t)), ma(e.stateNode, e.type, t));
  }
}
function Bd(e) {
  Kr ? (Qr ? Qr.push(e) : (Qr = [e])) : (Kr = e);
}
function bd() {
  if (Kr) {
    var e = Kr,
      t = Qr;
    if (((Qr = Kr = null), Nc(e), t)) for (e = 0; e < t.length; e++) Nc(t[e]);
  }
}
function Vd(e, t) {
  return e(t);
}
function Wd() {}
var _s = !1;
function Hd(e, t, n) {
  if (_s) return e(t, n);
  _s = !0;
  try {
    return Vd(e, t, n);
  } finally {
    (_s = !1), (Kr !== null || Qr !== null) && (Wd(), bd());
  }
}
function Qo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var va = !1;
if (vn)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        va = !0;
      },
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo);
  } catch {
    va = !1;
  }
function av(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var $o = !1,
  ei = null,
  ti = !1,
  ya = null,
  uv = {
    onError: function (e) {
      ($o = !0), (ei = e);
    },
  };
function cv(e, t, n, r, o, l, i, s, a) {
  ($o = !1), (ei = null), av.apply(uv, arguments);
}
function fv(e, t, n, r, o, l, i, s, a) {
  if ((cv.apply(this, arguments), $o)) {
    if ($o) {
      var u = ei;
      ($o = !1), (ei = null);
    } else throw Error(O(198));
    ti || ((ti = !0), (ya = u));
  }
}
function kr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lc(e) {
  if (kr(e) !== e) throw Error(O(188));
}
function dv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = kr(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Lc(o), e;
        if (l === r) return Lc(o), t;
        l = l.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Qd(e) {
  return (e = dv(e)), e !== null ? Yd(e) : null;
}
function Yd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xd = St.unstable_scheduleCallback,
  Tc = St.unstable_cancelCallback,
  pv = St.unstable_shouldYield,
  hv = St.unstable_requestPaint,
  Me = St.unstable_now,
  mv = St.unstable_getCurrentPriorityLevel,
  mu = St.unstable_ImmediatePriority,
  Gd = St.unstable_UserBlockingPriority,
  ni = St.unstable_NormalPriority,
  vv = St.unstable_LowPriority,
  Zd = St.unstable_IdlePriority,
  Mi = null,
  Jt = null;
function yv(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Mi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Bt = Math.clz32 ? Math.clz32 : Sv,
  gv = Math.log,
  wv = Math.LN2;
function Sv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gv(e) / wv) | 0)) | 0;
}
var _l = 64,
  Pl = 4194304;
function Oo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Oo(s)) : ((l &= i), l !== 0 && (r = Oo(l)));
  } else (i = n & ~o), i !== 0 ? (r = Oo(i)) : l !== 0 && (r = Oo(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Bt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function xv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ev(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Bt(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = xv(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function ga(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qd() {
  var e = _l;
  return (_l <<= 1), !(_l & 4194240) && (_l = 64), e;
}
function Ps(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Bt(t)),
    (e[t] = n);
}
function Cv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Bt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function vu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Bt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var de = 0;
function Jd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ep,
  yu,
  tp,
  np,
  rp,
  wa = !1,
  jl = [],
  In = null,
  Fn = null,
  Un = null,
  Yo = new Map(),
  Xo = new Map(),
  Dn = [],
  kv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Oc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      In = null;
      break;
    case "dragenter":
    case "dragleave":
      Fn = null;
      break;
    case "mouseover":
    case "mouseout":
      Un = null;
      break;
    case "pointerover":
    case "pointerout":
      Yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xo.delete(t.pointerId);
  }
}
function So(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = ml(t)), t !== null && yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Rv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (In = So(In, e, t, n, r, o)), !0;
    case "dragenter":
      return (Fn = So(Fn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Un = So(Un, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Yo.set(l, So(Yo.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Xo.set(l, So(Xo.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function op(e) {
  var t = ir(e.target);
  if (t !== null) {
    var n = kr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kd(n)), t !== null)) {
          (e.blockedOn = t),
            rp(e.priority, function () {
              tp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ha = r), n.target.dispatchEvent(r), (ha = null);
    } else return (t = ml(n)), t !== null && yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Mc(e, t, n) {
  Vl(e) && n.delete(t);
}
function _v() {
  (wa = !1),
    In !== null && Vl(In) && (In = null),
    Fn !== null && Vl(Fn) && (Fn = null),
    Un !== null && Vl(Un) && (Un = null),
    Yo.forEach(Mc),
    Xo.forEach(Mc);
}
function xo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wa ||
      ((wa = !0),
      St.unstable_scheduleCallback(St.unstable_NormalPriority, _v)));
}
function Go(e) {
  function t(o) {
    return xo(o, e);
  }
  if (0 < jl.length) {
    xo(jl[0], e);
    for (var n = 1; n < jl.length; n++) {
      var r = jl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    In !== null && xo(In, e),
      Fn !== null && xo(Fn, e),
      Un !== null && xo(Un, e),
      Yo.forEach(t),
      Xo.forEach(t),
      n = 0;
    n < Dn.length;
    n++
  )
    (r = Dn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dn.length && ((n = Dn[0]), n.blockedOn === null); )
    op(n), n.blockedOn === null && Dn.shift();
}
var Yr = Sn.ReactCurrentBatchConfig,
  oi = !0;
function Pv(e, t, n, r) {
  var o = de,
    l = Yr.transition;
  Yr.transition = null;
  try {
    (de = 1), gu(e, t, n, r);
  } finally {
    (de = o), (Yr.transition = l);
  }
}
function jv(e, t, n, r) {
  var o = de,
    l = Yr.transition;
  Yr.transition = null;
  try {
    (de = 4), gu(e, t, n, r);
  } finally {
    (de = o), (Yr.transition = l);
  }
}
function gu(e, t, n, r) {
  if (oi) {
    var o = Sa(e, t, n, r);
    if (o === null) zs(e, t, r, li, n), Oc(e, r);
    else if (Rv(o, e, t, n, r)) r.stopPropagation();
    else if ((Oc(e, r), t & 4 && -1 < kv.indexOf(e))) {
      for (; o !== null; ) {
        var l = ml(o);
        if (
          (l !== null && ep(l),
          (l = Sa(e, t, n, r)),
          l === null && zs(e, t, r, li, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else zs(e, t, r, null, n);
  }
}
var li = null;
function Sa(e, t, n, r) {
  if (((li = null), (e = hu(r)), (e = ir(e)), e !== null))
    if (((t = kr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (li = e), null;
}
function lp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (mv()) {
        case mu:
          return 1;
        case Gd:
          return 4;
        case ni:
        case vv:
          return 16;
        case Zd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var An = null,
  wu = null,
  Wl = null;
function ip() {
  if (Wl) return Wl;
  var e,
    t = wu,
    n = t.length,
    r,
    o = "value" in An ? An.value : An.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Wl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Hl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Nl() {
  return !0;
}
function Dc() {
  return !1;
}
function Et(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Nl
        : Dc),
      (this.isPropagationStopped = Dc),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Nl));
      },
      persist: function () {},
      isPersistent: Nl,
    }),
    t
  );
}
var co = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Su = Et(co),
  hl = Re({}, co, { view: 0, detail: 0 }),
  Nv = Et(hl),
  js,
  Ns,
  Eo,
  Di = Re({}, hl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Eo &&
            (Eo && e.type === "mousemove"
              ? ((js = e.screenX - Eo.screenX), (Ns = e.screenY - Eo.screenY))
              : (Ns = js = 0),
            (Eo = e)),
          js);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ns;
    },
  }),
  $c = Et(Di),
  Lv = Re({}, Di, { dataTransfer: 0 }),
  Tv = Et(Lv),
  Ov = Re({}, hl, { relatedTarget: 0 }),
  Ls = Et(Ov),
  Mv = Re({}, co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dv = Et(Mv),
  $v = Re({}, co, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Av = Et($v),
  zv = Re({}, co, { data: 0 }),
  Ac = Et(zv),
  Iv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Fv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Uv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Uv[e]) ? !!t[e] : !1;
}
function xu() {
  return Bv;
}
var bv = Re({}, hl, {
    key: function (e) {
      if (e.key) {
        var t = Iv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Fv[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xu,
    charCode: function (e) {
      return e.type === "keypress" ? Hl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Vv = Et(bv),
  Wv = Re({}, Di, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zc = Et(Wv),
  Hv = Re({}, hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xu,
  }),
  Kv = Et(Hv),
  Qv = Re({}, co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yv = Et(Qv),
  Xv = Re({}, Di, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Gv = Et(Xv),
  Zv = [9, 13, 27, 32],
  Eu = vn && "CompositionEvent" in window,
  Ao = null;
vn && "documentMode" in document && (Ao = document.documentMode);
var qv = vn && "TextEvent" in window && !Ao,
  sp = vn && (!Eu || (Ao && 8 < Ao && 11 >= Ao)),
  Ic = String.fromCharCode(32),
  Fc = !1;
function ap(e, t) {
  switch (e) {
    case "keyup":
      return Zv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function up(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dr = !1;
function Jv(e, t) {
  switch (e) {
    case "compositionend":
      return up(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fc = !0), Ic);
    case "textInput":
      return (e = t.data), e === Ic && Fc ? null : e;
    default:
      return null;
  }
}
function ey(e, t) {
  if (Dr)
    return e === "compositionend" || (!Eu && ap(e, t))
      ? ((e = ip()), (Wl = wu = An = null), (Dr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ty = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ty[e.type] : t === "textarea";
}
function cp(e, t, n, r) {
  Bd(r),
    (t = ii(t, "onChange")),
    0 < t.length &&
      ((n = new Su("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zo = null,
  Zo = null;
function ny(e) {
  xp(e, 0);
}
function $i(e) {
  var t = zr(e);
  if (Dd(t)) return e;
}
function ry(e, t) {
  if (e === "change") return t;
}
var fp = !1;
if (vn) {
  var Ts;
  if (vn) {
    var Os = "oninput" in document;
    if (!Os) {
      var Bc = document.createElement("div");
      Bc.setAttribute("oninput", "return;"),
        (Os = typeof Bc.oninput == "function");
    }
    Ts = Os;
  } else Ts = !1;
  fp = Ts && (!document.documentMode || 9 < document.documentMode);
}
function bc() {
  zo && (zo.detachEvent("onpropertychange", dp), (Zo = zo = null));
}
function dp(e) {
  if (e.propertyName === "value" && $i(Zo)) {
    var t = [];
    cp(t, Zo, e, hu(e)), Hd(ny, t);
  }
}
function oy(e, t, n) {
  e === "focusin"
    ? (bc(), (zo = t), (Zo = n), zo.attachEvent("onpropertychange", dp))
    : e === "focusout" && bc();
}
function ly(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $i(Zo);
}
function iy(e, t) {
  if (e === "click") return $i(t);
}
function sy(e, t) {
  if (e === "input" || e === "change") return $i(t);
}
function ay(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vt = typeof Object.is == "function" ? Object.is : ay;
function qo(e, t) {
  if (Vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!na.call(t, o) || !Vt(e[o], t[o])) return !1;
  }
  return !0;
}
function Vc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wc(e, t) {
  var n = Vc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vc(n);
  }
}
function pp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? pp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function hp() {
  for (var e = window, t = Jl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jl(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function uy(e) {
  var t = hp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Wc(n, l));
        var i = Wc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var cy = vn && "documentMode" in document && 11 >= document.documentMode,
  $r = null,
  xa = null,
  Io = null,
  Ea = !1;
function Hc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ea ||
    $r == null ||
    $r !== Jl(r) ||
    ((r = $r),
    "selectionStart" in r && Cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Io && qo(Io, r)) ||
      ((Io = r),
      (r = ii(xa, "onSelect")),
      0 < r.length &&
        ((t = new Su("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $r))));
}
function Ll(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: Ll("Animation", "AnimationEnd"),
    animationiteration: Ll("Animation", "AnimationIteration"),
    animationstart: Ll("Animation", "AnimationStart"),
    transitionend: Ll("Transition", "TransitionEnd"),
  },
  Ms = {},
  mp = {};
vn &&
  ((mp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function Ai(e) {
  if (Ms[e]) return Ms[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mp) return (Ms[e] = t[n]);
  return e;
}
var vp = Ai("animationend"),
  yp = Ai("animationiteration"),
  gp = Ai("animationstart"),
  wp = Ai("transitionend"),
  Sp = new Map(),
  Kc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Zn(e, t) {
  Sp.set(e, t), Cr(t, [e]);
}
for (var Ds = 0; Ds < Kc.length; Ds++) {
  var $s = Kc[Ds],
    fy = $s.toLowerCase(),
    dy = $s[0].toUpperCase() + $s.slice(1);
  Zn(fy, "on" + dy);
}
Zn(vp, "onAnimationEnd");
Zn(yp, "onAnimationIteration");
Zn(gp, "onAnimationStart");
Zn("dblclick", "onDoubleClick");
Zn("focusin", "onFocus");
Zn("focusout", "onBlur");
Zn(wp, "onTransitionEnd");
Jr("onMouseEnter", ["mouseout", "mouseover"]);
Jr("onMouseLeave", ["mouseout", "mouseover"]);
Jr("onPointerEnter", ["pointerout", "pointerover"]);
Jr("onPointerLeave", ["pointerout", "pointerover"]);
Cr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Cr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Cr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Cr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  py = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function Qc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), fv(r, t, void 0, e), (e.currentTarget = null);
}
function xp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          Qc(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Qc(o, s, u), (l = a);
        }
    }
  }
  if (ti) throw ((e = ya), (ti = !1), (ya = null), e);
}
function we(e, t) {
  var n = t[Pa];
  n === void 0 && (n = t[Pa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ep(t, e, 2, !1), n.add(r));
}
function As(e, t, n) {
  var r = 0;
  t && (r |= 4), Ep(n, e, r, t);
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);
function Jo(e) {
  if (!e[Tl]) {
    (e[Tl] = !0),
      Nd.forEach(function (n) {
        n !== "selectionchange" && (py.has(n) || As(n, !1, e), As(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tl] || ((t[Tl] = !0), As("selectionchange", !1, t));
  }
}
function Ep(e, t, n, r) {
  switch (lp(t)) {
    case 1:
      var o = Pv;
      break;
    case 4:
      o = jv;
      break;
    default:
      o = gu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !va ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function zs(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = ir(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Hd(function () {
    var u = l,
      c = hu(n),
      h = [];
    e: {
      var m = Sp.get(e);
      if (m !== void 0) {
        var y = Su,
          w = e;
        switch (e) {
          case "keypress":
            if (Hl(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Vv;
            break;
          case "focusin":
            (w = "focus"), (y = Ls);
            break;
          case "focusout":
            (w = "blur"), (y = Ls);
            break;
          case "beforeblur":
          case "afterblur":
            y = Ls;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = $c;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Tv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Kv;
            break;
          case vp:
          case yp:
          case gp:
            y = Dv;
            break;
          case wp:
            y = Yv;
            break;
          case "scroll":
            y = Nv;
            break;
          case "wheel":
            y = Gv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Av;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = zc;
        }
        var g = (t & 4) !== 0,
          C = !g && e === "scroll",
          d = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var p = v.stateNode;
          if (
            (v.tag === 5 &&
              p !== null &&
              ((v = p),
              d !== null && ((p = Qo(f, d)), p != null && g.push(el(f, p, v)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((m = new y(m, w, null, n, c)), h.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ha &&
            (w = n.relatedTarget || n.fromElement) &&
            (ir(w) || w[yn]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? ir(w) : null),
              w !== null &&
                ((C = kr(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((g = $c),
            (p = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = zc),
              (p = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (C = y == null ? m : zr(y)),
            (v = w == null ? m : zr(w)),
            (m = new g(p, f + "leave", y, n, c)),
            (m.target = C),
            (m.relatedTarget = v),
            (p = null),
            ir(c) === u &&
              ((g = new g(d, f + "enter", w, n, c)),
              (g.target = v),
              (g.relatedTarget = C),
              (p = g)),
            (C = p),
            y && w)
          )
            t: {
              for (g = y, d = w, f = 0, v = g; v; v = Lr(v)) f++;
              for (v = 0, p = d; p; p = Lr(p)) v++;
              for (; 0 < f - v; ) (g = Lr(g)), f--;
              for (; 0 < v - f; ) (d = Lr(d)), v--;
              for (; f--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = Lr(g)), (d = Lr(d));
              }
              g = null;
            }
          else g = null;
          y !== null && Yc(h, m, y, g, !1),
            w !== null && C !== null && Yc(h, C, w, g, !0);
        }
      }
      e: {
        if (
          ((m = u ? zr(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var k = ry;
        else if (Uc(m))
          if (fp) k = sy;
          else {
            k = ly;
            var L = oy;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = iy);
        if (k && (k = k(e, u))) {
          cp(h, k, n, c);
          break e;
        }
        L && L(e, m, u),
          e === "focusout" &&
            (L = m._wrapperState) &&
            L.controlled &&
            m.type === "number" &&
            ua(m, "number", m.value);
      }
      switch (((L = u ? zr(u) : window), e)) {
        case "focusin":
          (Uc(L) || L.contentEditable === "true") &&
            (($r = L), (xa = u), (Io = null));
          break;
        case "focusout":
          Io = xa = $r = null;
          break;
        case "mousedown":
          Ea = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ea = !1), Hc(h, n, c);
          break;
        case "selectionchange":
          if (cy) break;
        case "keydown":
        case "keyup":
          Hc(h, n, c);
      }
      var _;
      if (Eu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Dr
          ? ap(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (sp &&
          n.locale !== "ko" &&
          (Dr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Dr && (_ = ip())
            : ((An = c),
              (wu = "value" in An ? An.value : An.textContent),
              (Dr = !0))),
        (L = ii(u, T)),
        0 < L.length &&
          ((T = new Ac(T, e, null, n, c)),
          h.push({ event: T, listeners: L }),
          _ ? (T.data = _) : ((_ = up(n)), _ !== null && (T.data = _)))),
        (_ = qv ? Jv(e, n) : ey(e, n)) &&
          ((u = ii(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ac("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    xp(h, t);
  });
}
function el(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ii(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Qo(e, n)),
      l != null && r.unshift(el(e, l, o)),
      (l = Qo(e, t)),
      l != null && r.push(el(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yc(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Qo(n, l)), a != null && i.unshift(el(n, a, s)))
        : o || ((a = Qo(n, l)), a != null && i.push(el(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var hy = /\r\n?/g,
  my = /\u0000|\uFFFD/g;
function Xc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hy,
      `
`,
    )
    .replace(my, "");
}
function Ol(e, t, n) {
  if (((t = Xc(t)), Xc(e) !== t && n)) throw Error(O(425));
}
function si() {}
var Ca = null,
  ka = null;
function Ra(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _a = typeof setTimeout == "function" ? setTimeout : void 0,
  vy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gc = typeof Promise == "function" ? Promise : void 0,
  yy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gc < "u"
        ? function (e) {
            return Gc.resolve(null).then(e).catch(gy);
          }
        : _a;
function gy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Is(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Go(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Go(t);
}
function Bn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fo = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + fo,
  tl = "__reactProps$" + fo,
  yn = "__reactContainer$" + fo,
  Pa = "__reactEvents$" + fo,
  wy = "__reactListeners$" + fo,
  Sy = "__reactHandles$" + fo;
function ir(e) {
  var t = e[qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yn] || n[qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zc(e); e !== null; ) {
          if ((n = e[qt])) return n;
          e = Zc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ml(e) {
  return (
    (e = e[qt] || e[yn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function zi(e) {
  return e[tl] || null;
}
var ja = [],
  Ir = -1;
function qn(e) {
  return { current: e };
}
function Se(e) {
  0 > Ir || ((e.current = ja[Ir]), (ja[Ir] = null), Ir--);
}
function ve(e, t) {
  Ir++, (ja[Ir] = e.current), (e.current = t);
}
var Qn = {},
  et = qn(Qn),
  dt = qn(!1),
  hr = Qn;
function eo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function pt(e) {
  return (e = e.childContextTypes), e != null;
}
function ai() {
  Se(dt), Se(et);
}
function qc(e, t, n) {
  if (et.current !== Qn) throw Error(O(168));
  ve(et, t), ve(dt, n);
}
function Cp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, ov(e) || "Unknown", o));
  return Re({}, n, r);
}
function ui(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qn),
    (hr = et.current),
    ve(et, e),
    ve(dt, dt.current),
    !0
  );
}
function Jc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Cp(e, t, hr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Se(dt),
      Se(et),
      ve(et, e))
    : Se(dt),
    ve(dt, n);
}
var fn = null,
  Ii = !1,
  Fs = !1;
function kp(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function xy(e) {
  (Ii = !0), kp(e);
}
function Jn() {
  if (!Fs && fn !== null) {
    Fs = !0;
    var e = 0,
      t = de;
    try {
      var n = fn;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (fn = null), (Ii = !1);
    } catch (o) {
      throw (fn !== null && (fn = fn.slice(e + 1)), Xd(mu, Jn), o);
    } finally {
      (de = t), (Fs = !1);
    }
  }
  return null;
}
var Fr = [],
  Ur = 0,
  ci = null,
  fi = 0,
  Rt = [],
  _t = 0,
  mr = null,
  dn = 1,
  pn = "";
function or(e, t) {
  (Fr[Ur++] = fi), (Fr[Ur++] = ci), (ci = e), (fi = t);
}
function Rp(e, t, n) {
  (Rt[_t++] = dn), (Rt[_t++] = pn), (Rt[_t++] = mr), (mr = e);
  var r = dn;
  e = pn;
  var o = 32 - Bt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Bt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (dn = (1 << (32 - Bt(t) + o)) | (n << o) | r),
      (pn = l + e);
  } else (dn = (1 << l) | (n << o) | r), (pn = e);
}
function ku(e) {
  e.return !== null && (or(e, 1), Rp(e, 1, 0));
}
function Ru(e) {
  for (; e === ci; )
    (ci = Fr[--Ur]), (Fr[Ur] = null), (fi = Fr[--Ur]), (Fr[Ur] = null);
  for (; e === mr; )
    (mr = Rt[--_t]),
      (Rt[_t] = null),
      (pn = Rt[--_t]),
      (Rt[_t] = null),
      (dn = Rt[--_t]),
      (Rt[_t] = null);
}
var gt = null,
  yt = null,
  xe = !1,
  Ut = null;
function _p(e, t) {
  var n = Pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ef(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gt = e), (yt = Bn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gt = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mr !== null ? { id: dn, overflow: pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gt = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Na(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function La(e) {
  if (xe) {
    var t = yt;
    if (t) {
      var n = t;
      if (!ef(e, t)) {
        if (Na(e)) throw Error(O(418));
        t = Bn(n.nextSibling);
        var r = gt;
        t && ef(e, t)
          ? _p(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (gt = e));
      }
    } else {
      if (Na(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (gt = e);
    }
  }
}
function tf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function Ml(e) {
  if (e !== gt) return !1;
  if (!xe) return tf(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ra(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (Na(e)) throw (Pp(), Error(O(418)));
    for (; t; ) _p(e, t), (t = Bn(t.nextSibling));
  }
  if ((tf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yt = Bn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = gt ? Bn(e.stateNode.nextSibling) : null;
  return !0;
}
function Pp() {
  for (var e = yt; e; ) e = Bn(e.nextSibling);
}
function to() {
  (yt = gt = null), (xe = !1);
}
function _u(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
var Ey = Sn.ReactCurrentBatchConfig;
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var di = qn(null),
  pi = null,
  Br = null,
  Pu = null;
function ju() {
  Pu = Br = pi = null;
}
function Nu(e) {
  var t = di.current;
  Se(di), (e._currentValue = t);
}
function Ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xr(e, t) {
  (pi = e),
    (Pu = Br = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ft = !0), (e.firstContext = null));
}
function Nt(e) {
  var t = e._currentValue;
  if (Pu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Br === null)) {
      if (pi === null) throw Error(O(308));
      (Br = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else Br = Br.next = e;
  return t;
}
var sr = null;
function Lu(e) {
  sr === null ? (sr = [e]) : sr.push(e);
}
function jp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Lu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    gn(e, r)
  );
}
function gn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function Tu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Np(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function hn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      gn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Lu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    gn(e, n)
  );
}
function Kl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n);
  }
}
function nf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hi(e, t, n, r) {
  var o = e.updateQueue;
  Mn = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== i &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var h = o.baseState;
    (i = 0), (c = u = a = null), (s = l);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            g = s;
          switch (((m = t), (y = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                h = w.call(y, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (m = typeof w == "function" ? w.call(y, h, m) : w),
                m == null)
              )
                break e;
              h = Re({}, h, m);
              break e;
            case 2:
              Mn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (a = h)) : (c = c.next = y),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (yr |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function rf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var Lp = new jd.Component().refs;
function Oa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? kr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      o = Wn(e),
      l = hn(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = bn(e, l, o)),
      t !== null && (bt(t, e, o, r), Kl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      o = Wn(e),
      l = hn(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = bn(e, l, o)),
      t !== null && (bt(t, e, o, r), Kl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot(),
      r = Wn(e),
      o = hn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = bn(e, o, r)),
      t !== null && (bt(t, e, r, n), Kl(t, e, r));
  },
};
function of(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !qo(n, r) || !qo(o, l)
        : !0
  );
}
function Tp(e, t, n) {
  var r = !1,
    o = Qn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Nt(l))
      : ((o = pt(t) ? hr : et.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? eo(e, o) : Qn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function lf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fi.enqueueReplaceState(t, t.state, null);
}
function Ma(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Lp), Tu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Nt(l))
    : ((l = pt(t) ? hr : et.current), (o.context = eo(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Oa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Fi.enqueueReplaceState(o, o.state, null),
      hi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Co(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            s === Lp && (s = o.refs = {}),
              i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function Dl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function sf(e) {
  var t = e._init;
  return t(e._payload);
}
function Op(e) {
  function t(d, f) {
    if (e) {
      var v = d.deletions;
      v === null ? ((d.deletions = [f]), (d.flags |= 16)) : v.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function o(d, f) {
    return (d = Hn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, f, v) {
    return (
      (d.index = v),
      e
        ? ((v = d.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((d.flags |= 2), f) : v)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, v, p) {
    return f === null || f.tag !== 6
      ? ((f = Ks(v, d.mode, p)), (f.return = d), f)
      : ((f = o(f, v)), (f.return = d), f);
  }
  function a(d, f, v, p) {
    var k = v.type;
    return k === Mr
      ? c(d, f, v.props.children, p, v.key)
      : f !== null &&
          (f.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === On &&
              sf(k) === f.type))
        ? ((p = o(f, v.props)), (p.ref = Co(d, f, v)), (p.return = d), p)
        : ((p = ql(v.type, v.key, v.props, null, d.mode, p)),
          (p.ref = Co(d, f, v)),
          (p.return = d),
          p);
  }
  function u(d, f, v, p) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = Qs(v, d.mode, p)), (f.return = d), f)
      : ((f = o(f, v.children || [])), (f.return = d), f);
  }
  function c(d, f, v, p, k) {
    return f === null || f.tag !== 7
      ? ((f = fr(v, d.mode, p, k)), (f.return = d), f)
      : ((f = o(f, v)), (f.return = d), f);
  }
  function h(d, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Ks("" + f, d.mode, v)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Cl:
          return (
            (v = ql(f.type, f.key, f.props, null, d.mode, v)),
            (v.ref = Co(d, null, f)),
            (v.return = d),
            v
          );
        case Or:
          return (f = Qs(f, d.mode, v)), (f.return = d), f;
        case On:
          var p = f._init;
          return h(d, p(f._payload), v);
      }
      if (To(f) || go(f))
        return (f = fr(f, d.mode, v, null)), (f.return = d), f;
      Dl(d, f);
    }
    return null;
  }
  function m(d, f, v, p) {
    var k = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : s(d, f, "" + v, p);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Cl:
          return v.key === k ? a(d, f, v, p) : null;
        case Or:
          return v.key === k ? u(d, f, v, p) : null;
        case On:
          return (k = v._init), m(d, f, k(v._payload), p);
      }
      if (To(v) || go(v)) return k !== null ? null : c(d, f, v, p, null);
      Dl(d, v);
    }
    return null;
  }
  function y(d, f, v, p, k) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (d = d.get(v) || null), s(f, d, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Cl:
          return (d = d.get(p.key === null ? v : p.key) || null), a(f, d, p, k);
        case Or:
          return (d = d.get(p.key === null ? v : p.key) || null), u(f, d, p, k);
        case On:
          var L = p._init;
          return y(d, f, v, L(p._payload), k);
      }
      if (To(p) || go(p)) return (d = d.get(v) || null), c(f, d, p, k, null);
      Dl(f, p);
    }
    return null;
  }
  function w(d, f, v, p) {
    for (
      var k = null, L = null, _ = f, T = (f = 0), $ = null;
      _ !== null && T < v.length;
      T++
    ) {
      _.index > T ? (($ = _), (_ = null)) : ($ = _.sibling);
      var U = m(d, _, v[T], p);
      if (U === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && U.alternate === null && t(d, _),
        (f = l(U, f, T)),
        L === null ? (k = U) : (L.sibling = U),
        (L = U),
        (_ = $);
    }
    if (T === v.length) return n(d, _), xe && or(d, T), k;
    if (_ === null) {
      for (; T < v.length; T++)
        (_ = h(d, v[T], p)),
          _ !== null &&
            ((f = l(_, f, T)), L === null ? (k = _) : (L.sibling = _), (L = _));
      return xe && or(d, T), k;
    }
    for (_ = r(d, _); T < v.length; T++)
      ($ = y(_, d, T, v[T], p)),
        $ !== null &&
          (e && $.alternate !== null && _.delete($.key === null ? T : $.key),
          (f = l($, f, T)),
          L === null ? (k = $) : (L.sibling = $),
          (L = $));
    return (
      e &&
        _.forEach(function (Q) {
          return t(d, Q);
        }),
      xe && or(d, T),
      k
    );
  }
  function g(d, f, v, p) {
    var k = go(v);
    if (typeof k != "function") throw Error(O(150));
    if (((v = k.call(v)), v == null)) throw Error(O(151));
    for (
      var L = (k = null), _ = f, T = (f = 0), $ = null, U = v.next();
      _ !== null && !U.done;
      T++, U = v.next()
    ) {
      _.index > T ? (($ = _), (_ = null)) : ($ = _.sibling);
      var Q = m(d, _, U.value, p);
      if (Q === null) {
        _ === null && (_ = $);
        break;
      }
      e && _ && Q.alternate === null && t(d, _),
        (f = l(Q, f, T)),
        L === null ? (k = Q) : (L.sibling = Q),
        (L = Q),
        (_ = $);
    }
    if (U.done) return n(d, _), xe && or(d, T), k;
    if (_ === null) {
      for (; !U.done; T++, U = v.next())
        (U = h(d, U.value, p)),
          U !== null &&
            ((f = l(U, f, T)), L === null ? (k = U) : (L.sibling = U), (L = U));
      return xe && or(d, T), k;
    }
    for (_ = r(d, _); !U.done; T++, U = v.next())
      (U = y(_, d, T, U.value, p)),
        U !== null &&
          (e && U.alternate !== null && _.delete(U.key === null ? T : U.key),
          (f = l(U, f, T)),
          L === null ? (k = U) : (L.sibling = U),
          (L = U));
    return (
      e &&
        _.forEach(function (Z) {
          return t(d, Z);
        }),
      xe && or(d, T),
      k
    );
  }
  function C(d, f, v, p) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Mr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Cl:
          e: {
            for (var k = v.key, L = f; L !== null; ) {
              if (L.key === k) {
                if (((k = v.type), k === Mr)) {
                  if (L.tag === 7) {
                    n(d, L.sibling),
                      (f = o(L, v.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  L.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === On &&
                    sf(k) === L.type)
                ) {
                  n(d, L.sibling),
                    (f = o(L, v.props)),
                    (f.ref = Co(d, L, v)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, L);
                break;
              } else t(d, L);
              L = L.sibling;
            }
            v.type === Mr
              ? ((f = fr(v.props.children, d.mode, p, v.key)),
                (f.return = d),
                (d = f))
              : ((p = ql(v.type, v.key, v.props, null, d.mode, p)),
                (p.ref = Co(d, f, v)),
                (p.return = d),
                (d = p));
          }
          return i(d);
        case Or:
          e: {
            for (L = v.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(d, f.sibling),
                    (f = o(f, v.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Qs(v, d.mode, p)), (f.return = d), (d = f);
          }
          return i(d);
        case On:
          return (L = v._init), C(d, f, L(v._payload), p);
      }
      if (To(v)) return w(d, f, v, p);
      if (go(v)) return g(d, f, v, p);
      Dl(d, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = o(f, v)), (f.return = d), (d = f))
          : (n(d, f), (f = Ks(v, d.mode, p)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return C;
}
var no = Op(!0),
  Mp = Op(!1),
  vl = {},
  en = qn(vl),
  nl = qn(vl),
  rl = qn(vl);
function ar(e) {
  if (e === vl) throw Error(O(174));
  return e;
}
function Ou(e, t) {
  switch ((ve(rl, t), ve(nl, e), ve(en, vl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fa(t, e));
  }
  Se(en), ve(en, t);
}
function ro() {
  Se(en), Se(nl), Se(rl);
}
function Dp(e) {
  ar(rl.current);
  var t = ar(en.current),
    n = fa(t, e.type);
  t !== n && (ve(nl, e), ve(en, n));
}
function Mu(e) {
  nl.current === e && (Se(en), Se(nl));
}
var Ce = qn(0);
function mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Us = [];
function Du() {
  for (var e = 0; e < Us.length; e++)
    Us[e]._workInProgressVersionPrimary = null;
  Us.length = 0;
}
var Ql = Sn.ReactCurrentDispatcher,
  Bs = Sn.ReactCurrentBatchConfig,
  vr = 0,
  ke = null,
  $e = null,
  Ue = null,
  vi = !1,
  Fo = !1,
  ol = 0,
  Cy = 0;
function Xe() {
  throw Error(O(321));
}
function $u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n])) return !1;
  return !0;
}
function Au(e, t, n, r, o, l) {
  if (
    ((vr = l),
    (ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ql.current = e === null || e.memoizedState === null ? Py : jy),
    (e = n(r, o)),
    Fo)
  ) {
    l = 0;
    do {
      if (((Fo = !1), (ol = 0), 25 <= l)) throw Error(O(301));
      (l += 1),
        (Ue = $e = null),
        (t.updateQueue = null),
        (Ql.current = Ny),
        (e = n(r, o));
    } while (Fo);
  }
  if (
    ((Ql.current = yi),
    (t = $e !== null && $e.next !== null),
    (vr = 0),
    (Ue = $e = ke = null),
    (vi = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function zu() {
  var e = ol !== 0;
  return (ol = 0), e;
}
function Zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (ke.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function Lt() {
  if ($e === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = Ue === null ? ke.memoizedState : Ue.next;
  if (t !== null) (Ue = t), ($e = e);
  else {
    if (e === null) throw Error(O(310));
    ($e = e),
      (e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      Ue === null ? (ke.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function ll(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bs(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = $e,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
    do {
      var c = u.lane;
      if ((vr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (i = r)) : (a = a.next = h),
          (ke.lanes |= c),
          (yr |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      Vt(r, t.memoizedState) || (ft = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ke.lanes |= l), (yr |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vs(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Vt(l, t.memoizedState) || (ft = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function $p() {}
function Ap(e, t) {
  var n = ke,
    r = Lt(),
    o = t(),
    l = !Vt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ft = !0)),
    (r = r.queue),
    Iu(Fp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      il(9, Ip.bind(null, n, r, o, t), void 0, null),
      Be === null)
    )
      throw Error(O(349));
    vr & 30 || zp(n, t, o);
  }
  return o;
}
function zp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ip(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Up(t) && Bp(e);
}
function Fp(e, t, n) {
  return n(function () {
    Up(t) && Bp(e);
  });
}
function Up(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vt(e, n);
  } catch {
    return !0;
  }
}
function Bp(e) {
  var t = gn(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function af(e) {
  var t = Zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ll,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _y.bind(null, ke, e)),
    [t.memoizedState, e]
  );
}
function il(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bp() {
  return Lt().memoizedState;
}
function Yl(e, t, n, r) {
  var o = Zt();
  (ke.flags |= e),
    (o.memoizedState = il(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ui(e, t, n, r) {
  var o = Lt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if ($e !== null) {
    var i = $e.memoizedState;
    if (((l = i.destroy), r !== null && $u(r, i.deps))) {
      o.memoizedState = il(t, n, l, r);
      return;
    }
  }
  (ke.flags |= e), (o.memoizedState = il(1 | t, n, l, r));
}
function uf(e, t) {
  return Yl(8390656, 8, e, t);
}
function Iu(e, t) {
  return Ui(2048, 8, e, t);
}
function Vp(e, t) {
  return Ui(4, 2, e, t);
}
function Wp(e, t) {
  return Ui(4, 4, e, t);
}
function Hp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ui(4, 4, Hp.bind(null, t, e), n)
  );
}
function Fu() {}
function Qp(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yp(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xp(e, t, n) {
  return vr & 21
    ? (Vt(n, t) || ((n = qd()), (ke.lanes |= n), (yr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = n));
}
function ky(e, t) {
  var n = de;
  (de = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bs.transition;
  Bs.transition = {};
  try {
    e(!1), t();
  } finally {
    (de = n), (Bs.transition = r);
  }
}
function Gp() {
  return Lt().memoizedState;
}
function Ry(e, t, n) {
  var r = Wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zp(e))
  )
    qp(t, n);
  else if (((n = jp(e, t, n, r)), n !== null)) {
    var o = ot();
    bt(n, e, r, o), Jp(n, t, r);
  }
}
function _y(e, t, n) {
  var r = Wn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zp(e)) qp(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Vt(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Lu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = jp(e, t, o, r)),
      n !== null && ((o = ot()), bt(n, e, r, o), Jp(n, t, r));
  }
}
function Zp(e) {
  var t = e.alternate;
  return e === ke || (t !== null && t === ke);
}
function qp(e, t) {
  Fo = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vu(e, n);
  }
}
var yi = {
    readContext: Nt,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useInsertionEffect: Xe,
    useLayoutEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useMutableSource: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    unstable_isNewReconciler: !1,
  },
  Py = {
    readContext: Nt,
    useCallback: function (e, t) {
      return (Zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Nt,
    useEffect: uf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yl(4194308, 4, Hp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ry.bind(null, ke, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: af,
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      return (Zt().memoizedState = e);
    },
    useTransition: function () {
      var e = af(!1),
        t = e[0];
      return (e = ky.bind(null, e[1])), (Zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ke,
        o = Zt();
      if (xe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Be === null)) throw Error(O(349));
        vr & 30 || zp(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        uf(Fp.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        il(9, Ip.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Zt(),
        t = Be.identifierPrefix;
      if (xe) {
        var n = pn,
          r = dn;
        (n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ol++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Cy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jy = {
    readContext: Nt,
    useCallback: Qp,
    useContext: Nt,
    useEffect: Iu,
    useImperativeHandle: Kp,
    useInsertionEffect: Vp,
    useLayoutEffect: Wp,
    useMemo: Yp,
    useReducer: bs,
    useRef: bp,
    useState: function () {
      return bs(ll);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = Lt();
      return Xp(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = bs(ll)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: $p,
    useSyncExternalStore: Ap,
    useId: Gp,
    unstable_isNewReconciler: !1,
  },
  Ny = {
    readContext: Nt,
    useCallback: Qp,
    useContext: Nt,
    useEffect: Iu,
    useImperativeHandle: Kp,
    useInsertionEffect: Vp,
    useLayoutEffect: Wp,
    useMemo: Yp,
    useReducer: Vs,
    useRef: bp,
    useState: function () {
      return Vs(ll);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = Lt();
      return $e === null ? (t.memoizedState = e) : Xp(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = Vs(ll)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: $p,
    useSyncExternalStore: Ap,
    useId: Gp,
    unstable_isNewReconciler: !1,
  };
function oo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rv(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ws(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Da(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ly = typeof WeakMap == "function" ? WeakMap : Map;
function eh(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wi || ((wi = !0), (Wa = r)), Da(e, t);
    }),
    n
  );
}
function th(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Da(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Da(e, t),
          typeof r != "function" &&
            (Vn === null ? (Vn = new Set([this])) : Vn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function cf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ly();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Wy.bind(null, e, t, n)), t.then(e, e));
}
function ff(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function df(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hn(-1, 1)), (t.tag = 2), bn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ty = Sn.ReactCurrentOwner,
  ft = !1;
function nt(e, t, n, r) {
  t.child = e === null ? Mp(t, null, n, r) : no(t, e.child, n, r);
}
function pf(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Xr(t, o),
    (r = Au(e, t, n, r, l, o)),
    (n = zu()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (xe && n && ku(t), (t.flags |= 1), nt(e, t, r, o), t.child)
  );
}
function hf(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Qu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), nh(e, t, l, r, o))
      : ((e = ql(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qo), n(i, r) && e.ref === t.ref)
    )
      return wn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Hn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nh(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (qo(l, r) && e.ref === t.ref)
      if (((ft = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ft = !0);
      else return (t.lanes = e.lanes), wn(e, t, o);
  }
  return $a(e, t, n, r, o);
}
function rh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(Vr, vt),
        (vt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(Vr, vt),
          (vt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        ve(Vr, vt),
        (vt |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(Vr, vt),
      (vt |= r);
  return nt(e, t, o, n), t.child;
}
function oh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $a(e, t, n, r, o) {
  var l = pt(n) ? hr : et.current;
  return (
    (l = eo(t, l)),
    Xr(t, o),
    (n = Au(e, t, n, r, l, o)),
    (r = zu()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wn(e, t, o))
      : (xe && r && ku(t), (t.flags |= 1), nt(e, t, n, o), t.child)
  );
}
function mf(e, t, n, r, o) {
  if (pt(n)) {
    var l = !0;
    ui(t);
  } else l = !1;
  if ((Xr(t, o), t.stateNode === null))
    Xl(e, t), Tp(t, n, r), Ma(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Nt(u))
      : ((u = pt(n) ? hr : et.current), (u = eo(t, u)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && lf(t, i, r, u)),
      (Mn = !1);
    var m = t.memoizedState;
    (i.state = m),
      hi(t, r, i, o),
      (a = t.memoizedState),
      s !== r || m !== a || dt.current || Mn
        ? (typeof c == "function" && (Oa(t, n, c, r), (a = t.memoizedState)),
          (s = Mn || of(t, n, s, r, m, a, u))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Np(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : zt(t.type, s)),
      (i.props = u),
      (h = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Nt(a))
        : ((a = pt(n) ? hr : et.current), (a = eo(t, a)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== h || m !== a) && lf(t, i, r, a)),
      (Mn = !1),
      (m = t.memoizedState),
      (i.state = m),
      hi(t, r, i, o);
    var w = t.memoizedState;
    s !== h || m !== w || dt.current || Mn
      ? (typeof y == "function" && (Oa(t, n, y, r), (w = t.memoizedState)),
        (u = Mn || of(t, n, u, r, m, w, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Aa(e, t, n, r, l, o);
}
function Aa(e, t, n, r, o, l) {
  oh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Jc(t, n, !1), wn(e, t, l);
  (r = t.stateNode), (Ty.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = no(t, e.child, null, l)), (t.child = no(t, null, s, l)))
      : nt(e, t, s, l),
    (t.memoizedState = r.state),
    o && Jc(t, n, !0),
    t.child
  );
}
function lh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qc(e, t.context, !1),
    Ou(e, t.containerInfo);
}
function vf(e, t, n, r, o) {
  return to(), _u(o), (t.flags |= 256), nt(e, t, n, r), t.child;
}
var za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ia(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ih(e, t, n) {
  var r = t.pendingProps,
    o = Ce.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ve(Ce, o & 1),
    e === null)
  )
    return (
      La(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Vi(i, r, 0, null)),
              (e = fr(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ia(n)),
              (t.memoizedState = za),
              e)
            : Uu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Oy(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Hn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = Hn(s, l)) : ((l = fr(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ia(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = za),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Hn(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uu(e, t) {
  return (
    (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $l(e, t, n, r) {
  return (
    r !== null && _u(r),
    no(t, e.child, null, n),
    (e = Uu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Oy(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ws(Error(O(422)))), $l(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = Vi({ mode: "visible", children: r.children }, o, 0, null)),
          (l = fr(l, o, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && no(t, e.child, null, i),
          (t.child.memoizedState = Ia(i)),
          (t.memoizedState = za),
          l);
  if (!(t.mode & 1)) return $l(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(O(419))), (r = Ws(l, r, void 0)), $l(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), ft || s)) {
    if (((r = Be), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), gn(e, o), bt(r, e, o, -1));
    }
    return Ku(), (r = Ws(Error(O(421)))), $l(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (yt = Bn(o.nextSibling)),
      (gt = t),
      (xe = !0),
      (Ut = null),
      e !== null &&
        ((Rt[_t++] = dn),
        (Rt[_t++] = pn),
        (Rt[_t++] = mr),
        (dn = e.id),
        (pn = e.overflow),
        (mr = t)),
      (t = Uu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ta(e.return, t, n);
}
function Hs(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function sh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((nt(e, t, r.children, n), (r = Ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yf(e, n, t);
        else if (e.tag === 19) yf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ve(Ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && mi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Hs(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && mi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Hs(t, !0, n, null, l);
        break;
      case "together":
        Hs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function My(e, t, n) {
  switch (t.tag) {
    case 3:
      lh(t), to();
      break;
    case 5:
      Dp(t);
      break;
    case 1:
      pt(t.type) && ui(t);
      break;
    case 4:
      Ou(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ve(di, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(Ce, Ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ih(e, t, n)
            : (ve(Ce, Ce.current & 1),
              (e = wn(e, t, n)),
              e !== null ? e.sibling : null);
      ve(Ce, Ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ve(Ce, Ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rh(e, t, n);
  }
  return wn(e, t, n);
}
var ah, Fa, uh, ch;
ah = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fa = function () {};
uh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ar(en.current);
    var l = null;
    switch (n) {
      case "input":
        (o = sa(e, o)), (r = sa(e, r)), (l = []);
        break;
      case "select":
        (o = Re({}, o, { value: void 0 })),
          (r = Re({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ca(e, o)), (r = ca(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = si);
    }
    da(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ho.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (l = l || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Ho.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && we("scroll", e),
                    l || s === a || (l = []))
                  : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ch = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ko(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dy(e, t, n) {
  var r = t.pendingProps;
  switch ((Ru(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ge(t), null;
    case 1:
      return pt(t.type) && ai(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ro(),
        Se(dt),
        Se(et),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ml(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ut !== null && (Qa(Ut), (Ut = null)))),
        Fa(e, t),
        Ge(t),
        null
      );
    case 5:
      Mu(t);
      var o = ar(rl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        uh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ge(t), null;
        }
        if (((e = ar(en.current)), Ml(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[qt] = t), (r[tl] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              we("cancel", r), we("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              we("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mo.length; o++) we(Mo[o], r);
              break;
            case "source":
              we("error", r);
              break;
            case "img":
            case "image":
            case "link":
              we("error", r), we("load", r);
              break;
            case "details":
              we("toggle", r);
              break;
            case "input":
              Rc(r, l), we("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                we("invalid", r);
              break;
            case "textarea":
              Pc(r, l), we("invalid", r);
          }
          da(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ol(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ol(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ho.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  we("scroll", r);
            }
          switch (n) {
            case "input":
              kl(r), _c(r, l, !0);
              break;
            case "textarea":
              kl(r), jc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = si);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[qt] = t),
            (e[tl] = r),
            ah(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = pa(n, r)), n)) {
              case "dialog":
                we("cancel", e), we("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mo.length; o++) we(Mo[o], e);
                o = r;
                break;
              case "source":
                we("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                we("error", e), we("load", e), (o = r);
                break;
              case "details":
                we("toggle", e), (o = r);
                break;
              case "input":
                Rc(e, r), (o = sa(e, r)), we("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Re({}, r, { value: void 0 })),
                  we("invalid", e);
                break;
              case "textarea":
                Pc(e, r), (o = ca(e, r)), we("invalid", e);
                break;
              default:
                o = r;
            }
            da(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Ud(e, a)
                  : l === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Id(e, a))
                    : l === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Ko(e, a)
                        : typeof a == "number" && Ko(e, "" + a)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (Ho.hasOwnProperty(l)
                          ? a != null && l === "onScroll" && we("scroll", e)
                          : a != null && cu(e, l, a, i));
              }
            switch (n) {
              case "input":
                kl(e), _c(e, r, !1);
                break;
              case "textarea":
                kl(e), jc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Hr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Hr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = si);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) ch(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = ar(rl.current)), ar(en.current), Ml(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qt] = t),
            (l = r.nodeValue !== n) && ((e = gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ol(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ol(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qt] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (Se(Ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && yt !== null && t.mode & 1 && !(t.flags & 128))
          Pp(), to(), (t.flags |= 98560), (l = !1);
        else if (((l = Ml(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(O(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(O(317));
            l[qt] = t;
          } else
            to(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (l = !1);
        } else Ut !== null && (Qa(Ut), (Ut = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ce.current & 1 ? Ae === 0 && (Ae = 3) : Ku())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        ro(), Fa(e, t), e === null && Jo(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return Nu(t.type._context), Ge(t), null;
    case 17:
      return pt(t.type) && ai(), Ge(t), null;
    case 19:
      if ((Se(Ce), (l = t.memoizedState), l === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) ko(l, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = mi(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ko(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ve(Ce, (Ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Me() > lo &&
            ((t.flags |= 128), (r = !0), ko(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mi(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ko(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !xe)
            )
              return Ge(t), null;
          } else
            2 * Me() - l.renderingStartTime > lo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ko(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Me()),
          (t.sibling = null),
          (n = Ce.current),
          ve(Ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        Hu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? vt & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function $y(e, t) {
  switch ((Ru(t), t.tag)) {
    case 1:
      return (
        pt(t.type) && ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ro(),
        Se(dt),
        Se(et),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mu(t), null;
    case 13:
      if (
        (Se(Ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        to();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Se(Ce), null;
    case 4:
      return ro(), null;
    case 10:
      return Nu(t.type._context), null;
    case 22:
    case 23:
      return Hu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Al = !1,
  qe = !1,
  Ay = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        _e(e, t, r);
      }
    else n.current = null;
}
function Ua(e, t, n) {
  try {
    n();
  } catch (r) {
    _e(e, t, r);
  }
}
var gf = !1;
function zy(e, t) {
  if (((Ca = oi), (e = hp()), Cu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (o !== 0 && h.nodeType !== 3) || (s = i + o),
                h !== l || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (m = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++u === o && (s = i),
                m === l && ++c === r && (a = i),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ka = { focusedElem: e, selectionRange: n }, oi = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    C = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : zt(t.type, g),
                      C,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (p) {
          _e(t, t.return, p);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (w = gf), (gf = !1), w;
}
function Uo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Ua(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ba(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qt], delete t[tl], delete t[Pa], delete t[wy], delete t[Sy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = si));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ba(e, t, n), e = e.sibling; e !== null; ) ba(e, t, n), (e = e.sibling);
}
function Va(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), (e = e.sibling);
}
var We = null,
  It = !1;
function Ln(e, t, n) {
  for (n = n.child; n !== null; ) ph(e, t, n), (n = n.sibling);
}
function ph(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Mi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || br(n, t);
    case 6:
      var r = We,
        o = It;
      (We = null),
        Ln(e, t, n),
        (We = r),
        (It = o),
        We !== null &&
          (It
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (It
          ? ((e = We),
            (n = n.stateNode),
            e.nodeType === 8
              ? Is(e.parentNode, n)
              : e.nodeType === 1 && Is(e, n),
            Go(e))
          : Is(We, n.stateNode));
      break;
    case 4:
      (r = We),
        (o = It),
        (We = n.stateNode.containerInfo),
        (It = !0),
        Ln(e, t, n),
        (We = r),
        (It = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Ua(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Ln(e, t, n);
      break;
    case 1:
      if (
        !qe &&
        (br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          _e(n, t, s);
        }
      Ln(e, t, n);
      break;
    case 21:
      Ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((qe = (r = qe) || n.memoizedState !== null), Ln(e, t, n), (qe = r))
        : Ln(e, t, n);
      break;
    default:
      Ln(e, t, n);
  }
}
function Sf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ay()),
      t.forEach(function (r) {
        var o = Ky.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function At(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (We = s.stateNode), (It = !1);
              break e;
            case 3:
              (We = s.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (We = s.stateNode.containerInfo), (It = !0);
              break e;
          }
          s = s.return;
        }
        if (We === null) throw Error(O(160));
        ph(l, i, o), (We = null), (It = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        _e(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hh(t, e), (t = t.sibling);
}
function hh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(t, e), Gt(e), r & 4)) {
        try {
          Uo(3, e, e.return), Bi(3, e);
        } catch (g) {
          _e(e, e.return, g);
        }
        try {
          Uo(5, e, e.return);
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 1:
      At(t, e), Gt(e), r & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (
        (At(t, e),
        Gt(e),
        r & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ko(o, "");
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && $d(o, l),
              pa(s, i);
            var u = pa(s, l);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                h = a[i + 1];
              c === "style"
                ? Ud(o, h)
                : c === "dangerouslySetInnerHTML"
                  ? Id(o, h)
                  : c === "children"
                    ? Ko(o, h)
                    : cu(o, c, h, u);
            }
            switch (s) {
              case "input":
                aa(o, l);
                break;
              case "textarea":
                Ad(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? Hr(o, !!l.multiple, y, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Hr(o, !!l.multiple, l.defaultValue, !0)
                      : Hr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[tl] = l;
          } catch (g) {
            _e(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((At(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (g) {
          _e(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (At(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Go(t.containerInfo);
        } catch (g) {
          _e(e, e.return, g);
        }
      break;
    case 4:
      At(t, e), Gt(e);
      break;
    case 13:
      At(t, e),
        Gt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Vu = Me())),
        r & 4 && Sf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((qe = (u = qe) || c), At(t, e), (qe = u)) : At(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (B = e, c = e.child; c !== null; ) {
            for (h = B = c; B !== null; ) {
              switch (((m = B), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Uo(4, m, m.return);
                  break;
                case 1:
                  br(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      _e(r, n, g);
                    }
                  }
                  break;
                case 5:
                  br(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ef(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (B = y)) : Ef(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (o = h.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Fd("display", i)));
              } catch (g) {
                _e(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (g) {
                _e(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      At(t, e), Gt(e), r & 4 && Sf(e);
      break;
    case 21:
      break;
    default:
      At(t, e), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ko(o, ""), (r.flags &= -33));
          var l = wf(e);
          Va(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = wf(e);
          ba(e, s, i);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      _e(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Iy(e, t, n) {
  (B = e), mh(e);
}
function mh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Al;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || qe;
        s = Al;
        var u = qe;
        if (((Al = i), (qe = a) && !u))
          for (B = o; B !== null; )
            (i = B),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Cf(o)
                : a !== null
                  ? ((a.return = i), (B = a))
                  : Cf(o);
        for (; l !== null; ) (B = l), mh(l), (l = l.sibling);
        (B = o), (Al = s), (qe = u);
      }
      xf(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (B = l)) : xf(e);
  }
}
function xf(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || Bi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && rf(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rf(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Go(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        qe || (t.flags & 512 && Ba(t));
      } catch (m) {
        _e(t, t.return, m);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Ef(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Cf(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bi(4, t);
          } catch (a) {
            _e(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              _e(t, o, a);
            }
          }
          var l = t.return;
          try {
            Ba(t);
          } catch (a) {
            _e(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ba(t);
          } catch (a) {
            _e(t, i, a);
          }
      }
    } catch (a) {
      _e(t, t.return, a);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (B = s);
      break;
    }
    B = t.return;
  }
}
var Fy = Math.ceil,
  gi = Sn.ReactCurrentDispatcher,
  Bu = Sn.ReactCurrentOwner,
  jt = Sn.ReactCurrentBatchConfig,
  ae = 0,
  Be = null,
  De = null,
  He = 0,
  vt = 0,
  Vr = qn(0),
  Ae = 0,
  sl = null,
  yr = 0,
  bi = 0,
  bu = 0,
  Bo = null,
  ct = null,
  Vu = 0,
  lo = 1 / 0,
  cn = null,
  wi = !1,
  Wa = null,
  Vn = null,
  zl = !1,
  zn = null,
  Si = 0,
  bo = 0,
  Ha = null,
  Gl = -1,
  Zl = 0;
function ot() {
  return ae & 6 ? Me() : Gl !== -1 ? Gl : (Gl = Me());
}
function Wn(e) {
  return e.mode & 1
    ? ae & 2 && He !== 0
      ? He & -He
      : Ey.transition !== null
        ? (Zl === 0 && (Zl = qd()), Zl)
        : ((e = de),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lp(e.type))),
          e)
    : 1;
}
function bt(e, t, n, r) {
  if (50 < bo) throw ((bo = 0), (Ha = null), Error(O(185)));
  pl(e, n, r),
    (!(ae & 2) || e !== Be) &&
      (e === Be && (!(ae & 2) && (bi |= n), Ae === 4 && $n(e, He)),
      ht(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((lo = Me() + 500), Ii && Jn()));
}
function ht(e, t) {
  var n = e.callbackNode;
  Ev(e, t);
  var r = ri(e, e === Be ? He : 0);
  if (r === 0)
    n !== null && Tc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Tc(n), t === 1))
      e.tag === 0 ? xy(kf.bind(null, e)) : kp(kf.bind(null, e)),
        yy(function () {
          !(ae & 6) && Jn();
        }),
        (n = null);
    else {
      switch (Jd(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = Gd;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = Zd;
          break;
        default:
          n = ni;
      }
      n = Ch(n, vh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vh(e, t) {
  if (((Gl = -1), (Zl = 0), ae & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Gr() && e.callbackNode !== n) return null;
  var r = ri(e, e === Be ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xi(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var l = gh();
    (Be !== e || He !== t) && ((cn = null), (lo = Me() + 500), cr(e, t));
    do
      try {
        by();
        break;
      } catch (s) {
        yh(e, s);
      }
    while (1);
    ju(),
      (gi.current = l),
      (ae = o),
      De !== null ? (t = 0) : ((Be = null), (He = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ga(e)), o !== 0 && ((r = o), (t = Ka(e, o)))), t === 1)
    )
      throw ((n = sl), cr(e, 0), $n(e, r), ht(e, Me()), n);
    if (t === 6) $n(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Uy(o) &&
          ((t = xi(e, r)),
          t === 2 && ((l = ga(e)), l !== 0 && ((r = l), (t = Ka(e, l)))),
          t === 1))
      )
        throw ((n = sl), cr(e, 0), $n(e, r), ht(e, Me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          lr(e, ct, cn);
          break;
        case 3:
          if (
            ($n(e, r), (r & 130023424) === r && ((t = Vu + 500 - Me()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ot(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = _a(lr.bind(null, e, ct, cn), t);
            break;
          }
          lr(e, ct, cn);
          break;
        case 4:
          if (($n(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Bt(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Fy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _a(lr.bind(null, e, ct, cn), r);
            break;
          }
          lr(e, ct, cn);
          break;
        case 5:
          lr(e, ct, cn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return ht(e, Me()), e.callbackNode === n ? vh.bind(null, e) : null;
}
function Ka(e, t) {
  var n = Bo;
  return (
    e.current.memoizedState.isDehydrated && (cr(e, t).flags |= 256),
    (e = xi(e, t)),
    e !== 2 && ((t = ct), (ct = n), t !== null && Qa(t)),
    e
  );
}
function Qa(e) {
  ct === null ? (ct = e) : ct.push.apply(ct, e);
}
function Uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Vt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $n(e, t) {
  for (
    t &= ~bu,
      t &= ~bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Bt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kf(e) {
  if (ae & 6) throw Error(O(327));
  Gr();
  var t = ri(e, 0);
  if (!(t & 1)) return ht(e, Me()), null;
  var n = xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ga(e);
    r !== 0 && ((t = r), (n = Ka(e, r)));
  }
  if (n === 1) throw ((n = sl), cr(e, 0), $n(e, t), ht(e, Me()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    lr(e, ct, cn),
    ht(e, Me()),
    null
  );
}
function Wu(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = n), ae === 0 && ((lo = Me() + 500), Ii && Jn());
  }
}
function gr(e) {
  zn !== null && zn.tag === 0 && !(ae & 6) && Gr();
  var t = ae;
  ae |= 1;
  var n = jt.transition,
    r = de;
  try {
    if (((jt.transition = null), (de = 1), e)) return e();
  } finally {
    (de = r), (jt.transition = n), (ae = t), !(ae & 6) && Jn();
  }
}
function Hu() {
  (vt = Vr.current), Se(Vr);
}
function cr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), vy(n)), De !== null))
    for (n = De.return; n !== null; ) {
      var r = n;
      switch ((Ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ai();
          break;
        case 3:
          ro(), Se(dt), Se(et), Du();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          ro();
          break;
        case 13:
          Se(Ce);
          break;
        case 19:
          Se(Ce);
          break;
        case 10:
          Nu(r.type._context);
          break;
        case 22:
        case 23:
          Hu();
      }
      n = n.return;
    }
  if (
    ((Be = e),
    (De = e = Hn(e.current, null)),
    (He = vt = t),
    (Ae = 0),
    (sl = null),
    (bu = bi = yr = 0),
    (ct = Bo = null),
    sr !== null)
  ) {
    for (t = 0; t < sr.length; t++)
      if (((n = sr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    sr = null;
  }
  return e;
}
function yh(e, t) {
  do {
    var n = De;
    try {
      if ((ju(), (Ql.current = yi), vi)) {
        for (var r = ke.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((vr = 0),
        (Ue = $e = ke = null),
        (Fo = !1),
        (ol = 0),
        (Bu.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (sl = t), (De = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = He),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = ff(i);
          if (y !== null) {
            (y.flags &= -257),
              df(y, i, s, l, t),
              y.mode & 1 && cf(l, u, t),
              (t = y),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              cf(l, u, t), Ku();
              break e;
            }
            a = Error(O(426));
          }
        } else if (xe && s.mode & 1) {
          var C = ff(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              df(C, i, s, l, t),
              _u(oo(a, s));
            break e;
          }
        }
        (l = a = oo(a, s)),
          Ae !== 4 && (Ae = 2),
          Bo === null ? (Bo = [l]) : Bo.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = eh(l, a, t);
              nf(l, d);
              break e;
            case 1:
              s = a;
              var f = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Vn === null || !Vn.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var p = th(l, s, t);
                nf(l, p);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Sh(n);
    } catch (k) {
      (t = k), De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function gh() {
  var e = gi.current;
  return (gi.current = yi), e === null ? yi : e;
}
function Ku() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Be === null || (!(yr & 268435455) && !(bi & 268435455)) || $n(Be, He);
}
function xi(e, t) {
  var n = ae;
  ae |= 2;
  var r = gh();
  (Be !== e || He !== t) && ((cn = null), cr(e, t));
  do
    try {
      By();
      break;
    } catch (o) {
      yh(e, o);
    }
  while (1);
  if ((ju(), (ae = n), (gi.current = r), De !== null)) throw Error(O(261));
  return (Be = null), (He = 0), Ae;
}
function By() {
  for (; De !== null; ) wh(De);
}
function by() {
  for (; De !== null && !pv(); ) wh(De);
}
function wh(e) {
  var t = Eh(e.alternate, e, vt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sh(e) : (De = t),
    (Bu.current = null);
}
function Sh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $y(n, t)), n !== null)) {
        (n.flags &= 32767), (De = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (De = null);
        return;
      }
    } else if (((n = Dy(n, t, vt)), n !== null)) {
      De = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function lr(e, t, n) {
  var r = de,
    o = jt.transition;
  try {
    (jt.transition = null), (de = 1), Vy(e, t, n, r);
  } finally {
    (jt.transition = o), (de = r);
  }
  return null;
}
function Vy(e, t, n, r) {
  do Gr();
  while (zn !== null);
  if (ae & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Cv(e, l),
    e === Be && ((De = Be = null), (He = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zl ||
      ((zl = !0),
      Ch(ni, function () {
        return Gr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = jt.transition), (jt.transition = null);
    var i = de;
    de = 1;
    var s = ae;
    (ae |= 4),
      (Bu.current = null),
      zy(e, n),
      hh(n, e),
      uy(ka),
      (oi = !!Ca),
      (ka = Ca = null),
      (e.current = n),
      Iy(n),
      hv(),
      (ae = s),
      (de = i),
      (jt.transition = l);
  } else e.current = n;
  if (
    (zl && ((zl = !1), (zn = e), (Si = o)),
    (l = e.pendingLanes),
    l === 0 && (Vn = null),
    yv(n.stateNode),
    ht(e, Me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (wi) throw ((wi = !1), (e = Wa), (Wa = null), e);
  return (
    Si & 1 && e.tag !== 0 && Gr(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ha ? bo++ : ((bo = 0), (Ha = e))) : (bo = 0),
    Jn(),
    null
  );
}
function Gr() {
  if (zn !== null) {
    var e = Jd(Si),
      t = jt.transition,
      n = de;
    try {
      if (((jt.transition = null), (de = 16 > e ? 16 : e), zn === null))
        var r = !1;
      else {
        if (((e = zn), (zn = null), (Si = 0), ae & 6)) throw Error(O(331));
        var o = ae;
        for (ae |= 4, B = e.current; B !== null; ) {
          var l = B,
            i = l.child;
          if (B.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uo(8, c, l);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (B = h);
                  else
                    for (; B !== null; ) {
                      c = B;
                      var m = c.sibling,
                        y = c.return;
                      if ((fh(c), c === u)) {
                        B = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (B = m);
                        break;
                      }
                      B = y;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var C = g.sibling;
                    (g.sibling = null), (g = C);
                  } while (g !== null);
                }
              }
              B = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (B = i);
          else
            e: for (; B !== null; ) {
              if (((l = B), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Uo(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (B = d);
                break e;
              }
              B = l.return;
            }
        }
        var f = e.current;
        for (B = f; B !== null; ) {
          i = B;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (B = v);
          else
            e: for (i = f; B !== null; ) {
              if (((s = B), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, s);
                  }
                } catch (k) {
                  _e(s, s.return, k);
                }
              if (s === i) {
                B = null;
                break e;
              }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (B = p);
                break e;
              }
              B = s.return;
            }
        }
        if (
          ((ae = o), Jn(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(Mi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (de = n), (jt.transition = t);
    }
  }
  return !1;
}
function Rf(e, t, n) {
  (t = oo(n, t)),
    (t = eh(e, t, 1)),
    (e = bn(e, t, 1)),
    (t = ot()),
    e !== null && (pl(e, 1, t), ht(e, t));
}
function _e(e, t, n) {
  if (e.tag === 3) Rf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vn === null || !Vn.has(r)))
        ) {
          (e = oo(n, e)),
            (e = th(t, e, 1)),
            (t = bn(t, e, 1)),
            (e = ot()),
            t !== null && (pl(t, 1, e), ht(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Be === e &&
      (He & n) === n &&
      (Ae === 4 || (Ae === 3 && (He & 130023424) === He && 500 > Me() - Vu)
        ? cr(e, 0)
        : (bu |= n)),
    ht(e, t);
}
function xh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pl), (Pl <<= 1), !(Pl & 130023424) && (Pl = 4194304))
      : (t = 1));
  var n = ot();
  (e = gn(e, t)), e !== null && (pl(e, t, n), ht(e, n));
}
function Hy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xh(e, n);
}
function Ky(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), xh(e, n);
}
var Eh;
Eh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || dt.current) ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ft = !1), My(e, t, n);
      ft = !!(e.flags & 131072);
    }
  else (ft = !1), xe && t.flags & 1048576 && Rp(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xl(e, t), (e = t.pendingProps);
      var o = eo(t, et.current);
      Xr(t, n), (o = Au(null, t, r, e, o, n));
      var l = zu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pt(r) ? ((l = !0), ui(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Tu(t),
            (o.updater = Fi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ma(t, r, e, n),
            (t = Aa(null, t, r, !0, l, n)))
          : ((t.tag = 0), xe && l && ku(t), nt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Yy(r)),
          (e = zt(r, e)),
          o)
        ) {
          case 0:
            t = $a(null, t, r, e, n);
            break e;
          case 1:
            t = mf(null, t, r, e, n);
            break e;
          case 11:
            t = pf(null, t, r, e, n);
            break e;
          case 14:
            t = hf(null, t, r, zt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        $a(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        mf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((lh(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Np(e, t),
          hi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = oo(Error(O(423)), t)), (t = vf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = oo(Error(O(424)), t)), (t = vf(e, t, r, n, o));
            break e;
          } else
            for (
              yt = Bn(t.stateNode.containerInfo.firstChild),
                gt = t,
                xe = !0,
                Ut = null,
                n = Mp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((to(), r === o)) {
            t = wn(e, t, n);
            break e;
          }
          nt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dp(t),
        e === null && La(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Ra(r, o) ? (i = null) : l !== null && Ra(r, l) && (t.flags |= 32),
        oh(e, t),
        nt(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && La(t), null;
    case 13:
      return ih(e, t, n);
    case 4:
      return (
        Ou(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = no(t, null, r, n)) : nt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        pf(e, t, r, o, n)
      );
    case 7:
      return nt(e, t, t.pendingProps, n), t.child;
    case 8:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          ve(di, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Vt(l.value, i)) {
            if (l.children === o.children && !dt.current) {
              t = wn(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = hn(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Ta(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(O(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Ta(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        nt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Xr(t, n),
        (o = Nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        nt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = zt(r, t.pendingProps)),
        (o = zt(r.type, o)),
        hf(e, t, r, o, n)
      );
    case 15:
      return nh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        Xl(e, t),
        (t.tag = 1),
        pt(r) ? ((e = !0), ui(t)) : (e = !1),
        Xr(t, n),
        Tp(t, r, o),
        Ma(t, r, o, n),
        Aa(null, t, r, !0, e, n)
      );
    case 19:
      return sh(e, t, n);
    case 22:
      return rh(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Ch(e, t) {
  return Xd(e, t);
}
function Qy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pt(e, t, n, r) {
  return new Qy(e, t, n, r);
}
function Qu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yy(e) {
  if (typeof e == "function") return Qu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === du)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function Hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ql(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Qu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Mr:
        return fr(n.children, o, l, t);
      case fu:
        (i = 8), (o |= 8);
        break;
      case ra:
        return (
          (e = Pt(12, n, t, o | 2)), (e.elementType = ra), (e.lanes = l), e
        );
      case oa:
        return (e = Pt(13, n, t, o)), (e.elementType = oa), (e.lanes = l), e;
      case la:
        return (e = Pt(19, n, t, o)), (e.elementType = la), (e.lanes = l), e;
      case Od:
        return Vi(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ld:
              i = 10;
              break e;
            case Td:
              i = 9;
              break e;
            case du:
              i = 11;
              break e;
            case pu:
              i = 14;
              break e;
            case On:
              (i = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function fr(e, t, n, r) {
  return (e = Pt(7, e, r, t)), (e.lanes = n), e;
}
function Vi(e, t, n, r) {
  return (
    (e = Pt(22, e, r, t)),
    (e.elementType = Od),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ks(e, t, n) {
  return (e = Pt(6, e, null, t)), (e.lanes = n), e;
}
function Qs(e, t, n) {
  return (
    (t = Pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ps(0)),
    (this.expirationTimes = Ps(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ps(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Yu(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new Xy(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Pt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tu(l),
    e
  );
}
function Gy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Or,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kh(e) {
  if (!e) return Qn;
  e = e._reactInternals;
  e: {
    if (kr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pt(n)) return Cp(e, n, t);
  }
  return t;
}
function Rh(e, t, n, r, o, l, i, s, a) {
  return (
    (e = Yu(n, r, !0, e, o, l, i, s, a)),
    (e.context = kh(null)),
    (n = e.current),
    (r = ot()),
    (o = Wn(n)),
    (l = hn(r, o)),
    (l.callback = t ?? null),
    bn(n, l, o),
    (e.current.lanes = o),
    pl(e, o, r),
    ht(e, r),
    e
  );
}
function Wi(e, t, n, r) {
  var o = t.current,
    l = ot(),
    i = Wn(o);
  return (
    (n = kh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hn(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bn(o, t, i)),
    e !== null && (bt(e, o, i, l), Kl(e, o, i)),
    i
  );
}
function Ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _f(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  _f(e, t), (e = e.alternate) && _f(e, t);
}
function Zy() {
  return null;
}
var _h =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gu(e) {
  this._internalRoot = e;
}
Hi.prototype.render = Gu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Wi(e, t, null, null);
};
Hi.prototype.unmount = Gu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gr(function () {
      Wi(null, e, null, null);
    }),
      (t[yn] = null);
  }
};
function Hi(e) {
  this._internalRoot = e;
}
Hi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = np();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++);
    Dn.splice(n, 0, e), n === 0 && op(e);
  }
};
function Zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ki(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pf() {}
function qy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Ei(i);
        l.call(u);
      };
    }
    var i = Rh(t, r, e, 0, null, !1, !1, "", Pf);
    return (
      (e._reactRootContainer = i),
      (e[yn] = i.current),
      Jo(e.nodeType === 8 ? e.parentNode : e),
      gr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Ei(a);
      s.call(u);
    };
  }
  var a = Yu(e, 0, !1, null, null, !1, !1, "", Pf);
  return (
    (e._reactRootContainer = a),
    (e[yn] = a.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    gr(function () {
      Wi(t, a, n, r);
    }),
    a
  );
}
function Qi(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Ei(i);
        s.call(a);
      };
    }
    Wi(t, i, e, o);
  } else i = qy(n, t, e, o, r);
  return Ei(i);
}
ep = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oo(t.pendingLanes);
        n !== 0 &&
          (vu(t, n | 1), ht(t, Me()), !(ae & 6) && ((lo = Me() + 500), Jn()));
      }
      break;
    case 13:
      gr(function () {
        var r = gn(e, 1);
        if (r !== null) {
          var o = ot();
          bt(r, e, 1, o);
        }
      }),
        Xu(e, 1);
  }
};
yu = function (e) {
  if (e.tag === 13) {
    var t = gn(e, 134217728);
    if (t !== null) {
      var n = ot();
      bt(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
tp = function (e) {
  if (e.tag === 13) {
    var t = Wn(e),
      n = gn(e, t);
    if (n !== null) {
      var r = ot();
      bt(n, e, t, r);
    }
    Xu(e, t);
  }
};
np = function () {
  return de;
};
rp = function (e, t) {
  var n = de;
  try {
    return (de = e), t();
  } finally {
    de = n;
  }
};
ma = function (e, t, n) {
  switch (t) {
    case "input":
      if ((aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = zi(r);
            if (!o) throw Error(O(90));
            Dd(r), aa(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ad(e, n);
      break;
    case "select":
      (t = n.value), t != null && Hr(e, !!n.multiple, t, !1);
  }
};
Vd = Wu;
Wd = gr;
var Jy = { usingClientEntryPoint: !1, Events: [ml, zr, zi, Bd, bd, Wu] },
  Ro = {
    findFiberByHostInstance: ir,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  eg = {
    bundleType: Ro.bundleType,
    version: Ro.version,
    rendererPackageName: Ro.rendererPackageName,
    rendererConfig: Ro.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ro.findFiberByHostInstance || Zy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Il.isDisabled && Il.supportsFiber)
    try {
      (Mi = Il.inject(eg)), (Jt = Il);
    } catch {}
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
xt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zu(t)) throw Error(O(200));
  return Gy(e, t, null, n);
};
xt.createRoot = function (e, t) {
  if (!Zu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = _h;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Yu(e, 1, !1, null, null, n, !1, r, o)),
    (e[yn] = t.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    new Gu(t)
  );
};
xt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Qd(t)), (e = e === null ? null : e.stateNode), e;
};
xt.flushSync = function (e) {
  return gr(e);
};
xt.hydrate = function (e, t, n) {
  if (!Ki(t)) throw Error(O(200));
  return Qi(null, e, t, !0, n);
};
xt.hydrateRoot = function (e, t, n) {
  if (!Zu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = _h;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Rh(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[yn] = t.current),
    Jo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Hi(t);
};
xt.render = function (e, t, n) {
  if (!Ki(t)) throw Error(O(200));
  return Qi(null, e, t, !1, n);
};
xt.unmountComponentAtNode = function (e) {
  if (!Ki(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (gr(function () {
        Qi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yn] = null);
        });
      }),
      !0)
    : !1;
};
xt.unstable_batchedUpdates = Wu;
xt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ki(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Qi(e, t, n, !1, r);
};
xt.version = "18.2.0-next-9e3b772b8-20220608";
function Ph() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph);
    } catch (e) {
      console.error(e);
    }
}
Ph(), (Rd.exports = xt);
var qu = Rd.exports;
const tg = ru(qu);
var jf = qu;
(ta.createRoot = jf.createRoot), (ta.hydrateRoot = jf.hydrateRoot);
var jh = { exports: {} },
  Nh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var io = x;
function ng(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rg = typeof Object.is == "function" ? Object.is : ng,
  og = io.useState,
  lg = io.useEffect,
  ig = io.useLayoutEffect,
  sg = io.useDebugValue;
function ag(e, t) {
  var n = t(),
    r = og({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    l = r[1];
  return (
    ig(
      function () {
        (o.value = n), (o.getSnapshot = t), Ys(o) && l({ inst: o });
      },
      [e, n, t],
    ),
    lg(
      function () {
        return (
          Ys(o) && l({ inst: o }),
          e(function () {
            Ys(o) && l({ inst: o });
          })
        );
      },
      [e],
    ),
    sg(n),
    n
  );
}
function Ys(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rg(e, n);
  } catch {
    return !0;
  }
}
function ug(e, t) {
  return t();
}
var cg =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ug
    : ag;
Nh.useSyncExternalStore =
  io.useSyncExternalStore !== void 0 ? io.useSyncExternalStore : cg;
jh.exports = Nh;
var fg = jh.exports,
  Lh = { exports: {} },
  Th = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yi = x,
  dg = fg;
function pg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var hg = typeof Object.is == "function" ? Object.is : pg,
  mg = dg.useSyncExternalStore,
  vg = Yi.useRef,
  yg = Yi.useEffect,
  gg = Yi.useMemo,
  wg = Yi.useDebugValue;
Th.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var l = vg(null);
  if (l.current === null) {
    var i = { hasValue: !1, value: null };
    l.current = i;
  } else i = l.current;
  l = gg(
    function () {
      function a(y) {
        if (!u) {
          if (((u = !0), (c = y), (y = r(y)), o !== void 0 && i.hasValue)) {
            var w = i.value;
            if (o(w, y)) return (h = w);
          }
          return (h = y);
        }
        if (((w = h), hg(c, y))) return w;
        var g = r(y);
        return o !== void 0 && o(w, g) ? w : ((c = y), (h = g));
      }
      var u = !1,
        c,
        h,
        m = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        m === null
          ? void 0
          : function () {
              return a(m());
            },
      ];
    },
    [t, n, r, o],
  );
  var s = mg(e, l[0], l[1]);
  return (
    yg(
      function () {
        (i.hasValue = !0), (i.value = s);
      },
      [s],
    ),
    wg(s),
    s
  );
};
Lh.exports = Th;
var Sg = Lh.exports;
function xg(e) {
  e();
}
let Oh = xg;
const Eg = (e) => (Oh = e),
  Cg = () => Oh,
  Nf = Symbol.for("react-redux-context"),
  Lf = typeof globalThis < "u" ? globalThis : {};
function kg() {
  var e;
  if (!x.createContext) return {};
  const t = (e = Lf[Nf]) != null ? e : (Lf[Nf] = new Map());
  let n = t.get(x.createContext);
  return n || ((n = x.createContext(null)), t.set(x.createContext, n)), n;
}
const Yn = kg();
function Ju(e = Yn) {
  return function () {
    return x.useContext(e);
  };
}
const Mh = Ju(),
  Rg = () => {
    throw new Error("uSES not initialized!");
  };
let Dh = Rg;
const _g = (e) => {
    Dh = e;
  },
  Pg = (e, t) => e === t;
function jg(e = Yn) {
  const t = e === Yn ? Mh : Ju(e);
  return function (r, o = {}) {
    const {
        equalityFn: l = Pg,
        stabilityCheck: i = void 0,
        noopCheck: s = void 0,
      } = typeof o == "function" ? { equalityFn: o } : o,
      {
        store: a,
        subscription: u,
        getServerState: c,
        stabilityCheck: h,
        noopCheck: m,
      } = t();
    x.useRef(!0);
    const y = x.useCallback(
        {
          [r.name](g) {
            return r(g);
          },
        }[r.name],
        [r, h, i],
      ),
      w = Dh(u.addNestedSub, a.getState, c || a.getState, y, l);
    return x.useDebugValue(w), w;
  };
}
const dr = jg();
var $h = { exports: {} },
  pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var be = typeof Symbol == "function" && Symbol.for,
  ec = be ? Symbol.for("react.element") : 60103,
  tc = be ? Symbol.for("react.portal") : 60106,
  Xi = be ? Symbol.for("react.fragment") : 60107,
  Gi = be ? Symbol.for("react.strict_mode") : 60108,
  Zi = be ? Symbol.for("react.profiler") : 60114,
  qi = be ? Symbol.for("react.provider") : 60109,
  Ji = be ? Symbol.for("react.context") : 60110,
  nc = be ? Symbol.for("react.async_mode") : 60111,
  es = be ? Symbol.for("react.concurrent_mode") : 60111,
  ts = be ? Symbol.for("react.forward_ref") : 60112,
  ns = be ? Symbol.for("react.suspense") : 60113,
  Ng = be ? Symbol.for("react.suspense_list") : 60120,
  rs = be ? Symbol.for("react.memo") : 60115,
  os = be ? Symbol.for("react.lazy") : 60116,
  Lg = be ? Symbol.for("react.block") : 60121,
  Tg = be ? Symbol.for("react.fundamental") : 60117,
  Og = be ? Symbol.for("react.responder") : 60118,
  Mg = be ? Symbol.for("react.scope") : 60119;
function Ct(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ec:
        switch (((e = e.type), e)) {
          case nc:
          case es:
          case Xi:
          case Zi:
          case Gi:
          case ns:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ji:
              case ts:
              case os:
              case rs:
              case qi:
                return e;
              default:
                return t;
            }
        }
      case tc:
        return t;
    }
  }
}
function Ah(e) {
  return Ct(e) === es;
}
pe.AsyncMode = nc;
pe.ConcurrentMode = es;
pe.ContextConsumer = Ji;
pe.ContextProvider = qi;
pe.Element = ec;
pe.ForwardRef = ts;
pe.Fragment = Xi;
pe.Lazy = os;
pe.Memo = rs;
pe.Portal = tc;
pe.Profiler = Zi;
pe.StrictMode = Gi;
pe.Suspense = ns;
pe.isAsyncMode = function (e) {
  return Ah(e) || Ct(e) === nc;
};
pe.isConcurrentMode = Ah;
pe.isContextConsumer = function (e) {
  return Ct(e) === Ji;
};
pe.isContextProvider = function (e) {
  return Ct(e) === qi;
};
pe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ec;
};
pe.isForwardRef = function (e) {
  return Ct(e) === ts;
};
pe.isFragment = function (e) {
  return Ct(e) === Xi;
};
pe.isLazy = function (e) {
  return Ct(e) === os;
};
pe.isMemo = function (e) {
  return Ct(e) === rs;
};
pe.isPortal = function (e) {
  return Ct(e) === tc;
};
pe.isProfiler = function (e) {
  return Ct(e) === Zi;
};
pe.isStrictMode = function (e) {
  return Ct(e) === Gi;
};
pe.isSuspense = function (e) {
  return Ct(e) === ns;
};
pe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Xi ||
    e === es ||
    e === Zi ||
    e === Gi ||
    e === ns ||
    e === Ng ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === os ||
        e.$$typeof === rs ||
        e.$$typeof === qi ||
        e.$$typeof === Ji ||
        e.$$typeof === ts ||
        e.$$typeof === Tg ||
        e.$$typeof === Og ||
        e.$$typeof === Mg ||
        e.$$typeof === Lg))
  );
};
pe.typeOf = Ct;
$h.exports = pe;
var Dg = $h.exports,
  zh = Dg,
  $g = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Ag = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ih = {};
Ih[zh.ForwardRef] = $g;
Ih[zh.Memo] = Ag;
var he = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rc = Symbol.for("react.element"),
  oc = Symbol.for("react.portal"),
  ls = Symbol.for("react.fragment"),
  is = Symbol.for("react.strict_mode"),
  ss = Symbol.for("react.profiler"),
  as = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  zg = Symbol.for("react.server_context"),
  cs = Symbol.for("react.forward_ref"),
  fs = Symbol.for("react.suspense"),
  ds = Symbol.for("react.suspense_list"),
  ps = Symbol.for("react.memo"),
  hs = Symbol.for("react.lazy"),
  Ig = Symbol.for("react.offscreen"),
  Fh;
Fh = Symbol.for("react.module.reference");
function Tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rc:
        switch (((e = e.type), e)) {
          case ls:
          case ss:
          case is:
          case fs:
          case ds:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case zg:
              case us:
              case cs:
              case hs:
              case ps:
              case as:
                return e;
              default:
                return t;
            }
        }
      case oc:
        return t;
    }
  }
}
he.ContextConsumer = us;
he.ContextProvider = as;
he.Element = rc;
he.ForwardRef = cs;
he.Fragment = ls;
he.Lazy = hs;
he.Memo = ps;
he.Portal = oc;
he.Profiler = ss;
he.StrictMode = is;
he.Suspense = fs;
he.SuspenseList = ds;
he.isAsyncMode = function () {
  return !1;
};
he.isConcurrentMode = function () {
  return !1;
};
he.isContextConsumer = function (e) {
  return Tt(e) === us;
};
he.isContextProvider = function (e) {
  return Tt(e) === as;
};
he.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === rc;
};
he.isForwardRef = function (e) {
  return Tt(e) === cs;
};
he.isFragment = function (e) {
  return Tt(e) === ls;
};
he.isLazy = function (e) {
  return Tt(e) === hs;
};
he.isMemo = function (e) {
  return Tt(e) === ps;
};
he.isPortal = function (e) {
  return Tt(e) === oc;
};
he.isProfiler = function (e) {
  return Tt(e) === ss;
};
he.isStrictMode = function (e) {
  return Tt(e) === is;
};
he.isSuspense = function (e) {
  return Tt(e) === fs;
};
he.isSuspenseList = function (e) {
  return Tt(e) === ds;
};
he.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ls ||
    e === ss ||
    e === is ||
    e === fs ||
    e === ds ||
    e === Ig ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === hs ||
        e.$$typeof === ps ||
        e.$$typeof === as ||
        e.$$typeof === us ||
        e.$$typeof === cs ||
        e.$$typeof === Fh ||
        e.getModuleId !== void 0))
  );
};
he.typeOf = Tt;
function Fg() {
  const e = Cg();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        l = (n = { callback: r, next: null, prev: n });
      return (
        l.prev ? (l.prev.next = l) : (t = l),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            l.next ? (l.next.prev = l.prev) : (n = l.prev),
            l.prev ? (l.prev.next = l.next) : (t = l.next));
        }
      );
    },
  };
}
const Tf = { notify() {}, get: () => [] };
function Ug(e, t) {
  let n,
    r = Tf,
    o = 0,
    l = !1;
  function i(g) {
    c();
    const C = r.subscribe(g);
    let d = !1;
    return () => {
      d || ((d = !0), C(), h());
    };
  }
  function s() {
    r.notify();
  }
  function a() {
    w.onStateChange && w.onStateChange();
  }
  function u() {
    return l;
  }
  function c() {
    o++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = Fg()));
  }
  function h() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Tf));
  }
  function m() {
    l || ((l = !0), c());
  }
  function y() {
    l && ((l = !1), h());
  }
  const w = {
    addNestedSub: i,
    notifyNestedSubs: s,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: m,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return w;
}
const Bg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  bg = Bg ? x.useLayoutEffect : x.useEffect;
function Vg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: l = "once",
}) {
  const i = x.useMemo(() => {
      const u = Ug(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: l,
      };
    }, [e, r, o, l]),
    s = x.useMemo(() => e.getState(), [e]);
  bg(() => {
    const { subscription: u } = i;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      s !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [i, s]);
  const a = t || Yn;
  return x.createElement(a.Provider, { value: i }, n);
}
function Uh(e = Yn) {
  const t = e === Yn ? Mh : Ju(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Wg = Uh();
function Hg(e = Yn) {
  const t = e === Yn ? Wg : Uh(e);
  return function () {
    return t().dispatch;
  };
}
const rn = Hg();
_g(Sg.useSyncExternalStoreWithSelector);
Eg(qu.unstable_batchedUpdates);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pe() {
  return (
    (Pe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pe.apply(this, arguments)
  );
}
var Te;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Te || (Te = {}));
const Of = "popstate";
function Kg(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: s } = r.location;
    return al(
      "",
      { pathname: l, search: i, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Sr(o);
  }
  return Yg(t, n, null, e);
}
function re(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function wr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qg() {
  return Math.random().toString(36).substr(2, 8);
}
function Mf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function al(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Pe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xn(t) : t,
      { state: n, key: (t && t.key) || r || Qg() },
    )
  );
}
function Sr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Yg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    s = Te.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), i.replaceState(Pe({}, i.state, { idx: u }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    s = Te.Pop;
    let C = c(),
      d = C == null ? null : C - u;
    (u = C), a && a({ action: s, location: g.location, delta: d });
  }
  function m(C, d) {
    s = Te.Push;
    let f = al(g.location, C, d);
    n && n(f, C), (u = c() + 1);
    let v = Mf(f, u),
      p = g.createHref(f);
    try {
      i.pushState(v, "", p);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(p);
    }
    l && a && a({ action: s, location: g.location, delta: 1 });
  }
  function y(C, d) {
    s = Te.Replace;
    let f = al(g.location, C, d);
    n && n(f, C), (u = c());
    let v = Mf(f, u),
      p = g.createHref(f);
    i.replaceState(v, "", p),
      l && a && a({ action: s, location: g.location, delta: 0 });
  }
  function w(C) {
    let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
      f = typeof C == "string" ? C : Sr(C);
    return (
      re(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, i);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Of, h),
        (a = C),
        () => {
          o.removeEventListener(Of, h), (a = null);
        }
      );
    },
    createHref(C) {
      return t(o, C);
    },
    createURL: w,
    encodeLocation(C) {
      let d = w(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: y,
    go(C) {
      return i.go(C);
    },
  };
  return g;
}
var Oe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Oe || (Oe = {}));
const Xg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Gg(e) {
  return e.index === !0;
}
function Ya(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, l) => {
      let i = [...n, l],
        s = typeof o.id == "string" ? o.id : i.join("-");
      if (
        (re(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        re(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Gg(o))
      ) {
        let a = Pe({}, o, t(o), { id: s });
        return (r[s] = a), a;
      } else {
        let a = Pe({}, o, t(o), { id: s, children: void 0 });
        return (
          (r[s] = a), o.children && (a.children = Ya(o.children, t, i, r)), a
        );
      }
    })
  );
}
function Wr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xn(t) : t,
    o = po(r.pathname || "/", n);
  if (o == null) return null;
  let l = Bh(e);
  qg(l);
  let i = null;
  for (let s = 0; i == null && s < l.length; ++s) i = s0(l[s], c0(o));
  return i;
}
function Zg(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Bh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, s) => {
    let a = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    a.relativePath.startsWith("/") &&
      (re(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = mn([r, a.relativePath]),
      c = n.concat(a);
    l.children &&
      l.children.length > 0 &&
      (re(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Bh(l.children, t, c, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: l0(u, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, i) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) o(l, i);
      else for (let a of bh(l.path)) o(l, i, a);
    }),
    t
  );
}
function bh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = bh(r.join("/")),
    s = [];
  return (
    s.push(...i.map((a) => (a === "" ? l : [l, a].join("/")))),
    o && s.push(...i),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function qg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : i0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Jg = /^:\w+$/,
  e0 = 3,
  t0 = 2,
  n0 = 1,
  r0 = 10,
  o0 = -2,
  Df = (e) => e === "*";
function l0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Df) && (r += o0),
    t && (r += t0),
    n
      .filter((o) => !Df(o))
      .reduce((o, l) => o + (Jg.test(l) ? e0 : l === "" ? n0 : r0), r)
  );
}
function i0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function s0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let s = n[i],
      a = i === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = a0(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = s.route;
    l.push({
      params: r,
      pathname: mn([o, c.pathname]),
      pathnameBase: h0(mn([o, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (o = mn([o, c.pathnameBase]));
  }
  return l;
}
function a0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = u0(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, h) => {
      let { paramName: m, isOptional: y } = c;
      if (m === "*") {
        let g = s[h] || "";
        i = l.slice(0, l.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const w = s[h];
      return y && !w ? (u[m] = void 0) : (u[m] = f0(w || "", m)), u;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function u0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    wr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function c0(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      wr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function f0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      wr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function po(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function d0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? xn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : p0(n, t)) : t,
    search: m0(r),
    hash: v0(o),
  };
}
function p0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Xs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ms(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function lc(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = xn(e))
    : ((o = Pe({}, e)),
      re(
        !o.pathname || !o.pathname.includes("?"),
        Xs("?", "pathname", "search", o),
      ),
      re(
        !o.pathname || !o.pathname.includes("#"),
        Xs("#", "pathname", "hash", o),
      ),
      re(!o.search || !o.search.includes("#"), Xs("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    i = l ? "/" : o.pathname,
    s;
  if (r || i == null) s = n;
  else {
    let h = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (h -= 1);
      o.pathname = m.join("/");
    }
    s = h >= 0 ? t[h] : "/";
  }
  let a = d0(o, s),
    u = i && i !== "/" && i.endsWith("/"),
    c = (l || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const mn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  h0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  m0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  v0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ic {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Vh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Wh = ["post", "put", "patch", "delete"],
  y0 = new Set(Wh),
  g0 = ["get", ...Wh],
  w0 = new Set(g0),
  S0 = new Set([301, 302, 303, 307, 308]),
  x0 = new Set([307, 308]),
  Gs = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  E0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  _o = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  C0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Kh = "remix-router-transitions";
function k0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  re(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let E = e.detectErrorBoundary;
    o = (R) => ({ hasErrorBoundary: E(R) });
  } else o = C0;
  let l = {},
    i = Ya(e.routes, o, void 0, l),
    s,
    a = e.basename || "/",
    u = Pe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future,
    ),
    c = null,
    h = new Set(),
    m = null,
    y = null,
    w = null,
    g = e.hydrationData != null,
    C = Wr(i, e.history.location, a),
    d = null;
  if (C == null) {
    let E = kt(404, { pathname: e.history.location.pathname }),
      { matches: R, route: P } = bf(i);
    (C = R), (d = { [P.id]: E });
  }
  let f =
      !C.some((E) => E.route.lazy) &&
      (!C.some((E) => E.route.loader) || e.hydrationData != null),
    v,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: f,
      navigation: Gs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = Te.Pop,
    L = !1,
    _,
    T = !1,
    $ = new Map(),
    U = null,
    Q = !1,
    Z = !1,
    ue = [],
    ne = [],
    q = new Map(),
    fe = 0,
    Y = -1,
    D = new Map(),
    b = new Set(),
    F = new Map(),
    J = new Map(),
    se = new Set(),
    K = new Map(),
    X = new Map(),
    Ve = !1;
  function je() {
    if (
      ((c = e.history.listen((E) => {
        let { action: R, location: P, delta: M } = E;
        if (Ve) {
          Ve = !1;
          return;
        }
        wr(
          X.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let V = Ee({
          currentLocation: p.location,
          nextLocation: P,
          historyAction: R,
        });
        if (V && M != null) {
          (Ve = !0),
            e.history.go(M * -1),
            Qe(V, {
              state: "blocked",
              location: P,
              proceed() {
                Qe(V, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: P,
                }),
                  e.history.go(M);
              },
              reset() {
                let j = new Map(p.blockers);
                j.set(V, _o), ee({ blockers: j });
              },
            });
          return;
        }
        return Ot(R, P);
      })),
      n)
    ) {
      $0(t, $);
      let E = () => A0(t, $);
      t.addEventListener("pagehide", E),
        (U = () => t.removeEventListener("pagehide", E));
    }
    return p.initialized || Ot(Te.Pop, p.location), v;
  }
  function me() {
    c && c(),
      U && U(),
      h.clear(),
      _ && _.abort(),
      p.fetchers.forEach((E, R) => Dt(R)),
      p.blockers.forEach((E, R) => Pn(R));
  }
  function mt(E) {
    return h.add(E), () => h.delete(E);
  }
  function ee(E, R) {
    p = Pe({}, p, E);
    let P = [],
      M = [];
    u.v7_fetcherPersist &&
      p.fetchers.forEach((V, j) => {
        V.state === "idle" && (se.has(j) ? M.push(j) : P.push(j));
      }),
      h.forEach((V) =>
        V(p, { deletedFetchers: M, unstable_viewTransitionOpts: R }),
      ),
      u.v7_fetcherPersist &&
        (P.forEach((V) => p.fetchers.delete(V)), M.forEach((V) => Dt(V)));
  }
  function Ne(E, R) {
    var P, M;
    let V =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        Ft(p.navigation.formMethod) &&
        p.navigation.state === "loading" &&
        ((P = E.state) == null ? void 0 : P._isRedirect) !== !0,
      j;
    R.actionData
      ? Object.keys(R.actionData).length > 0
        ? (j = R.actionData)
        : (j = null)
      : V
        ? (j = p.actionData)
        : (j = null);
    let z = R.loaderData
        ? Bf(p.loaderData, R.loaderData, R.matches || [], R.errors)
        : p.loaderData,
      W = p.blockers;
    W.size > 0 && ((W = new Map(W)), W.forEach((I, A) => W.set(A, _o)));
    let H =
      L === !0 ||
      (p.navigation.formMethod != null &&
        Ft(p.navigation.formMethod) &&
        ((M = E.state) == null ? void 0 : M._isRedirect) !== !0);
    s && ((i = s), (s = void 0)),
      Q ||
        k === Te.Pop ||
        (k === Te.Push
          ? e.history.push(E, E.state)
          : k === Te.Replace && e.history.replace(E, E.state));
    let N;
    if (k === Te.Pop) {
      let I = $.get(p.location.pathname);
      I && I.has(E.pathname)
        ? (N = { currentLocation: p.location, nextLocation: E })
        : $.has(E.pathname) &&
          (N = { currentLocation: E, nextLocation: p.location });
    } else if (T) {
      let I = $.get(p.location.pathname);
      I
        ? I.add(E.pathname)
        : ((I = new Set([E.pathname])), $.set(p.location.pathname, I)),
        (N = { currentLocation: p.location, nextLocation: E });
    }
    ee(
      Pe({}, R, {
        actionData: j,
        loaderData: z,
        historyAction: k,
        location: E,
        initialized: !0,
        navigation: Gs,
        revalidation: "idle",
        restoreScrollPosition: un(E, R.matches || p.matches),
        preventScrollReset: H,
        blockers: W,
      }),
      N,
    ),
      (k = Te.Pop),
      (L = !1),
      (T = !1),
      (Q = !1),
      (Z = !1),
      (ue = []),
      (ne = []);
  }
  async function st(E, R) {
    if (typeof E == "number") {
      e.history.go(E);
      return;
    }
    let P = Xa(
        p.location,
        p.matches,
        a,
        u.v7_prependBasename,
        E,
        R == null ? void 0 : R.fromRouteId,
        R == null ? void 0 : R.relative,
      ),
      {
        path: M,
        submission: V,
        error: j,
      } = $f(u.v7_normalizeFormMethod, !1, P, R),
      z = p.location,
      W = al(p.location, M, R && R.state);
    W = Pe({}, W, e.history.encodeLocation(W));
    let H = R && R.replace != null ? R.replace : void 0,
      N = Te.Push;
    H === !0
      ? (N = Te.Replace)
      : H === !1 ||
        (V != null &&
          Ft(V.formMethod) &&
          V.formAction === p.location.pathname + p.location.search &&
          (N = Te.Replace));
    let I =
        R && "preventScrollReset" in R ? R.preventScrollReset === !0 : void 0,
      A = Ee({ currentLocation: z, nextLocation: W, historyAction: N });
    if (A) {
      Qe(A, {
        state: "blocked",
        location: W,
        proceed() {
          Qe(A, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: W,
          }),
            st(E, R);
        },
        reset() {
          let G = new Map(p.blockers);
          G.set(A, _o), ee({ blockers: G });
        },
      });
      return;
    }
    return await Ot(N, W, {
      submission: V,
      pendingError: j,
      preventScrollReset: I,
      replace: R && R.replace,
      enableViewTransition: R && R.unstable_viewTransition,
    });
  }
  function Ht() {
    if (
      (ln(),
      ee({ revalidation: "loading" }),
      p.navigation.state !== "submitting")
    ) {
      if (p.navigation.state === "idle") {
        Ot(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ot(k || p.historyAction, p.navigation.location, {
        overrideNavigation: p.navigation,
      });
    }
  }
  async function Ot(E, R, P) {
    _ && _.abort(),
      (_ = null),
      (k = E),
      (Q = (P && P.startUninterruptedRevalidation) === !0),
      rr(p.location, p.matches),
      (L = (P && P.preventScrollReset) === !0),
      (T = (P && P.enableViewTransition) === !0);
    let M = s || i,
      V = P && P.overrideNavigation,
      j = Wr(M, R, a);
    if (!j) {
      let G = kt(404, { pathname: R.pathname }),
        { matches: oe, route: ze } = bf(M);
      jn(), Ne(R, { matches: oe, loaderData: {}, errors: { [ze.id]: G } });
      return;
    }
    if (
      p.initialized &&
      !Z &&
      N0(p.location, R) &&
      !(P && P.submission && Ft(P.submission.formMethod))
    ) {
      Ne(R, { matches: j });
      return;
    }
    _ = new AbortController();
    let z = jo(e.history, R, _.signal, P && P.submission),
      W,
      H;
    if (P && P.pendingError) H = { [Vo(j).route.id]: P.pendingError };
    else if (P && P.submission && Ft(P.submission.formMethod)) {
      let G = await tt(z, R, P.submission, j, { replace: P.replace });
      if (G.shortCircuited) return;
      (W = G.pendingActionData),
        (H = G.pendingActionError),
        (V = Zs(R, P.submission)),
        (z = new Request(z.url, { signal: z.signal }));
    }
    let {
      shortCircuited: N,
      loaderData: I,
      errors: A,
    } = await Rr(
      z,
      R,
      j,
      V,
      P && P.submission,
      P && P.fetcherSubmission,
      P && P.replace,
      W,
      H,
    );
    N ||
      ((_ = null),
      Ne(
        R,
        Pe({ matches: j }, W ? { actionData: W } : {}, {
          loaderData: I,
          errors: A,
        }),
      ));
  }
  async function tt(E, R, P, M, V) {
    V === void 0 && (V = {}), ln();
    let j = M0(R, P);
    ee({ navigation: j });
    let z,
      W = Za(M, R);
    if (!W.route.action && !W.route.lazy)
      z = {
        type: Oe.error,
        error: kt(405, {
          method: E.method,
          pathname: R.pathname,
          routeId: W.route.id,
        }),
      };
    else if (((z = await Po("action", E, W, M, l, o, a)), E.signal.aborted))
      return { shortCircuited: !0 };
    if (Zr(z)) {
      let H;
      return (
        V && V.replace != null
          ? (H = V.replace)
          : (H = z.location === p.location.pathname + p.location.search),
        await Mt(p, z, { submission: P, replace: H }),
        { shortCircuited: !0 }
      );
    }
    if (Wo(z)) {
      let H = Vo(M, W.route.id);
      return (
        (V && V.replace) !== !0 && (k = Te.Push),
        { pendingActionData: {}, pendingActionError: { [H.route.id]: z.error } }
      );
    }
    if (ur(z)) throw kt(400, { type: "defer-action" });
    return { pendingActionData: { [W.route.id]: z.data } };
  }
  async function Rr(E, R, P, M, V, j, z, W, H) {
    let N = M || Zs(R, V),
      I = V || j || Hf(N),
      A = s || i,
      [G, oe] = Af(e.history, p, P, I, R, Z, ue, ne, F, b, A, a, W, H);
    if (
      (jn(
        (ce) =>
          !(P && P.some((te) => te.route.id === ce)) ||
          (G && G.some((te) => te.route.id === ce)),
      ),
      (Y = ++fe),
      G.length === 0 && oe.length === 0)
    ) {
      let ce = sn();
      return (
        Ne(
          R,
          Pe(
            { matches: P, loaderData: {}, errors: H || null },
            W ? { actionData: W } : {},
            ce ? { fetchers: new Map(p.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Q) {
      oe.forEach((te) => {
        let Fe = p.fetchers.get(te.key),
          ge = No(void 0, Fe ? Fe.data : void 0);
        p.fetchers.set(te.key, ge);
      });
      let ce = W || p.actionData;
      ee(
        Pe(
          { navigation: N },
          ce
            ? Object.keys(ce).length === 0
              ? { actionData: null }
              : { actionData: ce }
            : {},
          oe.length > 0 ? { fetchers: new Map(p.fetchers) } : {},
        ),
      );
    }
    oe.forEach((ce) => {
      q.has(ce.key) && at(ce.key),
        ce.controller && q.set(ce.key, ce.controller);
    });
    let ze = () => oe.forEach((ce) => at(ce.key));
    _ && _.signal.addEventListener("abort", ze);
    let {
      results: Ie,
      loaderResults: Le,
      fetcherResults: Ye,
    } = await kn(p.matches, P, G, oe, E);
    if (E.signal.aborted) return { shortCircuited: !0 };
    _ && _.signal.removeEventListener("abort", ze),
      oe.forEach((ce) => q.delete(ce.key));
    let ie = Vf(Ie);
    if (ie) {
      if (ie.idx >= G.length) {
        let ce = oe[ie.idx - G.length].key;
        b.add(ce);
      }
      return await Mt(p, ie.result, { replace: z }), { shortCircuited: !0 };
    }
    let { loaderData: ut, errors: _r } = Uf(p, P, G, Le, H, oe, Ye, K);
    K.forEach((ce, te) => {
      ce.subscribe((Fe) => {
        (Fe || ce.done) && K.delete(te);
      });
    });
    let Pr = sn(),
      jr = Rn(Y),
      Nr = Pr || jr || oe.length > 0;
    return Pe(
      { loaderData: ut, errors: _r },
      Nr ? { fetchers: new Map(p.fetchers) } : {},
    );
  }
  function Kt(E) {
    return (
      u.v7_fetcherPersist &&
        (J.set(E, (J.get(E) || 0) + 1), se.has(E) && se.delete(E)),
      p.fetchers.get(E) || E0
    );
  }
  function on(E, R, P, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    q.has(E) && at(E);
    let V = s || i,
      j = Xa(
        p.location,
        p.matches,
        a,
        u.v7_prependBasename,
        P,
        R,
        M == null ? void 0 : M.relative,
      ),
      z = Wr(V, j, a);
    if (!z) {
      Qt(E, R, kt(404, { pathname: j }));
      return;
    }
    let {
      path: W,
      submission: H,
      error: N,
    } = $f(u.v7_normalizeFormMethod, !0, j, M);
    if (N) {
      Qt(E, R, N);
      return;
    }
    let I = Za(z, W);
    if (((L = (M && M.preventScrollReset) === !0), H && Ft(H.formMethod))) {
      ye(E, R, W, I, z, H);
      return;
    }
    F.set(E, { routeId: R, path: W }), tr(E, R, W, I, z, H);
  }
  async function ye(E, R, P, M, V, j) {
    if ((ln(), F.delete(E), !M.route.action && !M.route.lazy)) {
      let ge = kt(405, { method: j.formMethod, pathname: P, routeId: R });
      Qt(E, R, ge);
      return;
    }
    let z = p.fetchers.get(E),
      W = D0(j, z);
    p.fetchers.set(E, W), ee({ fetchers: new Map(p.fetchers) });
    let H = new AbortController(),
      N = jo(e.history, P, H.signal, j);
    q.set(E, H);
    let I = fe,
      A = await Po("action", N, M, V, l, o, a);
    if (N.signal.aborted) {
      q.get(E) === H && q.delete(E);
      return;
    }
    if (se.has(E)) {
      p.fetchers.set(E, Tn(void 0)), ee({ fetchers: new Map(p.fetchers) });
      return;
    }
    if (Zr(A))
      if ((q.delete(E), Y > I)) {
        let ge = Tn(void 0);
        p.fetchers.set(E, ge), ee({ fetchers: new Map(p.fetchers) });
        return;
      } else {
        b.add(E);
        let ge = No(j);
        return (
          p.fetchers.set(E, ge),
          ee({ fetchers: new Map(p.fetchers) }),
          Mt(p, A, { fetcherSubmission: j })
        );
      }
    if (Wo(A)) {
      Qt(E, R, A.error);
      return;
    }
    if (ur(A)) throw kt(400, { type: "defer-action" });
    let G = p.navigation.location || p.location,
      oe = jo(e.history, G, H.signal),
      ze = s || i,
      Ie =
        p.navigation.state !== "idle"
          ? Wr(ze, p.navigation.location, a)
          : p.matches;
    re(Ie, "Didn't find any matches after fetcher action");
    let Le = ++fe;
    D.set(E, Le);
    let Ye = No(j, A.data);
    p.fetchers.set(E, Ye);
    let [ie, ut] = Af(
      e.history,
      p,
      Ie,
      j,
      G,
      Z,
      ue,
      ne,
      F,
      b,
      ze,
      a,
      { [M.route.id]: A.data },
      void 0,
    );
    ut
      .filter((ge) => ge.key !== E)
      .forEach((ge) => {
        let $t = ge.key,
          xl = p.fetchers.get($t),
          yo = No(void 0, xl ? xl.data : void 0);
        p.fetchers.set($t, yo),
          q.has($t) && at($t),
          ge.controller && q.set($t, ge.controller);
      }),
      ee({ fetchers: new Map(p.fetchers) });
    let _r = () => ut.forEach((ge) => at(ge.key));
    H.signal.addEventListener("abort", _r);
    let {
      results: Pr,
      loaderResults: jr,
      fetcherResults: Nr,
    } = await kn(p.matches, Ie, ie, ut, oe);
    if (H.signal.aborted) return;
    H.signal.removeEventListener("abort", _r),
      D.delete(E),
      q.delete(E),
      ut.forEach((ge) => q.delete(ge.key));
    let ce = Vf(Pr);
    if (ce) {
      if (ce.idx >= ie.length) {
        let ge = ut[ce.idx - ie.length].key;
        b.add(ge);
      }
      return Mt(p, ce.result);
    }
    let { loaderData: te, errors: Fe } = Uf(
      p,
      p.matches,
      ie,
      jr,
      void 0,
      ut,
      Nr,
      K,
    );
    if (p.fetchers.has(E)) {
      let ge = Tn(A.data);
      p.fetchers.set(E, ge);
    }
    Rn(Le),
      p.navigation.state === "loading" && Le > Y
        ? (re(k, "Expected pending action"),
          _ && _.abort(),
          Ne(p.navigation.location, {
            matches: Ie,
            loaderData: te,
            errors: Fe,
            fetchers: new Map(p.fetchers),
          }))
        : (ee({
            errors: Fe,
            loaderData: Bf(p.loaderData, te, Ie, Fe),
            fetchers: new Map(p.fetchers),
          }),
          (Z = !1));
  }
  async function tr(E, R, P, M, V, j) {
    let z = p.fetchers.get(E),
      W = No(j, z ? z.data : void 0);
    p.fetchers.set(E, W), ee({ fetchers: new Map(p.fetchers) });
    let H = new AbortController(),
      N = jo(e.history, P, H.signal);
    q.set(E, H);
    let I = fe,
      A = await Po("loader", N, M, V, l, o, a);
    if (
      (ur(A) && (A = (await Xh(A, N.signal, !0)) || A),
      q.get(E) === H && q.delete(E),
      N.signal.aborted)
    )
      return;
    if (se.has(E)) {
      p.fetchers.set(E, Tn(void 0)), ee({ fetchers: new Map(p.fetchers) });
      return;
    }
    if (Zr(A))
      if (Y > I) {
        let oe = Tn(void 0);
        p.fetchers.set(E, oe), ee({ fetchers: new Map(p.fetchers) });
        return;
      } else {
        b.add(E), await Mt(p, A);
        return;
      }
    if (Wo(A)) {
      Qt(E, R, A.error);
      return;
    }
    re(!ur(A), "Unhandled fetcher deferred data");
    let G = Tn(A.data);
    p.fetchers.set(E, G), ee({ fetchers: new Map(p.fetchers) });
  }
  async function Mt(E, R, P) {
    let {
      submission: M,
      fetcherSubmission: V,
      replace: j,
    } = P === void 0 ? {} : P;
    R.revalidate && (Z = !0);
    let z = al(E.location, R.location, { _isRedirect: !0 });
    if ((re(z, "Expected a location on the redirect navigation"), n)) {
      let G = !1;
      if (R.reloadDocument) G = !0;
      else if (Hh.test(R.location)) {
        const oe = e.history.createURL(R.location);
        G = oe.origin !== t.location.origin || po(oe.pathname, a) == null;
      }
      if (G) {
        j ? t.location.replace(R.location) : t.location.assign(R.location);
        return;
      }
    }
    _ = null;
    let W = j === !0 ? Te.Replace : Te.Push,
      { formMethod: H, formAction: N, formEncType: I } = E.navigation;
    !M && !V && H && N && I && (M = Hf(E.navigation));
    let A = M || V;
    if (x0.has(R.status) && A && Ft(A.formMethod))
      await Ot(W, z, {
        submission: Pe({}, A, { formAction: R.location }),
        preventScrollReset: L,
      });
    else {
      let G = Zs(z, M);
      await Ot(W, z, {
        overrideNavigation: G,
        fetcherSubmission: V,
        preventScrollReset: L,
      });
    }
  }
  async function kn(E, R, P, M, V) {
    let j = await Promise.all([
        ...P.map((H) => Po("loader", V, H, R, l, o, a)),
        ...M.map((H) =>
          H.matches && H.match && H.controller
            ? Po(
                "loader",
                jo(e.history, H.path, H.controller.signal),
                H.match,
                H.matches,
                l,
                o,
                a,
              )
            : { type: Oe.error, error: kt(404, { pathname: H.path }) },
        ),
      ]),
      z = j.slice(0, P.length),
      W = j.slice(P.length);
    return (
      await Promise.all([
        Wf(
          E,
          P,
          z,
          z.map(() => V.signal),
          !1,
          p.loaderData,
        ),
        Wf(
          E,
          M.map((H) => H.match),
          W,
          M.map((H) => (H.controller ? H.controller.signal : null)),
          !0,
        ),
      ]),
      { results: j, loaderResults: z, fetcherResults: W }
    );
  }
  function ln() {
    (Z = !0),
      ue.push(...jn()),
      F.forEach((E, R) => {
        q.has(R) && (ne.push(R), at(R));
      });
  }
  function Qt(E, R, P) {
    let M = Vo(p.matches, R);
    Dt(E), ee({ errors: { [M.route.id]: P }, fetchers: new Map(p.fetchers) });
  }
  function Dt(E) {
    let R = p.fetchers.get(E);
    q.has(E) && !(R && R.state === "loading" && D.has(E)) && at(E),
      F.delete(E),
      D.delete(E),
      b.delete(E),
      se.delete(E),
      p.fetchers.delete(E);
  }
  function Yt(E) {
    if (u.v7_fetcherPersist) {
      let R = (J.get(E) || 0) - 1;
      R <= 0 ? (J.delete(E), se.add(E)) : J.set(E, R);
    } else Dt(E);
    ee({ fetchers: new Map(p.fetchers) });
  }
  function at(E) {
    let R = q.get(E);
    re(R, "Expected fetch controller: " + E), R.abort(), q.delete(E);
  }
  function Xt(E) {
    for (let R of E) {
      let P = Kt(R),
        M = Tn(P.data);
      p.fetchers.set(R, M);
    }
  }
  function sn() {
    let E = [],
      R = !1;
    for (let P of b) {
      let M = p.fetchers.get(P);
      re(M, "Expected fetcher: " + P),
        M.state === "loading" && (b.delete(P), E.push(P), (R = !0));
    }
    return Xt(E), R;
  }
  function Rn(E) {
    let R = [];
    for (let [P, M] of D)
      if (M < E) {
        let V = p.fetchers.get(P);
        re(V, "Expected fetcher: " + P),
          V.state === "loading" && (at(P), D.delete(P), R.push(P));
      }
    return Xt(R), R.length > 0;
  }
  function _n(E, R) {
    let P = p.blockers.get(E) || _o;
    return X.get(E) !== R && X.set(E, R), P;
  }
  function Pn(E) {
    p.blockers.delete(E), X.delete(E);
  }
  function Qe(E, R) {
    let P = p.blockers.get(E) || _o;
    re(
      (P.state === "unblocked" && R.state === "blocked") ||
        (P.state === "blocked" && R.state === "blocked") ||
        (P.state === "blocked" && R.state === "proceeding") ||
        (P.state === "blocked" && R.state === "unblocked") ||
        (P.state === "proceeding" && R.state === "unblocked"),
      "Invalid blocker state transition: " + P.state + " -> " + R.state,
    );
    let M = new Map(p.blockers);
    M.set(E, R), ee({ blockers: M });
  }
  function Ee(E) {
    let { currentLocation: R, nextLocation: P, historyAction: M } = E;
    if (X.size === 0) return;
    X.size > 1 && wr(!1, "A router only supports one blocker at a time");
    let V = Array.from(X.entries()),
      [j, z] = V[V.length - 1],
      W = p.blockers.get(j);
    if (
      !(W && W.state === "proceeding") &&
      z({ currentLocation: R, nextLocation: P, historyAction: M })
    )
      return j;
  }
  function jn(E) {
    let R = [];
    return (
      K.forEach((P, M) => {
        (!E || E(M)) && (P.cancel(), R.push(M), K.delete(M));
      }),
      R
    );
  }
  function nr(E, R, P) {
    if (((m = E), (w = R), (y = P || null), !g && p.navigation === Gs)) {
      g = !0;
      let M = un(p.location, p.matches);
      M != null && ee({ restoreScrollPosition: M });
    }
    return () => {
      (m = null), (w = null), (y = null);
    };
  }
  function an(E, R) {
    return (
      (y &&
        y(
          E,
          R.map((M) => Zg(M, p.loaderData)),
        )) ||
      E.key
    );
  }
  function rr(E, R) {
    if (m && w) {
      let P = an(E, R);
      m[P] = w();
    }
  }
  function un(E, R) {
    if (m) {
      let P = an(E, R),
        M = m[P];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function Nn(E) {
    (l = {}), (s = Ya(E, o, void 0, l));
  }
  return (
    (v = {
      get basename() {
        return a;
      },
      get state() {
        return p;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: je,
      subscribe: mt,
      enableScrollRestoration: nr,
      navigate: st,
      fetch: on,
      revalidate: Ht,
      createHref: (E) => e.history.createHref(E),
      encodeLocation: (E) => e.history.encodeLocation(E),
      getFetcher: Kt,
      deleteFetcher: Yt,
      dispose: me,
      getBlocker: _n,
      deleteBlocker: Pn,
      _internalFetchControllers: q,
      _internalActiveDeferreds: K,
      _internalSetRoutes: Nn,
    }),
    v
  );
}
function R0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Xa(e, t, n, r, o, l, i) {
  let s, a;
  if (l != null && i !== "path") {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === l)) {
        a = c;
        break;
      }
  } else (s = t), (a = t[t.length - 1]);
  let u = lc(
    o || ".",
    ms(s).map((c) => c.pathnameBase),
    po(e.pathname, n) || e.pathname,
    i === "path",
  );
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      a &&
      a.route.index &&
      !sc(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : mn([n, u.pathname])),
    Sr(u)
  );
}
function $f(e, t, n, r) {
  if (!r || !R0(r)) return { path: n };
  if (r.formMethod && !O0(r.formMethod))
    return { path: n, error: kt(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: kt(400, { type: "invalid-body" }) }),
    l = r.formMethod || "get",
    i = e ? l.toUpperCase() : l.toLowerCase(),
    s = Yh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Ft(i)) return o();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((y, w) => {
                let [g, C] = w;
                return (
                  "" +
                  y +
                  g +
                  "=" +
                  C +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Ft(i)) return o();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  re(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let a, u;
  if (r.formData) (a = Ga(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (a = Ga(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (u = Ff(a));
  else if (r.body == null) (a = new URLSearchParams()), (u = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (u = Ff(a));
    } catch {
      return o();
    }
  let c = {
    formMethod: i,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Ft(c.formMethod)) return { path: n, submission: c };
  let h = xn(n);
  return (
    t && h.search && sc(h.search) && a.append("index", ""),
    (h.search = "?" + a),
    { path: Sr(h), submission: c }
  );
}
function _0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Af(e, t, n, r, o, l, i, s, a, u, c, h, m, y) {
  let w = y ? Object.values(y)[0] : m ? Object.values(m)[0] : void 0,
    g = e.createURL(t.location),
    C = e.createURL(o),
    d = y ? Object.keys(y)[0] : void 0,
    v = _0(n, d).filter((k, L) => {
      if (k.route.lazy) return !0;
      if (k.route.loader == null) return !1;
      if (P0(t.loaderData, t.matches[L], k) || i.some(($) => $ === k.route.id))
        return !0;
      let _ = t.matches[L],
        T = k;
      return zf(
        k,
        Pe(
          {
            currentUrl: g,
            currentParams: _.params,
            nextUrl: C,
            nextParams: T.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              l ||
              g.pathname + g.search === C.pathname + C.search ||
              g.search !== C.search ||
              Qh(_, T),
          },
        ),
      );
    }),
    p = [];
  return (
    a.forEach((k, L) => {
      if (!n.some((Q) => Q.route.id === k.routeId)) return;
      let _ = Wr(c, k.path, h);
      if (!_) {
        p.push({
          key: L,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(L),
        $ = Za(_, k.path),
        U = !1;
      u.has(L)
        ? (U = !1)
        : s.includes(L)
          ? (U = !0)
          : T && T.state !== "idle" && T.data === void 0
            ? (U = l)
            : (U = zf(
                $,
                Pe(
                  {
                    currentUrl: g,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: C,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: w, defaultShouldRevalidate: l },
                ),
              )),
        U &&
          p.push({
            key: L,
            routeId: k.routeId,
            path: k.path,
            matches: _,
            match: $,
            controller: new AbortController(),
          });
    }),
    [v, p]
  );
}
function P0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Qh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function zf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function If(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  re(o, "No route found in manifest");
  let l = {};
  for (let i in r) {
    let a = o[i] !== void 0 && i !== "hasErrorBoundary";
    wr(
      !a,
      'Route "' +
        o.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !a && !Xg.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, Pe({}, t(o), { lazy: void 0 }));
}
async function Po(e, t, n, r, o, l, i, s) {
  s === void 0 && (s = {});
  let a,
    u,
    c,
    h = (w) => {
      let g,
        C = new Promise((d, f) => (g = f));
      return (
        (c = () => g()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          w({ request: t, params: n.params, context: s.requestContext }),
          C,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let g,
          C = await Promise.all([
            h(w).catch((d) => {
              g = d;
            }),
            If(n.route, l, o),
          ]);
        if (g) throw g;
        u = C[0];
      } else if ((await If(n.route, l, o), (w = n.route[e]), w)) u = await h(w);
      else if (e === "action") {
        let g = new URL(t.url),
          C = g.pathname + g.search;
        throw kt(405, { method: t.method, pathname: C, routeId: n.route.id });
      } else return { type: Oe.data, data: void 0 };
    else if (w) u = await h(w);
    else {
      let g = new URL(t.url),
        C = g.pathname + g.search;
      throw kt(404, { pathname: C });
    }
    re(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (w) {
    (a = Oe.error), (u = w);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (T0(u)) {
    let w = u.status;
    if (S0.has(w)) {
      let d = u.headers.get("Location");
      if (
        (re(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !Hh.test(d))
      )
        d = Xa(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!s.isStaticRequest) {
        let f = new URL(t.url),
          v = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          p = po(v.pathname, i) != null;
        v.origin === f.origin && p && (d = v.pathname + v.search + v.hash);
      }
      if (s.isStaticRequest) throw (u.headers.set("Location", d), u);
      return {
        type: Oe.redirect,
        status: w,
        location: d,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (s.isRouteRequest)
      throw { type: a === Oe.error ? Oe.error : Oe.data, response: u };
    let g,
      C = u.headers.get("Content-Type");
    return (
      C && /\bapplication\/json\b/.test(C)
        ? (g = await u.json())
        : (g = await u.text()),
      a === Oe.error
        ? { type: a, error: new ic(w, u.statusText, g), headers: u.headers }
        : { type: Oe.data, data: g, statusCode: u.status, headers: u.headers }
    );
  }
  if (a === Oe.error) return { type: a, error: u };
  if (L0(u)) {
    var m, y;
    return {
      type: Oe.deferred,
      deferredData: u,
      statusCode: (m = u.init) == null ? void 0 : m.status,
      headers:
        ((y = u.init) == null ? void 0 : y.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: Oe.data, data: u };
}
function jo(e, t, n, r) {
  let o = e.createURL(Yh(t)).toString(),
    l = { signal: n };
  if (r && Ft(r.formMethod)) {
    let { formMethod: i, formEncType: s } = r;
    (l.method = i.toUpperCase()),
      s === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": s })),
          (l.body = JSON.stringify(r.json)))
        : s === "text/plain"
          ? (l.body = r.text)
          : s === "application/x-www-form-urlencoded" && r.formData
            ? (l.body = Ga(r.formData))
            : (l.body = r.formData);
  }
  return new Request(o, l);
}
function Ga(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ff(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function j0(e, t, n, r, o) {
  let l = {},
    i = null,
    s,
    a = !1,
    u = {};
  return (
    n.forEach((c, h) => {
      let m = t[h].route.id;
      if (
        (re(!Zr(c), "Cannot handle redirect results in processLoaderData"),
        Wo(c))
      ) {
        let y = Vo(e, m),
          w = c.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[y.route.id] == null && (i[y.route.id] = w),
          (l[m] = void 0),
          a || ((a = !0), (s = Vh(c.error) ? c.error.status : 500)),
          c.headers && (u[m] = c.headers);
      } else
        ur(c)
          ? (o.set(m, c.deferredData), (l[m] = c.deferredData.data))
          : (l[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (s = c.statusCode),
          c.headers && (u[m] = c.headers);
    }),
    r && ((i = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: s || 200, loaderHeaders: u }
  );
}
function Uf(e, t, n, r, o, l, i, s) {
  let { loaderData: a, errors: u } = j0(t, n, r, o, s);
  for (let c = 0; c < l.length; c++) {
    let { key: h, match: m, controller: y } = l[c];
    re(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let w = i[c];
    if (!(y && y.signal.aborted))
      if (Wo(w)) {
        let g = Vo(e.matches, m == null ? void 0 : m.route.id);
        (u && u[g.route.id]) || (u = Pe({}, u, { [g.route.id]: w.error })),
          e.fetchers.delete(h);
      } else if (Zr(w)) re(!1, "Unhandled fetcher revalidation redirect");
      else if (ur(w)) re(!1, "Unhandled fetcher deferred data");
      else {
        let g = Tn(w.data);
        e.fetchers.set(h, g);
      }
  }
  return { loaderData: a, errors: u };
}
function Bf(e, t, n, r) {
  let o = Pe({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (o[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return o;
}
function Vo(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function bf(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function kt(e, t) {
  let { pathname: n, routeId: r, method: o, type: l } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        o && n && r
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l === "defer-action"
            ? (s = "defer() is not supported in actions")
            : l === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            o && n && r
              ? (s =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new ic(e || 500, i, new Error(s), !0)
  );
}
function Vf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Zr(n)) return { result: n, idx: t };
  }
}
function Yh(e) {
  let t = typeof e == "string" ? xn(e) : e;
  return Sr(Pe({}, t, { hash: "" }));
}
function N0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function ur(e) {
  return e.type === Oe.deferred;
}
function Wo(e) {
  return e.type === Oe.error;
}
function Zr(e) {
  return (e && e.type) === Oe.redirect;
}
function L0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function T0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function O0(e) {
  return w0.has(e.toLowerCase());
}
function Ft(e) {
  return y0.has(e.toLowerCase());
}
async function Wf(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
    let s = n[i],
      a = t[i];
    if (!a) continue;
    let u = e.find((h) => h.route.id === a.route.id),
      c = u != null && !Qh(u, a) && (l && l[a.route.id]) !== void 0;
    if (ur(s) && (o || c)) {
      let h = r[i];
      re(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Xh(s, h, o).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Xh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Oe.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Oe.error, error: o };
      }
    return { type: Oe.data, data: e.deferredData.data };
  }
}
function sc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Za(e, t) {
  let n = typeof t == "string" ? xn(t).search : t.search;
  if (e[e.length - 1].route.index && sc(n || "")) return e[e.length - 1];
  let r = ms(e);
  return r[r.length - 1];
}
function Hf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Zs(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function M0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function No(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function D0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Tn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function $0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Kh);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, l] of Object.entries(r || {}))
        l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {}
}
function A0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Kh, JSON.stringify(n));
    } catch (r) {
      wr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ci() {
  return (
    (Ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ci.apply(this, arguments)
  );
}
const vs = x.createContext(null),
  Gh = x.createContext(null),
  ho = x.createContext(null),
  ys = x.createContext(null),
  En = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Zh = x.createContext(null);
function z0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  yl() || re(!1);
  let { basename: r, navigator: o } = x.useContext(ho),
    { hash: l, pathname: i, search: s } = Jh(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : mn([r, i])),
    o.createHref({ pathname: a, search: s, hash: l })
  );
}
function yl() {
  return x.useContext(ys) != null;
}
function gs() {
  return yl() || re(!1), x.useContext(ys).location;
}
function qh(e) {
  x.useContext(ho).static || x.useLayoutEffect(e);
}
function mo() {
  let { isDataRoute: e } = x.useContext(En);
  return e ? Z0() : I0();
}
function I0() {
  yl() || re(!1);
  let e = x.useContext(vs),
    { basename: t, navigator: n } = x.useContext(ho),
    { matches: r } = x.useContext(En),
    { pathname: o } = gs(),
    l = JSON.stringify(ms(r).map((a) => a.pathnameBase)),
    i = x.useRef(!1);
  return (
    qh(() => {
      i.current = !0;
    }),
    x.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let c = lc(a, JSON.parse(l), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : mn([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, l, o, e],
    )
  );
}
const F0 = x.createContext(null);
function U0(e) {
  let t = x.useContext(En).outlet;
  return t && x.createElement(F0.Provider, { value: e }, t);
}
function ac() {
  let { matches: e } = x.useContext(En),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Jh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(En),
    { pathname: o } = gs(),
    l = JSON.stringify(ms(r).map((i) => i.pathnameBase));
  return x.useMemo(() => lc(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function B0(e, t, n) {
  yl() || re(!1);
  let { navigator: r } = x.useContext(ho),
    { matches: o } = x.useContext(En),
    l = o[o.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let a = gs(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? xn(t) : t;
    s === "/" || ((c = g.pathname) != null && c.startsWith(s)) || re(!1),
      (u = g);
  } else u = a;
  let h = u.pathname || "/",
    m = s === "/" ? h : h.slice(s.length) || "/",
    y = Wr(e, { pathname: m }),
    w = K0(
      y &&
        y.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: mn([
              s,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? s
                : mn([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
    );
  return t && w
    ? x.createElement(
        ys.Provider,
        {
          value: {
            location: Ci(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u,
            ),
            navigationType: Te.Pop,
          },
        },
        w,
      )
    : w;
}
function b0() {
  let e = G0(),
    t = Vh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    l,
  );
}
const V0 = x.createElement(b0, null);
class W0 extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          En.Provider,
          { value: this.props.routeContext },
          x.createElement(Zh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function H0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(vs);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(En.Provider, { value: t }, r)
  );
}
function K0(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let s = l.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id]),
    );
    s >= 0 || re(!1), (l = l.slice(0, Math.min(l.length, s + 1)));
  }
  return l.reduceRight((s, a, u) => {
    let c = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      h = null;
    n && (h = a.route.errorElement || V0);
    let m = t.concat(l.slice(0, u + 1)),
      y = () => {
        let w;
        return (
          c
            ? (w = h)
            : a.route.Component
              ? (w = x.createElement(a.route.Component, null))
              : a.route.element
                ? (w = a.route.element)
                : (w = s),
          x.createElement(H0, {
            match: a,
            routeContext: { outlet: s, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? x.createElement(W0, {
          location: n.location,
          revalidation: n.revalidation,
          component: h,
          error: c,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var em = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(em || {}),
  ki = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ki || {});
function Q0(e) {
  let t = x.useContext(vs);
  return t || re(!1), t;
}
function Y0(e) {
  let t = x.useContext(Gh);
  return t || re(!1), t;
}
function X0(e) {
  let t = x.useContext(En);
  return t || re(!1), t;
}
function tm(e) {
  let t = X0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || re(!1), n.route.id;
}
function G0() {
  var e;
  let t = x.useContext(Zh),
    n = Y0(ki.UseRouteError),
    r = tm(ki.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Z0() {
  let { router: e } = Q0(em.UseNavigateStable),
    t = tm(ki.UseNavigateStable),
    n = x.useRef(!1);
  return (
    qh(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ci({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function q0(e) {
  return U0(e.context);
}
function J0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Te.Pop,
    navigator: l,
    static: i = !1,
  } = e;
  yl() && re(!1);
  let s = t.replace(/^\/*/, "/"),
    a = x.useMemo(() => ({ basename: s, navigator: l, static: i }), [s, l, i]);
  typeof r == "string" && (r = xn(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: h = "",
      state: m = null,
      key: y = "default",
    } = r,
    w = x.useMemo(() => {
      let g = po(u, s);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: h, state: m, key: y },
            navigationType: o,
          };
    }, [s, u, c, h, m, y, o]);
  return w == null
    ? null
    : x.createElement(
        ho.Provider,
        { value: a },
        x.createElement(ys.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
function e1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: x.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: x.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ul.apply(this, arguments)
  );
}
function t1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function n1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function r1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !n1(e);
}
const o1 = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
  "unstable_viewTransition",
];
function l1(e, t) {
  return k0({
    basename: t == null ? void 0 : t.basename,
    future: ul({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Kg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || i1(),
    routes: e,
    mapRouteProperties: e1,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function i1() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ul({}, t, { errors: s1(t.errors) })), t;
}
function s1(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new ic(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let i = new l(o.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        (l.stack = ""), (n[r] = l);
      }
    } else n[r] = o;
  return n;
}
const a1 = x.createContext({ isTransitioning: !1 }),
  u1 = x.createContext(new Map()),
  c1 = "startTransition",
  Kf = Hm[c1];
function f1(e) {
  Kf ? Kf(e) : e();
}
class d1 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function p1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, l] = x.useState(n.state),
    [i, s] = x.useState(),
    [a, u] = x.useState({ isTransitioning: !1 }),
    [c, h] = x.useState(),
    [m, y] = x.useState(),
    [w, g] = x.useState(),
    C = x.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = x.useCallback(
      (_) => {
        d ? f1(_) : _();
      },
      [d],
    ),
    v = x.useCallback(
      (_, T) => {
        let { deletedFetchers: $, unstable_viewTransitionOpts: U } = T;
        $.forEach((Q) => C.current.delete(Q)),
          _.fetchers.forEach((Q, Z) => {
            Q.data !== void 0 && C.current.set(Z, Q.data);
          }),
          !U ||
          n.window == null ||
          typeof n.window.document.startViewTransition != "function"
            ? f(() => l(_))
            : m && c
              ? (c.resolve(),
                m.skipTransition(),
                g({
                  state: _,
                  currentLocation: U.currentLocation,
                  nextLocation: U.nextLocation,
                }))
              : (s(_),
                u({
                  isTransitioning: !0,
                  currentLocation: U.currentLocation,
                  nextLocation: U.nextLocation,
                }));
      },
      [n.window, m, c, C, f],
    );
  x.useLayoutEffect(() => n.subscribe(v), [n, v]),
    x.useEffect(() => {
      a.isTransitioning && h(new d1());
    }, [a.isTransitioning]),
    x.useEffect(() => {
      if (c && i && n.window) {
        let _ = i,
          T = c.promise,
          $ = n.window.document.startViewTransition(async () => {
            f(() => l(_)), await T;
          });
        $.finished.finally(() => {
          h(void 0), y(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          y($);
      }
    }, [f, i, c, n.window]),
    x.useEffect(() => {
      c && i && o.location.key === i.location.key && c.resolve();
    }, [c, m, o.location, i]),
    x.useEffect(() => {
      !a.isTransitioning &&
        w &&
        (s(w.state),
        u({
          isTransitioning: !0,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        g(void 0));
    }, [a.isTransitioning, w]);
  let p = x.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (_) => n.navigate(_),
        push: (_, T, $) =>
          n.navigate(_, {
            state: T,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
        replace: (_, T, $) =>
          n.navigate(_, {
            replace: !0,
            state: T,
            preventScrollReset: $ == null ? void 0 : $.preventScrollReset,
          }),
      }),
      [n],
    ),
    k = n.basename || "/",
    L = x.useMemo(
      () => ({ router: n, navigator: p, static: !1, basename: k }),
      [n, p, k],
    );
  return x.createElement(
    x.Fragment,
    null,
    x.createElement(
      vs.Provider,
      { value: L },
      x.createElement(
        Gh.Provider,
        { value: o },
        x.createElement(
          u1.Provider,
          { value: C.current },
          x.createElement(
            a1.Provider,
            { value: a },
            x.createElement(
              J0,
              {
                basename: k,
                location: o.location,
                navigationType: o.historyAction,
                navigator: p,
              },
              o.initialized
                ? x.createElement(h1, { routes: n.routes, state: o })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function h1(e) {
  let { routes: t, state: n } = e;
  return B0(t, void 0, n);
}
const m1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  v1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  y1 = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: s,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: h,
      } = t,
      m = t1(t, o1),
      { basename: y } = x.useContext(ho),
      w,
      g = !1;
    if (typeof u == "string" && v1.test(u) && ((w = u), m1))
      try {
        let v = new URL(window.location.href),
          p = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
          k = po(p.pathname, y);
        p.origin === v.origin && k != null
          ? (u = k + p.search + p.hash)
          : (g = !0);
      } catch {}
    let C = z0(u, { relative: o }),
      d = g1(u, {
        replace: i,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: h,
      });
    function f(v) {
      r && r(v), v.defaultPrevented || d(v);
    }
    return x.createElement(
      "a",
      ul({}, m, { href: w || C, onClick: g || l ? r : f, ref: n, target: a }),
    );
  });
var Qf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Qf || (Qf = {}));
var Yf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yf || (Yf = {}));
function g1(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = mo(),
    u = gs(),
    c = Jh(e, { relative: i });
  return x.useCallback(
    (h) => {
      if (r1(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : Sr(u) === Sr(c);
        a(e, {
          replace: m,
          state: o,
          preventScrollReset: l,
          relative: i,
          unstable_viewTransition: s,
        });
      }
    },
    [u, a, c, r, o, n, e, l, i, s],
  );
}
/*! js-cookie v3.0.5 | MIT */ function Fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var w1 = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    );
  },
};
function qa(e, t) {
  function n(o, l, i) {
    if (!(typeof document > "u")) {
      (i = Fl({}, t, i)),
        typeof i.expires == "number" &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (o = encodeURIComponent(o)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var s = "";
      for (var a in i)
        i[a] &&
          ((s += "; " + a), i[a] !== !0 && (s += "=" + i[a].split(";")[0]));
      return (document.cookie = o + "=" + e.write(l, o) + s);
    }
  }
  function r(o) {
    if (!(typeof document > "u" || (arguments.length && !o))) {
      for (
        var l = document.cookie ? document.cookie.split("; ") : [],
          i = {},
          s = 0;
        s < l.length;
        s++
      ) {
        var a = l[s].split("="),
          u = a.slice(1).join("=");
        try {
          var c = decodeURIComponent(a[0]);
          if (((i[c] = e.read(u, c)), o === c)) break;
        } catch {}
      }
      return o ? i[o] : i;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (o, l) {
        n(o, "", Fl({}, l, { expires: -1 }));
      },
      withAttributes: function (o) {
        return qa(this.converter, Fl({}, this.attributes, o));
      },
      withConverter: function (o) {
        return qa(Fl({}, this.converter, o), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  );
}
var S1 = qa(w1, { path: "/" });
async function rt(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = S1.get("XSRF-TOKEN")));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const nm = "session/setUser",
  rm = "session/removeUser",
  uc = (e) => ({ type: nm, payload: e }),
  x1 = () => ({ type: rm }),
  Xf =
    ({ credential: e, password: t }) =>
    async (n) => {
      const r = await rt("/api/session", {
          method: "POST",
          body: JSON.stringify({ credential: e, password: t }),
        }),
        o = await r.json();
      return n(uc(o.user)), r;
    },
  E1 = () => async (e) => {
    const t = await rt("/api/session"),
      n = await t.json();
    return e(uc(n.user)), t;
  },
  C1 = (e) => async (t) => {
    const { username: n, firstName: r, lastName: o, email: l, password: i } = e,
      s = await rt("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: o,
          email: l,
          password: i,
        }),
      }),
      a = await s.json();
    return t(uc(a.user)), s;
  },
  k1 = () => async (e) => {
    const t = await rt("/api/session", { method: "DELETE" });
    return e(x1()), t;
  },
  R1 = { user: null };
function _1(e = R1, t) {
  switch (t.type) {
    case nm:
      return { ...e, user: t.payload };
    case rm:
      return { ...e, user: null };
    default:
      return e;
  }
}
const cc = x.createContext();
function P1({ children: e }) {
  const t = x.useRef(),
    [n, r] = x.useState(null),
    [o, l] = x.useState(null),
    s = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: l,
      closeModal: () => {
        r(null), typeof o == "function" && (l(null), o());
      },
    };
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(cc.Provider, { value: s, children: e }),
      S.jsx("div", { ref: t }),
    ],
  });
}
function j1() {
  const { modalRef: e, modalContent: t, closeModal: n } = x.useContext(cc);
  return !e || !e.current || !t
    ? null
    : tg.createPortal(
        S.jsxs("div", {
          id: "modal",
          children: [
            S.jsx("div", { id: "modal-background", onClick: n }),
            S.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current,
      );
}
const er = () => x.useContext(cc);
var om = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Gf = Je.createContext && Je.createContext(om),
  N1 = ["attr", "size", "title"];
function L1(e, t) {
  if (e == null) return {};
  var n = T1(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      (r = l[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function T1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
function Zf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zf(Object(n), !0).forEach(function (r) {
          O1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zf(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function O1(e, t, n) {
  return (
    (t = M1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function M1(e) {
  var t = D1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function D1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lm(e) {
  return (
    e &&
    e.map((t, n) =>
      Je.createElement(t.tag, _i({ key: n }, t.attr), lm(t.child)),
    )
  );
}
function ws(e) {
  return (t) =>
    Je.createElement($1, Ri({ attr: _i({}, e.attr) }, t), lm(e.child));
}
function $1(e) {
  var t = (n) => {
    var { attr: r, size: o, title: l } = e,
      i = L1(e, N1),
      s = o || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Je.createElement(
        "svg",
        Ri(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: a,
            style: _i(_i({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        l && Je.createElement("title", null, l),
        e.children,
      )
    );
  };
  return Gf !== void 0
    ? Je.createElement(Gf.Consumer, null, (n) => t(n))
    : t(om);
}
function A1(e) {
  return ws({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function Pi(e) {
  return ws({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function z1(e) {
  return ws({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z",
        },
        child: [],
      },
    ],
  })(e);
}
function I1(e) {
  return ws({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z",
        },
        child: [],
      },
    ],
  })(e);
}
function qf({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: o, setOnModalClose: l } = er(),
    i = () => {
      r && l(r), o(e), typeof n == "function" && n();
    };
  return S.jsx("div", { className: "clickable", onClick: i, children: t });
}
function F1() {
  const e = rn(),
    [t, n] = x.useState(""),
    [r, o] = x.useState(""),
    [l, i] = x.useState({}),
    { closeModal: s } = er(),
    [a, u] = x.useState(!1);
  x.useEffect(() => {
    u(t.length > 3 && r.length > 5);
  }, [t, r]);
  const c = (m) => (
      m.preventDefault(),
      i({}),
      e(Xf({ credential: t, password: r }))
        .then(s)
        .catch(async (y) => {
          const w = await y.json();
          i({
            ...w.errors,
            credential: "The provided credentials were invalid",
          });
        })
    ),
    h = () => (
      n("elonmusk"),
      o("Mars2024!"),
      i({}),
      e(Xf({ credential: t, password: r })).then(s)
    );
  return S.jsxs("form", {
    id: "login-form-modal",
    onSubmit: c,
    children: [
      S.jsx("h1", { children: "Log In" }),
      l.credential &&
        S.jsx("p", { className: "error", children: l.credential }),
      S.jsx("input", {
        type: "text",
        value: t,
        placeholder: "Username or Email",
        onChange: (m) => n(m.target.value),
        required: !0,
      }),
      S.jsx("input", {
        type: "password",
        value: r,
        placeholder: "Password",
        onChange: (m) => o(m.target.value),
        required: !0,
      }),
      S.jsx("button", {
        id: "login",
        disabled: !a,
        type: "submit",
        children: "Log In",
      }),
      S.jsx("p", { id: "or", children: "or" }),
      S.jsx("button", { onClick: h, children: "Log in as Demo User" }),
    ],
  });
}
function U1() {
  const e = rn(),
    [t, n] = x.useState(""),
    [r, o] = x.useState(""),
    [l, i] = x.useState(""),
    [s, a] = x.useState(""),
    [u, c] = x.useState(""),
    [h, m] = x.useState(""),
    [y, w] = x.useState({}),
    { closeModal: g } = er(),
    [C, d] = x.useState(!1);
  x.useEffect(() => {
    d(
      r.length > 3 &&
        u.length > 5 &&
        h.length > 5 &&
        t.length &&
        l.length &&
        s.length,
    );
  }, [t, r, l, s, u, h]);
  const f = (v) => (
    v.preventDefault(),
    u === h
      ? (w({}),
        e(C1({ email: t, username: r, firstName: l, lastName: s, password: u }))
          .then(g)
          .catch(async (p) => {
            const k = await p.json();
            k != null && k.errors && w(k.errors);
          }))
      : w({
          confirmPassword:
            "Confirm Password field must be the same as the Password field",
        })
  );
  return S.jsxs("form", {
    id: "signup-form",
    onSubmit: f,
    children: [
      S.jsx("h1", { children: "Sign Up" }),
      S.jsx("input", {
        type: "text",
        value: t,
        placeholder: "Email",
        onChange: (v) => n(v.target.value),
        required: !0,
      }),
      y.email && S.jsx("p", { className: "error", children: y.email }),
      S.jsx("input", {
        type: "text",
        value: r,
        placeholder: "Username",
        onChange: (v) => o(v.target.value),
        required: !0,
      }),
      y.username && S.jsx("p", { className: "error", children: y.username }),
      S.jsx("input", {
        type: "text",
        value: l,
        placeholder: "First Name",
        onChange: (v) => i(v.target.value),
        required: !0,
      }),
      y.firstName && S.jsx("p", { className: "error", children: y.firstName }),
      S.jsx("input", {
        type: "text",
        value: s,
        placeholder: "Last Name",
        onChange: (v) => a(v.target.value),
        required: !0,
      }),
      y.lastName && S.jsx("p", { className: "error", children: y.lastName }),
      S.jsx("input", {
        type: "password",
        value: u,
        placeholder: "Password",
        onChange: (v) => c(v.target.value),
        required: !0,
      }),
      y.password && S.jsx("p", { className: "error", children: y.password }),
      S.jsx("input", {
        type: "password",
        value: h,
        placeholder: "Confirm Password",
        onChange: (v) => m(v.target.value),
        required: !0,
      }),
      y.confirmPassword &&
        S.jsx("p", { className: "error", children: y.confirmPassword }),
      S.jsx("button", { disabled: !C, type: "submit", children: "Sign Up" }),
    ],
  });
}
function B1({ user: e }) {
  const t = mo(),
    n = rn(),
    [r, o] = x.useState(!1),
    l = x.useRef(),
    i = (c) => {
      c.stopPropagation(), o(!r);
    };
  x.useEffect(() => {
    if (!r) return;
    const c = (h) => {
      l.current && !l.current.contains(h.target) && o(!1);
    };
    return (
      document.addEventListener("click", c),
      () => document.removeEventListener("click", c)
    );
  }, [r]);
  const s = () => o(!1),
    a = (c) => {
      c.preventDefault(), n(k1()), s(), t("/");
    },
    u = "profile-dropdown" + (r ? "" : " hidden");
  return S.jsxs("div", {
    children: [
      S.jsxs("button", {
        className: "profile-button clickable",
        onClick: i,
        children: [S.jsx(A1, {}), S.jsx(z1, {})],
      }),
      S.jsx("div", {
        className: u,
        ref: l,
        children: e
          ? S.jsxs(S.Fragment, {
              children: [
                S.jsxs("div", { children: ["Hello, ", e.firstName] }),
                S.jsx("div", { children: e.email }),
                S.jsx("div", {
                  id: "manage-spots-button",
                  className: "clickable",
                  onClick: () => t("/spots/current"),
                  children: "Manage Spots",
                }),
                S.jsx("div", {
                  children: S.jsx("button", {
                    id: "logout-button",
                    onClick: a,
                    children: "Log Out",
                  }),
                }),
              ],
            })
          : S.jsxs(S.Fragment, {
              children: [
                S.jsx(qf, {
                  itemText: "Log In",
                  onItemClick: s,
                  modalComponent: S.jsx(F1, {}),
                }),
                S.jsx(qf, {
                  itemText: "Sign Up",
                  onItemClick: s,
                  modalComponent: S.jsx(U1, {}),
                }),
              ],
            }),
      }),
    ],
  });
}
function b1({ isLoaded: e }) {
  const t = dr((o) => o.session.user),
    n = mo(),
    r = () =>
      S.jsx("button", {
        className: "clickable",
        onClick: () => n("/spots/new"),
        id: "create-spot",
        children: "Create a New Spot",
      });
  return S.jsxs("nav", {
    id: "navigation",
    children: [
      S.jsx("img", {
        src: "/logo.png",
        className: "clickable",
        id: "logo",
        alt: "Airbnb Logo",
        onClick: () => n("/"),
      }),
      S.jsxs("div", {
        id: "right-container",
        children: [t && S.jsx(r, {}), e && S.jsx(B1, { user: t })],
      }),
    ],
  });
}
const so = Math.min,
  pr = Math.max,
  ji = Math.round,
  Ul = Math.floor,
  Xn = (e) => ({ x: e, y: e }),
  V1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  W1 = { start: "end", end: "start" };
function Ja(e, t, n) {
  return pr(e, so(t, n));
}
function gl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xr(e) {
  return e.split("-")[0];
}
function wl(e) {
  return e.split("-")[1];
}
function im(e) {
  return e === "x" ? "y" : "x";
}
function fc(e) {
  return e === "y" ? "height" : "width";
}
function Ss(e) {
  return ["top", "bottom"].includes(xr(e)) ? "y" : "x";
}
function dc(e) {
  return im(Ss(e));
}
function H1(e, t, n) {
  n === void 0 && (n = !1);
  const r = wl(e),
    o = dc(e),
    l = fc(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return t.reference[l] > t.floating[l] && (i = Ni(i)), [i, Ni(i)];
}
function K1(e) {
  const t = Ni(e);
  return [eu(e), t, eu(t)];
}
function eu(e) {
  return e.replace(/start|end/g, (t) => W1[t]);
}
function Q1(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    l = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? l : i;
    default:
      return [];
  }
}
function Y1(e, t, n, r) {
  const o = wl(e);
  let l = Q1(xr(e), n === "start", r);
  return (
    o && ((l = l.map((i) => i + "-" + o)), t && (l = l.concat(l.map(eu)))), l
  );
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => V1[t]);
}
function X1(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function sm(e) {
  return typeof e != "number"
    ? X1(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Li(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Jf(e, t, n) {
  let { reference: r, floating: o } = e;
  const l = Ss(t),
    i = dc(t),
    s = fc(i),
    a = xr(t),
    u = l === "y",
    c = r.x + r.width / 2 - o.width / 2,
    h = r.y + r.height / 2 - o.height / 2,
    m = r[s] / 2 - o[s] / 2;
  let y;
  switch (a) {
    case "top":
      y = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      y = { x: c, y: r.y + r.height };
      break;
    case "right":
      y = { x: r.x + r.width, y: h };
      break;
    case "left":
      y = { x: r.x - o.width, y: h };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (wl(t)) {
    case "start":
      y[i] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      y[i] += m * (n && u ? -1 : 1);
      break;
  }
  return y;
}
const G1 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: l = [],
      platform: i,
    } = n,
    s = l.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: h } = Jf(u, r, a),
    m = r,
    y = {},
    w = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: C, fn: d } = s[g],
      {
        x: f,
        y: v,
        data: p,
        reset: k,
      } = await d({
        x: c,
        y: h,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: y,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (c = f ?? c),
      (h = v ?? h),
      (y = { ...y, [C]: { ...y[C], ...p } }),
      k &&
        w <= 50 &&
        (w++,
        typeof k == "object" &&
          (k.placement && (m = k.placement),
          k.rects &&
            (u =
              k.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : k.rects),
          ({ x: c, y: h } = Jf(u, m, a))),
        (g = -1));
  }
  return { x: c, y: h, placement: m, strategy: o, middlewareData: y };
};
async function am(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: l, rects: i, elements: s, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: h = "floating",
      altBoundary: m = !1,
      padding: y = 0,
    } = gl(t, e),
    w = sm(y),
    C = s[m ? (h === "floating" ? "reference" : "floating") : h],
    d = Li(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(C))) == null ||
          n
            ? C
            : C.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      }),
    ),
    f =
      h === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(s.floating)),
    p = (await (l.isElement == null ? void 0 : l.isElement(v)))
      ? (await (l.getScale == null ? void 0 : l.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = Li(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: f,
            offsetParent: v,
            strategy: a,
          })
        : f,
    );
  return {
    top: (d.top - k.top + w.top) / p.y,
    bottom: (k.bottom - d.bottom + w.bottom) / p.y,
    left: (d.left - k.left + w.left) / p.x,
    right: (k.right - d.right + w.right) / p.x,
  };
}
const Z1 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: l,
          platform: i,
          elements: s,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = gl(e, t) || {};
      if (u == null) return {};
      const h = sm(c),
        m = { x: n, y: r },
        y = dc(o),
        w = fc(y),
        g = await i.getDimensions(u),
        C = y === "y",
        d = C ? "top" : "left",
        f = C ? "bottom" : "right",
        v = C ? "clientHeight" : "clientWidth",
        p = l.reference[w] + l.reference[y] - m[y] - l.floating[w],
        k = m[y] - l.reference[y],
        L = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let _ = L ? L[v] : 0;
      (!_ || !(await (i.isElement == null ? void 0 : i.isElement(L)))) &&
        (_ = s.floating[v] || l.floating[w]);
      const T = p / 2 - k / 2,
        $ = _ / 2 - g[w] / 2 - 1,
        U = so(h[d], $),
        Q = so(h[f], $),
        Z = U,
        ue = _ - g[w] - Q,
        ne = _ / 2 - g[w] / 2 + T,
        q = Ja(Z, ne, ue),
        fe =
          !a.arrow &&
          wl(o) != null &&
          ne !== q &&
          l.reference[w] / 2 - (ne < Z ? U : Q) - g[w] / 2 < 0,
        Y = fe ? (ne < Z ? ne - Z : ne - ue) : 0;
      return {
        [y]: m[y] + Y,
        data: {
          [y]: q,
          centerOffset: ne - q - Y,
          ...(fe && { alignmentOffset: Y }),
        },
        reset: fe,
      };
    },
  }),
  q1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: l,
              rects: i,
              initialPlacement: s,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: h = !0,
              fallbackPlacements: m,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: g = !0,
              ...C
            } = gl(e, t);
          if ((n = l.arrow) != null && n.alignmentOffset) return {};
          const d = xr(o),
            f = xr(s) === s,
            v = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            p = m || (f || !g ? [Ni(s)] : K1(s));
          !m && w !== "none" && p.push(...Y1(s, g, w, v));
          const k = [s, ...p],
            L = await am(t, C),
            _ = [];
          let T = ((r = l.flip) == null ? void 0 : r.overflows) || [];
          if ((c && _.push(L[d]), h)) {
            const Z = H1(o, i, v);
            _.push(L[Z[0]], L[Z[1]]);
          }
          if (
            ((T = [...T, { placement: o, overflows: _ }]),
            !_.every((Z) => Z <= 0))
          ) {
            var $, U;
            const Z = ((($ = l.flip) == null ? void 0 : $.index) || 0) + 1,
              ue = k[Z];
            if (ue)
              return {
                data: { index: Z, overflows: T },
                reset: { placement: ue },
              };
            let ne =
              (U = T.filter((q) => q.overflows[0] <= 0).sort(
                (q, fe) => q.overflows[1] - fe.overflows[1],
              )[0]) == null
                ? void 0
                : U.placement;
            if (!ne)
              switch (y) {
                case "bestFit": {
                  var Q;
                  const q =
                    (Q = T.map((fe) => [
                      fe.placement,
                      fe.overflows
                        .filter((Y) => Y > 0)
                        .reduce((Y, D) => Y + D, 0),
                    ]).sort((fe, Y) => fe[1] - Y[1])[0]) == null
                      ? void 0
                      : Q[0];
                  q && (ne = q);
                  break;
                }
                case "initialPlacement":
                  ne = s;
                  break;
              }
            if (o !== ne) return { reset: { placement: ne } };
          }
          return {};
        },
      }
    );
  };
async function J1(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = xr(n),
    s = wl(n),
    a = Ss(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    c = l && a ? -1 : 1,
    h = gl(t, e);
  let {
    mainAxis: m,
    crossAxis: y,
    alignmentAxis: w,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
  return (
    s && typeof w == "number" && (y = s === "end" ? w * -1 : w),
    a ? { x: y * c, y: m * u } : { x: m * u, y: y * c }
  );
}
const ew = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: l, placement: i, middlewareData: s } = t,
            a = await J1(t, e);
          return i === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: l + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  tw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: l = !0,
              crossAxis: i = !1,
              limiter: s = {
                fn: (C) => {
                  let { x: d, y: f } = C;
                  return { x: d, y: f };
                },
              },
              ...a
            } = gl(e, t),
            u = { x: n, y: r },
            c = await am(t, a),
            h = Ss(xr(o)),
            m = im(h);
          let y = u[m],
            w = u[h];
          if (l) {
            const C = m === "y" ? "top" : "left",
              d = m === "y" ? "bottom" : "right",
              f = y + c[C],
              v = y - c[d];
            y = Ja(f, y, v);
          }
          if (i) {
            const C = h === "y" ? "top" : "left",
              d = h === "y" ? "bottom" : "right",
              f = w + c[C],
              v = w - c[d];
            w = Ja(f, w, v);
          }
          const g = s.fn({ ...t, [m]: y, [h]: w });
          return { ...g, data: { x: g.x - n, y: g.y - r } };
        },
      }
    );
  };
function vo(e) {
  return um(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Cn(e) {
  var t;
  return (t = (um(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function um(e) {
  return e instanceof Node || e instanceof wt(e).Node;
}
function tn(e) {
  return e instanceof Element || e instanceof wt(e).Element;
}
function nn(e) {
  return e instanceof HTMLElement || e instanceof wt(e).HTMLElement;
}
function ed(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
}
function Sl(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Wt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function nw(e) {
  return ["table", "td", "th"].includes(vo(e));
}
function pc(e) {
  const t = hc(),
    n = Wt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r),
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r),
    )
  );
}
function rw(e) {
  let t = Gn(e);
  for (; nn(t) && !ao(t); ) {
    if (pc(t)) return t;
    t = Gn(t);
  }
  return null;
}
function hc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ao(e) {
  return ["html", "body", "#document"].includes(vo(e));
}
function Wt(e) {
  return wt(e).getComputedStyle(e);
}
function xs(e) {
  return tn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Gn(e) {
  if (vo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (ed(e) && e.host) || Cn(e);
  return ed(t) ? t.host : t;
}
function cm(e) {
  const t = Gn(e);
  return ao(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : nn(t) && Sl(t)
      ? t
      : cm(t);
}
function cl(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = cm(e),
    l = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = wt(o);
  return l
    ? t.concat(
        i,
        i.visualViewport || [],
        Sl(o) ? o : [],
        i.frameElement && n ? cl(i.frameElement) : [],
      )
    : t.concat(o, cl(o, [], n));
}
function fm(e) {
  const t = Wt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = nn(e),
    l = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    s = ji(n) !== l || ji(r) !== i;
  return s && ((n = l), (r = i)), { width: n, height: r, $: s };
}
function mc(e) {
  return tn(e) ? e : e.contextElement;
}
function qr(e) {
  const t = mc(e);
  if (!nn(t)) return Xn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: l } = fm(t);
  let i = (l ? ji(n.width) : n.width) / r,
    s = (l ? ji(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: i, y: s }
  );
}
const ow = Xn(0);
function dm(e) {
  const t = wt(e);
  return !hc() || !t.visualViewport
    ? ow
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function lw(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== wt(e)) ? !1 : t;
}
function Er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    l = mc(e);
  let i = Xn(1);
  t && (r ? tn(r) && (i = qr(r)) : (i = qr(e)));
  const s = lw(l, n, r) ? dm(l) : Xn(0);
  let a = (o.left + s.x) / i.x,
    u = (o.top + s.y) / i.y,
    c = o.width / i.x,
    h = o.height / i.y;
  if (l) {
    const m = wt(l),
      y = r && tn(r) ? wt(r) : r;
    let w = m,
      g = w.frameElement;
    for (; g && r && y !== w; ) {
      const C = qr(g),
        d = g.getBoundingClientRect(),
        f = Wt(g),
        v = d.left + (g.clientLeft + parseFloat(f.paddingLeft)) * C.x,
        p = d.top + (g.clientTop + parseFloat(f.paddingTop)) * C.y;
      (a *= C.x),
        (u *= C.y),
        (c *= C.x),
        (h *= C.y),
        (a += v),
        (u += p),
        (w = wt(g)),
        (g = w.frameElement);
    }
  }
  return Li({ width: c, height: h, x: a, y: u });
}
const iw = [":popover-open", ":modal"];
function vc(e) {
  return iw.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function sw(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const l = o === "fixed",
    i = Cn(r),
    s = t ? vc(t.floating) : !1;
  if (r === i || (s && l)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Xn(1);
  const c = Xn(0),
    h = nn(r);
  if (
    (h || (!h && !l)) &&
    ((vo(r) !== "body" || Sl(i)) && (a = xs(r)), nn(r))
  ) {
    const m = Er(r);
    (u = qr(r)), (c.x = m.x + r.clientLeft), (c.y = m.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y,
  };
}
function aw(e) {
  return Array.from(e.getClientRects());
}
function pm(e) {
  return Er(Cn(e)).left + xs(e).scrollLeft;
}
function uw(e) {
  const t = Cn(e),
    n = xs(e),
    r = e.ownerDocument.body,
    o = pr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    l = pr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + pm(e);
  const s = -n.scrollTop;
  return (
    Wt(r).direction === "rtl" && (i += pr(t.clientWidth, r.clientWidth) - o),
    { width: o, height: l, x: i, y: s }
  );
}
function cw(e, t) {
  const n = wt(e),
    r = Cn(e),
    o = n.visualViewport;
  let l = r.clientWidth,
    i = r.clientHeight,
    s = 0,
    a = 0;
  if (o) {
    (l = o.width), (i = o.height);
    const u = hc();
    (!u || (u && t === "fixed")) && ((s = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: l, height: i, x: s, y: a };
}
function fw(e, t) {
  const n = Er(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    l = nn(e) ? qr(e) : Xn(1),
    i = e.clientWidth * l.x,
    s = e.clientHeight * l.y,
    a = o * l.x,
    u = r * l.y;
  return { width: i, height: s, x: a, y: u };
}
function td(e, t, n) {
  let r;
  if (t === "viewport") r = cw(e, n);
  else if (t === "document") r = uw(Cn(e));
  else if (tn(t)) r = fw(t, n);
  else {
    const o = dm(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Li(r);
}
function hm(e, t) {
  const n = Gn(e);
  return n === t || !tn(n) || ao(n)
    ? !1
    : Wt(n).position === "fixed" || hm(n, t);
}
function dw(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = cl(e, [], !1).filter((s) => tn(s) && vo(s) !== "body"),
    o = null;
  const l = Wt(e).position === "fixed";
  let i = l ? Gn(e) : e;
  for (; tn(i) && !ao(i); ) {
    const s = Wt(i),
      a = pc(i);
    !a && s.position === "fixed" && (o = null),
      (
        l
          ? !a && !o
          : (!a &&
              s.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Sl(i) && !a && hm(e, i))
      )
        ? (r = r.filter((c) => c !== i))
        : (o = s),
      (i = Gn(i));
  }
  return t.set(e, r), r;
}
function pw(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? vc(t)
          ? []
          : dw(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = i[0],
    a = i.reduce(
      (u, c) => {
        const h = td(t, c, o);
        return (
          (u.top = pr(h.top, u.top)),
          (u.right = so(h.right, u.right)),
          (u.bottom = so(h.bottom, u.bottom)),
          (u.left = pr(h.left, u.left)),
          u
        );
      },
      td(t, s, o),
    );
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function hw(e) {
  const { width: t, height: n } = fm(e);
  return { width: t, height: n };
}
function mw(e, t, n) {
  const r = nn(t),
    o = Cn(t),
    l = n === "fixed",
    i = Er(e, !0, l, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = Xn(0);
  if (r || (!r && !l))
    if (((vo(t) !== "body" || Sl(o)) && (s = xs(t)), r)) {
      const h = Er(t, !0, l, t);
      (a.x = h.x + t.clientLeft), (a.y = h.y + t.clientTop);
    } else o && (a.x = pm(o));
  const u = i.left + s.scrollLeft - a.x,
    c = i.top + s.scrollTop - a.y;
  return { x: u, y: c, width: i.width, height: i.height };
}
function qs(e) {
  return Wt(e).position === "static";
}
function nd(e, t) {
  return !nn(e) || Wt(e).position === "fixed"
    ? null
    : t
      ? t(e)
      : e.offsetParent;
}
function mm(e, t) {
  const n = wt(e);
  if (vc(e)) return n;
  if (!nn(e)) {
    let o = Gn(e);
    for (; o && !ao(o); ) {
      if (tn(o) && !qs(o)) return o;
      o = Gn(o);
    }
    return n;
  }
  let r = nd(e, t);
  for (; r && nw(r) && qs(r); ) r = nd(r, t);
  return r && ao(r) && qs(r) && !pc(r) ? n : r || rw(e) || n;
}
const vw = async function (e) {
  const t = this.getOffsetParent || mm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: mw(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function yw(e) {
  return Wt(e).direction === "rtl";
}
const gw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sw,
  getDocumentElement: Cn,
  getClippingRect: pw,
  getOffsetParent: mm,
  getElementRects: vw,
  getClientRects: aw,
  getDimensions: hw,
  getScale: qr,
  isElement: tn,
  isRTL: yw,
};
function ww(e, t) {
  let n = null,
    r;
  const o = Cn(e);
  function l() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function i(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), l();
    const { left: u, top: c, width: h, height: m } = e.getBoundingClientRect();
    if ((s || t(), !h || !m)) return;
    const y = Ul(c),
      w = Ul(o.clientWidth - (u + h)),
      g = Ul(o.clientHeight - (c + m)),
      C = Ul(u),
      f = {
        rootMargin: -y + "px " + -w + "px " + -g + "px " + -C + "px",
        threshold: pr(0, so(1, a)) || 1,
      };
    let v = !0;
    function p(k) {
      const L = k[0].intersectionRatio;
      if (L !== a) {
        if (!v) return i();
        L
          ? i(!1, L)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(p, { ...f, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(p, f);
    }
    n.observe(e);
  }
  return i(!0), l;
}
function Sw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: l = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = mc(e),
    c = o || l ? [...(u ? cl(u) : []), ...cl(t)] : [];
  c.forEach((d) => {
    o && d.addEventListener("scroll", n, { passive: !0 }),
      l && d.addEventListener("resize", n);
  });
  const h = u && s ? ww(u, n) : null;
  let m = -1,
    y = null;
  i &&
    ((y = new ResizeObserver((d) => {
      let [f] = d;
      f &&
        f.target === u &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var v;
          (v = y) == null || v.observe(t);
        }))),
        n();
    })),
    u && !a && y.observe(u),
    y.observe(t));
  let w,
    g = a ? Er(e) : null;
  a && C();
  function C() {
    const d = Er(e);
    g &&
      (d.x !== g.x ||
        d.y !== g.y ||
        d.width !== g.width ||
        d.height !== g.height) &&
      n(),
      (g = d),
      (w = requestAnimationFrame(C));
  }
  return (
    n(),
    () => {
      var d;
      c.forEach((f) => {
        o && f.removeEventListener("scroll", n),
          l && f.removeEventListener("resize", n);
      }),
        h == null || h(),
        (d = y) == null || d.disconnect(),
        (y = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const xw = ew,
  Ew = tw,
  Cw = q1,
  kw = Z1,
  rd = (e, t, n) => {
    const r = new Map(),
      o = { platform: gw, ...n },
      l = { ...o.platform, _c: r };
    return G1(e, t, { ...o, platform: l });
  };
var vm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var l = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (l = o(l, r(s)));
      }
      return l;
    }
    function r(l) {
      if (typeof l == "string" || typeof l == "number") return l;
      if (typeof l != "object") return "";
      if (Array.isArray(l)) return n.apply(null, l);
      if (
        l.toString !== Object.prototype.toString &&
        !l.toString.toString().includes("[native code]")
      )
        return l.toString();
      var i = "";
      for (var s in l) t.call(l, s) && l[s] && (i = o(i, s));
      return i;
    }
    function o(l, i) {
      return i ? (l ? l + " " + i : l + i) : l;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(vm);
var Rw = vm.exports;
const tu = ru(Rw);
/*
 * React Tooltip
 * {@link https://github.com/ReactTooltip/react-tooltip}
 * @copyright ReactTooltip Team
 * @license MIT
 */ const _w = "react-tooltip-core-styles",
  Pw = "react-tooltip-base-styles",
  od = { core: !1, base: !1 };
function ld({ css: e, id: t = Pw, type: n = "base", ref: r }) {
  var o, l;
  if (
    !e ||
    typeof document > "u" ||
    od[n] ||
    (n === "core" &&
      typeof process < "u" &&
      !(
        (o = process == null ? void 0 : process.env) === null || o === void 0
      ) &&
      o.REACT_TOOLTIP_DISABLE_CORE_STYLES) ||
    (n !== "base" &&
      typeof process < "u" &&
      !(
        (l = process == null ? void 0 : process.env) === null || l === void 0
      ) &&
      l.REACT_TOOLTIP_DISABLE_BASE_STYLES)
  )
    return;
  n === "core" && (t = _w), r || (r = {});
  const { insertAt: i } = r;
  if (document.getElementById(t))
    return void console.warn(
      `[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`,
    );
  const s = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.id = t),
    (a.type = "text/css"),
    i === "top" && s.firstChild
      ? s.insertBefore(a, s.firstChild)
      : s.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = e)
      : a.appendChild(document.createTextNode(e)),
    (od[n] = !0);
}
const id = async ({
    elementReference: e = null,
    tooltipReference: t = null,
    tooltipArrowReference: n = null,
    place: r = "top",
    offset: o = 10,
    strategy: l = "absolute",
    middlewares: i = [
      xw(Number(o)),
      Cw({ fallbackAxisSideDirection: "start" }),
      Ew({ padding: 5 }),
    ],
    border: s,
  }) => {
    if (!e) return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
    if (t === null)
      return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
    const a = i;
    return n
      ? (a.push(kw({ element: n, padding: 5 })),
        rd(e, t, { placement: r, strategy: l, middleware: a }).then(
          ({ x: u, y: c, placement: h, middlewareData: m }) => {
            var y, w;
            const g = { left: `${u}px`, top: `${c}px`, border: s },
              { x: C, y: d } =
                (y = m.arrow) !== null && y !== void 0 ? y : { x: 0, y: 0 },
              f =
                (w = {
                  top: "bottom",
                  right: "left",
                  bottom: "top",
                  left: "right",
                }[h.split("-")[0]]) !== null && w !== void 0
                  ? w
                  : "bottom",
              v = s && { borderBottom: s, borderRight: s };
            let p = 0;
            if (s) {
              const k = `${s}`.match(/(\d+)px/);
              p = k != null && k[1] ? Number(k[1]) : 1;
            }
            return {
              tooltipStyles: g,
              tooltipArrowStyles: {
                left: C != null ? `${C}px` : "",
                top: d != null ? `${d}px` : "",
                right: "",
                bottom: "",
                ...v,
                [f]: `-${4 + p}px`,
              },
              place: h,
            };
          },
        ))
      : rd(e, t, { placement: "bottom", strategy: l, middleware: a }).then(
          ({ x: u, y: c, placement: h }) => ({
            tooltipStyles: { left: `${u}px`, top: `${c}px` },
            tooltipArrowStyles: {},
            place: h,
          }),
        );
  },
  sd = (e, t) =>
    !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t),
  ad = (e, t, n) => {
    let r = null;
    const o = function (...l) {
      const i = () => {
        (r = null), n || e.apply(this, l);
      };
      n && !r && (e.apply(this, l), (r = setTimeout(i, t))),
        n || (r && clearTimeout(r), (r = setTimeout(i, t)));
    };
    return (
      (o.cancel = () => {
        r && (clearTimeout(r), (r = null));
      }),
      o
    );
  },
  ud = (e) => e !== null && !Array.isArray(e) && typeof e == "object",
  nu = (e, t) => {
    if (e === t) return !0;
    if (Array.isArray(e) && Array.isArray(t))
      return e.length === t.length && e.every((o, l) => nu(o, t[l]));
    if (Array.isArray(e) !== Array.isArray(t)) return !1;
    if (!ud(e) || !ud(t)) return e === t;
    const n = Object.keys(e),
      r = Object.keys(t);
    return n.length === r.length && n.every((o) => nu(e[o], t[o]));
  },
  jw = (e) => {
    if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
    const t = getComputedStyle(e);
    return ["overflow", "overflow-x", "overflow-y"].some((n) => {
      const r = t.getPropertyValue(n);
      return r === "auto" || r === "scroll";
    });
  },
  cd = (e) => {
    if (!e) return null;
    let t = e.parentElement;
    for (; t; ) {
      if (jw(t)) return t;
      t = t.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  },
  Nw = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  Lw = "DEFAULT_TOOLTIP_ID",
  Tw = {
    anchorRefs: new Set(),
    activeAnchor: { current: null },
    attach: () => {},
    detach: () => {},
    setActiveAnchor: () => {},
  },
  Ow = x.createContext({ getTooltipData: () => Tw });
function ym(e = Lw) {
  return x.useContext(Ow).getTooltipData(e);
}
var Tr = {
    tooltip: "core-styles-module_tooltip__3vRRp",
    fixed: "core-styles-module_fixed__pcSol",
    arrow: "core-styles-module_arrow__cvMwQ",
    noArrow: "core-styles-module_noArrow__xock6",
    clickable: "core-styles-module_clickable__ZuTTB",
    show: "core-styles-module_show__Nt9eE",
    closing: "core-styles-module_closing__sGnxF",
  },
  Js = {
    tooltip: "styles-module_tooltip__mnnfp",
    arrow: "styles-module_arrow__K0L3T",
    dark: "styles-module_dark__xNqje",
    light: "styles-module_light__Z6W-X",
    success: "styles-module_success__A2AKt",
    warning: "styles-module_warning__SCK0X",
    error: "styles-module_error__JvumD",
    info: "styles-module_info__BWdHW",
  };
const Mw = ({
    forwardRef: e,
    id: t,
    className: n,
    classNameArrow: r,
    variant: o = "dark",
    anchorId: l,
    anchorSelect: i,
    place: s = "top",
    offset: a = 10,
    events: u = ["hover"],
    openOnClick: c = !1,
    positionStrategy: h = "absolute",
    middlewares: m,
    wrapper: y,
    delayShow: w = 0,
    delayHide: g = 0,
    float: C = !1,
    hidden: d = !1,
    noArrow: f = !1,
    clickable: v = !1,
    closeOnEsc: p = !1,
    closeOnScroll: k = !1,
    closeOnResize: L = !1,
    openEvents: _,
    closeEvents: T,
    globalCloseEvents: $,
    imperativeModeOnly: U,
    style: Q,
    position: Z,
    afterShow: ue,
    afterHide: ne,
    content: q,
    contentWrapperRef: fe,
    isOpen: Y,
    defaultIsOpen: D = !1,
    setIsOpen: b,
    activeAnchor: F,
    setActiveAnchor: J,
    border: se,
    opacity: K,
    arrowColor: X,
    role: Ve = "tooltip",
  }) => {
    var je;
    const me = x.useRef(null),
      mt = x.useRef(null),
      ee = x.useRef(null),
      Ne = x.useRef(null),
      st = x.useRef(null),
      [Ht, Ot] = x.useState({
        tooltipStyles: {},
        tooltipArrowStyles: {},
        place: s,
      }),
      [tt, Rr] = x.useState(!1),
      [Kt, on] = x.useState(!1),
      [ye, tr] = x.useState(null),
      Mt = x.useRef(!1),
      kn = x.useRef(null),
      { anchorRefs: ln, setActiveAnchor: Qt } = ym(t),
      Dt = x.useRef(!1),
      [Yt, at] = x.useState([]),
      Xt = x.useRef(!1),
      sn = c || u.includes("click"),
      Rn =
        sn ||
        (_ == null ? void 0 : _.click) ||
        (_ == null ? void 0 : _.dblclick) ||
        (_ == null ? void 0 : _.mousedown),
      _n = _
        ? { ..._ }
        : { mouseenter: !0, focus: !0, click: !1, dblclick: !1, mousedown: !1 };
    !_ && sn && Object.assign(_n, { mouseenter: !1, focus: !1, click: !0 });
    const Pn = T
      ? { ...T }
      : { mouseleave: !0, blur: !0, click: !1, dblclick: !1, mouseup: !1 };
    !T && sn && Object.assign(Pn, { mouseleave: !1, blur: !1 });
    const Qe = $
      ? { ...$ }
      : {
          escape: p || !1,
          scroll: k || !1,
          resize: L || !1,
          clickOutsideAnchor: Rn || !1,
        };
    U &&
      (Object.assign(_n, {
        mouseenter: !1,
        focus: !1,
        click: !1,
        dblclick: !1,
        mousedown: !1,
      }),
      Object.assign(Pn, {
        mouseleave: !1,
        blur: !1,
        click: !1,
        dblclick: !1,
        mouseup: !1,
      }),
      Object.assign(Qe, {
        escape: !1,
        scroll: !1,
        resize: !1,
        clickOutsideAnchor: !1,
      })),
      Nw(
        () => (
          (Xt.current = !0),
          () => {
            Xt.current = !1;
          }
        ),
        [],
      );
    const Ee = (N) => {
      Xt.current &&
        (N && on(!0),
        setTimeout(() => {
          Xt.current && (b == null || b(N), Y === void 0 && Rr(N));
        }, 10));
    };
    x.useEffect(() => {
      if (Y === void 0) return () => null;
      Y && on(!0);
      const N = setTimeout(() => {
        Rr(Y);
      }, 10);
      return () => {
        clearTimeout(N);
      };
    }, [Y]),
      x.useEffect(() => {
        if (tt !== Mt.current)
          if ((st.current && clearTimeout(st.current), (Mt.current = tt), tt))
            ue == null || ue();
          else {
            const N = ((I) => {
              const A = I.match(/^([\d.]+)(ms|s)$/);
              if (!A) return 0;
              const [, G, oe] = A;
              return Number(G) * (oe === "ms" ? 1 : 1e3);
            })(
              getComputedStyle(document.body).getPropertyValue(
                "--rt-transition-show-delay",
              ),
            );
            st.current = setTimeout(() => {
              on(!1), tr(null), ne == null || ne();
            }, N + 25);
          }
      }, [tt]);
    const jn = (N) => {
        Ot((I) => (nu(I, N) ? I : N));
      },
      nr = (N = w) => {
        ee.current && clearTimeout(ee.current),
          Kt
            ? Ee(!0)
            : (ee.current = setTimeout(() => {
                Ee(!0);
              }, N));
      },
      an = (N = g) => {
        Ne.current && clearTimeout(Ne.current),
          (Ne.current = setTimeout(() => {
            Dt.current || Ee(!1);
          }, N));
      },
      rr = (N) => {
        var I;
        if (!N) return;
        const A = (I = N.currentTarget) !== null && I !== void 0 ? I : N.target;
        if (!(A != null && A.isConnected))
          return J(null), void Qt({ current: null });
        w ? nr() : Ee(!0),
          J(A),
          Qt({ current: A }),
          Ne.current && clearTimeout(Ne.current);
      },
      un = () => {
        v ? an(g || 100) : g ? an() : Ee(!1),
          ee.current && clearTimeout(ee.current);
      },
      Nn = ({ x: N, y: I }) => {
        var A;
        const G = {
          getBoundingClientRect: () => ({
            x: N,
            y: I,
            width: 0,
            height: 0,
            top: I,
            left: N,
            right: N,
            bottom: I,
          }),
        };
        id({
          place:
            (A = ye == null ? void 0 : ye.place) !== null && A !== void 0
              ? A
              : s,
          offset: a,
          elementReference: G,
          tooltipReference: me.current,
          tooltipArrowReference: mt.current,
          strategy: h,
          middlewares: m,
          border: se,
        }).then((oe) => {
          jn(oe);
        });
      },
      E = (N) => {
        if (!N) return;
        const I = N,
          A = { x: I.clientX, y: I.clientY };
        Nn(A), (kn.current = A);
      },
      R = (N) => {
        var I;
        if (!tt) return;
        const A = N.target;
        A.isConnected &&
          ((!((I = me.current) === null || I === void 0) && I.contains(A)) ||
            [document.querySelector(`[id='${l}']`), ...Yt].some((G) =>
              G == null ? void 0 : G.contains(A),
            ) ||
            (Ee(!1), ee.current && clearTimeout(ee.current)));
      },
      P = ad(rr, 50, !0),
      M = ad(un, 50, !0),
      V = (N) => {
        M.cancel(), P(N);
      },
      j = () => {
        P.cancel(), M();
      },
      z = x.useCallback(() => {
        var N, I;
        const A =
          (N = ye == null ? void 0 : ye.position) !== null && N !== void 0
            ? N
            : Z;
        A
          ? Nn(A)
          : C
            ? kn.current && Nn(kn.current)
            : F != null &&
              F.isConnected &&
              id({
                place:
                  (I = ye == null ? void 0 : ye.place) !== null && I !== void 0
                    ? I
                    : s,
                offset: a,
                elementReference: F,
                tooltipReference: me.current,
                tooltipArrowReference: mt.current,
                strategy: h,
                middlewares: m,
                border: se,
              }).then((G) => {
                Xt.current && jn(G);
              });
      }, [
        tt,
        F,
        q,
        Q,
        s,
        ye == null ? void 0 : ye.place,
        a,
        h,
        Z,
        ye == null ? void 0 : ye.position,
        C,
      ]);
    x.useEffect(() => {
      var N, I;
      const A = new Set(ln);
      Yt.forEach((te) => {
        A.add({ current: te });
      });
      const G = document.querySelector(`[id='${l}']`);
      G && A.add({ current: G });
      const oe = () => {
          Ee(!1);
        },
        ze = cd(F),
        Ie = cd(me.current);
      Qe.scroll &&
        (window.addEventListener("scroll", oe),
        ze == null || ze.addEventListener("scroll", oe),
        Ie == null || Ie.addEventListener("scroll", oe));
      let Le = null;
      Qe.resize
        ? window.addEventListener("resize", oe)
        : F &&
          me.current &&
          (Le = Sw(F, me.current, z, {
            ancestorResize: !0,
            elementResize: !0,
            layoutShift: !0,
          }));
      const Ye = (te) => {
        te.key === "Escape" && Ee(!1);
      };
      Qe.escape && window.addEventListener("keydown", Ye),
        Qe.clickOutsideAnchor && window.addEventListener("click", R);
      const ie = [],
        ut = (te) => {
          (tt && (te == null ? void 0 : te.target) === F) || rr(te);
        },
        _r = (te) => {
          tt && (te == null ? void 0 : te.target) === F && un();
        },
        Pr = ["mouseenter", "mouseleave", "focus", "blur"],
        jr = ["click", "dblclick", "mousedown", "mouseup"];
      Object.entries(_n).forEach(([te, Fe]) => {
        Fe &&
          (Pr.includes(te)
            ? ie.push({ event: te, listener: V })
            : jr.includes(te) && ie.push({ event: te, listener: ut }));
      }),
        Object.entries(Pn).forEach(([te, Fe]) => {
          Fe &&
            (Pr.includes(te)
              ? ie.push({ event: te, listener: j })
              : jr.includes(te) && ie.push({ event: te, listener: _r }));
        }),
        C && ie.push({ event: "pointermove", listener: E });
      const Nr = () => {
          Dt.current = !0;
        },
        ce = () => {
          (Dt.current = !1), un();
        };
      return (
        v &&
          !Rn &&
          ((N = me.current) === null ||
            N === void 0 ||
            N.addEventListener("mouseenter", Nr),
          (I = me.current) === null ||
            I === void 0 ||
            I.addEventListener("mouseleave", ce)),
        ie.forEach(({ event: te, listener: Fe }) => {
          A.forEach((ge) => {
            var $t;
            ($t = ge.current) === null ||
              $t === void 0 ||
              $t.addEventListener(te, Fe);
          });
        }),
        () => {
          var te, Fe;
          Qe.scroll &&
            (window.removeEventListener("scroll", oe),
            ze == null || ze.removeEventListener("scroll", oe),
            Ie == null || Ie.removeEventListener("scroll", oe)),
            Qe.resize
              ? window.removeEventListener("resize", oe)
              : Le == null || Le(),
            Qe.clickOutsideAnchor && window.removeEventListener("click", R),
            Qe.escape && window.removeEventListener("keydown", Ye),
            v &&
              !Rn &&
              ((te = me.current) === null ||
                te === void 0 ||
                te.removeEventListener("mouseenter", Nr),
              (Fe = me.current) === null ||
                Fe === void 0 ||
                Fe.removeEventListener("mouseleave", ce)),
            ie.forEach(({ event: ge, listener: $t }) => {
              A.forEach((xl) => {
                var yo;
                (yo = xl.current) === null ||
                  yo === void 0 ||
                  yo.removeEventListener(ge, $t);
              });
            });
        }
      );
    }, [F, z, Kt, ln, Yt, _, T, $, sn, w, g]),
      x.useEffect(() => {
        var N, I;
        let A =
          (I =
            (N = ye == null ? void 0 : ye.anchorSelect) !== null && N !== void 0
              ? N
              : i) !== null && I !== void 0
            ? I
            : "";
        !A && t && (A = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`);
        const G = new MutationObserver((oe) => {
          const ze = [],
            Ie = [];
          oe.forEach((Le) => {
            if (
              (Le.type === "attributes" &&
                Le.attributeName === "data-tooltip-id" &&
                (Le.target.getAttribute("data-tooltip-id") === t
                  ? ze.push(Le.target)
                  : Le.oldValue === t && Ie.push(Le.target)),
              Le.type === "childList")
            ) {
              if (F) {
                const Ye = [...Le.removedNodes].filter(
                  (ie) => ie.nodeType === 1,
                );
                if (A)
                  try {
                    Ie.push(...Ye.filter((ie) => ie.matches(A))),
                      Ie.push(
                        ...Ye.flatMap((ie) => [...ie.querySelectorAll(A)]),
                      );
                  } catch {}
                Ye.some((ie) => {
                  var ut;
                  return (
                    !!(
                      !(
                        (ut = ie == null ? void 0 : ie.contains) === null ||
                        ut === void 0
                      ) && ut.call(ie, F)
                    ) &&
                    (on(!1),
                    Ee(!1),
                    J(null),
                    ee.current && clearTimeout(ee.current),
                    Ne.current && clearTimeout(Ne.current),
                    !0)
                  );
                });
              }
              if (A)
                try {
                  const Ye = [...Le.addedNodes].filter(
                    (ie) => ie.nodeType === 1,
                  );
                  ze.push(...Ye.filter((ie) => ie.matches(A))),
                    ze.push(...Ye.flatMap((ie) => [...ie.querySelectorAll(A)]));
                } catch {}
            }
          }),
            (ze.length || Ie.length) &&
              at((Le) => [...Le.filter((Ye) => !Ie.includes(Ye)), ...ze]);
        });
        return (
          G.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-tooltip-id"],
            attributeOldValue: !0,
          }),
          () => {
            G.disconnect();
          }
        );
      }, [t, i, ye == null ? void 0 : ye.anchorSelect, F]),
      x.useEffect(() => {
        z();
      }, [z]),
      x.useEffect(() => {
        if (!(fe != null && fe.current)) return () => null;
        const N = new ResizeObserver(() => {
          setTimeout(() => z());
        });
        return (
          N.observe(fe.current),
          () => {
            N.disconnect();
          }
        );
      }, [q, fe == null ? void 0 : fe.current]),
      x.useEffect(() => {
        var N;
        const I = document.querySelector(`[id='${l}']`),
          A = [...Yt, I];
        (F && A.includes(F)) || J((N = Yt[0]) !== null && N !== void 0 ? N : I);
      }, [l, Yt, F]),
      x.useEffect(
        () => (
          D && Ee(!0),
          () => {
            ee.current && clearTimeout(ee.current),
              Ne.current && clearTimeout(Ne.current);
          }
        ),
        [],
      ),
      x.useEffect(() => {
        var N;
        let I =
          (N = ye == null ? void 0 : ye.anchorSelect) !== null && N !== void 0
            ? N
            : i;
        if (
          (!I && t && (I = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`), I)
        )
          try {
            const A = Array.from(document.querySelectorAll(I));
            at(A);
          } catch {
            at([]);
          }
      }, [t, i, ye == null ? void 0 : ye.anchorSelect]),
      x.useEffect(() => {
        ee.current && (clearTimeout(ee.current), nr(w));
      }, [w]);
    const W =
        (je = ye == null ? void 0 : ye.content) !== null && je !== void 0
          ? je
          : q,
      H = tt && Object.keys(Ht.tooltipStyles).length > 0;
    return (
      x.useImperativeHandle(e, () => ({
        open: (N) => {
          if (N != null && N.anchorSelect)
            try {
              document.querySelector(N.anchorSelect);
            } catch {
              return void console.warn(
                `[react-tooltip] "${N.anchorSelect}" is not a valid CSS selector`,
              );
            }
          tr(N ?? null), N != null && N.delay ? nr(N.delay) : Ee(!0);
        },
        close: (N) => {
          N != null && N.delay ? an(N.delay) : Ee(!1);
        },
        activeAnchor: F,
        place: Ht.place,
        isOpen: !!(Kt && !d && W && H),
      })),
      Kt && !d && W
        ? Je.createElement(
            y,
            {
              id: t,
              role: Ve,
              className: tu(
                "react-tooltip",
                Tr.tooltip,
                Js.tooltip,
                Js[o],
                n,
                `react-tooltip__place-${Ht.place}`,
                Tr[H ? "show" : "closing"],
                H ? "react-tooltip__show" : "react-tooltip__closing",
                h === "fixed" && Tr.fixed,
                v && Tr.clickable,
              ),
              onTransitionEnd: (N) => {
                st.current && clearTimeout(st.current),
                  tt ||
                    N.propertyName !== "opacity" ||
                    (on(!1), tr(null), ne == null || ne());
              },
              style: {
                ...Q,
                ...Ht.tooltipStyles,
                opacity: K !== void 0 && H ? K : void 0,
              },
              ref: me,
            },
            W,
            Je.createElement(y, {
              className: tu(
                "react-tooltip-arrow",
                Tr.arrow,
                Js.arrow,
                r,
                f && Tr.noArrow,
              ),
              style: {
                ...Ht.tooltipArrowStyles,
                background: X
                  ? `linear-gradient(to right bottom, transparent 50%, ${X} 50%)`
                  : void 0,
              },
              ref: mt,
            }),
          )
        : null
    );
  },
  Dw = ({ content: e }) =>
    Je.createElement("span", { dangerouslySetInnerHTML: { __html: e } }),
  $w = Je.forwardRef(
    (
      {
        id: e,
        anchorId: t,
        anchorSelect: n,
        content: r,
        html: o,
        render: l,
        className: i,
        classNameArrow: s,
        variant: a = "dark",
        place: u = "top",
        offset: c = 10,
        wrapper: h = "div",
        children: m = null,
        events: y = ["hover"],
        openOnClick: w = !1,
        positionStrategy: g = "absolute",
        middlewares: C,
        delayShow: d = 0,
        delayHide: f = 0,
        float: v = !1,
        hidden: p = !1,
        noArrow: k = !1,
        clickable: L = !1,
        closeOnEsc: _ = !1,
        closeOnScroll: T = !1,
        closeOnResize: $ = !1,
        openEvents: U,
        closeEvents: Q,
        globalCloseEvents: Z,
        imperativeModeOnly: ue = !1,
        style: ne,
        position: q,
        isOpen: fe,
        defaultIsOpen: Y = !1,
        disableStyleInjection: D = !1,
        border: b,
        opacity: F,
        arrowColor: J,
        setIsOpen: se,
        afterShow: K,
        afterHide: X,
        role: Ve = "tooltip",
      },
      je,
    ) => {
      const [me, mt] = x.useState(r),
        [ee, Ne] = x.useState(o),
        [st, Ht] = x.useState(u),
        [Ot, tt] = x.useState(a),
        [Rr, Kt] = x.useState(c),
        [on, ye] = x.useState(d),
        [tr, Mt] = x.useState(f),
        [kn, ln] = x.useState(v),
        [Qt, Dt] = x.useState(p),
        [Yt, at] = x.useState(h),
        [Xt, sn] = x.useState(y),
        [Rn, _n] = x.useState(g),
        [Pn, Qe] = x.useState(null),
        [Ee, jn] = x.useState(null),
        nr = x.useRef(D),
        { anchorRefs: an, activeAnchor: rr } = ym(e),
        un = (M) =>
          M == null
            ? void 0
            : M.getAttributeNames().reduce((V, j) => {
                var z;
                return (
                  j.startsWith("data-tooltip-") &&
                    (V[j.replace(/^data-tooltip-/, "")] =
                      (z = M == null ? void 0 : M.getAttribute(j)) !== null &&
                      z !== void 0
                        ? z
                        : null),
                  V
                );
              }, {}),
        Nn = (M) => {
          const V = {
            place: (j) => {
              var z;
              Ht((z = j) !== null && z !== void 0 ? z : u);
            },
            content: (j) => {
              mt(j ?? r);
            },
            html: (j) => {
              Ne(j ?? o);
            },
            variant: (j) => {
              var z;
              tt((z = j) !== null && z !== void 0 ? z : a);
            },
            offset: (j) => {
              Kt(j === null ? c : Number(j));
            },
            wrapper: (j) => {
              var z;
              at((z = j) !== null && z !== void 0 ? z : h);
            },
            events: (j) => {
              const z = j == null ? void 0 : j.split(" ");
              sn(z ?? y);
            },
            "position-strategy": (j) => {
              var z;
              _n((z = j) !== null && z !== void 0 ? z : g);
            },
            "delay-show": (j) => {
              ye(j === null ? d : Number(j));
            },
            "delay-hide": (j) => {
              Mt(j === null ? f : Number(j));
            },
            float: (j) => {
              ln(j === null ? v : j === "true");
            },
            hidden: (j) => {
              Dt(j === null ? p : j === "true");
            },
            "class-name": (j) => {
              Qe(j);
            },
          };
          Object.values(V).forEach((j) => j(null)),
            Object.entries(M).forEach(([j, z]) => {
              var W;
              (W = V[j]) === null || W === void 0 || W.call(V, z);
            });
        };
      x.useEffect(() => {
        mt(r);
      }, [r]),
        x.useEffect(() => {
          Ne(o);
        }, [o]),
        x.useEffect(() => {
          Ht(u);
        }, [u]),
        x.useEffect(() => {
          tt(a);
        }, [a]),
        x.useEffect(() => {
          Kt(c);
        }, [c]),
        x.useEffect(() => {
          ye(d);
        }, [d]),
        x.useEffect(() => {
          Mt(f);
        }, [f]),
        x.useEffect(() => {
          ln(v);
        }, [v]),
        x.useEffect(() => {
          Dt(p);
        }, [p]),
        x.useEffect(() => {
          _n(g);
        }, [g]),
        x.useEffect(() => {
          nr.current !== D &&
            console.warn(
              "[react-tooltip] Do not change `disableStyleInjection` dynamically.",
            );
        }, [D]),
        x.useEffect(() => {
          typeof window < "u" &&
            window.dispatchEvent(
              new CustomEvent("react-tooltip-inject-styles", {
                detail: { disableCore: D === "core", disableBase: D },
              }),
            );
        }, []),
        x.useEffect(() => {
          var M;
          const V = new Set(an);
          let j = n;
          if (
            (!j && e && (j = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`),
            j)
          )
            try {
              document.querySelectorAll(j).forEach((I) => {
                V.add({ current: I });
              });
            } catch {
              console.warn(
                `[react-tooltip] "${j}" is not a valid CSS selector`,
              );
            }
          const z = document.querySelector(`[id='${t}']`);
          if ((z && V.add({ current: z }), !V.size)) return () => null;
          const W = (M = Ee ?? z) !== null && M !== void 0 ? M : rr.current,
            H = new MutationObserver((I) => {
              I.forEach((A) => {
                var G;
                if (
                  !W ||
                  A.type !== "attributes" ||
                  !(
                    !((G = A.attributeName) === null || G === void 0) &&
                    G.startsWith("data-tooltip-")
                  )
                )
                  return;
                const oe = un(W);
                Nn(oe);
              });
            }),
            N = { attributes: !0, childList: !1, subtree: !1 };
          if (W) {
            const I = un(W);
            Nn(I), H.observe(W, N);
          }
          return () => {
            H.disconnect();
          };
        }, [an, rr, Ee, t, n]),
        x.useEffect(() => {
          ne != null &&
            ne.border &&
            console.warn(
              "[react-tooltip] Do not set `style.border`. Use `border` prop instead.",
            ),
            b &&
              !sd("border", `${b}`) &&
              console.warn(`[react-tooltip] "${b}" is not a valid \`border\`.`),
            ne != null &&
              ne.opacity &&
              console.warn(
                "[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead.",
              ),
            F &&
              !sd("opacity", `${F}`) &&
              console.warn(
                `[react-tooltip] "${F}" is not a valid \`opacity\`.`,
              );
        }, []);
      let E = m;
      const R = x.useRef(null);
      if (l) {
        const M = l({
          content:
            (Ee == null ? void 0 : Ee.getAttribute("data-tooltip-content")) ||
            me ||
            null,
          activeAnchor: Ee,
        });
        E = M
          ? Je.createElement(
              "div",
              { ref: R, className: "react-tooltip-content-wrapper" },
              M,
            )
          : null;
      } else me && (E = me);
      ee && (E = Je.createElement(Dw, { content: ee }));
      const P = {
        forwardRef: je,
        id: e,
        anchorId: t,
        anchorSelect: n,
        className: tu(i, Pn),
        classNameArrow: s,
        content: E,
        contentWrapperRef: R,
        place: st,
        variant: Ot,
        offset: Rr,
        wrapper: Yt,
        events: Xt,
        openOnClick: w,
        positionStrategy: Rn,
        middlewares: C,
        delayShow: on,
        delayHide: tr,
        float: kn,
        hidden: Qt,
        noArrow: k,
        clickable: L,
        closeOnEsc: _,
        closeOnScroll: T,
        closeOnResize: $,
        openEvents: U,
        closeEvents: Q,
        globalCloseEvents: Z,
        imperativeModeOnly: ue,
        style: ne,
        position: q,
        isOpen: fe,
        defaultIsOpen: Y,
        border: b,
        opacity: F,
        arrowColor: J,
        setIsOpen: se,
        afterShow: K,
        afterHide: X,
        activeAnchor: Ee,
        setActiveAnchor: (M) => jn(M),
        role: Ve,
      };
      return Je.createElement(Mw, { ...P });
    },
  );
typeof window < "u" &&
  window.addEventListener("react-tooltip-inject-styles", (e) => {
    e.detail.disableCore ||
      ld({
        css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
        type: "core",
      }),
      e.detail.disableBase ||
        ld({
          css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
          type: "base",
        });
  });
function gm({ spot: e }) {
  const t = mo(),
    {
      id: n,
      name: r,
      city: o,
      state: l,
      previewImage: i,
      price: s,
      avgRating: a,
    } = e,
    u = ` ${a === "no reviews" ? "New" : a == null ? void 0 : a.toFixed(1)}`;
  return S.jsxs("div", {
    className: "spot-card clickable",
    "data-tooltip-id": `my-tooltip-${n}`,
    "data-tooltip-float": "true",
    onClick: () => t(`/spots/${n}`),
    children: [
      S.jsx($w, { className: "my-tooltip", id: `my-tooltip-${n}`, content: r }),
      S.jsx("div", {
        className: "image",
        children: S.jsx("img", { src: i, alt: "Preview Image" }),
      }),
      S.jsxs("div", {
        className: "description",
        children: [
          S.jsxs("div", {
            className: "title",
            children: [
              S.jsx("span", { children: `${o}, ${l}` }),
              S.jsxs("span", { children: [S.jsx(Pi, {}), u] }),
            ],
          }),
          S.jsxs("div", {
            className: "details",
            children: [S.jsxs("b", { children: ["$", s] }), " night"],
          }),
        ],
      }),
    ],
  });
}
const Aw = async ({ spotId: e, previewImageURL: t, sideImageURLs: n }) => {
    await rt(`/api/spots/${e}/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: t, preview: !0 }),
    });
    for (let r of n)
      r &&
        (await rt(`/api/spots/${e}/images`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: r, preview: !1 }),
        }));
  },
  zw = async ({ body: e, previewImageURL: t, sideImageURLs: n }) => {
    const o = await (
      await rt("/api/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    return (
      await Aw({ spotId: o.id, previewImageURL: t, sideImageURLs: n }), o.id
    );
  },
  Iw = async ({
    spotId: e,
    previewImageURL: t,
    currentSpotImages: n,
    sideImageURLs: r,
  }) => {
    var i;
    const o = n.find((s) => s.preview === !0);
    o.url !== t &&
      (await rt(`/api/spot-images/${o.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
      await rt(`/api/spots/${e}/images`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: t, preview: !0 }),
      }));
    const l = n.filter((s) => s.preview === !1);
    for (let s = 0; s < 5; s++)
      ((i = l[s]) == null ? void 0 : i.url) !== r[s] &&
        (l[s] &&
          (await rt(`/api/spot-images/${l[s].id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          })),
        r[s] &&
          (await rt(`/api/spots/${e}/images`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: r[s], preview: !1 }),
          })));
  },
  Fw = async ({
    body: e,
    previewImageURL: t,
    sideImageURLs: n,
    spotId: r,
    currentSpotImages: o,
  }) => {
    await rt(`/api/spots/${r}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    }),
      await Iw({
        spotId: r,
        previewImageURL: t,
        sideImageURLs: n,
        currentSpotImages: o,
      });
  },
  Uw = async (e) => {
    await rt(`/api/spots/${e}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
  wm = "spots/loadSpots",
  Sm = "spots/loadSpot",
  xm = "spots/mySpots",
  Bw = (e) => ({ type: wm, data: e }),
  bw = (e) => ({ type: Sm, data: e }),
  Vw = (e) => ({ type: xm, data: e }),
  Ww = () => async (e) => {
    const n = await (await fetch("/api/spots")).json(),
      r = {};
    for (let o in n.Spots) (o = Number(o)), (r[o + 1] = n.Spots[o]);
    e(Bw(r));
  },
  yc = (e) => async (t) => {
    const r = await (await fetch(`/api/spots/${e}`)).json();
    t(bw(r));
  },
  Em = () => async (e) => {
    const n = await (await fetch("/api/spots/current")).json(),
      r = {};
    for (let o in n.Spots) (o = Number(o)), (r[o + 1] = n.Spots[o]);
    e(Vw(r));
  },
  Hw = (e = {}, t) => {
    switch (t.type) {
      case wm:
        return { ...e, ...t.data };
      case Sm:
        return { ...e, [t.data.id]: t.data };
      case xm:
        return { ...e, mySpots: t.data };
      default:
        return e;
    }
  };
function Kw() {
  const e = rn(),
    t = dr((o) => o.spots),
    n = Object.values(t);
  x.useEffect(() => {
    e(Ww());
  }, [e]);
  const r = (o) =>
    ["id", "name", "city", "state", "previewImage", "price", "avgRating"].every(
      (i) => o[i] !== void 0,
    );
  return S.jsx("div", {
    id: "view-all-spots",
    children: n.map((o, l) => (r(o) ? S.jsx(gm, { spot: o }, l) : null)),
  });
}
const Qw = async ({ body: e, spotId: t }) => {
    try {
      await rt(`/api/spots/${t}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      });
    } catch (n) {
      return n;
    }
  },
  Yw = async (e) => {
    await rt(`/api/reviews/${e}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
  Cm = "reviews/loadReviews",
  Xw = (e) => ({ type: Cm, data: e }),
  gc = (e) => async (t) => {
    const r = await (await fetch(`/api/spots/${e}/reviews`)).json(),
      o = {};
    (o[e] = r.Reviews), t(Xw(o));
  },
  Gw = (e = {}, t) => {
    switch (t.type) {
      case Cm:
        return { ...e, ...t.data };
      default:
        return e;
    }
  };
function km({ reviewId: e, spotId: t, itemText: n }) {
  const { closeModal: r } = er(),
    o = rn(),
    l = () => {
      r(),
        n === "Spot"
          ? Uw(t).then(() => o(Em()))
          : n === "Review" && Yw(e).then(() => o(gc(t)));
    };
  return S.jsxs("div", {
    id: "confirm-delete-modal",
    children: [
      S.jsx("h1", { children: "Confirm Delete" }),
      S.jsxs("h2", {
        children: [
          "Are you sure you want to remove this ",
          n.toLowerCase(),
          "?",
        ],
      }),
      S.jsxs("button", {
        onClick: l,
        id: "yes",
        className: "clickable",
        children: ["Yes (Delete ", n, ")"],
      }),
      S.jsxs("button", {
        onClick: r,
        id: "no",
        className: "clickable",
        children: ["No (Keep ", n, ")"],
      }),
    ],
  });
}
const Zw = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
function qw(e) {
  const t = e.slice(0, 4),
    n = +e.slice(5, 7);
  return `${Zw[n]} ${t}`;
}
function Jw({ review: e, user: t, spotId: n }) {
  const r = qw(e.createdAt),
    { setModalContent: o } = er(),
    l = () =>
      S.jsxs(S.Fragment, {
        children: [
          S.jsx("button", {
            className: "clickable",
            onClick: () => alert("Feature Coming Soon..."),
            children: "Update",
          }),
          S.jsx("button", {
            className: "clickable",
            onClick: () =>
              o(S.jsx(km, { reviewId: e.id, spotId: n, itemText: "Review" })),
            children: "Delete",
          }),
        ],
      });
  return S.jsxs("div", {
    className: "review-card",
    children: [
      S.jsxs("div", {
        className: "review-name",
        children: [e.User.firstName, " ", e.User.lastName],
      }),
      S.jsx("div", { className: "review-date", children: r }),
      S.jsx("div", { children: e.review }),
      (t == null ? void 0 : t.id) === e.User.id && S.jsx(l, {}),
    ],
  });
}
function eS() {
  var g;
  const { spotId: e } = ac(),
    t = rn(),
    { closeModal: n } = er(),
    [r, o] = x.useState(""),
    [l, i] = x.useState(0),
    [s, a] = x.useState(0),
    [u, c] = x.useState({}),
    [h, m] = x.useState(!1);
  x.useEffect(() => {
    m(r.length > 9 && l);
  }, [r, l]);
  const y = Array(5)
    .fill(0)
    .map((C, d) => {
      const f = s || l;
      return S.jsx(
        "span",
        {
          onClick: () => i(d + 1),
          onMouseEnter: () => a(d + 1),
          onMouseLeave: () => a(0),
          children: f > d ? S.jsx(Pi, {}) : S.jsx(I1, {}),
        },
        d,
      );
    });
  function w(C) {
    C.preventDefault(), c({});
    let d = {};
    (d.review = r.length < 10),
      (d.rating = l === 0),
      c(d),
      Object.values(d).includes(!0) ||
        Qw({ body: { review: r, stars: l }, spotId: e })
          .then(() => {
            n(), t(yc(e)), t(gc(e));
          })
          .catch((f) => {
            c({ msg: f.message, errArr: f.errors });
          });
  }
  return S.jsxs("div", {
    id: "review-form-modal",
    children: [
      S.jsx("h1", {
        className: "review-form-modal",
        children: "How was your stay?",
      }),
      u.msg && S.jsx("p", { className: "error", children: u.msg }),
      ((g = u.errArr) == null ? void 0 : g.length) &&
        u.errArr.map((C, d) =>
          S.jsx("p", { className: "error", children: C }, d),
        ),
      S.jsx("textarea", {
        className: "review-form-modal",
        placeholder: "Leave your review here...",
        rows: 8,
        value: r,
        onChange: (C) => o(C.target.value),
      }),
      S.jsxs("div", {
        className: "review-form-modal",
        children: [
          S.jsx("span", { id: "review-stars-rating", children: y }),
          S.jsx("span", { id: "review-stars-text", children: "Stars" }),
        ],
      }),
      S.jsx("button", {
        disabled: !h,
        className: "review-form-modal",
        onClick: w,
        children: "Submit Your Review",
      }),
    ],
  });
}
function tS({ avgStarRating: e, numReviews: t }) {
  return typeof e != "number"
    ? " New"
    : ` ${e.toFixed(1)} • ${t} ${t === 1 ? "Review" : "Reviews"}`;
}
function nS(e, t) {
  const n = new Date(e.createdAt);
  return new Date(t.createdAt) - n;
}
function rS() {
  var T;
  const { spotId: e } = ac(),
    t = rn(),
    n = dr(($) => $.spots[e]),
    r = dr(($) => $.reviews[e]),
    o = dr(($) => $.session.user),
    [l, i] = x.useState(""),
    { setModalContent: s } = er(),
    a = Object.values(r || {});
  a.sort(nS);
  const {
    name: u,
    city: c,
    state: h,
    country: m,
    description: y,
    avgStarRating: w,
    price: g,
    numReviews: C,
    SpotImages: d,
    Owner: f,
  } = n || {};
  x.useEffect(() => {
    t(yc(e)), t(gc(e)), i(tS({ avgStarRating: w, numReviews: C }));
  }, [t, e, r, w, C]);
  const v = Object.values(d || {}),
    p = (T = v.find(($) => $.preview === !0)) == null ? void 0 : T.url,
    k = v.filter(($) => $.preview === !1) || [];
  function L({ Owner: $, reviewsArr: U, user: Q }) {
    const Z = {};
    return (
      Q &&
        ($ == null ? void 0 : $.id) !== (Q == null ? void 0 : Q.id) &&
        (U.find(
          (ue) =>
            (ue == null ? void 0 : ue.userId) === (Q == null ? void 0 : Q.id),
        ) ||
          (Z.button = S.jsx("button", {
            onClick: () => s(S.jsx(eS, {})),
            children: "Post Your Review",
          })),
        U.length ||
          (Z.text = S.jsx("p", {
            children: "Be the first to post a review!",
          }))),
      U.length &&
        (Z.reviews = U.map((ue, ne) =>
          S.jsx(Jw, { review: ue, spotId: e, user: Q }, ne),
        )),
      Object.keys(Z).length
        ? S.jsxs(S.Fragment, { children: [Z.button, Z.text, Z.reviews] })
        : null
    );
  }
  const _ = L({ Owner: f, reviewsArr: a, user: o });
  return (
    n &&
    S.jsxs("div", {
      id: "spot-page",
      children: [
        S.jsx("div", { id: "title", children: u }),
        S.jsx("div", { id: "location", children: `${c}, ${h}, ${m}` }),
        S.jsxs("div", {
          id: "images",
          children: [
            S.jsx("div", {
              id: "preview",
              children: S.jsx("img", { src: p, alt: "Preview Image" }),
            }),
            S.jsx("div", {
              id: "sideImages",
              children: k.map(($) =>
                S.jsx(
                  "div",
                  {
                    className: "sideImages",
                    children: S.jsx(
                      "img",
                      { src: $.url, alt: "Spot Image" },
                      $.id,
                    ),
                  },
                  $.id,
                ),
              ),
            }),
          ],
        }),
        S.jsxs("div", {
          id: "details",
          children: [
            S.jsxs("div", {
              id: "hostedBy",
              children: [
                S.jsx("div", {
                  id: "title",
                  children: `Hosted by ${f == null ? void 0 : f.firstName} ${f == null ? void 0 : f.lastName}`,
                }),
                S.jsx("div", { id: "description", children: `${y}` }),
              ],
            }),
            S.jsx("div", {
              id: "reserve",
              children: S.jsxs("div", {
                id: "reserve-card",
                children: [
                  S.jsxs("div", {
                    id: "reserve-card-head",
                    children: [
                      S.jsxs("div", {
                        id: "reserve-card-price",
                        children: ["$", g],
                      }),
                      S.jsxs("div", {
                        id: "reserve-card-text",
                        children: [
                          S.jsx("span", { children: "night" }),
                          S.jsxs("span", { children: [S.jsx(Pi, {}), l] }),
                        ],
                      }),
                    ],
                  }),
                  S.jsx("button", {
                    onClick: () => alert("Feature Coming Soon..."),
                    className: "clickable",
                    children: "Reserve",
                  }),
                ],
              }),
            }),
          ],
        }),
        S.jsxs("div", { id: "reviews-head", children: [S.jsx(Pi, {}), l] }),
        S.jsx("div", { id: "reviews-element", children: _ }),
      ],
    })
  );
}
function oS() {
  return S.jsx("h1", { id: "page-not-found", children: "Page Not Found 404" });
}
function fd() {
  const { spotId: e } = ac(),
    t = rn(),
    n = window.location.href.endsWith("edit"),
    r = dr((K) => K.spots[e]),
    o = mo(),
    [l, i] = x.useState(""),
    [s, a] = x.useState(""),
    [u, c] = x.useState(""),
    [h, m] = x.useState(""),
    [y, w] = x.useState(""),
    [g, C] = x.useState(""),
    [d, f] = x.useState(""),
    [v, p] = x.useState(""),
    [k, L] = x.useState(""),
    [_, T] = x.useState(""),
    [$, U] = x.useState(""),
    [Q, Z] = x.useState(""),
    [ue, ne] = x.useState(""),
    [q, fe] = x.useState(""),
    [Y, D] = x.useState({});
  x.useEffect(() => {
    isNaN(parseInt(e)) || t(yc(e));
  }, [t, e]),
    x.useEffect(() => {
      var X, Ve, je, me, mt, ee, Ne;
      i((r == null ? void 0 : r.country) ?? ""),
        a((r == null ? void 0 : r.address) ?? ""),
        c((r == null ? void 0 : r.city) ?? ""),
        m((r == null ? void 0 : r.state) ?? ""),
        w(String((r == null ? void 0 : r.lat) ?? "")),
        C(String((r == null ? void 0 : r.lng) ?? "")),
        f((r == null ? void 0 : r.description) ?? ""),
        p((r == null ? void 0 : r.name) ?? ""),
        L(String((r == null ? void 0 : r.price) ?? "")),
        T(
          ((Ve =
            (X = r == null ? void 0 : r.SpotImages) == null
              ? void 0
              : X.find((st) => st.preview === !0)) == null
            ? void 0
            : Ve.url) || "",
        );
      const K =
        (je = r == null ? void 0 : r.SpotImages) == null
          ? void 0
          : je.filter((st) => st.preview === !1);
      K != null &&
        K.length &&
        (U(((me = K[0]) == null ? void 0 : me.url) || ""),
        Z(((mt = K[1]) == null ? void 0 : mt.url) || ""),
        ne(((ee = K[2]) == null ? void 0 : ee.url) || ""),
        fe(((Ne = K[3]) == null ? void 0 : Ne.url) || ""));
    }, [r]);
  const b = "Image URL must end in .png, .jpg, or .jpeg",
    F = [".png", ".jpg", ".jpeg"],
    J = (K) => {
      for (let X of F) if (K.endsWith(X)) return !0;
      return !1;
    },
    se = (K) => {
      K.preventDefault(), D({});
      let X = {};
      if (
        ((X.country = !l),
        (X.address = !s),
        (X.city = !u),
        (X.state = !h),
        (X.lat = !y),
        (X.latNaN = isNaN(+y) || +y > 90 || +y < -90),
        (X.lng = !g),
        (X.lngNaN = isNaN(+g) || +g > 180 || +g < -180),
        (X.description = d.length < 30),
        (X.name = !v),
        (X.price = !k),
        (X.priceNaN = k && (isNaN(parseFloat(k)) || parseFloat(k) < 0)),
        (X.preview = !_),
        (X.image0 = _ && !J(_)),
        (X.image1 = $ && !J($)),
        (X.image2 = Q && !J(Q)),
        (X.image3 = ue && !J(ue)),
        (X.image4 = q && !J(q)),
        D(X),
        Object.values(X).includes(!0))
      )
        return;
      const Ve = [$, Q, ue, q],
        je = {
          address: s,
          city: u,
          state: h,
          country: l,
          lat: parseFloat(y),
          lng: parseFloat(g),
          name: v,
          description: d,
          price: parseInt(k),
        };
      (async () => {
        if (n)
          await Fw({
            body: je,
            previewImageURL: _,
            sideImageURLs: Ve,
            spotId: e,
            currentSpotImages: r.SpotImages,
          }),
            o(`/spots/${e}`);
        else {
          const mt = await zw({
            body: je,
            previewImageURL: _,
            sideImageURLs: Ve,
          });
          o(`/spots/${mt}`);
        }
      })();
    };
  return S.jsxs("form", {
    id: "spot-form",
    children: [
      S.jsx("h1", { children: n ? "Update your Spot" : "Create a New Spot" }),
      S.jsx("h2", { children: "Where's your place located?" }),
      S.jsx("p", {
        children:
          "Guests will only get your exact address once they booked a reservation.",
      }),
      S.jsxs("label", {
        children: [
          "Country",
          " ",
          Y.country &&
            S.jsx("span", {
              className: "error",
              children: "Country is required",
            }),
          S.jsx("input", {
            type: "text",
            placeholder: "Country",
            value: l,
            onChange: (K) => i(K.target.value),
          }),
        ],
      }),
      S.jsxs("label", {
        children: [
          "Street Address",
          " ",
          Y.address &&
            S.jsx("span", {
              className: "error",
              children: "Address is required",
            }),
          S.jsx("input", {
            type: "text",
            placeholder: "Street Address",
            value: s,
            onChange: (K) => a(K.target.value),
          }),
        ],
      }),
      S.jsxs("div", {
        children: [
          S.jsxs("label", {
            id: "city",
            children: [
              "City ",
              Y.city &&
                S.jsx("span", {
                  className: "error",
                  children: "City is required",
                }),
              S.jsx("br", {}),
              S.jsx("input", {
                type: "text",
                placeholder: "City",
                value: u,
                onChange: (K) => c(K.target.value),
              }),
              S.jsx("b", { children: " , " }),
            ],
          }),
          S.jsxs("label", {
            id: "state",
            children: [
              "State",
              " ",
              Y.state &&
                S.jsx("span", {
                  className: "error",
                  children: "State is required",
                }),
              S.jsx("br", {}),
              S.jsx("input", {
                type: "text",
                placeholder: "State",
                value: h,
                onChange: (K) => m(K.target.value),
              }),
            ],
          }),
        ],
      }),
      S.jsxs("div", {
        children: [
          S.jsxs("label", {
            id: "lat",
            children: [
              "Latitude",
              " ",
              Y.lat &&
                S.jsx("span", {
                  className: "error",
                  children: "Latitude is required",
                }),
              Y.latNaN &&
                S.jsx("span", {
                  className: "error",
                  children: "Latitude must be within -90 and 90",
                }),
              S.jsx("br", {}),
              S.jsx("input", {
                type: "text",
                placeholder: "Latitude",
                value: y,
                onChange: (K) => w(K.target.value),
              }),
              S.jsx("b", { children: " , " }),
            ],
          }),
          S.jsxs("label", {
            id: "lng",
            children: [
              "Longitude",
              " ",
              Y.lng &&
                S.jsx("span", {
                  className: "error",
                  children: "Longitude is required",
                }),
              Y.lngNaN &&
                S.jsx("span", {
                  className: "error",
                  children: "Longitude must be within -180 and 180",
                }),
              S.jsx("br", {}),
              S.jsx("input", {
                type: "text",
                placeholder: "Longitude",
                value: g,
                onChange: (K) => C(K.target.value),
              }),
            ],
          }),
        ],
      }),
      S.jsx("h2", {
        className: "new-section",
        children: "Describe your place to guests",
      }),
      S.jsx("p", {
        children:
          "Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.",
      }),
      S.jsx("textarea", {
        placeholder: "Please write at least 30 characters",
        rows: 8,
        value: d,
        onChange: (K) => f(K.target.value),
      }),
      Y.description &&
        S.jsx("span", {
          className: "error",
          children: "Description needs 30 or more characters",
        }),
      S.jsx("h2", {
        className: "new-section",
        children: "Create a title for your spot",
      }),
      S.jsx("p", {
        children:
          "Catch guests' attention with a spot title that highlights what makes your place special.",
      }),
      S.jsx("input", {
        type: "text",
        placeholder: "Name of your spot",
        value: v,
        onChange: (K) => p(K.target.value),
      }),
      Y.name &&
        S.jsx("span", { className: "error", children: "Name is required" }),
      S.jsx("h2", {
        className: "new-section",
        children: "Set a base price for your spot",
      }),
      S.jsx("p", {
        children:
          "Competitive pricing can help your listing stand out and rank higher in search results.",
      }),
      S.jsxs("div", {
        id: "price-input",
        children: [
          "$",
          S.jsx("input", {
            type: "text",
            placeholder: "Price per night (USD)",
            value: k,
            onChange: (K) => L(K.target.value),
          }),
        ],
      }),
      Y.price &&
        S.jsx("div", { className: "error", children: "Price is required" }),
      Y.priceNaN &&
        S.jsx("div", {
          className: "error",
          children: "Price per day must be a positive number",
        }),
      S.jsx("h2", {
        className: "new-section",
        children: "Liven up your spot with photos",
      }),
      S.jsx("p", {
        children: "Submit a link to at least one photo to publish your spot",
      }),
      S.jsx("input", {
        type: "text",
        placeholder: "Preview Image URL",
        value: _,
        onChange: (K) => T(K.target.value),
      }),
      Y.preview &&
        S.jsx("span", {
          className: "error",
          children: "Preview image is required",
        }),
      Y.image0 && S.jsx("span", { className: "error", children: b }),
      S.jsx("input", {
        type: "text",
        placeholder: "Image URL",
        value: $,
        onChange: (K) => U(K.target.value),
      }),
      Y.image1 && S.jsx("span", { className: "error", children: b }),
      S.jsx("input", {
        type: "text",
        placeholder: "Image URL",
        value: Q,
        onChange: (K) => Z(K.target.value),
      }),
      Y.image2 && S.jsx("span", { className: "error", children: b }),
      S.jsx("input", {
        type: "text",
        placeholder: "Image URL",
        value: ue,
        onChange: (K) => ne(K.target.value),
      }),
      Y.image3 && S.jsx("span", { className: "error", children: b }),
      S.jsx("input", {
        type: "text",
        placeholder: "Image URL",
        value: q,
        onChange: (K) => fe(K.target.value),
      }),
      Y.image4 && S.jsx("span", { className: "error", children: b }),
      S.jsx("div", {
        id: "submit-button",
        children: S.jsx("button", {
          onClick: se,
          children: n ? "Update your Spot" : "Create Spot",
        }),
      }),
    ],
  });
}
function lS({ spot: e }) {
  const t = mo(),
    { setModalContent: n } = er();
  return S.jsxs("div", {
    id: "user-spot-card",
    children: [
      S.jsx(gm, { spot: e }),
      S.jsxs("div", {
        children: [
          S.jsx("span", {
            children: S.jsx("button", {
              onClick: () => t(`/spots/${e.id}/edit`),
              className: "user-spot-card clickable",
              children: "Update",
            }),
          }),
          S.jsx("span", {
            children: S.jsx("button", {
              onClick: () => n(S.jsx(km, { spotId: e.id, itemText: "Spot" })),
              className: "clickable",
              children: "Delete",
            }),
          }),
        ],
      }),
    ],
  });
}
function iS() {
  const e = rn(),
    t = dr((r) => r.spots.mySpots),
    n = Object.values(t || {});
  return (
    x.useEffect(() => {
      e(Em());
    }, [e]),
    S.jsxs("div", {
      id: "user-spot-page",
      children: [
        S.jsx("h1", { children: "Manage Spots" }),
        n.length
          ? S.jsx("div", {
              children: n.map((r, o) => S.jsx(lS, { spot: r }, o)),
            })
          : S.jsx(y1, { to: "/spots/new", children: "Create a New Spot" }),
      ],
    })
  );
}
function sS() {
  const e = rn(),
    [t, n] = x.useState(!1);
  return (
    x.useEffect(() => {
      e(E1()).then(() => {
        n(!0);
      });
    }, [e]),
    S.jsxs(S.Fragment, {
      children: [S.jsx(j1, {}), S.jsx(b1, { isLoaded: t }), t && S.jsx(q0, {})],
    })
  );
}
const aS = l1([
  {
    element: S.jsx(sS, {}),
    children: [
      { path: "*", element: S.jsx(oS, {}) },
      { path: "/", element: S.jsx(Kw, {}) },
      { path: "/spots/new", element: S.jsx(fd, {}) },
      { path: "/spots/current", element: S.jsx(iS, {}) },
      { path: "/spots/:spotId/edit", element: S.jsx(fd, {}) },
      { path: "/spots/:spotId", element: S.jsx(rS, {}) },
    ],
  },
]);
function uS() {
  return S.jsx(p1, { router: aS });
}
function fl(e) {
  "@babel/helpers - typeof";
  return (
    (fl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fl(e)
  );
}
function cS(e, t) {
  if (fl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (fl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fS(e) {
  var t = cS(e, "string");
  return fl(t) === "symbol" ? t : String(t);
}
function dS(e, t, n) {
  return (
    (t = fS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dd(Object(n), !0).forEach(function (r) {
          dS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dd(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ze(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var hd = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  ea = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Ti = {
    INIT: "@@redux/INIT" + ea(),
    REPLACE: "@@redux/REPLACE" + ea(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ea();
    },
  };
function pS(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Rm(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ze(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ze(1));
    return n(Rm)(e, t);
  }
  if (typeof e != "function") throw new Error(Ze(2));
  var o = e,
    l = t,
    i = [],
    s = i,
    a = !1;
  function u() {
    s === i && (s = i.slice());
  }
  function c() {
    if (a) throw new Error(Ze(3));
    return l;
  }
  function h(g) {
    if (typeof g != "function") throw new Error(Ze(4));
    if (a) throw new Error(Ze(5));
    var C = !0;
    return (
      u(),
      s.push(g),
      function () {
        if (C) {
          if (a) throw new Error(Ze(6));
          (C = !1), u();
          var f = s.indexOf(g);
          s.splice(f, 1), (i = null);
        }
      }
    );
  }
  function m(g) {
    if (!pS(g)) throw new Error(Ze(7));
    if (typeof g.type > "u") throw new Error(Ze(8));
    if (a) throw new Error(Ze(9));
    try {
      (a = !0), (l = o(l, g));
    } finally {
      a = !1;
    }
    for (var C = (i = s), d = 0; d < C.length; d++) {
      var f = C[d];
      f();
    }
    return g;
  }
  function y(g) {
    if (typeof g != "function") throw new Error(Ze(10));
    (o = g), m({ type: Ti.REPLACE });
  }
  function w() {
    var g,
      C = h;
    return (
      (g = {
        subscribe: function (f) {
          if (typeof f != "object" || f === null) throw new Error(Ze(11));
          function v() {
            f.next && f.next(c());
          }
          v();
          var p = C(v);
          return { unsubscribe: p };
        },
      }),
      (g[hd] = function () {
        return this;
      }),
      g
    );
  }
  return (
    m({ type: Ti.INIT }),
    (r = { dispatch: m, subscribe: h, getState: c, replaceReducer: y }),
    (r[hd] = w),
    r
  );
}
function hS(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ti.INIT });
    if (typeof r > "u") throw new Error(Ze(12));
    if (typeof n(void 0, { type: Ti.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ze(13));
  });
}
function mS(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var l = Object.keys(n),
    i;
  try {
    hS(n);
  } catch (s) {
    i = s;
  }
  return function (a, u) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var c = !1, h = {}, m = 0; m < l.length; m++) {
      var y = l[m],
        w = n[y],
        g = a[y],
        C = w(g, u);
      if (typeof C > "u") throw (u && u.type, new Error(Ze(14)));
      (h[y] = C), (c = c || C !== g);
    }
    return (c = c || l.length !== Object.keys(a).length), c ? h : a;
  };
}
function vS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (r, o) {
          return function () {
            return r(o.apply(void 0, arguments));
          };
        });
}
function yS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        l = function () {
          throw new Error(Ze(15));
        },
        i = {
          getState: o.getState,
          dispatch: function () {
            return l.apply(void 0, arguments);
          },
        },
        s = t.map(function (a) {
          return a(i);
        });
      return (
        (l = vS.apply(void 0, s)(o.dispatch)),
        pd(pd({}, o), {}, { dispatch: l })
      );
    };
  };
}
function _m(e) {
  var t = function (r) {
    var o = r.dispatch,
      l = r.getState;
    return function (i) {
      return function (s) {
        return typeof s == "function" ? s(o, l, e) : i(s);
      };
    };
  };
  return t;
}
var Pm = _m();
Pm.withExtraArgument = _m;
const gS = Pm,
  wS = mS({ session: _1, spots: Hw, reviews: Gw });
let jm;
jm = yS(gS);
const SS = (e) => Rm(wS, e, jm),
  xS = SS();
ta.createRoot(document.getElementById("root")).render(
  S.jsx(Je.StrictMode, {
    children: S.jsx(P1, {
      children: S.jsx(Vg, { store: xS, children: S.jsx(uS, {}) }),
    }),
  }),
);
