var result = [''];
var calc = [''];
var kei = [];

function keisan(num){
  var screen = document.getElementById("gamen");
  if(num === 'clear'){
      num = '';
      result = [''];
      calc =[''];
      screen.innerHTML = 0;
    }
  if(num === '+' || num === '-' || num === '*' || num === '/' || num === ''){
    kigou = result[result.length - 1];
    if(num === '+'){
      if(kigou.match(/[+ \- * /]+/) || result.length == 1){
        screen.innerHTML = result[0];
      }else{result[0] += num;
      result.push(num); 
      screen.innerHTML = result[0];}
    }if(num === '-'){
      if(kigou.match(/[+ \- * /]+/) || result.length == 1){
        screen.innerHTML = result[0];
      }else{result[0] += num;
      result.push(num); 
      screen.innerHTML = result[0];}

    }if(num === '*'){
      if(kigou.match(/[+ \- * /]+/) || result.length == 1){
        screen.innerHTML = result[0];
      }else{result[0] += num;
      result.push(num); 
      screen.innerHTML = result[0];}

    }if(num === '/'){
      if(kigou.match(/[+ \- * /]+/) || result.length == 1){
        screen.innerHTML = result[0];
      }else{result[0] += num;
      result.push(num); 
      screen.innerHTML = result[0];}
    
    }

  }else{
    result[0] += num;
    result.push(num);
    screen.innerHTML = result[0];
  }
} 

function total(calc){
  return calc;

}


function goukei(){
  var total = result[0];

  calc[0] += total.replace(/[+]+/g,'+').replace(/[-]+/g,'-').replace(/[*]+/g,'*').replace(/[/]+/g,'/').replace(/\s/g,'0');
  result[''];

  var aaa = document.getElementById("gamen")
  var bbb = calc[0];
  var ccc = new Function('return ' + bbb)();
  aaa.innerHTML = ccc;
  calc =[''];


  }




console.log(calc);

console.log(result);

