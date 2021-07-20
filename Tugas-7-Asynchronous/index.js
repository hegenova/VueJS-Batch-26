// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
// Tulis code untuk memanggil function readBooks di sini
var index_buku=1
var size=books.length;
function forCallback(sisaWaktu){
    if(index_buku==size){
        return 0;
    }
    readBooks(sisaWaktu,books[index_buku],forCallback)
    index_buku++;
}
readBooks(10000,books[0],forCallback);
