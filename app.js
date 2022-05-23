// let hello = 'Hello World';
// alert(hello);

// //整数を代入
// let init1 = 1;
// alert(init1);

// //負数を代入
// let init2 = -10;

// alert(init2);
// //小数点を代入

// let float1 = 3.14;
// alert(float1);

// //文字列を代入
// let str1 = 'JavaScriptを覚えよう';
// alert(str1);

// let hello = ('Hello' + 'World');
// alert(hello);

// let str1 = ('Hello');
// let str2 = ('World!');
// alert(str1 + str2)

// *条件分岐*

// 条件式が１つの場合
// if(条件1){
//   処理1
// }
// 条件１がtrueの時は処理１を実行

// １つの条件式で処理を２つに分ける場合
// if(条件１){
//   処理１
// }else{
//   処理２
// }
// 条件１を満たすときは処理１、満たさないときは処理２を実行

// ２つの条件式で処理を分ける場合
// if(条件１){
//   処理１
// }else if(条件２){
//   処理２
// }else{
//   条件３
// }
// 条件１を満たす時は処理１、条件２を満たす時は処理２、どちらも満たさないときは処理３を実行

// let orange = 120;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごは同じ値段');
// }else{
//   alert('みかんの値段がリンゴより高い')
// }

// ＊繰り返し処理＊

// while文
// 引数の条件がtrueの間、波括弧の処理が繰り返される

// while(条件){
//   処理
// })

// let max = 150;
// let num = 8;
// let count = 0;

// while(num<max){
//   num = num * 2;
//   count = count + 1;
// }
// alert('2をかけ続けて' + max + "を超えるのに必要だった回数は" + count +'回です');

// do...while文
// do{
//   最低１回は行われる処理(条件式のtrue/falseに関わらない)
// }while(条件式);


// for文
// ・決められた回数の処理を繰り返すときに使用
// ＊「繰り返す回数」を初期値で設定する
// ＊「条件を満たす場合の処理」を記述する

// for(初期値;条件式;増減値){
//   繰り返し処理
// }

// let i;
// let num = 0;

// for(i = 1;i < 11;i++){
//   num = num + i;
// }

// alert('１から１０まで足した結果は' + num + 'です');

// 確認問題
// alert(3 + 5);
// alert(3 - 5);
// alert(3 * 5);
// alert(3 % 5);

// JavaScriptの変数宣言を学ぼう

// 再宣言
// // varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// // letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)
// =>Uncaught SyntaxError: Identifier 'nickname' has already been declared」

// constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)
// =>Uncaught SyntaxError: Identifier 'nickname' has already been declared」

// 再代入
// varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname) 

// // letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro!"
// console.log(nickname)

// constによる再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro!"
// console.log(nickname)

// スコープ
// varのスコープ

// var str = "webcamp"

// function foo(){
//   console.log(str)
//   var y = "hello"
// }
// foo()
// console.log(y)

// letのスコープ
// function foo(){
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for(let i = 0;i < 10 ; i++){
//   console.log(i)
// }

// console.log(i)

// 巻き上げ

// var str = "webcamp"

// function foo(){
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()


// function addString(name){
//   let adc = "Hello" + name;
//   return adc;
// }

// let alertString;
// alertString = addString("webcamp");

// alert(alertString);

// let promptStr = prompt('好きな数字を入力してください')
// alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
// alert('あなたの選んだ手は' + user_hand + 'です')

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3)

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

// ユーザーの手とJavaScriptの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
      }else if (js == 'チョキ'){
        winLoseStr = "あいこ";
      }else if (js == "パー"){
        winLoseStr = "勝ち";
      }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if (js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  
  return winLoseStr;
}



// じゃんけんの手を入力するためのプロンプト欄を作成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー、チョキ、パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaScriptの手を比べる関数を呼び出し、結果をjudgeする
let judge = winLose(user_hand, js_hand)

// 結果を表示する
if (user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert("またチャレンジしてね");
}


