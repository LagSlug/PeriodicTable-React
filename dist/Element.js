var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import elements from './elements';
import { Context } from './PeriodicTable';
var BG_COLORS = {
    'metalloid': '#fef7e0',
    'post transition metal': '#d6f9e8',
    'nonmetal': '#e2eeff',
    'transition metal': '#f3e8fd',
    'halogen': '#eaafea',
    'noble gas': '#ffe7eb',
    'alkali metal': '#d8f8ff',
    'alkaline earth metal': '#ffe7eb',
    'lanthanide': '#dff3ff',
    'actinide': '#ffe6d4'
};
export default function Element(_a) {
    var atomicNumber = _a.atomicNumber;
    var onClick = useContext(Context).onClick;
    var element = elements[atomicNumber - 1];
    if (!element) {
        return _jsx("div", {});
    }
    var bgcolor = BG_COLORS[element.Type] || 'inherit';
    return (_jsxs("div", __assign({ className: "element", onClick: function (e) {
            onClick === null || onClick === void 0 ? void 0 : onClick.apply(null, [e, element]);
        }, style: { backgroundColor: bgcolor, textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', border: '1px solid black', borderRadius: 3, height: '100%', justifyContent: 'center', alignItems: 'center' } }, { children: [_jsx("div", __assign({ className: "symbol" }, { children: element.Symbol })), _jsx("div", __assign({ className: "name", style: { fontSize: "small", width: '100%', overflow: 'hidden', textOverflow: 'ellipsis' } }, { children: element.Name })), _jsx("div", __assign({ className: "weight", style: { fontSize: "small" } }, { children: element['Atomic Weight'] })), _jsx("div", __assign({ className: "number", style: { position: 'absolute', top: 0, left: 1 } }, { children: atomicNumber }))] })));
}
