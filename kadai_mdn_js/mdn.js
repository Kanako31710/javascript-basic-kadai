function getTodayDate() {
    const today = new Date();
    
    const year = today.getFullYear();  // 年を取得
    const month = String(today.getMonth() + 1).padStart(2, '0');  // 月を取得（0から始まるので+1）
    const day = String(today.getDate()).padStart(2, '0');  // 日を取得
    
    console.log(`${year}年${month}月${day}日`);  // YYYY-MM-DD 形式で表示
}

getTodayDate();