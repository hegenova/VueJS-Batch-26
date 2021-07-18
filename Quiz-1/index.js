//soal 1
function next_date(tanggal, bulan, tahun){
    if(bulan==12&&tanggal==31){
        tahun++;
        tanggal=1;
        console.log(tanggal+" Januari "+tahun);
        return 0;
    }
    if(tahun%4==0){
        if(bulan==2&&tanggal==29){
            tanggal=1;
            console.log(tanggal+" Maret "+tahun)
            return 0;
        }
    }
        if(bulan==2&&tanggal==28){
            tanggal=1;
            console.log(tanggal+" Maret "+tahun)
            return 0;
        }
        else if(bulan==1||bulan==3||bulan==5||bulan==7||bulan==8||bulan==10||bulan==12){
            if(tanggal==31){
                tanggal=1;
                bulan++;
            }
            else if(bulan==4||bulan==6||bulan==9||bulan==11){
                if(tanggal==30){
                    tanggal=1;
                    bulan++;
                }
            }
        }
    
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
    }
    var tanggal=29
    var bulan=2
    var tahun=2020
    next_date(tanggal, bulan, tahun);
    