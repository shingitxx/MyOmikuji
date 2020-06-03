'use strict';

{
    // const btn = document.getElementById('button');
    // //定数宣言 btn要素にID指定したbuttonを追加
    // btn.addEventListener('click', () =>  {
    //     //btnにイベントを追加 そのイベントはクリックしたら変更する
    //     // const total = ['大吉', '中吉', '小吉', '凶吉'];
    //     // const total = ['大吉', '大吉', '大吉', '凶吉'];
    //     //switch文の短縮　定数totalにおみくじの結果を代入
    //     // const n = Math.floor(Math.random() * total.length);
    //     //定数nを作成　Math.floor randomで小数点切り捨ての3までのランダム整数を生成 をnに代入
    //     //total.lengthはtotal（要素）を増やした際に自動で数をふやしてくれるようにするため
    //     // btn.textContent = total[Math.floor(Math.random() * total.length)];
    //     //関数宣言btnのテキストを変更 配列でくんでいるtotalのrandom関数を組んでいるnを代入

    //     const n = Math.random();
    //     //Math.randomは0以上1未満を生成する
    //     if (n < 0.05) {
    //         btn.textContent = '大吉';
    //     } else if (n < 0.2) {
    //         btn.textContent = '中吉';
    //     } else {
    //         btn.textContent = '凶';
    //     }
    //     //上記の配列をつかった実装も出来るが確率をいじる場合にこのような実装もある

    //     // console.log(n);
    //     // btn.textContent = n;
    //     // btn.textContent = 'hit';
    //     //btn指定 テキスト変更 hitになる

    //     // switch (n) {
    //     //     case 0:
    //     //         button.textContent = '大吉'
    //     //         break;
    //     //     case 1:
    //     //         button.textContent = '中吉'
    //     //         break;
    //     //     case 2:
    //     //         button.textContent = '小吉'
    //     //         break;
    //     // }

    // });



    const btn = document.getElementById('button');
    btn.addEventListener('click', () => {
        // const total = ['大吉', '大吉', '大吉', '凶吉'];
        // btn.textContent = total[Math.floor(Math.random() * total.length)];
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '大吉';
        } else if (n < 0.2) {
            btn.textContent = '中吉';
        } else {
            btn.textContent = '凶吉';
        }
        // console.log(n);
    });
    




}
