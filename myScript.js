class Bil{
  constructor(name){
    this.name = name;
  }
  tut(){
    return this.name;
  }
}

function myFunction() {
 document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function Elise(){
  var x,y,z;
  x = 5;
  y = 6;
  z = x + y;
  for (var i = 0; i < 20; i++) {
    window.alert(z + i);
  }
}

function Iver(){
  var bil = new Bil("Volvo");
  document.getElementById("demo").innerHTML = bil.tut();
}
