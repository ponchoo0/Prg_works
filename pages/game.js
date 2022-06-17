var mode =3;
var flag = 0;
var order =　0;
var squares =[["","",""],["","",""],["","",""]];
var win = [['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22'],
          ['00', '10', '20'],['01', '11', '21'], ['02', '12', '22'],['00', '11', '22'], ['02', '11', '20']];
 
　 function reset1(){
    location.reload();
    }
  function self1(){
      mode =0;
      title.innerHTML="◯×ゲーム"
    }
  function auto1(){
      mode =1;
      title.innerHTML="◯×ゲーム(Auto)"
    }
              
    function game(input){
      var cell = document.getElementById(input);
      var info = document.getElementById("info");
      var title = document.getElementById("title");
    
      if(flag == 1 || squares[input.charAt(0)][input.charAt(1)]!=""){
        alert("もうクリックできません");
        exit;
      }
  

if(mode == 0){
  
  if(order % 2 == 0){
    info.innerHTML="◯の番！";
    cell.innerHTML = "◯";
    squares[input.charAt(0)][input.charAt(1)]="◯";
  }
  else{
    cell.innerHTML = "×";
    squares[input.charAt(0)][input.charAt(1)]="×";
  }
  for(var i =0;i<win.length;i++){
    var cell1 = squares[win[i][0].charAt(0)][win[i][0].charAt(1)];
    var cell2 = squares[win[i][1].charAt(0)][win[i][1].charAt(1)];
    var cell3 = squares[win[i][2].charAt(0)][win[i][2].charAt(1)];
  
    if(cell1 == "◯" && cell2 == "◯" && cell3 =="◯"){
      info.innerHTML ="◯の勝ち！";
      flag =1;
      exit;
    }
    else if(cell1 == "×" && cell2 == "×" && cell3 =="×"){
      info.innerHTML ="×の勝ち！";
      flag =1;
      exit;
    }
    else{
      ;
    }
  }
  
  order +=1;
  
  if(flag == 0){
    if(order == 9){
      info.innerHTML="引き分け！";
    }
    else if(order % 2 == 0){
      info.innerHTML ="◯の番！";
    }
    else{
      info.innerHTML="×の番！";
    }
  }
  }
//自動
else if(mode == 1){
  
    cell.innerHTML = "◯";
    squares[input.charAt(0)][input.charAt(1)]="◯";
  
  for(var i =0;i<win.length;i++){
    var cell1 = squares[win[i][0].charAt(0)][win[i][0].charAt(1)];
    var cell2 = squares[win[i][1].charAt(0)][win[i][1].charAt(1)];
    var cell3 = squares[win[i][2].charAt(0)][win[i][2].charAt(1)];
  
    if(cell1 == "◯" && cell2 == "◯" && cell3 =="◯"){
      info.innerHTML = "◯の勝ち！";
      flag = 1;
      exit;
    }
    else if(order == 4){
     if(!(cell1 == "◯" && cell2 == "◯" && cell3 =="◯")){
       info.innerHTML = "引き分け！";
      exit;
     }
      
    }
    else{
      ;
    }
  }  
  while(true){
    
    if(squares[0][0]=="×" && squares[0][1]=="×"&&squares[0][2]=="×"){
      squares[0][2]="×";
      var pc = document.getElementById(""+0+2);
      pc.innerHTML = "×";
      break;
    }
  
    else if(squares[0][0]=="×" && squares[1][0]=="×"&&squares[2][0]==""){
      squares[2][0]="×";
      var pc = document.getElementById(""+2+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][1]=="×" && squares[1][1]=="×"&&squares[2][1]==""){
      squares[2][1]="×";
      var pc = document.getElementById(""+2+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="×" && squares[1][2]=="×"&&squares[2][2]==""){
      squares[2][2]="×";
      var pc = document.getElementById(""+2+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="×" && squares[2][0]=="×"&&squares[1][0]==""){
      squares[1][0]="×";
      var pc = document.getElementById(""+1+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][1]=="×" && squares[2][1]=="×"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="×" && squares[2][2]=="×"&&squares[1][2]==""){
      squares[1][2]="×";
      var pc = document.getElementById(""+1+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][0]=="×" && squares[2][0]=="×"&&squares[0][0]==""){
      squares[0][0]="×";
      var pc = document.getElementById(""+0+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="×" && squares[2][1]=="×"&&squares[0][1]==""){
      squares[0][1]="×";
      var pc = document.getElementById(""+0+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][2]=="×" && squares[2][2]=="×"&&squares[0][2]==""){
      squares[0][2]="×";
      var pc = document.getElementById(""+0+2);
      pc.innerHTML = "×";
      break;
    }
  
    else if(squares[0][1]=="×" && squares[0][2]=="×"&&squares[0][0]==""){
      squares[0][0]="×";
      var pc = document.getElementById(""+0+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="×" && squares[0][2]=="×"&&squares[0][1]==""){
      squares[0][1]="×";
      var pc = document.getElementById(""+0+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][0]=="×" && squares[1][1]=="×"&&squares[1][2]==""){
      squares[1][2]="×";
      var pc = document.getElementById(""+1+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][0]=="×" && squares[1][2]=="×"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="×" && squares[1][2]=="×"&&squares[1][0]==""){
      squares[1][0]="×";
      var pc = document.getElementById(""+1+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[2][0]=="×" && squares[2][1]=="×"&&squares[2][2]==""){
      squares[2][2]="×";
      var pc = document.getElementById(""+2+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[2][0]=="×" && squares[2][2]=="×"&&squares[2][1]==""){
      squares[2][1]="×";
      var pc = document.getElementById(""+2+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[2][1]=="×" && squares[2][2]=="×"&&squares[2][0]==""){
      squares[2][0]="×";
      var pc = document.getElementById(""+2+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="×" && squares[1][1]=="×"&&squares[2][2]==""){
      squares[2][2]="×";
      var pc = document.getElementById(""+2+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="×" && squares[2][2]=="×"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="×" && squares[2][2]=="×"&&squares[0][0]==""){
      squares[0][0]="×";
      var pc = document.getElementById(""+0+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="×" && squares[2][0]=="×"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="×" && squares[1][1]=="×"&&squares[2][0]==""){
      squares[2][0]="×";
      var pc = document.getElementById(""+2+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="×" && squares[2][0]=="×"&&squares[0][2]==""){
      squares[0][2]="×";
      var pc = document.getElementById(""+0+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="◯" && squares[0][1]=="◯"&&squares[0][2]==""){
      squares[0][2]="×";
      var pc = document.getElementById(""+0+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="◯" && squares[1][0]=="◯"&&squares[2][0]==""){
      squares[2][0]="×";
      var pc = document.getElementById(""+2+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][1]=="◯" && squares[1][1]=="◯"&&squares[2][1]==""){
      squares[2][1]="×";
      var pc = document.getElementById(""+2+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="◯" && squares[1][2]=="◯"&&squares[2][2]==""){
      squares[2][2]="×";
      var pc = document.getElementById(""+2+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="◯" && squares[2][0]=="◯"&&squares[1][0]==""){
      squares[1][0]="×";
      var pc = document.getElementById(""+1+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][1]=="◯" && squares[2][1]=="◯"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="◯" && squares[2][2]=="◯"&&squares[1][2]==""){
      squares[1][2]="×";
      var pc = document.getElementById(""+1+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][0]=="◯" && squares[2][0]=="◯"&&squares[0][0]==""){
      squares[0][0]="×";
      var pc = document.getElementById(""+0+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="◯" && squares[2][1]=="◯"&&squares[0][1]==""){
      squares[0][1]="×";
      var pc = document.getElementById(""+0+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][2]=="◯" && squares[2][2]=="◯"&&squares[0][2]==""){
      squares[0][2]="×";
      var pc = document.getElementById(""+0+2);
      pc.innerHTML = "×";
      break;
    }
  
    else if(squares[0][1]=="◯" && squares[0][2]=="◯"&&squares[0][0]==""){
      squares[0][0]="×";
      var pc = document.getElementById(""+0+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="◯" && squares[0][2]=="◯"&&squares[0][1]==""){
      squares[0][1]="×";
      var pc = document.getElementById(""+0+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][0]=="◯" && squares[1][1]=="◯"&&squares[1][2]==""){
      squares[1][2]="×";
      var pc = document.getElementById(""+1+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][0]=="◯" && squares[1][2]=="◯"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="◯" && squares[1][2]=="◯"&&squares[1][0]==""){
      squares[1][0]="×";
      var pc = document.getElementById(""+1+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[2][0]=="◯" && squares[2][1]=="◯"&&squares[2][2]==""){
      squares[2][2]="×";
      var pc = document.getElementById(""+2+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[2][0]=="◯" && squares[2][2]=="◯"&&squares[2][1]==""){
      squares[2][1]="×";
      var pc = document.getElementById(""+2+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[2][1]=="◯" && squares[2][2]=="◯"&&squares[2][0]==""){
      squares[2][0]="×";
      var pc = document.getElementById(""+2+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="◯" && squares[1][1]=="◯"&&squares[2][2]==""){
      squares[2][2]="×";
      var pc = document.getElementById(""+2+2);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][0]=="◯" && squares[2][2]=="◯"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="◯" && squares[2][2]=="◯"&&squares[0][0]==""){
      squares[0][0]="×";
      var pc = document.getElementById(""+0+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="◯" && squares[2][0]=="◯"&&squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[0][2]=="◯" && squares[1][1]=="◯"&&squares[2][0]==""){
      squares[2][0]="×";
      var pc = document.getElementById(""+2+0);
      pc.innerHTML = "×";
      break;
    }
    else if(squares[1][1]=="◯" && squares[2][0]=="◯"&&squares[0][2]==""){
      squares[0][2]="×";
      var pc = document.getElementById(""+0+2);
      pc.innerHTML = "×";
      break;
    }
  
  
   else if(squares[1][1]==""){
      squares[1][1]="×";
      var pc = document.getElementById(""+1+1);
      pc.innerHTML = "×";
      break;
    }
  
    else{
    var random1 = Math.floor( Math.random()*3);
    var random2 = Math.floor( Math.random()*3);
   if(squares[random1][random2]==""){
      squares[random1][random2] = "×";
      var pc = document.getElementById(""+random1+random2);
      pc.innerHTML = "×";
      break;
   }
    }
  }
  for (var i = 0;i < win.length;i++){
    var cell1 = squares[win[i][0].charAt(0)][win[i][0].charAt(1)];
    var cell2 = squares[win[i][1].charAt(0)][win[i][1].charAt(1)];
    var cell3 = squares[win[i][2].charAt(0)][win[i][2].charAt(1)];
    if(cell1 =="×"&&cell2 =="×" && cell3 =="×"){
      info.innerHTML = "×の勝ち！";
      flag = 1;
      exit;
      }
  }
  order +=1;
  }
}

