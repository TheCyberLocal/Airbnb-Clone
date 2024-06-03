function rh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
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
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qc = { exports: {} },
  Co = {},
  Kc = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var al = Symbol.for("react.element"),
  lh = Symbol.for("react.portal"),
  oh = Symbol.for("react.fragment"),
  ih = Symbol.for("react.strict_mode"),
  uh = Symbol.for("react.profiler"),
  ah = Symbol.for("react.provider"),
  sh = Symbol.for("react.context"),
  ch = Symbol.for("react.forward_ref"),
  fh = Symbol.for("react.suspense"),
  dh = Symbol.for("react.memo"),
  ph = Symbol.for("react.lazy"),
  fs = Symbol.iterator;
function hh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fs && e[fs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xc = Object.assign,
  Gc = {};
function ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Yc);
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jc() {}
Jc.prototype = ur.prototype;
function Ku(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Yc);
}
var Yu = (Ku.prototype = new Jc());
Yu.constructor = Ku;
Xc(Yu, ur.prototype);
Yu.isPureReactComponent = !0;
var ds = Array.isArray,
  Zc = Object.prototype.hasOwnProperty,
  Xu = { current: null },
  qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function bc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zc.call(t, r) && !qc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: al,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Xu.current,
  };
}
function mh(e, t) {
  return {
    $$typeof: al,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function vh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ps = /\/+/g;
function yi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vh("" + e.key)
    : t.toString(36);
}
function Fl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case al:
          case lh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + yi(i, 0) : r),
      ds(l)
        ? ((n = ""),
          e != null && (n = e.replace(ps, "$&/") + "/"),
          Fl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Gu(l) &&
            (l = mh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ps, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ds(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + yi(o, u);
      i += Fl(o, t, n, a, l);
    }
  else if (((a = hh(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + yi(o, u++)), (i += Fl(o, t, n, a, l));
  else if (o === "object")
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
function gl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function yh(e) {
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
var Ie = { current: null },
  Il = { transition: null },
  gh = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: Xu,
  };
H.Children = {
  map: gl,
  forEach: function (e, t, n) {
    gl(
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
      gl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
H.Component = ur;
H.Fragment = oh;
H.Profiler = uh;
H.PureComponent = Ku;
H.StrictMode = ih;
H.Suspense = fh;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gh;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Xc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Xu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Zc.call(t, a) &&
        !qc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: al, type: e.type, key: l, ref: o, props: r, _owner: i };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: sh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ah, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = bc;
H.createFactory = function (e) {
  var t = bc.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: ch, render: e };
};
H.isValidElement = Gu;
H.lazy = function (e) {
  return { $$typeof: ph, _payload: { _status: -1, _result: e }, _init: yh };
};
H.memo = function (e, t) {
  return { $$typeof: dh, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Ie.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Ie.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Ie.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Ie.current.useEffect(e, t);
};
H.useId = function () {
  return Ie.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Ie.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Ie.current.useRef(e);
};
H.useState = function (e) {
  return Ie.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Ie.current.useTransition();
};
H.version = "18.2.0";
Kc.exports = H;
var E = Kc.exports;
const ef = Hc(E),
  wh = rh({ __proto__: null, default: ef }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sh = E,
  xh = Symbol.for("react.element"),
  Eh = Symbol.for("react.fragment"),
  Ch = Object.prototype.hasOwnProperty,
  kh = Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ph = { key: !0, ref: !0, __self: !0, __source: !0 };
function tf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ch.call(t, r) && !Ph.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: xh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: kh.current,
  };
}
Co.Fragment = Eh;
Co.jsx = tf;
Co.jsxs = tf;
Qc.exports = Co;
var P = Qc.exports,
  Xi = {},
  nf = { exports: {} },
  Xe = {},
  rf = { exports: {} },
  lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, I) {
    var A = j.length;
    j.push(I);
    e: for (; 0 < A; ) {
      var Z = (A - 1) >>> 1,
        ee = j[Z];
      if (0 < l(ee, I)) (j[Z] = I), (j[A] = ee), (A = Z);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var I = j[0],
      A = j.pop();
    if (A !== I) {
      j[0] = A;
      e: for (var Z = 0, ee = j.length, Ze = ee >>> 1; Z < Ze; ) {
        var Oe = 2 * (Z + 1) - 1,
          fn = j[Oe],
          Et = Oe + 1,
          jn = j[Et];
        if (0 > l(fn, A))
          Et < ee && 0 > l(jn, fn)
            ? ((j[Z] = jn), (j[Et] = A), (Z = Et))
            : ((j[Z] = fn), (j[Oe] = A), (Z = Oe));
        else if (Et < ee && 0 > l(jn, A)) (j[Z] = jn), (j[Et] = A), (Z = Et);
        else break e;
      }
    }
    return I;
  }
  function l(j, I) {
    var A = j.sortIndex - I.sortIndex;
    return A !== 0 ? A : j.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    p = 1,
    v = null,
    h = 3,
    S = !1,
    w = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(j) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= j)
        r(s), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(s);
    }
  }
  function c(j) {
    if (((g = !1), m(j), !w))
      if (n(a) !== null) (w = !0), zt(k);
      else {
        var I = n(s);
        I !== null && xt(c, I.startTime - j);
      }
  }
  function k(j, I) {
    (w = !1), g && ((g = !1), d(T), (T = -1)), (S = !0);
    var A = h;
    try {
      for (
        m(I), v = n(a);
        v !== null && (!(v.expirationTime > I) || (j && !oe()));

      ) {
        var Z = v.callback;
        if (typeof Z == "function") {
          (v.callback = null), (h = v.priorityLevel);
          var ee = Z(v.expirationTime <= I);
          (I = e.unstable_now()),
            typeof ee == "function" ? (v.callback = ee) : v === n(a) && r(a),
            m(I);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var Ze = !0;
      else {
        var Oe = n(s);
        Oe !== null && xt(c, Oe.startTime - I), (Ze = !1);
      }
      return Ze;
    } finally {
      (v = null), (h = A), (S = !1);
    }
  }
  var L = !1,
    R = null,
    T = -1,
    B = 5,
    F = -1;
  function oe() {
    return !(e.unstable_now() - F < B);
  }
  function De() {
    if (R !== null) {
      var j = e.unstable_now();
      F = j;
      var I = !0;
      try {
        I = R(!0, j);
      } finally {
        I ? mt() : ((L = !1), (R = null));
      }
    } else L = !1;
  }
  var mt;
  if (typeof f == "function")
    mt = function () {
      f(De);
    };
  else if (typeof MessageChannel < "u") {
    var cn = new MessageChannel(),
      ce = cn.port2;
    (cn.port1.onmessage = De),
      (mt = function () {
        ce.postMessage(null);
      });
  } else
    mt = function () {
      _(De, 0);
    };
  function zt(j) {
    (R = j), L || ((L = !0), mt());
  }
  function xt(j, I) {
    T = _(function () {
      j(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), zt(k));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (B = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = h;
      }
      var A = h;
      h = I;
      try {
        return j();
      } finally {
        h = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, I) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var A = h;
      h = j;
      try {
        return I();
      } finally {
        h = A;
      }
    }),
    (e.unstable_scheduleCallback = function (j, I, A) {
      var Z = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? Z + A : Z))
          : (A = Z),
        j)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = A + ee),
        (j = {
          id: p++,
          callback: I,
          priorityLevel: j,
          startTime: A,
          expirationTime: ee,
          sortIndex: -1,
        }),
        A > Z
          ? ((j.sortIndex = A),
            t(s, j),
            n(a) === null &&
              j === n(s) &&
              (g ? (d(T), (T = -1)) : (g = !0), xt(c, A - Z)))
          : ((j.sortIndex = ee), t(a, j), w || S || ((w = !0), zt(k))),
        j
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (j) {
      var I = h;
      return function () {
        var A = h;
        h = I;
        try {
          return j.apply(this, arguments);
        } finally {
          h = A;
        }
      };
    });
})(lf);
rf.exports = lf;
var Rh = rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var of = E,
  Ye = Rh;
function N(e) {
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
var uf = new Set(),
  Wr = {};
function Ln(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) uf.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gi = Object.prototype.hasOwnProperty,
  _h =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hs = {},
  ms = {};
function Nh(e) {
  return Gi.call(ms, e)
    ? !0
    : Gi.call(hs, e)
      ? !1
      : _h.test(e)
        ? (ms[e] = !0)
        : ((hs[e] = !0), !1);
}
function Lh(e, t, n, r) {
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
function Th(e, t, n, r) {
  if (t === null || typeof t > "u" || Lh(e, t, n, r)) return !0;
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
function $e(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ju = /[\-:]([a-z])/g;
function Zu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ju, Zu);
    _e[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ju, Zu);
    _e[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ju, Zu);
  _e[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new $e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qu(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Th(t, n, l, r) && (n = null),
    r || l === null
      ? Nh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wl = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  On = Symbol.for("react.fragment"),
  bu = Symbol.for("react.strict_mode"),
  Ji = Symbol.for("react.profiler"),
  af = Symbol.for("react.provider"),
  sf = Symbol.for("react.context"),
  ea = Symbol.for("react.forward_ref"),
  Zi = Symbol.for("react.suspense"),
  qi = Symbol.for("react.suspense_list"),
  ta = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  cf = Symbol.for("react.offscreen"),
  vs = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vs && e[vs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  gi;
function Nr(e) {
  if (gi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gi = (t && t[1]) || "";
    }
  return (
    `
` +
    gi +
    e
  );
}
var wi = !1;
function Si(e, t) {
  if (!e || wi) return "";
  wi = !0;
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
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (wi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function jh(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Si(e.type, !1)), e;
    case 11:
      return (e = Si(e.type.render, !1)), e;
    case 1:
      return (e = Si(e.type, !0)), e;
    default:
      return "";
  }
}
function bi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Dn:
      return "Portal";
    case Ji:
      return "Profiler";
    case bu:
      return "StrictMode";
    case Zi:
      return "Suspense";
    case qi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sf:
        return (e.displayName || "Context") + ".Consumer";
      case af:
        return (e._context.displayName || "Context") + ".Provider";
      case ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ta:
        return (
          (t = e.displayName || null), t !== null ? t : bi(e.type) || "Memo"
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return bi(e(t));
        } catch {}
    }
  return null;
}
function Mh(e) {
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
      return bi(t);
    case 8:
      return t === bu ? "StrictMode" : "Mode";
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
function nn(e) {
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
function ff(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dh(e) {
  var t = ff(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
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
function Sl(e) {
  e._valueTracker || (e._valueTracker = Dh(e));
}
function df(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ff(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eu(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ys(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pf(e, t) {
  (t = t.checked), t != null && qu(e, "checked", t, !1);
}
function tu(e, t) {
  pf(e, t);
  var n = nn(t.value),
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
    ? nu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && nu(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gs(e, t, n) {
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
function nu(e, t, n) {
  (t !== "number" || Xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lr = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ru(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ws(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Lr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function hf(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ss(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function mf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? mf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var xl,
  vf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xl = xl || document.createElement("div"),
          xl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
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
  Oh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function (e) {
  Oh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]);
  });
});
function yf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
      ? ("" + t).trim()
      : t + "px";
}
function gf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = yf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var zh = se(
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
function ou(e, t) {
  if (t) {
    if (zh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function iu(e, t) {
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
var uu = null;
function na(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var au = null,
  Yn = null,
  Xn = null;
function xs(e) {
  if ((e = fl(e))) {
    if (typeof au != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = No(t)), au(e.stateNode, e.type, t));
  }
}
function wf(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function Sf() {
  if (Yn) {
    var e = Yn,
      t = Xn;
    if (((Xn = Yn = null), xs(e), t)) for (e = 0; e < t.length; e++) xs(t[e]);
  }
}
function xf(e, t) {
  return e(t);
}
function Ef() {}
var xi = !1;
function Cf(e, t, n) {
  if (xi) return e(t, n);
  xi = !0;
  try {
    return xf(e, t, n);
  } finally {
    (xi = !1), (Yn !== null || Xn !== null) && (Ef(), Sf());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = No(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var su = !1;
if (Lt)
  try {
    var yr = {};
    Object.defineProperty(yr, "passive", {
      get: function () {
        su = !0;
      },
    }),
      window.addEventListener("test", yr, yr),
      window.removeEventListener("test", yr, yr);
  } catch {
    su = !1;
  }
function Fh(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Dr = !1,
  Gl = null,
  Jl = !1,
  cu = null,
  Ih = {
    onError: function (e) {
      (Dr = !0), (Gl = e);
    },
  };
function $h(e, t, n, r, l, o, i, u, a) {
  (Dr = !1), (Gl = null), Fh.apply(Ih, arguments);
}
function Uh(e, t, n, r, l, o, i, u, a) {
  if (($h.apply(this, arguments), Dr)) {
    if (Dr) {
      var s = Gl;
      (Dr = !1), (Gl = null);
    } else throw Error(N(198));
    Jl || ((Jl = !0), (cu = s));
  }
}
function Tn(e) {
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
function kf(e) {
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
function Es(e) {
  if (Tn(e) !== e) throw Error(N(188));
}
function Ah(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Es(l), e;
        if (o === r) return Es(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Pf(e) {
  return (e = Ah(e)), e !== null ? Rf(e) : null;
}
function Rf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _f = Ye.unstable_scheduleCallback,
  Cs = Ye.unstable_cancelCallback,
  Bh = Ye.unstable_shouldYield,
  Vh = Ye.unstable_requestPaint,
  ve = Ye.unstable_now,
  Wh = Ye.unstable_getCurrentPriorityLevel,
  ra = Ye.unstable_ImmediatePriority,
  Nf = Ye.unstable_UserBlockingPriority,
  Zl = Ye.unstable_NormalPriority,
  Hh = Ye.unstable_LowPriority,
  Lf = Ye.unstable_IdlePriority,
  ko = null,
  wt = null;
function Qh(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : Xh,
  Kh = Math.log,
  Yh = Math.LN2;
function Xh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kh(e) / Yh) | 0)) | 0;
}
var El = 64,
  Cl = 4194304;
function Tr(e) {
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
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Tr(u)) : ((o &= i), o !== 0 && (r = Tr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Tr(i)) : o !== 0 && (r = Tr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - dt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Gh(e, t) {
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
function Jh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - dt(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Gh(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function fu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tf() {
  var e = El;
  return (El <<= 1), !(El & 4194240) && (El = 64), e;
}
function Ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function Zh(e, t) {
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
    var l = 31 - dt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function la(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function jf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mf,
  oa,
  Df,
  Of,
  zf,
  du = !1,
  kl = [],
  Yt = null,
  Xt = null,
  Gt = null,
  Kr = new Map(),
  Yr = new Map(),
  Wt = [],
  qh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ks(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function gr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = fl(t)), t !== null && oa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Yt = gr(Yt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Xt = gr(Xt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Gt = gr(Gt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kr.set(o, gr(Kr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Yr.set(o, gr(Yr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ff(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kf(n)), t !== null)) {
          (e.blockedOn = t),
            zf(e.priority, function () {
              Df(n);
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
function $l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (uu = r), n.target.dispatchEvent(r), (uu = null);
    } else return (t = fl(n)), t !== null && oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ps(e, t, n) {
  $l(e) && n.delete(t);
}
function em() {
  (du = !1),
    Yt !== null && $l(Yt) && (Yt = null),
    Xt !== null && $l(Xt) && (Xt = null),
    Gt !== null && $l(Gt) && (Gt = null),
    Kr.forEach(Ps),
    Yr.forEach(Ps);
}
function wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    du ||
      ((du = !0),
      Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, em)));
}
function Xr(e) {
  function t(l) {
    return wr(l, e);
  }
  if (0 < kl.length) {
    wr(kl[0], e);
    for (var n = 1; n < kl.length; n++) {
      var r = kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && wr(Yt, e),
      Xt !== null && wr(Xt, e),
      Gt !== null && wr(Gt, e),
      Kr.forEach(t),
      Yr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    Ff(n), n.blockedOn === null && Wt.shift();
}
var Gn = Dt.ReactCurrentBatchConfig,
  bl = !0;
function tm(e, t, n, r) {
  var l = Y,
    o = Gn.transition;
  Gn.transition = null;
  try {
    (Y = 1), ia(e, t, n, r);
  } finally {
    (Y = l), (Gn.transition = o);
  }
}
function nm(e, t, n, r) {
  var l = Y,
    o = Gn.transition;
  Gn.transition = null;
  try {
    (Y = 4), ia(e, t, n, r);
  } finally {
    (Y = l), (Gn.transition = o);
  }
}
function ia(e, t, n, r) {
  if (bl) {
    var l = pu(e, t, n, r);
    if (l === null) Mi(e, t, r, eo, n), ks(e, r);
    else if (bh(l, e, t, n, r)) r.stopPropagation();
    else if ((ks(e, r), t & 4 && -1 < qh.indexOf(e))) {
      for (; l !== null; ) {
        var o = fl(l);
        if (
          (o !== null && Mf(o),
          (o = pu(e, t, n, r)),
          o === null && Mi(e, t, r, eo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Mi(e, t, r, null, n);
  }
}
var eo = null;
function pu(e, t, n, r) {
  if (((eo = null), (e = na(r)), (e = yn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function If(e) {
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
      switch (Wh()) {
        case ra:
          return 1;
        case Nf:
          return 4;
        case Zl:
        case Hh:
          return 16;
        case Lf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  ua = null,
  Ul = null;
function $f() {
  if (Ul) return Ul;
  var e,
    t = ua,
    n = t.length,
    r,
    l = "value" in Qt ? Qt.value : Qt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ul = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Al(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pl() {
  return !0;
}
function Rs() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Pl
        : Rs),
      (this.isPropagationStopped = Rs),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pl));
      },
      persist: function () {},
      isPersistent: Pl,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  aa = Ge(ar),
  cl = se({}, ar, { view: 0, detail: 0 }),
  rm = Ge(cl),
  Ci,
  ki,
  Sr,
  Po = se({}, cl, {
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
    getModifierState: sa,
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
        : (e !== Sr &&
            (Sr && e.type === "mousemove"
              ? ((Ci = e.screenX - Sr.screenX), (ki = e.screenY - Sr.screenY))
              : (ki = Ci = 0),
            (Sr = e)),
          Ci);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ki;
    },
  }),
  _s = Ge(Po),
  lm = se({}, Po, { dataTransfer: 0 }),
  om = Ge(lm),
  im = se({}, cl, { relatedTarget: 0 }),
  Pi = Ge(im),
  um = se({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  am = Ge(um),
  sm = se({}, ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cm = Ge(sm),
  fm = se({}, ar, { data: 0 }),
  Ns = Ge(fm),
  dm = {
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
  pm = {
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
  hm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hm[e]) ? !!t[e] : !1;
}
function sa() {
  return mm;
}
var vm = se({}, cl, {
    key: function (e) {
      if (e.key) {
        var t = dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? pm[e.keyCode] || "Unidentified"
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
    getModifierState: sa,
    charCode: function (e) {
      return e.type === "keypress" ? Al(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Al(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  ym = Ge(vm),
  gm = se({}, Po, {
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
  Ls = Ge(gm),
  wm = se({}, cl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sa,
  }),
  Sm = Ge(wm),
  xm = se({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Em = Ge(xm),
  Cm = se({}, Po, {
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
  km = Ge(Cm),
  Pm = [9, 13, 27, 32],
  ca = Lt && "CompositionEvent" in window,
  Or = null;
Lt && "documentMode" in document && (Or = document.documentMode);
var Rm = Lt && "TextEvent" in window && !Or,
  Uf = Lt && (!ca || (Or && 8 < Or && 11 >= Or)),
  Ts = String.fromCharCode(32),
  js = !1;
function Af(e, t) {
  switch (e) {
    case "keyup":
      return Pm.indexOf(t.keyCode) !== -1;
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
function Bf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return Bf(t);
    case "keypress":
      return t.which !== 32 ? null : ((js = !0), Ts);
    case "textInput":
      return (e = t.data), e === Ts && js ? null : e;
    default:
      return null;
  }
}
function Nm(e, t) {
  if (zn)
    return e === "compositionend" || (!ca && Af(e, t))
      ? ((e = $f()), (Ul = ua = Qt = null), (zn = !1), e)
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
      return Uf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lm = {
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
function Ms(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lm[e.type] : t === "textarea";
}
function Vf(e, t, n, r) {
  wf(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new aa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zr = null,
  Gr = null;
function Tm(e) {
  bf(e, 0);
}
function Ro(e) {
  var t = $n(e);
  if (df(t)) return e;
}
function jm(e, t) {
  if (e === "change") return t;
}
var Wf = !1;
if (Lt) {
  var Ri;
  if (Lt) {
    var _i = "oninput" in document;
    if (!_i) {
      var Ds = document.createElement("div");
      Ds.setAttribute("oninput", "return;"),
        (_i = typeof Ds.oninput == "function");
    }
    Ri = _i;
  } else Ri = !1;
  Wf = Ri && (!document.documentMode || 9 < document.documentMode);
}
function Os() {
  zr && (zr.detachEvent("onpropertychange", Hf), (Gr = zr = null));
}
function Hf(e) {
  if (e.propertyName === "value" && Ro(Gr)) {
    var t = [];
    Vf(t, Gr, e, na(e)), Cf(Tm, t);
  }
}
function Mm(e, t, n) {
  e === "focusin"
    ? (Os(), (zr = t), (Gr = n), zr.attachEvent("onpropertychange", Hf))
    : e === "focusout" && Os();
}
function Dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ro(Gr);
}
function Om(e, t) {
  if (e === "click") return Ro(t);
}
function zm(e, t) {
  if (e === "input" || e === "change") return Ro(t);
}
function Fm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Fm;
function Jr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gi.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function zs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fs(e, t) {
  var n = zs(e);
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
    n = zs(n);
  }
}
function Qf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Qf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Kf() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function fa(e) {
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
function Im(e) {
  var t = Kf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fa(n)) {
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Fs(n, o));
        var i = Fs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
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
var $m = Lt && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  hu = null,
  Fr = null,
  mu = !1;
function Is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mu ||
    Fn == null ||
    Fn !== Xl(r) ||
    ((r = Fn),
    "selectionStart" in r && fa(r)
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
    (Fr && Jr(Fr, r)) ||
      ((Fr = r),
      (r = to(hu, "onSelect")),
      0 < r.length &&
        ((t = new aa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Rl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var In = {
    animationend: Rl("Animation", "AnimationEnd"),
    animationiteration: Rl("Animation", "AnimationIteration"),
    animationstart: Rl("Animation", "AnimationStart"),
    transitionend: Rl("Transition", "TransitionEnd"),
  },
  Ni = {},
  Yf = {};
Lt &&
  ((Yf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function _o(e) {
  if (Ni[e]) return Ni[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yf) return (Ni[e] = t[n]);
  return e;
}
var Xf = _o("animationend"),
  Gf = _o("animationiteration"),
  Jf = _o("animationstart"),
  Zf = _o("transitionend"),
  qf = new Map(),
  $s =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function on(e, t) {
  qf.set(e, t), Ln(t, [e]);
}
for (var Li = 0; Li < $s.length; Li++) {
  var Ti = $s[Li],
    Um = Ti.toLowerCase(),
    Am = Ti[0].toUpperCase() + Ti.slice(1);
  on(Um, "on" + Am);
}
on(Xf, "onAnimationEnd");
on(Gf, "onAnimationIteration");
on(Jf, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(Zf, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function Us(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Uh(r, t, void 0, e), (e.currentTarget = null);
}
function bf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Us(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Us(l, u, s), (o = a);
        }
    }
  }
  if (Jl) throw ((e = cu), (Jl = !1), (cu = null), e);
}
function ne(e, t) {
  var n = t[Su];
  n === void 0 && (n = t[Su] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ed(t, e, 2, !1), n.add(r));
}
function ji(e, t, n) {
  var r = 0;
  t && (r |= 4), ed(n, e, r, t);
}
var _l = "_reactListening" + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[_l]) {
    (e[_l] = !0),
      uf.forEach(function (n) {
        n !== "selectionchange" && (Bm.has(n) || ji(n, !1, e), ji(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_l] || ((t[_l] = !0), ji("selectionchange", !1, t));
  }
}
function ed(e, t, n, r) {
  switch (If(t)) {
    case 1:
      var l = tm;
      break;
    case 4:
      l = nm;
      break;
    default:
      l = ia;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !su ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function Mi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = yn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cf(function () {
    var s = o,
      p = na(n),
      v = [];
    e: {
      var h = qf.get(e);
      if (h !== void 0) {
        var S = aa,
          w = e;
        switch (e) {
          case "keypress":
            if (Al(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = ym;
            break;
          case "focusin":
            (w = "focus"), (S = Pi);
            break;
          case "focusout":
            (w = "blur"), (S = Pi);
            break;
          case "beforeblur":
          case "afterblur":
            S = Pi;
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
            S = _s;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = om;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Sm;
            break;
          case Xf:
          case Gf:
          case Jf:
            S = am;
            break;
          case Zf:
            S = Em;
            break;
          case "scroll":
            S = rm;
            break;
          case "wheel":
            S = km;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = cm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Ls;
        }
        var g = (t & 4) !== 0,
          _ = !g && e === "scroll",
          d = g ? (h !== null ? h + "Capture" : null) : h;
        g = [];
        for (var f = s, m; f !== null; ) {
          m = f;
          var c = m.stateNode;
          if (
            (m.tag === 5 &&
              c !== null &&
              ((m = c),
              d !== null && ((c = Qr(f, d)), c != null && g.push(qr(f, c, m)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((h = new S(h, w, null, n, p)), v.push({ event: h, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          h &&
            n !== uu &&
            (w = n.relatedTarget || n.fromElement) &&
            (yn(w) || w[Tt]))
        )
          break e;
        if (
          (S || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = s),
              (w = w ? yn(w) : null),
              w !== null &&
                ((_ = Tn(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = s)),
          S !== w)
        ) {
          if (
            ((g = _s),
            (c = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ls),
              (c = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (_ = S == null ? h : $n(S)),
            (m = w == null ? h : $n(w)),
            (h = new g(c, f + "leave", S, n, p)),
            (h.target = _),
            (h.relatedTarget = m),
            (c = null),
            yn(p) === s &&
              ((g = new g(d, f + "enter", w, n, p)),
              (g.target = m),
              (g.relatedTarget = _),
              (c = g)),
            (_ = c),
            S && w)
          )
            t: {
              for (g = S, d = w, f = 0, m = g; m; m = Mn(m)) f++;
              for (m = 0, c = d; c; c = Mn(c)) m++;
              for (; 0 < f - m; ) (g = Mn(g)), f--;
              for (; 0 < m - f; ) (d = Mn(d)), m--;
              for (; f--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = Mn(g)), (d = Mn(d));
              }
              g = null;
            }
          else g = null;
          S !== null && As(v, h, S, g, !1),
            w !== null && _ !== null && As(v, _, w, g, !0);
        }
      }
      e: {
        if (
          ((h = s ? $n(s) : window),
          (S = h.nodeName && h.nodeName.toLowerCase()),
          S === "select" || (S === "input" && h.type === "file"))
        )
          var k = jm;
        else if (Ms(h))
          if (Wf) k = zm;
          else {
            k = Dm;
            var L = Mm;
          }
        else
          (S = h.nodeName) &&
            S.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = Om);
        if (k && (k = k(e, s))) {
          Vf(v, k, n, p);
          break e;
        }
        L && L(e, h, s),
          e === "focusout" &&
            (L = h._wrapperState) &&
            L.controlled &&
            h.type === "number" &&
            nu(h, "number", h.value);
      }
      switch (((L = s ? $n(s) : window), e)) {
        case "focusin":
          (Ms(L) || L.contentEditable === "true") &&
            ((Fn = L), (hu = s), (Fr = null));
          break;
        case "focusout":
          Fr = hu = Fn = null;
          break;
        case "mousedown":
          mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mu = !1), Is(v, n, p);
          break;
        case "selectionchange":
          if ($m) break;
        case "keydown":
        case "keyup":
          Is(v, n, p);
      }
      var R;
      if (ca)
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
        zn
          ? Af(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Uf &&
          n.locale !== "ko" &&
          (zn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && zn && (R = $f())
            : ((Qt = p),
              (ua = "value" in Qt ? Qt.value : Qt.textContent),
              (zn = !0))),
        (L = to(s, T)),
        0 < L.length &&
          ((T = new Ns(T, e, null, n, p)),
          v.push({ event: T, listeners: L }),
          R ? (T.data = R) : ((R = Bf(n)), R !== null && (T.data = R)))),
        (R = Rm ? _m(e, n) : Nm(e, n)) &&
          ((s = to(s, "onBeforeInput")),
          0 < s.length &&
            ((p = new Ns("onBeforeInput", "beforeinput", null, n, p)),
            v.push({ event: p, listeners: s }),
            (p.data = R)));
    }
    bf(v, t);
  });
}
function qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Qr(e, n)),
      o != null && r.unshift(qr(e, o, l)),
      (o = Qr(e, t)),
      o != null && r.push(qr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function As(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Qr(n, o)), a != null && i.unshift(qr(n, a, u)))
        : l || ((a = Qr(n, o)), a != null && i.push(qr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vm = /\r\n?/g,
  Wm = /\u0000|\uFFFD/g;
function Bs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vm,
      `
`,
    )
    .replace(Wm, "");
}
function Nl(e, t, n) {
  if (((t = Bs(t)), Bs(e) !== t && n)) throw Error(N(425));
}
function no() {}
var vu = null,
  yu = null;
function gu(e, t) {
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
var wu = typeof setTimeout == "function" ? setTimeout : void 0,
  Hm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vs = typeof Promise == "function" ? Promise : void 0,
  Qm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vs < "u"
        ? function (e) {
            return Vs.resolve(null).then(e).catch(Km);
          }
        : wu;
function Km(e) {
  setTimeout(function () {
    throw e;
  });
}
function Di(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xr(t);
}
function Jt(e) {
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
function Ws(e) {
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
var sr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + sr,
  br = "__reactProps$" + sr,
  Tt = "__reactContainer$" + sr,
  Su = "__reactEvents$" + sr,
  Ym = "__reactListeners$" + sr,
  Xm = "__reactHandles$" + sr;
function yn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ws(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Ws(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fl(e) {
  return (
    (e = e[gt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function No(e) {
  return e[br] || null;
}
var xu = [],
  Un = -1;
function un(e) {
  return { current: e };
}
function re(e) {
  0 > Un || ((e.current = xu[Un]), (xu[Un] = null), Un--);
}
function te(e, t) {
  Un++, (xu[Un] = e.current), (e.current = t);
}
var rn = {},
  Me = un(rn),
  Be = un(!1),
  Cn = rn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  re(Be), re(Me);
}
function Hs(e, t, n) {
  if (Me.current !== rn) throw Error(N(168));
  te(Me, t), te(Be, n);
}
function td(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Mh(e) || "Unknown", l));
  return se({}, n, r);
}
function lo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (Cn = Me.current),
    te(Me, e),
    te(Be, Be.current),
    !0
  );
}
function Qs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = td(e, t, Cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Be),
      re(Me),
      te(Me, e))
    : re(Be),
    te(Be, n);
}
var Pt = null,
  Lo = !1,
  Oi = !1;
function nd(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Gm(e) {
  (Lo = !0), nd(e);
}
function an() {
  if (!Oi && Pt !== null) {
    Oi = !0;
    var e = 0,
      t = Y;
    try {
      var n = Pt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Lo = !1);
    } catch (l) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), _f(ra, an), l);
    } finally {
      (Y = t), (Oi = !1);
    }
  }
  return null;
}
var An = [],
  Bn = 0,
  oo = null,
  io = 0,
  be = [],
  et = 0,
  kn = null,
  Rt = 1,
  _t = "";
function mn(e, t) {
  (An[Bn++] = io), (An[Bn++] = oo), (oo = e), (io = t);
}
function rd(e, t, n) {
  (be[et++] = Rt), (be[et++] = _t), (be[et++] = kn), (kn = e);
  var r = Rt;
  e = _t;
  var l = 32 - dt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - dt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Rt = (1 << (32 - dt(t) + l)) | (n << l) | r),
      (_t = o + e);
  } else (Rt = (1 << o) | (n << l) | r), (_t = e);
}
function da(e) {
  e.return !== null && (mn(e, 1), rd(e, 1, 0));
}
function pa(e) {
  for (; e === oo; )
    (oo = An[--Bn]), (An[Bn] = null), (io = An[--Bn]), (An[Bn] = null);
  for (; e === kn; )
    (kn = be[--et]),
      (be[et] = null),
      (_t = be[--et]),
      (be[et] = null),
      (Rt = be[--et]),
      (be[et] = null);
}
var Ke = null,
  Qe = null,
  le = !1,
  ft = null;
function ld(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ks(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Qe = Jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ke = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Rt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ke = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Eu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cu(e) {
  if (le) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!Ks(e, t)) {
        if (Eu(e)) throw Error(N(418));
        t = Jt(n.nextSibling);
        var r = Ke;
        t && Ks(e, t)
          ? ld(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ke = e));
      }
    } else {
      if (Eu(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ke = e);
    }
  }
}
function Ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Ll(e) {
  if (e !== Ke) return !1;
  if (!le) return Ys(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Eu(e)) throw (od(), Error(N(418)));
    for (; t; ) ld(e, t), (t = Jt(t.nextSibling));
  }
  if ((Ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ke ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function od() {
  for (var e = Qe; e; ) e = Jt(e.nextSibling);
}
function tr() {
  (Qe = Ke = null), (le = !1);
}
function ha(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Jm = Dt.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uo = un(null),
  ao = null,
  Vn = null,
  ma = null;
function va() {
  ma = Vn = ao = null;
}
function ya(e) {
  var t = uo.current;
  re(uo), (e._currentValue = t);
}
function ku(e, t, n) {
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
function Jn(e, t) {
  (ao = e),
    (ma = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (ma !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (ao === null) throw Error(N(308));
      (Vn = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var gn = null;
function ga(e) {
  gn === null ? (gn = [e]) : gn.push(e);
}
function id(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ga(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
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
var Vt = !1;
function wa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ud(e, t) {
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
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ga(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), la(e, n);
  }
}
function Xs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
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
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function so(e, t, n, r) {
  var l = e.updateQueue;
  Vt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
        (p.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (p = s = a = null), (u = o);
    do {
      var h = u.lane,
        S = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            g = u;
          switch (((h = t), (S = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                v = w.call(S, v, h);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (h = typeof w == "function" ? w.call(S, v, h) : w),
                h == null)
              )
                break e;
              v = se({}, v, h);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (S = {
          eventTime: S,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = S), (a = v)) : (p = p.next = S),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Rn |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function Gs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var ad = new of.Component().refs;
function Pu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var To = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = bt(e),
      o = Nt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (pt(t, e, l, r), Bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = bt(e),
      o = Nt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (pt(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = bt(e),
      l = Nt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Zt(e, l, r)),
      t !== null && (pt(t, e, r, n), Bl(t, e, r));
  },
};
function Js(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jr(n, r) || !Jr(l, o)
        : !0
  );
}
function sd(e, t, n) {
  var r = !1,
    l = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = rt(o))
      : ((l = Ve(t) ? Cn : Me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? er(e, l) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = To),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && To.enqueueReplaceState(t, t.state, null);
}
function Ru(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = ad), wa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = rt(o))
    : ((o = Ve(t) ? Cn : Me.current), (l.context = er(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Pu(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && To.enqueueReplaceState(l, l.state, null),
      so(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === ad && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Tl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function qs(e) {
  var t = e._init;
  return t(e._payload);
}
function cd(e) {
  function t(d, f) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [f]), (d.flags |= 16)) : m.push(f);
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
  function l(d, f) {
    return (d = en(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((d.flags |= 2), f) : m)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, m, c) {
    return f === null || f.tag !== 6
      ? ((f = Bi(m, d.mode, c)), (f.return = d), f)
      : ((f = l(f, m)), (f.return = d), f);
  }
  function a(d, f, m, c) {
    var k = m.type;
    return k === On
      ? p(d, f, m.props.children, c, m.key)
      : f !== null &&
          (f.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === Bt &&
              qs(k) === f.type))
        ? ((c = l(f, m.props)), (c.ref = xr(d, f, m)), (c.return = d), c)
        : ((c = Yl(m.type, m.key, m.props, null, d.mode, c)),
          (c.ref = xr(d, f, m)),
          (c.return = d),
          c);
  }
  function s(d, f, m, c) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = Vi(m, d.mode, c)), (f.return = d), f)
      : ((f = l(f, m.children || [])), (f.return = d), f);
  }
  function p(d, f, m, c, k) {
    return f === null || f.tag !== 7
      ? ((f = En(m, d.mode, c, k)), (f.return = d), f)
      : ((f = l(f, m)), (f.return = d), f);
  }
  function v(d, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Bi("" + f, d.mode, m)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case wl:
          return (
            (m = Yl(f.type, f.key, f.props, null, d.mode, m)),
            (m.ref = xr(d, null, f)),
            (m.return = d),
            m
          );
        case Dn:
          return (f = Vi(f, d.mode, m)), (f.return = d), f;
        case Bt:
          var c = f._init;
          return v(d, c(f._payload), m);
      }
      if (Lr(f) || vr(f))
        return (f = En(f, d.mode, m, null)), (f.return = d), f;
      Tl(d, f);
    }
    return null;
  }
  function h(d, f, m, c) {
    var k = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : u(d, f, "" + m, c);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wl:
          return m.key === k ? a(d, f, m, c) : null;
        case Dn:
          return m.key === k ? s(d, f, m, c) : null;
        case Bt:
          return (k = m._init), h(d, f, k(m._payload), c);
      }
      if (Lr(m) || vr(m)) return k !== null ? null : p(d, f, m, c, null);
      Tl(d, m);
    }
    return null;
  }
  function S(d, f, m, c, k) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (d = d.get(m) || null), u(f, d, "" + c, k);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wl:
          return (d = d.get(c.key === null ? m : c.key) || null), a(f, d, c, k);
        case Dn:
          return (d = d.get(c.key === null ? m : c.key) || null), s(f, d, c, k);
        case Bt:
          var L = c._init;
          return S(d, f, m, L(c._payload), k);
      }
      if (Lr(c) || vr(c)) return (d = d.get(m) || null), p(f, d, c, k, null);
      Tl(f, c);
    }
    return null;
  }
  function w(d, f, m, c) {
    for (
      var k = null, L = null, R = f, T = (f = 0), B = null;
      R !== null && T < m.length;
      T++
    ) {
      R.index > T ? ((B = R), (R = null)) : (B = R.sibling);
      var F = h(d, R, m[T], c);
      if (F === null) {
        R === null && (R = B);
        break;
      }
      e && R && F.alternate === null && t(d, R),
        (f = o(F, f, T)),
        L === null ? (k = F) : (L.sibling = F),
        (L = F),
        (R = B);
    }
    if (T === m.length) return n(d, R), le && mn(d, T), k;
    if (R === null) {
      for (; T < m.length; T++)
        (R = v(d, m[T], c)),
          R !== null &&
            ((f = o(R, f, T)), L === null ? (k = R) : (L.sibling = R), (L = R));
      return le && mn(d, T), k;
    }
    for (R = r(d, R); T < m.length; T++)
      (B = S(R, d, T, m[T], c)),
        B !== null &&
          (e && B.alternate !== null && R.delete(B.key === null ? T : B.key),
          (f = o(B, f, T)),
          L === null ? (k = B) : (L.sibling = B),
          (L = B));
    return (
      e &&
        R.forEach(function (oe) {
          return t(d, oe);
        }),
      le && mn(d, T),
      k
    );
  }
  function g(d, f, m, c) {
    var k = vr(m);
    if (typeof k != "function") throw Error(N(150));
    if (((m = k.call(m)), m == null)) throw Error(N(151));
    for (
      var L = (k = null), R = f, T = (f = 0), B = null, F = m.next();
      R !== null && !F.done;
      T++, F = m.next()
    ) {
      R.index > T ? ((B = R), (R = null)) : (B = R.sibling);
      var oe = h(d, R, F.value, c);
      if (oe === null) {
        R === null && (R = B);
        break;
      }
      e && R && oe.alternate === null && t(d, R),
        (f = o(oe, f, T)),
        L === null ? (k = oe) : (L.sibling = oe),
        (L = oe),
        (R = B);
    }
    if (F.done) return n(d, R), le && mn(d, T), k;
    if (R === null) {
      for (; !F.done; T++, F = m.next())
        (F = v(d, F.value, c)),
          F !== null &&
            ((f = o(F, f, T)), L === null ? (k = F) : (L.sibling = F), (L = F));
      return le && mn(d, T), k;
    }
    for (R = r(d, R); !F.done; T++, F = m.next())
      (F = S(R, d, T, F.value, c)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? T : F.key),
          (f = o(F, f, T)),
          L === null ? (k = F) : (L.sibling = F),
          (L = F));
    return (
      e &&
        R.forEach(function (De) {
          return t(d, De);
        }),
      le && mn(d, T),
      k
    );
  }
  function _(d, f, m, c) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === On &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case wl:
          e: {
            for (var k = m.key, L = f; L !== null; ) {
              if (L.key === k) {
                if (((k = m.type), k === On)) {
                  if (L.tag === 7) {
                    n(d, L.sibling),
                      (f = l(L, m.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  L.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Bt &&
                    qs(k) === L.type)
                ) {
                  n(d, L.sibling),
                    (f = l(L, m.props)),
                    (f.ref = xr(d, L, m)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, L);
                break;
              } else t(d, L);
              L = L.sibling;
            }
            m.type === On
              ? ((f = En(m.props.children, d.mode, c, m.key)),
                (f.return = d),
                (d = f))
              : ((c = Yl(m.type, m.key, m.props, null, d.mode, c)),
                (c.ref = xr(d, f, m)),
                (c.return = d),
                (d = c));
          }
          return i(d);
        case Dn:
          e: {
            for (L = m.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, m.children || [])),
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
            (f = Vi(m, d.mode, c)), (f.return = d), (d = f);
          }
          return i(d);
        case Bt:
          return (L = m._init), _(d, f, L(m._payload), c);
      }
      if (Lr(m)) return w(d, f, m, c);
      if (vr(m)) return g(d, f, m, c);
      Tl(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, m)), (f.return = d), (d = f))
          : (n(d, f), (f = Bi(m, d.mode, c)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return _;
}
var nr = cd(!0),
  fd = cd(!1),
  dl = {},
  St = un(dl),
  el = un(dl),
  tl = un(dl);
function wn(e) {
  if (e === dl) throw Error(N(174));
  return e;
}
function Sa(e, t) {
  switch ((te(tl, t), te(el, e), te(St, dl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = lu(t, e));
  }
  re(St), te(St, t);
}
function rr() {
  re(St), re(el), re(tl);
}
function dd(e) {
  wn(tl.current);
  var t = wn(St.current),
    n = lu(t, e.type);
  t !== n && (te(el, e), te(St, n));
}
function xa(e) {
  el.current === e && (re(St), re(el));
}
var ue = un(0);
function co(e) {
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
var zi = [];
function Ea() {
  for (var e = 0; e < zi.length; e++)
    zi[e]._workInProgressVersionPrimary = null;
  zi.length = 0;
}
var Vl = Dt.ReactCurrentDispatcher,
  Fi = Dt.ReactCurrentBatchConfig,
  Pn = 0,
  ae = null,
  Se = null,
  Ee = null,
  fo = !1,
  Ir = !1,
  nl = 0,
  Zm = 0;
function Ne() {
  throw Error(N(321));
}
function Ca(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function ka(e, t, n, r, l, o) {
  if (
    ((Pn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vl.current = e === null || e.memoizedState === null ? tv : nv),
    (e = n(r, l)),
    Ir)
  ) {
    o = 0;
    do {
      if (((Ir = !1), (nl = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Ee = Se = null),
        (t.updateQueue = null),
        (Vl.current = rv),
        (e = n(r, l));
    } while (Ir);
  }
  if (
    ((Vl.current = po),
    (t = Se !== null && Se.next !== null),
    (Pn = 0),
    (Ee = Se = ae = null),
    (fo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Pa() {
  var e = nl !== 0;
  return (nl = 0), e;
}
function yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (ae.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function lt() {
  if (Se === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Ee === null ? ae.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (Se = e);
  else {
    if (e === null) throw Error(N(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      Ee === null ? (ae.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function rl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ii(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Se,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var p = s.lane;
      if ((Pn & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = v), (i = r)) : (a = a.next = v),
          (ae.lanes |= p),
          (Rn |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      ht(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (Rn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $i(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ht(o, t.memoizedState) || (Ae = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function pd() {}
function hd(e, t) {
  var n = ae,
    r = lt(),
    l = t(),
    o = !ht(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ae = !0)),
    (r = r.queue),
    Ra(yd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ll(9, vd.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(N(349));
    Pn & 30 || md(n, t, l);
  }
  return l;
}
function md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gd(t) && wd(e);
}
function yd(e, t, n) {
  return n(function () {
    gd(t) && wd(e);
  });
}
function gd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function wd(e) {
  var t = jt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function bs(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ev.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function ll(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sd() {
  return lt().memoizedState;
}
function Wl(e, t, n, r) {
  var l = yt();
  (ae.flags |= e),
    (l.memoizedState = ll(1 | t, n, void 0, r === void 0 ? null : r));
}
function jo(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Se !== null) {
    var i = Se.memoizedState;
    if (((o = i.destroy), r !== null && Ca(r, i.deps))) {
      l.memoizedState = ll(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = ll(1 | t, n, o, r));
}
function ec(e, t) {
  return Wl(8390656, 8, e, t);
}
function Ra(e, t) {
  return jo(2048, 8, e, t);
}
function xd(e, t) {
  return jo(4, 2, e, t);
}
function Ed(e, t) {
  return jo(4, 4, e, t);
}
function Cd(e, t) {
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
function kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), jo(4, 4, Cd.bind(null, t, e), n)
  );
}
function _a() {}
function Pd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ca(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ca(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _d(e, t, n) {
  return Pn & 21
    ? (ht(n, t) || ((n = Tf()), (ae.lanes |= n), (Rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function qm(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fi.transition;
  Fi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Fi.transition = r);
  }
}
function Nd() {
  return lt().memoizedState;
}
function bm(e, t, n) {
  var r = bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ld(e))
  )
    Td(t, n);
  else if (((n = id(e, t, n, r)), n !== null)) {
    var l = Fe();
    pt(n, e, r, l), jd(n, t, r);
  }
}
function ev(e, t, n) {
  var r = bt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ld(e)) Td(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), ht(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ga(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = id(e, t, l, r)),
      n !== null && ((l = Fe()), pt(n, e, r, l), jd(n, t, r));
  }
}
function Ld(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Td(e, t) {
  Ir = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), la(e, n);
  }
}
var po = {
    readContext: rt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  tv = {
    readContext: rt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: ec,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wl(4194308, 4, Cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = yt();
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
        (e = e.dispatch = bm.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bs,
    useDebugValue: _a,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = bs(!1),
        t = e[0];
      return (e = qm.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = yt();
      if (le) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(N(349));
        Pn & 30 || md(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ec(yd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ll(9, vd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = yt(),
        t = Ce.identifierPrefix;
      if (le) {
        var n = _t,
          r = Rt;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nv = {
    readContext: rt,
    useCallback: Pd,
    useContext: rt,
    useEffect: Ra,
    useImperativeHandle: kd,
    useInsertionEffect: xd,
    useLayoutEffect: Ed,
    useMemo: Rd,
    useReducer: Ii,
    useRef: Sd,
    useState: function () {
      return Ii(rl);
    },
    useDebugValue: _a,
    useDeferredValue: function (e) {
      var t = lt();
      return _d(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ii(rl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: pd,
    useSyncExternalStore: hd,
    useId: Nd,
    unstable_isNewReconciler: !1,
  },
  rv = {
    readContext: rt,
    useCallback: Pd,
    useContext: rt,
    useEffect: Ra,
    useImperativeHandle: kd,
    useInsertionEffect: xd,
    useLayoutEffect: Ed,
    useMemo: Rd,
    useReducer: $i,
    useRef: Sd,
    useState: function () {
      return $i(rl);
    },
    useDebugValue: _a,
    useDeferredValue: function (e) {
      var t = lt();
      return Se === null ? (t.memoizedState = e) : _d(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = $i(rl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: pd,
    useSyncExternalStore: hd,
    useId: Nd,
    unstable_isNewReconciler: !1,
  };
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _u(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lv = typeof WeakMap == "function" ? WeakMap : Map;
function Md(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (Iu = r)), _u(e, t);
    }),
    n
  );
}
function Dd(e, t, n) {
  (n = Nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        _u(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        _u(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function tc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = gv.bind(null, e, t, n)), t.then(e, e));
}
function nc(e) {
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
function rc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ov = Dt.ReactCurrentOwner,
  Ae = !1;
function ze(e, t, n, r) {
  t.child = e === null ? fd(t, null, n, r) : nr(t, e.child, n, r);
}
function lc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jn(t, l),
    (r = ka(e, t, n, r, o, l)),
    (n = Pa()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (le && n && da(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function oc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !za(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Od(e, t, o, r, l))
      : ((e = Yl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(i, r) && e.ref === t.ref)
    )
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = en(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Od(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Jr(o, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return Nu(e, t, n, r, l);
}
function zd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Hn, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(Hn, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        te(Hn, He),
        (He |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Hn, He),
      (He |= r);
  return ze(e, t, l, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nu(e, t, n, r, l) {
  var o = Ve(n) ? Cn : Me.current;
  return (
    (o = er(t, o)),
    Jn(t, l),
    (n = ka(e, t, n, r, o, l)),
    (r = Pa()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (le && r && da(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function ic(e, t, n, r, l) {
  if (Ve(n)) {
    var o = !0;
    lo(t);
  } else o = !1;
  if ((Jn(t, l), t.stateNode === null))
    Hl(e, t), sd(t, n, r), Ru(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((s = Ve(n) ? Cn : Me.current), (s = er(t, s)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && Zs(t, i, r, s)),
      (Vt = !1);
    var h = t.memoizedState;
    (i.state = h),
      so(t, r, i, l),
      (a = t.memoizedState),
      u !== r || h !== a || Be.current || Vt
        ? (typeof p == "function" && (Pu(t, n, p, r), (a = t.memoizedState)),
          (u = Vt || Js(t, n, u, r, h, a, s))
            ? (v ||
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
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ud(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : at(t.type, u)),
      (i.props = s),
      (v = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = rt(a))
        : ((a = Ve(n) ? Cn : Me.current), (a = er(t, a)));
    var S = n.getDerivedStateFromProps;
    (p =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== v || h !== a) && Zs(t, i, r, a)),
      (Vt = !1),
      (h = t.memoizedState),
      (i.state = h),
      so(t, r, i, l);
    var w = t.memoizedState;
    u !== v || h !== w || Be.current || Vt
      ? (typeof S == "function" && (Pu(t, n, S, r), (w = t.memoizedState)),
        (s = Vt || Js(t, n, s, r, h, w, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Lu(e, t, n, r, o, l);
}
function Lu(e, t, n, r, l, o) {
  Fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Qs(t, n, !1), Mt(e, t, o);
  (r = t.stateNode), (ov.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nr(t, e.child, null, o)), (t.child = nr(t, null, u, o)))
      : ze(e, t, u, o),
    (t.memoizedState = r.state),
    l && Qs(t, n, !0),
    t.child
  );
}
function Id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hs(e, t.context, !1),
    Sa(e, t.containerInfo);
}
function uc(e, t, n, r, l) {
  return tr(), ha(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var Tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ju(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $d(e, t, n) {
  var r = t.pendingProps,
    l = ue.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(ue, l & 1),
    e === null)
  )
    return (
      Cu(t),
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
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Oo(i, r, 0, null)),
              (e = En(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ju(n)),
              (t.memoizedState = Tu),
              e)
            : Na(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return iv(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = en(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = en(u, o)) : ((o = En(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ju(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Tu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = en(o, { mode: "visible", children: r.children })),
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
function Na(e, t) {
  return (
    (t = Oo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jl(e, t, n, r) {
  return (
    r !== null && ha(r),
    nr(t, e.child, null, n),
    (e = Na(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function iv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ui(Error(N(422)))), jl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Oo({ mode: "visible", children: r.children }, l, 0, null)),
          (o = En(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && nr(t, e.child, null, i),
          (t.child.memoizedState = ju(i)),
          (t.memoizedState = Tu),
          o);
  if (!(t.mode & 1)) return jl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(N(419))), (r = Ui(o, r, void 0)), jl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ae || u)) {
    if (((r = Ce), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), jt(e, l), pt(r, e, l, -1));
    }
    return Oa(), (r = Ui(Error(N(421)))), jl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Qe = Jt(l.nextSibling)),
      (Ke = t),
      (le = !0),
      (ft = null),
      e !== null &&
        ((be[et++] = Rt),
        (be[et++] = _t),
        (be[et++] = kn),
        (Rt = e.id),
        (_t = e.overflow),
        (kn = t)),
      (t = Na(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ac(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ku(e.return, t, n);
}
function Ai(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ud(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ze(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
        else if (e.tag === 19) ac(e, n, t);
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
  if ((te(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && co(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ai(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && co(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ai(t, !0, n, null, o);
        break;
      case "together":
        Ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uv(e, t, n) {
  switch (t.tag) {
    case 3:
      Id(t), tr();
      break;
    case 5:
      dd(t);
      break;
    case 1:
      Ve(t.type) && lo(t);
      break;
    case 4:
      Sa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(uo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? $d(e, t, n)
            : (te(ue, ue.current & 1),
              (e = Mt(e, t, n)),
              e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ud(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zd(e, t, n);
  }
  return Mt(e, t, n);
}
var Ad, Mu, Bd, Vd;
Ad = function (e, t) {
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
Mu = function () {};
Bd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), wn(St.current);
    var o = null;
    switch (n) {
      case "input":
        (l = eu(e, l)), (r = eu(e, r)), (o = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ru(e, l)), (r = ru(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = no);
    }
    ou(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Wr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (o = o || []).push(s, "" + a)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Wr.hasOwnProperty(s)
                  ? (a != null && s === "onScroll" && ne("scroll", e),
                    o || u === a || (o = []))
                  : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
  if (!le)
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
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function av(e, t, n) {
  var r = t.pendingProps;
  switch ((pa(t), t.tag)) {
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
      return Le(t), null;
    case 1:
      return Ve(t.type) && ro(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        re(Be),
        re(Me),
        Ea(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Au(ft), (ft = null)))),
        Mu(e, t),
        Le(t),
        null
      );
    case 5:
      xa(t);
      var l = wn(tl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Bd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Le(t), null;
        }
        if (((e = wn(St.current)), Ll(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[br] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jr.length; l++) ne(jr[l], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              ys(r, o), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              ws(r, o), ne("invalid", r);
          }
          ou(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Nl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Wr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), gs(r, o, !0);
              break;
            case "textarea":
              Sl(r), Ss(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = no);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = mf(n)),
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
            (e[gt] = t),
            (e[br] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = iu(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) ne(jr[l], e);
                l = r;
                break;
              case "source":
                ne("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (l = r);
                break;
              case "details":
                ne("toggle", e), (l = r);
                break;
              case "input":
                ys(e, r), (l = eu(e, r)), ne("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                ws(e, r), (l = ru(e, r)), ne("invalid", e);
                break;
              default:
                l = r;
            }
            ou(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? gf(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && vf(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Hr(e, a)
                        : typeof a == "number" && Hr(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Wr.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && ne("scroll", e)
                          : a != null && qu(e, o, a, i));
              }
            switch (n) {
              case "input":
                Sl(e), gs(e, r, !1);
                break;
              case "textarea":
                Sl(e), Ss(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Kn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = no);
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
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = wn(tl.current)), wn(St.current), Ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (o = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (re(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Qe !== null && t.mode & 1 && !(t.flags & 128))
          od(), tr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[gt] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else ft !== null && (Au(ft), (ft = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : Oa())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        rr(), Mu(e, t), e === null && Zr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return ya(t.type._context), Le(t), null;
    case 17:
      return Ve(t.type) && ro(), Le(t), null;
    case 19:
      if ((re(ue), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Er(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = co(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Er(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > or &&
            ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
            )
              return Le(t), null;
          } else
            2 * ve() - o.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ue.current),
          te(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        Da(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function sv(e, t) {
  switch ((pa(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        re(Be),
        re(Me),
        Ea(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xa(t), null;
    case 13:
      if (
        (re(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ue), null;
    case 4:
      return rr(), null;
    case 10:
      return ya(t.type._context), null;
    case 22:
    case 23:
      return Da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ml = !1,
  je = !1,
  cv = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Du(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var sc = !1;
function fv(e, t) {
  if (((vu = bl), (e = Kf()), fa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            p = 0,
            v = e,
            h = null;
          t: for (;;) {
            for (
              var S;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (S = v.firstChild) !== null;

            )
              (h = v), (v = S);
            for (;;) {
              if (v === e) break t;
              if (
                (h === n && ++s === l && (u = i),
                h === o && ++p === r && (a = i),
                (S = v.nextSibling) !== null)
              )
                break;
              (v = h), (h = v.parentNode);
            }
            v = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yu = { focusedElem: e, selectionRange: n }, bl = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
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
                    _ = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : at(t.type, g),
                      _,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (c) {
          fe(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (w = sc), (sc = !1), w;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Du(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Mo(e, t) {
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
function Ou(e) {
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
function Wd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[br], delete t[Su], delete t[Ym], delete t[Xm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hd(e.return)) return null;
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
function zu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zu(e, t, n), e = e.sibling; e !== null; ) zu(e, t, n), (e = e.sibling);
}
function Fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fu(e, t, n), e = e.sibling; e !== null; ) Fu(e, t, n), (e = e.sibling);
}
var Pe = null,
  st = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) Qd(e, t, n), (n = n.sibling);
}
function Qd(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Wn(n, t);
    case 6:
      var r = Pe,
        l = st;
      (Pe = null),
        Ut(e, t, n),
        (Pe = r),
        (st = l),
        Pe !== null &&
          (st
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (st
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Di(e.parentNode, n)
              : e.nodeType === 1 && Di(e, n),
            Xr(e))
          : Di(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (l = st),
        (Pe = n.stateNode.containerInfo),
        (st = !0),
        Ut(e, t, n),
        (Pe = r),
        (st = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Du(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          fe(n, t, u);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Ut(e, t, n), (je = r))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function fc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new cv()),
      t.forEach(function (r) {
        var l = Sv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Pe = u.stateNode), (st = !1);
              break e;
            case 3:
              (Pe = u.stateNode.containerInfo), (st = !0);
              break e;
            case 4:
              (Pe = u.stateNode.containerInfo), (st = !0);
              break e;
          }
          u = u.return;
        }
        if (Pe === null) throw Error(N(160));
        Qd(o, i, l), (Pe = null), (st = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        fe(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Kd(t, e), (t = t.sibling);
}
function Kd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), vt(e), r & 4)) {
        try {
          $r(3, e, e.return), Mo(3, e);
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          $r(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      ut(t, e), vt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        vt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Hr(l, "");
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && pf(l, o),
              iu(u, i);
            var s = iu(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                v = a[i + 1];
              p === "style"
                ? gf(l, v)
                : p === "dangerouslySetInnerHTML"
                  ? vf(l, v)
                  : p === "children"
                    ? Hr(l, v)
                    : qu(l, p, v, s);
            }
            switch (u) {
              case "input":
                tu(l, o);
                break;
              case "textarea":
                hf(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Kn(l, !!o.multiple, S, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Kn(l, !!o.multiple, o.defaultValue, !0)
                      : Kn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[br] = o;
          } catch (g) {
            fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ut(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (g) {
          fe(e, e.return, g);
        }
      break;
    case 4:
      ut(t, e), vt(e);
      break;
    case 13:
      ut(t, e),
        vt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ja = ve())),
        r & 4 && fc(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (s = je) || p), ut(t, e), (je = s)) : ut(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (D = e, p = e.child; p !== null; ) {
            for (v = D = p; D !== null; ) {
              switch (((h = D), (S = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, h, h.return);
                  break;
                case 1:
                  Wn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      fe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Wn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    pc(v);
                    continue;
                  }
              }
              S !== null ? ((S.return = h), (D = S)) : pc(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = yf("display", i)));
              } catch (g) {
                fe(e, e.return, g);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (g) {
                fe(e, e.return, g);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), vt(e), r & 4 && fc(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hr(l, ""), (r.flags &= -33));
          var o = cc(e);
          Fu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = cc(e);
          zu(e, u, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dv(e, t, n) {
  (D = e), Yd(e);
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Ml;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || je;
        u = Ml;
        var s = je;
        if (((Ml = i), (je = a) && !s))
          for (D = l; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? hc(l)
                : a !== null
                  ? ((a.return = i), (D = a))
                  : hc(l);
        for (; o !== null; ) (D = o), Yd(o), (o = o.sibling);
        (D = l), (Ml = u), (je = s);
      }
      dc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : dc(e);
  }
}
function dc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Gs(t, o, r);
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
                Gs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
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
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Xr(v);
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
              throw Error(N(163));
          }
        je || (t.flags & 512 && Ou(t));
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function pc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function hc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mo(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, l, a);
            }
          }
          var o = t.return;
          try {
            Ou(t);
          } catch (a) {
            fe(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ou(t);
          } catch (a) {
            fe(t, i, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (D = u);
      break;
    }
    D = t.return;
  }
}
var pv = Math.ceil,
  ho = Dt.ReactCurrentDispatcher,
  La = Dt.ReactCurrentOwner,
  nt = Dt.ReactCurrentBatchConfig,
  K = 0,
  Ce = null,
  ge = null,
  Re = 0,
  He = 0,
  Hn = un(0),
  xe = 0,
  ol = null,
  Rn = 0,
  Do = 0,
  Ta = 0,
  Ur = null,
  Ue = null,
  ja = 0,
  or = 1 / 0,
  kt = null,
  mo = !1,
  Iu = null,
  qt = null,
  Dl = !1,
  Kt = null,
  vo = 0,
  Ar = 0,
  $u = null,
  Ql = -1,
  Kl = 0;
function Fe() {
  return K & 6 ? ve() : Ql !== -1 ? Ql : (Ql = ve());
}
function bt(e) {
  return e.mode & 1
    ? K & 2 && Re !== 0
      ? Re & -Re
      : Jm.transition !== null
        ? (Kl === 0 && (Kl = Tf()), Kl)
        : ((e = Y),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : If(e.type))),
          e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), ($u = null), Error(N(185)));
  sl(e, n, r),
    (!(K & 2) || e !== Ce) &&
      (e === Ce && (!(K & 2) && (Do |= n), xe === 4 && Ht(e, Re)),
      We(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((or = ve() + 500), Lo && an()));
}
function We(e, t) {
  var n = e.callbackNode;
  Jh(e, t);
  var r = ql(e, e === Ce ? Re : 0);
  if (r === 0)
    n !== null && Cs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cs(n), t === 1))
      e.tag === 0 ? Gm(mc.bind(null, e)) : nd(mc.bind(null, e)),
        Qm(function () {
          !(K & 6) && an();
        }),
        (n = null);
    else {
      switch (jf(r)) {
        case 1:
          n = ra;
          break;
        case 4:
          n = Nf;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Lf;
          break;
        default:
          n = Zl;
      }
      n = tp(n, Xd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xd(e, t) {
  if (((Ql = -1), (Kl = 0), K & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = ql(e, e === Ce ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var o = Jd();
    (Ce !== e || Re !== t) && ((kt = null), (or = ve() + 500), xn(e, t));
    do
      try {
        vv();
        break;
      } catch (u) {
        Gd(e, u);
      }
    while (1);
    va(),
      (ho.current = o),
      (K = l),
      ge !== null ? (t = 0) : ((Ce = null), (Re = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = fu(e)), l !== 0 && ((r = l), (t = Uu(e, l)))), t === 1)
    )
      throw ((n = ol), xn(e, 0), Ht(e, r), We(e, ve()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hv(l) &&
          ((t = yo(e, r)),
          t === 2 && ((o = fu(e)), o !== 0 && ((r = o), (t = Uu(e, o)))),
          t === 1))
      )
        throw ((n = ol), xn(e, 0), Ht(e, r), We(e, ve()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          vn(e, Ue, kt);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = ja + 500 - ve()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wu(vn.bind(null, e, Ue, kt), t);
            break;
          }
          vn(e, Ue, kt);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - dt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ve() - r),
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
                          : 1960 * pv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wu(vn.bind(null, e, Ue, kt), r);
            break;
          }
          vn(e, Ue, kt);
          break;
        case 5:
          vn(e, Ue, kt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return We(e, ve()), e.callbackNode === n ? Xd.bind(null, e) : null;
}
function Uu(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && Au(t)),
    e
  );
}
function Au(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function hv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(o(), l)) return !1;
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
function Ht(e, t) {
  for (
    t &= ~Ta,
      t &= ~Do,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function mc(e) {
  if (K & 6) throw Error(N(327));
  Zn();
  var t = ql(e, 0);
  if (!(t & 1)) return We(e, ve()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fu(e);
    r !== 0 && ((t = r), (n = Uu(e, r)));
  }
  if (n === 1) throw ((n = ol), xn(e, 0), Ht(e, t), We(e, ve()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e, Ue, kt),
    We(e, ve()),
    null
  );
}
function Ma(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((or = ve() + 500), Lo && an());
  }
}
function _n(e) {
  Kt !== null && Kt.tag === 0 && !(K & 6) && Zn();
  var t = K;
  K |= 1;
  var n = nt.transition,
    r = Y;
  try {
    if (((nt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (nt.transition = n), (K = t), !(K & 6) && an();
  }
}
function Da() {
  (He = Hn.current), re(Hn);
}
function xn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hm(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((pa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          rr(), re(Be), re(Me), Ea();
          break;
        case 5:
          xa(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          re(ue);
          break;
        case 19:
          re(ue);
          break;
        case 10:
          ya(r.type._context);
          break;
        case 22:
        case 23:
          Da();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ge = e = en(e.current, null)),
    (Re = He = t),
    (xe = 0),
    (ol = null),
    (Ta = Do = Rn = 0),
    (Ue = Ur = null),
    gn !== null)
  ) {
    for (t = 0; t < gn.length; t++)
      if (((n = gn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    gn = null;
  }
  return e;
}
function Gd(e, t) {
  do {
    var n = ge;
    try {
      if ((va(), (Vl.current = po), fo)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((Pn = 0),
        (Ee = Se = ae = null),
        (Ir = !1),
        (nl = 0),
        (La.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (ol = t), (ge = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = Re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            p = u,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var S = nc(i);
          if (S !== null) {
            (S.flags &= -257),
              rc(S, i, u, o, t),
              S.mode & 1 && tc(o, s, t),
              (t = S),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              tc(o, s, t), Oa();
              break e;
            }
            a = Error(N(426));
          }
        } else if (le && u.mode & 1) {
          var _ = nc(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              rc(_, i, u, o, t),
              ha(lr(a, u));
            break e;
          }
        }
        (o = a = lr(a, u)),
          xe !== 4 && (xe = 2),
          Ur === null ? (Ur = [o]) : Ur.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Md(o, a, t);
              Xs(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (qt === null || !qt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var c = Dd(o, u, t);
                Xs(o, c);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qd(n);
    } catch (k) {
      (t = k), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Jd() {
  var e = ho.current;
  return (ho.current = po), e === null ? po : e;
}
function Oa() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(Rn & 268435455) && !(Do & 268435455)) || Ht(Ce, Re);
}
function yo(e, t) {
  var n = K;
  K |= 2;
  var r = Jd();
  (Ce !== e || Re !== t) && ((kt = null), xn(e, t));
  do
    try {
      mv();
      break;
    } catch (l) {
      Gd(e, l);
    }
  while (1);
  if ((va(), (K = n), (ho.current = r), ge !== null)) throw Error(N(261));
  return (Ce = null), (Re = 0), xe;
}
function mv() {
  for (; ge !== null; ) Zd(ge);
}
function vv() {
  for (; ge !== null && !Bh(); ) Zd(ge);
}
function Zd(e) {
  var t = ep(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? qd(e) : (ge = t),
    (La.current = null);
}
function qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = sv(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ge = null);
        return;
      }
    } else if (((n = av(n, t, He)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function vn(e, t, n) {
  var r = Y,
    l = nt.transition;
  try {
    (nt.transition = null), (Y = 1), yv(e, t, n, r);
  } finally {
    (nt.transition = l), (Y = r);
  }
  return null;
}
function yv(e, t, n, r) {
  do Zn();
  while (Kt !== null);
  if (K & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Zh(e, o),
    e === Ce && ((ge = Ce = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dl ||
      ((Dl = !0),
      tp(Zl, function () {
        return Zn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = nt.transition), (nt.transition = null);
    var i = Y;
    Y = 1;
    var u = K;
    (K |= 4),
      (La.current = null),
      fv(e, n),
      Kd(n, e),
      Im(yu),
      (bl = !!vu),
      (yu = vu = null),
      (e.current = n),
      dv(n),
      Vh(),
      (K = u),
      (Y = i),
      (nt.transition = o);
  } else e.current = n;
  if (
    (Dl && ((Dl = !1), (Kt = e), (vo = l)),
    (o = e.pendingLanes),
    o === 0 && (qt = null),
    Qh(n.stateNode),
    We(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (mo) throw ((mo = !1), (e = Iu), (Iu = null), e);
  return (
    vo & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === $u ? Ar++ : ((Ar = 0), ($u = e))) : (Ar = 0),
    an(),
    null
  );
}
function Zn() {
  if (Kt !== null) {
    var e = jf(vo),
      t = nt.transition,
      n = Y;
    try {
      if (((nt.transition = null), (Y = 16 > e ? 16 : e), Kt === null))
        var r = !1;
      else {
        if (((e = Kt), (Kt = null), (vo = 0), K & 6)) throw Error(N(331));
        var l = K;
        for (K |= 4, D = e.current; D !== null; ) {
          var o = D,
            i = o.child;
          if (D.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (D = s; D !== null; ) {
                  var p = D;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (D = v);
                  else
                    for (; D !== null; ) {
                      p = D;
                      var h = p.sibling,
                        S = p.return;
                      if ((Wd(p), p === s)) {
                        D = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = S), (D = h);
                        break;
                      }
                      D = S;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
                  } while (g !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (D = i);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $r(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (D = d);
                break e;
              }
              D = o.return;
            }
        }
        var f = e.current;
        for (D = f; D !== null; ) {
          i = D;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (D = m);
          else
            e: for (i = f; D !== null; ) {
              if (((u = D), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, u);
                  }
                } catch (k) {
                  fe(u, u.return, k);
                }
              if (u === i) {
                D = null;
                break e;
              }
              var c = u.sibling;
              if (c !== null) {
                (c.return = u.return), (D = c);
                break e;
              }
              D = u.return;
            }
        }
        if (
          ((K = l), an(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (nt.transition = t);
    }
  }
  return !1;
}
function vc(e, t, n) {
  (t = lr(n, t)),
    (t = Md(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = Fe()),
    e !== null && (sl(e, 1, t), We(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          (e = lr(n, e)),
            (e = Dd(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = Fe()),
            t !== null && (sl(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Re & n) === n &&
      (xe === 4 || (xe === 3 && (Re & 130023424) === Re && 500 > ve() - ja)
        ? xn(e, 0)
        : (Ta |= n)),
    We(e, t);
}
function bd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cl), (Cl <<= 1), !(Cl & 130023424) && (Cl = 4194304))
      : (t = 1));
  var n = Fe();
  (e = jt(e, t)), e !== null && (sl(e, t, n), We(e, n));
}
function wv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bd(e, n);
}
function Sv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), bd(e, n);
}
var ep;
ep = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), uv(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), le && t.flags & 1048576 && rd(t, io, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hl(e, t), (e = t.pendingProps);
      var l = er(t, Me.current);
      Jn(t, n), (l = ka(null, t, r, e, l, n));
      var o = Pa();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), lo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            wa(t),
            (l.updater = To),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ru(t, r, e, n),
            (t = Lu(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && da(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ev(r)),
          (e = at(r, e)),
          l)
        ) {
          case 0:
            t = Nu(null, t, r, e, n);
            break e;
          case 1:
            t = ic(null, t, r, e, n);
            break e;
          case 11:
            t = lc(null, t, r, e, n);
            break e;
          case 14:
            t = oc(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Nu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        ic(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Id(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ud(e, t),
          so(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = lr(Error(N(423)), t)), (t = uc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(N(424)), t)), (t = uc(e, t, r, n, l));
            break e;
          } else
            for (
              Qe = Jt(t.stateNode.containerInfo.firstChild),
                Ke = t,
                le = !0,
                ft = null,
                n = fd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dd(t),
        e === null && Cu(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        gu(r, l) ? (i = null) : o !== null && gu(r, o) && (t.flags |= 32),
        Fd(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Cu(t), null;
    case 13:
      return $d(e, t, n);
    case 4:
      return (
        Sa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        lc(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          te(uo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ht(o.value, i)) {
            if (o.children === l.children && !Be.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Nt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      ku(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  ku(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = at(r, t.pendingProps)),
        (l = at(r.type, l)),
        oc(e, t, r, l, n)
      );
    case 15:
      return Od(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Hl(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), lo(t)) : (e = !1),
        Jn(t, n),
        sd(t, r, l),
        Ru(t, r, l, n),
        Lu(null, t, r, !0, e, n)
      );
    case 19:
      return Ud(e, t, n);
    case 22:
      return zd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function tp(e, t) {
  return _f(e, t);
}
function xv(e, t, n, r) {
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
function tt(e, t, n, r) {
  return new xv(e, t, n, r);
}
function za(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ev(e) {
  if (typeof e == "function") return za(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ea)) return 11;
    if (e === ta) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
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
function Yl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) za(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case On:
        return En(n.children, l, o, t);
      case bu:
        (i = 8), (l |= 8);
        break;
      case Ji:
        return (
          (e = tt(12, n, t, l | 2)), (e.elementType = Ji), (e.lanes = o), e
        );
      case Zi:
        return (e = tt(13, n, t, l)), (e.elementType = Zi), (e.lanes = o), e;
      case qi:
        return (e = tt(19, n, t, l)), (e.elementType = qi), (e.lanes = o), e;
      case cf:
        return Oo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case af:
              i = 10;
              break e;
            case sf:
              i = 9;
              break e;
            case ea:
              i = 11;
              break e;
            case ta:
              i = 14;
              break e;
            case Bt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function En(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function Oo(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = cf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bi(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function Vi(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cv(e, t, n, r, l) {
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
    (this.eventTimes = Ei(0)),
    (this.expirationTimes = Ei(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ei(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fa(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new Cv(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = tt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wa(o),
    e
  );
}
function kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function np(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return td(e, n, t);
  }
  return t;
}
function rp(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Fa(n, r, !0, e, l, o, i, u, a)),
    (e.context = np(null)),
    (n = e.current),
    (r = Fe()),
    (l = bt(n)),
    (o = Nt(r, l)),
    (o.callback = t ?? null),
    Zt(n, o, l),
    (e.current.lanes = l),
    sl(e, l, r),
    We(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var l = t.current,
    o = Fe(),
    i = bt(l);
  return (
    (n = np(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, i)),
    e !== null && (pt(e, l, i, o), Bl(e, l, i)),
    i
  );
}
function go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ia(e, t) {
  yc(e, t), (e = e.alternate) && yc(e, t);
}
function Pv() {
  return null;
}
var lp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $a(e) {
  this._internalRoot = e;
}
Fo.prototype.render = $a.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  zo(e, t, null, null);
};
Fo.prototype.unmount = $a.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function () {
      zo(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function Fo(e) {
  this._internalRoot = e;
}
Fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Of();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && Ff(e);
  }
};
function Ua(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gc() {}
function Rv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = go(i);
        o.call(s);
      };
    }
    var i = rp(t, r, e, 0, null, !1, !1, "", gc);
    return (
      (e._reactRootContainer = i),
      (e[Tt] = i.current),
      Zr(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = go(a);
      u.call(s);
    };
  }
  var a = Fa(e, 0, !1, null, null, !1, !1, "", gc);
  return (
    (e._reactRootContainer = a),
    (e[Tt] = a.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      zo(t, a, n, r);
    }),
    a
  );
}
function $o(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = go(i);
        u.call(a);
      };
    }
    zo(t, i, e, l);
  } else i = Rv(n, t, e, l, r);
  return go(i);
}
Mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 &&
          (la(t, n | 1), We(t, ve()), !(K & 6) && ((or = ve() + 500), an()));
      }
      break;
    case 13:
      _n(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Fe();
          pt(r, e, 1, l);
        }
      }),
        Ia(e, 1);
  }
};
oa = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      pt(t, e, 134217728, n);
    }
    Ia(e, 134217728);
  }
};
Df = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Fe();
      pt(n, e, t, r);
    }
    Ia(e, t);
  }
};
Of = function () {
  return Y;
};
zf = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
au = function (e, t, n) {
  switch (t) {
    case "input":
      if ((tu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = No(r);
            if (!l) throw Error(N(90));
            df(r), tu(r, l);
          }
        }
      }
      break;
    case "textarea":
      hf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
  }
};
xf = Ma;
Ef = _n;
var _v = { usingClientEntryPoint: !1, Events: [fl, $n, No, wf, Sf, Ma] },
  Cr = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Nv = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Pf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || Pv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ol.isDisabled && Ol.supportsFiber)
    try {
      (ko = Ol.inject(Nv)), (wt = Ol);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _v;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ua(t)) throw Error(N(200));
  return kv(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Ua(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = lp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Tt] = t.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    new $a(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Pf(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return _n(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Io(t)) throw Error(N(200));
  return $o(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Ua(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = lp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Tt] = t.current),
    Zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Fo(t);
};
Xe.render = function (e, t, n) {
  if (!Io(t)) throw Error(N(200));
  return $o(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Io(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (_n(function () {
        $o(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Ma;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Io(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return $o(e, t, n, !1, r);
};
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function op() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op);
    } catch (e) {
      console.error(e);
    }
}
op(), (nf.exports = Xe);
var Aa = nf.exports;
const Lv = Hc(Aa);
var wc = Aa;
(Xi.createRoot = wc.createRoot), (Xi.hydrateRoot = wc.hydrateRoot);
var ip = { exports: {} },
  up = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ir = E;
function Tv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jv = typeof Object.is == "function" ? Object.is : Tv,
  Mv = ir.useState,
  Dv = ir.useEffect,
  Ov = ir.useLayoutEffect,
  zv = ir.useDebugValue;
function Fv(e, t) {
  var n = t(),
    r = Mv({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    Ov(
      function () {
        (l.value = n), (l.getSnapshot = t), Wi(l) && o({ inst: l });
      },
      [e, n, t],
    ),
    Dv(
      function () {
        return (
          Wi(l) && o({ inst: l }),
          e(function () {
            Wi(l) && o({ inst: l });
          })
        );
      },
      [e],
    ),
    zv(n),
    n
  );
}
function Wi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jv(e, n);
  } catch {
    return !0;
  }
}
function Iv(e, t) {
  return t();
}
var $v =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Iv
    : Fv;
up.useSyncExternalStore =
  ir.useSyncExternalStore !== void 0 ? ir.useSyncExternalStore : $v;
ip.exports = up;
var Uv = ip.exports,
  ap = { exports: {} },
  sp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uo = E,
  Av = Uv;
function Bv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vv = typeof Object.is == "function" ? Object.is : Bv,
  Wv = Av.useSyncExternalStore,
  Hv = Uo.useRef,
  Qv = Uo.useEffect,
  Kv = Uo.useMemo,
  Yv = Uo.useDebugValue;
sp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = Hv(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Kv(
    function () {
      function a(S) {
        if (!s) {
          if (((s = !0), (p = S), (S = r(S)), l !== void 0 && i.hasValue)) {
            var w = i.value;
            if (l(w, S)) return (v = w);
          }
          return (v = S);
        }
        if (((w = v), Vv(p, S))) return w;
        var g = r(S);
        return l !== void 0 && l(w, g) ? w : ((p = S), (v = g));
      }
      var s = !1,
        p,
        v,
        h = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        h === null
          ? void 0
          : function () {
              return a(h());
            },
      ];
    },
    [t, n, r, l],
  );
  var u = Wv(e, o[0], o[1]);
  return (
    Qv(
      function () {
        (i.hasValue = !0), (i.value = u);
      },
      [u],
    ),
    Yv(u),
    u
  );
};
ap.exports = sp;
var Xv = ap.exports;
function Gv(e) {
  e();
}
let cp = Gv;
const Jv = (e) => (cp = e),
  Zv = () => cp,
  Sc = Symbol.for("react-redux-context"),
  xc = typeof globalThis < "u" ? globalThis : {};
function qv() {
  var e;
  if (!E.createContext) return {};
  const t = (e = xc[Sc]) != null ? e : (xc[Sc] = new Map());
  let n = t.get(E.createContext);
  return n || ((n = E.createContext(null)), t.set(E.createContext, n)), n;
}
const ln = qv();
function Ba(e = ln) {
  return function () {
    return E.useContext(e);
  };
}
const fp = Ba(),
  bv = () => {
    throw new Error("uSES not initialized!");
  };
let dp = bv;
const ey = (e) => {
    dp = e;
  },
  ty = (e, t) => e === t;
function ny(e = ln) {
  const t = e === ln ? fp : Ba(e);
  return function (r, l = {}) {
    const {
        equalityFn: o = ty,
        stabilityCheck: i = void 0,
        noopCheck: u = void 0,
      } = typeof l == "function" ? { equalityFn: l } : l,
      {
        store: a,
        subscription: s,
        getServerState: p,
        stabilityCheck: v,
        noopCheck: h,
      } = t();
    E.useRef(!0);
    const S = E.useCallback(
        {
          [r.name](g) {
            return r(g);
          },
        }[r.name],
        [r, v, i],
      ),
      w = dp(s.addNestedSub, a.getState, p || a.getState, S, o);
    return E.useDebugValue(w), w;
  };
}
const Va = ny();
var pp = { exports: {} },
  X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ke = typeof Symbol == "function" && Symbol.for,
  Wa = ke ? Symbol.for("react.element") : 60103,
  Ha = ke ? Symbol.for("react.portal") : 60106,
  Ao = ke ? Symbol.for("react.fragment") : 60107,
  Bo = ke ? Symbol.for("react.strict_mode") : 60108,
  Vo = ke ? Symbol.for("react.profiler") : 60114,
  Wo = ke ? Symbol.for("react.provider") : 60109,
  Ho = ke ? Symbol.for("react.context") : 60110,
  Qa = ke ? Symbol.for("react.async_mode") : 60111,
  Qo = ke ? Symbol.for("react.concurrent_mode") : 60111,
  Ko = ke ? Symbol.for("react.forward_ref") : 60112,
  Yo = ke ? Symbol.for("react.suspense") : 60113,
  ry = ke ? Symbol.for("react.suspense_list") : 60120,
  Xo = ke ? Symbol.for("react.memo") : 60115,
  Go = ke ? Symbol.for("react.lazy") : 60116,
  ly = ke ? Symbol.for("react.block") : 60121,
  oy = ke ? Symbol.for("react.fundamental") : 60117,
  iy = ke ? Symbol.for("react.responder") : 60118,
  uy = ke ? Symbol.for("react.scope") : 60119;
function Je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Wa:
        switch (((e = e.type), e)) {
          case Qa:
          case Qo:
          case Ao:
          case Vo:
          case Bo:
          case Yo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ho:
              case Ko:
              case Go:
              case Xo:
              case Wo:
                return e;
              default:
                return t;
            }
        }
      case Ha:
        return t;
    }
  }
}
function hp(e) {
  return Je(e) === Qo;
}
X.AsyncMode = Qa;
X.ConcurrentMode = Qo;
X.ContextConsumer = Ho;
X.ContextProvider = Wo;
X.Element = Wa;
X.ForwardRef = Ko;
X.Fragment = Ao;
X.Lazy = Go;
X.Memo = Xo;
X.Portal = Ha;
X.Profiler = Vo;
X.StrictMode = Bo;
X.Suspense = Yo;
X.isAsyncMode = function (e) {
  return hp(e) || Je(e) === Qa;
};
X.isConcurrentMode = hp;
X.isContextConsumer = function (e) {
  return Je(e) === Ho;
};
X.isContextProvider = function (e) {
  return Je(e) === Wo;
};
X.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Wa;
};
X.isForwardRef = function (e) {
  return Je(e) === Ko;
};
X.isFragment = function (e) {
  return Je(e) === Ao;
};
X.isLazy = function (e) {
  return Je(e) === Go;
};
X.isMemo = function (e) {
  return Je(e) === Xo;
};
X.isPortal = function (e) {
  return Je(e) === Ha;
};
X.isProfiler = function (e) {
  return Je(e) === Vo;
};
X.isStrictMode = function (e) {
  return Je(e) === Bo;
};
X.isSuspense = function (e) {
  return Je(e) === Yo;
};
X.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ao ||
    e === Qo ||
    e === Vo ||
    e === Bo ||
    e === Yo ||
    e === ry ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Go ||
        e.$$typeof === Xo ||
        e.$$typeof === Wo ||
        e.$$typeof === Ho ||
        e.$$typeof === Ko ||
        e.$$typeof === oy ||
        e.$$typeof === iy ||
        e.$$typeof === uy ||
        e.$$typeof === ly))
  );
};
X.typeOf = Je;
pp.exports = X;
var ay = pp.exports,
  mp = ay,
  sy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  cy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  vp = {};
vp[mp.ForwardRef] = sy;
vp[mp.Memo] = cy;
var J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ka = Symbol.for("react.element"),
  Ya = Symbol.for("react.portal"),
  Jo = Symbol.for("react.fragment"),
  Zo = Symbol.for("react.strict_mode"),
  qo = Symbol.for("react.profiler"),
  bo = Symbol.for("react.provider"),
  ei = Symbol.for("react.context"),
  fy = Symbol.for("react.server_context"),
  ti = Symbol.for("react.forward_ref"),
  ni = Symbol.for("react.suspense"),
  ri = Symbol.for("react.suspense_list"),
  li = Symbol.for("react.memo"),
  oi = Symbol.for("react.lazy"),
  dy = Symbol.for("react.offscreen"),
  yp;
yp = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ka:
        switch (((e = e.type), e)) {
          case Jo:
          case qo:
          case Zo:
          case ni:
          case ri:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case fy:
              case ei:
              case ti:
              case oi:
              case li:
              case bo:
                return e;
              default:
                return t;
            }
        }
      case Ya:
        return t;
    }
  }
}
J.ContextConsumer = ei;
J.ContextProvider = bo;
J.Element = Ka;
J.ForwardRef = ti;
J.Fragment = Jo;
J.Lazy = oi;
J.Memo = li;
J.Portal = Ya;
J.Profiler = qo;
J.StrictMode = Zo;
J.Suspense = ni;
J.SuspenseList = ri;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return ot(e) === ei;
};
J.isContextProvider = function (e) {
  return ot(e) === bo;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ka;
};
J.isForwardRef = function (e) {
  return ot(e) === ti;
};
J.isFragment = function (e) {
  return ot(e) === Jo;
};
J.isLazy = function (e) {
  return ot(e) === oi;
};
J.isMemo = function (e) {
  return ot(e) === li;
};
J.isPortal = function (e) {
  return ot(e) === Ya;
};
J.isProfiler = function (e) {
  return ot(e) === qo;
};
J.isStrictMode = function (e) {
  return ot(e) === Zo;
};
J.isSuspense = function (e) {
  return ot(e) === ni;
};
J.isSuspenseList = function (e) {
  return ot(e) === ri;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Jo ||
    e === qo ||
    e === Zo ||
    e === ni ||
    e === ri ||
    e === dy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === oi ||
        e.$$typeof === li ||
        e.$$typeof === bo ||
        e.$$typeof === ei ||
        e.$$typeof === ti ||
        e.$$typeof === yp ||
        e.getModuleId !== void 0))
  );
};
J.typeOf = ot;
function py() {
  const e = Zv();
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
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Ec = { notify() {}, get: () => [] };
function hy(e, t) {
  let n,
    r = Ec,
    l = 0,
    o = !1;
  function i(g) {
    p();
    const _ = r.subscribe(g);
    let d = !1;
    return () => {
      d || ((d = !0), _(), v());
    };
  }
  function u() {
    r.notify();
  }
  function a() {
    w.onStateChange && w.onStateChange();
  }
  function s() {
    return o;
  }
  function p() {
    l++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = py()));
  }
  function v() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Ec));
  }
  function h() {
    o || ((o = !0), p());
  }
  function S() {
    o && ((o = !1), v());
  }
  const w = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: h,
    tryUnsubscribe: S,
    getListeners: () => r,
  };
  return w;
}
const my =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vy = my ? E.useLayoutEffect : E.useEffect;
function yy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: o = "once",
}) {
  const i = E.useMemo(() => {
      const s = hy(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: o,
      };
    }, [e, r, l, o]),
    u = E.useMemo(() => e.getState(), [e]);
  vy(() => {
    const { subscription: s } = i;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      u !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [i, u]);
  const a = t || ln;
  return E.createElement(a.Provider, { value: i }, n);
}
function gp(e = ln) {
  const t = e === ln ? fp : Ba(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const gy = gp();
function wy(e = ln) {
  const t = e === ln ? gy : gp(e);
  return function () {
    return t().dispatch;
  };
}
const cr = wy();
ey(Xv.useSyncExternalStoreWithSelector);
Jv(Aa.unstable_batchedUpdates);
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var he;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(he || (he = {}));
const Cc = "popstate";
function Sy(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return il(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : pl(l);
  }
  return Ey(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Nn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xy() {
  return Math.random().toString(36).substr(2, 8);
}
function kc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function il(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ot(t) : t,
      { state: n, key: (t && t.key) || r || xy() },
    )
  );
}
function pl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ot(e) {
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
function Ey(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = he.Pop,
    a = null,
    s = p();
  s == null && ((s = 0), i.replaceState(de({}, i.state, { idx: s }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    u = he.Pop;
    let _ = p(),
      d = _ == null ? null : _ - s;
    (s = _), a && a({ action: u, location: g.location, delta: d });
  }
  function h(_, d) {
    u = he.Push;
    let f = il(g.location, _, d);
    n && n(f, _), (s = p() + 1);
    let m = kc(f, s),
      c = g.createHref(f);
    try {
      i.pushState(m, "", c);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(c);
    }
    o && a && a({ action: u, location: g.location, delta: 1 });
  }
  function S(_, d) {
    u = he.Replace;
    let f = il(g.location, _, d);
    n && n(f, _), (s = p());
    let m = kc(f, s),
      c = g.createHref(f);
    i.replaceState(m, "", c),
      o && a && a({ action: u, location: g.location, delta: 0 });
  }
  function w(_) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof _ == "string" ? _ : pl(_);
    return (
      W(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, d)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(_) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Cc, v),
        (a = _),
        () => {
          l.removeEventListener(Cc, v), (a = null);
        }
      );
    },
    createHref(_) {
      return t(l, _);
    },
    createURL: w,
    encodeLocation(_) {
      let d = w(_);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: S,
    go(_) {
      return i.go(_);
    },
  };
  return g;
}
var me;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(me || (me = {}));
const Cy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ky(e) {
  return e.index === !0;
}
function Bu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (W(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        W(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        ky(l))
      ) {
        let a = de({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = de({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = Bu(l.children, t, i, r)), a
        );
      }
    })
  );
}
function Qn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ot(t) : t,
    l = hl(r.pathname || "/", n);
  if (l == null) return null;
  let o = wp(e);
  Ry(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = zy(o[u], $y(l));
  return i;
}
function Py(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function wp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = tn([r, a.relativePath]),
      p = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      wp(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Dy(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of Sp(o.path)) l(o, i, a);
    }),
    t
  );
}
function Sp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Sp(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Ry(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Oy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const _y = /^:\w+$/,
  Ny = 3,
  Ly = 2,
  Ty = 1,
  jy = 10,
  My = -2,
  Pc = (e) => e === "*";
function Dy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Pc) && (r += My),
    t && (r += Ly),
    n
      .filter((l) => !Pc(l))
      .reduce((l, o) => l + (_y.test(o) ? Ny : o === "" ? Ty : jy), r)
  );
}
function Oy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function zy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = Fy(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s,
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = u.route;
    o.push({
      params: r,
      pathname: tn([l, p.pathname]),
      pathnameBase: Vy(tn([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (l = tn([l, p.pathnameBase]));
  }
  return o;
}
function Fy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Iy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      let { paramName: h, isOptional: S } = p;
      if (h === "*") {
        let g = u[v] || "";
        i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const w = u[v];
      return S && !w ? (s[h] = void 0) : (s[h] = Uy(w || "", h)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Iy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Nn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function $y(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Nn(
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
function Uy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Nn(
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
function hl(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ay(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Ot(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : By(n, t)) : t,
    search: Wy(r),
    hash: Hy(l),
  };
}
function By(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Hi(e, t, n, r) {
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
function Xa(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function xp(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Ot(e))
    : ((l = de({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        Hi("?", "pathname", "search", l),
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        Hi("#", "pathname", "hash", l),
      ),
      W(!l.search || !l.search.includes("#"), Hi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let v = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (v -= 1);
      l.pathname = h.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let a = Ay(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Hy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ga {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ep(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Cp = ["post", "put", "patch", "delete"],
  Qy = new Set(Cp),
  Ky = ["get", ...Cp],
  Yy = new Set(Ky),
  Xy = new Set([301, 302, 303, 307, 308]),
  Gy = new Set([307, 308]),
  Qi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Jy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  kr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  kp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Pp = "remix-router-transitions";
function qy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: y(x) });
  } else l = Zy;
  let o = {},
    i = Bu(e.routes, l, void 0, o),
    u,
    a = e.basename || "/",
    s = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future,
    ),
    p = null,
    v = new Set(),
    h = null,
    S = null,
    w = null,
    g = e.hydrationData != null,
    _ = Qn(i, e.history.location, a),
    d = null;
  if (_ == null) {
    let y = qe(404, { pathname: e.history.location.pathname }),
      { matches: x, route: C } = Dc(i);
    (_ = x), (d = { [C.id]: y });
  }
  let f =
      !_.some((y) => y.route.lazy) &&
      (!_.some((y) => y.route.loader) || e.hydrationData != null),
    m,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: _,
      initialized: f,
      navigation: Qi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = he.Pop,
    L = !1,
    R,
    T = !1,
    B = new Map(),
    F = null,
    oe = !1,
    De = !1,
    mt = [],
    cn = [],
    ce = new Map(),
    zt = 0,
    xt = -1,
    j = new Map(),
    I = new Set(),
    A = new Map(),
    Z = new Map(),
    ee = new Set(),
    Ze = new Map(),
    Oe = new Map(),
    fn = !1;
  function Et() {
    if (
      ((p = e.history.listen((y) => {
        let { action: x, location: C, delta: M } = y;
        if (fn) {
          fn = !1;
          return;
        }
        Nn(
          Oe.size === 0 || M != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let z = us({
          currentLocation: c.location,
          nextLocation: C,
          historyAction: x,
        });
        if (z && M != null) {
          (fn = !0),
            e.history.go(M * -1),
            vl(z, {
              state: "blocked",
              location: C,
              proceed() {
                vl(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(M);
              },
              reset() {
                let $ = new Map(c.blockers);
                $.set(z, kr), ye({ blockers: $ });
              },
            });
          return;
        }
        return dn(x, C);
      })),
      n)
    ) {
      sg(t, B);
      let y = () => cg(t, B);
      t.addEventListener("pagehide", y),
        (F = () => t.removeEventListener("pagehide", y));
    }
    return c.initialized || dn(he.Pop, c.location), m;
  }
  function jn() {
    p && p(),
      F && F(),
      v.clear(),
      R && R.abort(),
      c.fetchers.forEach((y, x) => ml(x)),
      c.blockers.forEach((y, x) => is(x));
  }
  function Hp(y) {
    return v.add(y), () => v.delete(y);
  }
  function ye(y, x) {
    c = de({}, c, y);
    let C = [],
      M = [];
    s.v7_fetcherPersist &&
      c.fetchers.forEach((z, $) => {
        z.state === "idle" && (ee.has($) ? M.push($) : C.push($));
      }),
      v.forEach((z) =>
        z(c, { deletedFetchers: M, unstable_viewTransitionOpts: x }),
      ),
      s.v7_fetcherPersist &&
        (C.forEach((z) => c.fetchers.delete(z)), M.forEach((z) => ml(z)));
  }
  function fr(y, x) {
    var C, M;
    let z =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        ct(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((C = y.state) == null ? void 0 : C._isRedirect) !== !0,
      $;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? ($ = x.actionData)
        : ($ = null)
      : z
        ? ($ = c.actionData)
        : ($ = null);
    let V = x.loaderData
        ? Mc(c.loaderData, x.loaderData, x.matches || [], x.errors)
        : c.loaderData,
      U = c.blockers;
    U.size > 0 && ((U = new Map(U)), U.forEach((ie, Q) => U.set(Q, kr)));
    let O =
      L === !0 ||
      (c.navigation.formMethod != null &&
        ct(c.navigation.formMethod) &&
        ((M = y.state) == null ? void 0 : M._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      oe ||
        k === he.Pop ||
        (k === he.Push
          ? e.history.push(y, y.state)
          : k === he.Replace && e.history.replace(y, y.state));
    let q;
    if (k === he.Pop) {
      let ie = B.get(c.location.pathname);
      ie && ie.has(y.pathname)
        ? (q = { currentLocation: c.location, nextLocation: y })
        : B.has(y.pathname) &&
          (q = { currentLocation: y, nextLocation: c.location });
    } else if (T) {
      let ie = B.get(c.location.pathname);
      ie
        ? ie.add(y.pathname)
        : ((ie = new Set([y.pathname])), B.set(c.location.pathname, ie)),
        (q = { currentLocation: c.location, nextLocation: y });
    }
    ye(
      de({}, x, {
        actionData: $,
        loaderData: V,
        historyAction: k,
        location: y,
        initialized: !0,
        navigation: Qi,
        revalidation: "idle",
        restoreScrollPosition: ss(y, x.matches || c.matches),
        preventScrollReset: O,
        blockers: U,
      }),
      q,
    ),
      (k = he.Pop),
      (L = !1),
      (T = !1),
      (oe = !1),
      (De = !1),
      (mt = []),
      (cn = []);
  }
  async function es(y, x) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let C = Vu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        y,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative,
      ),
      {
        path: M,
        submission: z,
        error: $,
      } = Rc(s.v7_normalizeFormMethod, !1, C, x),
      V = c.location,
      U = il(c.location, M, x && x.state);
    U = de({}, U, e.history.encodeLocation(U));
    let O = x && x.replace != null ? x.replace : void 0,
      q = he.Push;
    O === !0
      ? (q = he.Replace)
      : O === !1 ||
        (z != null &&
          ct(z.formMethod) &&
          z.formAction === c.location.pathname + c.location.search &&
          (q = he.Replace));
    let ie =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      Q = us({ currentLocation: V, nextLocation: U, historyAction: q });
    if (Q) {
      vl(Q, {
        state: "blocked",
        location: U,
        proceed() {
          vl(Q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            es(y, x);
        },
        reset() {
          let b = new Map(c.blockers);
          b.set(Q, kr), ye({ blockers: b });
        },
      });
      return;
    }
    return await dn(q, U, {
      submission: z,
      pendingError: $,
      preventScrollReset: ie,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
    });
  }
  function Qp() {
    if (
      (fi(),
      ye({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        dn(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      dn(k || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function dn(y, x, C) {
    R && R.abort(),
      (R = null),
      (k = y),
      (oe = (C && C.startUninterruptedRevalidation) === !0),
      eh(c.location, c.matches),
      (L = (C && C.preventScrollReset) === !0),
      (T = (C && C.enableViewTransition) === !0);
    let M = u || i,
      z = C && C.overrideNavigation,
      $ = Qn(M, x, a);
    if (!$) {
      let b = qe(404, { pathname: x.pathname }),
        { matches: we, route: pn } = Dc(M);
      di(), fr(x, { matches: we, loaderData: {}, errors: { [pn.id]: b } });
      return;
    }
    if (
      c.initialized &&
      !De &&
      rg(c.location, x) &&
      !(C && C.submission && ct(C.submission.formMethod))
    ) {
      fr(x, { matches: $ });
      return;
    }
    R = new AbortController();
    let V = Rr(e.history, x, R.signal, C && C.submission),
      U,
      O;
    if (C && C.pendingError) O = { [Br($).route.id]: C.pendingError };
    else if (C && C.submission && ct(C.submission.formMethod)) {
      let b = await Kp(V, x, C.submission, $, { replace: C.replace });
      if (b.shortCircuited) return;
      (U = b.pendingActionData),
        (O = b.pendingActionError),
        (z = Ki(x, C.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: q,
      loaderData: ie,
      errors: Q,
    } = await Yp(
      V,
      x,
      $,
      z,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      U,
      O,
    );
    q ||
      ((R = null),
      fr(
        x,
        de({ matches: $ }, U ? { actionData: U } : {}, {
          loaderData: ie,
          errors: Q,
        }),
      ));
  }
  async function Kp(y, x, C, M, z) {
    z === void 0 && (z = {}), fi();
    let $ = ug(x, C);
    ye({ navigation: $ });
    let V,
      U = Hu(M, x);
    if (!U.route.action && !U.route.lazy)
      V = {
        type: me.error,
        error: qe(405, {
          method: y.method,
          pathname: x.pathname,
          routeId: U.route.id,
        }),
      };
    else if (((V = await Pr("action", y, U, M, o, l, a)), y.signal.aborted))
      return { shortCircuited: !0 };
    if (qn(V)) {
      let O;
      return (
        z && z.replace != null
          ? (O = z.replace)
          : (O = V.location === c.location.pathname + c.location.search),
        await dr(c, V, { submission: C, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (Vr(V)) {
      let O = Br(M, U.route.id);
      return (
        (z && z.replace) !== !0 && (k = he.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: V.error } }
      );
    }
    if (Sn(V)) throw qe(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: V.data } };
  }
  async function Yp(y, x, C, M, z, $, V, U, O) {
    let q = M || Ki(x, z),
      ie = z || $ || Fc(q),
      Q = u || i,
      [b, we] = _c(e.history, c, C, ie, x, De, mt, cn, A, I, Q, a, U, O);
    if (
      (di(
        (G) =>
          !(C && C.some((it) => it.route.id === G)) ||
          (b && b.some((it) => it.route.id === G)),
      ),
      (xt = ++zt),
      b.length === 0 && we.length === 0)
    ) {
      let G = ls();
      return (
        fr(
          x,
          de(
            { matches: C, loaderData: {}, errors: O || null },
            U ? { actionData: U } : {},
            G ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!oe) {
      we.forEach((it) => {
        let $t = c.fetchers.get(it.key),
          pe = _r(void 0, $t ? $t.data : void 0);
        c.fetchers.set(it.key, pe);
      });
      let G = U || c.actionData;
      ye(
        de(
          { navigation: q },
          G
            ? Object.keys(G).length === 0
              ? { actionData: null }
              : { actionData: G }
            : {},
          we.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
        ),
      );
    }
    we.forEach((G) => {
      ce.has(G.key) && Ft(G.key), G.controller && ce.set(G.key, G.controller);
    });
    let pn = () => we.forEach((G) => Ft(G.key));
    R && R.signal.addEventListener("abort", pn);
    let {
      results: hn,
      loaderResults: hr,
      fetcherResults: pi,
    } = await ns(c.matches, C, b, we, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", pn),
      we.forEach((G) => ce.delete(G.key));
    let Ct = Oc(hn);
    if (Ct) {
      if (Ct.idx >= b.length) {
        let G = we[Ct.idx - b.length].key;
        I.add(G);
      }
      return await dr(c, Ct.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: It, errors: yl } = jc(c, C, b, hr, O, we, pi, Ze);
    Ze.forEach((G, it) => {
      G.subscribe(($t) => {
        ($t || G.done) && Ze.delete(it);
      });
    });
    let hi = ls(),
      mi = os(xt),
      vi = hi || mi || we.length > 0;
    return de(
      { loaderData: It, errors: yl },
      vi ? { fetchers: new Map(c.fetchers) } : {},
    );
  }
  function ts(y) {
    return (
      s.v7_fetcherPersist &&
        (Z.set(y, (Z.get(y) || 0) + 1), ee.has(y) && ee.delete(y)),
      c.fetchers.get(y) || Jy
    );
  }
  function Xp(y, x, C, M) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    ce.has(y) && Ft(y);
    let z = u || i,
      $ = Vu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        C,
        x,
        M == null ? void 0 : M.relative,
      ),
      V = Qn(z, $, a);
    if (!V) {
      pr(y, x, qe(404, { pathname: $ }));
      return;
    }
    let {
      path: U,
      submission: O,
      error: q,
    } = Rc(s.v7_normalizeFormMethod, !0, $, M);
    if (q) {
      pr(y, x, q);
      return;
    }
    let ie = Hu(V, U);
    if (((L = (M && M.preventScrollReset) === !0), O && ct(O.formMethod))) {
      Gp(y, x, U, ie, V, O);
      return;
    }
    A.set(y, { routeId: x, path: U }), Jp(y, x, U, ie, V, O);
  }
  async function Gp(y, x, C, M, z, $) {
    if ((fi(), A.delete(y), !M.route.action && !M.route.lazy)) {
      let pe = qe(405, { method: $.formMethod, pathname: C, routeId: x });
      pr(y, x, pe);
      return;
    }
    let V = c.fetchers.get(y),
      U = ag($, V);
    c.fetchers.set(y, U), ye({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      q = Rr(e.history, C, O.signal, $);
    ce.set(y, O);
    let ie = zt,
      Q = await Pr("action", q, M, z, o, l, a);
    if (q.signal.aborted) {
      ce.get(y) === O && ce.delete(y);
      return;
    }
    if (ee.has(y)) {
      c.fetchers.set(y, At(void 0)), ye({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (qn(Q))
      if ((ce.delete(y), xt > ie)) {
        let pe = At(void 0);
        c.fetchers.set(y, pe), ye({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        I.add(y);
        let pe = _r($);
        return (
          c.fetchers.set(y, pe),
          ye({ fetchers: new Map(c.fetchers) }),
          dr(c, Q, { fetcherSubmission: $ })
        );
      }
    if (Vr(Q)) {
      pr(y, x, Q.error);
      return;
    }
    if (Sn(Q)) throw qe(400, { type: "defer-action" });
    let b = c.navigation.location || c.location,
      we = Rr(e.history, b, O.signal),
      pn = u || i,
      hn =
        c.navigation.state !== "idle"
          ? Qn(pn, c.navigation.location, a)
          : c.matches;
    W(hn, "Didn't find any matches after fetcher action");
    let hr = ++zt;
    j.set(y, hr);
    let pi = _r($, Q.data);
    c.fetchers.set(y, pi);
    let [Ct, It] = _c(
      e.history,
      c,
      hn,
      $,
      b,
      De,
      mt,
      cn,
      A,
      I,
      pn,
      a,
      { [M.route.id]: Q.data },
      void 0,
    );
    It.filter((pe) => pe.key !== y).forEach((pe) => {
      let mr = pe.key,
        cs = c.fetchers.get(mr),
        nh = _r(void 0, cs ? cs.data : void 0);
      c.fetchers.set(mr, nh),
        ce.has(mr) && Ft(mr),
        pe.controller && ce.set(mr, pe.controller);
    }),
      ye({ fetchers: new Map(c.fetchers) });
    let yl = () => It.forEach((pe) => Ft(pe.key));
    O.signal.addEventListener("abort", yl);
    let {
      results: hi,
      loaderResults: mi,
      fetcherResults: vi,
    } = await ns(c.matches, hn, Ct, It, we);
    if (O.signal.aborted) return;
    O.signal.removeEventListener("abort", yl),
      j.delete(y),
      ce.delete(y),
      It.forEach((pe) => ce.delete(pe.key));
    let G = Oc(hi);
    if (G) {
      if (G.idx >= Ct.length) {
        let pe = It[G.idx - Ct.length].key;
        I.add(pe);
      }
      return dr(c, G.result);
    }
    let { loaderData: it, errors: $t } = jc(
      c,
      c.matches,
      Ct,
      mi,
      void 0,
      It,
      vi,
      Ze,
    );
    if (c.fetchers.has(y)) {
      let pe = At(Q.data);
      c.fetchers.set(y, pe);
    }
    os(hr),
      c.navigation.state === "loading" && hr > xt
        ? (W(k, "Expected pending action"),
          R && R.abort(),
          fr(c.navigation.location, {
            matches: hn,
            loaderData: it,
            errors: $t,
            fetchers: new Map(c.fetchers),
          }))
        : (ye({
            errors: $t,
            loaderData: Mc(c.loaderData, it, hn, $t),
            fetchers: new Map(c.fetchers),
          }),
          (De = !1));
  }
  async function Jp(y, x, C, M, z, $) {
    let V = c.fetchers.get(y),
      U = _r($, V ? V.data : void 0);
    c.fetchers.set(y, U), ye({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      q = Rr(e.history, C, O.signal);
    ce.set(y, O);
    let ie = zt,
      Q = await Pr("loader", q, M, z, o, l, a);
    if (
      (Sn(Q) && (Q = (await Np(Q, q.signal, !0)) || Q),
      ce.get(y) === O && ce.delete(y),
      q.signal.aborted)
    )
      return;
    if (ee.has(y)) {
      c.fetchers.set(y, At(void 0)), ye({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (qn(Q))
      if (xt > ie) {
        let we = At(void 0);
        c.fetchers.set(y, we), ye({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        I.add(y), await dr(c, Q);
        return;
      }
    if (Vr(Q)) {
      pr(y, x, Q.error);
      return;
    }
    W(!Sn(Q), "Unhandled fetcher deferred data");
    let b = At(Q.data);
    c.fetchers.set(y, b), ye({ fetchers: new Map(c.fetchers) });
  }
  async function dr(y, x, C) {
    let {
      submission: M,
      fetcherSubmission: z,
      replace: $,
    } = C === void 0 ? {} : C;
    x.revalidate && (De = !0);
    let V = il(y.location, x.location, { _isRedirect: !0 });
    if ((W(V, "Expected a location on the redirect navigation"), n)) {
      let b = !1;
      if (x.reloadDocument) b = !0;
      else if (kp.test(x.location)) {
        const we = e.history.createURL(x.location);
        b = we.origin !== t.location.origin || hl(we.pathname, a) == null;
      }
      if (b) {
        $ ? t.location.replace(x.location) : t.location.assign(x.location);
        return;
      }
    }
    R = null;
    let U = $ === !0 ? he.Replace : he.Push,
      { formMethod: O, formAction: q, formEncType: ie } = y.navigation;
    !M && !z && O && q && ie && (M = Fc(y.navigation));
    let Q = M || z;
    if (Gy.has(x.status) && Q && ct(Q.formMethod))
      await dn(U, V, {
        submission: de({}, Q, { formAction: x.location }),
        preventScrollReset: L,
      });
    else {
      let b = Ki(V, M);
      await dn(U, V, {
        overrideNavigation: b,
        fetcherSubmission: z,
        preventScrollReset: L,
      });
    }
  }
  async function ns(y, x, C, M, z) {
    let $ = await Promise.all([
        ...C.map((O) => Pr("loader", z, O, x, o, l, a)),
        ...M.map((O) =>
          O.matches && O.match && O.controller
            ? Pr(
                "loader",
                Rr(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                o,
                l,
                a,
              )
            : { type: me.error, error: qe(404, { pathname: O.path }) },
        ),
      ]),
      V = $.slice(0, C.length),
      U = $.slice(C.length);
    return (
      await Promise.all([
        zc(
          y,
          C,
          V,
          V.map(() => z.signal),
          !1,
          c.loaderData,
        ),
        zc(
          y,
          M.map((O) => O.match),
          U,
          M.map((O) => (O.controller ? O.controller.signal : null)),
          !0,
        ),
      ]),
      { results: $, loaderResults: V, fetcherResults: U }
    );
  }
  function fi() {
    (De = !0),
      mt.push(...di()),
      A.forEach((y, x) => {
        ce.has(x) && (cn.push(x), Ft(x));
      });
  }
  function pr(y, x, C) {
    let M = Br(c.matches, x);
    ml(y), ye({ errors: { [M.route.id]: C }, fetchers: new Map(c.fetchers) });
  }
  function ml(y) {
    let x = c.fetchers.get(y);
    ce.has(y) && !(x && x.state === "loading" && j.has(y)) && Ft(y),
      A.delete(y),
      j.delete(y),
      I.delete(y),
      ee.delete(y),
      c.fetchers.delete(y);
  }
  function Zp(y) {
    if (s.v7_fetcherPersist) {
      let x = (Z.get(y) || 0) - 1;
      x <= 0 ? (Z.delete(y), ee.add(y)) : Z.set(y, x);
    } else ml(y);
    ye({ fetchers: new Map(c.fetchers) });
  }
  function Ft(y) {
    let x = ce.get(y);
    W(x, "Expected fetch controller: " + y), x.abort(), ce.delete(y);
  }
  function rs(y) {
    for (let x of y) {
      let C = ts(x),
        M = At(C.data);
      c.fetchers.set(x, M);
    }
  }
  function ls() {
    let y = [],
      x = !1;
    for (let C of I) {
      let M = c.fetchers.get(C);
      W(M, "Expected fetcher: " + C),
        M.state === "loading" && (I.delete(C), y.push(C), (x = !0));
    }
    return rs(y), x;
  }
  function os(y) {
    let x = [];
    for (let [C, M] of j)
      if (M < y) {
        let z = c.fetchers.get(C);
        W(z, "Expected fetcher: " + C),
          z.state === "loading" && (Ft(C), j.delete(C), x.push(C));
      }
    return rs(x), x.length > 0;
  }
  function qp(y, x) {
    let C = c.blockers.get(y) || kr;
    return Oe.get(y) !== x && Oe.set(y, x), C;
  }
  function is(y) {
    c.blockers.delete(y), Oe.delete(y);
  }
  function vl(y, x) {
    let C = c.blockers.get(y) || kr;
    W(
      (C.state === "unblocked" && x.state === "blocked") ||
        (C.state === "blocked" && x.state === "blocked") ||
        (C.state === "blocked" && x.state === "proceeding") ||
        (C.state === "blocked" && x.state === "unblocked") ||
        (C.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + C.state + " -> " + x.state,
    );
    let M = new Map(c.blockers);
    M.set(y, x), ye({ blockers: M });
  }
  function us(y) {
    let { currentLocation: x, nextLocation: C, historyAction: M } = y;
    if (Oe.size === 0) return;
    Oe.size > 1 && Nn(!1, "A router only supports one blocker at a time");
    let z = Array.from(Oe.entries()),
      [$, V] = z[z.length - 1],
      U = c.blockers.get($);
    if (
      !(U && U.state === "proceeding") &&
      V({ currentLocation: x, nextLocation: C, historyAction: M })
    )
      return $;
  }
  function di(y) {
    let x = [];
    return (
      Ze.forEach((C, M) => {
        (!y || y(M)) && (C.cancel(), x.push(M), Ze.delete(M));
      }),
      x
    );
  }
  function bp(y, x, C) {
    if (((h = y), (w = x), (S = C || null), !g && c.navigation === Qi)) {
      g = !0;
      let M = ss(c.location, c.matches);
      M != null && ye({ restoreScrollPosition: M });
    }
    return () => {
      (h = null), (w = null), (S = null);
    };
  }
  function as(y, x) {
    return (
      (S &&
        S(
          y,
          x.map((M) => Py(M, c.loaderData)),
        )) ||
      y.key
    );
  }
  function eh(y, x) {
    if (h && w) {
      let C = as(y, x);
      h[C] = w();
    }
  }
  function ss(y, x) {
    if (h) {
      let C = as(y, x),
        M = h[C];
      if (typeof M == "number") return M;
    }
    return null;
  }
  function th(y) {
    (o = {}), (u = Bu(y, l, void 0, o));
  }
  return (
    (m = {
      get basename() {
        return a;
      },
      get state() {
        return c;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Et,
      subscribe: Hp,
      enableScrollRestoration: bp,
      navigate: es,
      fetch: Xp,
      revalidate: Qp,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: ts,
      deleteFetcher: Zp,
      dispose: jn,
      getBlocker: qp,
      deleteBlocker: is,
      _internalFetchControllers: ce,
      _internalActiveDeferreds: Ze,
      _internalSetRoutes: th,
    }),
    m
  );
}
function by(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Vu(e, t, n, r, l, o, i) {
  let u, a;
  if (o != null && i !== "path") {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === o)) {
        a = p;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = xp(
    l || ".",
    Xa(u).map((p) => p.pathnameBase),
    hl(e.pathname, n) || e.pathname,
    i === "path",
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      a &&
      a.route.index &&
      !Ja(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : tn([n, s.pathname])),
    pl(s)
  );
}
function Rc(e, t, n, r) {
  if (!r || !by(r)) return { path: n };
  if (r.formMethod && !ig(r.formMethod))
    return { path: n, error: qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: qe(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = _p(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ct(i)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((S, w) => {
                let [g, _] = w;
                return (
                  "" +
                  S +
                  g +
                  "=" +
                  _ +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ct(i)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let a, s;
  if (r.formData) (a = Wu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = Wu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Tc(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Tc(a));
    } catch {
      return l();
    }
  let p = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (ct(p.formMethod)) return { path: n, submission: p };
  let v = Ot(n);
  return (
    t && v.search && Ja(v.search) && a.append("index", ""),
    (v.search = "?" + a),
    { path: pl(v), submission: p }
  );
}
function eg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function _c(e, t, n, r, l, o, i, u, a, s, p, v, h, S) {
  let w = S ? Object.values(S)[0] : h ? Object.values(h)[0] : void 0,
    g = e.createURL(t.location),
    _ = e.createURL(l),
    d = S ? Object.keys(S)[0] : void 0,
    m = eg(n, d).filter((k, L) => {
      if (k.route.lazy) return !0;
      if (k.route.loader == null) return !1;
      if (tg(t.loaderData, t.matches[L], k) || i.some((B) => B === k.route.id))
        return !0;
      let R = t.matches[L],
        T = k;
      return Nc(
        k,
        de(
          {
            currentUrl: g,
            currentParams: R.params,
            nextUrl: _,
            nextParams: T.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              g.pathname + g.search === _.pathname + _.search ||
              g.search !== _.search ||
              Rp(R, T),
          },
        ),
      );
    }),
    c = [];
  return (
    a.forEach((k, L) => {
      if (!n.some((oe) => oe.route.id === k.routeId)) return;
      let R = Qn(p, k.path, v);
      if (!R) {
        c.push({
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
        B = Hu(R, k.path),
        F = !1;
      s.has(L)
        ? (F = !1)
        : u.includes(L)
          ? (F = !0)
          : T && T.state !== "idle" && T.data === void 0
            ? (F = o)
            : (F = Nc(
                B,
                de(
                  {
                    currentUrl: g,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: _,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: w, defaultShouldRevalidate: o },
                ),
              )),
        F &&
          c.push({
            key: L,
            routeId: k.routeId,
            path: k.path,
            matches: R,
            match: B,
            controller: new AbortController(),
          });
    }),
    [m, c]
  );
}
function tg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Rp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Nc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Lc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== "hasErrorBoundary";
    Nn(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !a && !Cy.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function Pr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    p,
    v = (w) => {
      let g,
        _ = new Promise((d, f) => (g = f));
      return (
        (p = () => g()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: u.requestContext }),
          _,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let g,
          _ = await Promise.all([
            v(w).catch((d) => {
              g = d;
            }),
            Lc(n.route, o, l),
          ]);
        if (g) throw g;
        s = _[0];
      } else if ((await Lc(n.route, o, l), (w = n.route[e]), w)) s = await v(w);
      else if (e === "action") {
        let g = new URL(t.url),
          _ = g.pathname + g.search;
        throw qe(405, { method: t.method, pathname: _, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (w) s = await v(w);
    else {
      let g = new URL(t.url),
        _ = g.pathname + g.search;
      throw qe(404, { pathname: _ });
    }
    W(
      s !== void 0,
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
    (a = me.error), (s = w);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (og(s)) {
    let w = s.status;
    if (Xy.has(w)) {
      let d = s.headers.get("Location");
      if (
        (W(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !kp.test(d))
      )
        d = Vu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          m = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          c = hl(m.pathname, i) != null;
        m.origin === f.origin && c && (d = m.pathname + m.search + m.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set("Location", d), s);
      return {
        type: me.redirect,
        status: w,
        location: d,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === me.error ? me.error : me.data, response: s };
    let g,
      _ = s.headers.get("Content-Type");
    return (
      _ && /\bapplication\/json\b/.test(_)
        ? (g = await s.json())
        : (g = await s.text()),
      a === me.error
        ? { type: a, error: new Ga(w, s.statusText, g), headers: s.headers }
        : { type: me.data, data: g, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === me.error) return { type: a, error: s };
  if (lg(s)) {
    var h, S;
    return {
      type: me.deferred,
      deferredData: s,
      statusCode: (h = s.init) == null ? void 0 : h.status,
      headers:
        ((S = s.init) == null ? void 0 : S.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: me.data, data: s };
}
function Rr(e, t, n, r) {
  let l = e.createURL(_p(t)).toString(),
    o = { signal: n };
  if (r && ct(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": u })),
          (o.body = JSON.stringify(r.json)))
        : u === "text/plain"
          ? (o.body = r.text)
          : u === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = Wu(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Wu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Tc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function ng(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((p, v) => {
      let h = t[v].route.id;
      if (
        (W(!qn(p), "Cannot handle redirect results in processLoaderData"),
        Vr(p))
      ) {
        let S = Br(e, h),
          w = p.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[S.route.id] == null && (i[S.route.id] = w),
          (o[h] = void 0),
          a || ((a = !0), (u = Ep(p.error) ? p.error.status : 500)),
          p.headers && (s[h] = p.headers);
      } else
        Sn(p)
          ? (l.set(h, p.deferredData), (o[h] = p.deferredData.data))
          : (o[h] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (u = p.statusCode),
          p.headers && (s[h] = p.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function jc(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = ng(t, n, r, l, u);
  for (let p = 0; p < o.length; p++) {
    let { key: v, match: h, controller: S } = o[p];
    W(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let w = i[p];
    if (!(S && S.signal.aborted))
      if (Vr(w)) {
        let g = Br(e.matches, h == null ? void 0 : h.route.id);
        (s && s[g.route.id]) || (s = de({}, s, { [g.route.id]: w.error })),
          e.fetchers.delete(v);
      } else if (qn(w)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (Sn(w)) W(!1, "Unhandled fetcher deferred data");
      else {
        let g = At(w.data);
        e.fetchers.set(v, g);
      }
  }
  return { loaderData: a, errors: s };
}
function Mc(e, t, n, r) {
  let l = de({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Br(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Dc(e) {
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
function qe(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (u = "defer() is not supported in actions")
            : o === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            l && n && r
              ? (u =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Ga(e || 500, i, new Error(u), !0)
  );
}
function Oc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (qn(n)) return { result: n, idx: t };
  }
}
function _p(e) {
  let t = typeof e == "string" ? Ot(e) : e;
  return pl(de({}, t, { hash: "" }));
}
function rg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Sn(e) {
  return e.type === me.deferred;
}
function Vr(e) {
  return e.type === me.error;
}
function qn(e) {
  return (e && e.type) === me.redirect;
}
function lg(e) {
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
function og(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function ig(e) {
  return Yy.has(e.toLowerCase());
}
function ct(e) {
  return Qy.has(e.toLowerCase());
}
async function zc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((v) => v.route.id === a.route.id),
      p = s != null && !Rp(s, a) && (o && o[a.route.id]) !== void 0;
    if (Sn(u) && (l || p)) {
      let v = r[i];
      W(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Np(u, v, l).then((h) => {
          h && (n[i] = h || n[i]);
        });
    }
  }
}
async function Np(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: me.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: me.error, error: l };
      }
    return { type: me.data, data: e.deferredData.data };
  }
}
function Ja(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Hu(e, t) {
  let n = typeof t == "string" ? Ot(t).search : t.search;
  if (e[e.length - 1].route.index && Ja(n || "")) return e[e.length - 1];
  let r = Xa(e);
  return r[r.length - 1];
}
function Fc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
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
function Ki(e, t) {
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
function ug(e, t) {
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
function _r(e, t) {
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
function ag(e, t) {
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
function At(e) {
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
function sg(e, t) {
  try {
    let n = e.sessionStorage.getItem(Pp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function cg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Pp, JSON.stringify(n));
    } catch (r) {
      Nn(
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
 */ function wo() {
  return (
    (wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wo.apply(this, arguments)
  );
}
const ii = E.createContext(null),
  Lp = E.createContext(null),
  ui = E.createContext(null),
  ai = E.createContext(null),
  sn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Tp = E.createContext(null);
function si() {
  return E.useContext(ai) != null;
}
function jp() {
  return si() || W(!1), E.useContext(ai).location;
}
function Mp(e) {
  E.useContext(ui).static || E.useLayoutEffect(e);
}
function Dp() {
  let { isDataRoute: e } = E.useContext(sn);
  return e ? Pg() : fg();
}
function fg() {
  si() || W(!1);
  let e = E.useContext(ii),
    { basename: t, navigator: n } = E.useContext(ui),
    { matches: r } = E.useContext(sn),
    { pathname: l } = jp(),
    o = JSON.stringify(Xa(r).map((a) => a.pathnameBase)),
    i = E.useRef(!1);
  return (
    Mp(() => {
      i.current = !0;
    }),
    E.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let p = xp(a, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : tn([t, p.pathname])),
          (s.replace ? n.replace : n.push)(p, s.state, s);
      },
      [t, n, o, l, e],
    )
  );
}
const dg = E.createContext(null);
function pg(e) {
  let t = E.useContext(sn).outlet;
  return t && E.createElement(dg.Provider, { value: e }, t);
}
function hg() {
  let { matches: e } = E.useContext(sn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function mg(e, t, n) {
  si() || W(!1);
  let { navigator: r } = E.useContext(ui),
    { matches: l } = E.useContext(sn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = jp(),
    s;
  if (t) {
    var p;
    let g = typeof t == "string" ? Ot(t) : t;
    u === "/" || ((p = g.pathname) != null && p.startsWith(u)) || W(!1),
      (s = g);
  } else s = a;
  let v = s.pathname || "/",
    h = u === "/" ? v : v.slice(u.length) || "/",
    S = Qn(e, { pathname: h }),
    w = Sg(
      S &&
        S.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: tn([
              u,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : tn([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      l,
      n,
    );
  return t && w
    ? E.createElement(
        ai.Provider,
        {
          value: {
            location: wo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s,
            ),
            navigationType: he.Pop,
          },
        },
        w,
      )
    : w;
}
function vg() {
  let e = kg(),
    t = Ep(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: l }, n) : null,
    o,
  );
}
const yg = E.createElement(vg, null);
class gg extends E.Component {
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
      ? E.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          E.createElement(Tp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function wg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = E.useContext(ii);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(sn.Provider, { value: t }, r)
  );
}
function Sg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id]),
    );
    u >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, a, s) => {
    let p = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      v = null;
    n && (v = a.route.errorElement || yg);
    let h = t.concat(o.slice(0, s + 1)),
      S = () => {
        let w;
        return (
          p
            ? (w = v)
            : a.route.Component
              ? (w = E.createElement(a.route.Component, null))
              : a.route.element
                ? (w = a.route.element)
                : (w = u),
          E.createElement(wg, {
            match: a,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? E.createElement(gg, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: S(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var Op = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Op || {}),
  So = (function (e) {
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
  })(So || {});
function xg(e) {
  let t = E.useContext(ii);
  return t || W(!1), t;
}
function Eg(e) {
  let t = E.useContext(Lp);
  return t || W(!1), t;
}
function Cg(e) {
  let t = E.useContext(sn);
  return t || W(!1), t;
}
function zp(e) {
  let t = Cg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function kg() {
  var e;
  let t = E.useContext(Tp),
    n = Eg(So.UseRouteError),
    r = zp(So.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Pg() {
  let { router: e } = xg(Op.UseNavigateStable),
    t = zp(So.UseNavigateStable),
    n = E.useRef(!1);
  return (
    Mp(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, wo({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function Rg(e) {
  return pg(e.context);
}
function _g(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = he.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  si() && W(!1);
  let u = t.replace(/^\/*/, "/"),
    a = E.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Ot(r));
  let {
      pathname: s = "/",
      search: p = "",
      hash: v = "",
      state: h = null,
      key: S = "default",
    } = r,
    w = E.useMemo(() => {
      let g = hl(s, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: p, hash: v, state: h, key: S },
            navigationType: l,
          };
    }, [u, s, p, v, h, S, l]);
  return w == null
    ? null
    : E.createElement(
        ui.Provider,
        { value: a },
        E.createElement(ai.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
function Ng(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: E.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: E.createElement(e.ErrorBoundary),
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
 */ function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xo.apply(this, arguments)
  );
}
function Lg(e, t) {
  return qy({
    basename: t == null ? void 0 : t.basename,
    future: xo({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Sy({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Tg(),
    routes: e,
    mapRouteProperties: Ng,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Tg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = xo({}, t, { errors: jg(t.errors) })), t;
}
function jg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Ga(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Mg = E.createContext({ isTransitioning: !1 }),
  Dg = E.createContext(new Map()),
  Og = "startTransition",
  Ic = wh[Og];
function zg(e) {
  Ic ? Ic(e) : e();
}
class Fg {
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
function Ig(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = E.useState(n.state),
    [i, u] = E.useState(),
    [a, s] = E.useState({ isTransitioning: !1 }),
    [p, v] = E.useState(),
    [h, S] = E.useState(),
    [w, g] = E.useState(),
    _ = E.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = E.useCallback(
      (R) => {
        d ? zg(R) : R();
      },
      [d],
    ),
    m = E.useCallback(
      (R, T) => {
        let { deletedFetchers: B, unstable_viewTransitionOpts: F } = T;
        B.forEach((oe) => _.current.delete(oe)),
          R.fetchers.forEach((oe, De) => {
            oe.data !== void 0 && _.current.set(De, oe.data);
          }),
          !F ||
          n.window == null ||
          typeof n.window.document.startViewTransition != "function"
            ? f(() => o(R))
            : h && p
              ? (p.resolve(),
                h.skipTransition(),
                g({
                  state: R,
                  currentLocation: F.currentLocation,
                  nextLocation: F.nextLocation,
                }))
              : (u(R),
                s({
                  isTransitioning: !0,
                  currentLocation: F.currentLocation,
                  nextLocation: F.nextLocation,
                }));
      },
      [n.window, h, p, _, f],
    );
  E.useLayoutEffect(() => n.subscribe(m), [n, m]),
    E.useEffect(() => {
      a.isTransitioning && v(new Fg());
    }, [a.isTransitioning]),
    E.useEffect(() => {
      if (p && i && n.window) {
        let R = i,
          T = p.promise,
          B = n.window.document.startViewTransition(async () => {
            f(() => o(R)), await T;
          });
        B.finished.finally(() => {
          v(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          S(B);
      }
    }, [f, i, p, n.window]),
    E.useEffect(() => {
      p && i && l.location.key === i.location.key && p.resolve();
    }, [p, h, l.location, i]),
    E.useEffect(() => {
      !a.isTransitioning &&
        w &&
        (u(w.state),
        s({
          isTransitioning: !0,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        g(void 0));
    }, [a.isTransitioning, w]);
  let c = E.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, T, B) =>
          n.navigate(R, {
            state: T,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
        replace: (R, T, B) =>
          n.navigate(R, {
            replace: !0,
            state: T,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
      }),
      [n],
    ),
    k = n.basename || "/",
    L = E.useMemo(
      () => ({ router: n, navigator: c, static: !1, basename: k }),
      [n, c, k],
    );
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(
      ii.Provider,
      { value: L },
      E.createElement(
        Lp.Provider,
        { value: l },
        E.createElement(
          Dg.Provider,
          { value: _.current },
          E.createElement(
            Mg.Provider,
            { value: a },
            E.createElement(
              _g,
              {
                basename: k,
                location: l.location,
                navigationType: l.historyAction,
                navigator: c,
              },
              l.initialized
                ? E.createElement($g, { routes: n.routes, state: l })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function $g(e) {
  let { routes: t, state: n } = e;
  return mg(t, void 0, n);
}
var $c;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})($c || ($c = {}));
var Uc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Uc || (Uc = {}));
/*! js-cookie v3.0.5 | MIT */ function zl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var Ug = {
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
function Qu(e, t) {
  function n(l, o, i) {
    if (!(typeof document > "u")) {
      (i = zl({}, t, i)),
        typeof i.expires == "number" &&
          (i.expires = new Date(Date.now() + i.expires * 864e5)),
        i.expires && (i.expires = i.expires.toUTCString()),
        (l = encodeURIComponent(l)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var u = "";
      for (var a in i)
        i[a] &&
          ((u += "; " + a), i[a] !== !0 && (u += "=" + i[a].split(";")[0]));
      return (document.cookie = l + "=" + e.write(o, l) + u);
    }
  }
  function r(l) {
    if (!(typeof document > "u" || (arguments.length && !l))) {
      for (
        var o = document.cookie ? document.cookie.split("; ") : [],
          i = {},
          u = 0;
        u < o.length;
        u++
      ) {
        var a = o[u].split("="),
          s = a.slice(1).join("=");
        try {
          var p = decodeURIComponent(a[0]);
          if (((i[p] = e.read(s, p)), l === p)) break;
        } catch {}
      }
      return l ? i[l] : i;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (l, o) {
        n(l, "", zl({}, o, { expires: -1 }));
      },
      withAttributes: function (l) {
        return Qu(this.converter, zl({}, this.attributes, l));
      },
      withConverter: function (l) {
        return Qu(zl({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  );
}
var Ag = Qu(Ug, { path: "/" });
async function ci(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = Ag.get("XSRF-TOKEN")));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const Fp = "session/setUser",
  Ip = "session/removeUser",
  Za = (e) => ({ type: Fp, payload: e }),
  Bg = () => ({ type: Ip }),
  Vg =
    ({ credential: e, password: t }) =>
    async (n) => {
      const r = await ci("/api/session", {
          method: "POST",
          body: JSON.stringify({ credential: e, password: t }),
        }),
        l = await r.json();
      return n(Za(l.user)), r;
    },
  Wg = () => async (e) => {
    const t = await ci("/api/session"),
      n = await t.json();
    return e(Za(n.user)), t;
  },
  Hg = (e) => async (t) => {
    const { username: n, firstName: r, lastName: l, email: o, password: i } = e,
      u = await ci("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: l,
          email: o,
          password: i,
        }),
      }),
      a = await u.json();
    return t(Za(a.user)), u;
  },
  Qg = () => async (e) => {
    const t = await ci("/api/session", { method: "DELETE" });
    return e(Bg()), t;
  },
  Kg = { user: null };
function Yg(e = Kg, t) {
  switch (t.type) {
    case Fp:
      return { ...e, user: t.payload };
    case Ip:
      return { ...e, user: null };
    default:
      return e;
  }
}
const qa = E.createContext();
function Xg({ children: e }) {
  const t = E.useRef(),
    [n, r] = E.useState(null),
    [l, o] = E.useState(null),
    u = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof l == "function" && (o(null), l());
      },
    };
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx(qa.Provider, { value: u, children: e }),
      P.jsx("div", { ref: t }),
    ],
  });
}
function Gg() {
  const { modalRef: e, modalContent: t, closeModal: n } = E.useContext(qa);
  return !e || !e.current || !t
    ? null
    : Lv.createPortal(
        P.jsxs("div", {
          id: "modal",
          children: [
            P.jsx("div", { id: "modal-background", onClick: n }),
            P.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current,
      );
}
const ba = () => E.useContext(qa);
function Ac({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: l, setOnModalClose: o } = ba(),
    i = () => {
      r && o(r), l(e), typeof n == "function" && n();
    };
  return P.jsx("div", { className: "clickable", onClick: i, children: t });
}
function Jg() {
  const e = cr(),
    [t, n] = E.useState(""),
    [r, l] = E.useState(""),
    [o, i] = E.useState({}),
    { closeModal: u } = ba(),
    a = (s) => (
      s.preventDefault(),
      i({}),
      e(Vg({ credential: t, password: r }))
        .then(u)
        .catch(async (p) => {
          const v = await p.json();
          v && v.errors && i(v.errors);
        })
    );
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx("h1", { children: "Log In" }),
      P.jsxs("form", {
        onSubmit: a,
        children: [
          P.jsxs("label", {
            children: [
              "Username or Email",
              P.jsx("input", {
                type: "text",
                value: t,
                onChange: (s) => n(s.target.value),
                required: !0,
              }),
            ],
          }),
          P.jsxs("label", {
            children: [
              "Password",
              P.jsx("input", {
                type: "password",
                value: r,
                onChange: (s) => l(s.target.value),
                required: !0,
              }),
            ],
          }),
          o.credential && P.jsx("p", { children: o.credential }),
          P.jsx("button", { type: "submit", children: "Log In" }),
        ],
      }),
    ],
  });
}
function Zg() {
  const e = cr(),
    [t, n] = E.useState(""),
    [r, l] = E.useState(""),
    [o, i] = E.useState(""),
    [u, a] = E.useState(""),
    [s, p] = E.useState(""),
    [v, h] = E.useState(""),
    [S, w] = E.useState({}),
    { closeModal: g } = ba(),
    _ = (d) => (
      d.preventDefault(),
      s === v
        ? (w({}),
          e(
            Hg({
              email: t,
              username: r,
              firstName: o,
              lastName: u,
              password: s,
            }),
          )
            .then(g)
            .catch(async (f) => {
              const m = await f.json();
              m != null && m.errors && w(m.errors);
            }))
        : w({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx("h1", { children: "Sign Up" }),
      P.jsxs("form", {
        onSubmit: _,
        children: [
          P.jsxs("label", {
            children: [
              "Email",
              P.jsx("input", {
                type: "text",
                value: t,
                onChange: (d) => n(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.email && P.jsx("p", { children: S.email }),
          P.jsxs("label", {
            children: [
              "Username",
              P.jsx("input", {
                type: "text",
                value: r,
                onChange: (d) => l(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.username && P.jsx("p", { children: S.username }),
          P.jsxs("label", {
            children: [
              "First Name",
              P.jsx("input", {
                type: "text",
                value: o,
                onChange: (d) => i(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.firstName && P.jsx("p", { children: S.firstName }),
          P.jsxs("label", {
            children: [
              "Last Name",
              P.jsx("input", {
                type: "text",
                value: u,
                onChange: (d) => a(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.lastName && P.jsx("p", { children: S.lastName }),
          P.jsxs("label", {
            children: [
              "Password",
              P.jsx("input", {
                type: "password",
                value: s,
                onChange: (d) => p(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.password && P.jsx("p", { children: S.password }),
          P.jsxs("label", {
            children: [
              "Confirm Password",
              P.jsx("input", {
                type: "password",
                value: v,
                onChange: (d) => h(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.confirmPassword && P.jsx("p", { children: S.confirmPassword }),
          P.jsx("button", { type: "submit", children: "Sign Up" }),
        ],
      }),
    ],
  });
}
function qg({ user: e }) {
  const t = cr(),
    [n, r] = E.useState(!1),
    l = E.useRef(),
    o = (s) => {
      s.stopPropagation(), r(!n);
    };
  E.useEffect(() => {
    if (!n) return;
    const s = (p) => {
      l.current && !l.current.contains(p.target) && r(!1);
    };
    return (
      document.addEventListener("click", s),
      () => document.removeEventListener("click", s)
    );
  }, [n]);
  const i = () => r(!1),
    u = (s) => {
      s.preventDefault(), t(Qg()), i();
    },
    a = "profile-dropdown" + (n ? "" : " hidden");
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx("button", {
        onClick: o,
        children: P.jsx("i", { className: "fas fa-user-circle" }),
      }),
      P.jsx("ul", {
        className: a,
        ref: l,
        children: e
          ? P.jsxs(P.Fragment, {
              children: [
                P.jsx("li", { children: e.username }),
                P.jsxs("li", { children: [e.firstName, " ", e.lastName] }),
                P.jsx("li", { children: e.email }),
                P.jsx("li", {
                  children: P.jsx("button", {
                    onClick: u,
                    children: "Log Out",
                  }),
                }),
              ],
            })
          : P.jsxs(P.Fragment, {
              children: [
                P.jsx(Ac, {
                  itemText: "Log In",
                  onItemClick: i,
                  modalComponent: P.jsx(Jg, {}),
                }),
                P.jsx(Ac, {
                  itemText: "Sign Up",
                  onItemClick: i,
                  modalComponent: P.jsx(Zg, {}),
                }),
              ],
            }),
      }),
    ],
  });
}
function bg({ isLoaded: e }) {
  const t = Va((r) => r.session.user),
    n = Dp();
  return P.jsxs("nav", {
    children: [
      P.jsx("img", {
        src: "/logo.png",
        className: "nav-logo clickable",
        alt: "Airbnb Logo",
        onClick: () => n("/"),
      }),
      P.jsx("div", { children: e && P.jsx(qg, { user: t }) }),
    ],
  });
}
function e0({ spot: e }) {
  const t = Dp(),
    { id: n, city: r, state: l, previewImage: o, price: i, avgRating: u } = e;
  return P.jsxs("div", {
    className: "spotCard clickable",
    onClick: () => t(`/spots/${n}`),
    children: [
      P.jsx("img", {
        src: o === "no preview" ? "/noPreviewImg.png" : o,
        alt: "Preview Image",
      }),
      P.jsxs("div", {
        className: "description",
        children: [
          P.jsxs("div", {
            className: "title",
            children: [
              P.jsx("span", {
                className: "city-state",
                children: `${r}, ${l}`,
              }),
              P.jsxs("span", {
                className: "avgRating",
                children: [
                  P.jsx("i", { className: "fas fa-star" }),
                  " " + (u == null ? void 0 : u.toFixed(1)),
                ],
              }),
            ],
          }),
          P.jsxs("div", {
            className: "details",
            children: [P.jsxs("b", { children: ["$", i] }), " night"],
          }),
        ],
      }),
    ],
  });
}
const $p = "spots/loadSpots",
  Up = "spots/loadSpot",
  t0 = (e) => ({ type: $p, data: e }),
  n0 = (e) => ({ type: Up, data: e }),
  r0 = () => async (e) => {
    const n = await (await fetch("/api/spots")).json(),
      r = {};
    for (let l in n.Spots) (l = Number(l)), (r[l + 1] = n.Spots[l]);
    console.log("processed", r), e(t0(r));
  },
  l0 = (e) => async (t) => {
    const r = await (await fetch(`/api/spots/${e}`)).json();
    t(n0(r));
  },
  o0 = (e = {}, t) => {
    switch (t.type) {
      case $p:
        return { ...e, ...t.data };
      case Up:
        return { ...e, [t.data.id]: t.data };
      default:
        return e;
    }
  };
function i0() {
  const e = cr(),
    t = Va((r) => r.spots),
    n = Object.values(t);
  return (
    E.useEffect(() => {
      e(r0());
    }, [e]),
    P.jsx("div", {
      className: "homeBody",
      children: n.map((r, l) => P.jsx(e0, { spot: r }, l)),
    })
  );
}
function u0() {
  const { spotId: e } = hg(),
    t = cr(),
    n = Va((s) => s.spots[e]);
  E.useEffect(() => {
    t(l0(e));
  }, [t, e]);
  const {
    name: r,
    city: l,
    state: o,
    country: i,
    description: u,
    numReviews: a,
  } = n;
  return P.jsxs("main", {
    children: [
      P.jsx("div", { className: "title", children: r }),
      P.jsx("div", { className: "location", children: `${l}, ${o}, ${i}` }),
      P.jsx("div", { className: "images", children: "images" }),
      P.jsxs("div", {
        className: "details",
        children: [
          P.jsxs("span", {
            children: [
              P.jsx("div", {
                className: "details-title",
                children: "Hosted by Firstname Lastname",
              }),
              P.jsx("div", { className: "description", children: `${u}` }),
            ],
          }),
          P.jsx("span", { className: "reserve", children: "Reservations" }),
        ],
      }),
      P.jsxs("div", {
        className: "reviews",
        children: ["All Reviews Below - count ", a],
      }),
    ],
  });
}
function a0() {
  const e = cr(),
    [t, n] = E.useState(!1);
  return (
    E.useEffect(() => {
      e(Wg()).then(() => {
        n(!0);
      });
    }, [e]),
    P.jsxs(P.Fragment, {
      children: [P.jsx(Gg, {}), P.jsx(bg, { isLoaded: t }), t && P.jsx(Rg, {})],
    })
  );
}
const s0 = Lg([
  {
    element: P.jsx(a0, {}),
    children: [
      { path: "*", element: P.jsx("h1", { children: "Page Not Found 404" }) },
      { path: "/", element: P.jsx(i0, {}) },
      { path: "/spots/:spotId", element: P.jsx(u0, {}) },
    ],
  },
]);
function c0() {
  return P.jsx(Ig, { router: s0 });
}
function ul(e) {
  "@babel/helpers - typeof";
  return (
    (ul =
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
    ul(e)
  );
}
function f0(e, t) {
  if (ul(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ul(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d0(e) {
  var t = f0(e, "string");
  return ul(t) === "symbol" ? t : String(t);
}
function p0(e, t, n) {
  return (
    (t = d0(t)),
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
function Bc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Vc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bc(Object(n), !0).forEach(function (r) {
          p0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Bc(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Te(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Wc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Yi = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Eo = {
    INIT: "@@redux/INIT" + Yi(),
    REPLACE: "@@redux/REPLACE" + Yi(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Yi();
    },
  };
function h0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ap(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Te(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Te(1));
    return n(Ap)(e, t);
  }
  if (typeof e != "function") throw new Error(Te(2));
  var l = e,
    o = t,
    i = [],
    u = i,
    a = !1;
  function s() {
    u === i && (u = i.slice());
  }
  function p() {
    if (a) throw new Error(Te(3));
    return o;
  }
  function v(g) {
    if (typeof g != "function") throw new Error(Te(4));
    if (a) throw new Error(Te(5));
    var _ = !0;
    return (
      s(),
      u.push(g),
      function () {
        if (_) {
          if (a) throw new Error(Te(6));
          (_ = !1), s();
          var f = u.indexOf(g);
          u.splice(f, 1), (i = null);
        }
      }
    );
  }
  function h(g) {
    if (!h0(g)) throw new Error(Te(7));
    if (typeof g.type > "u") throw new Error(Te(8));
    if (a) throw new Error(Te(9));
    try {
      (a = !0), (o = l(o, g));
    } finally {
      a = !1;
    }
    for (var _ = (i = u), d = 0; d < _.length; d++) {
      var f = _[d];
      f();
    }
    return g;
  }
  function S(g) {
    if (typeof g != "function") throw new Error(Te(10));
    (l = g), h({ type: Eo.REPLACE });
  }
  function w() {
    var g,
      _ = v;
    return (
      (g = {
        subscribe: function (f) {
          if (typeof f != "object" || f === null) throw new Error(Te(11));
          function m() {
            f.next && f.next(p());
          }
          m();
          var c = _(m);
          return { unsubscribe: c };
        },
      }),
      (g[Wc] = function () {
        return this;
      }),
      g
    );
  }
  return (
    h({ type: Eo.INIT }),
    (r = { dispatch: h, subscribe: v, getState: p, replaceReducer: S }),
    (r[Wc] = w),
    r
  );
}
function m0(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Eo.INIT });
    if (typeof r > "u") throw new Error(Te(12));
    if (typeof n(void 0, { type: Eo.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Te(13));
  });
}
function v0(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    m0(n);
  } catch (u) {
    i = u;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var p = !1, v = {}, h = 0; h < o.length; h++) {
      var S = o[h],
        w = n[S],
        g = a[S],
        _ = w(g, s);
      if (typeof _ > "u") throw (s && s.type, new Error(Te(14)));
      (v[S] = _), (p = p || _ !== g);
    }
    return (p = p || o.length !== Object.keys(a).length), p ? v : a;
  };
}
function y0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (r, l) {
          return function () {
            return r(l.apply(void 0, arguments));
          };
        });
}
function g0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        o = function () {
          throw new Error(Te(15));
        },
        i = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        u = t.map(function (a) {
          return a(i);
        });
      return (
        (o = y0.apply(void 0, u)(l.dispatch)),
        Vc(Vc({}, l), {}, { dispatch: o })
      );
    };
  };
}
function Bp(e) {
  var t = function (r) {
    var l = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (u) {
        return typeof u == "function" ? u(l, o, e) : i(u);
      };
    };
  };
  return t;
}
var Vp = Bp();
Vp.withExtraArgument = Bp;
const w0 = Vp,
  S0 = v0({ session: Yg, spots: o0 });
let Wp;
Wp = g0(w0);
const x0 = (e) => Ap(S0, e, Wp),
  E0 = x0();
Xi.createRoot(document.getElementById("root")).render(
  P.jsx(ef.StrictMode, {
    children: P.jsx(Xg, {
      children: P.jsx(yy, { store: E0, children: P.jsx(c0, {}) }),
    }),
  }),
);
