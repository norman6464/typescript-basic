"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printValue = (value) => {
    // typeod演算子を使って型を絞り込む
    if (typeof value === 'string') {
        // このブロック内ではstring型であることが保証されるので、string型専用のtoUpperCase()メソッドを安全に呼び出せる
        console.log(value.toUpperCase());
    }
    else {
        // number型であることが確定するので安全にメソッドを呼び出す
        console.log(value.toFixed(2));
    }
};
printValue('samurai');
printValue(123.456);
//# sourceMappingURL=type-guard.js.map