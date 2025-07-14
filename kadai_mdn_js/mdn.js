function getTodayDate() {
    const today = new Date();  // 現在の日付と時刻を取得
    console.log(today.toLocaleDateString());  // 日付をコンソールに表示 (ローカライズされた日付形式)
}

getTodayDate();
