const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener( 'click', ()=>{
setTimeout(function() {
            document.getElementById("text").innerText = "ボタンをクリックしました";
        }, 2000);
});
