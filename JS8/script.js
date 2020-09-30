var array = [];//トランプ箱

for(var m = 1;m <= 13;m++){
  for(var e =1;e <= 4;e++){
    array.push(m)
  }
}

for(i = array.length -1;i>0;i--){
  r = Math.floor(Math.random()*(i+1));
  tmp = array[i];
  array[i] = array[r];
  array[r] = tmp;
}

//ディーラー初期値
var del = document.getElementById("dealer1");//相手1枚目
var del2 = document.getElementById("dealer2");//相手2枚目

del.innerHTML = '<img src="ura.png"></img>'
del2.innerHTML = '<img src="trump/'+array[1]+'.png"></img>';

if(array[0] > 10){
  array[0] = 10;
}
if(array[1] > 10){
  array[1] = 10;
}

var dealer = [array[0],array[1]];//トランプ箱の前から２枚をディーラー手札へ
var dealertotal = dealer[1]+dealer[0];//ディーラーの合計値
console.log(dealer);

//プレイヤー初期値
var you1 = document.getElementById("you1"); //プレイヤー１枚目
var you2 = document.getElementById("you2"); //プレイヤー２枚目

you1.innerHTML = '<img src="trump/'+array[50]+'.png"></img>';
you2.innerHTML = '<img src="trump/'+array[51]+'.png"></img>';

if(array[50] > 10){
  array[50] = 10;
}
if(array[51] > 10){
  array[51] = 10;
}

var total = document.getElementById("total");//プレイヤーの合計画面
var player = [array[50],array[51]];//トランプ箱の後ろから２枚を手札へ
var playertotal = player[0]+player[1];//プレーヤーの合計値
console.log(player);
total.innerHTML = playertotal;

//カードを追加
var button = document.getElementById("b");//オレンジのボタン
var button2 = document.getElementById("c");//GOボタン
var suitti = document.getElementById("suitti");//下のコントローラー部分
var you = document.getElementById("you");//プレイヤー側のテーブル
var enemy = document.getElementById("enemy");//相手側のテーブル
var total2 = document.getElementById("total2");//相手の合計値の画面
var cause = document.getElementById("cause");//シュンってでてくるやつ

if(player[1] == 1 || player[0] == 1){
  if(playertotal == 11){
    win();
  cause.innerHTML = "BLACKJACK!";
  }
}

if(dealer[1] == 1 || dealer[0] == 1){
  if(dealertotal == 11){
    lose();
  cause.innerHTML = "BLACKJACK...";
  }
}

function win(){                 //勝った時の動作が入ってます
  you.innerHTML = "WIN";
  enemy.innerHTML = "LOSE";
  del.innerHTML = '<img src="trump/'+array[0]+'.png"></img>';
  suitti.innerHTML = '<div class="button3" onclick="window.location.reload();">もう一度遊ぶ</div>';
  total2.innerHTML = dealertotal;
}
function lose(){                 //負けた時の動作が入っています
  you.innerHTML = 'LOSE';
  enemy.innerHTML = "WIN";
  del.innerHTML = '<img src="trump/'+array[0]+'.png"></img>'; 
  suitti.innerHTML = '<div class="button3" onclick="window.location.reload();">もう一度遊ぶ</div>';
  total2.innerHTML = dealertotal;
}

var num = 49;   //トランプ箱の後ろから三番目（前から４９番目）を示す数字
var count = 3;　//プレイヤーテーブルの何番目をいじるかの数字
function cardpush(){
  var tuika = document.getElementById("you"+count);//いじるテーブルのデータを代入
  var trumpcard = array[num];//トランプ箱から数字を持ってきて代入

  player.push(trumpcard);//からの手札にin
  tuika.innerHTML = '<div class="card" id="you'+count+'"><img src="trump/'+player[count-1]+'.png"></img></div>'
  if(10 < trumpcard){
    trumpcard = 10;
  }
  if(trumpcard == 1){
    if(playertotal < 11){
      trumpcard = 11;
    }
  }
  playertotal += trumpcard;
  if(playertotal > 21){
    lose();
    cause.innerHTML = "BUST";
  }
  
  num--;
  count++;
  total.innerHTML = playertotal;
}

//判定
var time;
function judge(){
  var uracard = document.getElementById("dealer1");
  total2.innerHTML = dealertotal;
  uracard.innerHTML = '<img src="trump/'+dealer[0]+'.png"></img>';
  time = setInterval(turn,1000);
  suitti.innerHTML = '<div class="button3">相手のターン中です...</div>';  
}

//ディーラーのターン
var num = 3;
var count2 = 3;
function turn(){                // 勝ち負け決まるまで動作しつづける
  var tuika = document.getElementById("dealer"+count2);
  var trumpcard = array[num];
  if(10 < trumpcard){
    trumpcard = 10;
  }
  if(trumpcard == 1){
    if(playertotal < 11){
      trumpcard = 11;
    }
  }
  dealer.push(trumpcard);
  dealertotal += trumpcard;
  tuika.innerHTML = '<img src="trump/'+dealer[count2-1]+'.png"></img>'
  console.log(dealer);
  if(dealertotal >= 17){
    clearInterval(time);
    if(dealertotal > 21){
      win();
    }else if(playertotal<dealertotal){
      lose();
    }else if(playertotal>dealertotal){
      win();
    }
    else if(playertotal == dealertotal){
      cause.innerHTML = "DRAW";
      total2.innerHTML = dealertotal;
      suitti.innerHTML = '<div class="button3" onclick="window.location.reload();">もう一度遊ぶ</div>';
    }
  }
  
  num++;
  count++;
  console.log(dealertotal);
}