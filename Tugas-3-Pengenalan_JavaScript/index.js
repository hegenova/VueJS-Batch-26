

//soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

//jawab 1
var sub2=kedua.toUpperCase()
var sub1=pertama.substr(0,4)+pertama.substr(11,7)+" "+kedua.substr(0,7)+" "+sub2.substr(8,10);
console.log(sub1);

//soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

//jawab 2
var first = parseInt(kataPertama);
var second = parseInt(kataKedua);
var third = parseInt(kataKetiga);
var fourth = parseInt(kataKeempat);

var result=(first%second)+(third*fourth);
console.log(result);

//soal 3
/*var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua; // do your own! 
var kataKetiga; // do your own! 
var kataKeempat; // do your own! 
var kataKelima; // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);*/

//jawab 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substr(4,10); // do your own! 
var kataKetiga = kalimat.substr(15,3); // do your own! 
var kataKeempat = kalimat.substr(19,5); // do your own! 
var kataKelima = kalimat.substr(25,6); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
