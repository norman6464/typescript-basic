const printValue = (value: string | number): void => {
    // typeod演算子を使って型を絞り込む
    if (typeof value === 'string') {
        // このブロック内ではstring型であることが保証されるので、string型専用のtoUpperCase()メソッドを安全に呼び出せる
        console.log(value.toUpperCase());
    } else {
        // number型であることが確定するので安全にメソッドを呼び出す
        console.log(value.toFixed(2));
    }
}

printValue('samurai');
printValue(123.456);
