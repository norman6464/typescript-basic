// タスクの基本構造を表す方
type Task = {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

// 編集中のタスクを表す型（どの項目も未入力でOKにする）
// すべてオプションプロパティになる
type EditindTask = Partial<Task>

// 条件に一致したプロパティを適用する
type SummaryTask =  Pick<Task, 'id' | 'title'>;

// 読み取り専用プロパティに変換する
type CompletedTask = Readonly<Task>;

const editingTask: EditindTask = {
    title: '「Typescriptの基礎を学ぼう」の学習',
};

const summaryTask: SummaryTask = {
    id: 1,
    title: 'Todoアプリの開発',
};

const completedTask: CompletedTask = {
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



