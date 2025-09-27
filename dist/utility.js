"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const editingTask = {
    title: '「Typescriptの基礎を学ぼう」の学習',
};
const summaryTask = {
    id: 1,
    title: 'Todoアプリの開発',
};
const completedTask = {
    id: 2,
    title: '「Javascriptの基礎を学ぼう」の学習',
    completed: true,
};
editingTask.completed = false;
summaryTask.title = 'ポートフォリオの作成';
// completedTask.title = '「Reactの基礎を学ぼう」の学習'; readonlyプロパティなので編集ができない
console.log('---- 編集中のタスク ----');
console.log(editingTask);
console.log('---- 一覧表示用のタスク ----');
console.log(summaryTask);
console.log('---- 完了済みのタスク ----');
console.log(completedTask);
//# sourceMappingURL=utility.js.map