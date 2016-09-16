// matematic dasar

//pangkat

var pangkat = function (x, y){
var a = x;
var b = y;
  console.log(Math.pow(a,b));
}
pangkat(2,3);

// akar kuadrat

var akarKuadrat = function (number) {
var c = number;
console.log(Math.sqrt(c));
};
akarKuadrat(9);

//hipotenusa

var hipotenusa = function(x,y) {
var d = x;
var e = y;
var f = 2;
  console.log(Math.sqrt((Math.pow(d, f) + (Math.pow(e, f)))))
}
hipotenusa(3, 4);

// keliling lingkaran

var LK = function(number){
var jari = number;
var hasil = 3.14*jari*jari;
console.log(hasil);
};
LK(7);