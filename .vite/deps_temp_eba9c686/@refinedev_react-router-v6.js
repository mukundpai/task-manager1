import {
  Link,
  Navigate,
  NavigationContext,
  Route,
  Routes,
  matchPath,
  useLocation,
  useNavigate,
  useParams
} from "./chunk-AYFTNHPR.js";
import {
  G,
  Ko,
  _o,
  ae,
  it,
  lt,
  pt,
  require_lib,
  st,
  z
} from "./chunk-FY54MMVY.js";
import "./chunk-5OFMTEAY.js";
import "./chunk-NNZF2B5R.js";
import "./chunk-AHJ5QOXT.js";
import {
  require_react
} from "./chunk-HCG2JFOZ.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/@refinedev/react-router-v6/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_qs = __toESM(require_lib(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var d = (e) => {
  if (typeof e > "u")
    return e;
  let t = Number(e);
  return `${t}` === e ? t : e;
};
var x = { addQueryPrefix: true, skipNulls: true, arrayFormat: "indices", encode: false, encodeValuesOnly: true };
var F = { go: () => {
  let { search: e, hash: t } = useLocation(), r = useNavigate();
  return (0, import_react2.useCallback)(({ to: s, type: n, query: o, hash: a, options: { keepQuery: c, keepHash: f } = {} }) => {
    let u = { ...c && e && import_qs.default.parse(e, { ignoreQueryPrefix: true }), ...o };
    u.to && (u.to = encodeURIComponent(`${u.to}`));
    let m = Object.keys(u).length > 0, p = `#${(a || f && t || "").replace(/^#/, "")}`, U = p.length > 1, y = `${s || ""}${m ? import_qs.default.stringify(u, x) : ""}${U ? p : ""}`;
    return n === "path" ? y : r(y, { replace: n === "replace" });
  }, [t, e, r]);
}, back: () => {
  let e = useNavigate();
  return (0, import_react2.useCallback)(() => {
    e(-1);
  }, [e]);
}, parse: () => {
  var c;
  let e = useParams(), { pathname: t, search: r } = useLocation(), { resources: i } = (0, import_react2.useContext)(it), { resource: s, action: n, matchedRoute: o } = import_react.default.useMemo(() => Ko(t, i), [i, t]);
  return Object.entries(e).length === 0 && o && (e = ((c = matchPath(o, t)) == null ? void 0 : c.params) || {}), (0, import_react2.useCallback)(() => {
    let f = import_qs.default.parse(r, { ignoreQueryPrefix: true }), u = { ...e, ...f };
    return { ...s && { resource: s }, ...n && { action: n }, ...(e == null ? void 0 : e.id) && { id: decodeURIComponent(e.id) }, pathname: t, params: { ...u, current: d(u.current), pageSize: d(u.pageSize), to: u.to ? decodeURIComponent(u.to) : void 0 } };
  }, [t, r, e, s, n]);
}, Link: import_react.default.forwardRef(function(t, r) {
  return import_react.default.createElement(Link, { ...t, ref: r });
}) };
var j = (e, t) => {
  let { name: r, list: i, create: s, show: n, edit: o } = e;
  if (typeof i == "string" && t === "list")
    return i;
  if (typeof i == "object" && t === "list")
    return i.path;
  if (typeof s == "string" && t === "create")
    return s;
  if (typeof s == "object" && t === "create")
    return s.path;
  if (typeof n == "string" && t === "show")
    return n;
  if (typeof n == "object" && t === "show")
    return n.path;
  if (typeof o == "string" && t === "edit")
    return o;
  if (typeof o == "object" && t === "edit")
    return o.path;
  let a = `/${r}`, c = `${["edit", "create", "clone", "show"].includes(t) ? t : ""}`, f = `${["edit", "show", "clone"].includes(t) ? ":id" : ""}`;
  return [a, c, f].filter(Boolean).join("/");
};
var N = (e) => e.flatMap((r) => {
  let i = [];
  return ["list", "show", "edit", "create"].forEach((s) => {
    let n = r[s];
    if (typeof n < "u" && typeof n != "string") {
      let o = typeof n == "function" ? n : n.component, a = j(r, s);
      i.push({ action: s, element: o, path: a }), s === "create" && i.push({ action: "clone", element: o, path: a });
    }
  }), i.map(({ action: s, element: n, path: o }) => {
    let a = import_react4.default.createElement(n, null);
    return import_react4.default.createElement(Route, { key: `${s}-${o}`, path: o, element: a });
  });
});
var M = ({ children: e }) => {
  let { resources: t } = z(), r = import_react3.default.useMemo(() => N(t), [t]);
  return e ? e(r) : import_react3.default.createElement(Routes, null, r);
};
var K = ({ resource: e, meta: t }) => {
  let r = lt(), { resource: i, resources: s } = z(e), n = i || s.find((o) => o.list);
  if (n) {
    let o = r({ resource: n, action: "list", meta: t });
    return o ? import_react5.default.createElement(Navigate, { to: o }) : (console.warn("No resource is found to navigate to."), null);
  }
  return console.warn("No resource is found to navigate to."), null;
};
function z2(e, t = true) {
  let { navigator: r } = import_react7.default.useContext(NavigationContext);
  import_react7.default.useEffect(() => {
    if (!t)
      return;
    let i = r.go, s = r.push;
    return r.push = (...n) => {
      e() !== false && s(...n);
    }, r.go = (...n) => {
      e() !== false && i(...n);
    }, () => {
      r.push = s, r.go = i;
    };
  }, [r, e, t]);
}
function T(e, t = true, r, i = false) {
  let s = import_react7.default.useCallback((o) => (o.preventDefault(), o.returnValue = e, o.returnValue), [e]);
  import_react7.default.useEffect(() => (t && !i && window.addEventListener("beforeunload", s), () => {
    window.removeEventListener("beforeunload", s);
  }), [s, t, i]);
  let n = import_react7.default.useCallback(() => {
    let o = window.confirm(e);
    return o && r && r(), o;
  }, [e]);
  z2(n, t);
}
var Y = ({ translationKey: e = "warnWhenUnsavedChanges", message: t = "Are you sure you want to leave? You have unsaved changes." }) => {
  let r = G(), { pathname: i } = useLocation(), { warnWhen: s, setWarnWhen: n } = pt();
  import_react6.default.useEffect(() => () => n == null ? void 0 : n(false), [i]);
  let o = import_react6.default.useMemo(() => r(e, t), [e, t, r]);
  return T(o, s, () => {
    n == null || n(false);
  }), null;
};
var te = ({ to: e }) => {
  let { pathname: t, search: r } = useLocation(), i = `${t}${r}`, s = i.length > 1 ? `?to=${encodeURIComponent(i)}` : "";
  return import_react8.default.createElement(Navigate, { to: `${e}${s}` });
};
function ae2({ handler: e }) {
  var m;
  let t = useLocation(), { action: r, id: i, params: s, pathname: n, resource: o } = ae(), a = G(), c = st(), f = (o == null ? void 0 : o.identifier) ?? (o == null ? void 0 : o.name), u = (o == null ? void 0 : o.label) ?? ((m = o == null ? void 0 : o.meta) == null ? void 0 : m.label) ?? c(f, r === "list" ? "plural" : "singular");
  return (0, import_react9.useLayoutEffect)(() => {
    let p = _o(a, o, r, `${i}`, u);
    e ? document.title = e({ action: r, resource: o, params: s, pathname: n, autoGeneratedTitle: p }) : document.title = p;
  }, [t]), import_react9.default.createElement(import_react9.default.Fragment, null);
}
var me = (e) => {
  let t = G();
  return (0, import_react10.useEffect)(() => {
    e && (typeof e == "string" ? document.title = t(e) : document.title = t(e.i18nKey));
  }, [e]), (r) => {
    typeof r == "string" ? document.title = t(r) : document.title = t(r.i18nKey);
  };
};
export {
  te as CatchAllNavigate,
  ae2 as DocumentTitleHandler,
  K as NavigateToResource,
  M as RefineRoutes,
  Y as UnsavedChangesNotifier,
  F as default,
  x as stringifyConfig,
  me as useDocumentTitle
};
//# sourceMappingURL=@refinedev_react-router-v6.js.map
