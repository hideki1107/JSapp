  var random = Math.floor(Math.random()*3);

  var aite = document.getElementById("aite");
  var gu = document.getElementById("gu");
  var tyoki = document.getElementById("tyoki");
  var pa = document.getElementById("pa");
  var result = document.getElementById("result");

  var img
  var gugazo = '<img src="js_ジャンケン1.png" width="200">';
  var tyokigazo = '<img src="js_ジャンケン2.png" width="200">';
  var pagazo = '<img src="js_ジャンケン_01-1024x868.png" width="200">';

  var hand

function select(){ 
  pa.innerHTML = '';
  tyoki.innerHTML = '';
  
  if(random === 0){
    hand ='あいこ';
    img = gugazo;
  }else if(random === 1){
    hand ='勝利(^-^)';
    img = tyokigazo;
  }else{
    hand ='負け';
    img = pagazo;
  }
  result.innerHTML = hand;
  aite.innerHTML = img;
}

function select2(){ 
  pa.innerHTML = '';
  gu.innerHTML = '';

  if(random === 0){
    hand ='負け';
    img = gugazo;
  }else if(random === 1){
    hand ='あいこ';
    img = tyokigazo;
  }else{
    hand ='勝利(^-^)';
    img = pagazo;
  }
  result.innerHTML = hand;
  aite.innerHTML = img;
}

function select3(){ 
  tyoki.innerHTML = '';
  gu.innerHTML = '';

  if(random === 0){
    hand ='勝利(^-^)';
    img = gugazo;
  }else if(random === 1){
    hand ='負け';
    img = tyokigazo;
  }else{
    hand ='あいこ';
    img = pagazo;
  }
  result.innerHTML = hand;
  aite.innerHTML = img;
}