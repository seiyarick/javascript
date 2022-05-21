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
alert(3 + 5);
alert(3 - 5);
alert(3 * 5);
alert(3 % 5);