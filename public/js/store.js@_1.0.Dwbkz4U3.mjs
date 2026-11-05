import { __esmMin as e } from "./rolldown-runtime.wODCDItq.mjs";
import { init_npm_react_18_2 as t, ue as n, ye as r } from "./react.Ds2Tb_dm.mjs";
import { Data as i, init_framer_PZCE2HD7 as a, useObserveData as o } from "./framer.CYogzDDt.mjs";
function s(e) {
    let t = i({ state: Object.freeze({ ...e }) }),
        a = (e) => {
            typeof e == `function` && (e = e(t.state)), (t.state = Object.freeze({ ...t.state, ...e }));
        },
        s = typeof e == `object` ? Object.freeze({ ...e }) : e,
        c = new Set(),
        l = (e) => {
            typeof e == `function` && (e = e(s)), (s = typeof e == `object` ? Object.freeze({ ...s, ...e }) : e), c.forEach((e) => e(s));
        };
    function u() {
        let [e, i] = r(s);
        return n(() => (c.add(i), () => c.delete(i)), []), o() === !0 ? (o(), [t.state, a]) : [e, l];
    }
    return u;
}
var c = e(() => {
    t(), a();
});
export { s as createStore, c as init_store_js__1_0 };
//# sourceMappingURL=store.js@_1.0.Dwbkz4U3.mjs.map
