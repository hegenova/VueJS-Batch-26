//soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var size=daftarHewan.length;
for(var j=0; j<size-1; j++){
    for(var i=0; i<size-j; i++){
        var temp;
        var comp1=parseInt(daftarHewan[i]);var comp2=parseInt(daftarHewan[i+1]);
        if(comp1>comp2){
            temp=daftarHewan[i+1];
            daftarHewan[i+1]=daftarHewan[i];
            daftarHewan[i]=temp;
        }

    }
}
for(var long=0; long<size; long++){
    console.log(daftarHewan[long]);
}
//soal 2
function introduce(data){
    var solve="Nama saya "+data.name+", umur saya "+data.age+" tahun, alamat saya di "+data.address+", dan saya punya hobby yaitu "+data.hobby; 
    return solve;
}
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
var perkenalan = introduce(data)
console.log(perkenalan)

//soal 3
function hitung_huruf_vokal(a){
var process=a.split("")
var banyak=process.length;
a=null;a=0;
for(var j=0; j<banyak; j++){
    if(process[j]=='a'||process[j]=='A'||process[j]=='i'||process[j]=='I'||process[j]=='u'||process[j]=='U'||process[j]=='e'||process[j]=='E'||process[j]=='o'||process[j]=='O'){
        a++;
    }
}
    return a;
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2) // 3 2

//soal 4
function hitung(b){
    var done=(b*2)-2
;    return done;
}
console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8

