var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var index_buku=1
var size=books.length;
function forPromise(sisaWaktu){
    if(index_buku==size){
        return 0;
    }
    readBooksPromise(sisaWaktu,books[index_buku])
        .then(forPromise)
    index_buku++;
}
readBooksPromise(10000,books[0])
    .then(forPromise)