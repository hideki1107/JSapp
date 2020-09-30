for (i=1; i<52; i++){
  document.getElementById("aaa").innerHTML += '<div class="card" id="card'+i+'"onclick="cardclick(this,id)"><img src="ura.png"></div>';
}

var array = [];
var hand = [];
var hand2;

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

var shuffled = array;
var num = 0;
var ura = '<img src="ura.png" width="50px" height="74px"></img>';

function cardclick(ele,id){
  clearTimeout(timer)
  if(ele.innerHTML != ""){

    var number = id.match(/[0-9]{1,2}/g);
    var card= shuffled[number-1]
    num++;
    if(num % 2 == 0){
      var timer = setTimeout(hantei,200)
      function hantei(){
      hand.push(card);
        if(hand2 == ele){
          ele.innerHTML = ura;
          hand = [];
        }else if(hand[0] == hand[1]){
          ele.innerHTML = "";
          hand2.innerHTML = "";
          hand = [];
        }else{
          ele.innerHTML = ura;
          hand2.innerHTML = ura;
          hand = [];
          hand2 = "";
        }num = 0;
      } 
    }else{
      hand.push(card);
      hand2 = ele;
      num = 1;
    }


      ele.innerHTML = '<img src="trump/'+card+'.png" width="50px" height="74px">';
  }else{
    if(hand[0] == hand[1]){
    hand2.innerHTML = "";
    ele.innerHTML = "";
    num = 0;
    hand2 = ele;
    hand = [];
    }
  }

}    