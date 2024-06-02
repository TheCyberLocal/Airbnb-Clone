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
function Xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gc = { exports: {} },
  Ro = {},
  Jc = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fl = Symbol.for("react.element"),
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
  vs = Symbol.iterator;
function hh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vs && e[vs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qc = Object.assign,
  bc = {};
function fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bc),
    (this.updater = n || Zc);
}
fr.prototype.isReactComponent = {};
fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ef() {}
ef.prototype = fr.prototype;
function Zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bc),
    (this.updater = n || Zc);
}
var qu = (Zu.prototype = new ef());
qu.constructor = Zu;
qc(qu, fr.prototype);
qu.isPureReactComponent = !0;
var ys = Array.isArray,
  tf = Object.prototype.hasOwnProperty,
  bu = { current: null },
  nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      tf.call(t, r) && !nf.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: fl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bu.current,
  };
}
function mh(e, t) {
  return {
    $$typeof: fl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ea(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fl;
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
var gs = /\/+/g;
function Si(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vh("" + e.key)
    : t.toString(36);
}
function Al(e, t, n, r, l) {
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
          case fl:
          case lh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Si(i, 0) : r),
      ys(l)
        ? ((n = ""),
          e != null && (n = e.replace(gs, "$&/") + "/"),
          Al(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (ea(l) &&
            (l = mh(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(gs, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ys(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Si(o, u);
      i += Al(o, t, n, a, l);
    }
  else if (((a = hh(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Si(o, u++)), (i += Al(o, t, n, a, l));
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
function El(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Al(e, r, "", "", function (o) {
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
  Bl = { transition: null },
  gh = {
    ReactCurrentDispatcher: Ie,
    ReactCurrentBatchConfig: Bl,
    ReactCurrentOwner: bu,
  };
H.Children = {
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
    if (!ea(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
H.Component = fr;
H.Fragment = oh;
H.Profiler = uh;
H.PureComponent = Zu;
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
  var r = qc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = bu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      tf.call(t, a) &&
        !nf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: fl, type: e.type, key: l, ref: o, props: r, _owner: i };
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
H.createElement = rf;
H.createFactory = function (e) {
  var t = rf.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: ch, render: e };
};
H.isValidElement = ea;
H.lazy = function (e) {
  return { $$typeof: ph, _payload: { _status: -1, _result: e }, _init: yh };
};
H.memo = function (e, t) {
  return { $$typeof: dh, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Bl.transition;
  Bl.transition = {};
  try {
    e();
  } finally {
    Bl.transition = t;
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
Jc.exports = H;
var E = Jc.exports;
const lf = Xc(E),
  wh = rh({ __proto__: null, default: lf }, [E]);
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
function of(e, t, n) {
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
Ro.Fragment = Eh;
Ro.jsx = of;
Ro.jsxs = of;
Gc.exports = Ro;
var N = Gc.exports,
  Zi = {},
  uf = { exports: {} },
  Xe = {},
  af = { exports: {} },
  sf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, I) {
    var B = M.length;
    M.push(I);
    e: for (; 0 < B; ) {
      var Z = (B - 1) >>> 1,
        ee = M[Z];
      if (0 < l(ee, I)) (M[Z] = I), (M[B] = ee), (B = Z);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var I = M[0],
      B = M.pop();
    if (B !== I) {
      M[0] = B;
      e: for (var Z = 0, ee = M.length, Ze = ee >>> 1; Z < Ze; ) {
        var Oe = 2 * (Z + 1) - 1,
          dn = M[Oe],
          Et = Oe + 1,
          On = M[Et];
        if (0 > l(dn, B))
          Et < ee && 0 > l(On, dn)
            ? ((M[Z] = On), (M[Et] = B), (Z = Et))
            : ((M[Z] = dn), (M[Oe] = B), (Z = Oe));
        else if (Et < ee && 0 > l(On, B)) (M[Z] = On), (M[Et] = B), (Z = Et);
        else break e;
      }
    }
    return I;
  }
  function l(M, I) {
    var B = M.sortIndex - I.sortIndex;
    return B !== 0 ? B : M.id - I.id;
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
    m = 3,
    S = !1,
    w = !1,
    g = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var I = n(s); I !== null; ) {
      if (I.callback === null) r(s);
      else if (I.startTime <= M)
        r(s), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(s);
    }
  }
  function c(M) {
    if (((g = !1), h(M), !w))
      if (n(a) !== null) (w = !0), Ft(C);
      else {
        var I = n(s);
        I !== null && xt(c, I.startTime - M);
      }
  }
  function C(M, I) {
    (w = !1), g && ((g = !1), d(T), (T = -1)), (S = !0);
    var B = m;
    try {
      for (
        h(I), v = n(a);
        v !== null && (!(v.expirationTime > I) || (M && !oe()));

      ) {
        var Z = v.callback;
        if (typeof Z == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var ee = Z(v.expirationTime <= I);
          (I = e.unstable_now()),
            typeof ee == "function" ? (v.callback = ee) : v === n(a) && r(a),
            h(I);
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
      (v = null), (m = B), (S = !1);
    }
  }
  var L = !1,
    R = null,
    T = -1,
    A = 5,
    F = -1;
  function oe() {
    return !(e.unstable_now() - F < A);
  }
  function De() {
    if (R !== null) {
      var M = e.unstable_now();
      F = M;
      var I = !0;
      try {
        I = R(!0, M);
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
    var fn = new MessageChannel(),
      ce = fn.port2;
    (fn.port1.onmessage = De),
      (mt = function () {
        ce.postMessage(null);
      });
  } else
    mt = function () {
      P(De, 0);
    };
  function Ft(M) {
    (R = M), L || ((L = !0), mt());
  }
  function xt(M, I) {
    T = P(function () {
      M(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), Ft(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var B = m;
      m = I;
      try {
        return M();
      } finally {
        m = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, I) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var B = m;
      m = M;
      try {
        return I();
      } finally {
        m = B;
      }
    }),
    (e.unstable_scheduleCallback = function (M, I, B) {
      var Z = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? Z + B : Z))
          : (B = Z),
        M)
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
        (ee = B + ee),
        (M = {
          id: p++,
          callback: I,
          priorityLevel: M,
          startTime: B,
          expirationTime: ee,
          sortIndex: -1,
        }),
        B > Z
          ? ((M.sortIndex = B),
            t(s, M),
            n(a) === null &&
              M === n(s) &&
              (g ? (d(T), (T = -1)) : (g = !0), xt(c, B - Z)))
          : ((M.sortIndex = ee), t(a, M), w || S || ((w = !0), Ft(C))),
        M
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (M) {
      var I = m;
      return function () {
        var B = m;
        m = I;
        try {
          return M.apply(this, arguments);
        } finally {
          m = B;
        }
      };
    });
})(sf);
af.exports = sf;
var Rh = af.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cf = E,
  Ye = Rh;
function _(e) {
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
var ff = new Set(),
  Kr = {};
function Mn(e, t) {
  nr(e, t), nr(e + "Capture", t);
}
function nr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) ff.add(t[e]);
}
var Tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  qi = Object.prototype.hasOwnProperty,
  _h =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ws = {},
  Ss = {};
function Lh(e) {
  return qi.call(Ss, e)
    ? !0
    : qi.call(ws, e)
      ? !1
      : _h.test(e)
        ? (Ss[e] = !0)
        : ((ws[e] = !0), !1);
}
function Nh(e, t, n, r) {
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
  if (t === null || typeof t > "u" || Nh(e, t, n, r)) return !0;
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
function Ue(e, t, n, r, l, o, i) {
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
    _e[e] = new Ue(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ta = /[\-:]([a-z])/g;
function na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    _e[t] = new Ue(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    _e[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ta, na);
  _e[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ue(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ra(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Th(t, n, l, r) && (n = null),
    r || l === null
      ? Lh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ot = cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cl = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  In = Symbol.for("react.fragment"),
  la = Symbol.for("react.strict_mode"),
  bi = Symbol.for("react.profiler"),
  df = Symbol.for("react.provider"),
  pf = Symbol.for("react.context"),
  oa = Symbol.for("react.forward_ref"),
  eu = Symbol.for("react.suspense"),
  tu = Symbol.for("react.suspense_list"),
  ia = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  hf = Symbol.for("react.offscreen"),
  xs = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xs && e[xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  xi;
function Mr(e) {
  if (xi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xi = (t && t[1]) || "";
    }
  return (
    `
` +
    xi +
    e
  );
}
var Ei = !1;
function Ci(e, t) {
  if (!e || Ei) return "";
  Ei = !0;
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
    (Ei = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function Mh(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ci(e.type, !1)), e;
    case 11:
      return (e = Ci(e.type.render, !1)), e;
    case 1:
      return (e = Ci(e.type, !0)), e;
    default:
      return "";
  }
}
function nu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case Fn:
      return "Portal";
    case bi:
      return "Profiler";
    case la:
      return "StrictMode";
    case eu:
      return "Suspense";
    case tu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pf:
        return (e.displayName || "Context") + ".Consumer";
      case df:
        return (e._context.displayName || "Context") + ".Provider";
      case oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ia:
        return (
          (t = e.displayName || null), t !== null ? t : nu(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return nu(e(t));
        } catch {}
    }
  return null;
}
function jh(e) {
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
      return nu(t);
    case 8:
      return t === la ? "StrictMode" : "Mode";
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
function mf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dh(e) {
  var t = mf(e) ? "checked" : "value",
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
function kl(e) {
  e._valueTracker || (e._valueTracker = Dh(e));
}
function vf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ql(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ru(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Es(e, t) {
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
function yf(e, t) {
  (t = t.checked), t != null && ra(e, "checked", t, !1);
}
function lu(e, t) {
  yf(e, t);
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
    ? ou(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ou(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cs(e, t, n) {
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
function ou(e, t, n) {
  (t !== "number" || ql(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function Gn(e, t, n, r) {
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
function iu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ks(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function gf(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Pl,
  Sf = (function (e) {
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
        Pl = Pl || document.createElement("div"),
          Pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
Object.keys(zr).forEach(function (e) {
  Oh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function xf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zr.hasOwnProperty(e) && zr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ef(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = xf(n, t[n], r);
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
function au(e, t) {
  if (t) {
    if (zh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function su(e, t) {
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
var cu = null;
function ua(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var fu = null,
  Jn = null,
  Zn = null;
function Rs(e) {
  if ((e = hl(e))) {
    if (typeof fu != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Mo(t)), fu(e.stateNode, e.type, t));
  }
}
function Cf(e) {
  Jn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Jn = e);
}
function kf() {
  if (Jn) {
    var e = Jn,
      t = Zn;
    if (((Zn = Jn = null), Rs(e), t)) for (e = 0; e < t.length; e++) Rs(t[e]);
  }
}
function Pf(e, t) {
  return e(t);
}
function Rf() {}
var ki = !1;
function _f(e, t, n) {
  if (ki) return e(t, n);
  ki = !0;
  try {
    return Pf(e, t, n);
  } finally {
    (ki = !1), (Jn !== null || Zn !== null) && (Rf(), kf());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mo(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var du = !1;
if (Tt)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", {
      get: function () {
        du = !0;
      },
    }),
      window.addEventListener("test", Sr, Sr),
      window.removeEventListener("test", Sr, Sr);
  } catch {
    du = !1;
  }
function Fh(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Fr = !1,
  bl = null,
  eo = !1,
  pu = null,
  Ih = {
    onError: function (e) {
      (Fr = !0), (bl = e);
    },
  };
function Uh(e, t, n, r, l, o, i, u, a) {
  (Fr = !1), (bl = null), Fh.apply(Ih, arguments);
}
function $h(e, t, n, r, l, o, i, u, a) {
  if ((Uh.apply(this, arguments), Fr)) {
    if (Fr) {
      var s = bl;
      (Fr = !1), (bl = null);
    } else throw Error(_(198));
    eo || ((eo = !0), (pu = s));
  }
}
function jn(e) {
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
function Lf(e) {
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
function _s(e) {
  if (jn(e) !== e) throw Error(_(188));
}
function Ah(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(_(188));
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
        if (o === n) return _s(l), e;
        if (o === r) return _s(l), t;
        o = o.sibling;
      }
      throw Error(_(188));
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
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Nf(e) {
  return (e = Ah(e)), e !== null ? Tf(e) : null;
}
function Tf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mf = Ye.unstable_scheduleCallback,
  Ls = Ye.unstable_cancelCallback,
  Bh = Ye.unstable_shouldYield,
  Vh = Ye.unstable_requestPaint,
  ve = Ye.unstable_now,
  Wh = Ye.unstable_getCurrentPriorityLevel,
  aa = Ye.unstable_ImmediatePriority,
  jf = Ye.unstable_UserBlockingPriority,
  to = Ye.unstable_NormalPriority,
  Hh = Ye.unstable_LowPriority,
  Df = Ye.unstable_IdlePriority,
  _o = null,
  wt = null;
function Qh(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : Xh,
  Kh = Math.log,
  Yh = Math.LN2;
function Xh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kh(e) / Yh) | 0)) | 0;
}
var Rl = 64,
  _l = 4194304;
function Dr(e) {
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
function no(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Dr(u)) : ((o &= i), o !== 0 && (r = Dr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Dr(i)) : o !== 0 && (r = Dr(o));
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
function hu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Of() {
  var e = Rl;
  return (Rl <<= 1), !(Rl & 4194240) && (Rl = 64), e;
}
function Pi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dl(e, t, n) {
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
function sa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Y = 0;
function zf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ff,
  ca,
  If,
  Uf,
  $f,
  mu = !1,
  Ll = [],
  Xt = null,
  Gt = null,
  Jt = null,
  Gr = new Map(),
  Jr = new Map(),
  Ht = [],
  qh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ns(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jr.delete(t.pointerId);
  }
}
function xr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = hl(t)), t !== null && ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function bh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Xt = xr(Xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Gt = xr(Gt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Jt = xr(Jt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gr.set(o, xr(Gr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Jr.set(o, xr(Jr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Af(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lf(n)), t !== null)) {
          (e.blockedOn = t),
            $f(e.priority, function () {
              If(n);
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
    var n = vu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (cu = r), n.target.dispatchEvent(r), (cu = null);
    } else return (t = hl(n)), t !== null && ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ts(e, t, n) {
  Vl(e) && n.delete(t);
}
function em() {
  (mu = !1),
    Xt !== null && Vl(Xt) && (Xt = null),
    Gt !== null && Vl(Gt) && (Gt = null),
    Jt !== null && Vl(Jt) && (Jt = null),
    Gr.forEach(Ts),
    Jr.forEach(Ts);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mu ||
      ((mu = !0),
      Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, em)));
}
function Zr(e) {
  function t(l) {
    return Er(l, e);
  }
  if (0 < Ll.length) {
    Er(Ll[0], e);
    for (var n = 1; n < Ll.length; n++) {
      var r = Ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && Er(Xt, e),
      Gt !== null && Er(Gt, e),
      Jt !== null && Er(Jt, e),
      Gr.forEach(t),
      Jr.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    Af(n), n.blockedOn === null && Ht.shift();
}
var qn = Ot.ReactCurrentBatchConfig,
  ro = !0;
function tm(e, t, n, r) {
  var l = Y,
    o = qn.transition;
  qn.transition = null;
  try {
    (Y = 1), fa(e, t, n, r);
  } finally {
    (Y = l), (qn.transition = o);
  }
}
function nm(e, t, n, r) {
  var l = Y,
    o = qn.transition;
  qn.transition = null;
  try {
    (Y = 4), fa(e, t, n, r);
  } finally {
    (Y = l), (qn.transition = o);
  }
}
function fa(e, t, n, r) {
  if (ro) {
    var l = vu(e, t, n, r);
    if (l === null) zi(e, t, r, lo, n), Ns(e, r);
    else if (bh(l, e, t, n, r)) r.stopPropagation();
    else if ((Ns(e, r), t & 4 && -1 < qh.indexOf(e))) {
      for (; l !== null; ) {
        var o = hl(l);
        if (
          (o !== null && Ff(o),
          (o = vu(e, t, n, r)),
          o === null && zi(e, t, r, lo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else zi(e, t, r, null, n);
  }
}
var lo = null;
function vu(e, t, n, r) {
  if (((lo = null), (e = ua(r)), (e = gn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lo = e), null;
}
function Bf(e) {
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
        case aa:
          return 1;
        case jf:
          return 4;
        case to:
        case Hh:
          return 16;
        case Df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  da = null,
  Wl = null;
function Vf() {
  if (Wl) return Wl;
  var e,
    t = da,
    n = t.length,
    r,
    l = "value" in Kt ? Kt.value : Kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Wl = l.slice(e, 1 < r ? 1 - r : void 0));
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
function Ms() {
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
        ? Nl
        : Ms),
      (this.isPropagationStopped = Ms),
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
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pa = Ge(dr),
  pl = se({}, dr, { view: 0, detail: 0 }),
  rm = Ge(pl),
  Ri,
  _i,
  Cr,
  Lo = se({}, pl, {
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
    getModifierState: ha,
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
        : (e !== Cr &&
            (Cr && e.type === "mousemove"
              ? ((Ri = e.screenX - Cr.screenX), (_i = e.screenY - Cr.screenY))
              : (_i = Ri = 0),
            (Cr = e)),
          Ri);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _i;
    },
  }),
  js = Ge(Lo),
  lm = se({}, Lo, { dataTransfer: 0 }),
  om = Ge(lm),
  im = se({}, pl, { relatedTarget: 0 }),
  Li = Ge(im),
  um = se({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  am = Ge(um),
  sm = se({}, dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  cm = Ge(sm),
  fm = se({}, dr, { data: 0 }),
  Ds = Ge(fm),
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
function ha() {
  return mm;
}
var vm = se({}, pl, {
    key: function (e) {
      if (e.key) {
        var t = dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: ha,
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
  ym = Ge(vm),
  gm = se({}, Lo, {
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
  Os = Ge(gm),
  wm = se({}, pl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ha,
  }),
  Sm = Ge(wm),
  xm = se({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Em = Ge(xm),
  Cm = se({}, Lo, {
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
  ma = Tt && "CompositionEvent" in window,
  Ir = null;
Tt && "documentMode" in document && (Ir = document.documentMode);
var Rm = Tt && "TextEvent" in window && !Ir,
  Wf = Tt && (!ma || (Ir && 8 < Ir && 11 >= Ir)),
  zs = String.fromCharCode(32),
  Fs = !1;
function Hf(e, t) {
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
function Qf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return Qf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fs = !0), zs);
    case "textInput":
      return (e = t.data), e === zs && Fs ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (Un)
    return e === "compositionend" || (!ma && Hf(e, t))
      ? ((e = Vf()), (Wl = da = Kt = null), (Un = !1), e)
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
      return Wf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nm = {
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
function Is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nm[e.type] : t === "textarea";
}
function Kf(e, t, n, r) {
  Cf(r),
    (t = oo(t, "onChange")),
    0 < t.length &&
      ((n = new pa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ur = null,
  qr = null;
function Tm(e) {
  rd(e, 0);
}
function No(e) {
  var t = Bn(e);
  if (vf(t)) return e;
}
function Mm(e, t) {
  if (e === "change") return t;
}
var Yf = !1;
if (Tt) {
  var Ni;
  if (Tt) {
    var Ti = "oninput" in document;
    if (!Ti) {
      var Us = document.createElement("div");
      Us.setAttribute("oninput", "return;"),
        (Ti = typeof Us.oninput == "function");
    }
    Ni = Ti;
  } else Ni = !1;
  Yf = Ni && (!document.documentMode || 9 < document.documentMode);
}
function $s() {
  Ur && (Ur.detachEvent("onpropertychange", Xf), (qr = Ur = null));
}
function Xf(e) {
  if (e.propertyName === "value" && No(qr)) {
    var t = [];
    Kf(t, qr, e, ua(e)), _f(Tm, t);
  }
}
function jm(e, t, n) {
  e === "focusin"
    ? ($s(), (Ur = t), (qr = n), Ur.attachEvent("onpropertychange", Xf))
    : e === "focusout" && $s();
}
function Dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return No(qr);
}
function Om(e, t) {
  if (e === "click") return No(t);
}
function zm(e, t) {
  if (e === "input" || e === "change") return No(t);
}
function Fm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Fm;
function br(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!qi.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function As(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bs(e, t) {
  var n = As(e);
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
    n = As(n);
  }
}
function Gf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Gf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Jf() {
  for (var e = window, t = ql(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ql(e.document);
  }
  return t;
}
function va(e) {
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
  var t = Jf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && va(n)) {
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
          (l = Bs(n, o));
        var i = Bs(n, r);
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
var Um = Tt && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  yu = null,
  $r = null,
  gu = !1;
function Vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gu ||
    $n == null ||
    $n !== ql(r) ||
    ((r = $n),
    "selectionStart" in r && va(r)
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
    ($r && br($r, r)) ||
      (($r = r),
      (r = oo(yu, "onSelect")),
      0 < r.length &&
        ((t = new pa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function Tl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: Tl("Animation", "AnimationEnd"),
    animationiteration: Tl("Animation", "AnimationIteration"),
    animationstart: Tl("Animation", "AnimationStart"),
    transitionend: Tl("Transition", "TransitionEnd"),
  },
  Mi = {},
  Zf = {};
Tt &&
  ((Zf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function To(e) {
  if (Mi[e]) return Mi[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zf) return (Mi[e] = t[n]);
  return e;
}
var qf = To("animationend"),
  bf = To("animationiteration"),
  ed = To("animationstart"),
  td = To("transitionend"),
  nd = new Map(),
  Ws =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function un(e, t) {
  nd.set(e, t), Mn(t, [e]);
}
for (var ji = 0; ji < Ws.length; ji++) {
  var Di = Ws[ji],
    $m = Di.toLowerCase(),
    Am = Di[0].toUpperCase() + Di.slice(1);
  un($m, "on" + Am);
}
un(qf, "onAnimationEnd");
un(bf, "onAnimationIteration");
un(ed, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(td, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
Mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function Hs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $h(r, t, void 0, e), (e.currentTarget = null);
}
function rd(e, t) {
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
          Hs(l, u, s), (o = a);
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
          Hs(l, u, s), (o = a);
        }
    }
  }
  if (eo) throw ((e = pu), (eo = !1), (pu = null), e);
}
function ne(e, t) {
  var n = t[Cu];
  n === void 0 && (n = t[Cu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ld(t, e, 2, !1), n.add(r));
}
function Oi(e, t, n) {
  var r = 0;
  t && (r |= 4), ld(n, e, r, t);
}
var Ml = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[Ml]) {
    (e[Ml] = !0),
      ff.forEach(function (n) {
        n !== "selectionchange" && (Bm.has(n) || Oi(n, !1, e), Oi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ml] || ((t[Ml] = !0), Oi("selectionchange", !1, t));
  }
}
function ld(e, t, n, r) {
  switch (Bf(t)) {
    case 1:
      var l = tm;
      break;
    case 4:
      l = nm;
      break;
    default:
      l = fa;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !du ||
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
function zi(e, t, n, r, l) {
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
          if (((i = gn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  _f(function () {
    var s = o,
      p = ua(n),
      v = [];
    e: {
      var m = nd.get(e);
      if (m !== void 0) {
        var S = pa,
          w = e;
        switch (e) {
          case "keypress":
            if (Hl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = ym;
            break;
          case "focusin":
            (w = "focus"), (S = Li);
            break;
          case "focusout":
            (w = "blur"), (S = Li);
            break;
          case "beforeblur":
          case "afterblur":
            S = Li;
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
            S = js;
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
          case qf:
          case bf:
          case ed:
            S = am;
            break;
          case td:
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
            S = Os;
        }
        var g = (t & 4) !== 0,
          P = !g && e === "scroll",
          d = g ? (m !== null ? m + "Capture" : null) : m;
        g = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              d !== null && ((c = Xr(f, d)), c != null && g.push(tl(f, c, h)))),
            P)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((m = new S(m, w, null, n, p)), v.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== cu &&
            (w = n.relatedTarget || n.fromElement) &&
            (gn(w) || w[Mt]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = s),
              (w = w ? gn(w) : null),
              w !== null &&
                ((P = jn(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = s)),
          S !== w)
        ) {
          if (
            ((g = js),
            (c = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Os),
              (c = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (P = S == null ? m : Bn(S)),
            (h = w == null ? m : Bn(w)),
            (m = new g(c, f + "leave", S, n, p)),
            (m.target = P),
            (m.relatedTarget = h),
            (c = null),
            gn(p) === s &&
              ((g = new g(d, f + "enter", w, n, p)),
              (g.target = h),
              (g.relatedTarget = P),
              (c = g)),
            (P = c),
            S && w)
          )
            t: {
              for (g = S, d = w, f = 0, h = g; h; h = zn(h)) f++;
              for (h = 0, c = d; c; c = zn(c)) h++;
              for (; 0 < f - h; ) (g = zn(g)), f--;
              for (; 0 < h - f; ) (d = zn(d)), h--;
              for (; f--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = zn(g)), (d = zn(d));
              }
              g = null;
            }
          else g = null;
          S !== null && Qs(v, m, S, g, !1),
            w !== null && P !== null && Qs(v, P, w, g, !0);
        }
      }
      e: {
        if (
          ((m = s ? Bn(s) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var C = Mm;
        else if (Is(m))
          if (Yf) C = zm;
          else {
            C = Dm;
            var L = jm;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Om);
        if (C && (C = C(e, s))) {
          Kf(v, C, n, p);
          break e;
        }
        L && L(e, m, s),
          e === "focusout" &&
            (L = m._wrapperState) &&
            L.controlled &&
            m.type === "number" &&
            ou(m, "number", m.value);
      }
      switch (((L = s ? Bn(s) : window), e)) {
        case "focusin":
          (Is(L) || L.contentEditable === "true") &&
            (($n = L), (yu = s), ($r = null));
          break;
        case "focusout":
          $r = yu = $n = null;
          break;
        case "mousedown":
          gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gu = !1), Vs(v, n, p);
          break;
        case "selectionchange":
          if (Um) break;
        case "keydown":
        case "keyup":
          Vs(v, n, p);
      }
      var R;
      if (ma)
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
        Un
          ? Hf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Wf &&
          n.locale !== "ko" &&
          (Un || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Un && (R = Vf())
            : ((Kt = p),
              (da = "value" in Kt ? Kt.value : Kt.textContent),
              (Un = !0))),
        (L = oo(s, T)),
        0 < L.length &&
          ((T = new Ds(T, e, null, n, p)),
          v.push({ event: T, listeners: L }),
          R ? (T.data = R) : ((R = Qf(n)), R !== null && (T.data = R)))),
        (R = Rm ? _m(e, n) : Lm(e, n)) &&
          ((s = oo(s, "onBeforeInput")),
          0 < s.length &&
            ((p = new Ds("onBeforeInput", "beforeinput", null, n, p)),
            v.push({ event: p, listeners: s }),
            (p.data = R)));
    }
    rd(v, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Xr(e, n)),
      o != null && r.unshift(tl(e, o, l)),
      (o = Xr(e, t)),
      o != null && r.push(tl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function zn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Xr(n, o)), a != null && i.unshift(tl(n, a, u)))
        : l || ((a = Xr(n, o)), a != null && i.push(tl(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vm = /\r\n?/g,
  Wm = /\u0000|\uFFFD/g;
function Ks(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vm,
      `
`,
    )
    .replace(Wm, "");
}
function jl(e, t, n) {
  if (((t = Ks(t)), Ks(e) !== t && n)) throw Error(_(425));
}
function io() {}
var wu = null,
  Su = null;
function xu(e, t) {
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
var Eu = typeof setTimeout == "function" ? setTimeout : void 0,
  Hm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ys = typeof Promise == "function" ? Promise : void 0,
  Qm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ys < "u"
        ? function (e) {
            return Ys.resolve(null).then(e).catch(Km);
          }
        : Eu;
function Km(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Zr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Zr(t);
}
function Zt(e) {
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
function Xs(e) {
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
var pr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + pr,
  nl = "__reactProps$" + pr,
  Mt = "__reactContainer$" + pr,
  Cu = "__reactEvents$" + pr,
  Ym = "__reactListeners$" + pr,
  Xm = "__reactHandles$" + pr;
function gn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xs(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Xs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hl(e) {
  return (
    (e = e[gt] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Mo(e) {
  return e[nl] || null;
}
var ku = [],
  Vn = -1;
function an(e) {
  return { current: e };
}
function re(e) {
  0 > Vn || ((e.current = ku[Vn]), (ku[Vn] = null), Vn--);
}
function te(e, t) {
  Vn++, (ku[Vn] = e.current), (e.current = t);
}
var rn = {},
  je = an(rn),
  Be = an(!1),
  kn = rn;
function rr(e, t) {
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
function uo() {
  re(Be), re(je);
}
function Gs(e, t, n) {
  if (je.current !== rn) throw Error(_(168));
  te(je, t), te(Be, n);
}
function od(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, jh(e) || "Unknown", l));
  return se({}, n, r);
}
function ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (kn = je.current),
    te(je, e),
    te(Be, Be.current),
    !0
  );
}
function Js(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = od(e, t, kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Be),
      re(je),
      te(je, e))
    : re(Be),
    te(Be, n);
}
var Pt = null,
  jo = !1,
  Ii = !1;
function id(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function Gm(e) {
  (jo = !0), id(e);
}
function sn() {
  if (!Ii && Pt !== null) {
    Ii = !0;
    var e = 0,
      t = Y;
    try {
      var n = Pt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (jo = !1);
    } catch (l) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Mf(aa, sn), l);
    } finally {
      (Y = t), (Ii = !1);
    }
  }
  return null;
}
var Wn = [],
  Hn = 0,
  so = null,
  co = 0,
  be = [],
  et = 0,
  Pn = null,
  Rt = 1,
  _t = "";
function vn(e, t) {
  (Wn[Hn++] = co), (Wn[Hn++] = so), (so = e), (co = t);
}
function ud(e, t, n) {
  (be[et++] = Rt), (be[et++] = _t), (be[et++] = Pn), (Pn = e);
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
function ya(e) {
  e.return !== null && (vn(e, 1), ud(e, 1, 0));
}
function ga(e) {
  for (; e === so; )
    (so = Wn[--Hn]), (Wn[Hn] = null), (co = Wn[--Hn]), (Wn[Hn] = null);
  for (; e === Pn; )
    (Pn = be[--et]),
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
function ad(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ke = e), (Qe = Zt(t.firstChild)), !0)
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
          ? ((n = Pn !== null ? { id: Rt, overflow: _t } : null),
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
function Pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ru(e) {
  if (le) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!Zs(e, t)) {
        if (Pu(e)) throw Error(_(418));
        t = Zt(n.nextSibling);
        var r = Ke;
        t && Zs(e, t)
          ? ad(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ke = e));
      }
    } else {
      if (Pu(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ke = e);
    }
  }
}
function qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Dl(e) {
  if (e !== Ke) return !1;
  if (!le) return qs(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xu(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Pu(e)) throw (sd(), Error(_(418)));
    for (; t; ) ad(e, t), (t = Zt(t.nextSibling));
  }
  if ((qs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Ke ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function sd() {
  for (var e = Qe; e; ) e = Zt(e.nextSibling);
}
function lr() {
  (Qe = Ke = null), (le = !1);
}
function wa(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Jm = Ot.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fo = an(null),
  po = null,
  Qn = null,
  Sa = null;
function xa() {
  Sa = Qn = po = null;
}
function Ea(e) {
  var t = fo.current;
  re(fo), (e._currentValue = t);
}
function _u(e, t, n) {
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
function bn(e, t) {
  (po = e),
    (Sa = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Sa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qn === null)) {
      if (po === null) throw Error(_(308));
      (Qn = e), (po.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return t;
}
var wn = null;
function Ca(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function cd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ca(t)) : ((n.next = l.next), (l.next = n)),
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
var Wt = !1;
function ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fd(e, t) {
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
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
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
    l === null ? ((t.next = t), Ca(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Ql(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sa(e, n);
  }
}
function bs(e, t) {
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
function ho(e, t, n, r) {
  var l = e.updateQueue;
  Wt = !1;
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
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
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
          switch (((m = t), (S = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                v = w.call(S, v, m);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (m = typeof w == "function" ? w.call(S, v, m) : w),
                m == null)
              )
                break e;
              v = se({}, v, m);
              break e;
            case 2:
              Wt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = S), (a = v)) : (p = p.next = S),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
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
    (_n |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function ec(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var dd = new cf.Component().refs;
function Lu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Do = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = en(e),
      o = Lt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = qt(e, o, l)),
      t !== null && (pt(t, e, l, r), Ql(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Fe(),
      l = en(e),
      o = Lt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = qt(e, o, l)),
      t !== null && (pt(t, e, l, r), Ql(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Fe(),
      r = en(e),
      l = Lt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = qt(e, l, r)),
      t !== null && (pt(t, e, r, n), Ql(t, e, r));
  },
};
function tc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !br(n, r) || !br(l, o)
        : !0
  );
}
function pd(e, t, n) {
  var r = !1,
    l = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = rt(o))
      : ((l = Ve(t) ? kn : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? rr(e, l) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Do),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function nc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Do.enqueueReplaceState(t, t.state, null);
}
function Nu(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = dd), ka(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = rt(o))
    : ((o = Ve(t) ? kn : je.current), (l.context = rr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Lu(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Do.enqueueReplaceState(l, l.state, null),
      ho(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === dd && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ol(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function rc(e) {
  var t = e._init;
  return t(e._payload);
}
function hd(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
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
    return (d = tn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, h, c) {
    return f === null || f.tag !== 6
      ? ((f = Hi(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function a(d, f, h, c) {
    var C = h.type;
    return C === In
      ? p(d, f, h.props.children, c, h.key)
      : f !== null &&
          (f.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === Vt &&
              rc(C) === f.type))
        ? ((c = l(f, h.props)), (c.ref = kr(d, f, h)), (c.return = d), c)
        : ((c = Zl(h.type, h.key, h.props, null, d.mode, c)),
          (c.ref = kr(d, f, h)),
          (c.return = d),
          c);
  }
  function s(d, f, h, c) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Qi(h, d.mode, c)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function p(d, f, h, c, C) {
    return f === null || f.tag !== 7
      ? ((f = Cn(h, d.mode, c, C)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function v(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Hi("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Cl:
          return (
            (h = Zl(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = kr(d, null, f)),
            (h.return = d),
            h
          );
        case Fn:
          return (f = Qi(f, d.mode, h)), (f.return = d), f;
        case Vt:
          var c = f._init;
          return v(d, c(f._payload), h);
      }
      if (jr(f) || wr(f))
        return (f = Cn(f, d.mode, h, null)), (f.return = d), f;
      Ol(d, f);
    }
    return null;
  }
  function m(d, f, h, c) {
    var C = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : u(d, f, "" + h, c);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Cl:
          return h.key === C ? a(d, f, h, c) : null;
        case Fn:
          return h.key === C ? s(d, f, h, c) : null;
        case Vt:
          return (C = h._init), m(d, f, C(h._payload), c);
      }
      if (jr(h) || wr(h)) return C !== null ? null : p(d, f, h, c, null);
      Ol(d, h);
    }
    return null;
  }
  function S(d, f, h, c, C) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (d = d.get(h) || null), u(f, d, "" + c, C);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Cl:
          return (d = d.get(c.key === null ? h : c.key) || null), a(f, d, c, C);
        case Fn:
          return (d = d.get(c.key === null ? h : c.key) || null), s(f, d, c, C);
        case Vt:
          var L = c._init;
          return S(d, f, h, L(c._payload), C);
      }
      if (jr(c) || wr(c)) return (d = d.get(h) || null), p(f, d, c, C, null);
      Ol(f, c);
    }
    return null;
  }
  function w(d, f, h, c) {
    for (
      var C = null, L = null, R = f, T = (f = 0), A = null;
      R !== null && T < h.length;
      T++
    ) {
      R.index > T ? ((A = R), (R = null)) : (A = R.sibling);
      var F = m(d, R, h[T], c);
      if (F === null) {
        R === null && (R = A);
        break;
      }
      e && R && F.alternate === null && t(d, R),
        (f = o(F, f, T)),
        L === null ? (C = F) : (L.sibling = F),
        (L = F),
        (R = A);
    }
    if (T === h.length) return n(d, R), le && vn(d, T), C;
    if (R === null) {
      for (; T < h.length; T++)
        (R = v(d, h[T], c)),
          R !== null &&
            ((f = o(R, f, T)), L === null ? (C = R) : (L.sibling = R), (L = R));
      return le && vn(d, T), C;
    }
    for (R = r(d, R); T < h.length; T++)
      (A = S(R, d, T, h[T], c)),
        A !== null &&
          (e && A.alternate !== null && R.delete(A.key === null ? T : A.key),
          (f = o(A, f, T)),
          L === null ? (C = A) : (L.sibling = A),
          (L = A));
    return (
      e &&
        R.forEach(function (oe) {
          return t(d, oe);
        }),
      le && vn(d, T),
      C
    );
  }
  function g(d, f, h, c) {
    var C = wr(h);
    if (typeof C != "function") throw Error(_(150));
    if (((h = C.call(h)), h == null)) throw Error(_(151));
    for (
      var L = (C = null), R = f, T = (f = 0), A = null, F = h.next();
      R !== null && !F.done;
      T++, F = h.next()
    ) {
      R.index > T ? ((A = R), (R = null)) : (A = R.sibling);
      var oe = m(d, R, F.value, c);
      if (oe === null) {
        R === null && (R = A);
        break;
      }
      e && R && oe.alternate === null && t(d, R),
        (f = o(oe, f, T)),
        L === null ? (C = oe) : (L.sibling = oe),
        (L = oe),
        (R = A);
    }
    if (F.done) return n(d, R), le && vn(d, T), C;
    if (R === null) {
      for (; !F.done; T++, F = h.next())
        (F = v(d, F.value, c)),
          F !== null &&
            ((f = o(F, f, T)), L === null ? (C = F) : (L.sibling = F), (L = F));
      return le && vn(d, T), C;
    }
    for (R = r(d, R); !F.done; T++, F = h.next())
      (F = S(R, d, T, F.value, c)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? T : F.key),
          (f = o(F, f, T)),
          L === null ? (C = F) : (L.sibling = F),
          (L = F));
    return (
      e &&
        R.forEach(function (De) {
          return t(d, De);
        }),
      le && vn(d, T),
      C
    );
  }
  function P(d, f, h, c) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === In &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Cl:
          e: {
            for (var C = h.key, L = f; L !== null; ) {
              if (L.key === C) {
                if (((C = h.type), C === In)) {
                  if (L.tag === 7) {
                    n(d, L.sibling),
                      (f = l(L, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  L.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Vt &&
                    rc(C) === L.type)
                ) {
                  n(d, L.sibling),
                    (f = l(L, h.props)),
                    (f.ref = kr(d, L, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, L);
                break;
              } else t(d, L);
              L = L.sibling;
            }
            h.type === In
              ? ((f = Cn(h.props.children, d.mode, c, h.key)),
                (f.return = d),
                (d = f))
              : ((c = Zl(h.type, h.key, h.props, null, d.mode, c)),
                (c.ref = kr(d, f, h)),
                (c.return = d),
                (d = c));
          }
          return i(d);
        case Fn:
          e: {
            for (L = h.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
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
            (f = Qi(h, d.mode, c)), (f.return = d), (d = f);
          }
          return i(d);
        case Vt:
          return (L = h._init), P(d, f, L(h._payload), c);
      }
      if (jr(h)) return w(d, f, h, c);
      if (wr(h)) return g(d, f, h, c);
      Ol(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = Hi(h, d.mode, c)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return P;
}
var or = hd(!0),
  md = hd(!1),
  ml = {},
  St = an(ml),
  rl = an(ml),
  ll = an(ml);
function Sn(e) {
  if (e === ml) throw Error(_(174));
  return e;
}
function Pa(e, t) {
  switch ((te(ll, t), te(rl, e), te(St, ml), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = uu(t, e));
  }
  re(St), te(St, t);
}
function ir() {
  re(St), re(rl), re(ll);
}
function vd(e) {
  Sn(ll.current);
  var t = Sn(St.current),
    n = uu(t, e.type);
  t !== n && (te(rl, e), te(St, n));
}
function Ra(e) {
  rl.current === e && (re(St), re(rl));
}
var ue = an(0);
function mo(e) {
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
var Ui = [];
function _a() {
  for (var e = 0; e < Ui.length; e++)
    Ui[e]._workInProgressVersionPrimary = null;
  Ui.length = 0;
}
var Kl = Ot.ReactCurrentDispatcher,
  $i = Ot.ReactCurrentBatchConfig,
  Rn = 0,
  ae = null,
  Se = null,
  Ee = null,
  vo = !1,
  Ar = !1,
  ol = 0,
  Zm = 0;
function Le() {
  throw Error(_(321));
}
function La(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function Na(e, t, n, r, l, o) {
  if (
    ((Rn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Kl.current = e === null || e.memoizedState === null ? tv : nv),
    (e = n(r, l)),
    Ar)
  ) {
    o = 0;
    do {
      if (((Ar = !1), (ol = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (Ee = Se = null),
        (t.updateQueue = null),
        (Kl.current = rv),
        (e = n(r, l));
    } while (Ar);
  }
  if (
    ((Kl.current = yo),
    (t = Se !== null && Se.next !== null),
    (Rn = 0),
    (Ee = Se = ae = null),
    (vo = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Ta() {
  var e = ol !== 0;
  return (ol = 0), e;
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
    if (e === null) throw Error(_(310));
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
function il(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ai(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
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
      if ((Rn & p) === p)
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
          (_n |= p);
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
    do (o = l.lane), (ae.lanes |= o), (_n |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bi(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
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
function yd() {}
function gd(e, t) {
  var n = ae,
    r = lt(),
    l = t(),
    o = !ht(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ae = !0)),
    (r = r.queue),
    Ma(xd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ul(9, Sd.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(_(349));
    Rn & 30 || wd(n, t, l);
  }
  return l;
}
function wd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ed(t) && Cd(e);
}
function xd(e, t, n) {
  return n(function () {
    Ed(t) && Cd(e);
  });
}
function Ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Cd(e) {
  var t = jt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function lc(e) {
  var t = yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: il,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ev.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function ul(e, t, n, r) {
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
function kd() {
  return lt().memoizedState;
}
function Yl(e, t, n, r) {
  var l = yt();
  (ae.flags |= e),
    (l.memoizedState = ul(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Se !== null) {
    var i = Se.memoizedState;
    if (((o = i.destroy), r !== null && La(r, i.deps))) {
      l.memoizedState = ul(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = ul(1 | t, n, o, r));
}
function oc(e, t) {
  return Yl(8390656, 8, e, t);
}
function Ma(e, t) {
  return Oo(2048, 8, e, t);
}
function Pd(e, t) {
  return Oo(4, 2, e, t);
}
function Rd(e, t) {
  return Oo(4, 4, e, t);
}
function _d(e, t) {
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
function Ld(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, _d.bind(null, t, e), n)
  );
}
function ja() {}
function Nd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Td(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && La(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Md(e, t, n) {
  return Rn & 21
    ? (ht(n, t) || ((n = Of()), (ae.lanes |= n), (_n |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function qm(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $i.transition;
  $i.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), ($i.transition = r);
  }
}
function jd() {
  return lt().memoizedState;
}
function bm(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dd(e))
  )
    Od(t, n);
  else if (((n = cd(e, t, n, r)), n !== null)) {
    var l = Fe();
    pt(n, e, r, l), zd(n, t, r);
  }
}
function ev(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dd(e)) Od(t, l);
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
            ? ((l.next = l), Ca(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = cd(e, t, l, r)),
      n !== null && ((l = Fe()), pt(n, e, r, l), zd(n, t, r));
  }
}
function Dd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Od(e, t) {
  Ar = vo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sa(e, n);
  }
}
var yo = {
    readContext: rt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  tv = {
    readContext: rt,
    useCallback: function (e, t) {
      return (yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: oc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yl(4194308, 4, _d.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yl(4, 2, e, t);
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
    useState: lc,
    useDebugValue: ja,
    useDeferredValue: function (e) {
      return (yt().memoizedState = e);
    },
    useTransition: function () {
      var e = lc(!1),
        t = e[0];
      return (e = qm.bind(null, e[1])), (yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = yt();
      if (le) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(_(349));
        Rn & 30 || wd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        oc(xd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ul(9, Sd.bind(null, r, o, n, t), void 0, null),
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
          (n = ol++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nv = {
    readContext: rt,
    useCallback: Nd,
    useContext: rt,
    useEffect: Ma,
    useImperativeHandle: Ld,
    useInsertionEffect: Pd,
    useLayoutEffect: Rd,
    useMemo: Td,
    useReducer: Ai,
    useRef: kd,
    useState: function () {
      return Ai(il);
    },
    useDebugValue: ja,
    useDeferredValue: function (e) {
      var t = lt();
      return Md(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ai(il)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: yd,
    useSyncExternalStore: gd,
    useId: jd,
    unstable_isNewReconciler: !1,
  },
  rv = {
    readContext: rt,
    useCallback: Nd,
    useContext: rt,
    useEffect: Ma,
    useImperativeHandle: Ld,
    useInsertionEffect: Pd,
    useLayoutEffect: Rd,
    useMemo: Td,
    useReducer: Bi,
    useRef: kd,
    useState: function () {
      return Bi(il);
    },
    useDebugValue: ja,
    useDeferredValue: function (e) {
      var t = lt();
      return Se === null ? (t.memoizedState = e) : Md(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Bi(il)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: yd,
    useSyncExternalStore: gd,
    useId: jd,
    unstable_isNewReconciler: !1,
  };
function ur(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mh(r)), (r = r.return);
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
function Vi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lv = typeof WeakMap == "function" ? WeakMap : Map;
function Fd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      wo || ((wo = !0), (Au = r)), Tu(e, t);
    }),
    n
  );
}
function Id(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Tu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Tu(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = gv.bind(null, e, t, n)), t.then(e, e));
}
function uc(e) {
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
function ac(e, t, n, r, l) {
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
              : ((t = Lt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ov = Ot.ReactCurrentOwner,
  Ae = !1;
function ze(e, t, n, r) {
  t.child = e === null ? md(t, null, n, r) : or(t, e.child, n, r);
}
function sc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    bn(t, l),
    (r = Na(e, t, n, r, o, l)),
    (n = Ta()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (le && n && ya(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function cc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Aa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ud(e, t, o, r, l))
      : ((e = Zl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(i, r) && e.ref === t.ref)
    )
      return Dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ud(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (br(o, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), Dt(e, t, l);
  }
  return Mu(e, t, n, r, l);
}
function $d(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Yn, He),
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
          te(Yn, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        te(Yn, He),
        (He |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Yn, He),
      (He |= r);
  return ze(e, t, l, n), t.child;
}
function Ad(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mu(e, t, n, r, l) {
  var o = Ve(n) ? kn : je.current;
  return (
    (o = rr(t, o)),
    bn(t, l),
    (n = Na(e, t, n, r, o, l)),
    (r = Ta()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (le && r && ya(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function fc(e, t, n, r, l) {
  if (Ve(n)) {
    var o = !0;
    ao(t);
  } else o = !1;
  if ((bn(t, l), t.stateNode === null))
    Xl(e, t), pd(t, n, r), Nu(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((s = Ve(n) ? kn : je.current), (s = rr(t, s)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && nc(t, i, r, s)),
      (Wt = !1);
    var m = t.memoizedState;
    (i.state = m),
      ho(t, r, i, l),
      (a = t.memoizedState),
      u !== r || m !== a || Be.current || Wt
        ? (typeof p == "function" && (Lu(t, n, p, r), (a = t.memoizedState)),
          (u = Wt || tc(t, n, u, r, m, a, s))
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
      fd(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : at(t.type, u)),
      (i.props = s),
      (v = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = rt(a))
        : ((a = Ve(n) ? kn : je.current), (a = rr(t, a)));
    var S = n.getDerivedStateFromProps;
    (p =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== v || m !== a) && nc(t, i, r, a)),
      (Wt = !1),
      (m = t.memoizedState),
      (i.state = m),
      ho(t, r, i, l);
    var w = t.memoizedState;
    u !== v || m !== w || Be.current || Wt
      ? (typeof S == "function" && (Lu(t, n, S, r), (w = t.memoizedState)),
        (s = Wt || tc(t, n, s, r, m, w, a) || !1)
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
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ju(e, t, n, r, o, l);
}
function ju(e, t, n, r, l, o) {
  Ad(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Js(t, n, !1), Dt(e, t, o);
  (r = t.stateNode), (ov.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = or(t, e.child, null, o)), (t.child = or(t, null, u, o)))
      : ze(e, t, u, o),
    (t.memoizedState = r.state),
    l && Js(t, n, !0),
    t.child
  );
}
function Bd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gs(e, t.context, !1),
    Pa(e, t.containerInfo);
}
function dc(e, t, n, r, l) {
  return lr(), wa(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var Du = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ou(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vd(e, t, n) {
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
      Ru(t),
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
                : (o = Io(i, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ou(n)),
              (t.memoizedState = Du),
              e)
            : Da(t, i))
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
        : ((r = tn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = tn(u, o)) : ((o = Cn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ou(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Du),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tn(o, { mode: "visible", children: r.children })),
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
function Da(e, t) {
  return (
    (t = Io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zl(e, t, n, r) {
  return (
    r !== null && wa(r),
    or(t, e.child, null, n),
    (e = Da(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function iv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vi(Error(_(422)))), zl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Io({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Cn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && or(t, e.child, null, i),
          (t.child.memoizedState = Ou(i)),
          (t.memoizedState = Du),
          o);
  if (!(t.mode & 1)) return zl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(_(419))), (r = Vi(o, r, void 0)), zl(e, t, i, r);
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
    return $a(), (r = Vi(Error(_(421)))), zl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Qe = Zt(l.nextSibling)),
      (Ke = t),
      (le = !0),
      (ft = null),
      e !== null &&
        ((be[et++] = Rt),
        (be[et++] = _t),
        (be[et++] = Pn),
        (Rt = e.id),
        (_t = e.overflow),
        (Pn = t)),
      (t = Da(t, r.children)),
      (t.flags |= 4096),
      t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _u(e.return, t, n);
}
function Wi(e, t, n, r, l) {
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
function Wd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ze(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
        else if (e.tag === 19) pc(e, n, t);
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
            e !== null && mo(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Wi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && mo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wi(t, !0, n, null, o);
        break;
      case "together":
        Wi(t, !1, null, null, void 0);
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
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_n |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uv(e, t, n) {
  switch (t.tag) {
    case 3:
      Bd(t), lr();
      break;
    case 5:
      vd(t);
      break;
    case 1:
      Ve(t.type) && ao(t);
      break;
    case 4:
      Pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(fo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Vd(e, t, n)
            : (te(ue, ue.current & 1),
              (e = Dt(e, t, n)),
              e !== null ? e.sibling : null);
      te(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wd(e, t, n);
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
      return (t.lanes = 0), $d(e, t, n);
  }
  return Dt(e, t, n);
}
var Hd, zu, Qd, Kd;
Hd = function (e, t) {
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
zu = function () {};
Qd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Sn(St.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ru(e, l)), (r = ru(e, r)), (o = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = iu(e, l)), (r = iu(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    au(n, r);
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
            (Kr.hasOwnProperty(s)
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
                (Kr.hasOwnProperty(s)
                  ? (a != null && s === "onScroll" && ne("scroll", e),
                    o || u === a || (o = []))
                  : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Kd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
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
function Ne(e) {
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
  switch ((ga(t), t.tag)) {
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
      return Ne(t), null;
    case 1:
      return Ve(t.type) && uo(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        re(Be),
        re(je),
        _a(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Dl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Wu(ft), (ft = null)))),
        zu(e, t),
        Ne(t),
        null
      );
    case 5:
      Ra(t);
      var l = Sn(ll.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Ne(t), null;
        }
        if (((e = Sn(St.current)), Dl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[nl] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Or.length; l++) ne(Or[l], r);
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
              Es(r, o), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              ks(r, o), ne("invalid", r);
          }
          au(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      jl(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      jl(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Kr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              kl(r), Cs(r, o, !0);
              break;
            case "textarea":
              kl(r), Ps(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = io);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wf(n)),
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
            (e[nl] = r),
            Hd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = su(n, r)), n)) {
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
                for (l = 0; l < Or.length; l++) ne(Or[l], e);
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
                Es(e, r), (l = ru(e, r)), ne("invalid", e);
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
                ks(e, r), (l = iu(e, r)), ne("invalid", e);
                break;
              default:
                l = r;
            }
            au(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Ef(e, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Sf(e, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Yr(e, a)
                        : typeof a == "number" && Yr(e, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Kr.hasOwnProperty(o)
                          ? a != null && o === "onScroll" && ne("scroll", e)
                          : a != null && ra(e, o, a, i));
              }
            switch (n) {
              case "input":
                kl(e), Cs(e, r, !1);
                break;
              case "textarea":
                kl(e), Ps(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = io);
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
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Kd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = Sn(ll.current)), Sn(St.current), Dl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (o = r.nodeValue !== n) && ((e = Ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (re(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Qe !== null && t.mode & 1 && !(t.flags & 128))
          sd(), lr(), (t.flags |= 98560), (o = !1);
        else if (((o = Dl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[gt] = t;
          } else
            lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (o = !1);
        } else ft !== null && (Wu(ft), (ft = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : $a())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        ir(), zu(e, t), e === null && el(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Ea(t.type._context), Ne(t), null;
    case 17:
      return Ve(t.type) && uo(), Ne(t), null;
    case 19:
      if ((re(ue), (o = t.memoizedState), o === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Pr(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = mo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Pr(o, !1),
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
            ve() > ar &&
            ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
            )
              return Ne(t), null;
          } else
            2 * ve() - o.renderingStartTime > ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(o, !1), (t.lanes = 4194304));
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
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function sv(e, t) {
  switch ((ga(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ir(),
        re(Be),
        re(je),
        _a(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ra(t), null;
    case 13:
      if (
        (re(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        lr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ue), null;
    case 4:
      return ir(), null;
    case 10:
      return Ea(t.type._context), null;
    case 22:
    case 23:
      return Ua(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fl = !1,
  Me = !1,
  cv = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Kn(e, t) {
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
function Fu(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var hc = !1;
function fv(e, t) {
  if (((wu = ro), (e = Jf()), va(e))) {
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
            m = null;
          t: for (;;) {
            for (
              var S;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (S = v.firstChild) !== null;

            )
              (m = v), (v = S);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (u = i),
                m === o && ++p === r && (a = i),
                (S = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Su = { focusedElem: e, selectionRange: n }, ro = !1, D = t; D !== null; )
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
                    P = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : at(t.type, g),
                      P,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
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
  return (w = hc), (hc = !1), w;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Fu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function zo(e, t) {
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
function Iu(e) {
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
function Yd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Yd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[nl], delete t[Cu], delete t[Ym], delete t[Xm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xd(e.return)) return null;
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
function Uu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), (e = e.sibling);
}
function $u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($u(e, t, n), e = e.sibling; e !== null; ) $u(e, t, n), (e = e.sibling);
}
var Pe = null,
  st = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Gd(e, t, n), (n = n.sibling);
}
function Gd(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(_o, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || Kn(n, t);
    case 6:
      var r = Pe,
        l = st;
      (Pe = null),
        At(e, t, n),
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
              ? Fi(e.parentNode, n)
              : e.nodeType === 1 && Fi(e, n),
            Zr(e))
          : Fi(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (l = st),
        (Pe = n.stateNode.containerInfo),
        (st = !0),
        At(e, t, n),
        (Pe = r),
        (st = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Fu(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (Kn(n, t),
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
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), At(e, t, n), (Me = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function vc(e) {
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
        if (Pe === null) throw Error(_(160));
        Gd(o, i, l), (Pe = null), (st = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        fe(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jd(t, e), (t = t.sibling);
}
function Jd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), vt(e), r & 4)) {
        try {
          Br(3, e, e.return), zo(3, e);
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          Br(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      ut(t, e), vt(e), r & 512 && n !== null && Kn(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        vt(e),
        r & 512 && n !== null && Kn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yr(l, "");
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
            u === "input" && o.type === "radio" && o.name != null && yf(l, o),
              su(u, i);
            var s = su(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                v = a[i + 1];
              p === "style"
                ? Ef(l, v)
                : p === "dangerouslySetInnerHTML"
                  ? Sf(l, v)
                  : p === "children"
                    ? Yr(l, v)
                    : ra(l, p, v, s);
            }
            switch (u) {
              case "input":
                lu(l, o);
                break;
              case "textarea":
                gf(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Gn(l, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gn(l, !!o.multiple, o.defaultValue, !0)
                      : Gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nl] = o;
          } catch (g) {
            fe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ut(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
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
          Zr(t.containerInfo);
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
            (Fa = ve())),
        r & 4 && vc(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (s = Me) || p), ut(t, e), (Me = s)) : ut(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (D = e, p = e.child; p !== null; ) {
            for (v = D = p; D !== null; ) {
              switch (((m = D), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, m, m.return);
                  break;
                case 1:
                  Kn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
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
                  Kn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    gc(v);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (D = S)) : gc(v);
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
                      (u.style.display = xf("display", i)));
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
      ut(t, e), vt(e), r & 4 && vc(e);
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
          if (Xd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yr(l, ""), (r.flags &= -33));
          var o = mc(e);
          $u(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = mc(e);
          Uu(e, u, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dv(e, t, n) {
  (D = e), Zd(e);
}
function Zd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Fl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Me;
        u = Fl;
        var s = Me;
        if (((Fl = i), (Me = a) && !s))
          for (D = l; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wc(l)
                : a !== null
                  ? ((a.return = i), (D = a))
                  : wc(l);
        for (; o !== null; ) (D = o), Zd(o), (o = o.sibling);
        (D = l), (Fl = u), (Me = s);
      }
      yc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : yc(e);
  }
}
function yc(e) {
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
              Me || zo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
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
              o !== null && ec(t, o, r);
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
                ec(t, i, n);
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
                    v !== null && Zr(v);
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
              throw Error(_(163));
          }
        Me || (t.flags & 512 && Iu(t));
      } catch (m) {
        fe(t, t.return, m);
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
function gc(e) {
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
function wc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zo(4, t);
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
            Iu(t);
          } catch (a) {
            fe(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Iu(t);
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
  go = Ot.ReactCurrentDispatcher,
  Oa = Ot.ReactCurrentOwner,
  nt = Ot.ReactCurrentBatchConfig,
  K = 0,
  Ce = null,
  ge = null,
  Re = 0,
  He = 0,
  Yn = an(0),
  xe = 0,
  al = null,
  _n = 0,
  Fo = 0,
  za = 0,
  Vr = null,
  $e = null,
  Fa = 0,
  ar = 1 / 0,
  kt = null,
  wo = !1,
  Au = null,
  bt = null,
  Il = !1,
  Yt = null,
  So = 0,
  Wr = 0,
  Bu = null,
  Gl = -1,
  Jl = 0;
function Fe() {
  return K & 6 ? ve() : Gl !== -1 ? Gl : (Gl = ve());
}
function en(e) {
  return e.mode & 1
    ? K & 2 && Re !== 0
      ? Re & -Re
      : Jm.transition !== null
        ? (Jl === 0 && (Jl = Of()), Jl)
        : ((e = Y),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bf(e.type))),
          e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (Bu = null), Error(_(185)));
  dl(e, n, r),
    (!(K & 2) || e !== Ce) &&
      (e === Ce && (!(K & 2) && (Fo |= n), xe === 4 && Qt(e, Re)),
      We(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((ar = ve() + 500), jo && sn()));
}
function We(e, t) {
  var n = e.callbackNode;
  Jh(e, t);
  var r = no(e, e === Ce ? Re : 0);
  if (r === 0)
    n !== null && Ls(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ls(n), t === 1))
      e.tag === 0 ? Gm(Sc.bind(null, e)) : id(Sc.bind(null, e)),
        Qm(function () {
          !(K & 6) && sn();
        }),
        (n = null);
    else {
      switch (zf(r)) {
        case 1:
          n = aa;
          break;
        case 4:
          n = jf;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = Df;
          break;
        default:
          n = to;
      }
      n = op(n, qd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qd(e, t) {
  if (((Gl = -1), (Jl = 0), K & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (er() && e.callbackNode !== n) return null;
  var r = no(e, e === Ce ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xo(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var o = ep();
    (Ce !== e || Re !== t) && ((kt = null), (ar = ve() + 500), En(e, t));
    do
      try {
        vv();
        break;
      } catch (u) {
        bd(e, u);
      }
    while (1);
    xa(),
      (go.current = o),
      (K = l),
      ge !== null ? (t = 0) : ((Ce = null), (Re = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = hu(e)), l !== 0 && ((r = l), (t = Vu(e, l)))), t === 1)
    )
      throw ((n = al), En(e, 0), Qt(e, r), We(e, ve()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hv(l) &&
          ((t = xo(e, r)),
          t === 2 && ((o = hu(e)), o !== 0 && ((r = o), (t = Vu(e, o)))),
          t === 1))
      )
        throw ((n = al), En(e, 0), Qt(e, r), We(e, ve()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          yn(e, $e, kt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Fa + 500 - ve()), 10 < t))
          ) {
            if (no(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Eu(yn.bind(null, e, $e, kt), t);
            break;
          }
          yn(e, $e, kt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
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
            e.timeoutHandle = Eu(yn.bind(null, e, $e, kt), r);
            break;
          }
          yn(e, $e, kt);
          break;
        case 5:
          yn(e, $e, kt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return We(e, ve()), e.callbackNode === n ? qd.bind(null, e) : null;
}
function Vu(e, t) {
  var n = Vr;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = xo(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Wu(t)),
    e
  );
}
function Wu(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
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
function Qt(e, t) {
  for (
    t &= ~za,
      t &= ~Fo,
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
function Sc(e) {
  if (K & 6) throw Error(_(327));
  er();
  var t = no(e, 0);
  if (!(t & 1)) return We(e, ve()), null;
  var n = xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hu(e);
    r !== 0 && ((t = r), (n = Vu(e, r)));
  }
  if (n === 1) throw ((n = al), En(e, 0), Qt(e, t), We(e, ve()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yn(e, $e, kt),
    We(e, ve()),
    null
  );
}
function Ia(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((ar = ve() + 500), jo && sn());
  }
}
function Ln(e) {
  Yt !== null && Yt.tag === 0 && !(K & 6) && er();
  var t = K;
  K |= 1;
  var n = nt.transition,
    r = Y;
  try {
    if (((nt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (nt.transition = n), (K = t), !(K & 6) && sn();
  }
}
function Ua() {
  (He = Yn.current), re(Yn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hm(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((ga(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && uo();
          break;
        case 3:
          ir(), re(Be), re(je), _a();
          break;
        case 5:
          Ra(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          re(ue);
          break;
        case 19:
          re(ue);
          break;
        case 10:
          Ea(r.type._context);
          break;
        case 22:
        case 23:
          Ua();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ge = e = tn(e.current, null)),
    (Re = He = t),
    (xe = 0),
    (al = null),
    (za = Fo = _n = 0),
    ($e = Vr = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function bd(e, t) {
  do {
    var n = ge;
    try {
      if ((xa(), (Kl.current = yo), vo)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        vo = !1;
      }
      if (
        ((Rn = 0),
        (Ee = Se = ae = null),
        (Ar = !1),
        (ol = 0),
        (Oa.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (al = t), (ge = null);
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
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var S = uc(i);
          if (S !== null) {
            (S.flags &= -257),
              ac(S, i, u, o, t),
              S.mode & 1 && ic(o, s, t),
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
              ic(o, s, t), $a();
              break e;
            }
            a = Error(_(426));
          }
        } else if (le && u.mode & 1) {
          var P = uc(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ac(P, i, u, o, t),
              wa(ur(a, u));
            break e;
          }
        }
        (o = a = ur(a, u)),
          xe !== 4 && (xe = 2),
          Vr === null ? (Vr = [o]) : Vr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Fd(o, a, t);
              bs(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (bt === null || !bt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var c = Id(o, u, t);
                bs(o, c);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      np(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ep() {
  var e = go.current;
  return (go.current = yo), e === null ? yo : e;
}
function $a() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(_n & 268435455) && !(Fo & 268435455)) || Qt(Ce, Re);
}
function xo(e, t) {
  var n = K;
  K |= 2;
  var r = ep();
  (Ce !== e || Re !== t) && ((kt = null), En(e, t));
  do
    try {
      mv();
      break;
    } catch (l) {
      bd(e, l);
    }
  while (1);
  if ((xa(), (K = n), (go.current = r), ge !== null)) throw Error(_(261));
  return (Ce = null), (Re = 0), xe;
}
function mv() {
  for (; ge !== null; ) tp(ge);
}
function vv() {
  for (; ge !== null && !Bh(); ) tp(ge);
}
function tp(e) {
  var t = lp(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? np(e) : (ge = t),
    (Oa.current = null);
}
function np(e) {
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
function yn(e, t, n) {
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
  do er();
  while (Yt !== null);
  if (K & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Zh(e, o),
    e === Ce && ((ge = Ce = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Il ||
      ((Il = !0),
      op(to, function () {
        return er(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = nt.transition), (nt.transition = null);
    var i = Y;
    Y = 1;
    var u = K;
    (K |= 4),
      (Oa.current = null),
      fv(e, n),
      Jd(n, e),
      Im(Su),
      (ro = !!wu),
      (Su = wu = null),
      (e.current = n),
      dv(n),
      Vh(),
      (K = u),
      (Y = i),
      (nt.transition = o);
  } else e.current = n;
  if (
    (Il && ((Il = !1), (Yt = e), (So = l)),
    (o = e.pendingLanes),
    o === 0 && (bt = null),
    Qh(n.stateNode),
    We(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (wo) throw ((wo = !1), (e = Au), (Au = null), e);
  return (
    So & 1 && e.tag !== 0 && er(),
    (o = e.pendingLanes),
    o & 1 ? (e === Bu ? Wr++ : ((Wr = 0), (Bu = e))) : (Wr = 0),
    sn(),
    null
  );
}
function er() {
  if (Yt !== null) {
    var e = zf(So),
      t = nt.transition,
      n = Y;
    try {
      if (((nt.transition = null), (Y = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (So = 0), K & 6)) throw Error(_(331));
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
                      Br(8, p, o);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (D = v);
                  else
                    for (; D !== null; ) {
                      p = D;
                      var m = p.sibling,
                        S = p.return;
                      if ((Yd(p), p === s)) {
                        D = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (D = m);
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
                    var P = g.sibling;
                    (g.sibling = null), (g = P);
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
                    Br(9, o, o.return);
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
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (D = h);
          else
            e: for (i = f; D !== null; ) {
              if (((u = D), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zo(9, u);
                  }
                } catch (C) {
                  fe(u, u.return, C);
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
          ((K = l), sn(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(_o, e);
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
function xc(e, t, n) {
  (t = ur(n, t)),
    (t = Fd(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = Fe()),
    e !== null && (dl(e, 1, t), We(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) xc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = ur(n, e)),
            (e = Id(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = Fe()),
            t !== null && (dl(t, 1, e), We(t, e));
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
      (xe === 4 || (xe === 3 && (Re & 130023424) === Re && 500 > ve() - Fa)
        ? En(e, 0)
        : (za |= n)),
    We(e, t);
}
function rp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _l), (_l <<= 1), !(_l & 130023424) && (_l = 4194304))
      : (t = 1));
  var n = Fe();
  (e = jt(e, t)), e !== null && (dl(e, t, n), We(e, n));
}
function wv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rp(e, n);
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
      throw Error(_(314));
  }
  r !== null && r.delete(t), rp(e, n);
}
var lp;
lp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), uv(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), le && t.flags & 1048576 && ud(t, co, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xl(e, t), (e = t.pendingProps);
      var l = rr(t, je.current);
      bn(t, n), (l = Na(null, t, r, e, l, n));
      var o = Ta();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((o = !0), ao(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ka(t),
            (l.updater = Do),
            (t.stateNode = l),
            (l._reactInternals = t),
            Nu(t, r, e, n),
            (t = ju(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && ya(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ev(r)),
          (e = at(r, e)),
          l)
        ) {
          case 0:
            t = Mu(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = sc(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Mu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        fc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Bd(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fd(e, t),
          ho(t, r, null, n);
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
            (l = ur(Error(_(423)), t)), (t = dc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ur(Error(_(424)), t)), (t = dc(e, t, r, n, l));
            break e;
          } else
            for (
              Qe = Zt(t.stateNode.containerInfo.firstChild),
                Ke = t,
                le = !0,
                ft = null,
                n = md(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lr(), r === l)) {
            t = Dt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        vd(t),
        e === null && Ru(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        xu(r, l) ? (i = null) : o !== null && xu(r, o) && (t.flags |= 32),
        Ad(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ru(t), null;
    case 13:
      return Vd(e, t, n);
    case 4:
      return (
        Pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = or(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        sc(e, t, r, l, n)
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
          te(fo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ht(o.value, i)) {
            if (o.children === l.children && !Be.current) {
              t = Dt(e, t, n);
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
                      (a = Lt(-1, n & -n)), (a.tag = 2);
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
                      _u(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  _u(i, n, t),
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
        bn(t, n),
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
        cc(e, t, r, l, n)
      );
    case 15:
      return Ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Xl(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), ao(t)) : (e = !1),
        bn(t, n),
        pd(t, r, l),
        Nu(t, r, l, n),
        ju(null, t, r, !0, e, n)
      );
    case 19:
      return Wd(e, t, n);
    case 22:
      return $d(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function op(e, t) {
  return Mf(e, t);
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
function Aa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ev(e) {
  if (typeof e == "function") return Aa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oa)) return 11;
    if (e === ia) return 14;
  }
  return 2;
}
function tn(e, t) {
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
function Zl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Aa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case In:
        return Cn(n.children, l, o, t);
      case la:
        (i = 8), (l |= 8);
        break;
      case bi:
        return (
          (e = tt(12, n, t, l | 2)), (e.elementType = bi), (e.lanes = o), e
        );
      case eu:
        return (e = tt(13, n, t, l)), (e.elementType = eu), (e.lanes = o), e;
      case tu:
        return (e = tt(19, n, t, l)), (e.elementType = tu), (e.lanes = o), e;
      case hf:
        return Io(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case df:
              i = 10;
              break e;
            case pf:
              i = 9;
              break e;
            case oa:
              i = 11;
              break e;
            case ia:
              i = 14;
              break e;
            case Vt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Cn(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function Io(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = hf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hi(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function Qi(e, t, n) {
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
    (this.eventTimes = Pi(0)),
    (this.expirationTimes = Pi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ba(e, t, n, r, l, o, i, u, a) {
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
    ka(o),
    e
  );
}
function kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ip(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(_(170));
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
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return od(e, n, t);
  }
  return t;
}
function up(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Ba(n, r, !0, e, l, o, i, u, a)),
    (e.context = ip(null)),
    (n = e.current),
    (r = Fe()),
    (l = en(n)),
    (o = Lt(r, l)),
    (o.callback = t ?? null),
    qt(n, o, l),
    (e.current.lanes = l),
    dl(e, l, r),
    We(e, r),
    e
  );
}
function Uo(e, t, n, r) {
  var l = t.current,
    o = Fe(),
    i = en(l);
  return (
    (n = ip(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(l, t, i)),
    e !== null && (pt(e, l, i, o), Ql(e, l, i)),
    i
  );
}
function Eo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ec(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Va(e, t) {
  Ec(e, t), (e = e.alternate) && Ec(e, t);
}
function Pv() {
  return null;
}
var ap =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wa(e) {
  this._internalRoot = e;
}
$o.prototype.render = Wa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Uo(e, t, null, null);
};
$o.prototype.unmount = Wa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function () {
      Uo(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function $o(e) {
  this._internalRoot = e;
}
$o.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && Af(e);
  }
};
function Ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ao(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cc() {}
function Rv(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Eo(i);
        o.call(s);
      };
    }
    var i = up(t, r, e, 0, null, !1, !1, "", Cc);
    return (
      (e._reactRootContainer = i),
      (e[Mt] = i.current),
      el(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = Eo(a);
      u.call(s);
    };
  }
  var a = Ba(e, 0, !1, null, null, !1, !1, "", Cc);
  return (
    (e._reactRootContainer = a),
    (e[Mt] = a.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      Uo(t, a, n, r);
    }),
    a
  );
}
function Bo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = Eo(i);
        u.call(a);
      };
    }
    Uo(t, i, e, l);
  } else i = Rv(n, t, e, l, r);
  return Eo(i);
}
Ff = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes);
        n !== 0 &&
          (sa(t, n | 1), We(t, ve()), !(K & 6) && ((ar = ve() + 500), sn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Fe();
          pt(r, e, 1, l);
        }
      }),
        Va(e, 1);
  }
};
ca = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Fe();
      pt(t, e, 134217728, n);
    }
    Va(e, 134217728);
  }
};
If = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Fe();
      pt(n, e, t, r);
    }
    Va(e, t);
  }
};
Uf = function () {
  return Y;
};
$f = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
fu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((lu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Mo(r);
            if (!l) throw Error(_(90));
            vf(r), lu(r, l);
          }
        }
      }
      break;
    case "textarea":
      gf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gn(e, !!n.multiple, t, !1);
  }
};
Pf = Ia;
Rf = Ln;
var _v = { usingClientEntryPoint: !1, Events: [hl, Bn, Mo, Cf, kf, Ia] },
  Rr = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Lv = {
    bundleType: Rr.bundleType,
    version: Rr.version,
    rendererPackageName: Rr.rendererPackageName,
    rendererConfig: Rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rr.findFiberByHostInstance || Pv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ul.isDisabled && Ul.supportsFiber)
    try {
      (_o = Ul.inject(Lv)), (wt = Ul);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _v;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ha(t)) throw Error(_(200));
  return kv(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Ha(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = ap;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ba(e, 1, !1, null, null, n, !1, r, l)),
    (e[Mt] = t.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    new Wa(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Nf(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return Ln(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Ao(t)) throw Error(_(200));
  return Bo(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Ha(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = ap;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = up(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Mt] = t.current),
    el(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new $o(t);
};
Xe.render = function (e, t, n) {
  if (!Ao(t)) throw Error(_(200));
  return Bo(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Ao(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Ln(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Ia;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ao(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Bo(e, t, n, !1, r);
};
Xe.version = "18.2.0-next-9e3b772b8-20220608";
function sp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sp);
    } catch (e) {
      console.error(e);
    }
}
sp(), (uf.exports = Xe);
var Qa = uf.exports;
const Nv = Xc(Qa);
var kc = Qa;
(Zi.createRoot = kc.createRoot), (Zi.hydrateRoot = kc.hydrateRoot);
var cp = { exports: {} },
  fp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = E;
function Tv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mv = typeof Object.is == "function" ? Object.is : Tv,
  jv = sr.useState,
  Dv = sr.useEffect,
  Ov = sr.useLayoutEffect,
  zv = sr.useDebugValue;
function Fv(e, t) {
  var n = t(),
    r = jv({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    Ov(
      function () {
        (l.value = n), (l.getSnapshot = t), Ki(l) && o({ inst: l });
      },
      [e, n, t],
    ),
    Dv(
      function () {
        return (
          Ki(l) && o({ inst: l }),
          e(function () {
            Ki(l) && o({ inst: l });
          })
        );
      },
      [e],
    ),
    zv(n),
    n
  );
}
function Ki(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mv(e, n);
  } catch {
    return !0;
  }
}
function Iv(e, t) {
  return t();
}
var Uv =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Iv
    : Fv;
fp.useSyncExternalStore =
  sr.useSyncExternalStore !== void 0 ? sr.useSyncExternalStore : Uv;
cp.exports = fp;
var $v = cp.exports,
  dp = { exports: {} },
  pp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vo = E,
  Av = $v;
function Bv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vv = typeof Object.is == "function" ? Object.is : Bv,
  Wv = Av.useSyncExternalStore,
  Hv = Vo.useRef,
  Qv = Vo.useEffect,
  Kv = Vo.useMemo,
  Yv = Vo.useDebugValue;
pp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
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
dp.exports = pp;
var Xv = dp.exports;
function Gv(e) {
  e();
}
let hp = Gv;
const Jv = (e) => (hp = e),
  Zv = () => hp,
  Pc = Symbol.for("react-redux-context"),
  Rc = typeof globalThis < "u" ? globalThis : {};
function qv() {
  var e;
  if (!E.createContext) return {};
  const t = (e = Rc[Pc]) != null ? e : (Rc[Pc] = new Map());
  let n = t.get(E.createContext);
  return n || ((n = E.createContext(null)), t.set(E.createContext, n)), n;
}
const ln = qv();
function Ka(e = ln) {
  return function () {
    return E.useContext(e);
  };
}
const mp = Ka(),
  bv = () => {
    throw new Error("uSES not initialized!");
  };
let vp = bv;
const ey = (e) => {
    vp = e;
  },
  ty = (e, t) => e === t;
function ny(e = ln) {
  const t = e === ln ? mp : Ka(e);
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
        noopCheck: m,
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
      w = vp(s.addNestedSub, a.getState, p || a.getState, S, o);
    return E.useDebugValue(w), w;
  };
}
const ry = ny();
var yp = { exports: {} },
  X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ke = typeof Symbol == "function" && Symbol.for,
  Ya = ke ? Symbol.for("react.element") : 60103,
  Xa = ke ? Symbol.for("react.portal") : 60106,
  Wo = ke ? Symbol.for("react.fragment") : 60107,
  Ho = ke ? Symbol.for("react.strict_mode") : 60108,
  Qo = ke ? Symbol.for("react.profiler") : 60114,
  Ko = ke ? Symbol.for("react.provider") : 60109,
  Yo = ke ? Symbol.for("react.context") : 60110,
  Ga = ke ? Symbol.for("react.async_mode") : 60111,
  Xo = ke ? Symbol.for("react.concurrent_mode") : 60111,
  Go = ke ? Symbol.for("react.forward_ref") : 60112,
  Jo = ke ? Symbol.for("react.suspense") : 60113,
  ly = ke ? Symbol.for("react.suspense_list") : 60120,
  Zo = ke ? Symbol.for("react.memo") : 60115,
  qo = ke ? Symbol.for("react.lazy") : 60116,
  oy = ke ? Symbol.for("react.block") : 60121,
  iy = ke ? Symbol.for("react.fundamental") : 60117,
  uy = ke ? Symbol.for("react.responder") : 60118,
  ay = ke ? Symbol.for("react.scope") : 60119;
function Je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ya:
        switch (((e = e.type), e)) {
          case Ga:
          case Xo:
          case Wo:
          case Qo:
          case Ho:
          case Jo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Yo:
              case Go:
              case qo:
              case Zo:
              case Ko:
                return e;
              default:
                return t;
            }
        }
      case Xa:
        return t;
    }
  }
}
function gp(e) {
  return Je(e) === Xo;
}
X.AsyncMode = Ga;
X.ConcurrentMode = Xo;
X.ContextConsumer = Yo;
X.ContextProvider = Ko;
X.Element = Ya;
X.ForwardRef = Go;
X.Fragment = Wo;
X.Lazy = qo;
X.Memo = Zo;
X.Portal = Xa;
X.Profiler = Qo;
X.StrictMode = Ho;
X.Suspense = Jo;
X.isAsyncMode = function (e) {
  return gp(e) || Je(e) === Ga;
};
X.isConcurrentMode = gp;
X.isContextConsumer = function (e) {
  return Je(e) === Yo;
};
X.isContextProvider = function (e) {
  return Je(e) === Ko;
};
X.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ya;
};
X.isForwardRef = function (e) {
  return Je(e) === Go;
};
X.isFragment = function (e) {
  return Je(e) === Wo;
};
X.isLazy = function (e) {
  return Je(e) === qo;
};
X.isMemo = function (e) {
  return Je(e) === Zo;
};
X.isPortal = function (e) {
  return Je(e) === Xa;
};
X.isProfiler = function (e) {
  return Je(e) === Qo;
};
X.isStrictMode = function (e) {
  return Je(e) === Ho;
};
X.isSuspense = function (e) {
  return Je(e) === Jo;
};
X.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wo ||
    e === Xo ||
    e === Qo ||
    e === Ho ||
    e === Jo ||
    e === ly ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === qo ||
        e.$$typeof === Zo ||
        e.$$typeof === Ko ||
        e.$$typeof === Yo ||
        e.$$typeof === Go ||
        e.$$typeof === iy ||
        e.$$typeof === uy ||
        e.$$typeof === ay ||
        e.$$typeof === oy))
  );
};
X.typeOf = Je;
yp.exports = X;
var sy = yp.exports,
  wp = sy,
  cy = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  fy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Sp = {};
Sp[wp.ForwardRef] = cy;
Sp[wp.Memo] = fy;
var J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ja = Symbol.for("react.element"),
  Za = Symbol.for("react.portal"),
  bo = Symbol.for("react.fragment"),
  ei = Symbol.for("react.strict_mode"),
  ti = Symbol.for("react.profiler"),
  ni = Symbol.for("react.provider"),
  ri = Symbol.for("react.context"),
  dy = Symbol.for("react.server_context"),
  li = Symbol.for("react.forward_ref"),
  oi = Symbol.for("react.suspense"),
  ii = Symbol.for("react.suspense_list"),
  ui = Symbol.for("react.memo"),
  ai = Symbol.for("react.lazy"),
  py = Symbol.for("react.offscreen"),
  xp;
xp = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ja:
        switch (((e = e.type), e)) {
          case bo:
          case ti:
          case ei:
          case oi:
          case ii:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case dy:
              case ri:
              case li:
              case ai:
              case ui:
              case ni:
                return e;
              default:
                return t;
            }
        }
      case Za:
        return t;
    }
  }
}
J.ContextConsumer = ri;
J.ContextProvider = ni;
J.Element = Ja;
J.ForwardRef = li;
J.Fragment = bo;
J.Lazy = ai;
J.Memo = ui;
J.Portal = Za;
J.Profiler = ti;
J.StrictMode = ei;
J.Suspense = oi;
J.SuspenseList = ii;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return ot(e) === ri;
};
J.isContextProvider = function (e) {
  return ot(e) === ni;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ja;
};
J.isForwardRef = function (e) {
  return ot(e) === li;
};
J.isFragment = function (e) {
  return ot(e) === bo;
};
J.isLazy = function (e) {
  return ot(e) === ai;
};
J.isMemo = function (e) {
  return ot(e) === ui;
};
J.isPortal = function (e) {
  return ot(e) === Za;
};
J.isProfiler = function (e) {
  return ot(e) === ti;
};
J.isStrictMode = function (e) {
  return ot(e) === ei;
};
J.isSuspense = function (e) {
  return ot(e) === oi;
};
J.isSuspenseList = function (e) {
  return ot(e) === ii;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === bo ||
    e === ti ||
    e === ei ||
    e === oi ||
    e === ii ||
    e === py ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ai ||
        e.$$typeof === ui ||
        e.$$typeof === ni ||
        e.$$typeof === ri ||
        e.$$typeof === li ||
        e.$$typeof === xp ||
        e.getModuleId !== void 0))
  );
};
J.typeOf = ot;
function hy() {
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
const _c = { notify() {}, get: () => [] };
function my(e, t) {
  let n,
    r = _c,
    l = 0,
    o = !1;
  function i(g) {
    p();
    const P = r.subscribe(g);
    let d = !1;
    return () => {
      d || ((d = !0), P(), v());
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
    l++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = hy()));
  }
  function v() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = _c));
  }
  function m() {
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
    trySubscribe: m,
    tryUnsubscribe: S,
    getListeners: () => r,
  };
  return w;
}
const vy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  yy = vy ? E.useLayoutEffect : E.useEffect;
function gy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = "once",
  noopCheck: o = "once",
}) {
  const i = E.useMemo(() => {
      const s = my(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: o,
      };
    }, [e, r, l, o]),
    u = E.useMemo(() => e.getState(), [e]);
  yy(() => {
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
function Ep(e = ln) {
  const t = e === ln ? mp : Ka(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const wy = Ep();
function Sy(e = ln) {
  const t = e === ln ? wy : Ep(e);
  return function () {
    return t().dispatch;
  };
}
const si = Sy();
ey(Xv.useSyncExternalStoreWithSelector);
Jv(Qa.unstable_batchedUpdates);
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
const Lc = "popstate";
function xy(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return sl(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Tn(l);
  }
  return Cy(t, n, null, e);
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
function Ey() {
  return Math.random().toString(36).substr(2, 8);
}
function Nc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function sl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? zt(t) : t,
      { state: n, key: (t && t.key) || r || Ey() },
    )
  );
}
function Tn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function zt(e) {
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
function Cy(e, t, n, r) {
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
    let P = p(),
      d = P == null ? null : P - s;
    (s = P), a && a({ action: u, location: g.location, delta: d });
  }
  function m(P, d) {
    u = he.Push;
    let f = sl(g.location, P, d);
    n && n(f, P), (s = p() + 1);
    let h = Nc(f, s),
      c = g.createHref(f);
    try {
      i.pushState(h, "", c);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(c);
    }
    o && a && a({ action: u, location: g.location, delta: 1 });
  }
  function S(P, d) {
    u = he.Replace;
    let f = sl(g.location, P, d);
    n && n(f, P), (s = p());
    let h = Nc(f, s),
      c = g.createHref(f);
    i.replaceState(h, "", c),
      o && a && a({ action: u, location: g.location, delta: 0 });
  }
  function w(P) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof P == "string" ? P : Tn(P);
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
    listen(P) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Lc, v),
        (a = P),
        () => {
          l.removeEventListener(Lc, v), (a = null);
        }
      );
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: w,
    encodeLocation(P) {
      let d = w(P);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: S,
    go(P) {
      return i.go(P);
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
const ky = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Py(e) {
  return e.index === !0;
}
function Hu(e, t, n, r) {
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
        Py(l))
      ) {
        let a = de({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = de({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = Hu(l.children, t, i, r)), a
        );
      }
    })
  );
}
function Xn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? zt(t) : t,
    l = on(r.pathname || "/", n);
  if (l == null) return null;
  let o = Cp(e);
  _y(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Fy(o[u], Uy(l));
  return i;
}
function Ry(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Cp(e, t, n, r) {
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
    let s = Nt([r, a.relativePath]),
      p = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Cp(o.children, t, p, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Oy(s, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of kp(o.path)) l(o, i, a);
    }),
    t
  );
}
function kp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = kp(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function _y(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : zy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Ly = /^:\w+$/,
  Ny = 3,
  Ty = 2,
  My = 1,
  jy = 10,
  Dy = -2,
  Tc = (e) => e === "*";
function Oy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Tc) && (r += Dy),
    t && (r += Ty),
    n
      .filter((l) => !Tc(l))
      .reduce((l, o) => l + (Ly.test(o) ? Ny : o === "" ? My : jy), r)
  );
}
function zy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = Qu(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s,
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = u.route;
    o.push({
      params: r,
      pathname: Nt([l, p.pathname]),
      pathnameBase: Vy(Nt([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (l = Nt([l, p.pathnameBase]));
  }
  return o;
}
function Qu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Iy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      let { paramName: m, isOptional: S } = p;
      if (m === "*") {
        let g = u[v] || "";
        i = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const w = u[v];
      return S && !w ? (s[m] = void 0) : (s[m] = $y(w || "", m)), s;
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
function Uy(e) {
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
function $y(e, t) {
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
function on(e, t) {
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
  } = typeof e == "string" ? zt(e) : e;
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
function Yi(e, t, n, r) {
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
function ci(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function qa(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = zt(e))
    : ((l = de({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        Yi("?", "pathname", "search", l),
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        Yi("#", "pathname", "hash", l),
      ),
      W(!l.search || !l.search.includes("#"), Yi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let v = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let a = Ay(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const Nt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Vy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Hy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class ba {
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
function Pp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Rp = ["post", "put", "patch", "delete"],
  Qy = new Set(Rp),
  Ky = ["get", ...Rp],
  Yy = new Set(Ky),
  Xy = new Set([301, 302, 303, 307, 308]),
  Gy = new Set([307, 308]),
  Xi = {
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
  _r = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  _p = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Lp = "remix-router-transitions";
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
    i = Hu(e.routes, l, void 0, o),
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
    m = null,
    S = null,
    w = null,
    g = e.hydrationData != null,
    P = Xn(i, e.history.location, a),
    d = null;
  if (P == null) {
    let y = qe(404, { pathname: e.history.location.pathname }),
      { matches: x, route: k } = Uc(i);
    (P = x), (d = { [k.id]: y });
  }
  let f =
      !P.some((y) => y.route.lazy) &&
      (!P.some((y) => y.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: f,
      navigation: Xi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = he.Pop,
    L = !1,
    R,
    T = !1,
    A = new Map(),
    F = null,
    oe = !1,
    De = !1,
    mt = [],
    fn = [],
    ce = new Map(),
    Ft = 0,
    xt = -1,
    M = new Map(),
    I = new Set(),
    B = new Map(),
    Z = new Map(),
    ee = new Set(),
    Ze = new Map(),
    Oe = new Map(),
    dn = !1;
  function Et() {
    if (
      ((p = e.history.listen((y) => {
        let { action: x, location: k, delta: j } = y;
        if (dn) {
          dn = !1;
          return;
        }
        Nn(
          Oe.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let z = ds({
          currentLocation: c.location,
          nextLocation: k,
          historyAction: x,
        });
        if (z && j != null) {
          (dn = !0),
            e.history.go(j * -1),
            Sl(z, {
              state: "blocked",
              location: k,
              proceed() {
                Sl(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(j);
              },
              reset() {
                let U = new Map(c.blockers);
                U.set(z, _r), ye({ blockers: U });
              },
            });
          return;
        }
        return pn(x, k);
      })),
      n)
    ) {
      sg(t, A);
      let y = () => cg(t, A);
      t.addEventListener("pagehide", y),
        (F = () => t.removeEventListener("pagehide", y));
    }
    return c.initialized || pn(he.Pop, c.location), h;
  }
  function On() {
    p && p(),
      F && F(),
      v.clear(),
      R && R.abort(),
      c.fetchers.forEach((y, x) => wl(x)),
      c.blockers.forEach((y, x) => fs(x));
  }
  function Hp(y) {
    return v.add(y), () => v.delete(y);
  }
  function ye(y, x) {
    c = de({}, c, y);
    let k = [],
      j = [];
    s.v7_fetcherPersist &&
      c.fetchers.forEach((z, U) => {
        z.state === "idle" && (ee.has(U) ? j.push(U) : k.push(U));
      }),
      v.forEach((z) =>
        z(c, { deletedFetchers: j, unstable_viewTransitionOpts: x }),
      ),
      s.v7_fetcherPersist &&
        (k.forEach((z) => c.fetchers.delete(z)), j.forEach((z) => wl(z)));
  }
  function hr(y, x) {
    var k, j;
    let z =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        ct(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((k = y.state) == null ? void 0 : k._isRedirect) !== !0,
      U;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (U = x.actionData)
        : (U = null)
      : z
        ? (U = c.actionData)
        : (U = null);
    let V = x.loaderData
        ? Ic(c.loaderData, x.loaderData, x.matches || [], x.errors)
        : c.loaderData,
      $ = c.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((ie, Q) => $.set(Q, _r)));
    let O =
      L === !0 ||
      (c.navigation.formMethod != null &&
        ct(c.navigation.formMethod) &&
        ((j = y.state) == null ? void 0 : j._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      oe ||
        C === he.Pop ||
        (C === he.Push
          ? e.history.push(y, y.state)
          : C === he.Replace && e.history.replace(y, y.state));
    let q;
    if (C === he.Pop) {
      let ie = A.get(c.location.pathname);
      ie && ie.has(y.pathname)
        ? (q = { currentLocation: c.location, nextLocation: y })
        : A.has(y.pathname) &&
          (q = { currentLocation: y, nextLocation: c.location });
    } else if (T) {
      let ie = A.get(c.location.pathname);
      ie
        ? ie.add(y.pathname)
        : ((ie = new Set([y.pathname])), A.set(c.location.pathname, ie)),
        (q = { currentLocation: c.location, nextLocation: y });
    }
    ye(
      de({}, x, {
        actionData: U,
        loaderData: V,
        historyAction: C,
        location: y,
        initialized: !0,
        navigation: Xi,
        revalidation: "idle",
        restoreScrollPosition: hs(y, x.matches || c.matches),
        preventScrollReset: O,
        blockers: $,
      }),
      q,
    ),
      (C = he.Pop),
      (L = !1),
      (T = !1),
      (oe = !1),
      (De = !1),
      (mt = []),
      (fn = []);
  }
  async function os(y, x) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let k = Ku(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        y,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative,
      ),
      {
        path: j,
        submission: z,
        error: U,
      } = Mc(s.v7_normalizeFormMethod, !1, k, x),
      V = c.location,
      $ = sl(c.location, j, x && x.state);
    $ = de({}, $, e.history.encodeLocation($));
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
      Q = ds({ currentLocation: V, nextLocation: $, historyAction: q });
    if (Q) {
      Sl(Q, {
        state: "blocked",
        location: $,
        proceed() {
          Sl(Q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: $,
          }),
            os(y, x);
        },
        reset() {
          let b = new Map(c.blockers);
          b.set(Q, _r), ye({ blockers: b });
        },
      });
      return;
    }
    return await pn(q, $, {
      submission: z,
      pendingError: U,
      preventScrollReset: ie,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
    });
  }
  function Qp() {
    if (
      (hi(),
      ye({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        pn(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      pn(C || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function pn(y, x, k) {
    R && R.abort(),
      (R = null),
      (C = y),
      (oe = (k && k.startUninterruptedRevalidation) === !0),
      eh(c.location, c.matches),
      (L = (k && k.preventScrollReset) === !0),
      (T = (k && k.enableViewTransition) === !0);
    let j = u || i,
      z = k && k.overrideNavigation,
      U = Xn(j, x, a);
    if (!U) {
      let b = qe(404, { pathname: x.pathname }),
        { matches: we, route: hn } = Uc(j);
      mi(), hr(x, { matches: we, loaderData: {}, errors: { [hn.id]: b } });
      return;
    }
    if (
      c.initialized &&
      !De &&
      rg(c.location, x) &&
      !(k && k.submission && ct(k.submission.formMethod))
    ) {
      hr(x, { matches: U });
      return;
    }
    R = new AbortController();
    let V = Nr(e.history, x, R.signal, k && k.submission),
      $,
      O;
    if (k && k.pendingError) O = { [Hr(U).route.id]: k.pendingError };
    else if (k && k.submission && ct(k.submission.formMethod)) {
      let b = await Kp(V, x, k.submission, U, { replace: k.replace });
      if (b.shortCircuited) return;
      ($ = b.pendingActionData),
        (O = b.pendingActionError),
        (z = Gi(x, k.submission)),
        (V = new Request(V.url, { signal: V.signal }));
    }
    let {
      shortCircuited: q,
      loaderData: ie,
      errors: Q,
    } = await Yp(
      V,
      x,
      U,
      z,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      $,
      O,
    );
    q ||
      ((R = null),
      hr(
        x,
        de({ matches: U }, $ ? { actionData: $ } : {}, {
          loaderData: ie,
          errors: Q,
        }),
      ));
  }
  async function Kp(y, x, k, j, z) {
    z === void 0 && (z = {}), hi();
    let U = ug(x, k);
    ye({ navigation: U });
    let V,
      $ = Xu(j, x);
    if (!$.route.action && !$.route.lazy)
      V = {
        type: me.error,
        error: qe(405, {
          method: y.method,
          pathname: x.pathname,
          routeId: $.route.id,
        }),
      };
    else if (((V = await Lr("action", y, $, j, o, l, a)), y.signal.aborted))
      return { shortCircuited: !0 };
    if (tr(V)) {
      let O;
      return (
        z && z.replace != null
          ? (O = z.replace)
          : (O = V.location === c.location.pathname + c.location.search),
        await mr(c, V, { submission: k, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (Qr(V)) {
      let O = Hr(j, $.route.id);
      return (
        (z && z.replace) !== !0 && (C = he.Push),
        { pendingActionData: {}, pendingActionError: { [O.route.id]: V.error } }
      );
    }
    if (xn(V)) throw qe(400, { type: "defer-action" });
    return { pendingActionData: { [$.route.id]: V.data } };
  }
  async function Yp(y, x, k, j, z, U, V, $, O) {
    let q = j || Gi(x, z),
      ie = z || U || Bc(q),
      Q = u || i,
      [b, we] = jc(e.history, c, k, ie, x, De, mt, fn, B, I, Q, a, $, O);
    if (
      (mi(
        (G) =>
          !(k && k.some((it) => it.route.id === G)) ||
          (b && b.some((it) => it.route.id === G)),
      ),
      (xt = ++Ft),
      b.length === 0 && we.length === 0)
    ) {
      let G = ss();
      return (
        hr(
          x,
          de(
            { matches: k, loaderData: {}, errors: O || null },
            $ ? { actionData: $ } : {},
            G ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!oe) {
      we.forEach((it) => {
        let $t = c.fetchers.get(it.key),
          pe = Tr(void 0, $t ? $t.data : void 0);
        c.fetchers.set(it.key, pe);
      });
      let G = $ || c.actionData;
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
      ce.has(G.key) && It(G.key), G.controller && ce.set(G.key, G.controller);
    });
    let hn = () => we.forEach((G) => It(G.key));
    R && R.signal.addEventListener("abort", hn);
    let {
      results: mn,
      loaderResults: yr,
      fetcherResults: vi,
    } = await us(c.matches, k, b, we, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", hn),
      we.forEach((G) => ce.delete(G.key));
    let Ct = $c(mn);
    if (Ct) {
      if (Ct.idx >= b.length) {
        let G = we[Ct.idx - b.length].key;
        I.add(G);
      }
      return await mr(c, Ct.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: Ut, errors: xl } = Fc(c, k, b, yr, O, we, vi, Ze);
    Ze.forEach((G, it) => {
      G.subscribe(($t) => {
        ($t || G.done) && Ze.delete(it);
      });
    });
    let yi = ss(),
      gi = cs(xt),
      wi = yi || gi || we.length > 0;
    return de(
      { loaderData: Ut, errors: xl },
      wi ? { fetchers: new Map(c.fetchers) } : {},
    );
  }
  function is(y) {
    return (
      s.v7_fetcherPersist &&
        (Z.set(y, (Z.get(y) || 0) + 1), ee.has(y) && ee.delete(y)),
      c.fetchers.get(y) || Jy
    );
  }
  function Xp(y, x, k, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    ce.has(y) && It(y);
    let z = u || i,
      U = Ku(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        k,
        x,
        j == null ? void 0 : j.relative,
      ),
      V = Xn(z, U, a);
    if (!V) {
      vr(y, x, qe(404, { pathname: U }));
      return;
    }
    let {
      path: $,
      submission: O,
      error: q,
    } = Mc(s.v7_normalizeFormMethod, !0, U, j);
    if (q) {
      vr(y, x, q);
      return;
    }
    let ie = Xu(V, $);
    if (((L = (j && j.preventScrollReset) === !0), O && ct(O.formMethod))) {
      Gp(y, x, $, ie, V, O);
      return;
    }
    B.set(y, { routeId: x, path: $ }), Jp(y, x, $, ie, V, O);
  }
  async function Gp(y, x, k, j, z, U) {
    if ((hi(), B.delete(y), !j.route.action && !j.route.lazy)) {
      let pe = qe(405, { method: U.formMethod, pathname: k, routeId: x });
      vr(y, x, pe);
      return;
    }
    let V = c.fetchers.get(y),
      $ = ag(U, V);
    c.fetchers.set(y, $), ye({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      q = Nr(e.history, k, O.signal, U);
    ce.set(y, O);
    let ie = Ft,
      Q = await Lr("action", q, j, z, o, l, a);
    if (q.signal.aborted) {
      ce.get(y) === O && ce.delete(y);
      return;
    }
    if (ee.has(y)) {
      c.fetchers.set(y, Bt(void 0)), ye({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (tr(Q))
      if ((ce.delete(y), xt > ie)) {
        let pe = Bt(void 0);
        c.fetchers.set(y, pe), ye({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        I.add(y);
        let pe = Tr(U);
        return (
          c.fetchers.set(y, pe),
          ye({ fetchers: new Map(c.fetchers) }),
          mr(c, Q, { fetcherSubmission: U })
        );
      }
    if (Qr(Q)) {
      vr(y, x, Q.error);
      return;
    }
    if (xn(Q)) throw qe(400, { type: "defer-action" });
    let b = c.navigation.location || c.location,
      we = Nr(e.history, b, O.signal),
      hn = u || i,
      mn =
        c.navigation.state !== "idle"
          ? Xn(hn, c.navigation.location, a)
          : c.matches;
    W(mn, "Didn't find any matches after fetcher action");
    let yr = ++Ft;
    M.set(y, yr);
    let vi = Tr(U, Q.data);
    c.fetchers.set(y, vi);
    let [Ct, Ut] = jc(
      e.history,
      c,
      mn,
      U,
      b,
      De,
      mt,
      fn,
      B,
      I,
      hn,
      a,
      { [j.route.id]: Q.data },
      void 0,
    );
    Ut.filter((pe) => pe.key !== y).forEach((pe) => {
      let gr = pe.key,
        ms = c.fetchers.get(gr),
        nh = Tr(void 0, ms ? ms.data : void 0);
      c.fetchers.set(gr, nh),
        ce.has(gr) && It(gr),
        pe.controller && ce.set(gr, pe.controller);
    }),
      ye({ fetchers: new Map(c.fetchers) });
    let xl = () => Ut.forEach((pe) => It(pe.key));
    O.signal.addEventListener("abort", xl);
    let {
      results: yi,
      loaderResults: gi,
      fetcherResults: wi,
    } = await us(c.matches, mn, Ct, Ut, we);
    if (O.signal.aborted) return;
    O.signal.removeEventListener("abort", xl),
      M.delete(y),
      ce.delete(y),
      Ut.forEach((pe) => ce.delete(pe.key));
    let G = $c(yi);
    if (G) {
      if (G.idx >= Ct.length) {
        let pe = Ut[G.idx - Ct.length].key;
        I.add(pe);
      }
      return mr(c, G.result);
    }
    let { loaderData: it, errors: $t } = Fc(
      c,
      c.matches,
      Ct,
      gi,
      void 0,
      Ut,
      wi,
      Ze,
    );
    if (c.fetchers.has(y)) {
      let pe = Bt(Q.data);
      c.fetchers.set(y, pe);
    }
    cs(yr),
      c.navigation.state === "loading" && yr > xt
        ? (W(C, "Expected pending action"),
          R && R.abort(),
          hr(c.navigation.location, {
            matches: mn,
            loaderData: it,
            errors: $t,
            fetchers: new Map(c.fetchers),
          }))
        : (ye({
            errors: $t,
            loaderData: Ic(c.loaderData, it, mn, $t),
            fetchers: new Map(c.fetchers),
          }),
          (De = !1));
  }
  async function Jp(y, x, k, j, z, U) {
    let V = c.fetchers.get(y),
      $ = Tr(U, V ? V.data : void 0);
    c.fetchers.set(y, $), ye({ fetchers: new Map(c.fetchers) });
    let O = new AbortController(),
      q = Nr(e.history, k, O.signal);
    ce.set(y, O);
    let ie = Ft,
      Q = await Lr("loader", q, j, z, o, l, a);
    if (
      (xn(Q) && (Q = (await Mp(Q, q.signal, !0)) || Q),
      ce.get(y) === O && ce.delete(y),
      q.signal.aborted)
    )
      return;
    if (ee.has(y)) {
      c.fetchers.set(y, Bt(void 0)), ye({ fetchers: new Map(c.fetchers) });
      return;
    }
    if (tr(Q))
      if (xt > ie) {
        let we = Bt(void 0);
        c.fetchers.set(y, we), ye({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        I.add(y), await mr(c, Q);
        return;
      }
    if (Qr(Q)) {
      vr(y, x, Q.error);
      return;
    }
    W(!xn(Q), "Unhandled fetcher deferred data");
    let b = Bt(Q.data);
    c.fetchers.set(y, b), ye({ fetchers: new Map(c.fetchers) });
  }
  async function mr(y, x, k) {
    let {
      submission: j,
      fetcherSubmission: z,
      replace: U,
    } = k === void 0 ? {} : k;
    x.revalidate && (De = !0);
    let V = sl(y.location, x.location, { _isRedirect: !0 });
    if ((W(V, "Expected a location on the redirect navigation"), n)) {
      let b = !1;
      if (x.reloadDocument) b = !0;
      else if (_p.test(x.location)) {
        const we = e.history.createURL(x.location);
        b = we.origin !== t.location.origin || on(we.pathname, a) == null;
      }
      if (b) {
        U ? t.location.replace(x.location) : t.location.assign(x.location);
        return;
      }
    }
    R = null;
    let $ = U === !0 ? he.Replace : he.Push,
      { formMethod: O, formAction: q, formEncType: ie } = y.navigation;
    !j && !z && O && q && ie && (j = Bc(y.navigation));
    let Q = j || z;
    if (Gy.has(x.status) && Q && ct(Q.formMethod))
      await pn($, V, {
        submission: de({}, Q, { formAction: x.location }),
        preventScrollReset: L,
      });
    else {
      let b = Gi(V, j);
      await pn($, V, {
        overrideNavigation: b,
        fetcherSubmission: z,
        preventScrollReset: L,
      });
    }
  }
  async function us(y, x, k, j, z) {
    let U = await Promise.all([
        ...k.map((O) => Lr("loader", z, O, x, o, l, a)),
        ...j.map((O) =>
          O.matches && O.match && O.controller
            ? Lr(
                "loader",
                Nr(e.history, O.path, O.controller.signal),
                O.match,
                O.matches,
                o,
                l,
                a,
              )
            : { type: me.error, error: qe(404, { pathname: O.path }) },
        ),
      ]),
      V = U.slice(0, k.length),
      $ = U.slice(k.length);
    return (
      await Promise.all([
        Ac(
          y,
          k,
          V,
          V.map(() => z.signal),
          !1,
          c.loaderData,
        ),
        Ac(
          y,
          j.map((O) => O.match),
          $,
          j.map((O) => (O.controller ? O.controller.signal : null)),
          !0,
        ),
      ]),
      { results: U, loaderResults: V, fetcherResults: $ }
    );
  }
  function hi() {
    (De = !0),
      mt.push(...mi()),
      B.forEach((y, x) => {
        ce.has(x) && (fn.push(x), It(x));
      });
  }
  function vr(y, x, k) {
    let j = Hr(c.matches, x);
    wl(y), ye({ errors: { [j.route.id]: k }, fetchers: new Map(c.fetchers) });
  }
  function wl(y) {
    let x = c.fetchers.get(y);
    ce.has(y) && !(x && x.state === "loading" && M.has(y)) && It(y),
      B.delete(y),
      M.delete(y),
      I.delete(y),
      ee.delete(y),
      c.fetchers.delete(y);
  }
  function Zp(y) {
    if (s.v7_fetcherPersist) {
      let x = (Z.get(y) || 0) - 1;
      x <= 0 ? (Z.delete(y), ee.add(y)) : Z.set(y, x);
    } else wl(y);
    ye({ fetchers: new Map(c.fetchers) });
  }
  function It(y) {
    let x = ce.get(y);
    W(x, "Expected fetch controller: " + y), x.abort(), ce.delete(y);
  }
  function as(y) {
    for (let x of y) {
      let k = is(x),
        j = Bt(k.data);
      c.fetchers.set(x, j);
    }
  }
  function ss() {
    let y = [],
      x = !1;
    for (let k of I) {
      let j = c.fetchers.get(k);
      W(j, "Expected fetcher: " + k),
        j.state === "loading" && (I.delete(k), y.push(k), (x = !0));
    }
    return as(y), x;
  }
  function cs(y) {
    let x = [];
    for (let [k, j] of M)
      if (j < y) {
        let z = c.fetchers.get(k);
        W(z, "Expected fetcher: " + k),
          z.state === "loading" && (It(k), M.delete(k), x.push(k));
      }
    return as(x), x.length > 0;
  }
  function qp(y, x) {
    let k = c.blockers.get(y) || _r;
    return Oe.get(y) !== x && Oe.set(y, x), k;
  }
  function fs(y) {
    c.blockers.delete(y), Oe.delete(y);
  }
  function Sl(y, x) {
    let k = c.blockers.get(y) || _r;
    W(
      (k.state === "unblocked" && x.state === "blocked") ||
        (k.state === "blocked" && x.state === "blocked") ||
        (k.state === "blocked" && x.state === "proceeding") ||
        (k.state === "blocked" && x.state === "unblocked") ||
        (k.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + x.state,
    );
    let j = new Map(c.blockers);
    j.set(y, x), ye({ blockers: j });
  }
  function ds(y) {
    let { currentLocation: x, nextLocation: k, historyAction: j } = y;
    if (Oe.size === 0) return;
    Oe.size > 1 && Nn(!1, "A router only supports one blocker at a time");
    let z = Array.from(Oe.entries()),
      [U, V] = z[z.length - 1],
      $ = c.blockers.get(U);
    if (
      !($ && $.state === "proceeding") &&
      V({ currentLocation: x, nextLocation: k, historyAction: j })
    )
      return U;
  }
  function mi(y) {
    let x = [];
    return (
      Ze.forEach((k, j) => {
        (!y || y(j)) && (k.cancel(), x.push(j), Ze.delete(j));
      }),
      x
    );
  }
  function bp(y, x, k) {
    if (((m = y), (w = x), (S = k || null), !g && c.navigation === Xi)) {
      g = !0;
      let j = hs(c.location, c.matches);
      j != null && ye({ restoreScrollPosition: j });
    }
    return () => {
      (m = null), (w = null), (S = null);
    };
  }
  function ps(y, x) {
    return (
      (S &&
        S(
          y,
          x.map((j) => Ry(j, c.loaderData)),
        )) ||
      y.key
    );
  }
  function eh(y, x) {
    if (m && w) {
      let k = ps(y, x);
      m[k] = w();
    }
  }
  function hs(y, x) {
    if (m) {
      let k = ps(y, x),
        j = m[k];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function th(y) {
    (o = {}), (u = Hu(y, l, void 0, o));
  }
  return (
    (h = {
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
      navigate: os,
      fetch: Xp,
      revalidate: Qp,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: is,
      deleteFetcher: Zp,
      dispose: On,
      getBlocker: qp,
      deleteBlocker: fs,
      _internalFetchControllers: ce,
      _internalActiveDeferreds: Ze,
      _internalSetRoutes: th,
    }),
    h
  );
}
function by(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ku(e, t, n, r, l, o, i) {
  let u, a;
  if (o != null && i !== "path") {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === o)) {
        a = p;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = qa(
    l || ".",
    ci(u).map((p) => p.pathnameBase),
    on(e.pathname, n) || e.pathname,
    i === "path",
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      a &&
      a.route.index &&
      !es(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Nt([n, s.pathname])),
    Tn(s)
  );
}
function Mc(e, t, n, r) {
  if (!r || !by(r)) return { path: n };
  if (r.formMethod && !ig(r.formMethod))
    return { path: n, error: qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: qe(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = Tp(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ct(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((S, w) => {
                let [g, P] = w;
                return (
                  "" +
                  S +
                  g +
                  "=" +
                  P +
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
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!ct(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
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
  if (r.formData) (a = Yu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = Yu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = zc(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = zc(a));
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
  let v = zt(n);
  return (
    t && v.search && es(v.search) && a.append("index", ""),
    (v.search = "?" + a),
    { path: Tn(v), submission: p }
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
function jc(e, t, n, r, l, o, i, u, a, s, p, v, m, S) {
  let w = S ? Object.values(S)[0] : m ? Object.values(m)[0] : void 0,
    g = e.createURL(t.location),
    P = e.createURL(l),
    d = S ? Object.keys(S)[0] : void 0,
    h = eg(n, d).filter((C, L) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (tg(t.loaderData, t.matches[L], C) || i.some((A) => A === C.route.id))
        return !0;
      let R = t.matches[L],
        T = C;
      return Dc(
        C,
        de(
          {
            currentUrl: g,
            currentParams: R.params,
            nextUrl: P,
            nextParams: T.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              g.pathname + g.search === P.pathname + P.search ||
              g.search !== P.search ||
              Np(R, T),
          },
        ),
      );
    }),
    c = [];
  return (
    a.forEach((C, L) => {
      if (!n.some((oe) => oe.route.id === C.routeId)) return;
      let R = Xn(p, C.path, v);
      if (!R) {
        c.push({
          key: L,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(L),
        A = Xu(R, C.path),
        F = !1;
      s.has(L)
        ? (F = !1)
        : u.includes(L)
          ? (F = !0)
          : T && T.state !== "idle" && T.data === void 0
            ? (F = o)
            : (F = Dc(
                A,
                de(
                  {
                    currentUrl: g,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: P,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: w, defaultShouldRevalidate: o },
                ),
              )),
        F &&
          c.push({
            key: L,
            routeId: C.routeId,
            path: C.path,
            matches: R,
            match: A,
            controller: new AbortController(),
          });
    }),
    [h, c]
  );
}
function tg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Np(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Dc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Oc(e, t, n) {
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
      !a && !ky.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function Lr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    p,
    v = (w) => {
      let g,
        P = new Promise((d, f) => (g = f));
      return (
        (p = () => g()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: u.requestContext }),
          P,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let g,
          P = await Promise.all([
            v(w).catch((d) => {
              g = d;
            }),
            Oc(n.route, o, l),
          ]);
        if (g) throw g;
        s = P[0];
      } else if ((await Oc(n.route, o, l), (w = n.route[e]), w)) s = await v(w);
      else if (e === "action") {
        let g = new URL(t.url),
          P = g.pathname + g.search;
        throw qe(405, { method: t.method, pathname: P, routeId: n.route.id });
      } else return { type: me.data, data: void 0 };
    else if (w) s = await v(w);
    else {
      let g = new URL(t.url),
        P = g.pathname + g.search;
      throw qe(404, { pathname: P });
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
        !_p.test(d))
      )
        d = Ku(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          h = d.startsWith("//") ? new URL(f.protocol + d) : new URL(d),
          c = on(h.pathname, i) != null;
        h.origin === f.origin && c && (d = h.pathname + h.search + h.hash);
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
      P = s.headers.get("Content-Type");
    return (
      P && /\bapplication\/json\b/.test(P)
        ? (g = await s.json())
        : (g = await s.text()),
      a === me.error
        ? { type: a, error: new ba(w, s.statusText, g), headers: s.headers }
        : { type: me.data, data: g, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === me.error) return { type: a, error: s };
  if (lg(s)) {
    var m, S;
    return {
      type: me.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((S = s.init) == null ? void 0 : S.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: me.data, data: s };
}
function Nr(e, t, n, r) {
  let l = e.createURL(Tp(t)).toString(),
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
            ? (o.body = Yu(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Yu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function zc(e) {
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
      let m = t[v].route.id;
      if (
        (W(!tr(p), "Cannot handle redirect results in processLoaderData"),
        Qr(p))
      ) {
        let S = Hr(e, m),
          w = p.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[S.route.id] == null && (i[S.route.id] = w),
          (o[m] = void 0),
          a || ((a = !0), (u = Pp(p.error) ? p.error.status : 500)),
          p.headers && (s[m] = p.headers);
      } else
        xn(p)
          ? (l.set(m, p.deferredData), (o[m] = p.deferredData.data))
          : (o[m] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (u = p.statusCode),
          p.headers && (s[m] = p.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Fc(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = ng(t, n, r, l, u);
  for (let p = 0; p < o.length; p++) {
    let { key: v, match: m, controller: S } = o[p];
    W(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let w = i[p];
    if (!(S && S.signal.aborted))
      if (Qr(w)) {
        let g = Hr(e.matches, m == null ? void 0 : m.route.id);
        (s && s[g.route.id]) || (s = de({}, s, { [g.route.id]: w.error })),
          e.fetchers.delete(v);
      } else if (tr(w)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (xn(w)) W(!1, "Unhandled fetcher deferred data");
      else {
        let g = Bt(w.data);
        e.fetchers.set(v, g);
      }
  }
  return { loaderData: a, errors: s };
}
function Ic(e, t, n, r) {
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
function Hr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Uc(e) {
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
    new ba(e || 500, i, new Error(u), !0)
  );
}
function $c(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (tr(n)) return { result: n, idx: t };
  }
}
function Tp(e) {
  let t = typeof e == "string" ? zt(e) : e;
  return Tn(de({}, t, { hash: "" }));
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
function xn(e) {
  return e.type === me.deferred;
}
function Qr(e) {
  return e.type === me.error;
}
function tr(e) {
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
async function Ac(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((v) => v.route.id === a.route.id),
      p = s != null && !Np(s, a) && (o && o[a.route.id]) !== void 0;
    if (xn(u) && (l || p)) {
      let v = r[i];
      W(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Mp(u, v, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Mp(e, t, n) {
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
function es(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Xu(e, t) {
  let n = typeof t == "string" ? zt(t).search : t.search;
  if (e[e.length - 1].route.index && es(n || "")) return e[e.length - 1];
  let r = ci(e);
  return r[r.length - 1];
}
function Bc(e) {
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
function Gi(e, t) {
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
function Tr(e, t) {
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
function Bt(e) {
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
    let n = e.sessionStorage.getItem(Lp);
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
      e.sessionStorage.setItem(Lp, JSON.stringify(n));
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
 */ function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Co.apply(this, arguments)
  );
}
const vl = E.createContext(null),
  ts = E.createContext(null),
  Dn = E.createContext(null),
  fi = E.createContext(null),
  cn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  jp = E.createContext(null);
function fg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  yl() || W(!1);
  let { basename: r, navigator: l } = E.useContext(Dn),
    { hash: o, pathname: i, search: u } = di(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : Nt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function yl() {
  return E.useContext(fi) != null;
}
function gl() {
  return yl() || W(!1), E.useContext(fi).location;
}
function Dp(e) {
  E.useContext(Dn).static || E.useLayoutEffect(e);
}
function dg() {
  let { isDataRoute: e } = E.useContext(cn);
  return e ? Rg() : pg();
}
function pg() {
  yl() || W(!1);
  let e = E.useContext(vl),
    { basename: t, navigator: n } = E.useContext(Dn),
    { matches: r } = E.useContext(cn),
    { pathname: l } = gl(),
    o = JSON.stringify(ci(r).map((a) => a.pathnameBase)),
    i = E.useRef(!1);
  return (
    Dp(() => {
      i.current = !0;
    }),
    E.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let p = qa(a, JSON.parse(o), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Nt([t, p.pathname])),
          (s.replace ? n.replace : n.push)(p, s.state, s);
      },
      [t, n, o, l, e],
    )
  );
}
const hg = E.createContext(null);
function mg(e) {
  let t = E.useContext(cn).outlet;
  return t && E.createElement(hg.Provider, { value: e }, t);
}
function di(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = E.useContext(cn),
    { pathname: l } = gl(),
    o = JSON.stringify(ci(r).map((i) => i.pathnameBase));
  return E.useMemo(() => qa(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function vg(e, t, n) {
  yl() || W(!1);
  let { navigator: r } = E.useContext(Dn),
    { matches: l } = E.useContext(cn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = gl(),
    s;
  if (t) {
    var p;
    let g = typeof t == "string" ? zt(t) : t;
    u === "/" || ((p = g.pathname) != null && p.startsWith(u)) || W(!1),
      (s = g);
  } else s = a;
  let v = s.pathname || "/",
    m = u === "/" ? v : v.slice(u.length) || "/",
    S = Xn(e, { pathname: m }),
    w = xg(
      S &&
        S.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: Nt([
              u,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? u
                : Nt([
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
        fi.Provider,
        {
          value: {
            location: Co(
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
function yg() {
  let e = Pg(),
    t = Pp(e)
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
const gg = E.createElement(yg, null);
class wg extends E.Component {
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
          cn.Provider,
          { value: this.props.routeContext },
          E.createElement(jp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Sg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = E.useContext(vl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(cn.Provider, { value: t }, r)
  );
}
function xg(e, t, n) {
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
    n && (v = a.route.errorElement || gg);
    let m = t.concat(o.slice(0, s + 1)),
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
          E.createElement(Sg, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? E.createElement(wg, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
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
  ko = (function (e) {
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
  })(ko || {});
function Eg(e) {
  let t = E.useContext(vl);
  return t || W(!1), t;
}
function Cg(e) {
  let t = E.useContext(ts);
  return t || W(!1), t;
}
function kg(e) {
  let t = E.useContext(cn);
  return t || W(!1), t;
}
function zp(e) {
  let t = kg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Pg() {
  var e;
  let t = E.useContext(jp),
    n = Cg(ko.UseRouteError),
    r = zp(ko.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Rg() {
  let { router: e } = Eg(Op.UseNavigateStable),
    t = zp(ko.UseNavigateStable),
    n = E.useRef(!1);
  return (
    Dp(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Co({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function _g(e) {
  return mg(e.context);
}
function Lg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = he.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  yl() && W(!1);
  let u = t.replace(/^\/*/, "/"),
    a = E.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = zt(r));
  let {
      pathname: s = "/",
      search: p = "",
      hash: v = "",
      state: m = null,
      key: S = "default",
    } = r,
    w = E.useMemo(() => {
      let g = on(s, u);
      return g == null
        ? null
        : {
            location: { pathname: g, search: p, hash: v, state: m, key: S },
            navigationType: l,
          };
    }, [u, s, p, v, m, S, l]);
  return w == null
    ? null
    : E.createElement(
        Dn.Provider,
        { value: a },
        E.createElement(fi.Provider, { children: n, value: w }),
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
 */ function cr() {
  return (
    (cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cr.apply(this, arguments)
  );
}
function Fp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Tg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Tg(e);
}
const jg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Dg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ];
function Og(e, t) {
  return qy({
    basename: t == null ? void 0 : t.basename,
    future: cr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: xy({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || zg(),
    routes: e,
    mapRouteProperties: Ng,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function zg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = cr({}, t, { errors: Fg(t.errors) })), t;
}
function Fg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new ba(l.status, l.statusText, l.data, l.internal === !0);
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
const Ip = E.createContext({ isTransitioning: !1 }),
  Ig = E.createContext(new Map()),
  Ug = "startTransition",
  Vc = wh[Ug];
function $g(e) {
  Vc ? Vc(e) : e();
}
class Ag {
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
function Bg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = E.useState(n.state),
    [i, u] = E.useState(),
    [a, s] = E.useState({ isTransitioning: !1 }),
    [p, v] = E.useState(),
    [m, S] = E.useState(),
    [w, g] = E.useState(),
    P = E.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = E.useCallback(
      (R) => {
        d ? $g(R) : R();
      },
      [d],
    ),
    h = E.useCallback(
      (R, T) => {
        let { deletedFetchers: A, unstable_viewTransitionOpts: F } = T;
        A.forEach((oe) => P.current.delete(oe)),
          R.fetchers.forEach((oe, De) => {
            oe.data !== void 0 && P.current.set(De, oe.data);
          }),
          !F ||
          n.window == null ||
          typeof n.window.document.startViewTransition != "function"
            ? f(() => o(R))
            : m && p
              ? (p.resolve(),
                m.skipTransition(),
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
      [n.window, m, p, P, f],
    );
  E.useLayoutEffect(() => n.subscribe(h), [n, h]),
    E.useEffect(() => {
      a.isTransitioning && v(new Ag());
    }, [a.isTransitioning]),
    E.useEffect(() => {
      if (p && i && n.window) {
        let R = i,
          T = p.promise,
          A = n.window.document.startViewTransition(async () => {
            f(() => o(R)), await T;
          });
        A.finished.finally(() => {
          v(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          S(A);
      }
    }, [f, i, p, n.window]),
    E.useEffect(() => {
      p && i && l.location.key === i.location.key && p.resolve();
    }, [p, m, l.location, i]),
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
        push: (R, T, A) =>
          n.navigate(R, {
            state: T,
            preventScrollReset: A == null ? void 0 : A.preventScrollReset,
          }),
        replace: (R, T, A) =>
          n.navigate(R, {
            replace: !0,
            state: T,
            preventScrollReset: A == null ? void 0 : A.preventScrollReset,
          }),
      }),
      [n],
    ),
    C = n.basename || "/",
    L = E.useMemo(
      () => ({ router: n, navigator: c, static: !1, basename: C }),
      [n, c, C],
    );
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(
      vl.Provider,
      { value: L },
      E.createElement(
        ts.Provider,
        { value: l },
        E.createElement(
          Ig.Provider,
          { value: P.current },
          E.createElement(
            Ip.Provider,
            { value: a },
            E.createElement(
              Lg,
              {
                basename: C,
                location: l.location,
                navigationType: l.historyAction,
                navigator: c,
              },
              l.initialized
                ? E.createElement(Vg, { routes: n.routes, state: l })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Vg(e) {
  let { routes: t, state: n } = e;
  return vg(t, void 0, n);
}
const Wg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Hg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qg = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: p,
        unstable_viewTransition: v,
      } = t,
      m = Fp(t, jg),
      { basename: S } = E.useContext(Dn),
      w,
      g = !1;
    if (typeof s == "string" && Hg.test(s) && ((w = s), Wg))
      try {
        let h = new URL(window.location.href),
          c = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          C = on(c.pathname, S);
        c.origin === h.origin && C != null
          ? (s = C + c.search + c.hash)
          : (g = !0);
      } catch {}
    let P = fg(s, { relative: l }),
      d = Xg(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: p,
        relative: l,
        unstable_viewTransition: v,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return E.createElement(
      "a",
      cr({}, m, { href: w || P, onClick: g || o ? r : f, ref: n, target: a }),
    );
  }),
  Kg = E.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: a,
        unstable_viewTransition: s,
        children: p,
      } = t,
      v = Fp(t, Dg),
      m = di(a, { relative: v.relative }),
      S = gl(),
      w = E.useContext(ts),
      { navigator: g } = E.useContext(Dn),
      P = w != null && Gg(m) && s === !0,
      d = g.encodeLocation ? g.encodeLocation(m).pathname : m.pathname,
      f = S.pathname,
      h =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    l ||
      ((f = f.toLowerCase()),
      (h = h ? h.toLowerCase() : null),
      (d = d.toLowerCase()));
    let c = f === d || (!i && f.startsWith(d) && f.charAt(d.length) === "/"),
      C =
        h != null &&
        (h === d || (!i && h.startsWith(d) && h.charAt(d.length) === "/")),
      L = { isActive: c, isPending: C, isTransitioning: P },
      R = c ? r : void 0,
      T;
    typeof o == "function"
      ? (T = o(L))
      : (T = [
          o,
          c ? "active" : null,
          C ? "pending" : null,
          P ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let A = typeof u == "function" ? u(L) : u;
    return E.createElement(
      Qg,
      cr({}, v, {
        "aria-current": R,
        className: T,
        ref: n,
        style: A,
        to: a,
        unstable_viewTransition: s,
      }),
      typeof p == "function" ? p(L) : p,
    );
  });
var Gu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Gu || (Gu = {}));
var Wc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Wc || (Wc = {}));
function Yg(e) {
  let t = E.useContext(vl);
  return t || W(!1), t;
}
function Xg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = dg(),
    s = gl(),
    p = di(e, { relative: i });
  return E.useCallback(
    (v) => {
      if (Mg(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : Tn(s) === Tn(p);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, p, r, l, n, e, o, i, u],
  );
}
function Gg(e, t) {
  t === void 0 && (t = {});
  let n = E.useContext(Ip);
  n == null && W(!1);
  let { basename: r } = Yg(Gu.useViewTransitionState),
    l = di(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = on(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = on(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Qu(l.pathname, i) != null || Qu(l.pathname, o) != null;
}
/*! js-cookie v3.0.5 | MIT */ function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var Jg = {
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
function Ju(e, t) {
  function n(l, o, i) {
    if (!(typeof document > "u")) {
      (i = $l({}, t, i)),
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
        n(l, "", $l({}, o, { expires: -1 }));
      },
      withAttributes: function (l) {
        return Ju(this.converter, $l({}, this.attributes, l));
      },
      withConverter: function (l) {
        return Ju($l({}, this.converter, l), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  );
}
var Zg = Ju(Jg, { path: "/" });
async function pi(e, t = {}) {
  (t.method = t.method || "GET"),
    (t.headers = t.headers || {}),
    t.method.toUpperCase() !== "GET" &&
      ((t.headers["Content-Type"] =
        t.headers["Content-Type"] || "application/json"),
      (t.headers["XSRF-Token"] = Zg.get("XSRF-TOKEN")));
  const n = await window.fetch(e, t);
  if (n.status >= 400) throw n;
  return n;
}
const Up = "session/setUser",
  $p = "session/removeUser",
  ns = (e) => ({ type: Up, payload: e }),
  qg = () => ({ type: $p }),
  bg =
    ({ credential: e, password: t }) =>
    async (n) => {
      const r = await pi("/api/session", {
          method: "POST",
          body: JSON.stringify({ credential: e, password: t }),
        }),
        l = await r.json();
      return n(ns(l.user)), r;
    },
  e0 = () => async (e) => {
    const t = await pi("/api/session"),
      n = await t.json();
    return e(ns(n.user)), t;
  },
  t0 = (e) => async (t) => {
    const { username: n, firstName: r, lastName: l, email: o, password: i } = e,
      u = await pi("/api/users", {
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
    return t(ns(a.user)), u;
  },
  n0 = () => async (e) => {
    const t = await pi("/api/session", { method: "DELETE" });
    return e(qg()), t;
  },
  r0 = { user: null };
function l0(e = r0, t) {
  switch (t.type) {
    case Up:
      return { ...e, user: t.payload };
    case $p:
      return { ...e, user: null };
    default:
      return e;
  }
}
const rs = E.createContext();
function o0({ children: e }) {
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
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx(rs.Provider, { value: u, children: e }),
      N.jsx("div", { ref: t }),
    ],
  });
}
function i0() {
  const { modalRef: e, modalContent: t, closeModal: n } = E.useContext(rs);
  return !e || !e.current || !t
    ? null
    : Nv.createPortal(
        N.jsxs("div", {
          id: "modal",
          children: [
            N.jsx("div", { id: "modal-background", onClick: n }),
            N.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current,
      );
}
const ls = () => E.useContext(rs);
function Hc({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: l, setOnModalClose: o } = ls(),
    i = () => {
      r && o(r), l(e), typeof n == "function" && n();
    };
  return N.jsx("li", { onClick: i, children: t });
}
function u0() {
  const e = si(),
    [t, n] = E.useState(""),
    [r, l] = E.useState(""),
    [o, i] = E.useState({}),
    { closeModal: u } = ls(),
    a = (s) => (
      s.preventDefault(),
      i({}),
      e(bg({ credential: t, password: r }))
        .then(u)
        .catch(async (p) => {
          const v = await p.json();
          v && v.errors && i(v.errors);
        })
    );
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx("h1", { children: "Log In" }),
      N.jsxs("form", {
        onSubmit: a,
        children: [
          N.jsxs("label", {
            children: [
              "Username or Email",
              N.jsx("input", {
                type: "text",
                value: t,
                onChange: (s) => n(s.target.value),
                required: !0,
              }),
            ],
          }),
          N.jsxs("label", {
            children: [
              "Password",
              N.jsx("input", {
                type: "password",
                value: r,
                onChange: (s) => l(s.target.value),
                required: !0,
              }),
            ],
          }),
          o.credential && N.jsx("p", { children: o.credential }),
          N.jsx("button", { type: "submit", children: "Log In" }),
        ],
      }),
    ],
  });
}
function a0() {
  const e = si(),
    [t, n] = E.useState(""),
    [r, l] = E.useState(""),
    [o, i] = E.useState(""),
    [u, a] = E.useState(""),
    [s, p] = E.useState(""),
    [v, m] = E.useState(""),
    [S, w] = E.useState({}),
    { closeModal: g } = ls(),
    P = (d) => (
      d.preventDefault(),
      s === v
        ? (w({}),
          e(
            t0({
              email: t,
              username: r,
              firstName: o,
              lastName: u,
              password: s,
            }),
          )
            .then(g)
            .catch(async (f) => {
              const h = await f.json();
              h != null && h.errors && w(h.errors);
            }))
        : w({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx("h1", { children: "Sign Up" }),
      N.jsxs("form", {
        onSubmit: P,
        children: [
          N.jsxs("label", {
            children: [
              "Email",
              N.jsx("input", {
                type: "text",
                value: t,
                onChange: (d) => n(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.email && N.jsx("p", { children: S.email }),
          N.jsxs("label", {
            children: [
              "Username",
              N.jsx("input", {
                type: "text",
                value: r,
                onChange: (d) => l(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.username && N.jsx("p", { children: S.username }),
          N.jsxs("label", {
            children: [
              "First Name",
              N.jsx("input", {
                type: "text",
                value: o,
                onChange: (d) => i(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.firstName && N.jsx("p", { children: S.firstName }),
          N.jsxs("label", {
            children: [
              "Last Name",
              N.jsx("input", {
                type: "text",
                value: u,
                onChange: (d) => a(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.lastName && N.jsx("p", { children: S.lastName }),
          N.jsxs("label", {
            children: [
              "Password",
              N.jsx("input", {
                type: "password",
                value: s,
                onChange: (d) => p(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.password && N.jsx("p", { children: S.password }),
          N.jsxs("label", {
            children: [
              "Confirm Password",
              N.jsx("input", {
                type: "password",
                value: v,
                onChange: (d) => m(d.target.value),
                required: !0,
              }),
            ],
          }),
          S.confirmPassword && N.jsx("p", { children: S.confirmPassword }),
          N.jsx("button", { type: "submit", children: "Sign Up" }),
        ],
      }),
    ],
  });
}
function s0({ user: e }) {
  const t = si(),
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
      s.preventDefault(), t(n0()), i();
    },
    a = "profile-dropdown" + (n ? "" : " hidden");
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx("button", {
        onClick: o,
        children: N.jsx("i", { className: "fas fa-user-circle" }),
      }),
      N.jsx("ul", {
        className: a,
        ref: l,
        children: e
          ? N.jsxs(N.Fragment, {
              children: [
                N.jsx("li", { children: e.username }),
                N.jsxs("li", { children: [e.firstName, " ", e.lastName] }),
                N.jsx("li", { children: e.email }),
                N.jsx("li", {
                  children: N.jsx("button", {
                    onClick: u,
                    children: "Log Out",
                  }),
                }),
              ],
            })
          : N.jsxs(N.Fragment, {
              children: [
                N.jsx(Hc, {
                  itemText: "Log In",
                  onItemClick: i,
                  modalComponent: N.jsx(u0, {}),
                }),
                N.jsx(Hc, {
                  itemText: "Sign Up",
                  onItemClick: i,
                  modalComponent: N.jsx(a0, {}),
                }),
              ],
            }),
      }),
    ],
  });
}
function c0({ isLoaded: e }) {
  const t = ry((n) => n.session.user);
  return N.jsxs("ul", {
    children: [
      N.jsx("li", { children: N.jsx(Kg, { to: "/", children: "Home" }) }),
      e && N.jsx("li", { children: N.jsx(s0, { user: t }) }),
    ],
  });
}
function f0() {
  const e = si(),
    [t, n] = E.useState(!1);
  return (
    E.useEffect(() => {
      e(e0()).then(() => {
        n(!0);
      });
    }, [e]),
    N.jsxs(N.Fragment, {
      children: [N.jsx(i0, {}), N.jsx(c0, { isLoaded: t }), t && N.jsx(_g, {})],
    })
  );
}
const d0 = Og([
  {
    element: N.jsx(f0, {}),
    children: [
      { path: "/", element: N.jsx("h1", { children: "Welcome!" }) },
      { path: "*", element: N.jsx("h1", { children: "Page Not Found 404" }) },
    ],
  },
]);
function p0() {
  return N.jsx(Bg, { router: d0 });
}
function cl(e) {
  "@babel/helpers - typeof";
  return (
    (cl =
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
    cl(e)
  );
}
function h0(e, t) {
  if (cl(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (cl(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m0(e) {
  var t = h0(e, "string");
  return cl(t) === "symbol" ? t : String(t);
}
function v0(e, t, n) {
  return (
    (t = m0(t)),
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
function Qc(e, t) {
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
function Kc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qc(Object(n), !0).forEach(function (r) {
          v0(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qc(Object(n)).forEach(function (r) {
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
var Yc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ji = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Po = {
    INIT: "@@redux/INIT" + Ji(),
    REPLACE: "@@redux/REPLACE" + Ji(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ji();
    },
  };
function y0(e) {
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
    var P = !0;
    return (
      s(),
      u.push(g),
      function () {
        if (P) {
          if (a) throw new Error(Te(6));
          (P = !1), s();
          var f = u.indexOf(g);
          u.splice(f, 1), (i = null);
        }
      }
    );
  }
  function m(g) {
    if (!y0(g)) throw new Error(Te(7));
    if (typeof g.type > "u") throw new Error(Te(8));
    if (a) throw new Error(Te(9));
    try {
      (a = !0), (o = l(o, g));
    } finally {
      a = !1;
    }
    for (var P = (i = u), d = 0; d < P.length; d++) {
      var f = P[d];
      f();
    }
    return g;
  }
  function S(g) {
    if (typeof g != "function") throw new Error(Te(10));
    (l = g), m({ type: Po.REPLACE });
  }
  function w() {
    var g,
      P = v;
    return (
      (g = {
        subscribe: function (f) {
          if (typeof f != "object" || f === null) throw new Error(Te(11));
          function h() {
            f.next && f.next(p());
          }
          h();
          var c = P(h);
          return { unsubscribe: c };
        },
      }),
      (g[Yc] = function () {
        return this;
      }),
      g
    );
  }
  return (
    m({ type: Po.INIT }),
    (r = { dispatch: m, subscribe: v, getState: p, replaceReducer: S }),
    (r[Yc] = w),
    r
  );
}
function g0(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Po.INIT });
    if (typeof r > "u") throw new Error(Te(12));
    if (typeof n(void 0, { type: Po.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Te(13));
  });
}
function w0(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == "function" && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    g0(n);
  } catch (u) {
    i = u;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var p = !1, v = {}, m = 0; m < o.length; m++) {
      var S = o[m],
        w = n[S],
        g = a[S],
        P = w(g, s);
      if (typeof P > "u") throw (s && s.type, new Error(Te(14)));
      (v[S] = P), (p = p || P !== g);
    }
    return (p = p || o.length !== Object.keys(a).length), p ? v : a;
  };
}
function S0() {
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
function x0() {
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
        (o = S0.apply(void 0, u)(l.dispatch)),
        Kc(Kc({}, l), {}, { dispatch: o })
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
const E0 = Vp,
  C0 = w0({ session: l0 });
let Wp;
Wp = x0(E0);
const k0 = (e) => Ap(C0, e, Wp),
  P0 = k0();
Zi.createRoot(document.getElementById("root")).render(
  N.jsx(lf.StrictMode, {
    children: N.jsx(o0, {
      children: N.jsx(gy, { store: P0, children: N.jsx(p0, {}) }),
    }),
  }),
);
