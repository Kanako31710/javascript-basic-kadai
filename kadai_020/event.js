// output-btnというidを持つHTML要素を取得し、定数を代入する。
const btn = document.getElementById('btn')
const parentList = document.getElementById('text');
// 　HTML要素がクリックされた特にイベントの処理を実行する
btn.addEventListener( 'click', ()=>{
    const childtext = document.createElement('h2');
    text.textContent = 'ボタンをクリックしました';
   
});
