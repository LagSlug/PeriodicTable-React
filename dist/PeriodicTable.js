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
import { createContext, useContext } from 'react';
import DefaultElement from './Element';
var SQUARE_SIZE = 75;
var MARGIN = 2.5;
export var Context = createContext({
    onClick: function () { },
    Element: DefaultElement,
    squareSize: SQUARE_SIZE,
    margin: MARGIN
});
var noop = function () { };
export default function PeriodicTable(_a) {
    var onClick = _a.onClick, Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    var context = {
        onClick: onClick || noop,
        Element: Element || DefaultElement,
        squareSize: squareSize || SQUARE_SIZE,
        margin: margin || MARGIN
    };
    return (_jsx("div", __assign({ className: "periodic-table", style: { display: 'inline-block' } }, { children: _jsx("div", __assign({ style: { display: 'flex', flexDirection: 'column' } }, { children: _jsxs(Context.Provider, __assign({ value: context }, { children: [_jsx(Period1, {}), _jsx(Period2, {}), _jsx(Period3, {}), _jsx(Period4, {}), _jsx(Period5, {}), _jsx(Period6, {}), _jsx(Period7, {}), _jsx("div", { style: { height: 0.5 * SQUARE_SIZE } }), _jsx(Period8, {}), _jsx(Period9, {})] })) })) })));
}
function Period1() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-1", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 1 }) })), _jsx(Rectangle, { height: squareSize, width: 16.5 * squareSize + margin * 2 * 16, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 2 }) }))] })));
}
function Period2() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-2", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 3 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 4 }) })), _jsx(Rectangle, { height: squareSize, width: 10.5 * squareSize + margin * 2 * 10, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 5 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 6 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 7 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 8 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 9 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 10 }) }))] })));
}
function Period3() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-3", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 11 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 12 }) })), _jsx(Rectangle, { height: squareSize, width: 10.5 * squareSize + margin * 2 * 10, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 13 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 14 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 15 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 16 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 17 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 18 }) }))] })));
}
function Period4() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-4", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 19 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 20 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 21 }) })), _jsx(Rectangle, { height: squareSize, width: 0.5 * squareSize, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 22 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 23 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 24 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 25 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 26 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 27 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 28 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 29 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 30 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 31 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 32 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 33 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 34 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 35 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 36 }) }))] })));
}
function Period5() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-5", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 37 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 38 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 39 }) })), _jsx(Rectangle, { height: squareSize, width: 0.5 * squareSize, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 40 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 41 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 42 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 43 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 44 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 45 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 46 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 47 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 48 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 49 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 50 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 51 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 52 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 53 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 54 }) }))] })));
}
function Period6() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-6", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 55 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 56 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 57 }) })), _jsx(Rectangle, { height: squareSize, width: 0.5 * squareSize, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 72 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 73 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 74 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 75 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 76 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 77 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 78 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 79 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 80 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 81 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 82 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 83 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 84 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 85 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 86 }) }))] })));
}
function Period7() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-7", style: { display: 'flex' } }, { children: [_jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 87 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 88 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 89 }) })), _jsx(Rectangle, { height: squareSize, width: 0.5 * squareSize, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 104 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 105 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 106 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 107 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 108 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 109 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 110 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 111 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 112 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 113 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 114 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 115 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 116 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 117 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 118 }) }))] })));
}
function Period8() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-8", style: { display: 'flex' } }, { children: [_jsx(Rectangle, { height: squareSize, width: 3.5 * squareSize + 3 * 2 * margin, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 58 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 59 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 60 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 61 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 62 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 63 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 64 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 65 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 66 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 67 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 68 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 69 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 70 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 71 }) }))] })));
}
function Period9() {
    var _a = useContext(Context), Element = _a.Element, squareSize = _a.squareSize, margin = _a.margin;
    return (_jsxs("div", __assign({ className: "period-9", style: { display: 'flex' } }, { children: [_jsx(Rectangle, { height: squareSize, width: 3.5 * squareSize + 3 * 2 * margin, margin: margin }), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 90 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 91 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 92 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 93 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 94 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 95 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 96 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 97 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 98 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 99 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 100 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 101 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 102 }) })), _jsx(Square, __assign({ size: squareSize, margin: margin }, { children: _jsx(Element, { atomicNumber: 103 }) }))] })));
}
function Square(_a) {
    var size = _a.size, margin = _a.margin, children = _a.children;
    return (_jsx("div", __assign({ style: { height: size, width: size, margin: margin } }, { children: children })));
}
function Rectangle(_a) {
    var height = _a.height, width = _a.width, margin = _a.margin;
    return (_jsx("div", { style: { height: height, width: width, margin: margin } }));
}