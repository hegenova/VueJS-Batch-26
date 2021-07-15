//soal 1
var nilai=56

if(nilai>=85){
    nilai='A';
}
else if(nilai>= 75 ){
    nilai='B';
}
else if(nilai>= 65 ){
    nilai='C';
}
else if(nilai>= 55 ){
    nilai='D';
}
else{
    nilai='E';
}
console.log(nilai);
//soal 2
var tanggal = 6;
var bulan = 1;
var tahun = 2002;
switch(bulan){
case 1: {console.log(tanggal+" Januari "+tahun)}break;
case 2: {console.log(tanggal+" Februari "+tahun)}break;
case 3: {console.log(tanggal+" Maret "+tahun)}break;
case 4: {console.log(tanggal+" April "+tahun)}break;
case 5: {console.log(tanggal+" Mei "+tahun)}break;
case 6: {console.log(tanggal+" Juni "+tahun)}break;
case 7: {console.log(tanggal+" Juli "+tahun)}break;
case 8: {console.log(tanggal+" Agustus "+tahun)}break;
case 9: {console.log(tanggal+" September "+tahun)}break;
case 10: {console.log(tanggal+" Oktober "+tahun)}break;
case 11: {console.log(tanggal+" November "+tahun)}break;
case 12: {console.log(tanggal+" Desember "+tahun)}break;
}
//soal 3
var input=6;
for(var j=0; j<input; j++){
    var result='#';
    for(var i=0; i<j; i++){
        result=result+'#';
    }
    console.log(result);
     result=null
}
//soal 4
var first=" - I Love "
var java="Javascript"
var vue="VueJS"
var pro="programming"
var num=7;
var state=0;
for(var j=1; j<=num; j++){

    if(state==0||state==vue){
        console.log(j+first+pro)
        state=pro
    }
    
    else if(state==pro){
        console.log(j+first+java)
        state=java
    }
    else{
        console.log(j+first+vue)
        state=vue
    }
    if(j%3==0){
        var result='#';
    for(var i=0; i<j-1; i++){
        result=result+'#';
     }
     console.log(result)
     result=null
    }
}
