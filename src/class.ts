class Product {
    public name: string;
    private price: number; // Productクラスからでしかアクセスできない
    protected category: string; // 同じクラス内及びサブクラス（継承先クラス）からのみアクセス可能

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // 同じクラス内からはすべてのプロパティにアクセス可能
    describe(): void {
        console.log('---- 同じクラス内からのアクセス ----');
        console.log(`商品名：${this.name}`);
        console.log(`価格：${this.price}`);
        console.log(`カテゴリ：${this.category}`);
    }
}

// Productクラスのサブクラス
class Drink extends Product {
    // サブクラスからはprivate以外のプロパティにアクセス可能
    describe(): void {
        console.log('---- サブクラスからのアクセス ----');
        console.log(`商品名：${this.name}`);
        // console.log(`価格：${this.price}`); // privateなためクラス内でしかアクセスできない
        console.log(`カテゴリ：${this.category}`);
    }
}

// Productクラスをインスタンス化する
const shampoo = new Product('シャンプー', 500, '飲料');
shampoo.describe();

// Drinkクラスをインスタンス化する
const coffee = new Drink('コーヒー', 1500, '飲料');
coffee.describe();

// 外部からはpublicなプロパティにのみアクセス可能
console.log('---- 同じクラス内からのアクセス ----');
console.log(`商品名：${shampoo.name}`);
// console.log(`価格：${shampoo.price}`); // privatyeなのでエラー
// console.log(`カテゴリ：${shampoo.category}`); // サブクラスでもクラス内でもないためエラーが起こる