var tur = "O";

function klikk(id){
  document.getElementById(id).style.backgroundColor = "#074cbc";
  document.getElementById(id).innerHTML = tur;

  if(tur =="O"){
    tur = "X";
  }
  else{
    tur ="O";
  }
}


function sjekkSeier(symbol){
  sjekkTrePåRad(document.getElementById('d1').innerHTML,document.getElementById('d2').innerHTML,document.getElementById('d3').innerHTML);

  document.getElementById("demo").innerHTML = tur + " vant :)";
}

function sjekkTrePåRad(verdi1,verdi2,verdi3){
  if((verdi1 == verdi2) && (verdi1==verdi3)){
    return true;
  }
  else{
    return false;
  }
}
