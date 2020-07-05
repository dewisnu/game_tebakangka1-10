
var chance = 3;
alert('tebak angka 1-10' + '\n kamu punya ' + chance + ' kesempatan');
chance--
while (chance >= 0 ) {
    var user = prompt('masukan angka tebakan');
    var compt = Math.floor(Math.random()*11);

    if (user == compt) {
        alert('TEBAKAN ANDA BENAR'+'\n ANGKA YANG DICARI ' + compt);
        break;
    } else if (chance == 0) {
        alert('kesempatan anda telah habis ');
        break;
    }else if (user > compt ) {
        alert('TEBAKAN ANDA TERLALU TINGGI' + '\n kamu punya ' + chance + ' kesempatan' );
    } else if (user < compt) {
        alert('TEBAKAN ANDA TERLALU RENDAH' + '\n kamu punya ' + chance + ' kesempatan');
  chance--
}
}